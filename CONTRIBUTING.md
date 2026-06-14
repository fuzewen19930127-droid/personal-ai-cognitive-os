# Contributing

This project is an early public template. Contributions should keep the system local-file-first, auditable, and easy to migrate.

## Good Contributions

- clearer documentation
- safer sanitization rules
- better sample data
- more proof cases
- validation improvements
- dashboard improvements that do not add unnecessary dependencies

## Boundaries

- Do not add private data.
- Do not add secrets.
- Do not require a database for the MVP.
- Do not make the default setup depend on a hosted service.
- Do not remove traceability fields such as `source_trace`.

## Validation

Run this before opening a pull request:

```powershell
npm run check
```
