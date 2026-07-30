# Milestone Record Format

`.mentor/milestone-NN.md` at the course root — one file per closed build milestone, written by `/mentor` at the milestone's close. Multi-role by design: `/advisor` mines it at planning and `/audit` may read it as evidence about the teaching, so the shape is contractual — those reads never guess.

## Template

```md
# Milestone {NN}: {title, as stamped in roadmap.md Notes}

Closed: {YYYY-MM-DD}

## Review summary

{The findings gist: counts by severity, the recurring themes, and where the full findings live — PR link or findings-file path in the build.}

## Resolutions

{How blocking findings resolved — always by the learner's own hand. Suggestions worth carrying into the next milestone.}

## Struggle log

{Observations from this milestone's asks: where they clustered, wheel-spinning episodes, the deepest ladder rung reached. Patterns, never transcripts.}

## Retro

{The closing retro's outcomes: went well / dragged / change next milestone.}

## Gaps

{Unit-shaped gaps surfaced during the work, flagged for /advisor — the subject and the evidence, never the cure. `none` is a valid entry.}
```

## Rules

- **About the work and the teaching, never about the learner.** The zero-stakes firewall applies in full — a record the learner could read without feeling judged, though it isn't addressed to them.
- **NN matches the milestone plan** in `roadmap.md` Notes — same number, same title.
- **One file per milestone, written once at close.** A reopened milestone appends a dated addendum; history is never rewritten.
- **Findings stay in the build.** This file gists and links; it never restates the findings list.
