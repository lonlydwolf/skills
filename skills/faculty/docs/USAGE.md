# Use Faculty

Faculty keeps a course in a folder so you can learn, demonstrate understanding and improve your work across sessions. This guide follows a learner who knows spreadsheets and wants to clean CSV datasets in Python. The same workflow applies to writing, design and other subjects; the course requirements determine what you demonstrate.

For setup, see [Installation](INSTALL.md). For a blocked or confusing step, see [Troubleshooting](TROUBLESHOOTING.md).

## Plan your course

After initializing a new course folder, start a fresh session there and select `academic-advisor`. Give Advisor a concrete goal, relevant background and constraints:

> I know spreadsheets and want to clean CSV datasets in Python. I have three hours a week. By the end, I want to build a script that handles missing values and produces a useful summary.

Answer the intake questions one at a time. Explain what you can already do, where you are uncertain and any tools or accessibility needs that affect the work. Advisor uses this to propose a route, identify prerequisites and agree on topics to defer.

Review the proposed destination and cut list before the first unit is activated. The roadmap shows the larger course; only the selected unit is planned in detail. Later units can change as evidence develops.

If you can already do what a unit requires, ask Advisor for challenge entry. You go straight to the unit's evaluations and builds without lessons first, under the same requirements. A failed evaluation or rejected build leads to the usual remediation, and you can ask Teacher for instruction at any point.

Advisor saves the learner profile, roadmap and active unit contract. The contract explains that unit's objectives, boundaries, milestones and required evidence. Once activated, its requirements stay fixed. Teacher can adapt explanations and pacing within them.

## Follow the saved next step

At each formal handoff, start a fresh session in the same course folder and select the named skill. A fresh session means a new conversation in that workspace with the selected role loaded. You can stay in one session while that role completes its work with you.

The current next step is saved in the course's `AGENTS.md` routing record. Read **Workflow Status**, **Next Formal Role** and **Required Action** together:

| Status | What to do |
|---|---|
| `Ready` | Start the named role and carry out its required action. |
| `Waiting` | Complete your pending work, then start the named role. |
| `Blocked` | Start Advisor for recovery of the recorded problem. |
| `Complete` | The course has no pending formal action. |

The role names in the routing record correspond to these skill names:

| Recorded role | Skill to select |
|---|---|
| Advisor | `academic-advisor` |
| Teacher | `teacher` |
| Tutor | `tutor` |
| Editor | `editor` |

For example, `Waiting` with Editor as the next role means you finish the assigned build before requesting review. `Ready` with Tutor as the next role means an evaluation can begin now.

If your tool does not automatically load the course's routing record and its shared-rules pointer, include this at the start of a formal session:

> Before acting, read the course's `AGENTS.md`, follow its pointer to `.course-rules.md`, and establish the current required action.

