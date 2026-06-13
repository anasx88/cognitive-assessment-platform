const CONFIG = {
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyGwARUsKcUM4ZzyAI9uQHDtDXSgie_OB3PYb4-rqshKC9tvUHdrG7JOs3-8UQx2A5d/exec",
  ACCESS_KEY: "CAI_2026_PRIVATE_KEY"
};

if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

if (typeof module !== "undefined") {
  module.exports = CONFIG;
}
