---
name: setup-faculty-skills
description: Configure a folder for the faculty skills — scaffold the workspace, settle the theme, generate the shared assets. A full course, or the mentor standalone.
disable-model-invocation: true
---

# Setup Faculty Skills

Scaffold the per-folder configuration the faculty skills assume. Two modes:

- **Full course** — the day-zero course tree, the learner profile, the shared assets
- **Mentor standalone** — `/mentor` inside someone's real repo: `.mentor/` and its assets, no course tree

Every per-folder fact lives in a file this installer scaffolds — the learner in `learner.md`, the user's presentation preferences in `look.md`, the theme in `.assets/palette.css`'s own header, the workspace rules in the agent-instructions file. The faculty skills reference those files; they never hard-code the facts.

Run this once per folder, before the first `/academic-advisor` mission or the first `/mentor` review. Every later run **converges** the folder on the tree in step 4 — read what exists, compute the gap, write only the gap.

## Process

### 1. Explore

Look at the folder as it is. Read whatever exists; don't assume.

**The mode comes first**, because everything below depends on it. An empty folder, or one already holding a course scaffold → full course. A folder holding someone's real project — source files, a package manifest, its own agent instructions → **ask** which: a course here, or the mentor standalone? Never infer it; a project folder is a legitimate place for a course.

**Full course** — read, and let each answer decide whether its section runs:

- `AGENTS.md` and `CLAUDE.md` at the root — does the file match the [agent-instructions.md](./templates/agent-instructions.md) template? It has a template, so a stale copy looks exactly like a current one until you diff it. → the agent-instructions section
- `learner.md` and `look.md` at the root → their sections
- `.assets/palette.css`, `.assets/base.css`, `.assets/course.js` — **presence is the whole test**. `palette.css`'s header names the theme. → the theme section
- anything else in `.assets/` — an orphan; see step 4
- are `grilling` and `research` installed? (each present as a skill folder alongside this one, or in your available skills) A missing one is a gap item, not a stop.

**Mentor standalone** — the same read against a smaller tree: `.mentor/look.md`; `.mentor/assets/palette.css`'s header; whether `.mentor/assets/base.css` and `course.js` are present; whether the repo's `.gitignore` already carries `.mentor/` and `mentor-review-*.html`; and whether `grilling` is installed.

Standalone reads no `learner.md` and has **no orphan rule** — `.mentor/assets/` is owned per file rather than per folder, because the mentor adds to it too.

Explore is done when the mode is settled, every section's run/skip is decided, the upstream skills have been checked, and any orphan in `.assets/` is inventoried.

### 2. Present findings and ask

Summarise what's present and what's missing. Then take the sections in order — one section, one answer, then the next.

Every section obeys the same rule: lead with the recommended answer so the user can accept it in a word, and give a short explainer only where the choice genuinely branches. The step is done when every section is answered or skipped.

**Learner profile** — full course only; skip when `learner.md` exists.

> Explainer: the learner profile is where durable insights about the learner live for this folder. The advisor's mission run seeds it with the deep level-grilling; `teach-unit` curates it at every session exit; the advisor, `teach-unit`, `mentor` and `office-hours` read it. Fresh, or copied forward from a previous course folder?

Default posture: fresh. Otherwise ask for the previous course folder's path.

**Look** — both modes; skip when the file exists (`look.md`, or `.mentor/look.md` standalone). A separate question from the learner profile, deliberately: who someone is as a learner and how they want their pages to look are different things, so carrying one does not imply the other.

> Explainer: `look.md` records your own corrections about how pages should look, in your words, so a later session doesn't have to be told twice. Fresh, or copied forward?

Default posture: fresh. **Ask nothing else here.** Never ask what the pages should look like: taste about a page that does not exist yet is guesswork, and a day-zero guess would then bind every page. Fresh means the two-heading template with nothing under them, and an empty `look.md` is the normal state of a first course.

**Theme** — both modes; skip when the theme choice is settled, unless the user came to change it. Settled: `palette.css` exists and its header names a theme.

Recommend **catppuccin mocha** — or, where a palette is already on disk, the theme its header names. Offer six, and accept anything:

