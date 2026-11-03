# HTTP caching

## Research Entry 1

- **Date:** 2026-01-12
- **Query Intent:** Authoritative definition of HTTP response freshness for a web performance course.
- **Scope:** How a cache decides a stored response is fresh. Excludes browser-specific heuristics.

### Sources

#### RFC 9111: HTTP Caching

- **Creator / Publisher:** R. Fielding, M. Nottingham, J. Reschke (eds.); IETF
- **Published / Updated:** 2014-06
- **Type:** Standard
- **Curriculum Role:** Primary
- **Coverage:** Freshness lifetime calculation
- **Canonical URL:** https://www.rfc-editor.org/rfc/rfc9111
- **Local Path:** None
- **Selection Rationale:** The current IETF standard for HTTP caching.
- **Key Evidence:**
  - A shared cache uses `s-maxage`, then `max-age`, then `Expires` to calculate freshness lifetime (Section 4.2.1).
- **Limitations:** None

### Conflicts and Uncertainty

None.

## Research Entry 2

- **Date:** 2026-01-19
- **Query Intent:** Correct the publication date recorded in Research Entry 1 and confirm the `max-age` directive definition.
- **Scope:** RFC 9111 metadata and the `max-age` response directive.

### Sources

#### RFC 9111: HTTP Caching (reused)

- **Existing Record:** [RFC 9111: HTTP Caching](#rfc-9111-http-caching), Research Entry 1
- **Coverage:** `max-age` response directive
- **Key Evidence:**
  - The `max-age` response directive states the number of seconds after generation for which the response is fresh (Section 5.2.2.1).
- **Limitations:** None
- **Correction:** Published / Updated was recorded as 2014-06, the date of RFC 7234, which RFC 9111 obsoletes. RFC 9111 was published 2022-06.

### Conflicts and Uncertainty

None.
