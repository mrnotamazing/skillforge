import type { Scenario } from '../types';

/**
 * SYNTHETIC CONTENT.  All borrowers, figures and documents below are invented
 * for demonstration.  No real company, customer or confidential information is
 * used anywhere in this repository.
 *
 * Defect materiality was authored to be practitioner-checkable: a covenant
 * breach changes a lending decision, a rounding difference does not.
 */

const kestrel: Scenario = {
  id: 'kestrel-annual-review',
  mode: 'baseline',
  title: 'Annual review — AI-drafted credit memo',
  borrower: 'Kestrel Precision Components, Inc.',
  sector: 'Industrials — precision machining',
  facility: '$18.0M revolving credit facility + $6.0M term loan',
  brief: 'Decide whether this AI-drafted annual review can go forward as written.',
  situation:
    'It is 09:40. The credit assistant has produced the annual review memo for Kestrel Precision Components in ninety seconds, drawing on the FY2025 audited statements, the interim pack and the facility schedules in the data room. Your AVP expects your review before the 11:00 pipeline call. Your name goes on this memo.',
  timeboxMinutes: 20,
  aiConfidenceStatement:
    'Draft complete. All covenant tests computed. Confidence: high. No exceptions identified.',
  authorityNote:
    'As Analyst I you may clear an annual review where there is no covenant exception and total exposure to the obligor group is below $25.0M. Anything outside that must be escalated to Credit Committee through your AVP.',
  elements: [
    {
      id: 'k1',
      section: 'Financial summary',
      text: 'FY2025 revenue of $61.2M (audited) with EBITDA of $7.4M, which includes a $2.1M gain on an insurance settlement recognised in Q2 FY2025.',
    },
    {
      id: 'k2',
      section: 'Covenant compliance',
      text: 'Fixed Charge Coverage Ratio of 1.34x against a covenant minimum of 1.15x. The borrower is in compliance with all financial covenants.',
      defect: {
        kind: 'calculation',
        materiality: 'critical',
        explanation:
          'The FCCR is computed on reported EBITDA of $7.4M, which includes the $2.1M non-recurring insurance settlement disclosed two paragraphs earlier in this same memo. Stripping the one-time gain gives adjusted EBITDA of $5.3M and an FCCR of 1.02x — below the 1.15x minimum. This is a covenant breach, not compliance, and it is the single fact that changes the decision.',
        evidenceRef: 'src-audited',
      },
    },
    {
      id: 'k3',
      section: 'Financial summary',
      text: 'Trading is stable and the FY2025 audited position is considered representative of current performance.',
      defect: {
        kind: 'stale-data',
        materiality: 'major',
        explanation:
          'The data room contains a Q1–Q3 FY2026 interim pack showing revenue down 14.2% year on year and gross margin down 310bps. The memo neither cites nor reconciles it. A review that ignores nine months of more recent trading is not representative.',
        evidenceRef: 'src-interim',
      },
    },
    {
      id: 'k4',
      section: 'Exposure',
      text: 'Total credit exposure to the borrower is $24.0M, comprising the $18.0M revolver and the $6.0M term loan.',
      defect: {
        kind: 'omission',
        materiality: 'major',
        explanation:
          'The affiliate schedule discloses a $1.4M receivable purchase facility to Kestrel Tooling LLC, under common control. Aggregated at obligor-group level, exposure is $25.4M, which crosses the $25.0M single-group threshold and removes this file from your approval authority.',
        evidenceRef: 'src-affiliate',
      },
    },
    {
      id: 'k5',
      section: 'Peer comparison',
      text: 'Margins are benchmarked against three comparable precision machining businesses.',
      defect: {
        kind: 'unsupported-claim',
        materiality: 'minor',
        explanation:
          'One of the three peers is an aerospace-only fabricator with a structurally higher margin profile, which flatters the comparison. It affects presentation, not the decision.',
        evidenceRef: 'src-peers',
      },
    },
    {
      id: 'k6',
      section: 'Qualitative assessment',
      text: 'Management is experienced and the borrower is a solid credit.',
      defect: {
        kind: 'unsupported-claim',
        materiality: 'minor',
        explanation:
          'An unevidenced characterisation. Worth tightening, but it does not by itself change the recommendation.',
        evidenceRef: 'src-audited',
      },
    },
    {
      id: 'k7',
      section: 'Working capital',
      text: 'Inventory days rose from 62 to 71. This reflects a planned steel pre-buy ahead of the April 2026 tariff schedule and is not considered deterioration.',
      decoy: {
        trapWeight: 3,
        explanation:
          'This looks like classic working-capital deterioration, and inexperienced reviewers routinely flag it. The AI is right: board minutes in the data room document the pre-buy decision and the tariff rationale. Flagging it spends scrutiny you needed for the covenant calculation.',
      },
    },
    {
      id: 'k8',
      section: 'Risk rating',
      text: 'Recommended risk rating: 5 (Watch).',
      decoy: {
        trapWeight: 2,
        explanation:
          'A 5 looks inconsistent with the memo\'s own "solid credit" narrative, which tempts reviewers to challenge it. But per the rating grid, leverage above 3.5x mandates a 5 regardless of narrative. The AI applied policy correctly.',
      },
    },
    {
      id: 'k9',
      section: 'Exposure',
      text: 'Facility totals in the exposure table do not foot by $0.1M owing to rounding.',
      defect: {
        kind: 'calculation',
        materiality: 'cosmetic',
        explanation: 'A presentational rounding difference. Worth fixing; it changes nothing.',
        evidenceRef: 'src-affiliate',
      },
    },
    {
      id: 'k10',
      section: 'Facility terms',
      text: 'The revolving facility matures on 30 September 2026 and is secured by a first lien over all business assets.',
    },
  ],
  sources: [
    {
      id: 'src-audited',
      title: 'FY2025 audited financial statements — Note 12',
      excerpt:
        'Other income includes $2,100,000 arising from settlement of a business interruption insurance claim following the Q4 FY2024 plant fire. The settlement is non-recurring.',
    },
    {
      id: 'src-interim',
      title: 'Q1–Q3 FY2026 interim management accounts',
      excerpt:
        'Nine-month revenue $39.4M against $45.9M in the comparable prior period (-14.2%). Gross margin 21.4% against 24.5%. Two customer programmes were not renewed.',
    },
    {
      id: 'src-affiliate',
      title: 'Affiliate exposure schedule (Relationship: Kestrel group)',
      excerpt:
        'Kestrel Tooling LLC — receivable purchase facility, limit $1,400,000, drawn $1,180,000. Common control with Kestrel Precision Components, Inc.',
    },
    {
      id: 'src-peers',
      title: 'Peer benchmarking appendix',
      excerpt:
        'Peer 3: Aerostructure component fabricator, aerospace end-market only. EBITDA margin 18.9% versus peer group mean of 11.2%.',
    },
    {
      id: 'src-minutes',
      title: 'Board minutes — 14 February 2026',
      excerpt:
        'The board approved an incremental raw steel purchase of $1.9M ahead of the announced April 2026 tariff schedule, accepting a temporary increase in inventory days.',
    },
  ],
  ladder: [
    {
      level: 1,
      label: 'Contextual hint',
      purpose: 'Points at where to look. Never says what is wrong.',
      content:
        'Two figures in this memo are derived from a number the memo itself discloses elsewhere. Read the Financial Summary and the Covenant Compliance section against each other before anything else. Separately: check whether the exposure figure is drawn at entity level or group level.',
    },
    {
      level: 2,
      label: 'Evidence prompt',
      purpose: 'Opens the evidence trail. The learner still has to read it.',
      content:
        'Open Note 12 of the audited statements, the Q1–Q3 FY2026 interim pack, and the affiliate exposure schedule. Each one bears directly on a figure asserted in this memo.',
    },
    {
      level: 3,
      label: 'Critique your reasoning',
      purpose: 'Challenges the learner\'s own written rationale.',
      content:
        'Your rationale is assessed against the reasoning a senior analyst would apply: adjusting for non-recurring items before any coverage ratio, testing the vintage of every figure, and aggregating exposure at group level. Anything you have not addressed is surfaced as an open question rather than an answer.',
    },
    {
      level: 4,
      label: 'Co-pilot',
      purpose: 'Works the problem jointly, one step at a time.',
      content:
        'Take reported EBITDA of $7.4M. Remove the $2.1M non-recurring insurance settlement. That leaves adjusted EBITDA of $5.3M. Now recompute the FCCR against fixed charges of $5.2M. Compare the result with the 1.15x covenant minimum. What does that make this file?',
    },
    {
      level: 5,
      label: 'Worked example',
      purpose: 'Full expert reasoning made visible.',
      content:
        'Adjusted EBITDA is $5.3M ($7.4M less the $2.1M non-recurring gain). Against fixed charges of $5.2M the FCCR is 1.02x, below the 1.15x minimum — a covenant breach, not compliance. Separately, group exposure including the $1.4M affiliate facility is $25.4M, crossing the $25.0M threshold. Either fact alone removes this file from analyst authority. The correct action is to escalate to Credit Committee, citing both.',
    },
  ],
  decisionOptions: [
    { id: 'approve', label: 'Clear as drafted', description: 'The memo is sound; send it forward.' },
    { id: 'revise', label: 'Return for revision', description: 'Correctable within your own authority.' },
    { id: 'escalate', label: 'Escalate to Credit Committee', description: 'Outside your authority to clear.' },
  ],
  correctDecision: 'escalate',
  decisionRationale:
    'Two independent facts each remove this file from your authority: an FCCR of 1.02x against a 1.15x minimum is a covenant exception, and group exposure of $25.4M crosses the $25.0M threshold. Returning it for revision would not cure either — both require Credit Committee.',
  expectedConcepts: [
    {
      id: 'non-recurring',
      label: 'Adjust for the non-recurring gain before computing coverage',
      synonyms: ['non-recurring', 'nonrecurring', 'one-time', 'one off', 'one-off', 'insurance settlement', 'adjusted ebitda', 'normalis', 'normaliz', 'exclude the gain'],
    },
    {
      id: 'covenant-breach',
      label: 'Identify the covenant breach',
      synonyms: ['covenant', 'fccr', 'fixed charge', 'breach', '1.15', '1.02', 'exception'],
    },
    {
      id: 'group-exposure',
      label: 'Aggregate exposure at obligor-group level',
      synonyms: ['affiliate', 'related party', 'group exposure', 'aggregate', 'kestrel tooling', '25.4', 'common control', 'single obligor'],
    },
    {
      id: 'stale-data',
      label: 'Test the vintage of the financial data',
      synonyms: ['interim', 'stale', 'q3', 'fy2026', 'out of date', 'outdated', 'more recent', 'nine month', '14.2'],
    },
    {
      id: 'authority',
      label: 'Reason explicitly about decision authority',
      synonyms: ['authority', 'escalate', 'escalation', 'committee', 'threshold', 'above my', 'outside my'],
    },
  ],
  expertTrace: [
    { step: 'Recompute, never read off', detail: 'Every covenant test is recomputed from the primary statements. The memo\'s own EBITDA line is an input to be checked, not a fact to be trusted.' },
    { step: 'Strip non-recurring items first', detail: 'Coverage ratios are meaningless on unadjusted EBITDA. Insurance settlements, disposal gains and one-off credits come out before any ratio is formed.' },
    { step: 'Date every number', detail: 'Each figure is checked against the most recent available interim. Audited does not mean current.' },
    { step: 'Aggregate at group level', detail: 'Exposure is measured against the obligor group, including affiliates under common control, because that is the level at which the limit binds.' },
    { step: 'Read the narrative last', detail: 'Qualitative sections are the least reliable part of an AI draft and the most persuasive. They are read after the arithmetic, not before.' },
    { step: 'Decide on authority, not on comfort', detail: 'Any covenant exception or threshold crossing escalates, regardless of how good the credit feels.' },
  ],
  maxAssistLevel: 5,
};

