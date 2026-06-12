const assert = require("assert");
const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
];

const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));
assert(chromePath, "Chrome or Edge is required for the browser smoke test");

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
    }).on("error", reject);
  });
}

async function waitForJson(url, timeoutMs = 8000) {
  const started = Date.now();
  let lastError;

  while (Date.now() - started < timeoutMs) {
    try {
      return await getJson(url);
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }

  throw lastError || new Error(`Timed out waiting for ${url}`);
}

function createCdpClient(webSocketDebuggerUrl) {
  let nextId = 1;
  const pending = new Map();
  const events = [];
  const socket = new WebSocket(webSocketDebuggerUrl);

  socket.addEventListener("message", (message) => {
    const data = JSON.parse(message.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) {
        reject(new Error(data.error.message));
      } else {
        resolve(data.result);
      }
      return;
    }
    events.push(data);
  });

  return new Promise((resolve, reject) => {
    socket.addEventListener("open", () => {
      resolve({
        events,
        send(method, params = {}) {
          const id = nextId++;
          socket.send(JSON.stringify({ id, method, params }));
          return new Promise((commandResolve, commandReject) => {
            pending.set(id, { resolve: commandResolve, reject: commandReject });
          });
        },
        close() {
          socket.close();
        }
      });
    });
    socket.addEventListener("error", reject);
  });
}

async function run() {
  const port = 9333;
  const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "cai-smoke-"));

  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `--user-data-dir=${profileDir}`,
    `--remote-debugging-port=${port}`,
    "about:blank"
  ], { stdio: "ignore" });

  try {
    await waitForJson(`http://127.0.0.1:${port}/json/version`);
    const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`);
    const pageTarget = targets.find((target) => target.type === "page");
    assert(pageTarget, "Chrome did not expose a page target");

    const cdp = await createCdpClient(pageTarget.webSocketDebuggerUrl);
    const errors = [];

    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");

    const fileUrl = `file:///${path.resolve("assessment.html").replace(/\\/g, "/")}?mode=diagnostic`;
    await cdp.send("Page.navigate", { url: fileUrl });
    await new Promise((resolve) => setTimeout(resolve, 700));

    await cdp.send("Runtime.evaluate", {
      expression: `
        document.querySelector("#participantName").value = "مشارك تجريبي";
        document.querySelector("#batchCode").value = "BATCH-01";
        document.querySelector("#startForm").requestSubmit();
      `
    });
    await new Promise((resolve) => setTimeout(resolve, 700));

    const result = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `({
        screen: document.body.dataset.screen,
        questionVisible: Boolean(document.querySelector("#questionText").textContent.trim()),
        options: document.querySelectorAll(".option-card").length,
        progress: document.querySelector("#progressText").textContent,
        appLoaded: Boolean(window.Scoring && window.Report && window.AssessmentStorage)
      })`
    });

    cdp.events.forEach((event) => {
      if (event.method === "Runtime.exceptionThrown") {
        errors.push(event.params.exceptionDetails.text);
      }
      if (
        event.method === "Runtime.consoleAPICalled" &&
        event.params.type === "error"
      ) {
        errors.push(event.params.args.map((arg) => arg.value).join(" "));
      }
    });

    cdp.close();

    assert.deepStrictEqual(errors, []);
    assert.strictEqual(result.result.value.screen, "assessment");
    assert.strictEqual(result.result.value.questionVisible, true);
    assert.strictEqual(result.result.value.options, 4);
    assert.strictEqual(result.result.value.progress, "السؤال 1 من 160");
    assert.strictEqual(result.result.value.appLoaded, true);

    await cdp.send("Runtime.evaluate", {
      expression: `
        for (let index = 0; index < 160; index += 1) {
          document.querySelector(".option-card input").click();
          const nextButton = document.querySelector("#nextButton");
          if (!nextButton.hidden) {
            nextButton.click();
          }
        }
        document.querySelector("#finishButton").click();
      `
    });
    await new Promise((resolve) => setTimeout(resolve, 900));

    const reportResult = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `({
        screen: document.body.dataset.screen,
        reportVisible: document.querySelector("#reportContainer").textContent.includes("النتيجة والتوصية") ||
          document.querySelector("#reportContainer").textContent.includes("تقرير الجاهزية"),
        warningVisible: !document.querySelector("#cloudWarning").hidden,
        downloadEnabled: Boolean(window.AssessmentStorage && document.querySelector("#downloadButton"))
      })`
    });

    assert.strictEqual(reportResult.result.value.screen, "report");
    assert.strictEqual(reportResult.result.value.reportVisible, true);
    assert.strictEqual(reportResult.result.value.warningVisible, true);
    assert.strictEqual(reportResult.result.value.downloadEnabled, true);

    console.log("Browser smoke test passed");
  } finally {
    chrome.kill();
    fs.rmSync(profileDir, { recursive: true, force: true });
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
