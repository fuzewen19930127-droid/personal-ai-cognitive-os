# Knowledge Cards

Knowledge cards store stable conclusions that are useful across tasks.

## Template

```yaml
card_id:
title:
stable_conclusion:
usable_when:
caveats:
source_trace:
status:
```

## Example

```yaml
card_id: card.local_files_first
title: Local files first
stable_conclusion: Long-running AI work needs durable project memory outside the current chat context.
usable_when: Project handoff, rule updates, documentation work, automation design.
caveats: Current APIs, prices, laws, and platform rules still need real-time verification.
source_trace: docs/architecture.md
status: active
```
