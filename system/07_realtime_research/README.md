# Real-Time Verification Layer

This layer records when a task must verify current facts and how those facts affect local rules.

## Use For

- current API behavior
- software versions
- model availability
- platform rules
- pricing
- laws and policies
- security guidance
- market and news facts

## Verification Principles

- Prefer official docs, official repos, and primary sources.
- Record the verification date.
- Update current facts separately from stable local rules.
- Do not let a real-time source automatically overwrite project rules without adaptation.

## Record Template

```yaml
check_id:
checked_at:
topic:
sources:
current_facts:
impact_on_local_rules:
next_review:
source_trace:
```
