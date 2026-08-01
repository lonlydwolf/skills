# deck.html

The template for a vocabulary unit's deck — the term/definition source the
recall page regenerates from, and the central artifact of the vocabulary profile
([profiles/vocabulary.md](profiles/vocabulary.md)).

Shell per [PAGE-KIT.md](PAGE-KIT.md), lesson prefix per its Paths table. Only
this page's own parts are below.

**Both directions, always.** A deck that only runs term→meaning teaches
recognition, which is the floor. Two stacks, same terms, reversed cues — and
they shuffle independently, so the second pass is not the first pass in order.

```html
  <h1>Deck</h1>
  <p class="lede">{{THE_SET — what these terms cover}}. Run it in both
  directions; shuffle before a second pass.</p>

  <!-- no `numbered` on <main>: the two stacks are directions, not steps -->
  <main id="main">

    <h2>Term → meaning</h2>

    <section class="recall">
      <span class="tag">Recall</span>
      <h3>Say what it means</h3>

      <p class="attempt">Answer from memory before opening it.</p>

      <div class="cues" data-shuffle>
        <details>
          <summary>{{TERM}}</summary>
          <p>{{MEANING — in plain words, the way you would say it out loud}}</p>
        </details>
      </div>
    </section>

    <h2>Meaning → term</h2>

    <section class="recall">
      <span class="tag">Recall</span>
      <h3>Name it</h3>

      <p class="attempt">Answer from memory before opening it.</p>

      <div class="cues" data-shuffle>
        <details>
          <summary>{{MEANING — the same meaning, phrased as a question}}</summary>
          <p>{{TERM}}</p>
        </details>
      </div>
    </section>

  </main>
```

The page title is `Unit {{NN}} · Deck — {{UNIT_NAME}}`.

## Refreshing

The deck grows within its unit as terms are taught, and is rewritten rather than
appended to when a term's wording changes — a deck with two phrasings of one
term teaches the phrasing, not the term.

It carries no score, no "known" marking, and no ordering by difficulty. It is a
practice instrument, and the zero-stakes firewall applies to it in full.
