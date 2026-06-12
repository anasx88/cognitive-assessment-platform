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
  hiddenConsistency: "محور الاتساق الخفي"
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

const QUESTION_BANK = [
  {
    id: "TH-001",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "criticalThinking",
    questionType: "scenario",
    consistencyGroup: "CG-EVIDENCE-01",
    riskFlag: "weakEvidenceThinking",
    text: "عندما تسمع رأيًا قويًا من شخص مؤثر، ما التصرف الأقرب لك غالبًا؟",
    options: [
      { id: "A", text: "أتحقق من الدليل والسياق قبل تبني الرأي.", score: 3 },
      { id: "B", text: "أقبله مؤقتًا إذا كان الشخص صاحب خبرة.", score: 1 },
      { id: "C", text: "أقارنه بتجاربي السابقة فقط.", score: 2 },
      { id: "D", text: "أطبقه بسرعة إذا بدا مفيدًا.", score: 0 }
    ]
  },
  {
    id: "TH-002",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "causalThinking",
    questionType: "scenario",
    consistencyGroup: "CG-CAUSE-01",
    riskFlag: "jumpingToSolutions",
    text: "حدث تراجع مفاجئ في جودة مخرجات فريق عمل. ما أول مدخل تفكير تستخدمه؟",
    options: [
      { id: "A", text: "أقارن الوضع الحالي بما كان عليه سابقًا لتحديد نوع التراجع.", score: 2 },
      { id: "B", text: "أبحث عن أول نقطة ظهر فيها التراجع داخل مسار العمل.", score: 3 },
      { id: "C", text: "أطلب من الفريق تحسين الانتباه في العمل.", score: 1 },
      { id: "D", text: "أقترح تدريبًا سريعًا لتقليل الأخطاء.", score: 1 }
    ]
  },
  {
    id: "TH-003",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "systemsThinking",
    questionType: "scenario",
    consistencyGroup: "CG-SYSTEM-01",
    riskFlag: "blamingPeople",
    text: "إذا تكررت المشكلة مع أكثر من شخص وفي أوقات مختلفة، فما التفسير الأقرب؟",
    options: [
      { id: "A", text: "غالبًا يوجد ضعف عام في الالتزام.", score: 1 },
      { id: "B", text: "قد تكون التعليمات غير واضحة لبعض الأشخاص.", score: 2 },
      { id: "C", text: "الأرجح أن هناك خللًا في النظام أو الإجراء أو طريقة المتابعة.", score: 3 },
      { id: "D", text: "يجب تحديد الشخص الأكثر تسببًا ومحاسبته.", score: 0 }
    ]
  },
  {
    id: "TH-004",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "strategicThinking",
    questionType: "choice",
    consistencyGroup: "CG-DECISION-01",
    riskFlag: "lowSelfAwareness",
    text: "عند وجود خيار سريع قليل الأثر وخيار أبطأ لكنه أعلى أثرًا، كيف تقرر؟",
    options: [
      { id: "A", text: "أختار الأسرع لتقليل التأخير.", score: 1 },
      { id: "B", text: "أختار الأعلى أثرًا مباشرة.", score: 2 },
      { id: "C", text: "أطلب رأي الأغلبية.", score: 1 },
      { id: "D", text: "أقارن الأثر والوقت والمخاطر قبل الاختيار.", score: 3 }
    ]
  },
  {
    id: "TH-005",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "assumptionTesting",
    questionType: "projection",
    consistencyGroup: "CG-CONTEXT-01",
    riskFlag: "weakEvidenceThinking",
    text: "شخص يقول: هذه الطريقة نجحت في جهة أخرى، إذن ستنجح عندنا. ما تقييمك لتفكيره؟",
    options: [
      { id: "A", text: "ينقل التجربة بعد فحص اختلاف السياق.", score: 3 },
      { id: "B", text: "يرى نجاح الجهة الأخرى مؤشرًا كافيًا.", score: 1 },
      { id: "C", text: "يبدأ بتجربة محدودة قبل التوسع.", score: 2 },
      { id: "D", text: "يركز على سرعة التطبيق لتقليل الوقت.", score: 1 }
    ]
  },
  {
    id: "TH-006",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "biasAwareness",
    questionType: "scenario",
    consistencyGroup: "CG-BIAS-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا وجدت معلومة تؤيد رأيك السابق بقوة، ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أفحص أدلة معاكسة قبل اعتمادها.", score: 3 },
      { id: "B", text: "أحتفظ بها كدليل داعم لرأيي.", score: 1 },
      { id: "C", text: "أقارنها بمصادر أخرى قريبة.", score: 2 },
      { id: "D", text: "أعرضها على من يفهم الموضوع.", score: 1 }
    ]
  },

  {
    id: "AN-001",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "problemDefinition",
    questionType: "scenario",
    consistencyGroup: "CG-PROBLEM-01",
    riskFlag: "jumpingToSolutions",
    text: "وصلتك عبارة: الأداء ضعيف في الإدارة. ما تقييمك لهذه العبارة؟",
    options: [
      { id: "A", text: "تحتاج تحديدًا بالمكان والزمن والمؤشر.", score: 3 },
      { id: "B", text: "تشير غالبًا إلى ضعف في الموظفين.", score: 1 },
      { id: "C", text: "تصلح كبداية لصياغة المشكلة.", score: 2 },
      { id: "D", text: "تعني أن الإدارة تحتاج إعادة تنظيم.", score: 1 }
    ]
  },
  {
    id: "AN-002",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "rootCause",
    questionType: "scenario",
    consistencyGroup: "CG-ROOT-01",
    riskFlag: "jumpingToSolutions",
    text: "زادت الشكاوى خلال شهر واحد. ما أول إجراء تحليلي مناسب؟",
    options: [
      { id: "A", text: "إرسال تعميم عاجل لتحسين التعامل.", score: 1 },
      { id: "B", text: "تحديد نوع الشكاوى ونقطة حدوثها وتوقيتها.", score: 3 },
      { id: "C", text: "تدريب الموظفين على خدمة العملاء.", score: 1 },
      { id: "D", text: "افتراض أن الخدمة أصبحت سيئة.", score: 0 }
    ]
  },
  {
    id: "AN-003",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "stakeholderAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-STAKEHOLDER-01",
    riskFlag: "blamingPeople",
    text: "صدر قرار جديد، وبعد أسبوعين ظهر رفض غير مباشر من الموظفين. ما التفسير المهني الأول؟",
    options: [
      { id: "A", text: "قد توجد مخاوف أو مصالح لم تُفهم.", score: 3 },
      { id: "B", text: "الفريق يحتاج متابعة أقوى للتنفيذ.", score: 1 },
      { id: "C", text: "القرار يحتاج شرحًا أوضح قبل الحكم.", score: 2 },
      { id: "D", text: "بعض الموظفين يتأخرون في التقبل.", score: 1 }
    ]
  },
  {
    id: "AN-004",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "dataThinking",
    questionType: "scenario",
    consistencyGroup: "CG-DATA-01",
    riskFlag: "weakEvidenceThinking",
    text: "الأرقام الرسمية جيدة، لكن المستفيدين يشتكون باستمرار. ما القراءة الأقرب؟",
    options: [
      { id: "A", text: "الأرقام أهم من الانطباعات.", score: 1 },
      { id: "B", text: "الشكاوى أهم من الأرقام.", score: 1 },
      { id: "C", text: "قد يكون هناك مؤشر مهم لا تقيسه الأرقام الحالية.", score: 3 },
      { id: "D", text: "يجب تجاهل الشكاوى حتى تتدهور الأرقام.", score: 0 }
    ]
  },
  {
    id: "AN-005",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "decisionAnalysis",
    questionType: "pressure",
    consistencyGroup: "CG-DECISION-02",
    riskFlag: "jumpingToSolutions",
    text: "طُلب منك تحليل سريع قبل اجتماع قريب. ما أقل مخرج مهني مقبول؟",
    options: [
      { id: "A", text: "رأي مختصر مع توصية مباشرة.", score: 1 },
      { id: "B", text: "قائمة حلول محتملة فقط.", score: 1 },
      { id: "C", text: "وصف عام للوضع الحالي.", score: 1 },
      { id: "D", text: "تعريف المشكلة، السبب المحتمل، الأثر، والتوصية.", score: 3 }
    ]
  },
  {
    id: "AN-006",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "evidenceEvaluation",
    questionType: "projection",
    consistencyGroup: "CG-EVIDENCE-02",
    riskFlag: "weakEvidenceThinking",
    text: "شخص يبني تحليله على تجربة واحدة حدثت معه. ما تقييمك؟",
    options: [
      { id: "A", text: "تجربته مفيدة كبداية لا كتعميم.", score: 3 },
      { id: "B", text: "تجربته تصلح إذا كان خبيرًا.", score: 1 },
      { id: "C", text: "تحتاج دعمًا ببيانات أو حالات أخرى.", score: 2 },
      { id: "D", text: "الأفضل أخذ رأيه بحذر.", score: 1 }
    ]
  },

  {
    id: "SD-001",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "discipline",
    questionType: "scenario",
    consistencyGroup: "CG-DISCIPLINE-01",
    riskFlag: "avoidingApplication",
    text: "عندما تبدأ مهارة جديدة، ما الذي يحدث غالبًا بعد الحماس الأول؟",
    options: [
      { id: "A", text: "أستمر فقط إذا ظهرت نتيجة بسرعة.", score: 1 },
      { id: "B", text: "أبحث عن مصدر آخر أكثر حماسًا.", score: 0 },
      { id: "C", text: "أحتاج نظام متابعة واضح حتى أستمر.", score: 3 },
      { id: "D", text: "أؤجل التطبيق حتى أفهم كل شيء.", score: 1 }
    ]
  },
  {
    id: "SD-002",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "application",
    questionType: "projection",
    consistencyGroup: "CG-APPLICATION-01",
    riskFlag: "avoidingApplication",
    text: "شخص يشتري دورات كثيرة ويشاهد المحتوى لكنه لا يطبق. ما التحليل الأقرب؟",
    options: [
      { id: "A", text: "يحتاج ربط التعلم بتطبيق صغير منتظم.", score: 3 },
      { id: "B", text: "لديه دافع جيد لجمع المعرفة.", score: 2 },
      { id: "C", text: "قد يستبدل التطبيق باستهلاك المحتوى.", score: 2 },
      { id: "D", text: "يبحث عن الدورة الأنسب قبل البدء.", score: 1 }
    ]
  },
  {
    id: "SD-003",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "recovery",
    questionType: "scenario",
    consistencyGroup: "CG-RECOVERY-01",
    riskFlag: "lowSelfAwareness",
    text: "إذا انقطعت عن خطة تعلم لمدة أسبوع، ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أبدأ من الصفر بخطة أقوى.", score: 1 },
      { id: "B", text: "أعوض كل ما فات دفعة واحدة.", score: 0 },
      { id: "C", text: "أبحث عن مسار جديد.", score: 1 },
      { id: "D", text: "أعود بخطوة صغيرة وأراجع سبب الانقطاع.", score: 3 }
    ]
  },
  {
    id: "SD-004",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "goalClarity",
    questionType: "choice",
    consistencyGroup: "CG-GOAL-01",
    riskFlag: "lowSelfAwareness",
    text: "عند وضع هدف جديد، ما العامل الأهم لاستمراره؟",
    options: [
      { id: "A", text: "أن يكون واضحًا وقابلًا للقياس ومربوطًا بسلوك يومي.", score: 3 },
      { id: "B", text: "أن يكون كبيرًا ومحفزًا جدًا.", score: 1 },
      { id: "C", text: "أن يعرف به الآخرون.", score: 1 },
      { id: "D", text: "أن يكون سهلًا جدًا حتى لا أفشل.", score: 2 }
    ]
  },
  {
    id: "SD-005",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "feedback",
    questionType: "scenario",
    consistencyGroup: "CG-FEEDBACK-01",
    riskFlag: "lowSelfAwareness",
    text: "إذا انتقد شخص عملك بطريقة مختصرة، ما التصرف الأكثر نضجًا؟",
    options: [
      { id: "A", text: "أدافع عن عملي إذا كنت واثقًا.", score: 1 },
      { id: "B", text: "أطلب مثالًا محددًا حتى أفهم موضع التحسين.", score: 3 },
      { id: "C", text: "أتجاهل النقد إذا لم يكن مفصلًا.", score: 0 },
      { id: "D", text: "أعيد العمل كاملًا لتجنب الخطأ.", score: 1 }
    ]
  },
  {
    id: "SD-006",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "timeManagement",
    questionType: "pressure",
    consistencyGroup: "CG-TIME-01",
    riskFlag: "avoidingApplication",
    text: "لديك 15 دقيقة فقط للتعلم اليوم. ما الخيار الأقرب للسلوك الفعال؟",
    options: [
      { id: "A", text: "أؤجل حتى يتوفر وقت أطول.", score: 0 },
      { id: "B", text: "أشاهد مقطعًا طويلًا بسرعة.", score: 1 },
      { id: "C", text: "أنفذ تمرينًا صغيرًا قابلًا للإكمال.", score: 3 },
      { id: "D", text: "أقرأ عن الموضوع دون تطبيق.", score: 1 }
    ]
  },

  {
    id: "DA-001",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "aiUnderstanding",
    questionType: "choice",
    consistencyGroup: "CG-AI-BASIC-01",
    riskFlag: "aiOverReliance",
    text: "أي وصف أقرب للذكاء الاصطناعي التوليدي Generative AI؟",
    options: [
      { id: "A", text: "أداة تنتج محتوى يحتاج مراجعة بشرية.", score: 3 },
      { id: "B", text: "محرك بحث يعتمد عليه عند الحاجة.", score: 1 },
      { id: "C", text: "برنامج يساعد في الكتابة أكثر من الفهم.", score: 2 },
      { id: "D", text: "أداة تختصر التعلم إذا أحسن استخدامها.", score: 1 }
    ]
  },
  {
    id: "DA-002",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "fileOrganization",
    questionType: "choice",
    consistencyGroup: "CG-DIGITAL-01",
    riskFlag: "lowDigitalReadiness",
    text: "لديك تقرير مهم يتم تعديله أكثر من مرة. أي تسمية أفضل للملف؟",
    options: [
      { id: "A", text: "2026-06-Assessment-Report-v01", score: 3 },
      { id: "B", text: "التقرير النهائي", score: 1 },
      { id: "C", text: "Final آخر نسخة", score: 0 },
      { id: "D", text: "Report جديد", score: 1 }
    ]
  },
  {
    id: "DA-003",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "verification",
    questionType: "scenario",
    consistencyGroup: "CG-VERIFY-01",
    riskFlag: "aiOverReliance",
    text: "أعطاك AI رقمًا حديثًا عن سوق أو نظام أو جهة. ماذا تفعل؟",
    options: [
      { id: "A", text: "أطلب منه إعادة التأكيد.", score: 1 },
      { id: "B", text: "أتحقق من مصدر رسمي أو موثوق.", score: 3 },
      { id: "C", text: "أستخدمه إذا كانت الإجابة منسقة جيدًا.", score: 0 },
      { id: "D", text: "أقبل الرقم إذا كان منطقيًا.", score: 1 }
    ]
  },
  {
    id: "DA-004",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "excelReadiness",
    questionType: "scenario",
    consistencyGroup: "CG-EXCEL-01",
    riskFlag: "lowDigitalReadiness",
    text: "لديك بيانات حضور شهرية وتريد معرفة أكثر أسبوع حدث فيه غياب. أي أداة أنسب؟",
    options: [
      { id: "A", text: "Word لأنه أسهل للكتابة.", score: 0 },
      { id: "B", text: "PowerPoint لأنه مناسب للعرض.", score: 1 },
      { id: "C", text: "Excel لأنه يسمح بالفرز والحساب والمقارنة.", score: 3 },
      { id: "D", text: "صورة للجدول حتى لا يتغير.", score: 0 }
    ]
  },
  {
    id: "DA-005",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "privacy",
    questionType: "scenario",
    consistencyGroup: "CG-PRIVACY-01",
    riskFlag: "aiOverReliance",
    text: "لديك ملف يحتوي أسماء وأرقام موظفين وتريد استخدام AI لتحليله. ما التصرف الصحيح؟",
    options: [
      { id: "A", text: "أزيل البيانات الحساسة قبل الاستخدام.", score: 3 },
      { id: "B", text: "أستخدم جزءًا صغيرًا بعد المراجعة.", score: 2 },
      { id: "C", text: "أرفعه إذا كانت الأداة موثوقة.", score: 1 },
      { id: "D", text: "أستخدمه إذا كان الحساب مدفوعًا.", score: 1 }
    ]
  },
  {
    id: "DA-006",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "searchSkills",
    questionType: "choice",
    consistencyGroup: "CG-SEARCH-01",
    riskFlag: "lowDigitalReadiness",
    text: "عند البحث في الإنترنت، ما علامة ضعف المصدر؟",
    options: [
      { id: "A", text: "وجود تاريخ نشر واضح.", score: 1 },
      { id: "B", text: "وجود جهة مسؤولة واضحة.", score: 1 },
      { id: "C", text: "وجود روابط لمصادر أصلية.", score: 2 },
      { id: "D", text: "ادعاءات قوية بلا مصدر أو جهة واضحة.", score: 3 }
    ]
  },

  {
    id: "AI-001",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "promptQuality",
    questionType: "choice",
    consistencyGroup: "CG-PROMPT-01",
    riskFlag: "aiOverReliance",
    text: "أي طلب أفضل للحصول على مخرج عملي من AI؟",
    options: [
      { id: "A", text: "ابنِ خطة قصيرة مع تمارين وتقييم.", score: 3 },
      { id: "B", text: "اكتب لي خطة تطوير مناسبة.", score: 1 },
      { id: "C", text: "اقترح خطة ممتازة وقابلة للتنفيذ.", score: 2 },
      { id: "D", text: "اشرح لي الموضوع بشكل شامل.", score: 1 }
    ]
  },
  {
    id: "AI-002",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "analysisPrompting",
    questionType: "choice",
    consistencyGroup: "CG-AI-ANALYSIS-01",
    riskFlag: "jumpingToSolutions",
    text: "إذا أردت من AI تحليل مشكلة، ما الطلب الأفضل؟",
    options: [
      { id: "A", text: "فرّق بين العرض والسبب قبل الحل.", score: 3 },
      { id: "B", text: "اقترح أسبابًا محتملة مع حلول سريعة.", score: 2 },
      { id: "C", text: "حلل المشكلة واكتب تقريرًا مفصلًا.", score: 1 },
      { id: "D", text: "اعرض حلولًا مباشرة قابلة للتنفيذ.", score: 1 }
    ]
  },
  {
    id: "AI-003",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "outputReview",
    questionType: "scenario",
    consistencyGroup: "CG-AI-REVIEW-01",
    riskFlag: "aiOverReliance",
    text: "إذا كتب لك AI تقريرًا يبدو ممتازًا، ما الخطوة التالية؟",
    options: [
      { id: "A", text: "أراجعه منطقيًا وأتحقق من المعلومات.", score: 3 },
      { id: "B", text: "أطلب تحسين الأسلوب والتنسيق.", score: 1 },
      { id: "C", text: "أطلب منه كشف الثغرات المحتملة.", score: 2 },
      { id: "D", text: "أستخدمه إذا كان متماسكًا.", score: 1 }
    ]
  },
  {
    id: "AI-004",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "learningWithAI",
    questionType: "choice",
    consistencyGroup: "CG-AI-LEARNING-01",
    riskFlag: "avoidingApplication",
    text: "ما أفضل طريقة لاستخدام AI في تعلم مهارة جديدة؟",
    options: [
      { id: "A", text: "يشرح ثم يختبرني ويصحح أخطائي.", score: 3 },
      { id: "B", text: "يعطيني ملخصًا أراجعه لاحقًا.", score: 1 },
      { id: "C", text: "يقترح تمارين مناسبة للمستوى.", score: 2 },
      { id: "D", text: "يكتب خطة طويلة للتعلم.", score: 1 }
    ]
  },
  {
    id: "AI-005",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "decisionSupport",
    questionType: "scenario",
    consistencyGroup: "CG-AI-DECISION-01",
    riskFlag: "aiOverReliance",
    text: "إذا أردت استخدام AI في قرار مهم، ما الطلب الأقوى؟",
    options: [
      { id: "A", text: "اعرض خيارات القرار ومخاطر كل خيار.", score: 3 },
      { id: "B", text: "اقترح القرار الأنسب بناءً على المعطيات.", score: 2 },
      { id: "C", text: "لخص لي القرار في توصية قصيرة.", score: 1 },
      { id: "D", text: "رتب البدائل حسب سهولة التنفيذ المتوقعة.", score: 1 }
    ]
  },
  {
    id: "AI-006",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "promptRefinement",
    questionType: "scenario",
    consistencyGroup: "CG-PROMPT-REFINE-01",
    riskFlag: "lowSelfAwareness",
    text: "إذا أعطاك AI إجابة عامة لا تناسبك، ما السبب الأكثر احتمالًا؟",
    options: [
      { id: "A", text: "الأداة غير مفيدة غالبًا.", score: 0 },
      { id: "B", text: "ربما كان الطلب ناقص السياق أو الهدف أو القيود.", score: 3 },
      { id: "C", text: "الموضوع صعب ولا يصلح لـ AI.", score: 1 },
      { id: "D", text: "يجب فقط طلب إجابة أطول.", score: 1 }
    ]
  },

  {
    id: "HC-001",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "selfImageVsBehavior",
    questionType: "selfReport",
    consistencyGroup: "CG-DISCIPLINE-01",
    riskFlag: "highConsistencyConflict",
    text: "هل ترى نفسك شخصًا منضبطًا في التعلم؟",
    options: [
      { id: "A", text: "نعم غالبًا.", score: 2 },
      { id: "B", text: "أحيانًا.", score: 2 },
      { id: "C", text: "حسب وضوح الهدف والنظام.", score: 3 },
      { id: "D", text: "لا.", score: 1 }
    ]
  },
  {
    id: "HC-002",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "historicalBehavior",
    questionType: "selfReport",
    consistencyGroup: "CG-DISCIPLINE-01",
    riskFlag: "highConsistencyConflict",
    text: "خلال آخر سنة، كم مرة أكملت خطة تعلم من بدايتها إلى نهايتها؟",
    options: [
      { id: "A", text: "كثيرًا.", score: 3 },
      { id: "B", text: "أحيانًا.", score: 2 },
      { id: "C", text: "نادرًا.", score: 1 },
      { id: "D", text: "غالبًا أبدأ أكثر مما أنهي.", score: 0 }
    ]
  },
  {
    id: "HC-003",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "projection",
    questionType: "projection",
    consistencyGroup: "CG-APPLICATION-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يقول: لا أطبق لأنني لم أفهم كل شيء بعد. ما التقييم الأقرب؟",
    options: [
      { id: "A", text: "يبدأ بتطبيق صغير يكشف الفهم.", score: 3 },
      { id: "B", text: "يحرص على الإتقان قبل التطبيق.", score: 2 },
      { id: "C", text: "قد يؤخر التطبيق باسم الاستعداد.", score: 2 },
      { id: "D", text: "ينتظر اكتمال الفهم ثم يبدأ.", score: 1 }
    ]
  },
  {
    id: "HC-004",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "pressureBehavior",
    questionType: "pressure",
    consistencyGroup: "CG-DECISION-01",
    riskFlag: "highConsistencyConflict",
    text: "لديك 10 دقائق قبل اجتماع مهم، واكتشفت خطأ في تقريرك. ماذا تفعل؟",
    options: [
      { id: "A", text: "أرسل التقرير كما هو حتى لا أتأخر.", score: 0 },
      { id: "B", text: "أعدل الخطأ الواضح وأذكر أن التقرير يحتاج مراجعة لاحقة.", score: 3 },
      { id: "C", text: "أؤجل الإرسال حتى أراجع كل شيء.", score: 1 },
      { id: "D", text: "أطلب من شخص آخر إصلاحه بسرعة.", score: 1 }
    ]
  },
  {
    id: "HC-005",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "aiConfirmationBias",
    questionType: "scenario",
    consistencyGroup: "CG-BIAS-01",
    riskFlag: "highConsistencyConflict",
    text: "إذا أعطاك AI إجابة توافق رأيك تمامًا، ما التصرف الأقرب؟",
    options: [
      { id: "A", text: "أستخدمها لأنها دعمت رأيي.", score: 0 },
      { id: "B", text: "أطلب منه نقد الفكرة وكشف نقاط ضعفها.", score: 3 },
      { id: "C", text: "أطلب صياغة أقوى.", score: 1 },
      { id: "D", text: "أبحث عن إجابة أخرى تؤيد نفس الرأي.", score: 0 }
    ]
  },
  {
    id: "HC-006",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "ambiguityHandling",
    questionType: "scenario",
    consistencyGroup: "CG-CLARITY-01",
    riskFlag: "highConsistencyConflict",
    text: "إذا طلب منك شخص تنفيذ مهمة غامضة، ما التصرف الأقرب لك؟",
    options: [
      { id: "A", text: "أنفذ حسب فهمي حتى لا أتأخر.", score: 1 },
      { id: "B", text: "أسأل عن الهدف والمخرج المطلوب قبل التنفيذ.", score: 3 },
      { id: "C", text: "أنتظر حتى يوضح أكثر من نفسه.", score: 0 },
      { id: "D", text: "أبدأ بجزء صغير ثم أعدل لاحقًا.", score: 2 }
    ]
  }

