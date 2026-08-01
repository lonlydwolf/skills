# Page kit

The markup vocabulary for every learner-facing page. Skill-owned, never copied
into a course — improvements reach courses already on disk.

**Compose, don't invent.** A page is the shell plus fragments from below. If no
fragment fits, the shape is missing from the kit: say so in your role's own
record — the teacher's session record, the advisor's pass log, the mentor's log
— rather than inventing markup, and the kit grows once for every course.

Three standing rules:

- **No inline styles.** The stylesheet carries all presentation. A per-course
  presentation preference is recorded in `assets/conventions.md`, once.
- **Navigation is up only.** Breadcrumb up, back-link down, never to a sibling
  page. Lesson pages are write-once; a "next lesson" link would mean editing a
  page that is already finished.
- **Script is `assets/course.js`.** A page never carries its own presentation
  script. The only script it may add is bespoke script, which is subject matter
  and never presentation — see the end of this file.

## Paths

The shell's paths are written for a lesson at `units/NN-<slug>/lessons/`. Adjust
the prefix to the page's depth, and check the links resolve:

| Page at | Prefix |
| --- | --- |
| course root (`index.html`, `roadmap.html`) | none |
| `units/NN-<slug>/lessons/` | `../../../` |
| outside a course entirely (the mentor's standalone report) | no links at all — both assets are inlined, and no breadcrumb and no back-link, because there is nothing to go up to |

## The shell

Every learner-facing page starts here.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{PAGE_TITLE}}</title>
  <link rel="stylesheet" href="../../../assets/theme.css">
  <script src="../../../assets/course.js" defer></script>
</head>
<body>

  <a class="skip-link" href="#main">Skip to content</a>

  <header class="page-header">
    <p class="breadcrumb">
      <a href="../../../index.html">Course</a> ·
      Unit {{NN}} — {{UNIT_NAME}}
    </p>
    <h1>{{PAGE_H1}}</h1>
    <p class="lede">{{ONE_LINE — what this page is for. Delete if the title says it.}}</p>
  </header>

  <nav class="toc" data-toc></nav>

  <main id="main" class="numbered">

    {{THE PAGE — prose and fragments}}

  </main>

  <footer class="page-footer">
    <p><a href="../../../index.html">← back to the course</a></p>
  </footer>

</body>
</html>
```

`data-toc` fills itself from the page's `<h2>`s, and removes itself when there
are fewer than three. Leave it in; it costs nothing on a short page.

**Two variants of the header.** A page at course root breadcrumbs to the hub in
one hop and has no unit segment:

```html
<p class="breadcrumb"><a href="index.html">Course</a></p>
```

The hub itself — `index.html` — carries **neither breadcrumb nor footer**. It is
the page every breadcrumb and every back-link points *at*, and navigation is up
only: there is no up from the top. Its headings are furniture rather than steps,
so it also drops `numbered` and needs no contents nav. Two shells are deliberately
shorter than the full one, and these are the only two: the hub, and the mentor's
standalone report, which drops the same pair for the same reason — nothing to go
up to.

**Sections number themselves.** `class="numbered"` numbers the page's `<h2>`s
from the stylesheet, matching the contents list. Never write the number into the
heading. The same is true of exercises — see below. Drop the class on pages
whose sections are furniture rather than steps: a hub's "Units" heading is not
section 1 of anything — and dropping it unnumbers the contents list with them,
so the two can never disagree.

**The attempt line.** Every fragment where the learner works before revealing
carries `<p class="attempt">`, not `<p class="muted">`. It is the line that
separates *what you are asked to do* from *the reveal*, and it is set apart so
a card does not read as one undifferentiated block of prose.

## Fragments

### Exercise — production

The learner writes, traces, or fixes something. The strongest retrieval, and
the default shape unless the unit's profile says otherwise.

```html
<section class="exercise">
  <span class="tag">{{Write | Trace | Fix}}</span>
  <h3>{{EXERCISE_TITLE}}</h3>

  <p>{{THE_TASK — what to write, what to trace by hand, or what broken thing to fix. Concrete and self-contained; state where to work (playground/, paper, a scratch file).}}</p>

  <pre data-lang="go"><code>{{STARTER_MATERIAL — delete this block if the task starts from nothing}}</code></pre>

  <p class="attempt">Do the work before opening the solution — the attempt is the exercise.</p>

  <details>
    <summary>Solution</summary>
    <pre data-lang="go"><code>{{SOLUTION}}</code></pre>
    <p>{{WHY — the one or two ideas the solution turns on, and the misstep it most often meets}}</p>
  </details>
</section>
```

Exercises number themselves — `Exercise 1 ·` is prepended by the stylesheet.
Never write the number into the heading.

### Exercise — self-explanation

The learner explains a concept, a step, or a why in their own words, then
compares. The shape for conceptual material.

```html
<section class="exercise">
  <span class="tag">Explain</span>
  <h3>{{EXERCISE_TITLE}}</h3>

  <p>{{THE_PROMPT — ask for the why, not the definition: "explain why X must happen before Y", "explain this to someone who knows Z but not X".}}</p>

  <blockquote>{{OPTIONAL_MATERIAL — the passage or worked step being explained; delete if the prompt stands alone}}</blockquote>

  <p class="attempt">Say it out loud or write it down — in your own words, before comparing.</p>

  <details>
    <summary>Model explanation</summary>
    <p>{{MODEL_EXPLANATION — the explanation a strong answer contains, in plain words}}</p>
    <p><strong>What a strong answer must contain:</strong> {{CHECK — the one thing that shows the idea is really held, and the common near-miss}}</p>
  </details>
