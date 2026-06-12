const assert = require("assert");
const {
  calculateScores,
  calculateConsistencyIndex,
  recommendTrack,
  runScoringValidation
} = require("../scoring.js");

const sampleQuestions = [
  { id: "T-001", axis: "thinking", riskFlag: "jumpingToSolutions", consistencyGroup: "CG-001" },
  { id: "T-002", axis: "thinking", riskFlag: "jumpingToSolutions", consistencyGroup: "CG-001" },
  { id: "A-001", axis: "analysis", riskFlag: "weakEvidenceThinking", consistencyGroup: "CG-002" },
  { id: "A-002", axis: "analysis", riskFlag: "weakEvidenceThinking", consistencyGroup: "CG-002" },
  { id: "S-001", axis: "selfDevelopment", riskFlag: "lowSelfAwareness", consistencyGroup: "CG-003" },
  { id: "D-001", axis: "digitalAiBasics", riskFlag: "lowDigitalReadiness", consistencyGroup: "CG-004" },
  { id: "I-001", axis: "aiInteraction", riskFlag: "aiOverReliance", consistencyGroup: "CG-005" },
  { id: "H-001", axis: "hiddenConsistency", riskFlag: "highConsistencyConflict", consistencyGroup: "CG-001" }
];

const answers = {
  "T-001": { score: 0 },
  "T-002": { score: 1 },
  "A-001": { score: 0 },
  "A-002": { score: 3 },
  "S-001": { score: 0 },
  "D-001": { score: 3 },
  "I-001": { score: 3 },
  "H-001": { score: 3 }
};

const result = calculateScores(sampleQuestions, answers);

assert.strictEqual(result.axisScores.thinking, 17);
assert.strictEqual(result.axisScores.analysis, 50);
assert.strictEqual(result.axisScores.selfDevelopment, 0);
assert.strictEqual(result.axisScores.digitalAiBasics, 100);
assert.strictEqual(result.axisScores.aiInteraction, 100);
assert.strictEqual(result.riskFlags.jumpingToSolutions, 2);

const consistencyIndex = calculateConsistencyIndex(sampleQuestions, answers);
assert.strictEqual(consistencyIndex, 0);

assert.strictEqual(
  recommendTrack(result.axisScores, consistencyIndex).track,
  "Needs Diagnostic Interview"
);

assert.strictEqual(runScoringValidation(), true);

console.log("Scoring tests passed");
