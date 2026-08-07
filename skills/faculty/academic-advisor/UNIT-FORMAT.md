# unit.md Format

`units/NN-<slug>/unit.md` is the advisor's stamp: everything a fresh-context teacher needs to teach the unit, and the coverage contract the auditor verifies against. The advisor writes it at promotion; `teach-unit` and `audit` read it in full, `office-hours` zooms it — **this file is the single definition for every role that touches a unit**, so writer and readers cannot drift.

Unit numbers are creation-order IDs, never teaching order. No renames, ever — the transcript, records, and index all reference these folders.

## Template

```md
# Unit {NN}: {Title}

Why: {the usefulness sentence, verbatim from the pass that promoted it — its form is pinned in SKILL.md's usefulness test}
Profile: {skill-practice | conceptual | vocabulary}{ (code | procedure) — skill-practice only, when one applies}
Minor: {optional, at most one — how the secondary kind manifests, pre-arbitrated here; omit the line if none}
Lesson budget: {N–M lessons}

## Outcomes

{Backward-design order. Each a testable "can do X" — the audit verifies exactly these.}

- Can {observable, testable capability}
- Can {…}

## Calibration

{Mined at planning time from cold .records/ and learner.md — what this learner already holds that touches this unit, where they wobbled before, what pace the records suggest. Written fresh at every (re-)promotion: a stale prior-knowledge value is worse than none — the sign of what helps reverses with it.}

## Retrieval pool

{3–5 items for the teacher to turn into warmups, reaching across the whole transcript — oldest-weakest first, never just the latest unit. An item becomes eligible only after one successful retrieval (the end-of-lesson probe is the gate) and retires at 3 spaced successful recalls; the recall count comes from the records' verbatim-keyed warmup and probe lines, and the tally below is where the audit reads won ground. Unit 1: "none — first unit".}

- {Stamped item name} — {source unit} · {why pooled} · recalls {N}/3

## Homework plan

{1–2 briefs, floor of one. Each cites the outcomes it exercises and carries a rung. Each brief lands at `units/NN-<slug>/work/hw-N/` — `work/` is per-unit, `N` numbered per unit from 1.}

- {Brief} — outcomes: {…} — rung: {supported | independent}

## Sources

{The unit's source-of-truth material. Teachers zoom into these; the auditor fact-checks against these — this list decides what ground truth *is* for the unit.}

- [{Source}]({link}) — Use for: {what to reach for it for}
```

After a not-verified audit, the advisor appends one more section:

```md
## Remediation

Findings: {the failed audit findings, quoted in full — teachers never read .audit/}
Fix must achieve: {what verified looks like this time, in outcome terms}
Budget: {small — 1–2 lessons}
```

## Rules

- **~4K token cap, stretch to ~6K when warranted.** Over the cap is a defect in this stamp — it is orientation material for a budgeted fresh context, not a syllabus chapter.
- **No lesson slicing.** Writing lesson titles, lesson counts beyond the budget line, or a teaching sequence crosses into the teacher's *how*. Outcomes are the boundary; stop there.
- **One primary profile, closed vocabulary.** `Profile:` takes exactly one of `skill-practice` / `conceptual` / `vocabulary` — each names a profile file in the `teach-unit` skill's `profiles/` directory, which is what the teacher dispatches on. The parenthetical sub-kind exists only for `skill-practice` — `(code)` or `(procedure)` — and is omitted when neither applies (math/proofs carries none). A unit that can't take a single primary is a split signal to the advisor — never a two-stamp case.
- **`Minor:` is pre-arbitrated, or absent.** At most one line, and it says how the secondary kind manifests — deciding that in-session would hand a what-decision to the teacher.
- **The `Why:` line is earned, not written.** It is the usefulness sentence that passed at promotion, from current evidence — if you can't complete it, the unit doesn't get stamped.
- **Every outcome is exercised by at least one feedback-bearing opportunity** — a warmup, a probe, an exercise, a brief. Prose exposure never discharges an outcome: a thing only read is a thing never tested.
- **The rung vocabulary is closed**: `supported` — the brief may lean on lesson material; `independent` — unaided performance is the ask. Arrival traces every destination capability to an `independent` brief — the authoritative check is [ARRIVAL.md](ARRIVAL.md)'s — so a course with no `independent` briefs cannot end. Counterfeit: relabeling a completion-style brief `independent` without its ask changing.
- **Budgets and sizing lean on records wherever records exist.** Where none exist, expect formal material to be harder than it looks and verbal material easier — expert difficulty judgment is systematically wrong in exactly that direction. Counterfeit: a "loose" budget that is the felt-difficulty estimate plus a token margin.
- **Sources are annotated, every entry.** A bare link is useless to a fresh context — "Use for: …" on every line.
- **Re-promotion refreshes Calibration and Retrieval pool; Outcomes stay untouched.** A resumed unit's pool is top-loaded with its prerequisite's material — the resumed unit is that material's first spacing opportunity. A gap-suspended unit's refreshed Calibration must declare the named gap closed — that line is what reopens the unit's `blocked` ticket at the first resumed session.
- **`## Remediation` is appended, never woven in.** The original sections stand as the record of what was asked the first time.
