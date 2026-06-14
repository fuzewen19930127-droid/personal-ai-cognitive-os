# Controlled Evolution

This layer records how the system improves over time.

Evolution is controlled. It does not mean the agent can freely rewrite rules.

## Evolution Paths

```text
new task fact -> immediate task memory
repeated project state -> project card
failed route -> error route
repeated error route -> rule card
repeated successful process -> SOP
stable SOP -> script or automation
stale rule -> review / deprecated / archived
```

## Guardrails

- Keep source traces.
- Do not delete the only evidence.
- Do not promote one-off guesses.
- Do not automate high-risk actions without review.
- Keep rule changes small and auditable.
