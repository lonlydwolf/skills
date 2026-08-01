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

Every per-course fact lives in a file this installer scaffolds — the learner in `learner.md`, the theme in `assets/conventions.md`'s theme lines, the workspace rules in the agent-instructions file. The faculty skills reference those files, never hard-code the facts.

Run this once per course folder, before the first `/academic-advisor` mission. Every later run **converges** the folder on the day-zero tree — read what exists, compute the gap, write only the gap. Repairs, never resets.

## Process

### 1. Explore

Look at the current folder to understand its starting state. Read whatever exists; don't assume:

- `AGENTS.md` and `CLAUDE.md` at the folder root — which exists? does it match the [agent-instructions.md](./templates/agent-instructions.md) template? This decides whether Section C runs at all.
- `learner.md` at the folder root. This decides whether Section A runs at all.
- `assets/` — the theme line in `assets/conventions.md`: does it name a theme? That decides whether Section B runs at all. Then the installer-owned files themselves — `theme.css`, `course.js`, `conventions.md` — **read, never counted**: each was copied into this course, so each can have fallen behind what this skill writes today. Present-and-stale is the ordinary case, not an edge one; the write step repairs it.
- Are the upstream skills this suite composes — `teach`, `grilling`, `research` — plus `ask-matt`, which the router points at, installed? (each present as a skill folder alongside this one, or in your available skills.) any missing → print `npx skills@latest add mattpocock/skills` and **stop**.

Found content that is neither this scaffold, the skills-CLI machinery (`.agents/`, agent skill dirs like `.claude/`, `skills-lock.json` — always present when the suite is installed per-project), nor an empty folder — someone's project, stray files? Show the user what's there and **stop** until they rule.

Explore is done when every section's run/skip is decided and the upstream skills are confirmed — or the run has stopped.

### 2. Present findings and ask

Summarise what's present and what's missing. Then take the sections in order — one section, one answer, then the next.

Every section obeys the same rule: lead with the recommended answer so the user can accept it in a word; give a short explainer only when the choice genuinely branches; skip the section entirely when exploration already decided it. The step is done when every section is answered or skipped.

**Section A — Learner profile** — skip when `learner.md` exists.

> Explainer: the "learner profile" is where durable insights about the learner live for this folder. The advisor's mission run seeds it with the deep level-grilling; `teach-unit` curates it at every session exit; `advisor`, `teach-unit`, `mentor`, and `office-hours` read it. Pick whether you want it fresh or copied forward from a previous course folder.

Default posture: fresh. Otherwise ask the user for the previous course folder path.

**Section B — Theme** — skip when the theme *choice* is settled, unless the user came to change the theme. Settled: the `assets/conventions.md` theme line names a theme. A stylesheet that has fallen behind that palette is not an unsettled choice — it is drift, and step 4 repairs it as a gap item like any other.

Default: **catppuccin mocha** — but when a theme is already on disk, recommend the one the `assets/conventions.md` theme line names (the stylesheet installs under one stable name, so the conventions line, not the filename, identifies it). Offer:

- **light**
- **dark**
- **catppuccin**: Latte, Frappé, Macchiato, Mocha

Any dark theme falls back to a light theme for print — Latte when the theme is catppuccin, plain light otherwise.

The theme decides one thing only: the **palette**. Structure is shared, so a theme change swaps ~20 lines of variables and nothing else. Write `assets/theme.css` by concatenating, in this order:

1. the chosen [palette](./themes/palettes/);
2. **dark themes only** — the print fallback: that palette's file wrapped in `@media print { … }`;
3. [base.css](./themes/base.css).

No palette file carries a print block; the wrapping in step 2 is what makes one a fallback, which is why the fallback palette is written once rather than copied into every dark theme. Step 2 is skipped for `light` and `catppuccin-latte` — already light, nothing to swap. Never install a palette on its own: it is variables with nothing to style.

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
| **Installer-owned** — `AGENTS.md` + `CLAUDE.md` pointer, `assets/course.js`, the stylesheet contents, `assets/conventions.md` above `## Additions` | Create if missing; **compare contents, not presence** — regenerate, repair the difference, only after showing the diff |
| **Course-owned, accumulating** — `learner.md`, `transcript.md`, `HANDOFF.md`, `index.html`, everything under `units/` | Scaffold if absent; an existing file is never touched                      |
| **Settle-once** — the theme *choice*: the theme named in the `assets/conventions.md` theme line                    | Keep if settled; change only on explicit user request                     |

The day-zero tree — the gap when the folder is fresh:

| Path                      | Initial state                                                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`               | [agent-instructions.md](./templates/agent-instructions.md)                                                                                                                                            |
| `CLAUDE.md`               | one line: `@AGENTS.md`                                                                                                                                                                                |
| `transcript.md`           | [transcript.md](./templates/transcript.md) — header-only template                                                                                                                                     |
| `learner.md`              | verbatim copy from the previous course, trimmed to the cap — or fresh [learner.md](./templates/learner.md) (cap stated in its header)                                                                                        |
| `HANDOFF.md`              | [HANDOFF.md](./templates/HANDOFF.md) — "no sessions yet" stub                                                                                                                                         |
| `index.html`              | [index.html](./templates/index.html) — themed empty-state hub, `roadmap.html` link pre-placed at the top                                                                                              |
| `assets/`                 | `theme.css` — the chosen [palette](./themes/palettes/) assembled with [base.css](./themes/base.css) by Section B's three-part rule, under that stable name because every learner-facing page links it; [course.js](./templates/course.js) verbatim; [conventions.md](./templates/conventions.md) carrying the theme + print-fallback lines |
| `playground/`, `units/`   | empty                                                                                                                                                                                                 |
| `roadmap.md`, `.roadmap/` | **not created** — `/academic-advisor`'s mission run creates them                                                                                                                                               |

**Repairing drift.** Installer-owned files are *copied* into the course, while the skills they came from keep improving — so a course is stale the moment one of them is fixed, and stays stale until a run repairs it. That makes drift repair permanent work, not a one-off. Regenerate each installer-owned artifact and compare it with what's on disk; presence is never the test:

- `assets/theme.css` — the [palette](./themes/palettes/) for the theme the theme line names, assembled by Section B's three-part rule. Differs → rewrite whole.
- `assets/course.js` — [the template](./templates/course.js), verbatim. Differs or missing → rewrite whole.
- `assets/conventions.md` — the [template](./templates/conventions.md) body with its `{{...}}` placeholders filled from the settled theme. Differs → rewrite everything above `## Additions`. **`## Additions` is never touched**: it holds the teacher's accumulated preferences, and no repair run may eat them.

Each difference is a gap item like any other — shown at confirm, and declinable there.

Done when every artifact shown at confirm matches its approved content on disk, and nothing else on disk has changed.

### 5. Done

Point the user at `/academic-advisor` for the mission run — planning starts there.
