(function attachApp(root) {
  const state = {
    participant: null,
    testType: "screening",
    questions: [],
    currentIndex: 0,
    answers: {},
    finalPayload: null
  };

  const dom = {};

  function $(selector) {
    return document.querySelector(selector);
  }

  function shuffle(items) {
    return [...items]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.value);
  }

  function generateResultId() {
    const stamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `CAI-${stamp}-${randomPart}`;
  }

  function getQuestionsByIds(ids) {
    return ids
      .map((id) => root.QUESTION_BANK.find((question) => question.id === id))
      .filter(Boolean);
  }

  function buildAssessmentQuestions(testType) {
    const config = root.TEST_MODE_CONFIG[testType];
    const selected = [];

    Object.entries(config.quotas).forEach(([axis, quota]) => {
      const axisQuestions = root.QUESTION_BANK.filter((question) =>
        question.axis === axis && question.mode.includes(testType)
      );
      selected.push(...shuffle(axisQuestions).slice(0, quota));
    });

    return shuffle(selected).map((question) => ({
      ...question,
      displayOptions: shuffle(question.options)
    }));
  }

  function answeredTotal() {
    return Object.keys(state.answers).length;
  }

  function isComplete() {
    return answeredTotal() === state.questions.length;
  }

  function setScreen(screenName) {
    document.body.dataset.screen = screenName;
  }

  function updateProgress() {
    const total = state.questions.length || 1;
    const current = Math.min(state.currentIndex + 1, total);
    const percent = Math.round((answeredTotal() / total) * 100);

    dom.progressBar.style.width = `${percent}%`;
    dom.progressText.textContent = `السؤال ${current} من ${total}`;
    dom.answeredText.textContent = `${answeredTotal()} إجابة مكتملة`;
  }

  function renderQuestion() {
    const question = state.questions[state.currentIndex];
    if (!question) {
      return;
    }

    const selectedAnswer = state.answers[question.id];
    dom.questionText.textContent = question.text;
    dom.optionList.innerHTML = "";

    question.displayOptions.forEach((option) => {
      const optionId = `${question.id}-${option.id}`;
      const label = document.createElement("label");
      label.className = "option-card";
      label.htmlFor = optionId;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.id = optionId;
      input.value = option.id;
      input.checked = selectedAnswer?.optionId === option.id;
      input.addEventListener("change", () => {
        state.answers[question.id] = {
          optionId: option.id,
          optionText: option.text,
          score: option.score
        };
        root.AssessmentStorage.saveProgress(state);
        renderQuestion();
      });

      const span = document.createElement("span");
      span.textContent = option.text;

      label.append(input, span);
      dom.optionList.appendChild(label);
    });

    dom.prevButton.disabled = state.currentIndex === 0;
    dom.nextButton.hidden = state.currentIndex === state.questions.length - 1;
    dom.finishButton.hidden = state.currentIndex !== state.questions.length - 1;
    dom.finishButton.disabled = !isComplete();
    dom.missingNotice.hidden = isComplete();
    dom.nextButton.disabled = !state.answers[question.id];
    updateProgress();
  }

  function startAssessment(participant, testType) {
    state.participant = participant;
    state.testType = testType;
    state.questions = buildAssessmentQuestions(testType);
    state.currentIndex = 0;
    state.answers = {};
    state.finalPayload = null;
    root.AssessmentStorage.saveProgress(state);
    setScreen("assessment");
    renderQuestion();
  }

  function resumeAssessment(saved) {
    state.participant = saved.participant;
    state.testType = saved.testType;
    state.questions = getQuestionsByIds(saved.questionIds).map((question) => ({
      ...question,
      displayOptions: shuffle(question.options)
    }));
    state.currentIndex = Math.min(saved.currentIndex || 0, state.questions.length - 1);
    state.answers = saved.answers || {};
    state.finalPayload = null;
    setScreen("assessment");
    renderQuestion();
  }

  function getParticipantFromForm() {
    return {
      participantName: $("#participantName").value.trim(),
      batchCode: $("#batchCode").value.trim(),
      email: $("#email").value.trim()
    };
  }

  function validateParticipant(participant) {
    if (!participant.participantName || !participant.batchCode) {
      return "يرجى إدخال اسم المشارك ورمز المجموعة قبل البدء.";
    }

    if (participant.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(participant.email)) {
      return "يرجى إدخال بريد إلكتروني صحيح أو تركه فارغا.";
    }

    return "";
  }

  function getRequestedTestType() {
    const mode = new URLSearchParams(window.location.search).get("mode");
    return root.TEST_MODE_CONFIG[mode] ? mode : "screening";
  }


  function getBestAnswerText(question) {
    const maxScore = Math.max(...question.options.map((option) => option.score));
    return question.options
      .filter((option) => option.score === maxScore)
      .map((option) => `${option.id}: ${option.text}`)
      .join(" | ");
  }

  function buildAnswerReviewData(questions, answers) {
    const reviewRows = questions.map((question) => {
      const selected = answers[question.id];
      const selectedOption = question.options.find((option) => option.id === selected?.optionId);
      const selectedScore = selectedOption ? selectedOption.score : null;
      const riskTriggered = Boolean(question.riskFlag && selectedScore !== null && selectedScore <= 1);
      const borderline = Boolean(selectedScore === 2);

      let reviewerDecision = "لا تحتاج مراجعة";
      if (riskTriggered) {
        reviewerDecision = "مؤثرة: إجابة منخفضة فعّلت مؤشر مخاطرة";
      } else if (borderline) {
        reviewerDecision = "مراجعة خفيفة: إجابة جزئية أو تفسير منفرد";
      }

      return {
        questionId: question.id,
        axis: question.axis,
        subAxis: question.subAxis || "",
        questionType: question.questionType || "",
        riskFlag: question.riskFlag || "",
        questionText: question.text,
        selectedOptionId: selectedOption ? selectedOption.id : "",
        selectedAnswer: selectedOption ? selectedOption.text : "",
        selectedScore,
        bestAnswer: getBestAnswerText(question),
        riskTriggered,
        borderline,
        reviewerDecision
      };
    });

    const triggeredRiskAnswers = reviewRows.filter((row) => row.riskTriggered);
    const borderlineReviewAnswers = reviewRows.filter((row) => row.borderline);

    return {
      answerReviewSummary: {
        totalQuestions: questions.length,
        triggeredRiskCount: triggeredRiskAnswers.length,
        borderlineReviewCount: borderlineReviewAnswers.length,
        summaryText: `مخاطر مؤثرة: ${triggeredRiskAnswers.length} | إجابات تحتاج مراجعة خفيفة: ${borderlineReviewAnswers.length}`
      },
      triggeredRiskAnswers,
      borderlineReviewAnswers
    };
  }

  function calculatePerfectPatternIndex(questions, answers) {
    const answeredRows = questions.map((question) => {
      const selected = answers[question.id];
      const selectedOption = question.options.find((option) => option.id === selected?.optionId);
      const selectedScore = selectedOption ? selectedOption.score : null;

      return {
        questionId: question.id,
        axis: question.axis,
        questionType: question.questionType || "",
        selectedScore
      };
    }).filter((row) => row.selectedScore !== null);

    const totalAnswered = answeredRows.length;
    const perfectAnswers = answeredRows.filter((row) => row.selectedScore === 3);

    const impressionSensitiveRows = answeredRows.filter((row) =>
      ["selfReport", "selfAssessment", "projection", "pressure"].includes(row.questionType)
    );

    const perfectImpressionSensitive = impressionSensitiveRows.filter((row) => row.selectedScore === 3);

    const perfectAnswerRate = totalAnswered
      ? Math.round((perfectAnswers.length / totalAnswered) * 100)
      : 0;

    const perfectImpressionSensitiveRate = impressionSensitiveRows.length
      ? Math.round((perfectImpressionSensitive.length / impressionSensitiveRows.length) * 100)
      : 0;

    let level = "منخفض";
    let reviewerNote = "نمط الإجابات لا يشير إلى مثالية مفرطة.";

    if (perfectAnswerRate >= 95 && perfectImpressionSensitiveRate >= 90) {
      level = "مرتفع";
      reviewerNote = "احتمال وجود نمط إجابات مثالية أو انطباعية مرتفع. لا يعني ذلك عدم صدق النتيجة، لكنه يستحق مراجعة بشرية.";
    } else if (perfectAnswerRate >= 85 && perfectImpressionSensitiveRate >= 80) {
      level = "متوسط";
      reviewerNote = "يوجد ميل ملحوظ نحو الإجابات المثالية، ويستحسن قراءة النتيجة مع مراجعة نمط الإجابات.";
    }

    return {
      perfectPatternIndex: perfectAnswerRate,
      perfectAnswerCount: perfectAnswers.length,
      totalAnswered,
      perfectImpressionSensitiveRate,
      perfectImpressionSensitiveCount: perfectImpressionSensitive.length,
      impressionSensitiveCount: impressionSensitiveRows.length,
      level,
      reviewerNote,
      summaryText: `مؤشر النمط المثالي: ${perfectAnswerRate}% | أسئلة السلوك/الانطباع المثالية: ${perfectImpressionSensitiveRate}% | المستوى: ${level}`
    };
  }
  async function finishAssessment() {
    if (!isComplete()) {
      dom.missingNotice.hidden = false;
      return;
    }

    dom.finishButton.disabled = true;
    dom.finishButton.textContent = "جار إنشاء التقرير...";

    const scores = root.Scoring.calculateScores(state.questions, state.answers);
    const consistencyIndex = root.Scoring.calculateConsistencyIndex(
      state.questions,
      state.answers
    );
    const recommendation = root.Scoring.recommendTrack(
      scores.axisScores,
      consistencyIndex
    );
    const resultId = generateResultId();
    const timestamp = new Date().toISOString();
    const result = {
      resultId,
      timestamp,
      participant: state.participant,
      testType: state.testType,
      testLabel: root.TEST_MODE_CONFIG[state.testType].label,
      scores,
      consistencyIndex,
      recommendation
    };

    const payload = root.Report.createResultPayload({
      resultId,
      participant: state.participant,
      testType: state.testType,
      questions: state.questions,
      answers: state.answers,
      scoreResult: scores,
      consistencyIndex,
      recommendation
    });

    const answerReviewData = buildAnswerReviewData(state.questions, state.answers);
    payload.answerReviewSummary = answerReviewData.answerReviewSummary;
    payload.triggeredRiskAnswers = answerReviewData.triggeredRiskAnswers;
    payload.borderlineReviewAnswers = answerReviewData.borderlineReviewAnswers;
    payload.answerReviewSummaryText = answerReviewData.answerReviewSummary.summaryText;
    payload.triggeredRiskAnswersJson = JSON.stringify(answerReviewData.triggeredRiskAnswers);
    payload.borderlineReviewAnswersJson = JSON.stringify(answerReviewData.borderlineReviewAnswers);

    const perfectPatternData = calculatePerfectPatternIndex(state.questions, state.answers);
    payload.perfectPatternSummary = perfectPatternData;
    payload.perfectPatternIndex = perfectPatternData.perfectPatternIndex;
    payload.perfectPatternLevel = perfectPatternData.level;
    payload.perfectPatternSummaryText = perfectPatternData.summaryText;
    payload.perfectPatternReviewerNote = perfectPatternData.reviewerNote;

    state.finalPayload = payload;
    dom.reportContainer.innerHTML = root.Report.generateReportHtml(result);
    dom.cloudWarning.hidden = true;
    dom.cloudSuccess.hidden = true;

    root.AssessmentStorage.clearProgress();
    setScreen("report");
    dom.finishButton.textContent = "إنهاء الاختبار";

    root.AssessmentStorage.submitResult(payload)
      .then(() => {
        dom.cloudSuccess.hidden = false;
      })
      .catch((error) => {
        dom.cloudWarning.textContent =
          "تم إنشاء التقرير محليا، لكن تعذر الحفظ السحابي. يمكنك تنزيل نسخة JSON احتياطية.";
        dom.cloudWarning.hidden = false;
        console.error("Cloud save failed:", error);
      });
  }

  function bindEvents() {
    dom.startForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const participant = getParticipantFromForm();
      const error = validateParticipant(participant);
      dom.formError.textContent = error;

      if (error) {
        return;
      }

      startAssessment(participant, $("#testType").value);
    });

    dom.resumeButton.addEventListener("click", () => {
      const saved = root.AssessmentStorage.loadProgress();
      if (saved) {
        resumeAssessment(saved);
      }
    });

    dom.discardResumeButton.addEventListener("click", () => {
      root.AssessmentStorage.clearProgress();
      dom.resumePanel.hidden = true;
    });

    dom.prevButton.addEventListener("click", () => {
      state.currentIndex = Math.max(0, state.currentIndex - 1);
      root.AssessmentStorage.saveProgress(state);
      renderQuestion();
    });

    dom.nextButton.addEventListener("click", () => {
      const question = state.questions[state.currentIndex];
      if (!state.answers[question.id]) {
        return;
      }
      state.currentIndex = Math.min(state.questions.length - 1, state.currentIndex + 1);
      root.AssessmentStorage.saveProgress(state);
      renderQuestion();
    });

    dom.finishButton.addEventListener("click", finishAssessment);

    dom.startOverButton.addEventListener("click", () => {
      if (confirm("هل تريد بدء اختبار جديد؟ سيتم حذف التقدم الحالي من هذا المتصفح.")) {
        root.AssessmentStorage.clearProgress();
        window.location.reload();
      }
    });

    dom.printButton.addEventListener("click", () => window.print());

    dom.downloadButton.addEventListener("click", () => {
      if (state.finalPayload) {
        root.AssessmentStorage.downloadJsonBackup(state.finalPayload);
      }
    });

    dom.newAssessmentButton.addEventListener("click", () => {
      root.AssessmentStorage.clearProgress();
      window.location.reload();
    });
  }

  function cacheDom() {
    Object.assign(dom, {
      startForm: $("#startForm"),
      formError: $("#formError"),
      resumePanel: $("#resumePanel"),
      resumeButton: $("#resumeButton"),
      discardResumeButton: $("#discardResumeButton"),
      progressBar: $("#progressBar"),
      progressText: $("#progressText"),
      answeredText: $("#answeredText"),
      questionText: $("#questionText"),
      optionList: $("#optionList"),
      prevButton: $("#prevButton"),
      nextButton: $("#nextButton"),
      finishButton: $("#finishButton"),
      missingNotice: $("#missingNotice"),
      startOverButton: $("#startOverButton"),
      reportContainer: $("#reportContainer"),
      cloudWarning: $("#cloudWarning"),
      cloudSuccess: $("#cloudSuccess"),
      printButton: $("#printButton"),
      downloadButton: $("#downloadButton"),
      newAssessmentButton: $("#newAssessmentButton")
    });
  }

  function init() {
    cacheDom();
    bindEvents();
    state.testType = getRequestedTestType();
    $("#testType").value = state.testType;
    setScreen("start");

    const saved = root.AssessmentStorage.loadProgress();
    if (saved && saved.questionIds?.length) {
      dom.resumePanel.hidden = false;
      dom.resumePanel.querySelector("strong").textContent =
        `${root.TEST_MODE_CONFIG[saved.testType]?.label || "اختبار"} - ${saved.participant?.participantName || "مشارك"}`;
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})(window);





