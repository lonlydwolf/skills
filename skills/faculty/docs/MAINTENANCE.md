# Maintaining Faculty

This guide explains how to investigate problems and make changes while preserving the meaning of course progress. Start with [the design](DESIGN.md), [role rationale](ROLE-RATIONALE.md) and [known limitations](CHECKS.md). For a particular change, also read the affected skill, its format documents and relevant [source notes](sources/README.md).

For issue and pull-request guidance, see [Contributing](../../../CONTRIBUTING.md).

## Understand the problem

Begin with the behavior someone expected, what actually happened and the smallest example that demonstrates the difference. Identify the affected role, release version, app and course state. A role problem, missing host capability and broken installation can produce similar symptoms but require different fixes.

Use the current source and saved artifacts to establish what happened. Keep observed behavior separate from assumptions. If an example is incomplete, explain what information is needed to distinguish the possible causes. Request only relevant excerpts, with personal or work information removed.

Describe a proposed change in terms of its trigger and result. For example: “After a failed UNIT evaluation, the next action should return to Teacher for remediation of the same target.” Identify the owning instruction before changing several roles to enforce the same rule.

## Find the maintained files

The seven skill directories under `skills/faculty/` are the maintained source. Make changes there. When preparing a release, rebuild desktop packages from the final source. A change to an installed cache or extracted download does not update the repository.

| Concern | Relevant files |
|---|---|
| Curriculum, placement and learner consolidation | [Advisor](../academic-advisor/SKILL.md) and its profile, roadmap, unit and supersession formats. |
| Instruction, notes and assignments | [Teacher](../teacher/SKILL.md), LEARNING-RECORD-FORMAT.md and ASSIGNMENT-FORMAT.md. |
| Conceptual evidence and evaluation routes | [Tutor](../tutor/SKILL.md) and EVAL-FORMAT.md. |
| BUILD scope, material findings and reviews | [Editor](../editor/SKILL.md) and REVIEW-FORMAT.md. |
| Source research and downloads | [Librarian](../librarian/SKILL.md) and SOURCE-FORMAT.md. |
| Exploration and analogies | [Roommate](../roommate/SKILL.md). |
| Initialization and shared course routing | [Initialization](../init-course/SKILL.md) and [course-rules.md](../init-course/course-rules.md). |
| Package layout and version | Release configuration and templates under `packaging/faculty/`, with the builder under `scripts/`. |
| Installation and learner guidance | Faculty README and installation/usage documentation. |

A format document defines what makes a saved artifact valid. It owns required fields, file naming, numbering, criteria references, coverage, verdict mechanics, routes and completion checks. Skill instructions define how to carry out the work: eligibility, evidence discovery, execution, recovery and handoff. Shared course rules own routing state.

Change the owning document and update its consumers' links. A repeated route table in several skills creates several places that can disagree; a scoped reference keeps the rule in one place. Include only context a role needs for the current branch.

## Preserve role responsibilities

Advisor controls curriculum boundaries and unit closure. Teacher adapts instruction within the active contract. Tutor evaluates conceptual capability. Editor reviews learner-produced BUILD artifacts; the learner makes revisions. Librarian researches to the brief and destination supplied by Advisor or Teacher. Roommate explores from learner-supplied context.

A fix should preserve those responsibilities unless it deliberately proposes an architectural change. Explain such a proposal in an issue before developing a large implementation, and update the design and rationale when it is accepted.

Explicit role selection is part of the workflow. Initialization and the five learner-facing roles keep their manual-invocation policy; Librarian remains available for research commissioned by Advisor and Teacher. Keep skill instructions and host metadata consistent. If a validation tool rejects a required policy field, report that incompatibility rather than removing the field solely to obtain a passing result.

Host metadata alone does not establish actual invocation behavior. An installation or discovery issue should describe what the affected app loaded and what the user could select.

## Write clear skill instructions

- **Purpose:** State the job, owned outputs, relevant context and evidence of completion. Explain the role's teaching or assessment principles through substantive examples or focused bullets.
- **References:** Say what a linked document contains and when it is needed. A filename alone does not establish when to read it.
- **Structure:** Keep common steps visible and detailed branch-specific reference behind links. Put a definition beside its rules and qualifications.
- **Completion:** Make completion observable. A saved review is complete after read-back confirms criterion coverage, findings, verdict, route and attempt linkage.
- **Boundaries:** Separate responsibilities when each has a distinct job or handoff. Keep manual role suggestions with the learner's choice of the next session.
- **Vocabulary:** Use familiar concepts such as contract, gate, preflight, TILT and Kata when they anchor a specific behavior. Define custom meanings locally.
- **Responsibility:** Describe the correct action and who owns it. Preserve explicit guardrails where they protect artifact ownership or assessment integrity.
- **Pruning:** Keep each rule in one authoritative location. Remove stale explanation and repetition while retaining rules that address a demonstrated failure.

