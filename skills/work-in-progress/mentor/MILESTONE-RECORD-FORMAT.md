# Milestone Record Format

`.mentor/milestone-NN.md` at the course root — one file per closed build milestone, written by `/mentor` at the milestone's close. Multi-role by design: `/academic-advisor` mines it at planning and `/audit` may read it as evidence about the teaching, so the shape is contractual — those reads never guess.

## Template

```md
# Milestone {NN}: {title, as stamped in roadmap.md Notes}

Closed: {YYYY-MM-DD}

## Review summary

{The findings gist: counts by severity, the recurring themes, and where the full findings live — the PR link, or the review report's path in the build.}

## Resolutions

{How blocking findings resolved — always by the learner's own hand. Suggestions worth carrying into the next milestone.}

## Struggle log

{Observations from this milestone's asks: where they clustered, wheel-spinning episodes, the deepest ladder rung reached. Patterns, never transcripts.}

## Retro

{The retro's gist, and where it is stated in full — the PR review, or the review report's path in the build. Never the outcomes restated.}

## Gaps

{Unit-shaped gaps surfaced during the work, flagged for /academic-advisor — the subject and the evidence, never the cure. `none` is a valid entry.}
```

## Rules

- **Evidence and observation, never a grade.** The zero-stakes firewall applies in full — a record the learner could read without feeling judged, though it isn't addressed to them.
- **NN matches the milestone plan** in `roadmap.md` Notes — same number, same title.
- **One file per milestone, written once at close.** A reopened milestone appends a dated addendum; history is never rewritten.
- **Findings and the retro stay where the learner reads them** — in the build. This file gists and links; it never restates either. The struggle log is the exception and belongs here: it is about the learner, so it is the one section written nowhere else.
