---
name: init-course
description: "Configure this folder for the faculty skills: Run once before first use of the other faculty skills."
disable-model-invocation: true
---

# Init Course

Initialize a new or empty course workspace for the six core faculty skills: academic-advisor, teacher, tutor, editor, librarian and roommate.

Write nothing until the preflight below is complete. A course that starts on a host that cannot run its roles, research or saved state fails later, in the middle of learning, where it is harder to diagnose.

## Preflight

Identify the target course workspace, then check each requirement. Record each result as **available**, **missing** (with the observed reason) or **unverified** (with what could not be checked). Missing means the evidence shows the requirement is absent; unverified means the evidence needed to decide is not accessible. Keep them distinct in the report.

Check this host and folder as they are. Do not install skills, change host settings or skill metadata, or invoke a role to test it.

### 1. Core roles

A role is available when the host can load it for this folder and the learner (or, for Librarian, Advisor and Teacher) can select it. A catalog entry, an installer listing or a `SKILL.md` somewhere on disk shows less than that.

For each core role:

- **Entrypoint:** Locate its installed `SKILL.md` in a skill location this host loads for this folder, using the host's documented or reported skill locations. Read it and confirm its `name` matches the role.
- **Required resources:** Confirm every file its `SKILL.md` links inside its own skill directory is readable, such as its format documents.
- **Selectable:** When the host provides an inventory of selectable skills (a skill picker, command list or skills listing), confirm the role appears there. Five roles are manual-only (`disable-model-invocation: true`, `allow_implicit_invocation: false`), so a host may omit them from the skills it offers for automatic use. Absence from that automatic list is expected and does not make a role missing. Librarian has no manual-only policy because Advisor and Teacher invoke it.

If the entrypoint and resources are readable but the host offers no inventory you can check, record selectability as unverified and ask the learner to confirm they can select each manual-only role in their tool.

### 2. Research worker

Librarian is a required role that delegates research to a background subagent. Confirm this session has a host tool or documented mechanism for launching one. Check availability only; starting a trial research job would cost time and produce an unrequested artifact. A capability available here may still be restricted by a later session's permissions, so report it as available in this session.

There is no inline research fallback. If the host has no subagent mechanism, record the research worker as missing.

### 3. Saved-state loading

Formal roles resume the course from `AGENTS.md`, which points to `.course-rules.md`. Determine whether a fresh session started at the course root loads `AGENTS.md`, using the host's current documentation or observed configuration, including instruction files in parent directories that can take precedence over it.

- **Loads `AGENTS.md`:** record available.
- **Loads a different instruction file instead:** if that file does not already exist at the course root, offer to create it containing only a reference that loads `AGENTS.md` (for hosts that support imports, an import line). Copying the rules or route into it would create a second authority that later handoffs do not update. Add the file to the planned outputs only with learner confirmation. If it already exists, leave it unchanged and record loading as not automatic.
- **Cannot determine:** record unverified.

This session cannot observe a future one. Report the expected behavior and its basis rather than stating that a later session loaded the files.

### 4. Existing files

Inspect for existing course artifacts and conflicting output paths: `Units/`, `.course-rules.md`, `AGENTS.md` and any host instruction file accepted in step 3. Treat `.jj/` and `.git/` as version-control metadata, not course-artifact collisions.

### Report and decide

Report each requirement's result before writing.

- Stop before creating course artifacts if any core role or the research worker is missing, or if a role's entrypoint or resources cannot be verified. Name what is missing and where you looked.
- If role selectability or the research worker is unverified, explain the consequence and proceed only with the learner's explicit confirmation.
- If saved-state loading is unverified or not automatic, give the learner the opening instruction from the handoff below; this does not block initialization.
- If collisions exist, report them and obtain learner confirmation before modifying anything.

## Create the workspace

### 1. Scaffold directories

Create `Units/` in the course root.

### 2. Create global rules (`.course-rules.md`)

Create `.course-rules.md` in the course root containing the exact text of [course-rules.md](./course-rules.md) from this skill folder.

### 3. Create the initial state tracker (`AGENTS.md`)

Create `AGENTS.md` in the course root from the template in [course-rules.md](./course-rules.md), with these values:

- **Last Active:** set through the "Publish and verify course state" procedure in `course-rules.md`: obtain the current UTC time with a tool immediately before writing and use `YYYY-MM-DD HH:MM`.
- **Active Unit:** `None`
- **Last Transition:** `Course workspace initialized`
- **Workflow Status:** `Ready`
- **Operational Blocker:** `None`
- **Next Formal Role:** `Advisor`
- **Required Action:** `Establish the learner profile and generate the initial curriculum roadmap and active unit contract.`

### 4. Create the host instruction reference (only if accepted)

If the learner accepted it in preflight step 3, create the host instruction file containing only the reference to `AGENTS.md`.

## Validate and hand off

Before reporting success:

- Read back `.course-rules.md` and confirm it matches the source.
- Read back `AGENTS.md` and confirm the rules pointer, the initial values above and that Last Active matches the clock observation.
- Confirm `Units/` exists, and that any host instruction file contains only the reference.
- Report any incomplete operation rather than claiming initialization succeeded.

Then list the created assets and the preflight results, including anything unverified. Direct the learner to invoke `academic-advisor` in a fresh session. If saved-state loading was not confirmed as automatic, tell them to begin that session with: "Before acting, read `AGENTS.md` and follow its pointer to `.course-rules.md`."
