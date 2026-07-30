# unit.md Format

`units/NN-<slug>/unit.md` is the advisor's stamp: everything a fresh-context teacher needs to teach the unit, and the coverage contract the auditor verifies against. The advisor writes it at promotion; `teach-unit` and `audit` read it in full, `office-hours` zooms it — **this file is the single definition for every role that touches a unit**, so writer and readers cannot drift.

Unit numbers are creation-order IDs, never teaching order. No renames, ever — the transcript, records, and index all reference these folders.

## Template

```md
# Unit {NN}: {Title}

Why: {the usefulness sentence, verbatim from the pass that promoted it — "Learner-now lacks X; the destination requires X; this unit closes it."}
Profile: {skill-practice | conceptual | vocabulary}{ (code | procedure) — skill-practice only, when one applies}
Minor: {optional, at most one — how the secondary kind manifests, pre-arbitrated here; omit the line if none}
Lesson budget: {N–M lessons}

## Outcomes

{Backward-design order. Each a testable "can do X" — the audit verifies exactly these.}

- Can {observable, testable capability}
- Can {…}

## Calibration

{Mined at planning time from cold .records/ and learner.md — what this learner already holds that touches this unit, where they wobbled before, what pace the records suggest. Written fresh at every (re-)promotion.}

## Retrieval pool

{3–5 named prior-unit items for the teacher to turn into warmups — weak or not-verified spots first, chosen from transcript.md and audit findings. Unit 1: "none — first unit".}

- {Item — unit it came from, why it's in the pool}

## Homework plan

{1–2 briefs, floor of one. Each cites the outcomes it exercises; names the external-build milestone it feeds, if any. Each brief lands at `units/NN-<slug>/work/hw-N/` — `work/` is per-unit, `N` numbered per unit from 1.}

- {Brief} — outcomes: {…}

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

- **~4K token cap, stretch to ~6K when warranted.** Over the cap is an advisor checklist violation — the stamp is orientation material for a budgeted fresh context, not a syllabus chapter.
- **No lesson slicing.** Writing lesson titles, lesson counts beyond the budget line, or a teaching sequence crosses into the teacher's *how*. Outcomes are the boundary; stop there.
- **One primary profile, closed vocabulary.** `Profile:` takes exactly one of `skill-practice` / `conceptual` / `vocabulary` — each names a profile file in the `teach-unit` skill's `profiles/` directory, which is what the teacher dispatches on. The parenthetical sub-kind exists only for `skill-practice` — `(code)` or `(procedure)` — and is omitted when neither applies (math/proofs carries none). A unit that can't take a single primary is a split signal to the advisor — never a two-stamp case.
- **`Minor:` is pre-arbitrated, or absent.** At most one line, and it says how the secondary kind manifests — deciding that in-session would hand a what-decision to the teacher.
- **The `Why:` line is earned, not written.** It is the usefulness sentence that passed at promotion, from current evidence — if you can't complete it, the unit doesn't get stamped.
- **Sources are annotated, every entry.** A bare link is useless to a fresh context — "Use for: …" on every line.
- **Re-promotion refreshes Calibration and Retrieval pool; Outcomes stay untouched.** A resumed unit's pool is top-loaded with its prerequisite's material — the resumed unit is that material's first spacing opportunity.
- **`## Remediation` is appended, never woven in.** The original sections stand as the record of what was asked the first time.
