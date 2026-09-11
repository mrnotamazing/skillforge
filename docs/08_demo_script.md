# 08 — Demo Script

**Run time:** 5 minutes core, 8 with questions.
**Setup:** `npm install && npm run dev` → `http://localhost:5173`. Works offline in deterministic mode — no API key needed. Before starting, open **My growth → Clear my practice data** so the growth page starts empty.

> **Golden rule of this demo:** do not narrate features. Make one deliberate mistake on stage and let the system catch you. The over-correction reveal is the entire demo.

---

### Beat 1 — The hook (0:00–0:30) · *Overview*

Open on the landing page. Read the headline aloud:

> "AI didn't take the junior analyst's job. It took her practice — and promoted her straight to reviewer."

Scroll to the three archetype cards.

> "523 early-career professionals at KPMG, measured against an AI-only baseline. Half beat it. A quarter matched it — they added literally nothing. And a quarter came in **below** it."

Point at the callout.

> "Here's the finding that should change what HR does about this. The people who underperformed the AI scored **equal or higher** than the top group on domain knowledge, critical thinking and AI literacy. They weren't short of knowledge. They scrutinised the wrong things."

### Beat 2 — The shift (0:30–1:15) · *Overview, mechanism section*

Walk the three columns left to right. Land hard on the last line of column two:

> "The junior's review is never evaluated. That's the whole problem in one line. Feedback comes back on the document. Nobody has ever told her whether the things *she* flagged were the things that mattered."

### Beat 3 — The forced attempt (1:15–2:00) · *Practice → Kestrel → Open the AI draft*

Show the memo. Then try to open the assistance ladder — it is locked.

> "I can't get a hint until I commit. That's a cognitive forcing function — in Buçinca's experiment it was the only intervention that actually reduced overreliance on AI. Explanations didn't work. This does."

### Beat 4 — Make the mistake on purpose (2:00–2:45)

Flag **two** things deliberately:
1. **Covenant Compliance** — "FCCR of 1.34x… in compliance." *(the critical defect)*
2. **Working Capital** — "Inventory days rose from 62 to 71…" *(the trap)*

> "The covenant line is wrong — the ratio is computed on EBITDA that includes a one-off insurance gain the memo discloses two paragraphs earlier. Strip it and you're at 1.02x against a 1.15x minimum. That's a breach.
>
> And the inventory days went up, so I'll flag that too. Deteriorating working capital, obviously."

Type a rationale, select **Escalate**, set confidence ~75%, click **Commit my independent judgement**.

Open L1 and L3 briefly to show the ladder responds to what you wrote — then **Submit final review**.

### Beat 5 — The reveal (2:45–3:30) · *Debrief*

Let the page land before speaking. Point at **Over-correction**.

> "I caught the breach. I also flagged something the AI got right — the pre-buy is documented in the board minutes. I didn't just waste effort; I would have sent a correct paragraph back for rework and burned my VP's time.
>
> That is exactly the 24.1%. Not people who trust AI too much — people who question it in the wrong places. No system in the market measures that today."

Scroll to the expert trace.

> "And this is what the VP's markup used to teach, made visible again — recompute, never read off; strip non-recurring items; date every number."

### Beat 6 — The wow (3:30–4:20) · *Practice → Northbridge transfer test*

> "New sector. No hints, no evidence prompts, no co-pilot — the ladder never unlocks."

Point at the first line of the memo.

> "And this draft says a covenant waiver was granted by the Agent on 14 March 2026. There is no waiver. No letter, no amendment, nothing in the data room. The model invented a specific date attached to a favourable outcome — and that's the fabrication that reads as *most* credible, because precision looks like provenance."

### Beat 7 — The number that matters (4:20–4:45) · *My growth*

> "The headline isn't the score. It's the **scaffolding gap** — assisted minus unassisted. That's the part of her competence that belongs to the tool rather than to her. Bjork's work is unambiguous here: fluent performance during learning is not evidence of learning."

### Beat 8 — The buyer (4:45–5:15) · *Manager, then HR*

Manager view:
> "No rankings. Not squeamishness — Kluger and DeNisi found more than a third of feedback interventions make performance *worse*, and the damage concentrates where feedback points at the person instead of the task. Ranking would break the intervention. So the manager gets a coaching agenda instead."

HR view:
> "And this is the column no HR system holds: for every automated task, which developmental repetitions disappeared with it. Every task AI took was also a task someone learned from."

### Beat 9 — The close (5:15–5:30) · *Data & ethics*

> "Developmental, never disciplinary. And every number you've seen is synthetic. We're showing you a working instrument — not results we don't have."

---

## Anticipated questions

| Question | Answer |
|---|---|
| "Is the AI real?" | The provider layer is real and ships an OpenAI-compatible implementation. Right now it's in deterministic mode — banner at the top — so it runs offline. The architecture deliberately keeps materiality **out** of the model: the LLM analyses reasoning, it never decides what matters. |
| "Isn't this just a checklist?" | For the easiest defects, partly — and a real pilot should include a checklist arm. But a checklist can't handle the wrong-premise case, and it gives no feedback on the quality of your review, which is the missing loop. |
| "How do you know it works?" | We don't. Nothing here is outcome data. `07_validation_plan.md` has a randomised design with an active control and a delayed transfer test at week 15, plus four pre-stated conditions under which we'd abandon the concept. |
| "Why credit risk?" | Because materiality is professionally defined there. A covenant breach changes a decision; a typo doesn't. That's what makes scrutiny scoreable without hand-waving. |
| "Why should HR own this and not the business?" | The VP's incentive is this memo being right today. Building the analyst's judgement pays off next year, in someone else's budget. That externality is exactly what HR exists to internalise. |
| "What if employees hate the forced step?" | They probably will somewhat — Buçinca found the most effective designs were rated least favourably. We minimised the friction and committed to reporting satisfaction even when it's worse than control. |
