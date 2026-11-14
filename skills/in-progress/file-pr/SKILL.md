---
name: file-pr
description: Use when the user asks to file, open or create a pull request, or to write or rewrite a pull request description.
---

A good pull request description lets someone who did not follow the work answer four questions: why does this change exist, what does it change, how do we know it works, and what could go wrong if it is merged. Every line should tell the reader something they could not get faster from the diff.

## Before writing

1. Check whether an open pull request from this branch to the same base already exists. If one does, update it instead of opening another. A merged or closed one, or one to a different base, does not count.
2. Read the diff against the base branch as it is now, and the commit list. Write from the diff, not from your memory of the session.
3. Find the purpose: the original request or issue, in the requester's words.
4. Collect what was verified: commands and checks whose results you observed in this session on the final head. If the repository's checks have not been run on that head, run them now.
5. Read the repository's conventions: its CONTRIBUTING file, a pull request template if one exists, and recently merged pull request titles. A repository template outranks the structure below.

## Title

Follow the repository's title convention. Say what changes for the person affected, not which mechanism was touched.

- Weak: `fix(inspect): use strings.HasPrefix for scheme validation`
- Better: `fix(inspect): reject URLs whose scheme is not exactly https`

## Description

Use this structure. Drop a section only when it would be empty.

```markdown
<Why: one to three plain sentences. What was wrong or missing, and what this pull request does about it.>

## Summary

<The smallest view that shows the change. See below.>

## Verification

- <what was run or looked at>: <what it showed>

Not verified: <what was not checked, and why>

## Merge risk

**Reversible:** <yes, reverting is enough | no, because ...>
**Could affect:** <who or what would notice if this change is wrong>

<model> | Reviewed by <reviewers> | on behalf of <GitHub username> using <harness>
```

### Summary

Choose the view that makes the change clear fastest, and place it next to a sentence that says what to notice:

- a short list of behavior changes, when behavior is the point;
- a before and after of output, when the result is the point;
- a `diff` sketch of a structure, call flow or file layout, when the shape changed;
- a small tree or diagram, when several parts now relate differently.

One view is usually enough. Add here what the diff cannot say: decisions that were taken and why, and any effect on people, data or installations that already exist. Do not list files or restate commit messages.

### Verification

Evidence is something observed, not something expected. Prefer a before and after:

- for visible changes, a screenshot or the output as it appears;
- for behavior, the command or test and its result, ideally one that fails on the base and passes on the head;
- for text-only changes such as documentation or instructions, say what was checked (links, examples, a walkthrough). If no command or session was run, say that nothing was executed.

Never state a result you did not observe. Evidence recorded earlier, in the repository or on the pull request, may be cited as recorded there and not rerun. `Not verified:` is always present. Write "nothing known" only if that is true.

### Merge risk

Say whether merging is a two-way door (a revert undoes it) or a one-way door (something cannot be taken back: migrated or deleted data, a published release, a format or interface others now depend on). Then name who or what would notice if the change is wrong. This tells the reader how carefully to look.

### Signature

End with the signature line. Use the model name the harness reports and the reviewers the requester or the pull request record gives you. If nobody has reviewed the change, write `Not yet reviewed`. Leave out any part you do not know. Do not guess.

## Leave out

- Tool, thread and agent setup, and the story of how the work went.
- Results nobody observed, ticked boxes, and reassurances nobody asked for.
- Review rounds, unless a review changed a decision the reader needs to know about. Reviewers are named in the signature.

## Open it

Open the pull request only if you were asked to. If you were asked only for the description, return the title and body as text. Before submitting, read the title, description and attachments once more for secrets and private details, and check every claim against the diff. Open a real pull request, not a draft, so review bots run, unless a draft was requested. Report the URL.
