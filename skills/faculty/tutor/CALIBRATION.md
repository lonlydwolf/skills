# Evaluation Calibration

These synthetic examples show how to judge borderline evidence against agreed criteria. They are not answer keys or prompts to reuse. Judge each real response against its own criterion and conditions.

## Example lesson

A CSV-cleaning course records these Lesson Outcomes for lesson 03:

| ID | Observable outcome | Conditions and permitted aids | Criticality |
|---|---|---|---|
| `LO1` | Predict how blank cells affect a pandas column mean on unfamiliar data and explain why. | Closed-book; no execution. | Critical |
| `LO2` | Choose between dropping and filling missing values for a stated summary and justify the effect on the result. | Closed-book; no execution. | Critical |
| `LO3` | Name the pandas methods for dropping and filling. | Documentation allowed. | Supporting |

Prompt for `LO1`: pandas reads a CSV with columns `item,price` and three data rows `A,10`, `B,`, `C,20` using default missing-value handling. What does `df["price"].mean()` return, and why? The middle row has a nonempty item, so it is not an empty CSV line.

## Judging responses

| Response | Status | Rationale |
|---|---|---|
| "15. The blank is read as NaN and `mean` skips NaN by default, so it averages the two numbers." | `MET` | Correct prediction with the mechanism `LO1` requires. |
| "15, it ignores empties." Neutral follow-up: "What is stored for the blank, and what would change the result?" Learner: "NaN. If I filled it with 0 first, it would be 10." | `MET` | The first answer was thin. The follow-up asked for reasoning without supplying it, and the learner supplied the mechanism and a correct counterfactual. |
| "15, because `read_csv` drops the blank row." Neutral follow-up: "Describe what `df` contains after reading." Learner: "Three rows; the middle price is NaN, so the row stays and `mean` skips it." | `MET`, slip noted | Borderline. The learner corrected the mechanism from their own description of the data. If doubt remains, a changed-context prompt, such as comparing `len(df)` with `df["price"].count()`, settles it. |
| Explains correctly but writes `df.mean(skip_na=True)` instead of `skipna`. | `MET` | Syntax recall is not part of `LO1` under these conditions. It would matter if the outcome required working code. |
| "10, because the blank counts as zero." Neutral follow-up: "What does pandas store for the blank?" Learner: "A zero." | `NOT MET` | A material misconception. It would produce wrong summaries for any data with missing values, and it persisted after neutral clarification. |
| Learner asks to stop after `LO1` is `NOT MET`, before `LO2`. | `LO2` `NOT ASSESSED`; FAIL | One observed `NOT MET` supports FAIL. `LO2` is missing evidence, not failed evidence. |
| Learner asks to stop after `LO1` is `MET`, before `LO2`. | No report | No critical criterion is `NOT MET` and `LO2` is unassessed, so the attempt is unfinished. |

## Prediction versus mechanism

The criterion decides how much an imprecise explanation matters. If `LO1` required only a correct prediction, "pandas averages the rows it can see" would be acceptable wording. Because `LO1` requires the reason, ask a neutral follow-up. If the learner connects the result to NaN handling, treat the wording as a slip. If the explanation would mislead them in a changed case, for example predicting `count()`, record `NOT MET`.

A finer distinction taught during remediation does not become critical unless an agreed outcome requires it.

## Aids and independence

At the start, the learner says no aids are open. A later answer contains `&#x20;` entities and a citation mark.

- **Do:** Treat the formatting as inconclusive. Ask neutrally whether any aid was used for that answer and record the reply. If independence remains uncertain, give a changed-context prompt for the same criterion under the stated conditions and judge that response. Report it plainly: "The response to prompt 2 contained pasted formatting; the learner reported none used. `LO1` was judged from a fresh changed-context prompt."
- **Do not:** Infer AI use or misconduct from formatting, call a response "AI-generated", or rely on detector tools. If no fresh demonstration follows, the criterion is `NOT ASSESSED`, not `NOT MET`.

## Focused reevaluation

Attempt 1 recorded `LO1` `MET` and `LO2` `NOT MET`. Attempt 2 uses the same criteria with fresh prompts:

- **Repaired outcome:** focus on `LO2` with a new dataset and a different summary purpose.
- **Retained outcome:** collect concise fresh evidence for `LO1` inside that prompt, for example by asking the learner to predict the mean under each choice before justifying it.

Attempt 1's `MET` is context, not evidence for attempt 2. Both critical outcomes need a status from attempt 2, and the attempt does not repeat the whole lesson.
