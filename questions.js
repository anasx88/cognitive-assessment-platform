const TEST_MODE_CONFIG = {
  screening: {
    label: "اختبار الفرز",
    totalQuestions: 80,
    quotas: {
      thinking: 15,
      analysis: 15,
      selfDevelopment: 15,
      digitalAiBasics: 10,
      aiInteraction: 10,
      hiddenConsistency: 15
    }
  },
  diagnostic: {
    label: "الاختبار التشخيصي",
    totalQuestions: 160,
    quotas: {
      thinking: 30,
      analysis: 30,
      selfDevelopment: 30,
      digitalAiBasics: 20,
      aiInteraction: 20,
      hiddenConsistency: 30
    }
  }
};

const AXES = [
  "thinking",
  "analysis",
  "selfDevelopment",
  "digitalAiBasics",
  "aiInteraction",
  "hiddenConsistency"
];

const AXIS_LABELS = {
  thinking: "التفكير",
  analysis: "التحليل",
  selfDevelopment: "تطوير الذات",
  digitalAiBasics: "الأساسيات الرقمية والذكاء الاصطناعي",
  aiInteraction: "التفاعل مع الذكاء الاصطناعي",
  hiddenConsistency: "مؤشر الاتساق"
};

const RISK_FLAG_LABELS = {
  jumpingToSolutions: "القفز إلى الحلول",
  blamingPeople: "لوم الأشخاص بدلا من تحليل النظام",
  aiOverReliance: "الاعتماد الزائد على الذكاء الاصطناعي",
  avoidingApplication: "تجنب التطبيق العملي",
  lowSelfAwareness: "انخفاض الوعي الذاتي",
  weakEvidenceThinking: "ضعف التفكير بالأدلة",
  lowDigitalReadiness: "انخفاض الجاهزية الرقمية",
  highConsistencyConflict: "ارتفاع تعارض الاتساق"
};

