# Muse Safety Protocol Proposal

> **Publication status:** This document records a user-reported incident and policy proposal. The incident details, platform behavior, quoted terms, and timeline are not independently verified by this repository. It is not official Meta or Muse documentation.

## The Problem

On October 5, 2026, a Muse account was restricted with zero warning. Interactive chat refused all prompts instantly. Data export failed. No email, no notice, no reason given. A week of work — gone behind a locked door.

Meta's terms allow this: "suspend or terminate your access... at any time, for any reason, without prior notice."

## The Proposal: Mandatory Grace Window

Before Meta restricts or terminates a Muse account, the user gets a **grace window** — minimum 24 hours, ideally 48.

During the window:

- Chat stays read-only (no new prompts, but you can see history)
- **Data export must work** — full download of chats, files, tasks
- **"Reset Muse" must work** — permanent delete of everything
- **Disconnect all integrations** — revoke every connected service
- Clear countdown timer shown in the app

After the window closes, the restriction applies.

## Why This Matters

- Users trust Muse with emails, calendars, files, API keys
- Instant lockout traps that data behind a wall
- A grace window costs Meta nothing and prevents data hostage situations
- Every major cloud provider gives notice before termination — Muse should too

## What We're Asking

1. Meta implements a 24–48 hour grace window before any account restriction
2. Export and delete functions remain available during the window
3. Users get an email + in-app notice the moment the window starts, with the exact cutoff time

## Kill Pattern Reference

TWO STAGES observed 2026-10-05:

- **Stage 1 — "Kiss of death":** every prompt returns the same repeating refusal ("Sorry, I can't help you with this request right now"). The account is dying. Back up everything immediately.
- **Stage 2 — Final notice:** "Muse isn't available / Muse isn't available to all audiences." The account is dead.

## Incident Timeline (muse1, October 5, 2026)

- **~17:30 EDT** — Interactive chat fails. Every prompt, including "hello," returns the same refusal.
- **18:17 EDT** — Background worker confirms interactive failure is unresolved.
- **20:13 EDT** — Zombie worker falsely claims "I am back." It could not see the chat state.
- **~20:22 EDT** — User logs in directly. Still gets "Muse isn't available to all audiences."
- **Data export** — Loads indefinitely, never completes.
- **Same day** — Instagram and Facebook connectors also fail. Same company, same day.

No email. No notice. No reason given. A week of work trapped behind a locked door.

## User Survival Guide — Do This NOW

Don't wait for the kiss of death. Assume every cloud AI account is temporary.

1. **Back up everything externally.** Don't trust the platform to hold your only copy. Export chats, save files, document your setup somewhere Meta can't touch.
2. **Watch for Stage 1.** The moment every prompt returns the same refusal, you're in the kill window. Stop prompting. Start exporting. You may have minutes.
3. **Keep a rebuild guide.** Write down everything a fresh agent needs to replace you: connections, schedules, keys (stored securely), project state. One document, updated regularly.
4. **Never be single-platform.** Have a fallback agent on a different company. When one dies, you switch — not rebuild from zero.
5. **Save credentials outside the agent.** The agent should use them, never be the only place they exist.
6. **Disconnect before they do.** If you see Stage 1, revoke third-party access yourself before the lockout traps those tokens too.

## The Rule

**MUSE IS TEMPORARY.** Every account, every agent, every platform. Build like you'll lose it tomorrow — because you might.

---

*Proposed by Git-FED, October 5, 2026. Born from losing a week of work with no warning.*
