# Cognitive & AI Readiness Assessment Platform

منصة ويب ثابتة باللغة العربية واتجاه RTL لتقييم الجاهزية المعرفية والجاهزية للتعامل مع الذكاء الاصطناعي. تعمل بدون إطار عمل خارجي ويمكن نشرها مباشرة عبر GitHub Pages.

## الملفات

- `index.html`: واجهة البداية، الاختبار، والتقرير.
- `style.css`: التصميم المتجاوب والطباعة.
- `app.js`: إدارة تدفق الاختبار، العشوائية، التنقل، والتحقق.
- `questions.js`: بنك الأسئلة، المحاور، وتسميات المخاطر.
- `scoring.js`: حساب الدرجات، الاتساق، المخاطر، والتوصية.
- `report.js`: بناء التقرير العربي وملخص الإرسال.
- `storage.js`: حفظ التقدم محليا وإرسال النتائج إلى Google Apps Script.
- `config.js`: رابط Web App ومفتاح الوصول.
- `tests/scoring.test.js`: اختبار تحقق بسيط لوحدة التقييم.

## التشغيل المحلي

افتح `index.html` مباشرة في المتصفح، أو شغل خادما محليا بسيطا من مجلد المشروع:

```powershell
python -m http.server 8080
```

ثم افتح:

```text
http://localhost:8080
```

## إعداد Google Sheets

1. أنشئ Google Sheet جديدا.
2. أنشئ ورقة باسم `Results` أو اترك السكربت ينشئها تلقائيا.
3. من Extensions ثم Apps Script، الصق الكود التالي.
4. غير `SPREADSHEET_ID` و `ACCESS_KEY`.
5. انشر السكربت كـ Web App.
6. انسخ رابط Web App إلى `config.js` في `GOOGLE_SCRIPT_URL`.
7. ضع نفس قيمة `ACCESS_KEY` في `config.js`.

```javascript
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
        "Hidden Consistency %",
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
      payload.scores?.hiddenConsistency || "",
      payload.consistencyIndex || "",
      JSON.stringify(payload.riskFlags || {}),
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
```

## النشر عبر GitHub Pages

1. ادفع التغييرات إلى `main` بعد مراجعة Pull Request.
2. من إعدادات المستودع اختر Pages.
3. اختر المصدر `Deploy from a branch`.
4. اختر الفرع `main` والمجلد `/root`.
5. احفظ الإعدادات وانتظر ظهور رابط النشر.

## ملاحظات الخصوصية

النموذج يجمع اسم المشارك، رمز المجموعة، وبريدا اختياريا فقط. لا يطلب رقم هوية، رقم هاتف، بيانات صحية، أو بيانات شخصية حساسة.

## توسيع بنك الأسئلة

الملف `questions.js` يحتوي بنكا مؤقتا مولدا يغطي حصص الفرز والتشخيص. عند إضافة البنك النهائي، حافظ على بنية السؤال:

```javascript
{
  id: "T-001",
  mode: ["screening", "diagnostic"],
  axis: "thinking",
  subAxis: "criticalThinking",
  questionType: "scenario",
  consistencyGroup: "CG-001",
  riskFlag: "jumpingToSolutions",
  text: "نص السؤال بالعربية",
  options: [
    { id: "A", text: "خيار عربي", score: 0 },
    { id: "B", text: "خيار عربي", score: 1 },
    { id: "C", text: "خيار عربي", score: 2 },
    { id: "D", text: "خيار عربي", score: 3 }
  ]
}
```

## التحقق

```powershell
node tests/scoring.test.js
```
