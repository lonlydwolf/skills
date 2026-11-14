---
name: audit
description: Audit a repository or part of it and report how it works, what is wrong and what to do about each problem, without changing anything.
disable-model-invocation: true
---

The user wants to understand a repository and its problems well enough to fix them personally or to tell someone else exactly what to fix. Your product is a report. The user decides what gets fixed, by whom and in what order.

## Authority

- Change nothing in the repository: no edits, commits, new files or installed dependencies. Give the report in the conversation. Write it to a file only if the user asks, and then outside the repository unless they name a place.
- If something has to be run that writes files, run it in a copy outside the repository.
- Do not start fixing anything, even when the user answers a question or gives you new facts. Wait until they ask for a fix in so many words.

## 1. Scope

Audit what the user named: the whole repository, one area, or one kind of problem such as bugs, security, performance or the user interface. Note the revision you are auditing. If the repository is too large to read closely in full, say which parts you will read in depth and which you will only skim, before you begin.

## 2. Learn how it works

Read the README, the documentation and any agent instructions. Find the entry points, the main parts and how they connect, the external services, and how the project is built, run and tested. Run the checks the repository already has and record the results. Run the program itself when that is cheap and safe.

## 3. Look for problems

Within the scope, look in this order:

1. Behavior that is wrong, or that differs from what the documentation promises.
2. Security problems and ways to lose or corrupt data.
3. Things that will break for a user in ordinary use: errors that are not handled, races, limits, failures of a service the project depends on.
4. Tests that cannot fail or that miss the behavior that matters, and checks the project lacks.
5. Improvements, but only of the kinds the user asked for. If they asked for none, leave that section out of the report.

For a large repository you may split the reading across helper agents. Check what they report against the code yourself before it goes into the report.

## 4. Confirm

Every problem you report carries its evidence:

- **reproduced**: a command, input or small test that shows it, with the output that matters;
- **traced**: the exact input and the path through the code that leads to the wrong result;
- **unverified**: a suspicion, with what would settle it.

A serious finding must be reproduced or traced. Do not report that something is safe or correct. Say what you checked and that you found nothing.

## 5. Report

```text
Audit of <repository> at <revision>. Scope: <what was audited>

How it works
  <what the project is for, its main parts and how they connect, how to run and test it>

Findings, most serious first
A1 [serious|normal] <area> path/file:line (reproduced | traced | unverified)
  What happens: <the input or situation, the result, what should happen>
  Evidence: <the command and its output, or the traced path>
  What to do: <what to change and where, and how to confirm it is fixed. Not a patch>

Improvements
I1 <area>: <the change, and what it would improve>

Suggested order: <which findings to handle first, and why>
Checked: <what you ran and read, with results>
Not checked: <what you did not look at, and why>
```

Serious means security, data loss, wrong behavior in ordinary use, or something that worked and is now broken. Everything else worth fixing is normal. Name the area of every finding, so that related ones can be handed out together. Merge findings that share one cause. Leave out style and personal preference unless the user asked for them. Write "What to do" so that a person or an agent who has not read the rest could act on it.

After the report, answer questions about it. Do not split the findings into tasks or assign them unless the user asks.

## When the user brings their own list

If the user gives you the problems they already suspect, audit as usual, then add a short comparison at the end: what they found that you confirmed, what they listed that is not a problem and why, and what they missed.

## Checking another audit

If the user gives you an existing audit or review to check, verify each of its claims against the code and mark it confirmed, wrong or unverified, with your evidence. Then add what it missed. Its conclusions are claims, not evidence.
