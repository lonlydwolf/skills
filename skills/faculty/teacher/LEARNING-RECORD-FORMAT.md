# Learning Record Format

Learning records live in `./learning-records/` inside the unit directory and use sequential numbering: `0001-<lesson-name>.md`, `0002-<lesson-name>.md`, etc. Create the directory lazily: only when the first record is written.

They are the pedagogical equivalent of persistent transaction logs: they record the friction points, missed assumptions, and hard-won realizations of a single session to prevent the next agent from blindly repeating history.

They serve a dual purpose: they allow the Teacher to maintain continuous context across isolated sessions, and they act as the temporal bridge that allows the Advisor to update the global learner profile without parsing hours of raw chat history.

## Template

```markdown
# Session Record: `[Topic/Focus]`

**Session ID:** `[Sequential, e.g., 0001]`
**Date:** `[YYYY-MM-DD]`
**Lesson:** `[Course-root-relative path to notes.html]`
**Remediation Source:** `[Course-root-relative path to originating Tutor evaluation or Editor review | None]`

---

## S - Subjective (Learner's State)

`[What the learner actually reported: confidence, difficulty, constraints, or their own reflection. Use "Not reported" when absent.]`

## O - Objective (Observed Actions)

- `[What the learner attempted and demonstrated: reasoning, answers, errors, or corrections.]`
- `[Assistance or scaffolds used and the learner's observed response.]`
- `[Relevant artifacts/source links when applicable.]`

## A - Assessment (Instructional Interpretation)

`[What these observations support: demonstrated strengths, remaining gaps, uncertainty, and which instructional approaches helped or caused friction. Distinguish Interpretation from directly observed evidence.]`

## P - Plan (Instructional Follow-up)

- **Pending Assignment:** `[Course-root-relative task.md path | None]`
- **Instructional Follow-up:** `[What to revisit, continue, or adapt in subsequent teaching, and why | None]`
- **Parked Tangents:** `[Optional out-of-scope questions for later Advisor consideration | None]`
```

Keep all four S.O.A.P. headings. Use concise sentences or bullets to preserve demonstrated strengths, unresolved gaps, and their implications for subsequent instruction.
Record only information supported by the session; use `None` or `Not reported` where appropriate.
Pending assignments and instructional follow-up describe the plan at session end. This record remains unchanged as work progresses; AGENTS.md owns the current formal route.

## Numbering and Immutability

Scan the unit's `./learning-records/` for the highest existing number and increment by one. Use `NNNN-<lesson-name>.md`; Session ID matches that sequence number.
Each teaching session, including remediation of an existing lesson, creates a new record. Preserve earlier records unchanged. Corrections and improved explanations update the canonical lesson notes; the new record captures what changed during the session.

## When to write a learning record

Write a learning record at the end of every active teaching session, including remediation and completed lessons with no observed difficulties, before closing out or handing off.

### What does _not_ qualify

- Casual check-ins, greetings, or setup prompts.
- Brief clarifying questions (e.g., "What's the syntax for this again?") where no actual learning loop, conceptual friction, or debugging took place.

## Completion

Before handoff, verify that all S.O.A.P. sections are populated, observations are distinguishable from interpretations, referenced local artifacts exist, pending work is explicit, and earlier records remain unchanged.
