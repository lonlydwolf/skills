# Shared cache directives

## Research Entry 1

- **Date:** 2026-02-03
- **Query Intent:** Ground a lesson on how CDNs and other shared caches treat `Cache-Control` directives.
- **Scope:** `s-maxage` and its relationship to `max-age`. Excludes vendor-specific purge APIs.

### Sources

#### RFC 9111: HTTP Caching (reused)

- **Existing Record:** [RFC 9111: HTTP Caching](http-caching.md#rfc-9111-http-caching), Research Entry 1
- **Coverage:** `s-maxage` response directive
- **Key Evidence:**
  - For a shared cache, the `s-maxage` response directive overrides the freshness lifetime set by `max-age` or `Expires` (Section 5.2.2.10).
- **Limitations:** Vendor behavior outside the standard is not covered.
- **Correction:** Carried forward from [http-caching.md](http-caching.md#rfc-9111-http-caching-reused), Research Entry 2: RFC 9111 was published 2022-06, not 2014-06.

### Conflicts and Uncertainty

Vendor-specific overrides of `s-maxage` remain unresolved and outside this scope.
