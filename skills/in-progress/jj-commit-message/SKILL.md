---
name: jj-commit-message
description: Write the description for one jj change from its diff, in the repository's convention, and say when the change should be split.
disable-model-invocation: true
---

Write the description for one jj change so that someone reading the history later can tell what it changed and why.

## What to work from

- **The diff.** If the request comes with a diff, pasted or on standard input, work from that alone: you may have no tools. Otherwise read it with `jj diff -r <revision> --git`. The revision is `@` unless the user names another. Write from the diff, not from your memory of the session.
- **The convention.** Follow the recent titles in the repository: the type and scope format, the tense and the length. If they were not supplied, read them with `jj log`.
- **The reason.** Look for it in the request, in what the user said, and in the description the change already has, which may hold the author's notes. If you cannot find it and the diff does not show it, leave the body out. Never invent a reason.

## Title

- Follow the repository's convention. If it has none, use `type(scope): summary`.
- Say what changes for someone who uses or reads the code, not which lines moved.
- Imperative mood, no trailing period, about 72 characters or fewer.

Weak: `fix: update inspect.go and tests`
Better: `fix(inspect): reject URLs whose scheme is not exactly https`

## Body

Leave the body out when the title and the diff already say everything. Otherwise write, in a few short sentences or bullets:

- why the change was needed;
- anything a reader would not expect: a trade-off, something deliberately left undone, an effect on people who already use the code.

Do not list files, restate the title or describe the diff line by line.

## One change, one description

If an honest title needs the word "and", the change is doing two things. Say so, and say where `jj split` could divide it. Still write one description for the whole change, so the author can keep it together if they choose.

## Attribution

If an agent wrote the change, end the description with a trailer naming the model the harness reports, in the form the repository already uses. If the user wrote the change, add no trailer.

## Output

- **Asked for the text** (the usual case, and always when the diff was supplied to you): output only the description, with no preface, code fences or explanation. Put anything meant for the author and not for the history, such as a split suggestion or a missing reason, on lines that start with `JJ:` after the description. jj removes those lines when the description is saved from the editor.
- **Asked to apply it:** set it with `jj describe -r <revision>`, show the result, and say the author-only remarks in your reply instead of using `JJ:` lines. Do not push.
