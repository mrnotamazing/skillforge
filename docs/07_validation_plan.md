# 07 — Validation Plan

> **Statement of evidentiary status.** SkillForge has produced **no outcome data**. Every number in the prototype dashboards is synthetic. Nothing below is a result; it is a design for obtaining results. We would rather present a well-specified untested hypothesis than an impressive unfalsifiable claim.

## 1. Three tiers of evidence, kept separate

| Tier | What it is | Status |
|---|---|---|
| **A — Prototype evidence** | The instrument runs, scores behaviour, and discriminates between response patterns | **Demonstrated** — verified end to end in a browser |
| **B — Synthetic demo data** | Cohort dashboards, distribution shapes, miss rates | **Illustrative only**, labelled in-product |
| **C — Pilot outcomes** | Does practice improve real review quality? | **Not collected.** Design below. |

## 2. Primary hypotheses

| # | Hypothesis | Falsifies what if unsupported |
|---|---|---|
| **H1** | Materiality-weighted scrutiny scores show meaningful between-person variance in a junior cohort | The construct does not discriminate; the problem is elsewhere |
| **H2** | Scrutiny scores are only weakly correlated with existing domain-knowledge assessments (r < .4) | We have built a redundant knowledge test. **This is the sharpest test of the whole thesis** — B1 predicts low correlation |
| **H3** | Assisted performance exceeds unassisted performance (a measurable scaffolding gap) | "Synthetic readiness" has no empirical referent and our headline metric is void |
| **H4** | Practice improves **unassisted transfer** performance versus an active control | The intervention teaches the test, not the capability |
| **H5** | Confidence calibration improves with feedback | The calibration component adds nothing |

## 3. Pilot design

**Setting.** One BFSI GCC credit-risk function, 0–24-month analysts.
**Target n.** 90 (45 per arm), giving ~80% power to detect d ≈ 0.6 at α = .05 two-tailed. A realistic first pilot of 40–60 should be reported as *preliminary*, and we say so rather than over-reading it.

**Design.** Randomised, two arms, with a delayed transfer test.

| | Control (active) | Intervention |
|---|---|---|
| Content | Existing AI-literacy / prompting curriculum, equal time | SkillForge practice loop |
| Dose | ~6 hours over 6 weeks | ~6 hours over 6 weeks |

An **active** control matters: against no-treatment, any effect could be attention. Against the AI-literacy curriculum, we test the thing B1 actually calls into question.

**Schedule**
```
Week 0   Pre-test: unassisted review, held-out scenario + domain knowledge assessment
W1–6    Intervention or control
Week 7   Post-test: unassisted review, matched-difficulty held-out scenario
Week 15  Delayed transfer test: new sector, no assistance  ← the primary endpoint
```

Week 15 is the primary endpoint deliberately. Bjork's work shows immediate post-test performance is the *least* informative measure of learning; a delayed, unaided, novel-context test is the one that matters.

## 4. Measures

**Primary (individual)**
- Materiality-weighted scrutiny precision and recall, unassisted
- Material defect catch rate (critical + major)
- Over-correction rate (decoys flagged)
- Escalation accuracy against stated authority
- Calibration error (signed)
- Scaffolding gap (assisted − unassisted)

**Secondary (organisational)** — all require employer cooperation and are **proxies, not outcomes**:
- Senior-review rework rate on real memos
- Defect escape rate to credit committee
- Manager review hours per file
- Time to independent sign-off authority
- Self-efficacy (short validated scale) and psychological-safety items as moderators

**Blinding.** Scoring of held-out scenarios is deterministic and pre-specified, so scorer bias is limited. Managers rating real-file quality should be blind to arm.

## 5. Known threats to validity

| Threat | Why it bites | Mitigation |
|---|---|---|
| **Teaching the test** | Our scenarios and our measure share authorship | Held-out scenarios authored by a different practitioner; new sector at week 15 |
| **Construct contamination** | Scrutiny score may just be conscientiousness or reading care | Measure Need for Cognition and conscientiousness as covariates |
| **Hawthorne / novelty** | New tool, attention, enthusiasm | Active control, equal contact time |
| **Selection** | Volunteers differ | Randomise within cohort; report attrition by arm |
| **Demand characteristics** | Learners infer what we want and over-flag | Decoys are scored; over-flagging lowers precision |
| **Ecological validity** | Scenario ≠ real file under real pressure | Report organisational proxies separately; never claim they are equivalent |
| **Satisfaction penalty** | B3 predicts the forcing step is disliked | Measure satisfaction explicitly and report it even if it is worse than control |
| **Small-n over-reading** | A 40-person pilot will be tempting to over-interpret | Pre-register endpoints; report CIs, not just point estimates |

## 6. What would make us abandon the concept

Stated in advance:
1. **H2 fails** — scrutiny scores correlate > .7 with a standard domain test. We would have built an expensive knowledge quiz.
2. **H4 fails** — gains on our scenarios with no gain on held-out transfer. We taught the test.
3. **H3 fails** — no measurable assisted/unassisted gap, removing the headline metric's referent.
4. Over-correction proves untrainable — practice does not reduce it — which would mean the 24.1% pattern is dispositional rather than developmental.

## 7. Reporting standard

Pre-register hypotheses and endpoints before data collection. Report effect sizes with confidence intervals, all pre-registered endpoints including null results, attrition by arm, and satisfaction even when unfavourable. Never report the synthetic dashboard figures as findings.
