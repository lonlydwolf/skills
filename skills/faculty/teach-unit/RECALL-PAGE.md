# recall.html

The template for a unit's cumulative recall page — `units/NN-<slug>/lessons/recall.html`,
one per unit, written at the unit-completion session. When it is produced, what
it covers, and how a re-completion refreshes it are in [SKILL.md](SKILL.md#the-recall-page);
this file says what the markup is.

Shell per [PAGE-KIT.md](PAGE-KIT.md), lesson prefix per its Paths table. Only
this page's own parts are below.

**One `<h2>` per outcome**, in `unit.md`'s order, each holding one or more
`.recall` stacks. Outcomes are the page's spine because the page's promise is
*everything this unit made true* — a learner who works it through has retrieved
against every outcome, and a missing `<h2>` is a visible hole rather than a
silent one.

**Item shapes come from the unit's profile**, production-first
([profiles/](profiles/)). The cued-recall stack below is the floor, not the
whole vocabulary: a production or self-explanation exercise from the kit is the
stronger item wherever the material supports one.

```html
  <h1>Recall</h1>
  <p class="lede">Everything Unit {{NN}} made true, in one pass. Nothing here is
  scored, seen, or kept — it is yours to run as often as you like.</p>

  <!-- no `numbered` on <main>: these sections are outcome areas to run
       through, not ordered steps. Keep `data-toc` — a cumulative page is long,
       and the list removes itself under three headings anyway. The shell
       already carries the nav; never author a second one. -->

  <main id="main">

    <h2>{{OUTCOME — the unit.md outcome, in the learner's own terms}}</h2>

    <section class="recall">
      <span class="tag">Recall</span>
      <h3>{{WHAT_THIS_STACK_RETRIEVES}}</h3>

      <p class="attempt">Answer each cue from memory before opening it.</p>

      <div class="cues" data-shuffle>
        <details>
          <summary>{{CUE}}</summary>
          <p>{{ANSWER}}</p>
        </details>
      </div>
    </section>

  </main>
```

The page title is `Unit {{NN}} · Recall — {{UNIT_NAME}}`.

## The firewall, on this page above all

This is the learner's private instrument. No role reads it except its writer,
and it carries **no score, no count, no timer, no "known" marking, no ordering
by difficulty, and no bespoke script of any kind** — the one page where the
carve-out in [PAGE-KIT.md](PAGE-KIT.md) is closed outright.

The lede says so in the learner's own hearing. That sentence is not decoration:
a page that asks for retrieval and looks like a test gets worked like a test,
and a learner protecting a score does not retrieve honestly.