const AXIS_BLUEPRINTS = {
  thinking: {
    prefix: "T",
    count: 30,
    screeningCount: 15,
    subAxes: ["criticalThinking", "systemsThinking", "decisionQuality"],
    riskFlags: ["jumpingToSolutions", "blamingPeople"],
    stems: [
      "عندما تواجه مشكلة عمل غامضة، كيف تبدأ عادة؟",
      "إذا اقترح الفريق حلا سريعا قبل فهم السبب، ماذا تفعل؟",
      "عند اختلاف الآراء في اجتماع مهم، كيف تتعامل مع الموقف؟",
      "إذا ظهرت نتيجة غير متوقعة في مبادرة تدريبية، ما أول خطوة لديك؟",
      "عندما يكون الوقت محدودا والقرار مهم، كيف توازن بين السرعة والجودة؟",
      "إذا كان الحل الشائع لا يعالج أصل المشكلة، كيف تتصرف؟",
      "عند تقييم فكرة جديدة، ما السلوك الأقرب لطريقتك؟",
      "إذا تلقيت ملاحظات متعارضة من أصحاب مصلحة مختلفين، ماذا تفعل؟",
      "عندما تتكرر المشكلة نفسها رغم الحلول السابقة، كيف تقرأ ذلك؟",
      "إذا شعرت أن رأيك هو الأقوى، كيف تتحقق من صلابته؟"
    ]
  },
  analysis: {
    prefix: "A",
    count: 30,
    screeningCount: 15,
    subAxes: ["dataReasoning", "evidenceQuality", "patternRecognition"],
    riskFlags: ["weakEvidenceThinking", "blamingPeople"],
    stems: [
      "عند قراءة تقرير أداء، ما الذي تبحث عنه أولا؟",
      "إذا عرض عليك رقم مرتفع دون سياق، كيف تفسره؟",
      "عند وجود بيانات ناقصة، كيف تبني استنتاجك؟",
      "إذا اختلفت المؤشرات الكمية مع الانطباع العام، ماذا تفعل؟",
      "عند مقارنة برنامجين تدريبيين، ما معيارك الأهم؟",
      "إذا ظهرت علاقة بين متغيرين، كيف تتعامل معها؟",
      "عندما يقدم لك شخص خلاصة جاهزة من البيانات، ما ردك؟",
      "إذا كانت العينة صغيرة لكن النتيجة جذابة، كيف تتصرف؟",
      "عند تحليل سبب انخفاض النتائج، كيف ترتب الأدلة؟",
      "إذا احتجت لاختيار مؤشر نجاح، كيف تختاره؟"
    ]
  },
  selfDevelopment: {
    prefix: "S",
    count: 30,
    screeningCount: 15,
    subAxes: ["selfAwareness", "learningAgility", "feedbackUse"],
    riskFlags: ["lowSelfAwareness", "avoidingApplication"],
    stems: [
      "عندما تكتشف فجوة في مهارة مهمة، ماذا تفعل؟",
      "إذا تلقيت ملاحظة نقدية دقيقة، كيف تتعامل معها؟",
      "عند تعلم أداة جديدة، ما طريقتك المعتادة؟",
      "إذا فشلت تجربة تطبيقية صغيرة، كيف تفسرها؟",
      "عندما تريد تحسين أدائك، كيف تتابع التقدم؟",
      "إذا شعرت بمقاومة داخلية للتغيير، ماذا تفعل؟",
      "عند حضور برنامج تدريبي، ما الذي يهمك بعد الجلسة؟",
      "إذا طلب منك تطبيق مهارة غير مألوفة، كيف تبدأ؟",
      "عندما تتكرر نفس الملاحظة عليك، كيف تستجيب؟",
      "إذا حققت نتيجة جيدة، كيف تطورها أكثر؟"
    ]
  },
  digitalAiBasics: {
    prefix: "D",
    count: 20,
    screeningCount: 10,
    subAxes: ["digitalFluency", "aiConcepts", "toolSelection"],
    riskFlags: ["lowDigitalReadiness", "aiOverReliance"],
    stems: [
      "عند اختيار أداة رقمية لمهمة عمل، ما الذي تراجعه؟",
      "إذا أنتجت أداة ذكاء اصطناعي إجابة واثقة، ماذا تفعل؟",
      "عند التعامل مع ملف بيانات حساس، ما السلوك الأنسب؟",
      "إذا تغيرت واجهة أداة تعتمد عليها، كيف تتصرف؟",
      "عند سماع مصطلح تقني جديد، كيف تفهمه؟",
      "إذا أردت أتمتة مهمة متكررة، كيف تبدأ؟",
      "عند تقييم مخرجات نموذج ذكاء اصطناعي، ما معيارك؟",
      "إذا لم تعرف حدود أداة رقمية، ماذا تفعل؟",
      "عند استخدام بيانات في أداة خارجية، ما أول احتياط؟",
      "إذا ظهرت أداة جديدة واعدة، كيف تقرر تجربتها؟"
    ]
  },
  aiInteraction: {
    prefix: "I",
    count: 20,
    screeningCount: 10,
    subAxes: ["prompting", "validation", "humanJudgment"],
    riskFlags: ["aiOverReliance", "weakEvidenceThinking"],
    stems: [
      "عندما تطلب من الذكاء الاصطناعي تحليلا، كيف تصيغ الطلب؟",
      "إذا كانت إجابة الذكاء الاصطناعي عامة جدا، ماذا تفعل؟",
      "عند استخدام الذكاء الاصطناعي لصنع قرار، ما دورك؟",
      "إذا أعطاك الذكاء الاصطناعي مصادر غير واضحة، كيف تتصرف؟",
      "عند تحسين مخرج مكتوب بالذكاء الاصطناعي، ماذا تراجع؟",
      "إذا أردت مقارنة بدائل باستخدام الذكاء الاصطناعي، كيف توجهه؟",
      "عندما يقترح الذكاء الاصطناعي خطة تنفيذ، ما خطوتك التالية؟",
      "إذا لاحظت تحيزا في المخرج، كيف تعالجه؟",
      "عند مشاركة سياق مع أداة ذكاء اصطناعي، ماذا تختار؟",
      "إذا فشل الطلب الأول، كيف تطور المحادثة؟"
    ]
  },
  hiddenConsistency: {
    prefix: "H",
    count: 30,
    screeningCount: 15,
    subAxes: ["consistencyProbe", "responseStability", "judgmentAlignment"],
    riskFlags: ["highConsistencyConflict"],
    stems: [
      "عندما يتطلب الموقف قرارا غير مريح، ما الأقرب لسلوكك؟",
      "إذا تغيرت صياغة السؤال لكن الفكرة مشابهة، كيف تحافظ على حكمك؟",
      "عند ضغط الوقت، كيف تتعامل مع الأدلة المتاحة؟",
      "إذا قدم شخص ذو سلطة رأيا دون أدلة، ماذا تفعل؟",
      "عندما تبدو الإجابة الاجتماعية أسهل من الإجابة الدقيقة، ماذا تختار؟",
      "إذا تناقض شعورك الأول مع المعطيات، كيف تتحرك؟",
      "عند تقييم نفسك في مهارة مهمة، ما معيارك؟",
      "إذا تغيرت المكافأة المرتبطة بالقرار، كيف تراجع موقفك؟",
      "عندما لا يعرف الآخرون التفاصيل، كيف تعرض مستوى ثقتك؟",
      "إذا تكرر سؤال بمعنى قريب، ما الذي يوجه إجابتك؟"
    ]
  }
};

