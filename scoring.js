(function attachScoring(root) {
  const MAJOR_AXES = [
    "thinking",
    "analysis",
    "selfDevelopment",
    "digitalAiBasics",
    "aiInteraction"
  ];

  const ALL_AXES = [
    ...MAJOR_AXES,
    "hiddenConsistency"
  ];

  function getAnswerScore(answer) {
    if (!answer) {
      return null;
    }

    const score = Number(answer.score);
    return Number.isFinite(score) ? score : null;
  }

  function emptyAxisBuckets() {
    return ALL_AXES.reduce((buckets, axis) => {
      buckets[axis] = { score: 0, max: 0, answered: 0 };
      return buckets;
    }, {});
  }

  function calculateScores(questions, answers) {
    const buckets = emptyAxisBuckets();
    const riskFlags = {};
    let totalScore = 0;
    let totalMax = 0;
    let answeredCount = 0;

    questions.forEach((question) => {
      const axis = question.axis;
      const score = getAnswerScore(answers[question.id]);

      if (!buckets[axis]) {
        buckets[axis] = { score: 0, max: 0, answered: 0 };
      }

      if (score !== null) {
        buckets[axis].score += score;
        buckets[axis].max += 3;
        buckets[axis].answered += 1;
        answeredCount += 1;

        if (MAJOR_AXES.includes(axis)) {
          totalScore += score;
          totalMax += 3;
        }

        if (question.riskFlag) {
          riskFlags[question.riskFlag] = (riskFlags[question.riskFlag] || 0) + 1;
        }
      }
    });

    const axisScores = Object.fromEntries(
      Object.entries(buckets).map(([axis, bucket]) => [
        axis,
        bucket.max === 0 ? 0 : Math.round((bucket.score / bucket.max) * 100)
      ])
    );

    return {
      axisScores,
      overall: totalMax === 0 ? 0 : Math.round((totalScore / totalMax) * 100),
      riskFlags,
      answeredCount,
      totalQuestions: questions.length
    };
  }

  function calculateConsistencyIndex(questions, answers) {
    const groups = {};

    questions.forEach((question) => {
      const score = getAnswerScore(answers[question.id]);
      if (!question.consistencyGroup || score === null) {
        return;
      }

      if (!groups[question.consistencyGroup]) {
        groups[question.consistencyGroup] = [];
      }
      groups[question.consistencyGroup].push(score);
    });

    const groupScores = Object.values(groups)
      .filter((scores) => scores.length > 1)
      .map((scores) => {
        const spread = Math.max(...scores) - Math.min(...scores);
        return Math.max(0, 100 - Math.round((spread / 3) * 100));
      });

    if (groupScores.length === 0) {
      return 100;
    }

    return Math.round(
      groupScores.reduce((sum, score) => sum + score, 0) / groupScores.length
    );
  }

  function recommendTrack(axisScores, consistencyIndex) {
    const thinking = axisScores.thinking || 0;
    const analysis = axisScores.analysis || 0;
    const selfDevelopment = axisScores.selfDevelopment || 0;
    const digitalAiBasics = axisScores.digitalAiBasics || 0;
    const aiInteraction = axisScores.aiInteraction || 0;

    if (consistencyIndex < 50) {
      return {
        track: "Needs Diagnostic Interview",
        label: "مقابلة تشخيصية قبل تحديد المسار",
        nextStep: "تنفيذ مقابلة قصيرة للتحقق من الاتساق وفهم سياق الإجابات."
      };
    }

    if (thinking < 50 && analysis < 50) {
      return {
        track: "24 weeks",
        label: "مسار تأسيسي مكثف لمدة 24 أسبوعا",
        nextStep: "البدء بتقوية التفكير والتحليل من خلال تطبيقات أسبوعية موجهة."
      };
    }

    if (selfDevelopment < 50) {
      return {
        track: "24 weeks with weekly follow-up",
        label: "مسار 24 أسبوعا مع متابعة أسبوعية",
        nextStep: "تحديد أهداف نمو شخصية ومراجعتها أسبوعيا مع المدرب."
      };
    }

    if (
      (digitalAiBasics < 50 || aiInteraction < 50) &&
      thinking >= 50 &&
      analysis >= 50
    ) {
      return {
        track: "16 weeks",
        label: "مسار 16 أسبوعا للجاهزية الرقمية والذكاء الاصطناعي",
        nextStep: "التركيز على مهارات استخدام الأدوات الرقمية والتحقق من مخرجات الذكاء الاصطناعي."
      };
    }

    if (
      thinking > 75 &&
      analysis > 75 &&
      selfDevelopment > 75 &&
      digitalAiBasics > 75 &&
      aiInteraction > 75 &&
      consistencyIndex > 70
    ) {
      return {
        track: "12 weeks advanced",
        label: "مسار متقدم لمدة 12 أسبوعا",
        nextStep: "الانتقال إلى تطبيقات استراتيجية متقدمة ومشروعات قياس أثر."
      };
    }

    return {
      track: "16 weeks",
      label: "مسار تطوير متوازن لمدة 16 أسبوعا",
      nextStep: "بناء خطة تطبيق عملية تغطي نقاط القوة والفجوات ذات الأولوية."
    };
  }

  function runScoringValidation() {
    const questions = [
      { id: "Q1", axis: "thinking", riskFlag: "jumpingToSolutions", consistencyGroup: "CG-1" },
      { id: "Q2", axis: "thinking", riskFlag: "jumpingToSolutions", consistencyGroup: "CG-1" },
      { id: "Q3", axis: "analysis", riskFlag: "weakEvidenceThinking", consistencyGroup: "CG-2" },
      { id: "Q4", axis: "analysis", riskFlag: "weakEvidenceThinking", consistencyGroup: "CG-2" }
    ];
    const answers = {
      Q1: { score: 3 },
      Q2: { score: 3 },
      Q3: { score: 0 },
      Q4: { score: 3 }
    };
    const scores = calculateScores(questions, answers);
    const consistencyIndex = calculateConsistencyIndex(questions, answers);

    return (
      scores.axisScores.thinking === 100 &&
      scores.axisScores.analysis === 50 &&
      scores.overall === 75 &&
      consistencyIndex === 50 &&
      scores.riskFlags.jumpingToSolutions === 2
    );
  }

  const api = {
    calculateScores,
    calculateConsistencyIndex,
    recommendTrack,
    runScoringValidation
  };

  root.Scoring = api;

  if (typeof module !== "undefined") {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
