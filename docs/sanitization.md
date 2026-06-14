# Sanitization Rules

Public repositories should contain structure and templates, not private facts.

## Delete

Delete these instead of masking them:

- passwords, tokens, cookies, API keys, and verification codes
- private keys, seed phrases, and certificate files
- full private chat transcripts
- payment screenshots, identity documents, real addresses, and phone numbers
- customer data and private business records

## Replace

| Original content | Replacement |
|---|---|
| Real name | `Example User` |
| Real customer | `Example Client` |
| Real local path | `<workspace-root>` |
| Real project | `sample_project` |
| Real date | Example date or date range |
| Real metric | Fictional or ranged value |

## Keep

These are safe to keep when sanitized:

- abstract architecture
- sanitized process descriptions
- non-private rules
- project-card structure
- sample JSON schema
- scripts

## Recommended Process

Create a separate public repository and manually copy the sanitized structure into it. Do not publish a private working folder by deleting sensitive files in place.
