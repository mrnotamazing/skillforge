/**
 * SkillForge domain model.
 *
 * The central construct is SCRUTINY ALLOCATION: directing finite verification
 * effort toward the elements of an AI-generated work product where
 * P(error) x consequence(error) is highest.  See docs/02_problem_definition.md
 */

export type Materiality = 'critical' | 'major' | 'minor' | 'cosmetic';

export type DefectKind =
  | 'calculation'
  | 'stale-data'
  | 'omission'
  | 'unsupported-claim'
  | 'wrong-template'
  | 'hallucination'
  | 'policy-breach';

export type DecisionId = 'approve' | 'revise' | 'escalate';

/** Relative cost of missing a defect of each materiality class. */
export const MATERIALITY_WEIGHT: Record<Materiality, number> = {
  critical: 10,
  major: 6,
  minor: 2,
  cosmetic: 0.5,
};

export const MATERIALITY_LABEL: Record<Materiality, string> = {
  critical: 'Critical',
  major: 'Major',
  minor: 'Minor',
  cosmetic: 'Cosmetic',
};

export interface Defect {
  kind: DefectKind;
  materiality: Materiality;
  /** Why this changes the lending decision - shown only in the debrief. */
  explanation: string;
  /** Which source document in the data room proves it. */
  evidenceRef: string;
}

/**
 * A decoy looks wrong to an untrained reviewer but is in fact correct.
 * Flagging it is OVER-CORRECTION - the documented failure mode of the
 * 24.1% who performed below the AI-only baseline (HBR/KPMG 2026).
 */
export interface Decoy {
  /** How tempting the trap is; also the precision penalty for taking it. */
  trapWeight: number;
  /** Why the AI was actually right - shown in the debrief. */
  explanation: string;
}

export interface MemoElement {
  id: string;
  section: string;
  /** The sentence or figure as the AI drafted it. */
  text: string;
  /** Present when this element is genuinely defective. */
  defect?: Defect;
  /** Present when this element is correct but looks wrong. */
  decoy?: Decoy;
}

export interface SourceDocument {
  id: string;
  title: string;
  /** Short excerpt shown when the learner opens the evidence trail. */
  excerpt: string;
}

export interface LadderRung {
  level: 0 | 1 | 2 | 3 | 4 | 5;
  label: string;
  /** What this rung does pedagogically. */
  purpose: string;
  /** Static content for deterministic mode; the LLM provider adapts it. */
  content: string;
}

export interface DecisionOption {
  id: DecisionId;
  label: string;
  description: string;
}

export type ScenarioMode = 'baseline' | 'exception' | 'transfer';

export interface Scenario {
  id: string;
  mode: ScenarioMode;
  title: string;
  borrower: string;
  sector: string;
  facility: string;
  /** One-line framing of the task. */
  brief: string;
  /** Context the analyst is given before reading the AI draft. */
  situation: string;
  /** Minutes the analyst would realistically have. Display only. */
  timeboxMinutes: number;
  aiConfidenceStatement: string;
  elements: MemoElement[];
  sources: SourceDocument[];
  ladder: LadderRung[];
  decisionOptions: DecisionOption[];
  correctDecision: DecisionId;
  decisionRationale: string;
  /** Decision authority the analyst holds, used to judge escalation. */
  authorityNote: string;
  /** Concepts a strong rationale should reference; used to score reasoning. */
  expectedConcepts: { id: string; label: string; synonyms: string[] }[];
  /** What a senior analyst would check, in order - cognitive apprenticeship modelling. */
  expertTrace: { step: string; detail: string }[];
  /** Maximum ladder level available. Transfer tests withdraw assistance. */
  maxAssistLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface AttemptRecord {
  scenarioId: string;
  mode: ScenarioMode;
  /** Elements the learner flagged as defective. */
  flaggedIds: string[];
  decision: DecisionId | null;
  confidence: number;
  rationale: string;
  /** Highest assistance rung opened. 0 means fully unassisted. */
  maxLadderUsed: number;
  ladderUsed: number[];
  completedAt: number;
  score: AttemptScore;
}

export interface AttemptScore {
  /** Of the materiality the learner flagged, how much genuinely mattered. */
  precision: number;
  /** Of the materiality that mattered, how much the learner caught. */
  recall: number;
  /** Materiality-weighted F1 - the headline scrutiny allocation measure. */
  scrutiny: number;
  /** Share of decoys flagged. High = the "AI Apprentice" failure mode. */
  overCorrection: number;
  /** Share of critical/major defects caught. */
  materialCatchRate: number;
  decisionCorrect: boolean;
  /** Signed: positive = overconfident. */
  calibrationError: number;
  /** Concepts from expectedConcepts referenced in the rationale. */
  conceptsHit: string[];
  conceptsMissed: string[];
  /** True when no assistance was used - the only mastery-grade result. */
  unassisted: boolean;
  caught: { id: string; materiality: Materiality }[];
  missed: { id: string; materiality: Materiality }[];
  falseFlags: { id: string; isDecoy: boolean }[];
}
