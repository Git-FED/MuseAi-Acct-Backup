# AI Agent Lockout Backup Kit

<img width="679" height="805" alt="Screenshot 2026-10-06 024015" src="https://github.com/user-attachments/assets/6f2aaaeb-66bc-4c49-8bec-e4b479856f89" />

A vendor-independent continuity kit for backing up, rotating, and recovering information used by AI agents—without storing secrets in the agent or in GitHub.

> **Core principle:** If an AI agent becomes unavailable, the business owner must still have independent access to every credential, configuration, document, and recovery procedure needed to continue operating.

## What this project is

This repository provides:

- A credential and access inventory template
- Business-continuity and fallback planning templates
- Onboarding, offboarding, and exposure-response checklists
- A static, offline-first worksheet site for recording **metadata only**
- JSON schemas for provider, FAQ, and test-result content
- Content-verification rules that separate reports from verified documentation
- A clearly labeled, unverified `muse-safety-protocol-proposal.md` policy proposal
- A professional incident report documenting the failed Meta account-export workaround
- A consolidated, redacted `docs/muse1-incident-report.md` with timeline and recovery actions
- A polished Support page with optional third-party subscription and donation links
- Automated checks for navigation, data loading, and unsafe credential fields

## What this project is not

- It is **not** official support for Muse or any other AI provider.
- It is **not** a password manager, secret vault, or credential-recovery service.
- It does **not** prove that any AI agent is safe to hold credentials.
- It does **not** automatically run prompts against live accounts.

Never put passwords, API keys, tokens, payment details, private customer data, or production credentials in this repository or in the website worksheets.

## Quick start

1. Copy `templates/credential-inventory.csv` to a private, encrypted location.
2. Fill in service names, owners, recovery URLs, rotation instructions, and backup locations—**not secret values**.
3. Store actual secrets in a dedicated password manager or encrypted vault with at least one human-held recovery path.
4. Complete `templates/business-continuity-plan.md` and test the fallback plan.
5. Open `site/index.html` locally, or serve the `site/` directory with any static server.
6. Run the checks:

   ```bash
   node tests/data-validation.test.js
   node tests/navigation.test.js
   node tests/worksheets.test.js
   node tests/accessibility.test.js
   node tests/support.test.js
   ```

## Backup model

Use three separate layers:

1. **Inventory:** what exists, who owns it, where it is used, and how it is rotated.
2. **Secret storage:** actual values kept in a dedicated encrypted vault, outside this repository and outside a single agent.
3. **Recovery evidence:** redacted procedures, provider links, backup locations, and last-tested dates.

Backups are for continuity, not proof that previously shared secrets remain safe. If an agent or chat may have displayed a credential, revoke and regenerate it through the provider that issued it.

## Repository layout

```text
ai-agent-lockout-backup/
├── docs/                 Guidance and verification rules
├── templates/            Redacted, fill-in continuity documents
├── schemas/              JSON schemas for site data
├── site/                 Static worksheet and reference website
├── tests/                Dependency-free Node checks
└── .github/workflows/    GitHub Pages deployment and validation
```

## Privacy model of the website

The worksheet stores only non-secret metadata in the browser's `localStorage`. It has no server, analytics, login, or network submission. Users can export or delete local worksheet data. Service-worker caching excludes worksheet state. Treat browser storage as sensitive nonetheless: use a private device and delete data when finished.

## Content reliability

Every provider-specific instruction should have a source URL and a `last_verified` date. Label claims as `user-reported`, `verified`, or `unknown`. Do not turn an anecdote about a lockout into a universal platform claim.

The file [`muse-safety-protocol-proposal.md`](muse-safety-protocol-proposal.md) is preserved as a user-reported policy proposal. Its incident details and platform-specific claims are not independently verified by this repository.

## License

MIT. See `LICENSE`.
