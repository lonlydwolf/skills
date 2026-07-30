---
name: setup-faculty-skills
description: Configure a course folder for the faculty skills — scaffold the workspace and learner profile, settle the theme.
disable-model-invocation: true
---

# Setup Faculty Skills

Scaffold the per-folder configuration that the faculty skills assume:

- **Workspace scaffold** — the day-zero course tree, a minimal agent-instructions file, shared assets
- **Learner profile** — fresh, or carried forward from a previous course
- **Course theme** — settled once

Every per-course fact lives in a course-owned file this installer scaffolds — the learner in `learner.md`, the theme in `assets/conventions.md`, the workspace rules in the agent-instructions file. The faculty skills reference those files, never hard-code the facts.

Run this once per course folder, before the first `/advisor` mission. Every later run **converges** the folder on the day-zero tree — read what exists, compute the gap, write only the gap. Repairs, never resets.

## Process

### 1. Explore

Look at the current folder to understand its starting state. Read whatever exists; don't assume:

- `AGENTS.md` and `CLAUDE.md` at the folder root — which exists? does it match the [agent-instructions.md](./templates/agent-instructions.md) template? This decides whether Section C runs at all.
- `learner.md` at the folder root. This decides whether Section A runs at all.
- `assets/` — which stylesheet is present, and the theme line in `assets/conventions.md`. This decides whether Section B runs at all.
- Are the upstream skills this suite composes — `teach`, `grilling`, `research` — plus `ask-matt`, which the router points at, installed? (each present as a skill folder alongside this one, or in your available skills.) any missing → print `npx skills@latest add mattpocock/skills` and **stop**.

Found content that is neither this scaffold nor an empty folder — someone's project, stray files? Show the user what's there and **stop** until they rule.

Explore is done when every section's run/skip is decided and the upstream skills are confirmed — or the run has stopped.

### 2. Present findings and ask

Summarise what's present and what's missing. Then take the sections in order — one section, one answer, then the next.

Every section obeys the same rule: lead with the recommended answer so the user can accept it in a word; give a short explainer only when the choice genuinely branches; skip the section entirely when exploration already decided it. The step is done when every section is answered or skipped.

**Section A — Learner profile** — skip when `learner.md` exists.

> Explainer: the "learner profile" is where durable insights about the learner live for this folder. The advisor's mission run seeds it with the deep level-grilling; `teach-unit` curates it at every session exit; `advisor`, `teach-unit`, `mentor`, and `office-hours` read it. Pick whether you want it fresh or copied forward from a previous course folder.

Default posture: fresh. Otherwise ask the user for the previous course folder path.

**Section B — Theme** — skip when settled, unless the user came to change the theme. Settled: the stylesheet and the `assets/conventions.md` theme line both present and agreeing; anything less runs the section.

Default: **catppuccin mocha** — but when a theme is already on disk, recommend the one the `assets/conventions.md` theme line names (the stylesheet installs under a stable name, so the conventions line, not the filename, identifies it). Offer:

- **light**
- **dark**
- **catppuccin**: Latte, Frappé, Macchiato, Mocha

Any dark theme falls back to a light theme for print — Latte when the theme is catppuccin, plain light otherwise.

**Section C — Agent instructions file** — runs only when exploration found ambiguity; otherwise the rule below resolves it silently:

- Neither `AGENTS.md` nor `CLAUDE.md` exists → no section: plan the default (`AGENTS.md` as the real file, `CLAUDE.md` containing `@AGENTS.md` so both agents read one source).
- The default pair already in place, or exactly one file matching the template → no section: use what's there.
- Both exist and diverge from each other, or the existing file diverges from the template → show the diff and ask which content wins.

### 3. Confirm and edit

Show the user a draft of what will be written — the gap against the day-zero tree below, never the whole tree. Gap empty → report the scaffold healthy and stop. On day zero the gap is everything: the tree summary, plus the agent-instructions draft in full (it's the file they'll live with). On a repair run it may be two files; after a theme change, the stylesheet swap and the `assets/conventions.md` line. Let the user edit before writing; write only on their explicit go-ahead.

### 4. Write

Write the gap, artifact by artifact. Each artifact obeys its ownership rule:

| Artifact                                                                                                              | Rule                                                                      |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Installer-owned** — `AGENTS.md` + `CLAUDE.md` pointer, the exercise templates, the stylesheet contents              | Create if missing; repair drift from template only after showing the diff |
| **Course-owned, accumulating** — `learner.md`, `transcript.md`, `HANDOFF.md`, `index.html`, everything under `units/` | Scaffold if absent; an existing file is never touched                      |
| **Settle-once** — the theme: which stylesheet, plus the adherence line in `assets/conventions.md`                     | Keep if settled; change only on explicit user request                     |

The day-zero tree — the gap when the folder is fresh:

| Path                      | Initial state                                                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`               | [agent-instructions.md](./templates/agent-instructions.md)                                                                                                                                            |
| `CLAUDE.md`               | one line: `@AGENTS.md`                                                                                                                                                                                |
| `transcript.md`           | [transcript.md](./templates/transcript.md) — header-only template                                                                                                                                     |
| `learner.md`              | verbatim copy from the previous course, trimmed to the cap — or fresh [learner.md](./templates/learner.md) (cap stated in its header)                                                                                        |
| `HANDOFF.md`              | [HANDOFF.md](./templates/HANDOFF.md) — "no sessions yet" stub                                                                                                                                         |
| `index.html`              | [index.html](./templates/index.html) — themed empty-state hub, `roadmap.html` link pre-placed at the top                                                                                              |
| `assets/`                 | the chosen stylesheet from [themes/](./themes/), installed **as `assets/theme.css`** — the stable name every learner-facing page links; [conventions.md](./templates/conventions.md) carrying the theme + print-fallback lines; the three exercise templates from [exercises/](./exercises/) |
| `playground/`, `units/`   | empty                                                                                                                                                                                                 |
| `roadmap.md`, `.roadmap/` | **not created** — `/advisor`'s mission run creates them                                                                                                                                               |

Done when every artifact shown at confirm matches its approved content on disk, and nothing else on disk has changed.

### 5. Done

Point the user at `/advisor` for the mission run — planning starts there.