If the saved state and the latest course evidence disagree, use [recovery](TROUBLESHOOTING.md#the-course-is-blocked-or-its-records-disagree).

## Learn with Teacher

Select `teacher` when the saved action calls for instruction, practice follow-up or remediation:

> Continue the current unit from its saved next action. I can read a CSV, but I am unsure how blank cells affect a calculation.

Teacher first agrees with you what the lesson should let you do, such as "explain how blank cells affect a summary and handle them in a script", and checks what you already know. If you show you already understand something, say so; Teacher should move on to what is new. A lesson can cover several related ideas, with one question or step at a time. Show your reasoning, attempt the problem and say when something is unclear. You can ask for a slower pace, another example or a break.

A completed lesson saves HTML study notes and a learning record of the session and its agreed outcomes. Teacher may also prepare an assignment. The next formal step is a Tutor lesson evaluation before pending independent work proceeds. If a session ends before the lesson is finished, the next step is to continue with Teacher.

Returning to Teacher with a correction, a command you have forgotten or completed practice is a follow-up. It can update the notes but does not start a new lesson evaluation.

When you return for remediation, identify the latest failed evaluation or review. Teacher uses its specific gap to guide instruction within the existing unit.

## Demonstrate understanding with Tutor

Select `tutor` when the course calls for conceptual evaluation:

> Carry out the evaluation recorded in the current next action. Establish its scope and permitted aids before starting.

Tutor states the criteria and permitted aids, then asks which aids you have open; your answer is recorded neutrally. Tutor asks one prompt at a time and gathers evidence from your answers. Expect to explain, predict, diagnose or apply the material in changed examples. Conceptual retrieval is closed-book by default; Tutor states when references or tools belong to the capability being assessed.

Tutor uses three evaluation types:

| Type | Scope |
|---|---|
| `LESSON` | One completed teaching lesson. |
| `MILESTONE` | Integrated understanding for a non-final conceptual or combined milestone. |
| `UNIT` | Cumulative conceptual understanding at the final unit gate. |

A completed attempt saves a report with `PASS` or `FAIL`, the evidence for each critical criterion, excerpts quoting the prompts and your answers behind each status, and a next route. Each criterion is `MET`, `NOT MET` or `NOT ASSESSED`; a slip in wording does not fail a criterion when your reasoning shows the capability. A failure identifies each gap. Return to Teacher for remediation, then to Tutor for a fresh evaluation of the same type and target against the same criteria. It focuses on what was missing and briefly rechecks the rest. Earlier reports remain as history.

For an interrupted evaluation, see [Pause and resume](#pause-and-resume).

## Complete practice and builds

Teacher's assignments state their purpose, work, constraints, permitted aids, artifact location and completion signal. A BUILD marked `Preview` shows where the unit is heading; wait until it is `Released` and your saved next step allows it. Guided practice during lessons can use your real project, but keep it out of the build's artifact locations. Read the learner-facing `assignment.html`; its authoritative requirements are in `task.md` beside it.

There are two assignment types:

| Type | Example in the CSV course | Where to take completed work |
|---|---|---|
| `PRACTICE` | Predict how a small dataset's missing values affect a summary, then explain your answer. | Teacher for instructional follow-up. |
| `BUILD` | Create a reusable CSV-cleaning script and the outputs required by its assignment. | Editor for formal review. |

Follow the saved route and any conceptual prerequisites before starting pending independent work. For example, a build for a non-final milestone that also requires conceptual evidence waits for Tutor's milestone evaluation. Save file-based outputs at the assignment's stated locations. For work delivered in the conversation, use the specified completion signal.

### Submit a build

After completing a BUILD, start a fresh session with `editor`:

> The build named in the current required action is ready. My files are at the assignment's stated artifact locations. Review the submission against its requirements.

Editor asks which aids and assistance you used and records your answer neutrally. If you disclose help the task's Permitted Aids clearly exclude, the work it produced is not counted and the review asks you to redo that part under the stated conditions; if the Permitted Aids are silent, `None`, or unclear about that help, Editor records the disclosure and reviews as usual. Editor then inspects your work and saves a Plus/Delta report: the version inspected, demonstrated strengths, improvements, their consequences and an `APPROVED` or `REJECTED` verdict. A material defect or unmet required criterion blocks approval. Suggestions without a material consequence can accompany approval.

Read the report's **Required Action**. You make the revisions. A usual rejection asks you to revise and return to Editor; evidence of a conceptual gap can instead send you through Teacher and Tutor before another review.

For resubmission, identify the current artifacts and prior review:

> I have revised the submitted files to address the latest review. Please review the full current submission, including the earlier blocking findings.

Editor creates a new report and preserves the previous attempt. It lists each earlier blocking finding as resolved, persisting or not reproduced, and explains any newly raised blocker against the same requirements. If you cannot tell what would resolve a finding, ask Editor to explain it; that conversation changes no course state. A blocker that persists because the feedback was unclear receives a clearer restatement, and a requirement that cannot be satisfied goes to Advisor rather than another rejection. Approval of an ordinary or non-final build returns you to Teacher. A final build's approval proceeds to Tutor's cumulative UNIT evaluation.

## Finish a unit

A milestone describes the evidence required for a capability: conceptual understanding, an applied build, or both. Follow the saved next action through those gates; every unit also has a final cumulative Tutor UNIT evaluation.

Once the required gates have passed, Tutor routes you to Advisor:

> Verify whether the active unit's required evidence is complete and carry out the recorded progression step.

Advisor checks the applicable reports, closes the unit when justified, and updates the learner profile. If course work remains, Advisor prepares the next eligible unit. When all required units are closed, Advisor records course completion with no active unit or next formal role.

You can inspect `roadmap.html` for orientation and `Learner.md` for the current learner profile. An intake finding is provisional; completed unit evidence supports later consolidation. A passed unit shows what you could do when assessed, not that you will remember it.

### Review later

When a unit closes, including the last one, Advisor can offer a delayed review. Agree to a timing or decline; the roadmap's Review Plan records only what you accept. Faculty does not send reminders. When you want the review, start Advisor:

> I agreed to review the CSV-cleaning unit around now. Please set up the review.

Advisor prepares a short review unit with challenge entry, using the original requirements you choose to re-check. If another unit is active, schedule the review for a unit boundary or explicitly withdraw the active unit before switching. If a review shows you have forgotten something, your profile records it as a current gap. Earlier results and closed units stay unchanged. You can work through remediation or withdraw the review; withdrawing it after completing the course returns the course to `Complete`.

## Change direction or stop

Your goals can change. Start `academic-advisor` and say what you want instead:

> I no longer want to finish the current unit. I would rather focus on reporting summaries, or stop the course for now.

Advisor checks whether a break, different pacing or a revised route would serve you better, then follows your decision. The current unit becomes `Withdrawn` on the roadmap with your stated reason. Its contract, notes and results stay in its folder. A withdrawn unit is not completed: it does not unlock later units or count toward finishing the course.

You can switch to a newly planned unit, stop with no active unit, or later ask Advisor to resume the withdrawn unit under its original requirements. After a stop, the routing record shows `Waiting` with Advisor as the next role; it does not show `Complete`.

## Find your saved work

These paths are inside your course folder. Unit and assignment names vary with your course; directories and files appear as the relevant work is completed.

| What you want | Where to look |
|---|---|
| Current next step | Root `AGENTS.md`. |
| Course overview | Root `roadmap.html`, generated from `roadmap.md`. |
| Current learner profile | Root `Learner.md`. |
| Active unit requirements | Its `unit.md` under `Units/`. |
| Lesson refresh material | That unit's `lessons/NN-<name>/notes.html`. |
| Assignment requirements and your output locations | That unit's `assignments/NN-<name>/assignment.html` and `task.md`. |
| Teaching-session history | That unit's `learning-records/`. |
| Conceptual results | That unit's `evaluations/`. |
| Build feedback | That unit's top-level `reviews/`. |
| Researched sources | Root or unit-local `resources/`; downloaded files are under `source-files/`. |
| Teacher-authored lookup aids | That unit's `reference/`. |

## Pause and resume

Before ending a session, let the role complete its saved outputs and handoff when possible. Keep the course folder, including its hidden `.course-rules.md` file, together when moving it or making a backup.

After a break, open the same course folder, read the current next action and start the indicated role in a fresh session:

> Resume from the saved course state. Establish the active unit and required action before continuing.

For unfinished learner work, complete it before requesting its inspection. For an externally interrupted Tutor evaluation without a verdict, return to Tutor for a fresh attempt. If an interruption leaves missing files or contradictory state, ask Advisor to inspect the saved records and recover a valid route.

Skill updates and course records are separate. Follow [update guidance](INSTALL.md#update-faculty) and any supplied course-migration instructions.

### Persistent memory

For Faculty sessions, we recommend disabling both use of existing persistent memory and contribution to future memory where your tool supports those controls. Use a supported session, project or account scope appropriate to your setup. Course files provide continuity between sessions.

You configure these settings yourself. This recommendation is optional, and disabling memory does not guarantee isolation from every source of context. See [known limitations](CHECKS.md).

## Explore with Roommate

Select `roommate` in a fresh session whenever you want to explore a question, inside or outside a course. Supply the context you want to discuss:

> I have been thinking about missing data. Could we explore whether a historian's handling of missing evidence offers a useful comparison, and where it breaks down?

To explore something from your course, point Roommate to the specific material:

> Read my notes from the missing-values lesson. I want to explore whether "missing" means the same thing in a survey and in a sensor log.

Roommate reads only the course material you select. Your tool may still load the routing record automatically; Roommate leaves it unchanged. It does not browse your course folder or read your learner profile unless you select that material. If your request could match several files, it asks which one you mean. Selected material does not turn the conversation into a review: Roommate does not quiz you, judge your progress or act on routing notes inside the file.

Roommate contributes unfamiliar perspectives and helps examine connections. You can follow a tangent, change direction or stop with the question still open. Roommate saves nothing to the course and leaves course files and formal progression unchanged.

If an idea might change your learning goal, bring it to Advisor for consideration in course planning. For a concern about the active course, raise it with the current formal role and request the appropriate handoff. Activated unit requirements remain fixed; material defects use Advisor's recovery process.

## Ask for source support

Advisor and Teacher arrange Librarian research when their work needs sources. You can explain an access problem or request grounding through the current role:

> This source is inaccessible to me. Please check whether the unit can use an accessible source that supports the same requirements.

The invoking role collects and checks the completed research before relying on it. Any unresolved access or coverage gap stays explicit. You do not need to select Librarian as a normal learner-facing step.