- **light**, **dark**
- **catppuccin**: Latte, Frappé, Macchiato, Mocha
- or any palette they name — Nord, Gruvbox, Solarized, a brand's colours, a description in words

The theme decides one thing: the **palette**. Structure is shared, so changing it later rewrites one small file and no page.

A dark theme prints as a light one, and that is **derived, not asked** — state it in a line at confirm and move on: *"it's dark, so pages print as a light Nord — same hues, light ground."* Catppuccin prints Latte; a light theme has nothing to swap.

**Agent instructions file** — full course only; runs only where exploration found ambiguity. Otherwise this rule resolves it silently:

- neither `AGENTS.md` nor `CLAUDE.md` exists → plan the default: `AGENTS.md` as the real file, `CLAUDE.md` holding `@AGENTS.md`, so both agents read one source
- the default pair already in place, or exactly one file matching the template → use what's there
- both exist and diverge from each other, or the existing file diverges from the template → show the diff and ask which content wins

Content is all these bullets decide. The **file set** is still the tree's, so a missing `CLAUDE.md` pointer is a gap like any other even where the `AGENTS.md` beside it matches the template.

Standalone writes neither: that repo has its own, and proposing to rewrite someone's project instructions is not this skill's business.

### 3. Confirm and edit

Show a draft of what will be written — the gap, never the whole tree. Gap empty → report the scaffold healthy and stop. On day zero the gap is everything: the tree summary, plus the agent-instructions draft in full, since it is the file they'll live with. On a repair run it may be one file.

Three gap items are worth naming, and each is **declinable** here like any other:

- **the upstream install** — `npx skills@latest add mattpocock/skills -s grilling,research -y` in a course, `-s grilling` standalone. It fetches code from the network onto the user's machine, so it is confirmed, never assumed.
- **the `.gitignore` lines** (standalone) — `.mentor/` and `mentor-review-*.html`. Default to ignoring both: `.mentor/log.md` is a dated struggle log, the one artifact in the suite that must never become a record someone else reads.
- **orphan deletions** — see step 4.

Write only on their explicit go-ahead. **One exception, and only one**: the palette is judged after it is written rather than before. It is a colour scheme — there is nothing to approve until it is on screen — and a re-theme costs one small file.

Step 3 is done when the user has seen every gap item, the three above included, and has taken or declined each.

### 4. Write

Write the gap, artifact by artifact. Each obeys its ownership rule:

| Artifact                                                                                                          | Rule                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Templated** — `AGENTS.md` + the `CLAUDE.md` pointer                                                             | Regenerate, diff, **rewrite where it differs**, so a rule fixed in this skill reaches a folder already on disk. Where step 2 asked whose content wins, that answer decides |
| **Generated** — `.assets/palette.css`, `.assets/base.css`, `.assets/course.js`                                    | **Create if missing, never rewritten.** No template to diff against, and regenerating one produces a different file |
| **Course-owned** — `learner.md`, `look.md`, `transcript.md`, `HANDOFF.md`, `index.html`, everything under `units/` | Scaffold if absent; an existing file is never touched                                                       |
| **Orphaned** — anything in `.assets/` the tree below does not name                                                | Offer for deletion at confirm; keep it if anything in the course links it                                    |
| **Re-theme**, on explicit request                                                                                 | Rewrite `.assets/palette.css` alone                                                                          |

The link check searches the **whole course**, not just the pages: a font or an image is linked from `base.css`. Say at confirm why a linked orphan was kept. Outside `.assets/` this skill never deletes anything.

Where things live: `.assets/` at the course root, `units/NN-<slug>/.assets/` per unit. The advisor's own are in `.roadmap/assets/`, the mentor's in `.mentor/assets/`.

The day-zero course tree — the gap when the folder is fresh:

