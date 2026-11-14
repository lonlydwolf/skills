---
name: request-review
description: Have a second model review a finished task or a whole change, with each author answering the findings on their own work.
disable-model-invocation: true
---

The user has asked for a review. A second model checks the work and reports. The author of each part decides what to do with the findings on that part and makes the fixes. The whole exchange is one full review and one short follow-up. Run it from the thread that coordinates the work.

## What is under review

The user names it. If they did not, ask.

- **One finished task.** Review it as soon as it is done, while its author still remembers every choice.
- **The whole change, before a pull request.** This review is mostly about how the parts fit together. Run the repository's checks on the combined result first.

## Who answers the findings

List who wrote what: the user, you, or other agents. Each author answers the findings on their own part.

- You wrote it: you answer and fix.
- Another agent wrote it: pass that part's findings to it for step 3.
- The user wrote it: ask them for the purpose and for what was intentional. Show them the reviewer's findings unchanged, add your own view of each, and let them choose each answer. Do not change their code unless they ask you to.

## 1. Prepare

- Run the repository's checks on what is under review. Do not send work you already know is broken.
- Pin it: the base and the head (or the working tree, if it is not committed yet), and one diff command that shows it.
- Write the purpose in one to three sentences.
- Collect from each author the choices they made on purpose that a reviewer could mistake for a bug, each with its reason. This is the cheapest way to avoid false findings.

## 2. Ask the reviewer

Use the model the user named, at the effort they named, or high if they gave none. It should come from a different model family than the authors. If you cannot reach such a model, tell the user; do not quietly substitute another.

Use one reviewer for everything under review. Split only when the change is too large for one reviewer to read well (roughly a thousand changed lines or more): then use one reviewer per area, plus one more that reads the combined change only for how the areas meet.

Start each reviewer as a separate agent with a fresh context. It knows nothing of your conversation, so send it this brief with every blank filled:

```text
Review only. Do not edit, commit, push or comment anywhere. If you need to run
something that writes files, do it in a copy outside the repository.

Repository: <path>
Change: <base>..<head>, shown by: <diff command>
Your part: <the whole change | one area | how the areas meet>
Purpose: <what the change is for>
Intentional, not bugs: <each choice and its reason, or "none">
Checks already run: <commands and their results>

Read the diff and enough surrounding code to see who uses what changed. Run the
repository's checks yourself. Look for: the change not doing what the purpose
says, something that worked and now breaks, security problems, data loss, and
documentation or tests the change leaves untrue. Skip style. Problems that were
there before the change get one line at the end, not a finding.

Mark each finding:
  serious = security, data loss, breaks something that worked, or does not do
            what the purpose says
  normal  = anything else worth fixing

Reply in this form:
Verdict: ready | ready with follow-ups | not ready
F1 [serious|normal] path/file:line
  What happens: <the input or situation, the result, what the purpose requires>
  Evidence: <the command and its output, or the code path you traced>, or "unverified"
  Direction: <one sentence, not a patch>
Checked: <what you ran and read, with results>
Not checked: <what you did not check, and why>
```

## 3. Each author answers their findings

Check each finding against the code before acting on it. The reviewer can be wrong, and it does not know everything that was intended. Every finding gets one answer from its author:

- **Fixed**: the smallest fix that resolves it, then the checks are rerun.
- **Intentional**: with the reason, pointing at the request or the code.
- **Declined**: with the reason, for example it is outside the purpose or was there before.

An agent may not set aside a serious finding on its own: it fixes it, or it goes to the user. Do not agree with a finding only to end the exchange, and do not change code you believe is right. A fix that adds new behavior or options needs its own justification.

## 4. One follow-up

Send the same reviewer the answers and the diff of the fixes made since its review. If it starts fresh with no memory of the first round, include the original brief and its first reply. Ask it to mark each finding accepted or still open with a reason, and to check that the fixes broke nothing. It should raise nothing new on code that did not change unless it is serious.

Stop here. Run another round only if the user asks for one.

## 5. Report to the user

- The reviewer's model and effort.
- Serious findings that are not fixed, first, with both positions in two lines each.
- What was fixed, one line per finding, with its author.
- What was kept as intentional or declined, with the reason and whether the reviewer accepted it.
- The result of the checks after the fixes.

A finished review is not an approval: say plainly whether anything serious remains. Then stop. The user decides what is still open and when to file the pull request.
