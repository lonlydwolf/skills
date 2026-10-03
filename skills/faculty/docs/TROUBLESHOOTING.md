# Troubleshoot Faculty

Use the course's saved next action to identify what should happen, then find the symptom below. [Installation](INSTALL.md) covers setup and updates; [Usage](USAGE.md) explains the normal workflow. Faculty is in beta, and [known limitations](CHECKS.md) describes the scope of existing coverage.

## A required skill is missing

Initialization stops before creating course artifacts if it cannot verify all six core roles. Confirm all seven Faculty skills are installed, including `init-course`, in a scope available to the selected tool and course folder. Follow [installation guidance](INSTALL.md#install), then start a fresh session so the tool can load the installed instructions.

If the files are present but a role remains unavailable, report the skill name, installation scope, tool/version and visible error. A tool may install files successfully while lacking a capability the course needs.

## Initialization finds existing files

`init-course` checks for course artifacts and conflicting output paths before writing. Read its collision report before approving any modification.

For a new course, choose a new folder. For an existing course, follow its saved route; use Advisor if its state needs recovery. Initialization is a setup operation, so repeating it is not the normal way to resume a course.

## A fresh session seems to have forgotten the course

Confirm the session has read/write access to the intended course folder. A similarly named folder, a different working directory or a partial copy can explain missing context.

Ask the selected formal role to read the course's routing record and shared rules:

> Read this course's `AGENTS.md`, follow its pointer to `.course-rules.md`, and establish the current required action before continuing.

The active contract and relevant saved records supply the detailed context. If files are missing or inconsistent, use Advisor recovery below. Check the [memory recommendation](USAGE.md#persistent-memory) if unexpected prior context appears.

## A role says it is too early to act

Read **Workflow Status**, **Next Formal Role** and **Required Action** together. `Waiting` means you have pending work to complete before invoking the named role. A formal role selected too early preserves the course state and points you to the recorded step.

For example, Editor cannot review an unfinished build, and Tutor cannot perform a final UNIT evaluation before a required final-build approval. Follow the existing action or complete its prerequisite. If the route conflicts with the actual reports, ask Advisor to inspect that contradiction.

Roommate remains available for exploration regardless of the formal route.

## The course is blocked or its records disagree

Start a fresh session with `academic-advisor` in the course folder. Describe the symptom and any recent interruption, move or update:

> The saved next action conflicts with the latest report. Please inspect the course records, identify the contradiction and recover a route supported by the existing evidence.

Advisor checks authoritative files and looks for the smallest supported repair. Keep existing contracts and reports intact while the problem is investigated. Missing evidence stays unresolved; recovery cannot manufacture a passing assessment.

A defect in an activated unit's requirements may need a validated replacement with preserved history. Ordinary difficulty, slower pacing or a need for another explanation calls for Teacher's adaptation within the current contract. Advisor decides whether a reported contract problem qualifies for replacement.

## An evaluation or review result seems wrong

Open the latest report and locate the criterion, evidence or finding you dispute. Explain the specific discrepancy to the role that produced it, referencing the report and relevant work.

For example: “The review says the output file is missing, but it is at the assignment's specified location. Please inspect that file and explain whether the finding still applies.”

A misunderstanding or missing demonstration follows the report's remediation route. Revisions and reevaluations create new attempts while preserving completed reports. If the result is based on a factual error, an unclear requirement or an inaccessible artifact, request clarification; a contradiction preventing valid progression belongs with Advisor.

You can also [report the behavior](#report-a-problem-or-suggest-an-improvement), including a small example and the disputed criterion. A confidence statement alone does not replace the evidence required for a gate.

## An evaluation was interrupted

An externally interrupted Tutor evaluation without enough evidence for a verdict creates no completed report. Start a fresh Tutor session for the same type and target with new prompts.

If a completed report already exists, use its verdict and next route. If the saved report and routing record disagree, ask Advisor to inspect the state before continuing.

## Source research cannot finish

Raise the problem with the Advisor or Teacher session that commissioned the work. Provide the visible research error or access limitation and identify the source or topic involved.

That role can request a targeted correction or retry through Librarian, consider accessible alternatives, and determine whether a dependent step remains blocked. Research must finish and its saved output must be accepted before dependent work advances.

If a source problem requires changing the activated unit contract, Advisor handles the contract decision. Tactical source support stays within the existing requirements.

If your tool cannot run the separate research work required by Librarian, disclose that limitation to the invoking role. Changing the wording of a source request does not add a missing tool capability. Include this context when reporting the problem.

## HTML notes or assignment views are missing or broken

For lesson notes or assignment views, raise the problem with Teacher. For the roadmap view, raise it with Advisor. Include the affected path and what is missing, unreadable or inconsistent.

Open the saved HTML in a browser when your tool does not provide a usable preview. Keep the course's linked files together; moving one HTML file can break relative links and interactive aids.

`roadmap.md` owns roadmap state, and `task.md` owns assignment requirements. Their HTML views should preserve that content. If a view changes a requirement or omits something needed to do the work, ask its owner to reconcile the source and regenerate the view before relying on it.

If the tool cannot inspect a required artifact well enough to support a defensible result, the limitation should remain explicit. Report the affected file and unavailable capability.

## An update did not change an existing course

Updating installed skills refreshes their instructions. Existing course rules, activated contracts and completed reports remain in the course folder. Restart the session to load updated instructions, then follow any explicit migration guidance for the affected course.

Use [the update guide](INSTALL.md#update-faculty). Ask Advisor about a specific course-state problem rather than replacing course files with current templates or rewriting past results.

## Report a problem or suggest an improvement

Open an [issue](https://github.com/lonlydwolf/skills/issues/new/choose). Share what would make the behavior useful, what happened, and the smallest example that helps someone understand it. [Contributing](../../../CONTRIBUTING.md#report-a-problem) lists the useful details; you can report an issue without understanding the implementation.

For example:

```text
Skill: editor
Tool/version: <your tool and version>
Last installed or updated: <date, or unknown>
Current action: Waiting for the learner's build, then Editor review
Expected: the completed build would receive a review
Observed: Editor reports that the artifact cannot be found
Steps: initialize a course, reach this BUILD, save its output at the
       required location, then invoke Editor in a fresh session
Relevant excerpt: <the assignment's artifact location and visible error>
```

Remove personal and work information from excerpts or screenshots. Include memory settings or access limitations only when relevant. For suggestions, give a concrete situation and describe the improvement you want. For a proposed fix, follow [pull-request guidance](../../../CONTRIBUTING.md#prepare-a-pull-request) and [Faculty maintenance](MAINTENANCE.md).
