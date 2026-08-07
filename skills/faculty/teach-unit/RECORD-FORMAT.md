# Session-record Format

`units/NN-<slug>/.records/session-NN.md` — one file per session, written at exit step 2, including suspended sessions; `NN` = the highest existing `session-NN` plus one, `01` when there is none. This is the evidence unit of the whole suite: `/audit` samples **Observed** as attainment evidence; `/academic-advisor` mines **Gaps** and **Signals for planning** at every checkpoint, from cold units, long after the writer is gone. The four headings are contractual — never renamed, merged, or reordered; prose is free beneath them.

`.records/` also holds `handoff-archive.md` (displaced HANDOFF content), and `office-hours.md` when that role leaves a note — neither is a session record.

## Template

```md
# Session {NN} — {ticket, resolved | blocked}

## Taught

{ticket resolved or blocked, lesson artifact path, outcomes touched; bespoke
script, if the lesson carries any, named with its reason}

## Observed

{teaching-time retrieval and performance: concrete moments the learner produced,
rebuilt, struggled with}

{the warmup and probe lines — one per warmup item and per end-of-lesson probe
target: `{exact name} — held | shaky`}

## Gaps

{inline-taught gaps; forecast flags (foreseen, non-blocking); or the blocking gap,
named — the same statement as the ticket and HANDOFF}

## Signals for planning

{pace, budget pressure, engagement, fade position — what the advisor should meet
at its next pass; the next session inherits the fade position from here}
```

## Rules

- **Observed is moments, never measures.** A concrete rebuild ("re-derived the closure environment unprompted") is evidence; a score is a violation of the zero-stakes firewall. Recall-page results never appear here.
- **Warmup and probe lines are keyed by exact name.** A warmup item's line uses the pool item's stamped name from `unit.md`, **verbatim**; an end-of-lesson probe target's line uses a name coined at first appearance under the gap-naming discipline (topic, never symptom — [SKILL.md](SKILL.md#gaps-budget-suspension)) and reused verbatim ever after. The advisor's pool tally and the audit's closer-discharge check both find these lines by exact name; a paraphrase breaks the count.
- **Every gap lands in Gaps**, whatever its size: inline-taught with a one-line note, foreseen with a forecast flag, blocking with its name — always the coined name, reused verbatim. The advisor plans from this section; an unrecorded or renamed gap is invisible to the cure.
- **Signals is written for a cold reader** — the advisor arrives at planning time with no session memory; "the learner is tired of Parsons problems" beats "engagement discussed." Counterfeit: a Signals line naming the cure — "ready for unit 05" is choosing the next unit from inside a record. Describe the state; the advisor prescribes.
- **Bespoke script is declared or it isn't allowed.** A lesson page carrying script of its own — inline, or in `units/NN-<slug>/.assets/unit.js` — says so in Taught, with the reason it was subject matter rather than presentation ([SKILL.md](SKILL.md#teaching-the-lesson)). Undeclared script is a finding waiting for `/audit`; the declaration is what makes the carve-out reviewable at all.
- **Records go cold with the unit.** Never edit a past session's record; the next session writes its own.