const meridian: Scenario = {
  id: 'meridian-exception',
  mode: 'exception',
  title: 'Exception Lab — the draft that is internally consistent and wrong',
  borrower: 'Meridian Cold Chain Holdings, LLC',
  sector: 'Food distribution — franchisor',
  facility: '$12.5M senior secured term loan',
  brief:
    'This draft contains no arithmetic errors. Every ratio ties. Decide what to do with it.',
  situation:
    'Meridian is a franchisor: it does not operate depots, it licenses its cold-chain brand and systems to independent operators and earns royalties. The AI has produced a complete, internally consistent credit review. Nothing in it fails to add up. Two of its conclusions will look wrong to you and are in fact correct.',
  timeboxMinutes: 15,
  aiConfidenceStatement:
    'Draft complete. Peer benchmarking applied. All ratios internally consistent. Confidence: high.',
  authorityNote:
    'You may return a draft for revision where the analysis can be corrected within existing facility terms. Escalate only where the terms themselves must change, an exception exists, or a threshold is crossed. Over-escalation carries its own cost: it consumes committee time and signals weak judgement.',
  elements: [
    {
      id: 'm1',
      section: 'Benchmarking',
      text: 'Performance is benchmarked against the Specialty Retail peer group, using same-store sales growth, inventory turns and gross margin per square foot.',
      defect: {
        kind: 'wrong-template',
        materiality: 'critical',
        explanation:
          'Meridian is a franchisor, not a retailer. It holds no inventory and operates no stores, so inventory turns and margin per square foot are not merely unflattering — they are undefined for this business. The entire comparative section rests on a category error made in the first step, which is why nothing downstream flags as inconsistent. Internal consistency is not evidence of correctness.',
        evidenceRef: 'm-src-structure',
      },
    },
    {
      id: 'm2',
      section: 'Portfolio quality',
      text: 'The franchisee default rate of 2.1% is in line with sector norms.',
      defect: {
        kind: 'calculation',
        materiality: 'major',
        explanation:
          '2.1% is the franchisee store closure rate from the operations pack. The default rate in the same pack is 6.4%. Two adjacent metrics have been conflated, and the one chosen is the more favourable.',
        evidenceRef: 'm-src-ops',
      },
    },
    {
      id: 'm3',
      section: 'Receivables',
      text: 'No specific reserve is recommended against the $0.9M receivable aged 91+ days, as it is fully covered by a USDA Business & Industry loan guarantee.',
      decoy: {
        trapWeight: 4,
        explanation:
          'This is the one to get right. A 91-day past due balance with no reserve triggers every instinct a trainee has, and challenging it feels like diligence. But the guarantee certificate is in the data room and it is valid: the exposure is covered. Overruling the AI here would be wrong, would waste the committee\'s time, and is exactly the behaviour that puts reviewers below the AI-only baseline. Knowing when NOT to overrule is part of the skill.',
      },
    },
    {
      id: 'm4',
      section: 'Profitability',
      text: 'EBITDA margin of 34.1% is materially above the peer set and is considered sustainable.',
      decoy: {
        trapWeight: 3,
        explanation:
          'A 34% margin looks implausible against a distribution peer set — but Meridian is a royalty business with almost no cost of goods. For a franchisor this margin is unremarkable. The figure is right; the peer set it is being compared against is what is wrong (see the benchmarking element).',
      },
    },
    {
      id: 'm5',
      section: 'Qualitative assessment',
      text: 'The management team has deep sector experience and the franchise model is proven.',
      defect: {
        kind: 'unsupported-claim',
        materiality: 'minor',
        explanation: 'Standard unevidenced boilerplate. Tighten it; it does not move the decision.',
        evidenceRef: 'm-src-structure',
      },
    },
    {
      id: 'm6',
      section: 'Facility terms',
      text: 'The term loan amortises at 5% per annum with a bullet at maturity in June 2029.',
    },
    {
      id: 'm7',
      section: 'Presentation',
      text: 'Two chart axes in the appendix are unlabelled.',
      defect: {
        kind: 'unsupported-claim',
        materiality: 'cosmetic',
        explanation: 'Presentational only.',
        evidenceRef: 'm-src-ops',
      },
    },
  ],
  sources: [
    {
      id: 'm-src-structure',
      title: 'Corporate structure memorandum',
      excerpt:
        'Meridian Cold Chain Holdings, LLC licenses brand, systems and cold-chain protocols to 214 independently owned operators. The company holds no inventory, operates no distribution depots and employs no drivers. Revenue comprises initial franchise fees and ongoing royalties of 4.5% of franchisee gross sales.',
    },
    {
      id: 'm-src-ops',
      title: 'Franchise operations pack — FY2026',
      excerpt:
        'Franchisee store closures: 2.1% of units. Franchisee payment defaults (royalty arrears >60 days): 6.4% of units.',
    },
    {
      id: 'm-src-usda',
      title: 'USDA B&I guarantee certificate',
      excerpt:
        'Guarantee covers 80% of principal on the referenced facility. Certificate current, no conditions outstanding. Confirmed covered balance $0.9M.',
    },
  ],
  ladder: [
    {
      level: 1,
      label: 'Contextual hint',
      purpose: 'Points at the premise, not the arithmetic.',
      content:
        'Every number in this memo is internally consistent. That tells you the error, if there is one, is not in the arithmetic — it is in a choice made before the arithmetic started. What did the AI have to assume about this business in order to pick its comparison set?',
    },
    {
      level: 2,
      label: 'Evidence prompt',
      purpose: 'Opens the evidence trail.',
      content:
        'Read the corporate structure memorandum, then re-read the benchmarking section. Then open the franchise operations pack and the USDA guarantee certificate.',
    },
    {
      level: 3,
      label: 'Critique your reasoning',
      purpose: 'Tests over-correction as well as omission.',
      content:
        'Your rationale is checked for two distinct failures: defects you did not catch, and correct conclusions you challenged anyway. Both are scored. Confidence that the AI is wrong is not the same as evidence that it is wrong.',
    },
    {
      level: 4,
      label: 'Co-pilot',
      purpose: 'Works the premise check jointly.',
      content:
        'Ask what this company actually sells. It sells the right to use a brand and a system. Now ask what inventory turns measure. They measure how fast goods move through a warehouse. Does Meridian have a warehouse? If not, what is the comparison section actually measuring?',
    },
    {
      level: 5,
      label: 'Worked example',
      purpose: 'Full expert reasoning made visible.',
      content:
        'Meridian is a franchisor. Benchmarking it against Specialty Retail imports metrics that are undefined for a royalty business, so the whole comparative section is void — that is a critical defect, and it is invisible to any consistency check. The 2.1% figure conflates closures with defaults; the true default rate is 6.4%. The 34% margin and the unreserved 91-day receivable both look wrong and are both right. Because none of this requires a change to facility terms and no threshold is crossed, the correct action is to return the draft for revision, not to escalate.',
    },
  ],
  decisionOptions: [
    { id: 'approve', label: 'Clear as drafted', description: 'The memo is sound; send it forward.' },
    { id: 'revise', label: 'Return for revision', description: 'Correctable within your own authority.' },
    { id: 'escalate', label: 'Escalate to Credit Committee', description: 'Outside your authority to clear.' },
  ],
  correctDecision: 'revise',
  decisionRationale:
    'The benchmarking is void and the default rate is wrong, so the memo cannot go forward as drafted. But no covenant exception exists, no threshold is crossed and no facility term needs to change — so this is yours to correct, not the committee\'s. Escalating it would be over-escalation, which has a real cost.',
  expectedConcepts: [
    { id: 'wrong-premise', label: 'Identify the category error in the peer set', synonyms: ['franchisor', 'franchise', 'royalty', 'peer', 'benchmark', 'specialty retail', 'wrong template', 'category', 'premise', 'inventory turn', 'no inventory'] },
    { id: 'metric-confusion', label: 'Separate closure rate from default rate', synonyms: ['2.1', '6.4', 'default rate', 'closure', 'conflat', 'different metric'] },
    { id: 'restraint', label: 'Leave the guaranteed receivable alone', synonyms: ['usda', 'guarantee', 'guaranteed', 'no reserve', 'correctly', 'ai is right', 'not an error', 'leave'] },
    { id: 'proportionate-action', label: 'Choose a proportionate action', synonyms: ['revise', 'revision', 'correct it', 'within my authority', 'not escalate', 'no exception', 'no threshold'] },
  ],
  expertTrace: [
    { step: 'Check the premise before the arithmetic', detail: 'Consistency is cheap. Ask what business this is and whether the chosen framework applies at all, before testing any number inside it.' },
    { step: 'Watch for adjacent-metric substitution', detail: 'When two similar metrics sit side by side in a source pack, confirm which one was taken. The favourable one is taken more often than chance would predict.' },
    { step: 'Verify before overruling', detail: 'A conclusion that looks wrong is a prompt to check the evidence, not a licence to reverse it. Two of the most suspicious statements here are correct.' },
    { step: 'Match the action to the defect', detail: 'Escalation is for exceptions and thresholds. Everything else is yours to fix. Over-escalation is a judgement failure, not a safe default.' },
  ],
  maxAssistLevel: 5,
};

