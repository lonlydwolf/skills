# Learning Record Format

Learning records live in `./learning-records/` inside the unit directory and use sequential numbering: `0001-<lesson-name>.md`, `0002-<lesson-name>.md`, etc. Create the directory lazily: only when the first record is written.

They are the pedagogical equivalent of persistent transaction logs: they record the friction points, missed assumptions, and hard-won realizations of a single session to prevent the next agent from blindly repeating history.

They serve a dual purpose: they allow the Teacher to maintain continuous context across isolated sessions, and they act as the temporal bridge that allows the Advisor to update the global learner profile without parsing hours of raw chat history.

## Template

```markdown
# Session Record: `[Topic/Focus]`

**Session ID:** `[Sequential, e.g., 0001]`
**Date:** `[YYYY-MM-DD]`
**Lesson:** `[Course-root-relative path to notes.html | None]`
**Session Type:** `[Lesson | Remediation | Follow-up]`
**Lesson Complete:** `[Yes | No | N/A]`
**Criteria Source:** `[This record | Course-root-relative path to the earlier learning record whose Lesson Outcomes govern this lesson | Legacy: course-root-relative path to the lesson's earliest record | None]`
**Remediation Source:** `[Course-root-relative path to originating Tutor evaluation or Editor review | None]`

---

## Lesson Outcomes

`[Only when Criteria Source is "This record".]`

| ID | Observable outcome | Conditions and permitted aids | Criticality |
|---|---|---|---|
| `LO1` | `[What the learner does to show the capability]` | `[e.g., closed-book; may run the code; given starting file]` | `[Critical | Supporting]` |

## S - Subjective (Learner's State)

`[What the learner actually reported: confidence, difficulty, constraints, or their own reflection. Use "Not reported" when absent.]`

## O - Objective (Observed Actions)

- `[What the learner attempted and demonstrated: reasoning, answers, errors, or corrections.]`
- `[Assistance or scaffolds used and the learner's observed response.]`
- `[Relevant artifacts/source links when applicable.]`

## A - Assessment (Instructional Interpretation)

`[What these observations support: demonstrated strengths, remaining gaps, uncertainty, and which instructional approaches helped or caused friction. Distinguish Interpretation from directly observed evidence.]`

## P - Plan (Instructional Follow-up)

- **Pending Assignment:** `[Course-root-relative task.md path of a Released assignment | None]`
- **Instructional Follow-up:** `[What to revisit, continue, or adapt in subsequent teaching, and why | None]`
- **Parked Tangents:** `[Optional out-of-scope questions for later Advisor consideration | None]`
```

Keep all four S.O.A.P. headings. Use concise sentences or bullets to preserve demonstrated strengths, unresolved gaps, and their implications for subsequent instruction.
Record only information supported by the session; use `None` or `Not reported` where appropriate.
Pending assignments and instructional follow-up describe the plan at session end. A Preview BUILD is not yet pending work; mention it under Instructional Follow-up instead. This record remains unchanged as work progresses; AGENTS.md owns the current formal route.

**Session Type** tells later readers whether the session completed or continued a lesson that needs its LESSON check, or followed up existing work:

- **Lesson:** Teaching toward a lesson's agreed outcomes, including a session that continues an unfinished lesson.
- **Remediation:** Teaching addressed to a failed Tutor evaluation or an Editor foundational-gap return named in Remediation Source.
- **Follow-up:** Corrections, reminders, practice inspection, or questions under an existing lesson's outcomes. It creates no new LESSON check.

**Lesson Complete** is the readiness signal for a LESSON check:

- **Yes:** A Lesson or Remediation session in which every agreed outcome has now been taught and attempted with feedback. The lesson's LESSON check is due.
- **No:** A Lesson or Remediation session that ended before that point. The lesson continues with Teacher, and no LESSON check is due yet.
- **N/A:** Every Follow-up.

A LESSON check is due only when the lesson's latest Lesson or Remediation record says `Yes`.

## Lesson Outcomes

Lesson Outcomes save the outcome, depth, and standards Teacher and the learner agreed before teaching, so later sessions and evaluations work from the same scope instead of re-deriving it from the notes.

- **Agree before teaching.** Derive outcomes from the unit objectives and milestone criteria the lesson supports, within the unchanged contract. Before the first criteria-bearing record is saved, they may be adjusted by agreement, for example when a diagnostic shows part of the plan is already known. Closeout saves that agreed set. Once saved, continuations and retries preserve it; a newly needed capability belongs in a separately scoped lesson rather than a rewritten or expanded criterion set.
- **Describe capability, not content.** Each outcome states what the learner does and under which conditions: closed-book, documentation allowed, running tools, provided starting material. Keep the critical set small and essential. A detail mentioned in teaching is not automatically an outcome.
- **Criticality:** `Critical` outcomes must be demonstrated for the lesson's LESSON check to pass. `Supporting` outcomes were taught and are worth practicing but do not decide that check.
- **Stable IDs:** Number outcomes `LO1`, `LO2`, … within the record that defines them, and cite them with that record's path. Never renumber or reuse an ID.
- **One authoritative copy:** The record of the session where outcomes were agreed carries them with `Criteria Source: This record`. Continuations, follow-ups, and remediation after a failed LESSON evaluation point Criteria Source to that original record and omit the section, so retries keep the same scope.
- **Notes illustrate, never add.** Lesson notes show what was taught. Material in the notes, including explanation added during remediation, does not become a critical criterion unless it is a saved outcome.
- **Gate remediation:** A remediation lesson for a failed MILESTONE or UNIT evaluation, or an Editor foundational-gap return, defines its own outcomes for the evidenced gap, within the originating report's criterion. Its record uses `Criteria Source: This record`.
- **None:** Use `None` only for a follow-up that concerns no lesson, such as practice inspection unrelated to a specific lesson.

### Records without Lesson Outcomes

Records written before this section existed remain unchanged. Clarify outcomes only when a lesson still needs them: before remediating a failed LESSON evaluation, or when closing a lesson whose LESSON check is still due. Reconstruct them from the earliest record's stated focus, the lesson as first taught, and, for a failed evaluation, that report's Criteria Coverage. Do not add distinctions introduced by later remediation. Confirm them with the learner, save them in the new record with `Criteria Source: This record`, and note in O that they were clarified from legacy records. Lessons already passed with no pending check need no clarification. A Follow-up about such a lesson uses `Criteria Source: Legacy: <path to the lesson's earliest record>` and adds no Lesson Outcomes. The `Legacy:` form is valid only for that case: a Follow-up record with `Lesson Complete: N/A` about a lesson whose LESSON check has passed. Any later Lesson or Remediation session for that lesson clarifies outcomes as described above.

## Numbering and Immutability

Scan the unit's `./learning-records/` for the highest existing number and increment by one. Use `NNNN-<lesson-name>.md`, or a short topic name for a record that concerns no lesson; Session ID matches that sequence number.
Each qualifying teaching session, including remediation and follow-ups, creates a new record. Preserve earlier records unchanged. Corrections and improved explanations update the canonical lesson notes; the new record captures what changed during the session.

## When to write a learning record

Write a learning record at the end of every active teaching session, including remediation, qualifying follow-ups, and completed lessons with no observed difficulties, before closing out or handing off.

### What does _not_ qualify

- Casual check-ins, greetings, or setup prompts.
- Brief clarifying questions (e.g., "What's the syntax for this again?") where no actual learning loop, conceptual friction, or debugging took place.

## Completion

Before handoff, verify that all S.O.A.P. sections are populated, observations are distinguishable from interpretations, referenced local artifacts exist, pending work is explicit, and earlier records remain unchanged.
Confirm that Session Type is set, Lesson Complete is `Yes` or `No` for Lesson and Remediation records and `N/A` for Follow-ups, Criteria Source resolves to a record containing Lesson Outcomes (except the `Legacy:` follow-up form above, or `None` for an unrelated follow-up), and any Lesson Outcomes table has stable IDs, conditions, and criticality.
