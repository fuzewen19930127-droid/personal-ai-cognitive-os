# Writeback Policy

Writeback is the process of turning task results into reusable memory.

## Write Back

- project state changes
- verified deliverables
- failed routes
- stable decisions
- recurring user preferences
- reusable SOPs
- validation results
- source verification records

## Do Not Write Back

- one-off opinions
- unverified guesses
- private raw transcripts
- secrets
- customer data
- duplicate notes that do not change future behavior

## Required Fields

```yaml
item_type:
memory_type:
status:
sensitivity:
summary:
verification:
next_action:
source_trace:
updated_at:
```

## Promotion Path

```text
task note
-> immediate task memory
-> project card
-> knowledge card or rule card
-> SOP
-> script or automation
```
