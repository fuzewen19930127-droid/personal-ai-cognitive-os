# Operating Model

This template uses a simple operating model:

```text
classify the task
-> read the right memory layer
-> execute
-> verify
-> write back only reusable facts
```

## Task Classes

| Task class | Default mode |
|---|---|
| One-off question | Use current context only |
| Project handoff | Read project memory and project cards |
| Code or documentation work | Read relevant files and acceptance criteria |
| Automation design | Read rules, SOPs, and audit records |
| Technical selection | Read external knowledge and verification rules |
| High-change facts | Verify current official or primary sources |

## Writeback Policy

Write back only when the information will matter later.

Examples that should be written:

- project state changed
- a route failed
- a rule changed
- a reusable SOP emerged
- a validation result was produced
- a source was verified

Examples that should not be written:

- one-off opinions
- temporary guesses
- complete private chat transcripts
- secrets
- raw customer data

## Automation Policy

Automation should come after stable process.

```text
manual process
-> repeated enough times
-> clear inputs and outputs
-> clear acceptance criteria
-> low-risk and retryable
-> SOP
-> script or workflow automation
```

Do not automate high-risk actions without explicit review, especially publishing, deleting, payments, permissions, account changes, or secret handling.
