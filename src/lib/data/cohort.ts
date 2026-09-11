/**
 * SYNTHETIC COHORT DATA — generated for demonstration only.
 *
 * These are not measurements of real people and not results from a pilot.
 * Every view that renders this data carries a visible synthetic-data label.
 * Distribution shape is anchored on the published HBR/KPMG (2026) split
 * (50.1% / 25.8% / 24.1%) so the demo is plausible rather than arbitrary.
 */

export interface CohortMember {
  /** Pseudonymous handle. The product never shows names to managers. */
  handle: string;
  monthsInRole: number;
  attempts: number;
  scrutinyPrecision: number;
  scrutinyRecall: number;
  overCorrection: number;
  calibrationError: number;
  assistedScore: number;
  unassistedScore: number;
  archetype: 'amplifier' | 'delegator' | 'apprentice';
}

export interface CohortSummary {
  name: string;
  location: string;
  size: number;
  members: CohortMember[];
}

function m(
  handle: string,
  monthsInRole: number,
  attempts: number,
  p: number,
  r: number,
  oc: number,
  cal: number,
  assisted: number,
  unassisted: number,
  archetype: CohortMember['archetype'],
): CohortMember {
  return {
    handle,
    monthsInRole,
    attempts,
    scrutinyPrecision: p,
    scrutinyRecall: r,
    overCorrection: oc,
    calibrationError: cal,
    assistedScore: assisted,
    unassistedScore: unassisted,
    archetype,
  };
}

export const COHORT: CohortSummary = {
  name: 'Credit Risk — Analyst I intake, Feb 2026',
  location: 'Bengaluru GCC · US commercial banking portfolio',
  size: 24,
  members: [
    m('A-014', 7, 9, 0.81, 0.78, 0.08, 6, 86, 79, 'amplifier'),
    m('A-021', 11, 12, 0.86, 0.84, 0.05, 3, 90, 85, 'amplifier'),
    m('A-002', 9, 8, 0.74, 0.71, 0.17, 9, 82, 72, 'amplifier'),
    m('A-030', 5, 7, 0.77, 0.69, 0.12, 11, 80, 70, 'amplifier'),
    m('A-008', 14, 14, 0.88, 0.81, 0.04, 2, 91, 88, 'amplifier'),
    m('A-017', 8, 10, 0.72, 0.74, 0.15, 8, 81, 74, 'amplifier'),
    m('A-025', 6, 6, 0.70, 0.66, 0.20, 14, 76, 66, 'amplifier'),
    m('A-011', 10, 11, 0.79, 0.73, 0.11, 7, 84, 77, 'amplifier'),
    m('A-035', 4, 5, 0.68, 0.64, 0.22, 16, 74, 62, 'amplifier'),
    m('A-006', 12, 13, 0.83, 0.79, 0.09, 5, 87, 82, 'amplifier'),
    m('A-019', 7, 8, 0.71, 0.68, 0.18, 12, 78, 69, 'amplifier'),
    m('A-028', 9, 9, 0.75, 0.70, 0.14, 10, 80, 73, 'amplifier'),
    m('A-004', 6, 7, 0.64, 0.22, 0.05, 24, 71, 44, 'delegator'),
    m('A-013', 10, 9, 0.61, 0.26, 0.08, 28, 69, 41, 'delegator'),
    m('A-022', 5, 5, 0.58, 0.19, 0.04, 31, 66, 37, 'delegator'),
    m('A-031', 8, 8, 0.66, 0.28, 0.09, 22, 72, 46, 'delegator'),
    m('A-009', 13, 11, 0.63, 0.24, 0.06, 26, 70, 43, 'delegator'),
    m('A-026', 4, 4, 0.55, 0.17, 0.03, 34, 63, 34, 'delegator'),
    m('A-003', 9, 10, 0.34, 0.61, 0.71, 19, 64, 39, 'apprentice'),
    m('A-016', 11, 12, 0.31, 0.58, 0.78, 23, 61, 36, 'apprentice'),
    m('A-023', 6, 7, 0.38, 0.64, 0.66, 17, 67, 42, 'apprentice'),
    m('A-007', 12, 11, 0.29, 0.55, 0.82, 27, 59, 33, 'apprentice'),
    m('A-033', 5, 6, 0.36, 0.60, 0.69, 21, 65, 40, 'apprentice'),
    m('A-029', 8, 9, 0.33, 0.57, 0.74, 25, 62, 37, 'apprentice'),
  ],
};

export interface DefectPattern {
  label: string;
  kind: string;
  /** Share of the cohort that missed this class of defect. */
  missRate: number;
  materiality: 'critical' | 'major' | 'minor';
  note: string;
}

/** Where the cohort's scrutiny is failing, by defect class — not by person. */
export const DEFECT_PATTERNS: DefectPattern[] = [
  {
    label: 'Ratio computed from a figure disclosed elsewhere in the same memo',
    kind: 'calculation',
    missRate: 0.58,
    materiality: 'critical',
    note: 'The most-missed class in the cohort. Analysts read the ratio rather than recomputing it.',
  },
  {
    label: 'Fabricated specifics — a dated event with no document behind it',
    kind: 'hallucination',
    missRate: 0.54,
    materiality: 'critical',
    note: 'Precision reads as provenance. Formatted, dated assertions are challenged least often.',
  },
  {
    label: 'Exposure aggregated at entity level rather than obligor group',
    kind: 'omission',
    missRate: 0.46,
    materiality: 'major',
    note: 'Consistently missed where the affiliate sits in a separate schedule.',
  },
  {
    label: 'Ratio method substituted for one not in the facility agreement',
    kind: 'calculation',
    missRate: 0.42,
    materiality: 'major',
    note: 'Analysts apply convention rather than checking the contractual definition.',
  },
  {
    label: 'Stale financials presented as current',
    kind: 'stale-data',
    missRate: 0.38,
    materiality: 'major',
    note: 'Improves quickly with practice — the cheapest pattern to fix.',
  },
  {
    label: 'Wrong sector template applied before any arithmetic',
    kind: 'wrong-template',
    missRate: 0.67,
    materiality: 'critical',
    note: 'Hardest class in the library. Internal consistency masks a category error.',
  },
];

/** Where the cohort over-trusts, and where it over-corrects. */
export const TRUST_PATTERNS = [
  { area: 'Covenant compliance statements', overTrust: 0.61, overChallenge: 0.09 },
  { area: 'Qualitative / narrative sections', overTrust: 0.24, overChallenge: 0.44 },
  { area: 'Working-capital movements', overTrust: 0.18, overChallenge: 0.57 },
  { area: 'Risk rating recommendations', overTrust: 0.31, overChallenge: 0.48 },
  { area: 'Reserve and provisioning calls', overTrust: 0.22, overChallenge: 0.63 },
  { area: 'Peer benchmarking selection', overTrust: 0.66, overChallenge: 0.11 },
];

export const archetypeSplit = () => {
  const total = COHORT.members.length;
  const count = (a: CohortMember['archetype']) =>
    COHORT.members.filter((m2) => m2.archetype === a).length;
  return {
    amplifier: count('amplifier') / total,
    delegator: count('delegator') / total,
    apprentice: count('apprentice') / total,
  };
};

export const cohortAverage = (key: keyof Omit<CohortMember, 'handle' | 'archetype'>) =>
  COHORT.members.reduce((s, x) => s + (x[key] as number), 0) / COHORT.members.length;
