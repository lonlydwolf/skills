# Skill catalog

[marketplace.json](marketplace.json) lists the collections in this repository and their skill paths. The skills CLI reads this location and uses each entry's `name` to group the skill selector. The `faculty` entry supplies the “Faculty” group.

## Add or update a collection

1. Keep its maintained skills under `skills/<collection>/`, with a SKILL.md in each skill directory.
2. Add an entry with a unique `name` and a `source` path relative to the repository root.
3. List each skill under `skills`, using paths relative to that entry's `source`. Start both source and skill paths with `./`.
4. Update the root collection table and the collection's README.

For example, Faculty's source is `./skills/faculty`, and `./teacher` points to `skills/faculty/teacher`. Its `category` and `tags` describe the collection. The installer group's label comes from `name`.

Keep collection overviews in READMEs. A parent SKILL.md can hide the individual skills nested beneath it during discovery.

See the installer's [manifest discovery](https://github.com/vercel-labs/skills#plugin-manifest-discovery) and [grouping implementation](https://github.com/vercel-labs/skills/blob/main/src/plugin-manifest.ts), or [Faculty maintenance](../skills/faculty/docs/MAINTENANCE.md) for changes to the skill instructions themselves.
