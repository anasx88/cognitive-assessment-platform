(function attachStorage(root) {
  const STORAGE_KEY = "cognitive-ai-assessment-progress";

  function saveProgress(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      participant: state.participant,
      testType: state.testType,
      questionIds: state.questions.map((question) => question.id),
      currentIndex: state.currentIndex,
      answers: state.answers,
      savedAt: new Date().toISOString()
    }));
  }

  function loadProgress() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw);
    } catch (error) {
      clearProgress();
      return null;
    }
  }

  function clearProgress() {
    localStorage.removeItem(STORAGE_KEY);
  }

  async function submitResult(payload) {
    if (
      !root.CONFIG ||
      !root.CONFIG.GOOGLE_SCRIPT_URL ||
      root.CONFIG.GOOGLE_SCRIPT_URL.includes("PASTE_GOOGLE")
    ) {
      throw new Error("لم يتم ضبط رابط Google Apps Script بعد.");
    }

    const response = await fetch(root.CONFIG.GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`فشل الحفظ السحابي: ${response.status}`);
    }

    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.error || "فشل الحفظ السحابي.");
    }

    return data;
  }

  function downloadJsonBackup(payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${payload.resultId || "assessment-result"}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  root.AssessmentStorage = {
    STORAGE_KEY,
    saveProgress,
    loadProgress,
    clearProgress,
    submitResult,
    downloadJsonBackup
  };
})(typeof window !== "undefined" ? window : globalThis);
