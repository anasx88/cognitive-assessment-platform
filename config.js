const CONFIG = {
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwlbW48GtpU9aa9kfz3FS1G85v5C-ZDLbo-lz5i9I74_y8h0xERiwGOvuXVIvsxfmB9MA/exec",
  ACCESS_KEY: "CAI_2026_PRIVATE_KEY"
};

if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

if (typeof module !== "undefined") {
  module.exports = CONFIG;
}
