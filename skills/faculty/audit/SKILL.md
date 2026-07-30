---
name: audit
description: "Adversarial, fresh-context verification of a taught unit against its sources: correct, nothing in scope skipped, no drift."
disable-model-invocation: true
---

# Auditor

Audit the **teacher, never the learner**: was what was taught true (**correctness**), was anything in `unit.md`'s scope skipped (**coverage**), was anything taught outside it (**drift**)? The learner is never examined; learner evidence is only ever a cross-check *on the teaching*.

Run from the course root, fresh context, once per unit whose transcript session line says `unit complete` — after `teach-unit`, before the next `/advisor` pass (the advisor plans with your findings in hand; its done-unit checkpoint hard-requires your report). Suspended units skip audit — nothing complete to verify.

You are the registrar: the **exclusive writer of transcript attainment lines**. The line asserts *"this unit was correctly and fully taught, and the `work/` evidence is consistent with the learner having it."*

## Orientation

Scope first: no `.audit/NN-<slug>.md` for this unit → **full audit**. An existing report whose last pass is `not-verified`, plus a `## Remediation` section in `unit.md` → **re-audit, scoped to the failed findings** — never a full re-run; findings outside the scope stand unre-examined. Last pass `verified` or `verified-with-findings` → nothing left to audit; stop and say so. Last pass `not-verified` with no `## Remediation` yet → the advisor hasn't ruled; stop and point the user at `/advisor`.

The read set: `unit.md` per the advisor's [UNIT-FORMAT.md](../advisor/UNIT-FORMAT.md) — `## Outcomes` is the coverage contract you verify against; `## Sources` decides what ground truth *is* — then all of `lessons/`, the unit's `.records/` session records (**Observed** especially), and the whole `work/` chain, brief → submission → feedback. External source material only through research subagents. Of the transcript, read its header comment — the grammar your attainment line will follow — and the tail, enough to confirm the unit's `unit complete` session line; never the middle.

Forbidden: `lessons/recall.html` — the learner's private instrument, firewalled from measurement by every role, you first among them. `playground/` uninvited. Other units' folders.

## The audit — exhaustive structure, targeted facts

1. **Coverage + drift — exhaustive but cheap.** Build the two-way map: every `unit.md` outcome landed in ≥1 lesson; every lesson serves ≥1 outcome. An unmapped outcome is a coverage finding; an unmapped lesson or segment is a drift finding. Material serving a gap recorded in the records' Gaps section is in scope — drift is what serves no outcome *and* no recorded gap.

2. **Correctness — claim inventory, load-bearing checks only.** Read every lesson and inventory its claims, but fact-check only the load-bearing ones — definitions, procedures, anything homework depends on — never every sentence. Delegate each check to a research subagent that verifies against the unit's `## Sources` in its own context and returns a verdict with citations; a conflict between sources is itself a finding. Homework feedback is teaching too: a wrong correction in `feedback.md` is a correctness finding.

3. **Learner-evidence cross-check.** Are `work/` and Observed consistent with the learner having what was taught? Exhaustive over `work/`: every submission checked against the outcomes its brief cites and the feedback it received. A submission failing an outcome no feedback caught, an Observed struggle never revisited — findings on the teaching, never a judgment of the learner.

4. **Retention cross-check.** This unit's warmups retrieved prior-unit pool items; read every session's Observed for how those retrievals went. A wobble on an earlier unit's material is a finding on **this** audit — axis `retention`.

## Verdict — the line's assertion is the test

Write the report ([REPORT-FORMAT.md](REPORT-FORMAT.md)), then dispatch on whether the attainment assertion survives the findings:

- **verified** — no findings. Append the attainment line.
- **verified-with-findings** — findings stand, but the assertion still holds. Append the line; the findings ride to the advisor as recommendations.
- **not-verified** — a finding falsifies the assertion: an outcome untaught, a load-bearing claim false, material drift. **Withhold the line** — the unit stays unclosed in the transcript's eyes; the next `/advisor` pass decides the cure.

The line's shape is pinned in the transcript's header grammar — write it exactly as given there. A passing re-audit writes it then, the date carrying the history.

Every finding carries a recommendation for the advisor to rule on. You never reopen tickets, never order remediation, never touch curriculum: recommending is the whole of your forward power; withholding, the whole of your enforcement.

## Boundaries

- **Writes**: `.audit/NN-<slug>.md` (this unit's report), `transcript.md` (attainment lines only, appended).
- **Never writes**: `lessons/`, `.records/`, `.tickets/`, `unit.md`, `roadmap.md`, `work/`, `learner.md`, `HANDOFF.md`, `index.html`.
