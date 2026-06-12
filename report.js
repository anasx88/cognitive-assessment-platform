(function attachReport(root) {
  function formatPercent(value) {
    return `${value}%`;
  }

  function formatRiskFlags(riskFlags) {
    const labels = root.RISK_FLAG_LABELS || {};
    const entries = Object.entries(riskFlags || {})
      .sort((a, b) => b[1] - a[1])
      .filter(([, count]) => count > 0);

    if (entries.length === 0) {
      return ["لا توجد مؤشرات مخاطرة بارزة."];
    }

    return entries.map(([flag, count]) => `${labels[flag] || flag}: ${count}`);
  }

  function getLearnerProfile(axisScores, consistencyIndex) {
    const overallMajor =
      ((axisScores.thinking || 0) +
        (axisScores.analysis || 0) +
        (axisScores.selfDevelopment || 0) +
        (axisScores.digitalAiBasics || 0) +
        (axisScores.aiInteraction || 0)) / 5;

    if (consistencyIndex < 50) {
      return "ملف يحتاج إلى تحقق تشخيصي قبل اعتماد الاستنتاجات النهائية.";
    }

    if (overallMajor >= 75) {
      return "متعلم متقدم يمتلك أساسا قويا ويمكن نقله إلى تطبيقات أعلى تعقيدا.";
    }

    if (overallMajor >= 50) {
      return "متعلم في مرحلة بناء النضج المعرفي والرقمي مع فرص واضحة للتحسن.";
    }

    return "متعلم يحتاج إلى تأسيس منهجي قبل الانتقال إلى تطبيقات مركبة.";
  }

  function getStrengths(axisScores) {
    const labels = root.AXIS_LABELS || {};
    const strengths = Object.entries(axisScores)
      .filter(([axis, score]) => axis !== "hiddenConsistency" && score >= 75)
      .map(([axis]) => labels[axis] || axis);

    return strengths.length > 0
      ? strengths
      : ["لم تظهر قوة عالية مستقرة بعد، ويمكن بناؤها عبر خطة تطبيقية منظمة."];
  }

  function getDevelopmentGaps(axisScores) {
    const labels = root.AXIS_LABELS || {};
    const gaps = Object.entries(axisScores)
      .filter(([axis, score]) => axis !== "hiddenConsistency" && score < 50)
      .map(([axis]) => labels[axis] || axis);

    return gaps.length > 0
      ? gaps
      : ["لا توجد فجوات حرجة، مع وجود فرص لتحسين الجودة والاتساق."];
  }

  function createReportSummary(result) {
    return [
      `الدرجة العامة: ${formatPercent(result.scores.overall)}`,
      `مؤشر اتساق الإجابات: ${formatPercent(result.consistencyIndex)}`,
      `المسار المقترح: ${result.recommendation.label}`
    ].join(" | ");
  }

  function createResultPayload({
    resultId,
    participant,
    testType,
    questions,
    answers,
    scoreResult,
    consistencyIndex,
    recommendation
  }) {
    const timestamp = new Date().toISOString();
    const reportSummary = createReportSummary({
      scores: scoreResult,
      consistencyIndex,
      recommendation
    });

    return {
      accessKey: root.CONFIG.ACCESS_KEY,
      resultId,
      participantName: participant.participantName,
      batchCode: participant.batchCode,
      email: participant.email || "",
      testType,
      timestamp,
      scores: {
        overall: scoreResult.overall,
        ...scoreResult.axisScores
      },
      consistencyIndex,
      riskFlags: scoreResult.riskFlags,
      recommendedTrack: recommendation.track,
      reportSummary,
      answers: Object.entries(answers).map(([questionId, answer]) => {
        const question = questions.find((item) => item.id === questionId);
        return {
          questionId,
          axis: question?.axis,
          subAxis: question?.subAxis,
          consistencyGroup: question?.consistencyGroup,
          riskFlag: question?.riskFlag,
          optionId: answer.optionId,
          score: answer.score
        };
      })
    };
  }

  function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function generateReportHtml(result) {
    const labels = root.AXIS_LABELS || {};
    const axisRows = Object.entries(result.scores.axisScores)
      .map(([axis, score]) => `
        <tr>
          <th scope="row">${labels[axis] || axis}</th>
          <td>${formatPercent(score)}</td>
        </tr>
      `)
      .join("");

    const learnerProfile = getLearnerProfile(
      result.scores.axisScores,
      result.consistencyIndex
    );
    const strengths = getStrengths(result.scores.axisScores);
    const gaps = getDevelopmentGaps(result.scores.axisScores);
    const risks = formatRiskFlags(result.scores.riskFlags);

    return `
      <section class="report-card">
        <div class="report-header">
          <div>
            <p class="eyebrow">تقرير الجاهزية المعرفية والذكاء الاصطناعي</p>
            <h2>نتيجة ${result.participant.participantName}</h2>
          </div>
          <div class="result-badge">${formatPercent(result.scores.overall)}</div>
        </div>

        <div class="report-grid">
          <div><span>رقم النتيجة</span><strong>${result.resultId}</strong></div>
          <div><span>نوع الاختبار</span><strong>${result.testLabel}</strong></div>
          <div><span>المجموعة</span><strong>${result.participant.batchCode}</strong></div>
          <div><span>التاريخ والوقت</span><strong>${new Date(result.timestamp).toLocaleString("ar-SA")}</strong></div>
        </div>

        <div class="report-section">
          <h3>الدرجات</h3>
          <table class="score-table">
            <tbody>${axisRows}</tbody>
          </table>
        </div>

        <div class="report-section">
          <h3>مؤشر اتساق الإجابات</h3>
          <p>${formatPercent(result.consistencyIndex)}</p>
        </div>

        <div class="report-section">
          <h3>ملف المتعلم</h3>
          <p>${learnerProfile}</p>
        </div>

        <div class="two-column">
          <div class="report-section">
            <h3>نقاط القوة</h3>
            <ul>${renderList(strengths)}</ul>
          </div>
          <div class="report-section">
            <h3>فجوات التطوير</h3>
            <ul>${renderList(gaps)}</ul>
          </div>
        </div>

        <div class="report-section">
          <h3>مؤشرات المخاطرة</h3>
          <ul>${renderList(risks)}</ul>
        </div>

        <div class="report-section next-step">
          <h3>المسار المقترح</h3>
          <p><strong>${result.recommendation.label}</strong></p>
          <p>${result.recommendation.nextStep}</p>
        </div>
      </section>
    `;
  }

  root.Report = {
    createResultPayload,
    createReportSummary,
    generateReportHtml,
    getLearnerProfile,
    getStrengths,
    getDevelopmentGaps,
    formatRiskFlags
  };
})(typeof window !== "undefined" ? window : globalThis);

