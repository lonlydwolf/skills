---
name: init-course
description: "Configure this folder for the faculty skills: Run once before first use of the other faculty skills."
disable-model-invocation: true
---

# Init Course

Initialize a new or empty course workspace for the six core faculty skills.

## Process

1. Identify the target course workspace.
2. Verify all six required core skills are installed: academic-advisor, teacher, tutor, editor, librarian and roommate.
   If any required skill is missing or its installation cannot be verified, report the unresolved requirements and stop before creating course artifacts.
3. Inspect for existing course artifacts and conflicting output paths.
4. If collisions exist, report them and obtain learner confirmation before modifying anything.

Treat `.jj/` and `.git/` as version-control metadata, not course-artifact collisions.

### 1. Scaffold Directories

Create the following directory in the root of the project:

- `Units/`

### 2. Create Global Rules (`.course-rules.md`)

Create a file named `.course-rules.md` in the root directory. Write the exact text from [course-rules.md](./course-rules.md) in this skill folder into it.

### 3. Create Initial State Tracker (`AGENTS.md`)

Create a file named `AGENTS.md` in the root directory. Use the template from [course-rules.md](./course-rules.md). fill the fields with the following values:

- **Last Active:** `Current timestamp`
- **Active Unit:** `None`
- **Last Transition:** `Course workspace initialized`
- **Workflow Status:** `Ready`
- **Operational Blocker:** `None`
- **Next Formal Role:** `Advisor`
- **Required Action:** `Establish the learner profile and generate the initial curriculum roadmap and active unit contract.`

### 4. Validate and hand off

Before reporting success:

- Verify required skills were found.
- Read back `.course-rules.md` and `AGENTS.md`.
- Confirm the copied rules match the source and the ledger contains valid initial values.
- Confirm `Units/` exists.
- Report any incomplete operation rather than claiming initialization succeeded.
- List created assets and direct the learner to invoke `academic-advisor` in a fresh session.
