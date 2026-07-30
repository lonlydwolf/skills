<!--
  conventions.md — presentation conventions for everything the learner reads.
  Cap: ~2K tokens. Teacher-owned, slow-growing: a style correction from the user
  is recorded here once, then never re-litigated. The installer fills the
  {{...}} placeholders at scaffold time ({{PRINT_THEME}}: "Catppuccin Latte"
  when the theme is catppuccin, "plain light" otherwise); the theme lines
  change only via /setup-faculty-skills.
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
- Exercises are instantiated from the `assets/` exercise templates — one per
  question shape (production / self-explanation / cued-recall) — never invented
  freehand.
- Answers and model explanations sit in `<details>` reveal blocks: the learner
  attempts first, then opens.

## Additions

<!-- teachers append presentation rules here as the user's preferences surface -->
