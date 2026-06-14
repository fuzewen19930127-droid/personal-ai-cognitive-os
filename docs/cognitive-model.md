# Cognitive Model

This template borrows a few useful ideas from human memory and turns them into practical files and rules. It does not claim to reproduce the human brain. It gives AI agents a stable operating structure for long-running work.

## Memory Types

| Memory type | Template object | Example |
|---|---|---|
| Working memory | Current task context | What is being done right now |
| Episodic memory | Immediate task memory | What happened in the last task |
| Semantic memory | Rule cards and knowledge cards | Stable rules and durable conclusions |
| Procedural memory | SOPs, scripts, workflows | Repeatable steps |
| Error memory | Error routes | Failed paths and anti-patterns |

## The Main Problem

Without an explicit memory layer, an agent may:

- forget the project state after context changes
- repeat failed approaches
- mix temporary guesses with stable rules
- use stale external information
- lose source evidence
- require the user to re-explain the same facts

## The Operating Loop

```text
observe
-> classify
-> recall
-> act
-> verify
-> write back
-> consolidate
-> evolve
```

## Writeback Criteria

Only write information that is reusable, traceable, and safe.

| Question | Required answer |
|---|---|
| Is it reusable? | It should help a future task |
| Is it traceable? | It has a `source_trace` or file path |
| Is it stable? | It is not just a one-off guess |
| Is it safe? | It contains no secrets or private raw transcripts |
| Is it actionable? | It changes future behavior |

## Error Memory

Failed approaches are first-class memory.

Each error route should record:

```yaml
wrong_path:
why_failed:
evidence:
corrected_path:
next_prevention:
source_trace:
status:
```

The goal is not blame. The goal is to stop the agent from spending time on paths that have already been disproven.

## Rule Evolution

Rules should not be rewritten randomly. They move through states.

| State | Meaning |
|---|---|
| `candidate` | Useful pattern observed but not proven |
| `active` | Stable rule used in normal work |
| `review` | Needs re-check |
| `deprecated` | Replaced by a better rule |
| `archived` | Kept only for historical reference |

## Consolidation Schedule

| Time | Action |
|---|---|
| Task end | Write immediate task memory and update project state |
| Daily | Catch missed task-state updates |
| Weekly | Audit rules, duplicates, stale memory, and conflicts |
| Before release | Run validation, sensitive scan, and publication checklist |

## Practical Principle

The agent should not "remember everything." It should remember what changes future work:

- project state
- durable decisions
- reusable rules
- failed routes
- verification results
- source evidence
- next actions