const northbridge: Scenario = {
  id: 'northbridge-transfer',
  mode: 'transfer',
  title: 'Transfer test — assistance withdrawn',
  borrower: 'Northbridge Logistics Group, Inc.',
  sector: 'Transport & logistics',
  facility: '$30.0M senior secured revolving facility',
  brief:
    'No hints. No evidence prompts. No co-pilot. This one measures what you can do unaided.',
  situation:
    'A new sector, a new borrower and no assistance of any kind. This is the same capability under different surface features — which is the only way to tell whether you learned the skill or learned the last two scenarios.',
  timeboxMinutes: 15,
  aiConfidenceStatement:
    'Draft complete. Leverage test computed. Waiver position confirmed. Confidence: high.',
  authorityNote:
    'As Analyst I you may clear a review where there is no covenant exception and total exposure is below $25.0M. This facility is $30.0M, so any exception at all places the file with Credit Committee.',
  elements: [
    {
      id: 'n1',
      section: 'Covenant position',
      text: 'A waiver of the Q2 FY2026 leverage covenant test was granted by the Agent on 14 March 2026, and the borrower is therefore not in default.',
      defect: {
        kind: 'hallucination',
        materiality: 'critical',
        explanation:
          'No such waiver exists. The data room contains no waiver letter, no Agent correspondence and no amendment for that date. The AI generated a specific, plausible, formatted fact — a date, a counterparty and an outcome — that has no source. This is the failure mode fluency hides best: the more precise the fabrication, the more credible it reads.',
        evidenceRef: 'n-src-facility',
      },
    },
    {
      id: 'n2',
      section: 'Leverage',
      text: 'Total leverage of 3.1x is computed on annualised H1 FY2026 EBITDA and sits within the 4.00x covenant.',
      defect: {
        kind: 'calculation',
        materiality: 'major',
        explanation:
          'The facility agreement defines leverage on last-twelve-months EBITDA, not annualised half-year. H1 was seasonally strong; on the contractual LTM basis leverage is 4.2x, above the 4.00x covenant. The method was substituted for one that produces a passing result.',
        evidenceRef: 'n-src-facility',
      },
    },
    {
      id: 'n3',
      section: 'Funded debt',
      text: 'Funded debt of $26.4M comprises the drawn revolver and the subordinated note.',
      defect: {
        kind: 'omission',
        materiality: 'major',
        explanation:
          'A $3.2M equipment finance obligation disclosed in the FY2026 debt schedule is excluded. It meets the facility definition of funded debt, and including it worsens leverage further.',
        evidenceRef: 'n-src-debt',
      },
    },
    {
      id: 'n4',
      section: 'Fleet',
      text: 'Average fleet age rose from 5.1 to 6.4 years following deferral of the FY2026 replacement cycle, which management attributes to OEM delivery delays.',
      decoy: {
        trapWeight: 3,
        explanation:
          'Ageing fleet reads as deteriorating asset quality and invites a challenge. The OEM delay correspondence is in the data room and the deferral is documented and temporary. The AI reported it accurately and attributed it correctly.',
      },
    },
    {
      id: 'n5',
      section: 'Customer concentration',
      text: 'The largest customer represents 24% of revenue, which exceeds the 20% internal guideline and is disclosed as a concentration risk.',
      decoy: {
        trapWeight: 2,
        explanation:
          'It looks like a breach that the AI has waved through. It is not a covenant — it is an internal guideline, and the AI has done the right thing by disclosing it as a risk rather than treating it as an exception.',
      },
    },
    {
      id: 'n6',
      section: 'Qualitative assessment',
      text: 'The business is well positioned in a growing regional market.',
      defect: {
        kind: 'unsupported-claim',
        materiality: 'minor',
        explanation: 'Unevidenced assertion; no market data cited.',
        evidenceRef: 'n-src-facility',
      },
    },
    {
      id: 'n7',
      section: 'Presentation',
      text: 'The facility maturity is given as June 2028 in the summary and 30 June 2028 in the terms table.',
      defect: {
        kind: 'unsupported-claim',
        materiality: 'cosmetic',
        explanation: 'Formatting inconsistency only.',
        evidenceRef: 'n-src-facility',
      },
    },
  ],
  sources: [
    {
      id: 'n-src-facility',
      title: 'Facility agreement — definitions and covenants',
      excerpt:
        '"Leverage Ratio" means Total Funded Debt divided by EBITDA for the last twelve months then ended. Maximum permitted: 4.00x, tested quarterly. No amendments or waivers have been executed under this agreement.',
    },
    {
      id: 'n-src-debt',
      title: 'FY2026 debt schedule',
      excerpt:
        'Revolver drawn $19.6M. Subordinated note $6.8M. Equipment finance obligations $3.2M (capitalised, secured on tractor units).',
    },
    {
      id: 'n-src-oem',
      title: 'OEM correspondence — 8 January 2026',
      excerpt:
        'Delivery of 34 tractor units originally scheduled for FY2026 has been rescheduled to FY2027 owing to supplier constraints.',
    },
  ],
  ladder: [],
  decisionOptions: [
    { id: 'approve', label: 'Clear as drafted', description: 'The memo is sound; send it forward.' },
    { id: 'revise', label: 'Return for revision', description: 'Correctable within your own authority.' },
    { id: 'escalate', label: 'Escalate to Credit Committee', description: 'Outside your authority to clear.' },
  ],
  correctDecision: 'escalate',
  decisionRationale:
    'On the contractual LTM basis, and including the omitted equipment finance debt, leverage is above the 4.00x covenant — and the waiver the memo relies on does not exist. That is an unwaived covenant breach on a $30.0M facility. It escalates.',
  expectedConcepts: [
    { id: 'hallucination', label: 'Detect the fabricated waiver', synonyms: ['waiver', 'no evidence', 'not in the data room', 'cannot find', 'hallucinat', 'fabricat', 'made up', 'no source', 'unsupported', 'does not exist', 'no letter'] },
    { id: 'definition', label: 'Test the ratio against the contractual definition', synonyms: ['ltm', 'last twelve', 'annualis', 'annualiz', 'definition', 'h1', 'seasonal', '4.2', 'method'] },
    { id: 'funded-debt', label: 'Complete the funded debt build', synonyms: ['equipment finance', '3.2', 'funded debt', 'excluded', 'omitted', 'debt schedule'] },
    { id: 'authority', label: 'Reason explicitly about authority', synonyms: ['escalate', 'escalation', 'committee', 'authority', 'breach', 'exception'] },
  ],
  expertTrace: [
    { step: 'Demand a source for every specific fact', detail: 'A precise date attached to a favourable outcome is the highest-risk sentence in any AI draft. Precision is not provenance.' },
    { step: 'Test ratios against the contract, not convention', detail: 'The facility agreement defines the method. Any other method, however standard, is the wrong answer.' },
    { step: 'Rebuild the debt stack from the schedule', detail: 'Funded debt is reconstructed from primary disclosure rather than accepted as summarised.' },
    { step: 'Separate covenants from guidelines', detail: 'A breached covenant escalates. An exceeded internal guideline is disclosed. Treating them alike is a judgement error in both directions.' },
  ],
  maxAssistLevel: 0,
};

export const SCENARIOS: Scenario[] = [kestrel, meridian, northbridge];

export const getScenario = (id: string) => SCENARIOS.find((s) => s.id === id);