const OPTION_SETS = [
  [
    "أتصرف بسرعة اعتمادا على الانطباع الأول.",
    "أراجع معلومة أو معلومتين ثم أختار مسارا عمليا.",
    "أجمع الأدلة الأساسية وأقارن بين بديلين واضحين.",
    "أحدد الفرضيات والمعايير وأختبر القرار قبل تعميمه."
  ],
  [
    "أميل إلى الحل الأكثر شيوعا حتى لو كان السياق مختلفا.",
    "أعدل الحل الشائع بما يناسب جزءا من السياق.",
    "أربط الحل بالسبب المحتمل وأتابع أثره.",
    "أفصل السبب عن العرض وأصمم تجربة صغيرة للتحقق."
  ],
  [
    "أعتمد على رأي صاحب الخبرة الأعلى.",
    "أوازن بين الآراء ثم أختار ما يبدو مناسبا.",
    "أطلب أدلة لكل رأي وأبحث عن نقاط الاتفاق.",
    "أبني قرارا على الأدلة والافتراضات وحدود الثقة."
  ]
];

function padNumber(value) {
  return String(value).padStart(3, "0");
}

function buildQuestion(axis, index, blueprint) {
  const optionSet = OPTION_SETS[index % OPTION_SETS.length];
  const isScreening = index <= blueprint.screeningCount;
  const groupNumber = axis === "hiddenConsistency"
    ? Math.ceil(index / 2)
    : index;

  return {
    id: `${blueprint.prefix}-${padNumber(index)}`,
    mode: isScreening ? ["screening", "diagnostic"] : ["diagnostic"],
    axis,
    subAxis: blueprint.subAxes[(index - 1) % blueprint.subAxes.length],
    questionType: index % 3 === 0 ? "selfAssessment" : "scenario",
    consistencyGroup: `CG-${axis}-${padNumber(groupNumber)}`,
    riskFlag: blueprint.riskFlags[(index - 1) % blueprint.riskFlags.length],
    text: `${blueprint.stems[(index - 1) % blueprint.stems.length]} (${index})`,
    options: optionSet.map((text, score) => ({
      id: String.fromCharCode(65 + score),
      text,
      score
    }))
  };
}

// Placeholder bank: generated samples meet the requested 80/160 mode quotas.
// Expand later by replacing or adding objects that keep the same structure.
const QUESTION_BANK = Object.entries(AXIS_BLUEPRINTS).flatMap(([axis, blueprint]) =>
  Array.from({ length: blueprint.count }, (_, index) =>
    buildQuestion(axis, index + 1, blueprint)
  )
);

if (typeof window !== "undefined") {
  window.TEST_MODE_CONFIG = TEST_MODE_CONFIG;
  window.AXES = AXES;
  window.AXIS_LABELS = AXIS_LABELS;
  window.RISK_FLAG_LABELS = RISK_FLAG_LABELS;
  window.QUESTION_BANK = QUESTION_BANK;
}

if (typeof module !== "undefined") {
  module.exports = {
    TEST_MODE_CONFIG,
    AXES,
    AXIS_LABELS,
    RISK_FLAG_LABELS,
    QUESTION_BANK
  };
}