,
  {
    id: "TH-007",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "logicalThinking",
    questionType: "scenario",
    consistencyGroup: "CG-LOGIC-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا كانت نتيجة معينة حدثت بعد إجراء جديد، ما الاستنتاج الأقرب للنضج؟",
    options: [
      { id: "A", text: "قد يكون مؤثرًا ويحتاج مقارنة.", score: 3 },
      { id: "B", text: "الإجراء الجديد سبب محتمل.", score: 2 },
      { id: "C", text: "النتيجة كافية لإثبات العلاقة.", score: 1 },
      { id: "D", text: "رأي الفريق يساعد في تفسيرها.", score: 1 }
    ]
  },
  {
    id: "TH-008",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "contextualThinking",
    questionType: "projection",
    consistencyGroup: "CG-CONTEXT-01",
    riskFlag: "weakEvidenceThinking",
    text: "شخص نقل تجربة ناجحة من شركة كبيرة إلى فريق صغير دون تعديل. ما تقييمك؟",
    options: [
      { id: "A", text: "يحتاج تكييف التجربة حسب السياق.", score: 3 },
      { id: "B", text: "نجاح التجربة مؤشر يستحق الاختبار.", score: 2 },
      { id: "C", text: "النقل المباشر قد يسرّع التحسين.", score: 1 },
      { id: "D", text: "يجربها أولًا ثم يعدل لاحقًا.", score: 1 }
    ]
  },
  {
    id: "TH-009",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "decisionQuality",
    questionType: "pressure",
    consistencyGroup: "CG-DECISION-01",
    riskFlag: "lowSelfAwareness",
    text: "لديك قرار سريع ولا توجد كل المعلومات. ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أحدد معلومات كافية لقرار قابل للمراجعة.", score: 3 },
      { id: "B", text: "أنتظر اكتمال المعلومات قدر الإمكان.", score: 1 },
      { id: "C", text: "أستخدم الخبرة مع توضيح الافتراضات.", score: 2 },
      { id: "D", text: "أطلب من صاحب الصلاحية أن يقرر.", score: 1 }
    ]
  },
  {
    id: "TH-010",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "creativeThinking",
    questionType: "scenario",
    consistencyGroup: "CG-CREATIVE-01",
    riskFlag: "jumpingToSolutions",
    text: "عند طلب حل جديد لمشكلة قديمة، ما البداية الأفضل؟",
    options: [
      { id: "A", text: "أقترح أول فكرة مختلفة عن المعتاد.", score: 1 },
      { id: "B", text: "أجمع أكبر عدد من الحلول الممكنة دون تقييم أولي.", score: 2 },
      { id: "C", text: "أبحث عن أكثر حل منخفض التكلفة.", score: 1 },
      { id: "D", text: "أعيد تعريف المشكلة والقيود ثم أفتح بدائل متعددة.", score: 3 }
    ]
  },
  {
    id: "TH-011",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "systemsThinking",
    questionType: "scenario",
    consistencyGroup: "CG-SYSTEM-02",
    riskFlag: "blamingPeople",
    text: "إذا تحسن الأداء عندما حضر المدير ثم انخفض بعد غيابه، ماذا يشير ذلك غالبًا؟",
    options: [
      { id: "A", text: "الفريق لا يعمل إلا تحت الضغط.", score: 1 },
      { id: "B", text: "المدير هو السبب الوحيد للتحسن.", score: 0 },
      { id: "C", text: "قد يكون النظام يعتمد على الرقابة الشخصية لا على آلية مستقرة.", score: 3 },
      { id: "D", text: "يجب زيادة المتابعة اليومية.", score: 1 }
    ]
  },
  {
    id: "TH-012",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "biasAwareness",
    questionType: "scenario",
    consistencyGroup: "CG-BIAS-02",
    riskFlag: "weakEvidenceThinking",
    text: "إذا كنت لا تحب شخصًا ثم قدّم فكرة جيدة، ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أفصل الفكرة عن مشاعري تجاه الشخص وأقيّم الدليل.", score: 3 },
      { id: "B", text: "أتعامل مع الفكرة بحذر لأنها منه.", score: 1 },
      { id: "C", text: "أطلب أن يعرضها شخص آخر.", score: 1 },
      { id: "D", text: "أرفضها حتى يثبت أنها صحيحة تمامًا.", score: 0 }
    ]
  },
  {
    id: "TH-013",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "strategicThinking",
    questionType: "choice",
    consistencyGroup: "CG-PRIORITY-01",
    riskFlag: "lowSelfAwareness",
    text: "عندما تتزاحم ثلاثة أهداف مهمة، ما معيار الترتيب الأقوى؟",
    options: [
      { id: "A", text: "الأكثر سهولة في التنفيذ.", score: 1 },
      { id: "B", text: "الأكثر طلبًا من الآخرين.", score: 1 },
      { id: "C", text: "الأعلى أثرًا والأقرب للهدف الرئيسي مع مراعاة المخاطر.", score: 3 },
      { id: "D", text: "الأسرع في إعطاء نتيجة ظاهرة.", score: 2 }
    ]
  },
  {
    id: "TH-014",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "assumptionTesting",
    questionType: "scenario",
    consistencyGroup: "CG-ASSUMPTION-02",
    riskFlag: "weakEvidenceThinking",
    text: "إذا فشلت خطة رغم تنفيذها كما كُتبت، ما الاحتمال الذي يجب فحصه؟",
    options: [
      { id: "A", text: "الفريق لم يكن متحمسًا كفاية.", score: 1 },
      { id: "B", text: "قد تكون فرضيات الخطة نفسها غير صحيحة.", score: 3 },
      { id: "C", text: "الخطة تحتاج وقتًا أطول فقط.", score: 1 },
      { id: "D", text: "يجب تغيير المسؤول عن التنفيذ.", score: 0 }
    ]
  },
  {
    id: "TH-015",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "criticalThinking",
    questionType: "projection",
    consistencyGroup: "CG-EVIDENCE-03",
    riskFlag: "weakEvidenceThinking",
    text: "شخص يثق في المعلومة لأنها منتشرة بين الناس. ما تقييمك؟",
    options: [
      { id: "A", text: "الانتشار مؤشر لا يغني عن الدليل.", score: 3 },
      { id: "B", text: "الانتشار يعطيها وزنًا أوليًا.", score: 2 },
      { id: "C", text: "المعلومة المنتشرة تحتاج حذرًا.", score: 1 },
      { id: "D", text: "المصدر المشهور يكفي غالبًا.", score: 1 }
    ]
  },
  {
    id: "TH-016",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "metacognition",
    questionType: "selfAssessment",
    consistencyGroup: "CG-SELF-AWARE-01",
    riskFlag: "lowSelfAwareness",
    text: "عندما تكتشف أنك فهمت موضوعًا بشكل خاطئ، ما التصرف الأقرب لك؟",
    options: [
      { id: "A", text: "أصحح الفكرة وأراجع كيف وصلت للفهم الخاطئ.", score: 3 },
      { id: "B", text: "أصحح المعلومة فقط وأكمل.", score: 2 },
      { id: "C", text: "أبرر الخطأ بسبب نقص الشرح.", score: 1 },
      { id: "D", text: "أتجنب الحديث عن الموضوع.", score: 0 }
    ]
  },

  {
    id: "AN-007",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "problemDefinition",
    questionType: "scenario",
    consistencyGroup: "CG-PROBLEM-02",
    riskFlag: "jumpingToSolutions",
    text: "وصلتك شكوى تقول: الخدمة بطيئة. ما الصياغة التحليلية الأفضل كبداية؟",
    options: [
      { id: "A", text: "أحدد أين يحدث البطء وكم مدته.", score: 3 },
      { id: "B", text: "أفترض أن النظام يحتاج تحسينًا.", score: 1 },
      { id: "C", text: "أبحث عن وقت ومكان تكرار البطء.", score: 2 },
      { id: "D", text: "أقترح تدريب الفريق على الخدمة.", score: 1 }
    ]
  },
  {
    id: "AN-008",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "rootCause",
    questionType: "scenario",
    consistencyGroup: "CG-ROOT-02",
    riskFlag: "jumpingToSolutions",
    text: "إذا اختفت المشكلة مؤقتًا بعد تدخل مباشر ثم عادت، ماذا يعني ذلك غالبًا؟",
    options: [
      { id: "A", text: "التدخل لم يعالج السبب الجذري.", score: 3 },
      { id: "B", text: "الفريق لم يلتزم.", score: 1 },
      { id: "C", text: "المشكلة طبيعية ولا يمكن حلها.", score: 0 },
      { id: "D", text: "نحتاج تدخلًا مباشرًا كل مرة.", score: 1 }
    ]
  },
  {
    id: "AN-009",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "stakeholderAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-STAKEHOLDER-02",
    riskFlag: "blamingPeople",
    text: "تغير إجراء داخلي وبدأت إدارة أخرى تتأخر في الرد. ما أول زاوية تحليل؟",
    options: [
      { id: "A", text: "الإدارة الأخرى غير متعاونة.", score: 0 },
      { id: "B", text: "نرفع الموضوع للمدير مباشرة.", score: 1 },
      { id: "C", text: "نراجع كيف أثر التغيير على عبء العمل والمسؤوليات ونقاط التسليم.", score: 3 },
      { id: "D", text: "نطلب منهم الالتزام بالمدة السابقة.", score: 1 }
    ]
  },
  {
    id: "AN-010",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "dataThinking",
    questionType: "scenario",
    consistencyGroup: "CG-DATA-02",
    riskFlag: "weakEvidenceThinking",
    text: "لديك متوسط زمن إنجاز جيد، لكن بعض الحالات تتأخر جدًا. ما التحليل الأقوى؟",
    options: [
      { id: "A", text: "المتوسط كافٍ للحكم على الأداء.", score: 1 },
      { id: "B", text: "أفحص التباين والحالات المتطرفة لا المتوسط فقط.", score: 3 },
      { id: "C", text: "أتجاهل الحالات المتطرفة لأنها قليلة.", score: 0 },
      { id: "D", text: "أزيد عدد الموظفين احتياطًا.", score: 1 }
    ]
  },
  {
    id: "AN-011",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "evidenceEvaluation",
    questionType: "projection",
    consistencyGroup: "CG-EVIDENCE-04",
    riskFlag: "weakEvidenceThinking",
    text: "شخص يقول: لدي إحساس أن السبب معروف. ما تقييمك؟",
    options: [
      { id: "A", text: "الإحساس يوجه السؤال ولا يثبت السبب.", score: 3 },
      { id: "B", text: "الإحساس مفيد إذا دعمه تحقق.", score: 2 },
      { id: "C", text: "خبرته تجعل إحساسه مرجحًا.", score: 1 },
      { id: "D", text: "نبدأ بالحل الأقرب لإحساسه.", score: 1 }
    ]
  },
  {
    id: "AN-012",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "riskAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-RISK-01",
    riskFlag: "jumpingToSolutions",
    text: "عند اقتراح حل جديد، ما السؤال التحليلي الذي يجب طرحه مبكرًا؟",
    options: [
      { id: "A", text: "هل الحل يبدو مقنعًا؟", score: 1 },
      { id: "B", text: "من صاحب فكرة الحل؟", score: 0 },
      { id: "C", text: "ما المخاطر والآثار الجانبية إذا طبقناه؟", score: 3 },
      { id: "D", text: "هل سيعجب الفريق؟", score: 1 }
    ]
  },
  {
    id: "AN-013",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "processAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-PROCESS-01",
    riskFlag: "jumpingToSolutions",
    text: "إذا أردت تحليل تأخر معاملة، ما أفضل تمثيل أولي؟",
    options: [
      { id: "A", text: "أرسم المسار وأحدد زمن كل خطوة.", score: 3 },
      { id: "B", text: "أكتب أسماء المسؤولين عن التأخير.", score: 1 },
      { id: "C", text: "أقارن الزمن بين خطوات المسار.", score: 2 },
      { id: "D", text: "أقترح اختصار الإجراء مباشرة.", score: 1 }
    ]
  },
  {
    id: "AN-014",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "patternRecognition",
    questionType: "scenario",
    consistencyGroup: "CG-PATTERN-01",
    riskFlag: "weakEvidenceThinking",
    text: "تظهر المشكلة في نهاية الأسبوع أكثر من بدايته. ما الفرضية الأولى التي تستحق الفحص؟",
    options: [
      { id: "A", text: "تغير الطلب أو الموارد حسب اليوم.", score: 3 },
      { id: "B", text: "انخفاض الحماس في نهاية الأسبوع.", score: 1 },
      { id: "C", text: "اختلاف ضغط العمل بين الأيام.", score: 2 },
      { id: "D", text: "الحاجة إلى تعميم خاص بالأسبوع.", score: 1 }
    ]
  },
  {
    id: "AN-015",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "decisionAnalysis",
    questionType: "pressure",
    consistencyGroup: "CG-DECISION-04",
    riskFlag: "lowSelfAwareness",
    text: "إذا تعارض حل منخفض التكلفة مع حل أعلى أثرًا لكنه أصعب، ما القرار التحليلي؟",
    options: [
      { id: "A", text: "أختار الأقل تكلفة دائمًا.", score: 1 },
      { id: "B", text: "أختار الأعلى أثرًا دون نقاش.", score: 1 },
      { id: "C", text: "أقارن التكلفة والأثر والمخاطر وقابلية التنفيذ.", score: 3 },
      { id: "D", text: "أطلب من الإدارة الاختيار.", score: 0 }
    ]
  },
  {
    id: "AN-016",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "hypothesisTesting",
    questionType: "scenario",
    consistencyGroup: "CG-HYPOTHESIS-01",
    riskFlag: "weakEvidenceThinking",
    text: "وضعت فرضية لسبب المشكلة. ما الخطوة التالية؟",
    options: [
      { id: "A", text: "أختبرها ببيانات أو تجربة صغيرة.", score: 3 },
      { id: "B", text: "أبني عليها حلًا مبدئيًا للمراجعة.", score: 2 },
      { id: "C", text: "أعرضها لمعرفة انطباع الفريق.", score: 1 },
      { id: "D", text: "أبحث عما يدعمها أولًا.", score: 1 }
    ]
  },

  {
    id: "SD-007",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "learningAgility",
    questionType: "scenario",
    consistencyGroup: "CG-LEARNING-01",
    riskFlag: "avoidingApplication",
    text: "عندما لا تفهم درسًا من أول مرة، ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أبحث عن شرح مختلف ثم أطبّق تمرينًا صغيرًا.", score: 3 },
      { id: "B", text: "أعيد مشاهدة الدرس كاملًا عدة مرات فقط.", score: 1 },
      { id: "C", text: "أتركه لأنه لا يناسبني.", score: 0 },
      { id: "D", text: "أنتقل للدرس التالي حتى لا أتأخر.", score: 1 }
    ]
  },
  {
    id: "SD-008",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "feedbackUse",
    questionType: "scenario",
    consistencyGroup: "CG-FEEDBACK-02",
    riskFlag: "lowSelfAwareness",
    text: "إذا تكرر نفس النقد من أكثر من شخص، ما القراءة الأقرب؟",
    options: [
      { id: "A", text: "قد يكون هناك نمط حقيقي يحتاج مراجعة.", score: 3 },
      { id: "B", text: "الناس غالبًا لا يفهمون طريقتي.", score: 0 },
      { id: "C", text: "أحتاج شخصًا يدافع عن وجهة نظري.", score: 0 },
      { id: "D", text: "أنتظر نقدًا من شخص خبير فقط.", score: 1 }
    ]
  },
  {
    id: "SD-009",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "motivationManagement",
    questionType: "scenario",
    consistencyGroup: "CG-MOTIVATION-01",
    riskFlag: "avoidingApplication",
    text: "إذا اختفى الحماس بعد البداية، ما التصرف الأكثر فاعلية؟",
    options: [
      { id: "A", text: "أبحث عن محتوى تحفيزي جديد.", score: 1 },
      { id: "B", text: "أخفض حجم المهمة وأثبت وقتًا قصيرًا للتطبيق.", score: 3 },
      { id: "C", text: "أوقف المسار حتى يعود الحماس.", score: 0 },
      { id: "D", text: "أجبر نفسي على خطة كبيرة لتعويض الضعف.", score: 1 }
    ]
  },
  {
    id: "SD-010",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "selfAwareness",
    questionType: "selfAssessment",
    consistencyGroup: "CG-SELF-AWARE-02",
    riskFlag: "lowSelfAwareness",
    text: "عندما يتكرر تعثرك في هدف معين، ما السؤال الأهم؟",
    options: [
      { id: "A", text: "لماذا لا أملك إرادة كافية؟", score: 0 },
      { id: "B", text: "ما النمط أو الظرف الذي يسبق التعثر عادة؟", score: 3 },
      { id: "C", text: "من يستطيع إلزامي؟", score: 1 },
      { id: "D", text: "هل أترك الهدف وأبدأ غيره؟", score: 1 }
    ]
  },
  {
    id: "SD-011",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "application",
    questionType: "pressure",
    consistencyGroup: "CG-APPLICATION-02",
    riskFlag: "avoidingApplication",
    text: "بعد تعلم مفهوم جديد، ما أفضل دليل أنك فهمته؟",
    options: [
      { id: "A", text: "أستطيع تكرار التعريف.", score: 1 },
      { id: "B", text: "أستطيع تلخيصه بكلامي.", score: 2 },
      { id: "C", text: "أستطيع تطبيقه على مثال جديد وشرح سبب التطبيق.", score: 3 },
      { id: "D", text: "أشعر أنني فهمته.", score: 0 }
    ]
  },

  {
    id: "HC-007",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "selfReport",
    consistencyGroup: "CG-SELF-AWARE-01",
    riskFlag: "highConsistencyConflict",
    text: "عندما تكون واثقًا من رأيك ثم تظهر معلومة تخالفه، ماذا تفعل غالبًا؟",
    options: [
      { id: "A", text: "أراجع رأيي بناءً على قوة المعلومة.", score: 3 },
      { id: "B", text: "أبحث عن تفسير يحافظ على رأيي.", score: 1 },
      { id: "C", text: "أتجاهلها إذا كانت من مصدر لا أميل له.", score: 0 },
      { id: "D", text: "أؤجل الحكم دون مراجعة.", score: 1 }
    ]
  },
  {
    id: "HC-008",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "projection",
    consistencyGroup: "CG-FEEDBACK-02",
    riskFlag: "highConsistencyConflict",
    text: "شخص يرفض النقد المتكرر بحجة أن الناس لا يفهمونه. ما تقييمك؟",
    options: [
      { id: "A", text: "أفحص تكرار النقد كنمط قابل للتحقق.", score: 3 },
      { id: "B", text: "قد يكون محقًا إذا كان النقد غير محدد.", score: 2 },
      { id: "C", text: "يحتاج تحسين طريقة استقبال التغذية الراجعة.", score: 2 },
      { id: "D", text: "ينتظر نقدًا متخصصًا قبل تغيير سلوكه.", score: 1 }
    ]
  },
  {
    id: "HC-009",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "pressureBehavior",
    questionType: "pressure",
    consistencyGroup: "CG-RISK-01",
    riskFlag: "highConsistencyConflict",
    text: "لديك حل يبدو جيدًا لكنك لم تفحص مخاطره، والوقت ضيق. ماذا تفعل؟",
    options: [
      { id: "A", text: "أطبقه لأن الوقت لا يسمح.", score: 0 },
      { id: "B", text: "أفحص خطرين رئيسيين على الأقل قبل التوصية.", score: 3 },
      { id: "C", text: "أطلب موافقة الإدارة وأترك المسؤولية لها.", score: 1 },
      { id: "D", text: "أؤجل كل شيء حتى أعمل تحليلًا كاملًا.", score: 1 }
    ]
  },
  {
    id: "HC-010",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "selfReport",
    consistencyGroup: "CG-MOTIVATION-01",
    riskFlag: "highConsistencyConflict",
    text: "ما الذي تعتمد عليه أكثر للاستمرار في التعلم؟",
    options: [
      { id: "A", text: "الحماس والرغبة.", score: 1 },
      { id: "B", text: "نظام بسيط ومتكرر حتى عند ضعف الحماس.", score: 3 },
      { id: "C", text: "وجود دورة قوية.", score: 1 },
      { id: "D", text: "وقت فراغ كافٍ.", score: 1 }
    ]
  },
  {
    id: "HC-011",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "projection",
    consistencyGroup: "CG-HYPOTHESIS-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص وضع فرضية ثم جمع فقط ما يؤيدها. ما تقييمك؟",
    options: [
      { id: "A", text: "هذا طبيعي إذا كانت الفرضية قوية.", score: 1 },
      { id: "B", text: "هذا تحيز تأكيدي ويضعف جودة التحليل.", score: 3 },
      { id: "C", text: "الأفضل أن يبدأ بالحل مباشرة.", score: 0 },
      { id: "D", text: "يكفي أن يعرضها على فريقه.", score: 1 }
    ]
  }

