<!--
  conventions.md — presentation conventions for everything the learner reads.
  Cap: ~2K tokens.

  Two owners, split at ## Additions.

  Above it is the installer's: it fills the {{...}} placeholders at scaffold
  time ({{PRINT_THEME}}: "Catppuccin Latte" when the theme is catppuccin,
  "plain light" otherwise), and repairs the body against its template on every
  later run — so a rule improved in the skill reaches this course. The theme
  lines change only via /setup-faculty-skills.

  ## Additions is the teacher's, slow-growing: a style correction from the user
  is recorded there once, then never re-litigated, and no repair run touches it.
-->

# Conventions

Anything the learner reads is HTML — markdown is machine-facing. One named
exception: `work/` — homework correspondence (briefs, submissions, feedback)
is working files passed between teacher and learner, not course pages.

## Theme

- Theme: **{{THEME_NAME}}**. Settled at setup; never re-asked in a session.
- Every learner-facing page links the course stylesheet at `assets/theme.css`
  (from a unit's `lessons/`, that is `../../../assets/theme.css`).
- Print: falls back to **{{PRINT_THEME}}** via the stylesheet's baked-in
  `@media print` overrides — no second stylesheet.

## Pages

- Semantic HTML, no inline styles; the stylesheet carries all presentation.
- Pages are composed from the **page kit** — the shell plus its fragments —
  never invented freehand. The kit lives with the skills, not in this folder,
  so improvements arrive without re-scaffolding.
- Answers and model explanations sit in `<details>` reveal blocks: the learner
  attempts first, then opens.
- Navigation is **up only**: breadcrumb up, back-link down, never a link to a
  sibling lesson. `index.html` is the course's one index.

## Script

- Every learner-facing page links `assets/course.js`, and that is the whole of
  a page's presentation script. It does four things — heading anchors, the
  contents list, marking which section is on screen, shuffling a stack of
  cards.
- **No persistence and no attempt-tracking, anywhere.** Nothing a learner does
  on a page is stored, counted, timed, or scored. This is the zero-stakes
  firewall in the front end, and it holds on every page, not only the recall
  page.
- A lesson may carry **bespoke script** inline when the subject matter is
  something the learner should manipulate to see a behaviour. Never for
  presentation — presentation wanting script is a gap in `course.js`. It is
  declared with its reason in the session record.

## Additions

<!-- teachers append presentation rules here as the user's preferences surface -->
