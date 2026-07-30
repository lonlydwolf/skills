<!--
  conventions.md — presentation conventions for everything the learner reads.
  Cap: ~2K tokens. Teacher-owned, slow-growing: a style correction from the user
  is recorded here once, then never re-litigated. The installer fills the
  {{...}} placeholders at scaffold time; the theme lines change only via
  /setup-faculty-skills.
-->

# Conventions

Anything the learner reads is HTML — markdown is machine-facing.

## Theme

- Theme: **{{THEME_NAME}}**. Settled at setup; never re-asked in a session.
- Every learner-facing page links the course stylesheet at `assets/theme.css`
  (from a unit's `lessons/`, that is `../../../assets/theme.css`).
- Print: {{PRINT_FALLBACK_LINE}}

## Pages

- Semantic HTML, no inline styles; the stylesheet carries all presentation.
- Exercises are instantiated from the `assets/` exercise templates — one per
  question shape (production / self-explanation / cued-recall) — never invented
  freehand.
- Answers and model explanations sit in `<details>` reveal blocks: the learner
  attempts first, then opens.

## Additions

<!-- teachers append presentation rules here as the user's preferences surface -->
