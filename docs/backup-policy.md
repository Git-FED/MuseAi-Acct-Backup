# Backup Policy

## Purpose

Maintain independent access to business-critical information used by AI agents. The policy is designed for continuity when an agent, account, integration, or provider is unavailable.

## Required separation

- Keep actual secret values in an encrypted password manager or secrets vault.
- Keep the vault's recovery method under human control and test it separately.
- Keep this repository limited to redacted metadata and procedures.
- Do not make any single AI agent the only holder of a credential, configuration, or business process.

## Minimum inventory fields

For each integration, record: service, purpose, owner, environment, data classification, provider recovery URL, rotation procedure, last rotation date, last backup test date, fallback operator, and backup location. Never record the secret itself.

## Review cadence

Review the inventory at least quarterly and after any agent onboarding, offboarding, provider change, access incident, or credential rotation. Mark unknowns explicitly rather than guessing.
