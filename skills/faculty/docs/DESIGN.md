# Faculty design

Faculty turns a learning goal into a course with distinct planning, teaching, assessment, review, research and exploration roles. This document explains the architecture and the boundaries that changes should preserve. Each role's skill instructions and format documents define its detailed behavior.

## Roles and responsibility

Faculty has six core roles and a course initializer. Initialization requires all six roles. The learner explicitly selects Advisor, Teacher, Tutor, Editor, Roommate and initialization. Formal handoffs use fresh sessions. Librarian provides background research commissioned by Advisor or Teacher.

| Role | Owned work |
|---|---|
| Advisor | Learner profile, roadmap, unit contracts, contract replacement and unit closure. |
| Teacher | Instruction, lesson notes, learning records, assignments and instructional references. |
| Tutor | Conceptual evaluations. |
| Editor | Reviews of BUILD artifacts; the learner performs revisions. |
| Librarian | Research at the destination supplied by Advisor or Teacher. |
| Roommate | Learner-directed exploration without course artifacts or progression changes. |

Format documents define valid saved artifacts: fields, naming, numbering, immutability, report mechanics and completion checks. Skill instructions define how a role performs its work: eligibility, evidence gathering, execution, recovery and handoff. Keep each rule in its owning document and link to it where needed. Optional future helpers must leave the core workflow usable when absent.

## Planning and contracts

Advisor's rolling-wave prerequisite network is a branching plan with one Active unit during an ongoing course and none after completion. Only the selected unit is fully specified; future units remain concise roadmap entries. `roadmap.md` owns lifecycle state, and `roadmap.html` is its generated view. Prerequisites are canonical; reverse relationships are derived.

Before activating a unit, Advisor checks prerequisite fit, source accessibility, scope, alignment between objectives and milestones, observable criteria, evidence types, final-gate validity, reachable routes and constraints. Activated `unit.md` is immutable. A unit has at least one FINAL milestone and at most five milestones, each with a stable identifier and CONCEPTUAL, BUILD or COMBINED evidence.

Teacher adapts instruction within the contract. Bounded clarification and immediate safety or correctness responses fit that responsibility. Ordinary difficulty receives scaffolding and remediation. Curriculum changes and material contract defects return to Advisor.

A defective contract can be replaced only when valid adaptation within it is impossible. Advisor validates a replacement, preserves the original and its evidence, updates the roadmap and records a mapping for every independently required outcome and condition. Prior evidence can be RECOGNIZED only when criteria are identical, conditions are equal or stricter, the passing report is accessible and the defect did not affect that evidence. Changed criteria or uncertainty require REPEAT. Recognition preserves the original verdict's scope.

## Learning and gates

Every completed teaching or remediation lesson receives a Tutor LESSON evaluation. Tutor uses LESSON, MILESTONE and UNIT evaluations in one SBAR format. PASS requires every critical criterion to be MET. Completed attempts are immutable; reevaluation uses new prompts for the same type and target. An interrupted evaluation creates no completed report.

Teacher labels work PRACTICE or BUILD before it starts. PRACTICE returns to Teacher. BUILD produces a persistent inspectable artifact and goes to Editor. TILT organizes `task.md`; GRASPS helps design assignments when a role, audience or realistic situation materially affects the task. `task.md` is authoritative, and `assignment.html` preserves its learner-facing requirements.

Editor records scope coverage, strengths and improvements with their consequences. Any blocking finding or unmet required criterion means REJECTED. Nonblocking improvements can coexist with APPROVED. Learner revision followed by Editor review is the usual rejection route. A Teacher → Tutor → Editor route requires evidence of conceptual misunderstanding. Earlier review attempts remain unchanged.

Non-final CONCEPTUAL milestones use Tutor MILESTONE. Non-final COMBINED milestones pass that conceptual gate before their BUILD. Final CONCEPTUAL proceeds to Tutor UNIT; final BUILD or COMBINED requires Editor approval before Tutor UNIT. A final milestone does not need a redundant MILESTONE evaluation. Advisor checks required evidence, consolidates the learner profile and closes the unit. Only UNIT PASS supports durable conceptual mastery.

## Durable course state

`Learner.md` is a concise current model maintained by Advisor. Its Provisional Baseline distinguishes self-report and intake findings from mastery. C.A.M.S. separates Conceptual Mastery, Applied Execution, Misconceptions and Gaps, and Scaffolding and Constraints. Unit evidence supports consolidation; observations stay in role records during the unit. Resolved gaps are removed. The profile describes capabilities and useful supports rather than identity labels. Its target is 1,500 words, with consolidation required above 2,250 words.

The course routing record contains the current status, transition, blocker and next action. Advisor, Teacher, Tutor and Editor maintain it according to the shared course rules. Each write uses a fresh tool-observed UTC timestamp and saved read-back. Instructional details and evidence paths remain in role-owned records. Missing or contradictory state blocks new evidence and routes to Advisor. Course completion clears the active unit and next formal role.

Teacher's `notes.html` is the canonical saved lesson. Roadmap and assignment HTML are projections of Markdown authority. The producing role checks saved content, parity, links and appropriate rendering or interaction. Unavailable inspection is disclosed.

Librarian appends research entries, preserves earlier sources, distinguishes attributed claims from synthesis and verifies saved downloads. Independent topics can proceed concurrently; updates to the same topic are serialized. Advisor or Teacher waits for completed, accepted research before relying on it.

Roommate uses the context supplied by the learner inside or outside a course. It follows curiosity, tangents, pauses and endings, checks an analogy's structure and limits before inference, and leaves formal course state unchanged.

## Distribution and release boundaries

Maintain source files under `skills/faculty/`. Both desktop plugins contain initialization and all six roles, generated from the same maintained files and using one version. The desktop targets are ChatGPT Work and Claude Cowork or equivalent local-task controls.

Beta downloads use GitHub Releases. ChatGPT uses a supplied local catalog, and Claude uses a custom plugin upload. The repository also provides a skills-installer route. The official ChatGPT directory listing is reserved for final release after real-use feedback.

Versions progress from `0.1.0-beta.1` through numbered betas to `0.1.0`. Beta status does not establish compatibility with every host or account, or measured learner outcomes. See [checks and known limitations](CHECKS.md).

Where available, users can disable both persistent-memory use and contribution for Faculty work. Course files provide durable context. The skills do not change account settings automatically, and memory-off results do not establish universal isolation.

See [role rationale](ROLE-RATIONALE.md), [maintenance](MAINTENANCE.md) and the [source library](sources/README.md). Architectural changes should explain their effect on these boundaries in an issue or pull request.