,
  {
    id: "SD-012",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "habitDesign",
    questionType: "scenario",
    consistencyGroup: "CG-HABIT-01",
    riskFlag: "avoidingApplication",
    text: "إذا أردت بناء عادة تعلم يومية، ما البداية الأكثر واقعية؟",
    options: [
      { id: "A", text: "أبدأ بساعتين يوميًا حتى أشعر بالجدية.", score: 1 },
      { id: "B", text: "أحدد وقتًا قصيرًا ثابتًا وسلوكًا واضحًا قابلًا للتكرار.", score: 3 },
      { id: "C", text: "أنتظر حتى تتوفر الرغبة الكاملة.", score: 0 },
      { id: "D", text: "أشتري دورة قوية ثم أبدأ لاحقًا.", score: 1 }
    ]
  },
  {
    id: "SD-013",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "focusManagement",
    questionType: "scenario",
    consistencyGroup: "CG-FOCUS-01",
    riskFlag: "avoidingApplication",
    text: "أثناء التعلم تظهر لك مصادر كثيرة جذابة. ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أفتح أكثر من مصدر حتى لا أفوّت شيئًا.", score: 0 },
      { id: "B", text: "أحفظ كل المصادر وأتنقل بينها حسب المزاج.", score: 1 },
      { id: "C", text: "أختار مصدرًا رئيسيًا وأضع الباقي في قائمة لاحقة.", score: 3 },
      { id: "D", text: "أترك المسار الحالي وأبدأ بالأحدث.", score: 0 }
    ]
  },
  {
    id: "SD-014",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "resilience",
    questionType: "scenario",
    consistencyGroup: "CG-RECOVERY-02",
    riskFlag: "lowSelfAwareness",
    text: "إذا حصلت على نتيجة ضعيفة في اختبار مهاري، ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أعتبرها دليلًا أن المجال لا يناسبني.", score: 0 },
      { id: "B", text: "أبحث عن الأسئلة التي كشفت الفجوة وأعيد التدريب عليها.", score: 3 },
      { id: "C", text: "أعيد الاختبار مباشرة حتى تتحسن الدرجة.", score: 1 },
      { id: "D", text: "أقارن نتيجتي بنتائج الآخرين.", score: 1 }
    ]
  },
  {
    id: "SD-015",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "goalClarity",
    questionType: "selfAssessment",
    consistencyGroup: "CG-GOAL-02",
    riskFlag: "lowSelfAwareness",
    text: "عندما يكون هدفك عامًا مثل أريد أن أتطور، ما أول تحسين لازم؟",
    options: [
      { id: "A", text: "أجعله هدفًا قابلًا للقياس بسلوك ومدة ومخرج واضح.", score: 3 },
      { id: "B", text: "أكتبه بطريقة أجمل وأكثر تحفيزًا.", score: 1 },
      { id: "C", text: "أنتظر حتى تتضح الرؤية مع الوقت.", score: 0 },
      { id: "D", text: "أبدأ بأي دورة لها علاقة بالتطوير.", score: 1 }
    ]
  },
  {
    id: "SD-016",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "energyManagement",
    questionType: "scenario",
    consistencyGroup: "CG-ENERGY-01",
    riskFlag: "avoidingApplication",
    text: "إذا كان وقتك متاحًا لكن طاقتك الذهنية منخفضة، ما الخيار الأفضل؟",
    options: [
      { id: "A", text: "أؤجل كل شيء حتى أكون في أفضل حالة.", score: 1 },
      { id: "B", text: "أجبر نفسي على مهمة كبيرة.", score: 0 },
      { id: "C", text: "أختار مهمة صغيرة منخفضة الجهد تحافظ على الاستمرارية.", score: 3 },
      { id: "D", text: "أكتفي بمشاهدة محتوى دون تطبيق.", score: 1 }
    ]
  },
  {
    id: "SD-017",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "accountability",
    questionType: "scenario",
    consistencyGroup: "CG-ACCOUNTABILITY-01",
    riskFlag: "lowSelfAwareness",
    text: "إذا لاحظت أنك لا تلتزم إلا عند وجود متابعة خارجية، ما القراءة الأقرب؟",
    options: [
      { id: "A", text: "هذا يعني أنني لا أملك انضباطًا نهائيًا.", score: 0 },
      { id: "B", text: "أحتاج تصميم نظام مساءلة تدريجي حتى تنتقل المتابعة إلى عادة داخلية.", score: 3 },
      { id: "C", text: "أحتاج شخصًا يراقبني دائمًا.", score: 1 },
      { id: "D", text: "الأفضل ترك الأهداف التي تحتاج متابعة.", score: 0 }
    ]
  },
  {
    id: "SD-018",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "learningTransfer",
    questionType: "scenario",
    consistencyGroup: "CG-TRANSFER-01",
    riskFlag: "avoidingApplication",
    text: "بعد حضور دورة مفيدة، ما التصرف الذي يحول التعلم إلى مهارة؟",
    options: [
      { id: "A", text: "أحفظ المادة للرجوع لها لاحقًا.", score: 1 },
      { id: "B", text: "أكتب ملخصًا طويلًا.", score: 1 },
      { id: "C", text: "أحدد موقفًا حقيقيًا أطبق فيه فكرة واحدة خلال أسبوع.", score: 3 },
      { id: "D", text: "أبحث عن دورة متقدمة مباشرة.", score: 0 }
    ]
  },
  {
    id: "SD-019",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "priorityDiscipline",
    questionType: "pressure",
    consistencyGroup: "CG-PRIORITY-02",
    riskFlag: "lowSelfAwareness",
    text: "لديك مهام كثيرة ومسار تعلم مهم. كيف تحمي وقت التعلم؟",
    options: [
      { id: "A", text: "أتعلم فقط إذا انتهت كل المهام الأخرى.", score: 0 },
      { id: "B", text: "أضع وقتًا قصيرًا ثابتًا وأتعامل معه كموعد غير قابل للإلغاء إلا لضرورة.", score: 3 },
      { id: "C", text: "أزيد مدة التعلم في نهاية الأسبوع فقط.", score: 1 },
      { id: "D", text: "أتعلم عندما أشعر أنني متفرغ ذهنيًا.", score: 1 }
    ]
  },
  {
    id: "SD-020",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "selfEvaluation",
    questionType: "selfAssessment",
    consistencyGroup: "CG-SELF-EVAL-01",
    riskFlag: "lowSelfAwareness",
    text: "عند تقييم تقدمك، ما المعيار الأكثر دقة؟",
    options: [
      { id: "A", text: "عدد الساعات التي قضيتها.", score: 1 },
      { id: "B", text: "شعوري بأنني تطورت.", score: 1 },
      { id: "C", text: "عدد المقاطع أو الدروس التي أنهيتها.", score: 1 },
      { id: "D", text: "قدرتي على تطبيق المهارة في موقف جديد مع خطأ أقل.", score: 3 }
    ]
  },
  {
    id: "SD-021",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "reflection",
    questionType: "scenario",
    consistencyGroup: "CG-REFLECTION-01",
    riskFlag: "lowSelfAwareness",
    text: "ما أفضل سؤال في نهاية أسبوع تعلم؟",
    options: [
      { id: "A", text: "كم ساعة تعلمت هذا الأسبوع؟", score: 1 },
      { id: "B", text: "ما الذي تعلمته وطبقته وسأعدله؟", score: 3 },
      { id: "C", text: "ما أكثر درس شعرت أنه مفيد؟", score: 2 },
      { id: "D", text: "هل أنهيت المحتوى المخطط له؟", score: 1 }
    ]
  },

  {
    id: "DA-007",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "digitalFluency",
    questionType: "scenario",
    consistencyGroup: "CG-DIGITAL-02",
    riskFlag: "lowDigitalReadiness",
    text: "إذا لم تجد ملفًا في جهازك، ما أول تصرف رقمي صحيح؟",
    options: [
      { id: "A", text: "أعيد إنشاء الملف.", score: 0 },
      { id: "B", text: "أبحث باسم الملف أو جزء منه أو نوعه داخل النظام.", score: 3 },
      { id: "C", text: "أفتش يدويًا في كل المجلدات.", score: 1 },
      { id: "D", text: "أطلب من شخص آخر البحث عنه.", score: 1 }
    ]
  },
  {
    id: "DA-008",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "toolSelection",
    questionType: "choice",
    consistencyGroup: "CG-TOOL-01",
    riskFlag: "lowDigitalReadiness",
    text: "لديك نص طويل وتريد استخراج النقاط الرئيسية ثم تحويلها إلى جدول. ما الدمج الأنسب؟",
    options: [
      { id: "A", text: "أستخرج النقاط ثم أنظمها في جدول.", score: 3 },
      { id: "B", text: "أكتب النص في Word وأرتبه.", score: 1 },
      { id: "C", text: "أعرض النقاط في شرائح مباشرة.", score: 1 },
      { id: "D", text: "ألخص النص ثم أراجعه يدويًا.", score: 2 }
    ]
  },
  {
    id: "DA-009",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "dataLiteracy",
    questionType: "scenario",
    consistencyGroup: "CG-DATA-LIT-01",
    riskFlag: "lowDigitalReadiness",
    text: "عند رؤية نسبة مئوية في تقرير، ما السؤال الأول لفهمها؟",
    options: [
      { id: "A", text: "هل النسبة كبيرة أم صغيرة فقط؟", score: 1 },
      { id: "B", text: "ما المقام أو العدد الذي بُنيت عليه النسبة؟", score: 3 },
      { id: "C", text: "هل شكلها في الرسم جميل؟", score: 0 },
      { id: "D", text: "هل تؤيد رأيي؟", score: 0 }
    ]
  },
  {
    id: "DA-010",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "aiConcepts",
    questionType: "choice",
    consistencyGroup: "CG-AI-BASIC-02",
    riskFlag: "aiOverReliance",
    text: "ما معنى هلوسة الذكاء الاصطناعي AI Hallucination؟",
    options: [
      { id: "A", text: "إجابة واثقة قد تكون غير دقيقة.", score: 3 },
      { id: "B", text: "خلل يظهر عندما يتوقف النظام.", score: 1 },
      { id: "C", text: "رفض الإجابة بسبب نقص البيانات.", score: 1 },
      { id: "D", text: "صياغة تبدو ضعيفة أو غير مفهومة.", score: 2 }
    ]
  },
  {
    id: "DA-011",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "securityAwareness",
    questionType: "scenario",
    consistencyGroup: "CG-SECURITY-01",
    riskFlag: "lowDigitalReadiness",
    text: "وصلك رابط يطلب تسجيل الدخول بحجة تحديث الحساب. ما التصرف الصحيح؟",
    options: [
      { id: "A", text: "أتحقق من المرسل والرابط عبر قناة رسمية.", score: 3 },
      { id: "B", text: "أفتح الرابط إذا بدا التصميم موثوقًا.", score: 1 },
      { id: "C", text: "أسأل الدعم الداخلي قبل إدخال البيانات.", score: 2 },
      { id: "D", text: "أجرب الرابط في جهاز غير مهم.", score: 1 }
    ]
  },

  {
    id: "AI-007",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "prompting",
    questionType: "choice",
    consistencyGroup: "CG-PROMPT-02",
    riskFlag: "aiOverReliance",
    text: "أي عنصر يجعل الطلب من AI أكثر دقة؟",
    options: [
      { id: "A", text: "كلمة احترافي فقط.", score: 1 },
      { id: "B", text: "السياق والهدف والجمهور والمخرج المطلوب والقيود.", score: 3 },
      { id: "C", text: "زيادة عدد الكلمات دون تحديد.", score: 1 },
      { id: "D", text: "طلب الإجابة بسرعة.", score: 0 }
    ]
  },
  {
    id: "AI-008",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "validation",
    questionType: "scenario",
    consistencyGroup: "CG-AI-VERIFY-01",
    riskFlag: "aiOverReliance",
    text: "إذا أعطاك AI إجابة في موضوع نظامي أو مالي حساس، ما التصرف الصحيح؟",
    options: [
      { id: "A", text: "أتحقق من مصدر رسمي أو مختص.", score: 3 },
      { id: "B", text: "أطلب منه توضيح الافتراضات والمصادر.", score: 2 },
      { id: "C", text: "أستخدمها إذا كانت مرتبة ومنطقية.", score: 1 },
      { id: "D", text: "أعيد السؤال بصياغة أكثر تحديدًا.", score: 1 }
    ]
  },
  {
    id: "AI-009",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "humanJudgment",
    questionType: "scenario",
    consistencyGroup: "CG-AI-JUDGMENT-01",
    riskFlag: "aiOverReliance",
    text: "ما العلامة التي تدل أنك تستخدم AI بدل التفكير لا لدعم التفكير؟",
    options: [
      { id: "A", text: "عندما أطلب منه أمثلة.", score: 1 },
      { id: "B", text: "عندما أقبل مخرجاته دون فهم أو مراجعة.", score: 3 },
      { id: "C", text: "عندما أطلب منه تبسيط مفهوم.", score: 1 },
      { id: "D", text: "عندما أطلب منه طرح أسئلة.", score: 1 }
    ]
  },
  {
    id: "AI-010",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "iteration",
    questionType: "scenario",
    consistencyGroup: "CG-PROMPT-ITERATION-01",
    riskFlag: "lowSelfAwareness",
    text: "إذا كانت إجابة AI قريبة من المطلوب لكنها ناقصة، ما التصرف الأفضل؟",
    options: [
      { id: "A", text: "أعيد السؤال بصياغة مختلفة.", score: 2 },
      { id: "B", text: "أنتقل لأداة أخرى مباشرة.", score: 1 },
      { id: "C", text: "أحدد النقص وأطلب تعديلًا محددًا.", score: 3 },
      { id: "D", text: "أطلب إجابة أطول وأكثر تفصيلًا.", score: 1 }
    ]
  },
  {
    id: "AI-011",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "roleDesign",
    questionType: "choice",
    consistencyGroup: "CG-AI-ROLE-01",
    riskFlag: "aiOverReliance",
    text: "عند استخدام AI للتعلم، أي دور تطلبه منه؟",
    options: [
      { id: "A", text: "مدرب يشرح ويسأل ثم يصحح الأداء.", score: 3 },
      { id: "B", text: "كاتب يصيغ الإجابات عند الحاجة.", score: 1 },
      { id: "C", text: "مساعد يلخص ويفتح أمثلة تدريبية.", score: 2 },
      { id: "D", text: "منظم يحول الدروس إلى نقاط.", score: 1 }
    ]
  },

  {
    id: "HC-012",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "selfReport",
    consistencyGroup: "CG-HABIT-01",
    riskFlag: "highConsistencyConflict",
    text: "ما الذي يجعلك تلتزم أكثر بعادة جديدة؟",
    options: [
      { id: "A", text: "بداية صغيرة واضحة ومكررة.", score: 3 },
      { id: "B", text: "قرار قوي من البداية.", score: 1 },
      { id: "C", text: "حماس عالٍ.", score: 1 },
      { id: "D", text: "وقت طويل متاح.", score: 1 }
    ]
  },
  {
    id: "HC-013",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "projection",
    consistencyGroup: "CG-FOCUS-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يغير مصدر التعلم كل يوم لأنه وجد شيئًا أفضل. ما تقييمك؟",
    options: [
      { id: "A", text: "يحتاج معيارًا واضحًا قبل تغيير المصدر.", score: 3 },
      { id: "B", text: "يتابع البدائل حتى لا يفوته الأفضل.", score: 1 },
      { id: "C", text: "لديه مرونة في تطوير طريقته.", score: 2 },
      { id: "D", text: "قد يخلط بين البحث والتقدم الفعلي.", score: 2 }
    ]
  },
  {
    id: "HC-014",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "selfReport",
    consistencyGroup: "CG-ENERGY-01",
    riskFlag: "highConsistencyConflict",
    text: "عندما تكون طاقتك منخفضة، كيف تتعامل مع الالتزام؟",
    options: [
      { id: "A", text: "أوقف الالتزام حتى أستعيد الطاقة.", score: 1 },
      { id: "B", text: "أختار نسخة مصغرة من المهمة حتى لا ينقطع المسار.", score: 3 },
      { id: "C", text: "أضغط على نفسي بمهمة كبيرة.", score: 0 },
      { id: "D", text: "أكتفي بالتخطيط دون تنفيذ.", score: 1 }
    ]
  },
  {
    id: "HC-015",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "projection",
    consistencyGroup: "CG-ACCOUNTABILITY-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص لا يلتزم إلا إذا كان هناك من يتابعه. ما التحليل الأقرب؟",
    options: [
      { id: "A", text: "يحتاج نظام مساءلة يتحول تدريجيًا إلى عادة.", score: 3 },
      { id: "B", text: "وجود متابع يساعده على الاستمرار.", score: 2 },
      { id: "C", text: "يعتمد على الرقابة أكثر من النظام الذاتي.", score: 2 },
      { id: "D", text: "ينتظر المتابعة بدل بناء التزام شخصي.", score: 1 }
    ]
  },
  {
    id: "HC-016",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "projection",
    consistencyGroup: "CG-TRANSFER-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يحضر دورات كثيرة لكنه لا يربطها بأي موقف واقعي. ما المشكلة المحتملة؟",
    options: [
      { id: "A", text: "يحتاج تحويل المعرفة إلى مواقف تطبيقية.", score: 3 },
      { id: "B", text: "يزيد مخزونه المعرفي قبل التطبيق.", score: 2 },
      { id: "C", text: "يتعلم نظريًا دون نقل واضح للأداء.", score: 2 },
      { id: "D", text: "يبحث عن دورة أنسب قبل التطبيق.", score: 1 }
    ]
  },
  {
    id: "HC-017",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "pressure",
    consistencyGroup: "CG-PRIORITY-02",
    riskFlag: "highConsistencyConflict",
    text: "إذا أصبح يومك مزدحمًا، ما أول شيء يحدث لمسار التعلم غالبًا؟",
    options: [
      { id: "A", text: "ألغيه كاملًا.", score: 0 },
      { id: "B", text: "أحافظ على نسخة قصيرة منه.", score: 3 },
      { id: "C", text: "أؤجله لنهاية الأسبوع.", score: 1 },
      { id: "D", text: "أكتفي بالتفكير فيه دون تطبيق.", score: 1 }
    ]
  },
  {
    id: "HC-018",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "selfReport",
    consistencyGroup: "CG-SELF-EVAL-01",
    riskFlag: "highConsistencyConflict",
    text: "كيف تعرف أنك أصبحت أفضل في مهارة معينة؟",
    options: [
      { id: "A", text: "إذا زادت ثقتي أثناء الأداء.", score: 1 },
      { id: "B", text: "إذا أنهيت محتوى أكثر.", score: 1 },
      { id: "C", text: "إذا تحسن أدائي في تطبيق جديد.", score: 3 },
      { id: "D", text: "إذا قلّت أخطائي مع التكرار.", score: 2 }
    ]
  },
  {
    id: "HC-019",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "selfReport",
    consistencyGroup: "CG-AI-VERIFY-01",
    riskFlag: "highConsistencyConflict",
    text: "ما مستوى ثقتك في إجابات AI عندما تكون مكتوبة بثقة؟",
    options: [
      { id: "A", text: "أتحقق حسب حساسية الموضوع.", score: 3 },
      { id: "B", text: "أثق بها إذا بدت منطقية.", score: 1 },
      { id: "C", text: "أراجعها إذا كان القرار مهمًا.", score: 2 },
      { id: "D", text: "أثق بها إذا كانت مفصلة.", score: 1 }
    ]
  },
  {
    id: "HC-020",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "projection",
    consistencyGroup: "CG-AI-JUDGMENT-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يستخدم AI لإعطاء إجابات جاهزة دون أن يفهمها. ما تقييمك؟",
    options: [
      { id: "A", text: "قد يوفر وقتًا في الصياغة، لكنه يضعف التعلم والحكم إذا لم يفهم المخرج ويراجعه.", score: 3 },
      { id: "B", text: "يوفر الوقت وهذا يفيد في بعض المهام.", score: 2 },
      { id: "C", text: "يضعف حكمه الشخصي وقدرته على التعلم.", score: 2 },
      { id: "D", text: "لا مشكلة إذا نجح في المهمة.", score: 0 }
    ]
  },
  {
    id: "HC-021",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "selfReport",
    consistencyGroup: "CG-REFLECTION-01",
    riskFlag: "highConsistencyConflict",
    text: "في نهاية الأسبوع، ما الذي تراجعه فعليًا غالبًا؟",
    options: [
      { id: "A", text: "ما أنجزت وما تعطل وما سأعدله.", score: 3 },
      { id: "B", text: "هل كنت مشغولًا أم لا.", score: 1 },
      { id: "C", text: "كم شعرت بالحماس.", score: 1 },
      { id: "D", text: "لا أراجع غالبًا.", score: 0 }
    ]
  }

