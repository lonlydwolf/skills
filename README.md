# Skills I built because I wished they existed

[![skills.sh](https://skills.sh/b/lonlydwolf/skills)](https://skills.sh/lonlydwolf/skills)

Personal, multi-category agent skills. The purpose is to help me and my
workflow — anyone is welcome to install them and send feedback.

## Installation (30-second setup)

Everything:

```bash
npx skills@latest add lonlydwolf/skills
```

Just one category — for example, faculty:

```bash
npx skills@latest add lonlydwolf/skills/skills/faculty
```

The installer lets you pick the skills you want and which coding agents to
install them on. It writes the skills into your project as ordinary files you
own and can edit. Nothing updates behind your back; pull my latest changes
when you want them with `npx skills update`.

## Categories

| Category | What it is |
| --- | --- |
| [**Faculty**](./skills/faculty/README.md) | A course-agnostic AI teaching suite that plans, teaches, audits, and holds office hours for a course — built on one iron rule: **the AI never writes what the learner couldn't write themselves.** |

More categories may land in time.

### Faculty depends on Matt Pocock's skills

The faculty category — heavily inspired by [Matt Pocock's
skills](https://github.com/mattpocock/skills) — composes with his suite rather
than reinvent it. Install his skills first:

```bash
npx skills@latest add mattpocock/skills
```

Details, the pipeline, and the full dependency table live in
[the Faculty README](./skills/faculty/README.md).

## License

[MIT](./LICENSE)