A skill description supports discovery; the body supports execution. Learner-invoked descriptions should be concise summaries. Librarian's description identifies its research purpose. Supporting material can remain ordinary documentation unless it needs independent invocation.

Keep the Faculty category overview in README.md. Adding a parent SKILL.md can cause an installer to discover that parent instead of the nested roles.

## Protect course records

Use the authoritative contract and latest applicable evidence to diagnose progression problems.

Activated unit contracts and completed evaluations, reviews and learning records are immutable. Reevaluation and resubmission create new attempts with links to prior reports. Research corrections append an entry while preserving earlier entries. A later successful result does not rewrite an earlier failed verdict.

Missing evidence, failed evidence and unavailable tools are different outcomes. A role must not create a formal verdict when the step is blocked by missing or contradictory state. Operational recovery belongs to Advisor.

A contract replacement requires a material defect that cannot be addressed within the existing criteria. Check each independent replacement requirement when deciding whether earlier evidence applies. RECOGNIZED requires identical criteria, equal-or-stricter conditions, an accessible passing report and no effect from the defect. Uncertainty requires REPEAT.

For a routing problem, inspect the current status, next action and shared rules. Saved routing state must contain workflow information only, use a fresh UTC observation and be read back before announcing the handoff. Learner observations, teaching methods and detailed findings belong in the appropriate role record.

## Investigate research and rendering problems

Research has three distinct stages: commissioning the work, receiving its completed result and accepting the saved output. Advisor or Teacher owns suitability for the course; Librarian owns source research. A proposed curriculum decision cannot rely on research that only started. Updates to the same topic need serialization to preserve earlier entries.

For a saved-page issue, identify the authoritative content and the generated view. Roadmap HTML projects roadmap.md; assignment HTML projects task.md. Lesson notes are canonical HTML. Correct the authoritative content first when needed, then regenerate its projection and check semantic parity.

Distinguish a file being present from it rendering correctly or behaving correctly. Record unavailable browser, interaction or accessibility inspection honestly. A later check does not establish that the producing role inspected the page before its handoff.

## Report validation accurately

Choose checks that answer the concrete concern and describe what they establish. A focused reproduction is more useful than an unrelated set of passing checks. Record expected behavior, observed behavior and the result after the change, with relevant conditions and remaining uncertainty.

The [checks summary](CHECKS.md) records existing evidence and limitations. Keep historical failures visible when adding a successful follow-up. Counts of mixed assertions are not independent trials or reliability percentages. Synthetic responses do not measure real learner outcomes, and one successful host session does not establish compatibility with every app or account.

For example, reproducing a button's event-handling defect can support an Editor verdict. It does not establish keyboard usability, screen-reader behavior or visual quality unless those aspects were also inspected.

A pull request should state what was checked and what was not. Contributors can report useful issues without running a validation suite or changing the source.

## Maintain documentation and releases

Keep behavior, format documents and explanations aligned. If a change affects course routing, explain it in the design and usage documentation. If it changes a required host capability, update installation guidance and the limitations summary. Preserve source attribution and qualifications when shortening education notes.

Both desktop packages use one version and the same seven canonical skills. Keep app-specific manifests and catalogs in packaging, with role behavior in the maintained skill files. A release groups the accepted changes; rebuild once from the intended final source before publishing it.

Update the shared version, release notes and applicable learner-facing references together. Review the generated archive contents and entry instructions. Successful packaging is evidence of artifact generation, not a desktop installation result. See [the release guide](RELEASING.md) for publication steps.

Use matching numbered beta versions for both packages, followed by `0.1.0` for final release. The official ChatGPT directory listing is reserved for final release after real-use feedback. Source and download references must resolve to the published version before they are announced.

Plugin updates and course migrations are separate changes. Existing courses hold copied rules and immutable contracts. Explain whether a fix affects those existing courses and provide explicit migration instructions when needed. Installing a newer plugin must not silently change what an earlier learner was required to demonstrate.
