/* course.js — the whole script vocabulary of a course.
 *
 * Installed as assets/course.js by /setup-faculty-skills and linked by every
 * learner-facing page. Four behaviours, and this is all of them:
 *
 *   1. heading anchors  — stable ids and a copyable link per section
 *   2. contents         — a list built from the page's <h2>s
 *   3. current section  — which contents entry the reader is inside
 *   4. shuffle          — reorder a stack of cued cards
 *
 * Two rules bind this file, and both are meant to be checkable by reading it:
 *
 *   NO PERSISTENCE. No localStorage, sessionStorage, cookies, IndexedDB, or
 *   any other store. This is the zero-stakes firewall's front-end guarantee:
 *   nothing the learner does on a page is ever recorded.
 *
 *   NO MEASUREMENT. No attempt tracking, scores, streaks, timers, progress or
 *   completion state — on any page, not only the recall page.
 *
 * Also: no network, and classic script only. Pages open over file://, where
 * modules and fetch do not work. Every behaviour is an enhancement — with
 * script off, a page loses convenience and no content.
 *
 * A lesson may carry its own inline bespoke script when the subject matter is
 * something the learner should manipulate. That is a declared, audited
 * carve-out, and it never lands here: presentation wanting script is a gap in
 * this file, and gets fixed here. This file is copied into a course, so the fix
 * reaches an existing one at its next /setup-faculty-skills run — which is what
 * that run's drift repair is for.
 */

(function () {
  'use strict';

  /* ── Heading anchors ───────────────────────────────────────────────────
   * The teacher never hand-writes ids, so they cannot be forgotten or
   * collide. An authored id always wins.
   */

  function slug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 60);
  }

  function addAnchors(main) {
    var used = Object.create(null);
    var headings = main.querySelectorAll('h2, h3');

    Array.prototype.forEach.call(headings, function (heading) {
      if (heading.closest('.toc')) return;

      if (!heading.id) {
        var base = slug(heading.textContent) || 'section';
        var id = base;
        var n = 2;
        while (used[id] || document.getElementById(id)) {
          id = base + '-' + n++;
        }
        heading.id = id;
      }
      used[heading.id] = true;

      var link = document.createElement('a');
      link.className = 'heading-anchor';
      link.href = '#' + heading.id;
      link.textContent = '#';
      link.setAttribute('aria-label', 'Link to this section');
      heading.appendChild(link);
    });
  }

  /* ── Contents ──────────────────────────────────────────────────────────
   * Fills a <nav class="toc" data-toc> the page authored. A page with one
   * section does not need one, so the empty container is removed rather than
   * left as a stub.
   */

  function buildToc(main) {
    var nav = document.querySelector('[data-toc]');
    if (!nav) return;

    var headings = Array.prototype.filter.call(
      main.querySelectorAll('h2'),
      function (h) { return !h.closest('.toc'); }
    );

    if (headings.length < 3) {
      nav.remove();
      return;
    }

    var title = document.createElement('h2');
    title.textContent = nav.getAttribute('data-toc') || 'On this page';

    var list = document.createElement('ol');
    headings.forEach(function (heading) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      /* The whole heading, minus the anchor link this script appended to it.
       * Taking only the first child would truncate every heading containing
       * <code>, <em> or <strong> — and a lesson page is never edited again. */
      var label = heading.cloneNode(true);
      var anchor = label.querySelector('.heading-anchor');
      if (anchor) anchor.parentNode.removeChild(anchor);
      link.textContent = label.textContent.trim();
      item.appendChild(link);
      list.appendChild(item);
    });

    nav.appendChild(title);
    nav.appendChild(list);

    markCurrent(nav, headings);
  }

  /* Marks which section is on screen. This observes the page, never the
   * learner: nothing is counted, compared, or kept after the tab closes.
   */
  function markCurrent(nav, headings) {
    if (!('IntersectionObserver' in window)) return;

    var links = {};
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });

    var onScreen = Object.create(null);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        onScreen[entry.target.id] = entry.isIntersecting;
      });

      var current = null;
      headings.forEach(function (heading) {
        if (onScreen[heading.id] && !current) current = heading.id;
      });

      /* Nothing on screen means we are reading past the last heading — keep
       * the last one that was current rather than clearing the marker. */
      if (!current) return;

      Object.keys(links).forEach(function (id) {
        links[id].classList.toggle('current', id === current);
      });
    }, { rootMargin: '-10% 0px -70% 0px' });

    headings.forEach(function (heading) { observer.observe(heading); });
  }

  /* ── Shuffle ───────────────────────────────────────────────────────────
   * Reordering observes nothing — it is the cued-recall instruction "mix the
   * order on a second pass", done for the learner. The button is injected
   * rather than authored, so a page without script has no dead control.
   */

  function shuffleInPlace(items) {
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = items[i];
      items[i] = items[j];
      items[j] = swap;
    }
    return items;
  }

  function addShuffle(stack) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'shuffle';
    button.textContent = 'Shuffle';

    button.addEventListener('click', function () {
      var cards = Array.prototype.slice.call(stack.children);
      shuffleInPlace(cards).forEach(function (card) {
        if (card.tagName === 'DETAILS') card.open = false;
        stack.appendChild(card);
      });
    });

    stack.parentNode.insertBefore(button, stack.nextSibling);
  }

  /* ── Start ─────────────────────────────────────────────────────────────*/

  function start() {
    var main = document.querySelector('main') || document.body;

    addAnchors(main);
    buildToc(main);

    Array.prototype.forEach.call(
      document.querySelectorAll('[data-shuffle]'),
      addShuffle
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