,
  {
    id: "TH-017",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "evidenceThinking",
    questionType: "scenario",
    consistencyGroup: "CG-EVIDENCE-05",
    riskFlag: "weakEvidenceThinking",
    text: "إذا قال شخص: النتيجة واضحة ولا تحتاج بيانات، ما التصرف الأقرب للتفكير الناضج؟",
    options: [
      { id: "A", text: "أقبل رأيه إذا كان صاحب خبرة.", score: 1 },
      { id: "B", text: "أطلب الحد الأدنى من الأدلة قبل بناء حكم.", score: 3 },
      { id: "C", text: "أرفض رأيه مباشرة.", score: 0 },
      { id: "D", text: "أنتظر رأي الأغلبية.", score: 1 }
    ]
  },
  {
    id: "TH-018",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "secondOrderThinking",
    questionType: "scenario",
    consistencyGroup: "CG-SECOND-ORDER-01",
    riskFlag: "jumpingToSolutions",
    text: "عند اقتراح حل سريع، ما السؤال الذي يكشف جودة التفكير؟",
    options: [
      { id: "A", text: "هل الحل سهل التنفيذ؟", score: 1 },
      { id: "B", text: "هل سيبدو الحل مقنعًا أمام الآخرين؟", score: 1 },
      { id: "C", text: "ما النتائج الجانبية بعد تطبيق الحل؟", score: 3 },
      { id: "D", text: "من سيقوم بتنفيذه؟", score: 2 }
    ]
  },
  {
    id: "TH-019",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "mentalFlexibility",
    questionType: "projection",
    consistencyGroup: "CG-FLEXIBILITY-01",
    riskFlag: "lowSelfAwareness",
    text: "شخص يغيّر رأيه بعد ظهور دليل أقوى. ما تقييمك له؟",
    options: [
      { id: "A", text: "متردد ولا يثبت على موقف.", score: 0 },
      { id: "B", text: "مرن إذا كان تغييره مبنيًا على دليل واضح.", score: 3 },
      { id: "C", text: "يتأثر بالآخرين بسهولة.", score: 1 },
      { id: "D", text: "الأفضل أن يثبت على رأيه الأول.", score: 0 }
    ]
  },
  {
    id: "TH-020",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "systemsThinking",
    questionType: "scenario",
    consistencyGroup: "CG-SYSTEM-03",
    riskFlag: "blamingPeople",
    text: "إذا كانت الأخطاء تظهر عند نفس الخطوة في أكثر من مسار عمل، ما التفسير الأقوى؟",
    options: [
      { id: "A", text: "غالبًا هناك خلل في تصميم الخطوة أو مدخلاتها أو ضوابطها.", score: 3 },
      { id: "B", text: "الأشخاص عند هذه الخطوة أقل التزامًا.", score: 1 },
      { id: "C", text: "نحتاج تنبيهًا عامًا.", score: 1 },
      { id: "D", text: "الخطوة صعبة ولا يمكن تحسينها.", score: 0 }
    ]
  },
  {
    id: "TH-021",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "priorityThinking",
    questionType: "pressure",
    consistencyGroup: "CG-PRIORITY-03",
    riskFlag: "lowSelfAwareness",
    text: "في موقف مزدحم، كيف تختار ما تبدأ به؟",
    options: [
      { id: "A", text: "أبدأ بما يطلبه الآخرون بصوت أعلى.", score: 1 },
      { id: "B", text: "أبدأ بالأسهل حتى أشعر بالإنجاز.", score: 1 },
      { id: "C", text: "أبدأ بما يقلل الخطر أو يفتح الطريق لبقية الأعمال.", score: 3 },
      { id: "D", text: "أبدأ بما أحب عمله.", score: 0 }
    ]
  },
  {
    id: "TH-022",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "conceptualClarity",
    questionType: "choice",
    consistencyGroup: "CG-CONCEPT-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا اختلف شخصان لأن كل واحد يستخدم نفس الكلمة بمعنى مختلف، ما أول إجراء؟",
    options: [
      { id: "A", text: "تحديد تعريف مشترك للكلمة قبل النقاش.", score: 3 },
      { id: "B", text: "اختيار رأي الطرف الأقوى.", score: 0 },
      { id: "C", text: "إطالة النقاش حتى يتضح المقصود.", score: 1 },
      { id: "D", text: "تجنب الكلمة واستخدام بديل عام.", score: 1 }
    ]
  },
  {
    id: "TH-023",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "probabilisticThinking",
    questionType: "scenario",
    consistencyGroup: "CG-PROBABILITY-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا كان لديك تفسير محتمل لمشكلة، ما الصياغة الأدق؟",
    options: [
      { id: "A", text: "هذا هو السبب.", score: 0 },
      { id: "B", text: "قد يكون هذا سببًا محتملًا يحتاج تحققًا.", score: 3 },
      { id: "C", text: "أشعر أن هذا هو السبب.", score: 1 },
      { id: "D", text: "هذا السبب منتشر في حالات مشابهة.", score: 2 }
    ]
  },

  {
    id: "AN-017",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "scopeDefinition",
    questionType: "scenario",
    consistencyGroup: "CG-SCOPE-01",
    riskFlag: "jumpingToSolutions",
    text: "عند بدء تحليل مشكلة كبيرة، ما أول خطوة تضبط التحليل؟",
    options: [
      { id: "A", text: "تحديد نطاق المشكلة وما يدخل فيه وما لا يدخل.", score: 3 },
      { id: "B", text: "جمع كل الحلول الممكنة.", score: 1 },
      { id: "C", text: "سؤال أكثر شخص متضرر.", score: 1 },
      { id: "D", text: "كتابة تقرير طويل.", score: 0 }
    ]
  },
  {
    id: "AN-018",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "rootCause",
    questionType: "scenario",
    consistencyGroup: "CG-ROOT-03",
    riskFlag: "blamingPeople",
    text: "إذا قال الفريق: السبب هو ضغط العمل، ما السؤال التحليلي التالي؟",
    options: [
      { id: "A", text: "من أكثر شخص مضغوط؟", score: 1 },
      { id: "B", text: "ما نوع الضغط، ومتى يظهر، وما الخطوة التي يتراكم عندها؟", score: 3 },
      { id: "C", text: "هل نطلب موظفين أكثر؟", score: 1 },
      { id: "D", text: "هل الفريق يبالغ؟", score: 0 }
    ]
  },
  {
    id: "AN-019",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "comparisonAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-COMPARISON-01",
    riskFlag: "weakEvidenceThinking",
    text: "لديك فرعان أحدهما أفضل أداءً من الآخر. ما التحليل الأنسب؟",
    options: [
      { id: "A", text: "اعتبار الفرع الأفضل نموذجًا كاملًا يطبق فورًا.", score: 1 },
      { id: "B", text: "مقارنة السياق والموارد وحجم العمل وطريقة التشغيل بين الفرعين.", score: 3 },
      { id: "C", text: "لوم الفرع الأقل أداءً.", score: 0 },
      { id: "D", text: "نقل مدير الفرع الأفضل للفرع الآخر.", score: 1 }
    ]
  },
  {
    id: "AN-020",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "trendAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-TREND-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا تحسّن المؤشر شهرًا واحدًا بعد تدهور طويل، ما القراءة الأدق؟",
    options: [
      { id: "A", text: "أعتبره تحسنًا أوليًا يحتاج متابعة.", score: 2 },
      { id: "B", text: "أتابع الاتجاه وأفحص سبب التحسن.", score: 3 },
      { id: "C", text: "أعلن نجاح الخطة الحالية.", score: 1 },
      { id: "D", text: "أوقف المتابعة مؤقتًا.", score: 1 }
    ]
  },
  {
    id: "AN-021",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "impactAnalysis",
    questionType: "choice",
    consistencyGroup: "CG-IMPACT-01",
    riskFlag: "jumpingToSolutions",
    text: "ما الفرق بين مخرج Output وأثر Impact في التحليل؟",
    options: [
      { id: "A", text: "المخرج ما ننتجه، والأثر ما يتغير.", score: 3 },
      { id: "B", text: "المخرج يصف النشاط أكثر من النتيجة.", score: 2 },
      { id: "C", text: "الأثر يعني عدد الأنشطة المنفذة.", score: 1 },
      { id: "D", text: "المخرج أهم لأنه أسهل قياسًا.", score: 1 }
    ]
  },
  {
    id: "AN-022",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "constraintAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-CONSTRAINT-01",
    riskFlag: "jumpingToSolutions",
    text: "إذا لم يتحسن المسار رغم تحسين عدة خطوات، ما الفرضية المهمة؟",
    options: [
      { id: "A", text: "قد توجد نقطة اختناق واحدة تحدد سرعة المسار كله.", score: 3 },
      { id: "B", text: "كل الفريق غير متعاون.", score: 0 },
      { id: "C", text: "نحتاج تحسين كل شيء في نفس الوقت.", score: 1 },
      { id: "D", text: "التحسين غير مفيد.", score: 0 }
    ]
  },
  {
    id: "AN-023",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "solutionFit",
    questionType: "scenario",
    consistencyGroup: "CG-SOLUTION-FIT-01",
    riskFlag: "jumpingToSolutions",
    text: "كيف تعرف أن الحل المقترح مناسب للمشكلة؟",
    options: [
      { id: "A", text: "إذا كان الحل مشهورًا.", score: 1 },
      { id: "B", text: "إذا كان الحل سهلًا.", score: 1 },
      { id: "C", text: "إذا كان مرتبطًا بسبب محدد ويملك طريقة قياس للأثر.", score: 3 },
      { id: "D", text: "إذا وافق عليه أغلب الفريق.", score: 1 }
    ]
  },

  {
    id: "SD-022",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "identityAndBehavior",
    questionType: "selfAssessment",
    consistencyGroup: "CG-IDENTITY-01",
    riskFlag: "lowSelfAwareness",
    text: "أي عبارة أقرب لبناء مهارة حقيقية؟",
    options: [
      { id: "A", text: "أنا شخص يريد التطور.", score: 1 },
      { id: "B", text: "أنا أمارس سلوكًا صغيرًا يوميًا يخدم المهارة.", score: 3 },
      { id: "C", text: "أنا أقرأ كثيرًا عن التطور.", score: 1 },
      { id: "D", text: "أنا أنتظر الفرصة المناسبة للتطور.", score: 0 }
    ]
  },
  {
    id: "SD-023",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "emotionalRegulation",
    questionType: "scenario",
    consistencyGroup: "CG-EMOTION-01",
    riskFlag: "lowSelfAwareness",
    text: "إذا شعرت بالإحباط بعد خطأ، ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أفصل الشعور عن التقييم وأحدد ما الذي يمكن تعديله.", score: 3 },
      { id: "B", text: "أترك المهمة حتى يختفي الإحباط.", score: 1 },
      { id: "C", text: "أضغط على نفسي أكثر.", score: 1 },
      { id: "D", text: "أعتبر الخطأ دليل فشل.", score: 0 }
    ]
  },
  {
    id: "SD-024",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "learningOwnership",
    questionType: "scenario",
    consistencyGroup: "CG-OWNERSHIP-01",
    riskFlag: "avoidingApplication",
    text: "إذا لم يكن المدرب واضحًا بما يكفي، ما التصرف الأقرب للمتعلم الناضج؟",
    options: [
      { id: "A", text: "يطرح سؤالًا محددًا ثم يجرب مثالًا.", score: 3 },
      { id: "B", text: "ينتظر شرحًا آخر قبل المحاولة.", score: 1 },
      { id: "C", text: "يبحث عن مثال يساعده على الفهم.", score: 2 },
      { id: "D", text: "ينتقل إلى مصدر آخر بسرعة.", score: 1 }
    ]
  },

  {
    id: "DA-012",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "spreadsheetBasics",
    questionType: "choice",
    consistencyGroup: "CG-EXCEL-02",
    riskFlag: "lowDigitalReadiness",
    text: "في جدول بيانات، ما فائدة الفرز Filter/Sort؟",
    options: [
      { id: "A", text: "تجميل الجدول فقط.", score: 0 },
      { id: "B", text: "تنظيم البيانات لاكتشاف نمط أو حالة محددة.", score: 3 },
      { id: "C", text: "حذف الأخطاء تلقائيًا.", score: 1 },
      { id: "D", text: "تحويل الجدول إلى عرض تقديمي.", score: 0 }
    ]
  },
  {
    id: "DA-013",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "documentSkills",
    questionType: "scenario",
    consistencyGroup: "CG-DOCUMENT-01",
    riskFlag: "lowDigitalReadiness",
    text: "عند إعداد تقرير رسمي، ما السلوك الرقمي الأنسب؟",
    options: [
      { id: "A", text: "كتابة النص كاملًا دون عناوين.", score: 1 },
      { id: "B", text: "استخدام عناوين وأنماط وتاريخ ونسخة واضحة.", score: 3 },
      { id: "C", text: "إرسال التقرير كصورة.", score: 0 },
      { id: "D", text: "الاعتماد على التنسيق اليدوي فقط.", score: 1 }
    ]
  },
  {
    id: "DA-014",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "presentationSkills",
    questionType: "scenario",
    consistencyGroup: "CG-PRESENTATION-01",
    riskFlag: "lowDigitalReadiness",
    text: "ما أكبر خطأ في عرض PowerPoint تحليلي؟",
    options: [
      { id: "A", text: "نص كثير بلا رسالة واضحة.", score: 3 },
      { id: "B", text: "عناوين قصيرة مع أرقام كثيرة.", score: 1 },
      { id: "C", text: "رسوم كثيرة دون تفسير كافٍ.", score: 2 },
      { id: "D", text: "ألوان كثيرة في كل شريحة.", score: 1 }
    ]
  },
  {
    id: "DA-015",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "cloudBasics",
    questionType: "choice",
    consistencyGroup: "CG-CLOUD-01",
    riskFlag: "lowDigitalReadiness",
    text: "ما فائدة حفظ الملفات في مجلد سحابي منظم؟",
    options: [
      { id: "A", text: "يزيد حجم الملف.", score: 0 },
      { id: "B", text: "يسمح بالوصول والنسخ الاحتياطي والمشاركة المنظمة.", score: 3 },
      { id: "C", text: "يغني عن تسمية الملفات.", score: 0 },
      { id: "D", text: "يجعل كل الملفات آمنة تلقائيًا دون صلاحيات.", score: 1 }
    ]
  },
  {
    id: "DA-016",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "automationAwareness",
    questionType: "choice",
    consistencyGroup: "CG-AUTOMATION-01",
    riskFlag: "lowDigitalReadiness",
    text: "ما الفرق الأقرب بين Automation والذكاء الاصطناعي؟",
    options: [
      { id: "A", text: "Automation ينفذ خطوات، وAI يساعد في الفهم.", score: 3 },
      { id: "B", text: "Automation أسرع في كل أنواع القرارات.", score: 1 },
      { id: "C", text: "AI مجرد تنفيذ آلي للأوامر.", score: 1 },
      { id: "D", text: "كلاهما يستخدم لتقليل الجهد البشري.", score: 2 }
    ]
  },
  {
    id: "DA-017",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "dataCleaning",
    questionType: "scenario",
    consistencyGroup: "CG-DATA-CLEAN-01",
    riskFlag: "lowDigitalReadiness",
    text: "قبل تحليل ملف بيانات، ما خطوة ضرورية غالبًا؟",
    options: [
      { id: "A", text: "مراجعة التكرار والنواقص وتوحيد التسميات.", score: 3 },
      { id: "B", text: "تغيير شكل الجدول لتحسين القراءة.", score: 1 },
      { id: "C", text: "حفظ نسخة قبل بدء المعالجة.", score: 2 },
      { id: "D", text: "إرسال الملف لمن يطلب التقرير.", score: 1 }
    ]
  },
  {
    id: "DA-018",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "aiUseCaseSelection",
    questionType: "scenario",
    consistencyGroup: "CG-AI-USECASE-01",
    riskFlag: "aiOverReliance",
    text: "أي مهمة أنسب لاستخدام AI كبداية آمنة؟",
    options: [
      { id: "A", text: "تلخيص نص عام مع مراجعة بشرية.", score: 3 },
      { id: "B", text: "صياغة رأي نظامي قبل اعتماده.", score: 1 },
      { id: "C", text: "اقتراح قرار مالي أولي للمراجعة.", score: 2 },
      { id: "D", text: "تحرير معلومة حساسة للنشر السريع.", score: 1 }
    ]
  },

  {
    id: "AI-012",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "promptStructure",
    questionType: "choice",
    consistencyGroup: "CG-PROMPT-STRUCTURE-01",
    riskFlag: "aiOverReliance",
    text: "ما الصيغة الأقوى لطلب من AI؟",
    options: [
      { id: "A", text: "اطلب أفضل جواب بصياغة احترافية.", score: 1 },
      { id: "B", text: "حدّد الدور والسياق والهدف وشكل المخرج.", score: 3 },
      { id: "C", text: "اذكر الهدف وبعض القيود المتاحة.", score: 2 },
      { id: "D", text: "اطلب شرحًا عامًا ثم اختصره.", score: 1 }
    ]
  },
  {
    id: "AI-013",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "questioning",
    questionType: "scenario",
    consistencyGroup: "CG-AI-QUESTIONING-01",
    riskFlag: "lowSelfAwareness",
    text: "متى تطلب من AI أن يسألك قبل الإجابة؟",
    options: [
      { id: "A", text: "عندما يؤثر نقص التفاصيل على الجواب.", score: 3 },
      { id: "B", text: "عندما أريد محادثة أطول.", score: 1 },
      { id: "C", text: "عندما يكون المطلوب جديدًا عليّ.", score: 2 },
      { id: "D", text: "عندما لا أعرف صياغة السؤال.", score: 1 }
    ]
  },
  {
    id: "AI-014",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "critiqueUse",
    questionType: "scenario",
    consistencyGroup: "CG-AI-CRITIQUE-01",
    riskFlag: "aiOverReliance",
    text: "بعد أن يعطيك AI خطة تبدو جيدة، ما الطلب التالي الأقوى؟",
    options: [
      { id: "A", text: "اجعلها أجمل.", score: 1 },
      { id: "B", text: "اكتبها بشكل أطول.", score: 1 },
      { id: "C", text: "انتقد الخطة، واكشف الافتراضات والمخاطر والثغرات.", score: 3 },
      { id: "D", text: "حوّلها إلى صياغة رسمية فقط.", score: 1 }
    ]
  },
  {
    id: "AI-015",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "taskDecomposition",
    questionType: "scenario",
    consistencyGroup: "CG-AI-DECOMPOSE-01",
    riskFlag: "jumpingToSolutions",
    text: "إذا كانت المهمة كبيرة ومعقدة، ما أفضل طلب من AI؟",
    options: [
      { id: "A", text: "أن يقسمها إلى مراحل ومخرجات ومعايير قبول.", score: 3 },
      { id: "B", text: "أن ينجزها كاملة دفعة واحدة.", score: 1 },
      { id: "C", text: "أن يكتب مقدمة طويلة.", score: 0 },
      { id: "D", text: "أن يعطيني رأيه فقط.", score: 1 }
    ]
  },
  {
    id: "AI-016",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "sourceAwareness",
    questionType: "scenario",
    consistencyGroup: "CG-AI-SOURCE-01",
    riskFlag: "aiOverReliance",
    text: "إذا طلبت من AI معلومة حديثة ولم يذكر مصدرًا، ما التصرف الصحيح؟",
    options: [
      { id: "A", text: "أستخدمها إذا كانت منطقية.", score: 0 },
      { id: "B", text: "أطلب مصادر ثم أتحقق من مصدر موثوق مستقل.", score: 3 },
      { id: "C", text: "أطلب منه تأكيدها فقط.", score: 1 },
      { id: "D", text: "أعيد السؤال بصياغة مختلفة.", score: 1 }
    ]
  },
  {
    id: "AI-017",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "contextControl",
    questionType: "choice",
    consistencyGroup: "CG-AI-CONTEXT-01",
    riskFlag: "lowSelfAwareness",
    text: "ما الذي يحدث غالبًا إذا أعطيت AI سياقًا ناقصًا؟",
    options: [
      { id: "A", text: "قد يبني الإجابة على افتراضات غير مناسبة.", score: 3 },
      { id: "B", text: "يعطي جوابًا عامًا يحتاج ضبطًا.", score: 2 },
      { id: "C", text: "يعوض النقص من صياغة السؤال.", score: 1 },
      { id: "D", text: "تصبح الإجابة أوسع وأكثر إبداعًا.", score: 1 }
    ]
  },
  {
    id: "AI-018",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "learningAssessment",
    questionType: "scenario",
    consistencyGroup: "CG-AI-ASSESSMENT-01",
    riskFlag: "avoidingApplication",
    text: "إذا أردت من AI اختبار فهمك، ما الصيغة الأفضل؟",
    options: [
      { id: "A", text: "اختبرني تدريجيًا وصحح طريقة تفكيري.", score: 3 },
      { id: "B", text: "اعطني أسئلة مع إجاباتها للمراجعة.", score: 1 },
      { id: "C", text: "اسألني ثم انتظر إجابتي قبل التصحيح.", score: 2 },
      { id: "D", text: "اكتب اختبارًا شاملًا أراجعه لاحقًا.", score: 1 }
    ]
  },

  {
    id: "HC-022",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "selfReport",
    consistencyGroup: "CG-EMOTION-01",
    riskFlag: "highConsistencyConflict",
    text: "عندما يزعجك خطأ ارتكبته، ما الذي يحدث غالبًا؟",
    options: [
      { id: "A", text: "أراجع الخطأ وأحدد تعديلًا عمليًا.", score: 3 },
      { id: "B", text: "أتوقف فترة طويلة.", score: 1 },
      { id: "C", text: "ألوم نفسي دون تغيير واضح.", score: 0 },
      { id: "D", text: "أتجاهل الموضوع.", score: 0 }
    ]
  },
  {
    id: "HC-023",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "projection",
    consistencyGroup: "CG-OWNERSHIP-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يحمّل المدرب كامل مسؤولية عدم فهمه. ما تقييمك؟",
    options: [
      { id: "A", text: "قد يكون للشرح دور إذا لم تكن الأمثلة واضحة.", score: 2 },
      { id: "B", text: "قد يكون للشرح دور، لكن المتعلم يحتاج سؤالًا وتطبيقًا وبحثًا مساعدًا.", score: 3 },
      { id: "C", text: "يتجنب مسؤوليته كمتعلم.", score: 2 },
      { id: "D", text: "يجب أن يترك التعلم الذاتي.", score: 0 }
    ]
  },
  {
    id: "HC-024",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "selfReport",
    consistencyGroup: "CG-AI-SOURCE-01",
    riskFlag: "highConsistencyConflict",
    text: "عندما يعطيك AI معلومة حديثة دون مصدر، ما الذي تفعله غالبًا؟",
    options: [
      { id: "A", text: "أقبلها إذا كانت مقنعة.", score: 0 },
      { id: "B", text: "أبحث عن مصدر موثوق قبل استخدامها.", score: 3 },
      { id: "C", text: "أطلب منه إعادة الصياغة.", score: 1 },
      { id: "D", text: "أستخدمها مع عبارة حسب ما ورد.", score: 1 }
    ]
  }

