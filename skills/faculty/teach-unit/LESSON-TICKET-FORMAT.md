# Lesson-ticket Format

`units/NN-<slug>/.tickets/NN-<topic>.md` — the teacher's work orders, numbered per unit, one per lesson or homework cycle. Tickets carry no decisions: the what (outcomes, budget, profile, homework plan) is stamped in `unit.md`; a ticket only slices it. Read at frontier scan; written at draft and at exit — the behavioral rules (claiming, fog, suspension triggers, prep firing) live in SKILL.md.

## Template

```md
# {NN} — {topic}

Status: {open | claimed | blocked — <gap named> | resolved}
Kind: {lesson | homework-brief | homework-feedback}

Goal: {what this cycle delivers, in slicing terms — where it begins and ends}
Outcomes: {the unit.md outcomes this cycle touches, verbatim}

## Prep

{prep distillate — shape and cap in Rules; written back by the research subagent
fired at draft time}

## Resolution

{at exit: what landed (artifact paths), what wobbled, any forecast flags}
```

## Rules

- **Statuses are closed**: `open`, `claimed`, `blocked — <gap named>`, `resolved`. The `blocked` line's gap statement travels verbatim into the suspension record.
- **Kinds are closed**: `lesson`, `homework-brief`, `homework-feedback`.
- **Outcomes are quoted verbatim from `unit.md`**, never paraphrased — the unit-complete check maps resolved tickets back to them by these lines.
- **Prep is a capped distillate (~1K)** — verified facts, correct citations, tested output; never raw exploration. Omitted when the cycle needs none.
- **Resolution is written at exit**, artifact paths included; a forecast flag here also lands in the session record's Gaps section.