</section>
```

### Retrieval — cued recall

A cue, the learner produces the answer from memory, then reveals. The shape for
vocabulary and paired facts. Still production — never multiple choice, which is
the weakest retrieval.

Uses `.recall`, not `.exercise`: a stack to run through reads lighter than a
task to do now, and it stays out of the exercise numbering.

```html
<section class="recall">
  <span class="tag">Recall</span>
  <h3>{{SECTION_TITLE}}</h3>

  <p class="attempt">Answer each cue from memory before opening it.</p>

  <div class="cues" data-shuffle>
    <details>
      <summary>{{CUE — a definition asking for its term, a term asking for its meaning, one half of a pair}}</summary>
      <p>{{ANSWER}}</p>
    </details>
    <details>
      <summary>{{CUE}}</summary>
      <p>{{ANSWER}}</p>
    </details>
  </div>
</section>
```

`data-shuffle` adds a Shuffle button below the stack. Without script the cards
simply keep their authored order.

### Outcome heading

For material where several states look alike and the difference is the lesson —
build failure vs. true red vs. green. **The word carries the meaning; the colour
only agrees with it.** Never a bare coloured heading.

```html
<h3><span class="label err">Build failed</span> nothing ran</h3>
<h3><span class="label warn">Cached</span> the tests did not run</h3>
<h3><span class="label ok">Green</span> everything passed</h3>
```

### Pull quote

The one idea a section turns on. Sparingly — a page with three is a page with
none.

```html
<blockquote>{{THE_IDEA — one or two sentences, load-bearing}}</blockquote>
```

### Callout

True, useful, and off the main line of the argument. Reads as an aside, not as
emphasis.

```html
<aside class="callout">
  <p>{{THE_ASIDE}}</p>
</aside>
```

### Code

Always label the language or the source — a terminal transcript and a source
file read alike without it.

```html
<pre data-lang="go"><code>{{CODE}}</code></pre>
<pre data-lang="console"><code>{{TERMINAL_OUTPUT}}</code></pre>
```

### Table

Wrap it, so a wide table scrolls instead of breaking the page. A caption says
what the table is *for*; it renders below, so it reads as the closing note.

```html
<div class="table-wrap">
  <table>
    <caption>{{WHAT_THIS_TABLE_SHOWS — delete if the heading above says it}}</caption>
    <thead>
      <tr><th>{{COLUMN}}</th><th>{{COLUMN}}</th></tr>
    </thead>
    <tbody>
      <tr><td>{{CELL}}</td><td>{{CELL}}</td></tr>
    </tbody>
  </table>
</div>
```

### Card

A block that is one thing and needs an edge around it — a unit on the roadmap, a
grouped note on the hub. `roadmap.html`'s primary container. Never for exercises
or recall: those have their own shapes, and a card is the *generic* one.

```html
<div class="card">
  <h3>{{TITLE}}</h3>
  <p>{{THE_CONTENT}}</p>
</div>
```

### Tag

Where something sits — **never how well it went**. The vocabulary is closed, and
it is load-bearing: `index.html` and `roadmap.html` both carry a `now` tag.
`index.html`'s moves at the teacher's exit duty 5; `roadmap.html`'s is redrawn
with the whole page at the advisor's stamp — never hand-moved.

| Tag | Means |
| --- | --- |
| `now` | the current unit |
| `next` | a frontier line |
| `Write` · `Trace` · `Fix` · `Explain` · `Recall` | the kind of exercise, in the fragments above |

Never a status, a grade, a completion tick, a percentage, or a count. A unit
with no tag is simply an earlier unit — being earlier is not a status and needs
no word.

```html
<h3><span class="tag">now</span> Unit {{NN}} — {{UNIT_NAME}}</h3>
```

### Muted note

A secondary line about the thing beside it: a one-line gloss after a link, the
"why this now" under a heading, an honest statement of vagueness. Not the
attempt line — that is `.attempt`, and it is set apart on purpose.

```html
<p class="muted">{{THE_ASIDE}}</p>
<a href="{{PATH}}">{{TITLE}}</a> <span class="muted">· {{ONE_LINE}}</span>
```

### Sub-heading

`<h4>` divides a long section. Rare — reaching for a fourth level is usually the
sign the page should be two pages. It does not enter the contents list, which is
built from `<h2>`s alone.

```html
<h4>{{SUB_HEADING}}</h4>
```

### Screen-only

`.no-print` on anything that makes no sense on paper — a control, a live
demonstration's chrome. The printed page loses it and keeps everything else.

```html
<p class="no-print">{{THE_ON_SCREEN_ONLY_THING}}</p>
```

## Bespoke script

A lesson may carry its own inline `<script>` — the only script a page ever
carries beyond `course.js`.

The bar is **subject matter**: something the learner should manipulate to see a
behaviour — a demonstration they poke, a visualisation of the mechanism under
discussion. Never presentation. A nicer contents list, a smoother reveal, a copy
button: those are gaps in `course.js`, and fixing them there gives every course
the improvement — at its next `/setup-faculty-skills` run, since `course.js` is
copied into a course — instead of one page forever.

- **Inline in the page**, never a sibling `.js` file — it cannot then be reached
  from another unit, and the lesson stays one movable file.
- **No persistence, no network, and never on `recall.html`.**
- **Declared in the session record with its reason.** The auditor reads that
  line and asks whether it was subject matter or presentation in disguise.