,
  {
    id: "TH-024",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "argumentEvaluation",
    questionType: "scenario",
    consistencyGroup: "CG-ARGUMENT-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا كان كلام شخص مرتبًا وجذابًا لكنه بلا دليل، ما الموقف الأقرب للتفكير الناضج؟",
    options: [
      { id: "A", text: "أقبل الكلام لأن ترتيبه يدل على فهم.", score: 1 },
      { id: "B", text: "أميز بين جمال العرض وقوة الدليل قبل الحكم.", score: 3 },
      { id: "C", text: "أرفض الكلام فورًا لأنه بلا دليل.", score: 1 },
      { id: "D", text: "أعتمد على انطباعي من المتحدث.", score: 0 }
    ]
  },
  {
    id: "TH-025",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "tradeOffThinking",
    questionType: "choice",
    consistencyGroup: "CG-TRADEOFF-01",
    riskFlag: "lowSelfAwareness",
    text: "عندما يكون لكل خيار مكسب وخسارة، ما طريقة التفكير الأفضل؟",
    options: [
      { id: "A", text: "اختيار الخيار الذي له مكاسب أكثر ظاهريًا.", score: 1 },
      { id: "B", text: "تحديد المفاضلات وما الذي أقبل خسارته مقابل الهدف.", score: 3 },
      { id: "C", text: "تجنب القرار حتى يظهر خيار بلا خسائر.", score: 0 },
      { id: "D", text: "اختيار ما يفضله أغلب الناس.", score: 1 }
    ]
  },
  {
    id: "TH-026",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "learningThinking",
    questionType: "scenario",
    consistencyGroup: "CG-LEARNING-THINK-01",
    riskFlag: "avoidingApplication",
    text: "عند تعلم مفهوم جديد، ما السؤال الذي يكشف فهمًا أعمق؟",
    options: [
      { id: "A", text: "ما تعريفه؟", score: 1 },
      { id: "B", text: "متى ينطبق ومتى لا ينطبق؟", score: 3 },
      { id: "C", text: "كم يستغرق حفظه؟", score: 0 },
      { id: "D", text: "من قال هذا المفهوم؟", score: 1 }
    ]
  },
  {
    id: "TH-027",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "errorThinking",
    questionType: "scenario",
    consistencyGroup: "CG-ERROR-01",
    riskFlag: "lowSelfAwareness",
    text: "عندما يثبت أن قرارًا سابقًا كان خاطئًا، ما الاستجابة الأقرب للنضج؟",
    options: [
      { id: "A", text: "أبرر القرار لأنه كان مناسبًا في وقته دون مراجعة.", score: 1 },
      { id: "B", text: "أراجع المعلومات والافتراضات التي قادت للقرار.", score: 3 },
      { id: "C", text: "أبحث عمن تسبب في الخطأ.", score: 0 },
      { id: "D", text: "أتجنب اتخاذ قرارات مشابهة لاحقًا.", score: 1 }
    ]
  },
  {
    id: "TH-028",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "abstraction",
    questionType: "projection",
    consistencyGroup: "CG-ABSTRACTION-01",
    riskFlag: "weakEvidenceThinking",
    text: "شخص يحفظ أمثلة كثيرة لكنه لا يستطيع استخراج القاعدة منها. ما الفجوة الأقرب؟",
    options: [
      { id: "A", text: "لديه معرفة متفرقة دون تجريد النمط أو القاعدة.", score: 3 },
      { id: "B", text: "يحتاج أمثلة أكثر فقط.", score: 1 },
      { id: "C", text: "لا يناسبه التعلم العملي.", score: 0 },
      { id: "D", text: "يفهم جيدًا ما دام يحفظ الأمثلة.", score: 1 }
    ]
  },
  {
    id: "TH-029",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "independentThinking",
    questionType: "scenario",
    consistencyGroup: "CG-INDEPENDENT-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا وافق أغلب الحضور على رأي لا تراه مدعومًا بدليل كافٍ، ماذا تفعل؟",
    options: [
      { id: "A", text: "أوافق حتى لا أعطل المجموعة.", score: 0 },
      { id: "B", text: "أطرح سؤالًا عن الدليل أو الافتراض دون تصعيد.", score: 3 },
      { id: "C", text: "أرفض الرأي علنًا مباشرة.", score: 1 },
      { id: "D", text: "أمتنع عن المشاركة.", score: 1 }
    ]
  },
  {
    id: "TH-030",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "synthesisThinking",
    questionType: "scenario",
    consistencyGroup: "CG-SYNTHESIS-01",
    riskFlag: "lowSelfAwareness",
    text: "عندما تكون لديك معلومات كثيرة ومتفرقة، ما الخطوة التي تحولها إلى فهم؟",
    options: [
      { id: "A", text: "أجمع المزيد من المعلومات.", score: 1 },
      { id: "B", text: "أرتبها في أنماط وعلاقات واستنتاجات قابلة للاختبار.", score: 3 },
      { id: "C", text: "أحفظ أهم النقاط كما هي.", score: 1 },
      { id: "D", text: "أطلب ملخصًا سريعًا فقط.", score: 0 }
    ]
  },

  {
    id: "AN-024",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "baselineAnalysis",
    questionType: "scenario",
    consistencyGroup: "CG-BASELINE-01",
    riskFlag: "weakEvidenceThinking",
    text: "قبل الحكم أن الأداء تحسن، ما الشيء الذي يجب توفره؟",
    options: [
      { id: "A", text: "انطباع عام أن الوضع أفضل.", score: 0 },
      { id: "B", text: "خط أساس واضح للمقارنة قبل وبعد.", score: 3 },
      { id: "C", text: "رضا الفريق عن التحسن.", score: 1 },
      { id: "D", text: "تقرير طويل يشرح الجهود.", score: 1 }
    ]
  },
  {
    id: "AN-025",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "segmentation",
    questionType: "scenario",
    consistencyGroup: "CG-SEGMENT-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا كان رضا المستفيدين منخفضًا، ما التحليل الأقوى من مجرد المتوسط العام؟",
    options: [
      { id: "A", text: "تقسيم الرضا حسب الخدمة أو الفئة.", score: 3 },
      { id: "B", text: "إعلان أن مستوى الرضا يحتاج تحسينًا.", score: 1 },
      { id: "C", text: "مقارنة الفئات لاكتشاف مصدر الانخفاض.", score: 2 },
      { id: "D", text: "تدريب الفريق لتحسين التعامل.", score: 1 }
    ]
  },
  {
    id: "AN-026",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "countermeasure",
    questionType: "scenario",
    consistencyGroup: "CG-COUNTERMEASURE-01",
    riskFlag: "jumpingToSolutions",
    text: "ما الفرق بين حل مؤقت وحل جذري في معالجة مشكلة؟",
    options: [
      { id: "A", text: "المؤقت يخفف الأثر، والجذري يمنع التكرار.", score: 3 },
      { id: "B", text: "المؤقت أسرع والجذري يحتاج متابعة.", score: 2 },
      { id: "C", text: "المؤقت يكفي إذا أوقف المشكلة.", score: 1 },
      { id: "D", text: "الجذري هو الحل الأسهل تطبيقًا.", score: 1 }
    ]
  },
  {
    id: "AN-027",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "causalChain",
    questionType: "scenario",
    consistencyGroup: "CG-CAUSE-CHAIN-01",
    riskFlag: "jumpingToSolutions",
    text: "عند وجود سبب مباشر وسبب أعمق، ما الأفضل في التحليل؟",
    options: [
      { id: "A", text: "الاكتفاء بالسبب المباشر لأنه واضح.", score: 1 },
      { id: "B", text: "تتبع سلسلة الأسباب حتى نصل لسبب قابل للمعالجة.", score: 3 },
      { id: "C", text: "تجاوز الأسباب والانتقال للحلول.", score: 0 },
      { id: "D", text: "اختيار السبب الذي يتفق عليه الجميع.", score: 1 }
    ]
  },
  {
    id: "AN-028",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "measurementDesign",
    questionType: "choice",
    consistencyGroup: "CG-MEASURE-01",
    riskFlag: "weakEvidenceThinking",
    text: "إذا أردت قياس أثر تدريب، ما القياس الأقوى؟",
    options: [
      { id: "A", text: "عدد الحضور في البرنامج التدريبي.", score: 1 },
      { id: "B", text: "رضا المتدربين بعد نهاية التدريب.", score: 1 },
      { id: "C", text: "تغير الأداء مقارنة بخط أساس.", score: 3 },
      { id: "D", text: "تطبيق السلوك في موقف عمل.", score: 2 }
    ]
  },
  {
    id: "AN-029",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "confoundingFactors",
    questionType: "scenario",
    consistencyGroup: "CG-CONFOUNDING-01",
    riskFlag: "weakEvidenceThinking",
    text: "تحسنت النتائج بعد مبادرة جديدة. ما الخطر التحليلي؟",
    options: [
      { id: "A", text: "نسبة التحسن قد تكون بسبب عوامل أخرى لم نفحصها.", score: 3 },
      { id: "B", text: "المبادرة هي السبب المؤكد.", score: 0 },
      { id: "C", text: "لا حاجة للفحص إذا كانت النتيجة جيدة.", score: 0 },
      { id: "D", text: "نوقف كل المبادرات الأخرى.", score: 1 }
    ]
  },
  {
    id: "AN-030",
    mode: ["screening", "diagnostic"],
    axis: "analysis",
    subAxis: "recommendationQuality",
    questionType: "scenario",
    consistencyGroup: "CG-RECOMMENDATION-01",
    riskFlag: "jumpingToSolutions",
    text: "ما شكل التوصية التحليلية الجيدة؟",
    options: [
      { id: "A", text: "حل واضح دون تفاصيل كثيرة.", score: 1 },
      { id: "B", text: "توصية مرتبطة بسبب محدد، مع أثر متوقع ومخاطر وخطوة تنفيذ.", score: 3 },
      { id: "C", text: "اقتراح عام للتحسين.", score: 0 },
      { id: "D", text: "رأي خبير مكتوب بلغة قوية.", score: 1 }
    ]
  },

  {
    id: "SD-025",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "deliberatePractice",
    questionType: "scenario",
    consistencyGroup: "CG-PRACTICE-01",
    riskFlag: "avoidingApplication",
    text: "ما الذي يجعل التدريب على مهارة فعّالًا؟",
    options: [
      { id: "A", text: "تدريب مركز على ضعف محدد مع تصحيح.", score: 3 },
      { id: "B", text: "تكرار مستمر حتى تزيد الألفة.", score: 1 },
      { id: "C", text: "تجربة قصيرة ثم مراجعة الخطأ.", score: 2 },
      { id: "D", text: "قراءة أوسع قبل بدء التدريب.", score: 1 }
    ]
  },
  {
    id: "SD-026",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "environmentDesign",
    questionType: "scenario",
    consistencyGroup: "CG-ENVIRONMENT-01",
    riskFlag: "avoidingApplication",
    text: "إذا كان التشتت يمنعك من التعلم، ما الحل الأقوى؟",
    options: [
      { id: "A", text: "أضبط البيئة والوقت وأبعد المشتتات.", score: 3 },
      { id: "B", text: "أنتظر وقتًا تكون فيه الظروف أفضل.", score: 1 },
      { id: "C", text: "أقلل مدة التعلم وأحدد مكانًا ثابتًا.", score: 2 },
      { id: "D", text: "أعتمد على الحماس وقت توفره.", score: 1 }
    ]
  },
  {
    id: "SD-027",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "failureLearning",
    questionType: "scenario",
    consistencyGroup: "CG-FAILURE-01",
    riskFlag: "lowSelfAwareness",
    text: "ما أفضل استخدام للفشل في مسار التعلم؟",
    options: [
      { id: "A", text: "اعتباره بيانات تكشف ما يحتاج تعديلًا.", score: 3 },
      { id: "B", text: "اعتباره دليلًا على ضعف القدرة.", score: 0 },
      { id: "C", text: "تجاهله حتى لا يؤثر على الحماس.", score: 1 },
      { id: "D", text: "تعويضه بضغط أكبر دائمًا.", score: 1 }
    ]
  },
  {
    id: "SD-028",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "consistency",
    questionType: "scenario",
    consistencyGroup: "CG-CONSISTENCY-01",
    riskFlag: "avoidingApplication",
    text: "ما السلوك الأقرب لبناء مهارة خلال 3 أشهر؟",
    options: [
      { id: "A", text: "دفعات حماس كبيرة ثم توقف.", score: 0 },
      { id: "B", text: "تطبيق قصير منتظم مع مراجعة أسبوعية.", score: 3 },
      { id: "C", text: "قراءة طويلة دون تطبيق.", score: 1 },
      { id: "D", text: "انتظار الوقت المثالي.", score: 0 }
    ]
  },
  {
    id: "SD-029",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "helpSeeking",
    questionType: "scenario",
    consistencyGroup: "CG-HELP-01",
    riskFlag: "lowSelfAwareness",
    text: "متى يكون طلب المساعدة علامة نضج؟",
    options: [
      { id: "A", text: "عندما أحدد ما جربته وما الذي تعطل وما السؤال المطلوب.", score: 3 },
      { id: "B", text: "عندما أطلب من الآخر إنجاز المهمة بدلًا عني.", score: 0 },
      { id: "C", text: "عندما أطلب شرحًا عامًا بلا محاولة.", score: 1 },
      { id: "D", text: "عندما أريد اختصار كل التعلم.", score: 0 }
    ]
  },
  {
    id: "SD-030",
    mode: ["screening", "diagnostic"],
    axis: "selfDevelopment",
    subAxis: "masteryMindset",
    questionType: "choice",
    consistencyGroup: "CG-MASTERY-01",
    riskFlag: "lowSelfAwareness",
    text: "ما الفرق بين إنهاء دورة وإتقان مهارة؟",
    options: [
      { id: "A", text: "لا فرق؛ إنهاء الدورة يعني الإتقان.", score: 0 },
      { id: "B", text: "الدورة تعرض المعرفة، والإتقان يظهر في التطبيق المتكرر بجودة متحسنة.", score: 3 },
      { id: "C", text: "الإتقان يعني حفظ كل الدروس.", score: 1 },
      { id: "D", text: "إنهاء الدورة أهم من التطبيق.", score: 0 }
    ]
  },

  {
    id: "DA-019",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "basicTroubleshooting",
    questionType: "scenario",
    consistencyGroup: "CG-TROUBLESHOOT-01",
    riskFlag: "lowDigitalReadiness",
    text: "إذا تعطل تطبيق تستخدمه، ما أول تشخيص رقمي منطقي؟",
    options: [
      { id: "A", text: "أفحص الاتصال والحساب والملف والتحديثات.", score: 3 },
      { id: "B", text: "أعيد التشغيل وأراقب هل تتكرر المشكلة.", score: 2 },
      { id: "C", text: "أحذف التطبيق وأبحث عن بديل.", score: 1 },
      { id: "D", text: "أفترض أن الجهاز هو السبب.", score: 1 }
    ]
  },
  {
    id: "DA-020",
    mode: ["screening", "diagnostic"],
    axis: "digitalAiBasics",
    subAxis: "workflowAwareness",
    questionType: "choice",
    consistencyGroup: "CG-WORKFLOW-01",
    riskFlag: "lowDigitalReadiness",
    text: "ما معنى أن تكون المهارة الرقمية عملية لا نظرية فقط؟",
    options: [
      { id: "A", text: "أن أعرف أسماء البرامج.", score: 1 },
      { id: "B", text: "أن أستخدم الأداة لإنتاج مخرج حقيقي يحل مشكلة أو ينظم عملًا.", score: 3 },
      { id: "C", text: "أن أشاهد شروحات كثيرة.", score: 1 },
      { id: "D", text: "أن أملك جهازًا حديثًا.", score: 0 }
    ]
  },

  {
    id: "AI-019",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "aiAsCoach",
    questionType: "scenario",
    consistencyGroup: "CG-AI-COACH-01",
    riskFlag: "avoidingApplication",
    text: "كيف تجعل AI مدربًا لا مجرد كاتب؟",
    options: [
      { id: "A", text: "أطلب شرحًا وتمرينًا وتصحيحًا تدريجيًا.", score: 3 },
      { id: "B", text: "أطلب نموذجًا جاهزًا ثم أعدله.", score: 1 },
      { id: "C", text: "أطلب أسئلة تدريبية مع ملاحظات.", score: 2 },
      { id: "D", text: "أطلب تلخيص المهارة في خطوات.", score: 1 }
    ]
  },
  {
    id: "AI-020",
    mode: ["screening", "diagnostic"],
    axis: "aiInteraction",
    subAxis: "aiBoundary",
    questionType: "choice",
    consistencyGroup: "CG-AI-BOUNDARY-01",
    riskFlag: "aiOverReliance",
    text: "ما الحد الصحيح لاستخدام AI في القرارات المهمة؟",
    options: [
      { id: "A", text: "يساعد في التحليل، والاعتماد بعد تحقق بشري.", score: 3 },
      { id: "B", text: "يعطي بدائل أولية تحتاج مراجعة.", score: 2 },
      { id: "C", text: "يقرر عندما تكون المعطيات واضحة.", score: 1 },
      { id: "D", text: "يستخدم لتسريع القرار عند الضغط.", score: 1 }
    ]
  },

  {
    id: "HC-025",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "projection",
    consistencyGroup: "CG-PRACTICE-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يتدرب كثيرًا لكنه يكرر نفس الخطأ دون تغذية راجعة. ما تقييمك؟",
    options: [
      { id: "A", text: "يحتاج تصحيحًا مركزًا لا مجرد تكرار.", score: 3 },
      { id: "B", text: "مثابرته تساعده إذا استمر أكثر.", score: 1 },
      { id: "C", text: "يظهر لديه جهد دون تعلم كافٍ.", score: 2 },
      { id: "D", text: "يحتاج تغيير طريقة التدريب.", score: 2 }
    ]
  },
  {
    id: "HC-026",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "selfReport",
    consistencyGroup: "CG-ENVIRONMENT-01",
    riskFlag: "highConsistencyConflict",
    text: "عندما تتشتت أثناء التعلم، ما الذي تفعله غالبًا؟",
    options: [
      { id: "A", text: "أعدّل البيئة وأقلل المشتتات.", score: 3 },
      { id: "B", text: "ألوم ضعف الإرادة فقط.", score: 1 },
      { id: "C", text: "أترك التعلم لذلك اليوم.", score: 0 },
      { id: "D", text: "أفتح مصدرًا آخر للتغيير.", score: 1 }
    ]
  },
  {
    id: "HC-027",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "responseStability",
    questionType: "selfReport",
    consistencyGroup: "CG-FAILURE-01",
    riskFlag: "highConsistencyConflict",
    text: "عندما تفشل في تطبيق مهارة جديدة، ما تفسيرك الأقرب؟",
    options: [
      { id: "A", text: "أحتاج معرفة ما الخطوة التي فشلت ولماذا.", score: 3 },
      { id: "B", text: "ربما أنا لا أصلح لهذه المهارة.", score: 0 },
      { id: "C", text: "المصدر لم يكن جيدًا غالبًا.", score: 1 },
      { id: "D", text: "أحتاج حماسًا أكثر فقط.", score: 1 }
    ]
  },
  {
    id: "HC-028",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "selfReport",
    consistencyGroup: "CG-CONSISTENCY-01",
    riskFlag: "highConsistencyConflict",
    text: "أي نمط أقرب لطريقتك في الالتزام الطويل؟",
    options: [
      { id: "A", text: "دفعات قوية ثم انقطاع.", score: 0 },
      { id: "B", text: "قليل منتظم مع مراجعة.", score: 3 },
      { id: "C", text: "أنتظر الظروف المناسبة.", score: 0 },
      { id: "D", text: "أبدأ بقوة ثم أبحث عن شيء جديد.", score: 1 }
    ]
  },
  {
    id: "HC-029",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "judgmentAlignment",
    questionType: "projection",
    consistencyGroup: "CG-HELP-01",
    riskFlag: "highConsistencyConflict",
    text: "شخص يطلب المساعدة دون أن يوضح ما جربه أو أين تعطل. ما تقييمك؟",
    options: [
      { id: "A", text: "طلبه جيد كبداية، لكنه يحتاج تحديد المشكلة وما جربه وأين تعطل.", score: 3 },
      { id: "B", text: "طلبه للمساعدة أفضل من التوقف.", score: 2 },
      { id: "C", text: "طلبه ناقص ويعتمد على غيره أكثر من اللازم.", score: 2 },
      { id: "D", text: "لا يحتاج أن يشرح التفاصيل.", score: 0 }
    ]
  },
  {
    id: "HC-030",
    mode: ["screening", "diagnostic"],
    axis: "hiddenConsistency",
    subAxis: "consistencyProbe",
    questionType: "selfReport",
    consistencyGroup: "CG-AI-BOUNDARY-01",
    riskFlag: "highConsistencyConflict",
    text: "عند قرار مهم، كيف تستخدم AI غالبًا؟",
    options: [
      { id: "A", text: "أستخدمه لعرض البدائل والمخاطر.", score: 3 },
      { id: "B", text: "أطلب منه ترجيح الخيار الأنسب.", score: 2 },
      { id: "C", text: "أستفيد من أول إجابة مقنعة.", score: 1 },
      { id: "D", text: "أترك استخدامه في القرارات الحساسة.", score: 1 }
    ]
  }
];

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



