| Path                      | Initial state                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`               | [agent-instructions.md](./templates/agent-instructions.md)                                               |
| `CLAUDE.md`               | one line: `@AGENTS.md`                                                                                   |
| `transcript.md`           | [transcript.md](./templates/transcript.md) — header-only template                                        |
| `learner.md`              | verbatim copy from the previous course, trimmed to the cap — or fresh [learner.md](./templates/learner.md) (cap stated in its header) |
| `look.md`                 | verbatim copy from the previous course — or fresh [look.md](./templates/look.md). **Never trimmed**: it holds the user's own words, and the cap in its header is the appender's discipline, not the installer's |
| `HANDOFF.md`              | [HANDOFF.md](./templates/HANDOFF.md) — "no sessions yet" stub                                             |
| `index.html`              | generated against [HUB-PAGE.md](./HUB-PAGE.md)                                                           |
| `.assets/`                | `palette.css`, `base.css`, `course.js` — generated against **The assets** below                           |
| `playground/`, `units/`   | empty                                                                                                    |
| `roadmap.md`, `.roadmap/` | **not created** — `/academic-advisor`'s mission run creates them                                          |

The standalone tree, written into a repo that is already someone else's: `.mentor/look.md` carried or fresh; `.mentor/assets/` holding the same three generated files against the same three contracts; and two lines appended to the repo's `.gitignore`. Nothing else.

#### The assets

Three files, generated in one act so the stylesheet and the script agree on their hooks by construction. They name no classes and no variables: this says what the files must do, and the model writes them.

Where `look.md` was carried forward from a previous course, **copy it into place and read it before generating any of the three**. It can speak to the measure or the type, both of which live in `base.css` — and `base.css` is never rewritten, so a preference missed here is dead for the life of the course.

**`palette.css`** — colour only. Define every custom property `base.css` uses; on a re-theme, **read the `base.css` already on disk first and define exactly the properties it names**, since it was written by an earlier session and is never rewritten. Its header comment records the theme's name and its print partner. Text clears **4.5:1** against every background it sits on; borders and other non-text colour are judged by eye, with no ratio asserted. A dark palette carries a light print partner in the same hues, in an `@media print` block, held to the same floor. **A published palette does not clear that floor as shipped** — Catppuccin's and its peers were measured here, and their muted and accent values sit between 2.3 and 4.4 against their own backgrounds — so tune them until they do, keeping the hue.

**`base.css`** — structure only, and it is what every later author reads to learn this course's vocabulary. Content sits at a comfortable reading measure. Numbered sections leave room for their numbers. States are told apart by more than colour. The page is correct with JavaScript off, prints legibly, shows a visible focus ring, and honours reduced motion.

**`course.js`** — four behaviours and no fifth: heading anchors, a contents list built from the page's headings, marking which section the reader is inside, and shuffling a stack of cards. It touches **no store of any kind** — no `localStorage`, no cookies, no session storage — and it **counts, times and scores nothing**. That is the zero-stakes firewall written into the front end, and the file says so in its own header so it can be checked by reading. A heading containing code must not truncate in the contents list. No network, and classic script only: pages open over `file://`.

#### Verify before reporting done

Check **what this run wrote**, and nothing else: each generated file against its contract above, and the hub against two things its contract does not cover — that it links both stylesheets and the script, and that it meets the accessibility floor, meaning a `lang` attribute, a `<main>` landmark and a skip link. A failed check is fixed and re-checked before the file is reported done; this is the only moment it can be caught against its contract, because every later reader treats these files as given.

**An asset already on disk when the run started is neither checked nor touched**, whatever it contains. Create-if-missing means this run has no authority over it, and an agent that "fixes" a months-old `base.css` has changed a finished course under itself.

#### Show the palette

Show the user the hub and let them judge the colours: accept, or name another theme and `.assets/palette.css` alone is rewritten. A day-zero hub exercises the background, the text, the headings, the links and the muted tone; the card, exercise and reveal colours are first seen on the first real lesson page, where a re-theme still costs one file.

Step 4 is done when every gap item confirmed in step 3 has been carried out — written, installed, or deleted, as that item was — every check above has passed, the palette has been shown and accepted, and nothing outside that gap has changed.

### 5. Done

Full course → point the user at `/academic-advisor` for the mission run; planning starts there. Standalone → point them at `/mentor`.
