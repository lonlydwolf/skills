# Librarian source reuse example

This synthetic example shows how [SOURCE-FORMAT.md](../../../librarian/SOURCE-FORMAT.md) records a source that earlier research already found. It is not course research to rely on, and it contains no learner or course history.

The files represent a course-root `resources/` directory after three research runs:

1. [http-caching.md](resources/http-caching.md), Research Entry 1, records RFC 9111 in full. It contains a deliberate error: the 2014 date of RFC 7234, which RFC 9111 replaced.
2. [http-caching.md](resources/http-caching.md), Research Entry 2, reuses that record from the same file with `#rfc-9111-http-caching` and corrects the date. Entry 1 is unchanged.
3. [shared-cache-directives.md](resources/shared-cache-directives.md), Research Entry 1, reuses the same record from another topic file with `http-caching.md#rfc-9111-http-caching` and carries the correction forward.

## Check the example

Each Existing Record link should open `http-caching.md` at the `#### RFC 9111: HTTP Caching` heading in Research Entry 1. That full record keeps the creator, canonical URL and local path, so both reuses keep the original attribution without copying it. The reused headings end in `(reused)`, which gives them different anchors from the full record.

Opening the links in GitHub's file view checks the anchors with GitHub's heading rules. Other Markdown viewers can generate anchors differently; the topic file, heading text and Research Entry named beside each link still identify the record.
