const TEST_MODE_CONFIG = {
  screening: {
    label: "اختبار الفرز - نسخة تجريبية",
    totalQuestions: 66,
    quotas: {
      thinking: 16,
      analysis: 16,
      selfDevelopment: 11,
      digitalAiBasics: 6,
      aiInteraction: 6,
      hiddenConsistency: 11
    }
  },
  diagnostic: {
    label: "الاختبار التشخيصي - نسخة تجريبية",
    totalQuestions: 66,
    quotas: {
      thinking: 16,
      analysis: 16,
      selfDevelopment: 11,
      digitalAiBasics: 6,
      aiInteraction: 6,
      hiddenConsistency: 11
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
    consistencyGroup: "CG-ASSUMPTION-01",
    riskFlag: "weakEvidenceThinking",
    text: "شخص يقول: هذه الطريقة نجحت في جهة أخرى، إذن ستنجح عندنا. ما تقييمك لتفكيره؟",
    options: [
      { id: "A", text: "تفكيره ناقص لأنه لم يراجع اختلاف السياق.", score: 3 },
      { id: "B", text: "تفكيره عملي ويختصر الوقت.", score: 1 },
      { id: "C", text: "ربما صحيح إذا كانت الجهة الأخرى ناجحة.", score: 2 },
      { id: "D", text: "الأفضل تطبيقها فورًا ثم نرى النتيجة.", score: 0 }
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
      { id: "A", text: "أستخدمها لأنها تدعم موقفي.", score: 0 },
      { id: "B", text: "أبحث عن معلومات معاكسة قبل اعتمادها.", score: 3 },
      { id: "C", text: "أحفظها لاستخدامها عند الحاجة.", score: 1 },
      { id: "D", text: "أعرضها على شخص يوافقني الرأي.", score: 0 }
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
      { id: "A", text: "تحتاج تحديدًا بالأرقام والمكان والزمن قبل تحليلها.", score: 3 },
      { id: "B", text: "تعني أن الموظفين لا يعملون جيدًا.", score: 0 },
      { id: "C", text: "واضحة بما يكفي لبدء الحل.", score: 1 },
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
      { id: "A", text: "الموظفون مقاومون للتغيير بطبعهم.", score: 0 },
      { id: "B", text: "القرار فاشل ويجب إلغاؤه.", score: 1 },
      { id: "C", text: "قد يوجد غموض أو خوف أو فقدان مصلحة لم تتم معالجته.", score: 3 },
      { id: "D", text: "يجب إلزام الجميع بالتنفيذ قبل النقاش.", score: 0 }
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
      { id: "A", text: "تحليله قد يكون مفيدًا كبداية لكنه لا يكفي للتعميم.", score: 3 },
      { id: "B", text: "التجربة الشخصية كافية إذا كانت قوية.", score: 1 },
      { id: "C", text: "لا قيمة للتجارب الشخصية إطلاقًا.", score: 0 },
      { id: "D", text: "الأفضل اعتماد رأيه إذا كان صاحب خبرة.", score: 1 }
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
      { id: "A", text: "يحب التعلم وهذا يكفي كبداية.", score: 1 },
      { id: "B", text: "قد يستخدم التعلم كبديل آمن عن التطبيق.", score: 3 },
      { id: "C", text: "غير جاد غالبًا.", score: 0 },
      { id: "D", text: "يحتاج دورة أطول وأكثر تفصيلًا.", score: 1 }
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
      { id: "A", text: "محرك بحث يعطي الحقيقة دائمًا.", score: 0 },
      { id: "B", text: "أداة تغني عن التعلم.", score: 0 },
      { id: "C", text: "برنامج يكتب بدل الإنسان فقط.", score: 1 },
      { id: "D", text: "نموذج يساعد في التوليد والتحليل لكنه قد يخطئ ويحتاج تحققًا.", score: 3 }
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
      { id: "A", text: "أرفعه كما هو إذا كانت الأداة معروفة.", score: 0 },
      { id: "B", text: "أخفي أو أزيل البيانات الحساسة قبل استخدامه.", score: 3 },
      { id: "C", text: "أرفعه إذا كان الحساب مدفوعًا.", score: 1 },
      { id: "D", text: "أرسل جزءًا صغيرًا فقط دون مراجعة.", score: 1 }
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
      { id: "A", text: "اكتب لي خطة تطوير.", score: 1 },
      { id: "B", text: "تصرف كمدرب مهارات، وابنِ خطة 4 أسابيع لمبتدئ مع تمارين وتقييم أسبوعي.", score: 3 },
      { id: "C", text: "اكتب لي خطة ممتازة.", score: 1 },
      { id: "D", text: "أعطني كل شيء عن تطوير الذات.", score: 0 }
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
      { id: "A", text: "حلل هذه المشكلة.", score: 1 },
      { id: "B", text: "أعطني حلولًا مباشرة.", score: 0 },
      { id: "C", text: "فرّق بين العرض والمشكلة والسبب المحتمل، ولا تقترح حلولًا قبل إكمال التحليل.", score: 3 },
      { id: "D", text: "اكتب تقريرًا طويلًا عن المشكلة.", score: 1 }
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
      { id: "A", text: "أرسله مباشرة إذا كان منسقًا.", score: 0 },
      { id: "B", text: "أطلب منه جعله أكثر احترافية فقط.", score: 1 },
      { id: "C", text: "أطلب نسخة أطول.", score: 1 },
      { id: "D", text: "أراجعه منطقيًا وأتحقق من المعلومات وأطلب كشف الثغرات.", score: 3 }
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
      { id: "A", text: "جعله يشرح ثم يختبرني ثم يصحح أخطائي تدريجيًا.", score: 3 },
      { id: "B", text: "جعله يعطيني الملخص النهائي فقط.", score: 1 },
      { id: "C", text: "جعله يجيب عني حتى أنهي بسرعة.", score: 0 },
      { id: "D", text: "جعله يكتب خطة طويلة أقرأها لاحقًا.", score: 1 }
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
      { id: "A", text: "ماذا أفعل؟", score: 0 },
      { id: "B", text: "اختر لي القرار الأفضل.", score: 0 },
      { id: "C", text: "اعرض الخيارات مع المزايا والمخاطر وما ينقص قبل القرار.", score: 3 },
      { id: "D", text: "أعطني رأيك النهائي بسرعة.", score: 1 }
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
    text: "شخص يقول: لا أطبق لأنني لم أفهم كل شيء بعد. ما تقييمك؟",
    options: [
      { id: "A", text: "حريص ويريد الإتقان.", score: 1 },
      { id: "B", text: "قد يتهرب من التطبيق باسم الفهم الكامل.", score: 3 },
      { id: "C", text: "يحتاج شرحًا أكثر فقط.", score: 1 },
      { id: "D", text: "المجال لا يناسبه.", score: 0 }
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
      { id: "A", text: "الإجراء الجديد هو السبب مباشرة.", score: 1 },
      { id: "B", text: "قد يكون الإجراء مؤثرًا، لكن أحتاج مقارنة قبل وبعد وعوامل أخرى.", score: 3 },
      { id: "C", text: "النتيجة حدثت بالصدفة غالبًا.", score: 0 },
      { id: "D", text: "أعتمد على رأي الفريق في تفسير العلاقة.", score: 1 }
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
      { id: "A", text: "جيد؛ النجاح في مكان كبير يعني صلاحية التجربة.", score: 1 },
      { id: "B", text: "غير مناسب دائمًا.", score: 0 },
      { id: "C", text: "يحتاج تكييف التجربة حسب الحجم والموارد والسياق.", score: 3 },
      { id: "D", text: "الأفضل تجربة الفكرة كما هي ثم التعديل لاحقًا.", score: 2 }
    ]
  },
  {
    id: "TH-009",
    mode: ["screening", "diagnostic"],
    axis: "thinking",
    subAxis: "decisionQuality",
    questionType: "pressure",
    consistencyGroup: "CG-DECISION-03",
    riskFlag: "lowSelfAwareness",
    text: "لديك قرار سريع ولا توجد كل المعلومات. ما التصرف الأقرب للنضج؟",
    options: [
      { id: "A", text: "أحدد أقل معلومات كافية لاتخاذ قرار قابل للمراجعة.", score: 3 },
      { id: "B", text: "أؤجل القرار حتى تكتمل كل المعلومات.", score: 1 },
      { id: "C", text: "أختار بناءً على الخبرة فقط.", score: 1 },
      { id: "D", text: "أطلب من شخص آخر أن يقرر.", score: 0 }
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
      { id: "A", text: "الانتشار دليل كافٍ غالبًا.", score: 0 },
      { id: "B", text: "الانتشار يعطي مؤشرًا لكنه لا يغني عن الدليل.", score: 3 },
      { id: "C", text: "المعلومة المنتشرة خاطئة غالبًا.", score: 1 },
      { id: "D", text: "يكفي أن تكون من مصدر مشهور.", score: 1 }
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
      { id: "A", text: "الخدمة تحتاج تحسينًا شاملًا.", score: 1 },
      { id: "B", text: "يجب معرفة أين يحدث البطء، وكم مدته، ومتى يتكرر.", score: 3 },
      { id: "C", text: "الموظفون يحتاجون تدريبًا.", score: 0 },
      { id: "D", text: "النظام الإلكتروني هو السبب غالبًا.", score: 1 }
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
      { id: "A", text: "الإحساس قد يوجه السؤال لكنه لا يكفي كدليل.", score: 3 },
      { id: "B", text: "الإحساس مهم ويكفي إذا كان الشخص خبيرًا.", score: 1 },
      { id: "C", text: "الإحساس لا قيمة له إطلاقًا.", score: 1 },
      { id: "D", text: "نبدأ بالحل الذي يقترحه الإحساس.", score: 0 }
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
      { id: "A", text: "رسم خطوات المسار من البداية للنهاية وتحديد زمن كل خطوة.", score: 3 },
      { id: "B", text: "كتابة أسماء الموظفين المسؤولين.", score: 1 },
      { id: "C", text: "سؤال المستفيد عن رأيه فقط.", score: 1 },
      { id: "D", text: "اقتراح اختصار الإجراء مباشرة.", score: 0 }
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
      { id: "A", text: "ضعف الحماس في نهاية الأسبوع.", score: 1 },
      { id: "B", text: "تغير حجم الطلبات أو الموارد أو المراجعات حسب اليوم.", score: 3 },
      { id: "C", text: "المشكلة صدفة.", score: 0 },
      { id: "D", text: "نحتاج تعميمًا خاصًا بنهاية الأسبوع.", score: 1 }
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
      { id: "A", text: "أبحث عن بيانات أو تجربة صغيرة تؤكدها أو تنفيها.", score: 3 },
      { id: "B", text: "أبني الحل عليها مباشرة.", score: 0 },
      { id: "C", text: "أعرضها في اجتماع لمعرفة الانطباع.", score: 1 },
      { id: "D", text: "أبحث فقط عما يدعمها.", score: 0 }
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
      { id: "A", text: "قد يكون لديه ضعف في استخدام التغذية الراجعة.", score: 3 },
      { id: "B", text: "قد يكون صحيحًا لأن الناس لا يفهمون دائمًا.", score: 1 },
      { id: "C", text: "الأفضل أن يتجاهل النقد حتى يأتي من خبير.", score: 0 },
      { id: "D", text: "يحتاج فقط إلى ثقة أكبر بنفسه.", score: 1 }
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


