const SPREADSHEET_ID = "PASTE_YOUR_SPREADSHEET_ID_HERE";
const ACCESS_KEY = "CHANGE_ME";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (payload.accessKey !== ACCESS_KEY) {
      return ContentService
        .createTextOutput(JSON.stringify({ ok: false, error: "Unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("Results") || ss.insertSheet("Results");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Result ID",
        "Participant Name",
        "Batch Code",
        "Email",
        "Test Type",
        "Overall Score",
        "Thinking %",
        "Analysis %",
        "Self Development %",
        "Digital AI Basics %",
        "AI Interaction %",
        "Consistency Index",
        "Risk Flags",
        "Recommended Track",
        "Report Summary",
        "Raw Answers JSON"
      ]);
    }

    sheet.appendRow([
      new Date(),
      payload.resultId || "",
      payload.participantName || "",
      payload.batchCode || "",
      payload.email || "",
      payload.testType || "",
      payload.scores?.overall || "",
      payload.scores?.thinking || "",
      payload.scores?.analysis || "",
      payload.scores?.selfDevelopment || "",
      payload.scores?.digitalAiBasics || "",
      payload.scores?.aiInteraction || "",
      payload.consistencyIndex || "",
      JSON.stringify(payload.riskFlags || []),
      payload.recommendedTrack || "",
      payload.reportSummary || "",
      JSON.stringify(payload.answers || [])
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}