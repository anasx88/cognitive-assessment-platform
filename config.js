const CONFIG = {
  GOOGLE_SCRIPT_URL: "PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE",
  ACCESS_KEY: "CHANGE_ME"
};

if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

if (typeof module !== "undefined") {
  module.exports = CONFIG;
}
