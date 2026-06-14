# Memory Layer

This layer stores reusable memory outside the chat context.

## Files

| File | Purpose |
|---|---|
| `project_handoff.md` | Short index of active project state |
| `immediate_task_memory_index.md` | Task-end writeback entries |
| `knowledge_cards.md` | Stable reusable conclusions |
| `error_routes.md` | Failed paths and anti-patterns |
| `memory_layers.md` | L1/L2/L3 memory model |

## Writeback Rule

Write only reusable, traceable, safe information.

Good memory:

- changes future behavior
- has a source trace
- is safe to store
- is stable enough to reuse
- points to a next action

Bad memory:

- raw private chat transcripts
- one-off emotion
- secrets
- unverified guesses
- duplicate notes that do not change future behavior
