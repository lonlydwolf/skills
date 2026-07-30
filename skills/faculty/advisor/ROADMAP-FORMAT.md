# roadmap.md Format

`roadmap.md` lives at the course root. It is the plan — one document, the advisor's workspace. Teachers read exactly one line of it: the header.

## Template

```md
# Roadmap: {Course title}

Current unit: units/{NN}-{slug} — {status}

## Destination

{The capability plus the stakes, distilled from the mission ticket. A capability sentence — "read and write idiomatic Rust well enough to contribute to X" — never a topic list. 2–4 lines.}

## Notes

{Session cadence, deadline, the external build's location if the course has one (referenced, never contained), standing constraints.}

## Frontier

- {Unit title} — {the gap it closes, one line}
- {At most one more}

## Fog

- {Coarse theme, deliberately vague}
- {Unordered — no numbering, no sequence implied}

## Decisions so far

- [{Resolved planning ticket title}](.roadmap/issues/{NN}-{slug}.md) — {one-line gist of the answer}
- {YYYY-MM-DD checkpoint: one-line plan delta} (→ log.md)
```

## Rules

- **The header line is the contract.** `Current unit: units/NN-<slug> — <status>` is the only line a teacher reads; everything below it is the advisor's workspace. It is always line 3, always this shape.
- **The status vocabulary is closed**: `teaching` (including resumed units), `remediation`, `re-planning — do not claim`. Nothing else, ever — teachers dispatch on these strings.
- **Frontier holds at most 2 lines — title + gap only.** No outcomes, no budgets, no homework plans: that detail exists nowhere but the current `unit.md`. A frontier line that has grown a sub-list is a violation, not diligence.
- **Fog stays unordered and vague.** Numbering the fog, or slicing it into unit-sized pieces, is a promise the rolling plan must not make.
- **Index, not store.** Decisions live in their planning tickets and `log.md`; Decisions-so-far gists and links, never restates. If a line needs a second sentence, it belongs elsewhere.
- **Revise when reality shifts.** The destination is not sacred — when the goal moves, the user invokes a goal-shift run and this file changes. A stale destination steers every later pass wrong.
- **One journey per folder.** A second unrelated destination is a second course folder, not a second section here.
