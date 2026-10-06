# Meta Account Export Workaround — Incident Report

**Incident date:** October 5, 2026  
**Affected resource:** `muse1` agent data  
**Status:** Workaround unsuccessful; continuity rebuild in progress  
**Evidence status:** User-reported account experience; provider behavior is not independently verified by this repository

## Executive summary

The Meta Accounts Center export was tested as a workaround for recovering `muse1` agent data. The export completed, but it did not contain the agent's operational transcripts from October 1–5.

The export contained five conversations with the Meta AI assistant chatbot, dated September 29–30. These were separate from the `muse1` agent's later operation. The account export therefore did not provide a recovery copy of the agent transcripts.

The agent-specific **Download your agent data** path appears to be the only remaining route identified for recovering the missing transcripts, but that path was unavailable behind the account restriction. An account appeal remains the only identified route to request access to the original agent records.

## What the export contained

The recovered export included five Meta AI assistant chatbot conversations covering topics such as:

- The Takeout incident
- A Matrix migration
- GitHub work
- Early FED-OS planning

The records were dated September 29–30. No agent-operation records from October 1–5 were present in the export reviewed.

## What the export did not contain

The export did not include:

- `muse1` agent transcripts from October 1–5
- The complete agent operating history
- The agent's full task and execution context
- A complete archive of the agent's connected workflow activity

This means that an Accounts Center export should not be treated as a confirmed backup of agent-specific records unless the exported files are inspected and the expected agent records are actually present.

## Recovery sources currently available

The rebuild is proceeding from the following independent or previously preserved sources:

1. The EYI export
2. Channel archives
3. `muse2` knowledge
4. The existing briefing and continuity materials

These sources support a partial reconstruction, but they are not equivalent to the missing `muse1` transcript archive.

## Recovery limitation

The current evidence does not establish that the missing transcripts were deleted. It establishes only that they were absent from the Accounts Center export that was reviewed and that the agent-specific download path was inaccessible at the time.

The account appeal is the remaining identified path for requesting review or recovery of the original agent data. There is no guarantee that an appeal will restore access or produce the missing transcripts.

## Continuity action required

A data-dump archive was created:

```text
muse2-backup-20261005-233045.tar.gz
Size reported: 128K
```

The archive must be downloaded and stored manually in an independent location. It must not remain only inside the agent, chat history, or platform account.

Recommended handling:

- Download the archive to a local device or independent storage provider.
- Confirm that the file opens and contains the expected material.
- Create a second backup in a separate location.
- Record a SHA-256 checksum for integrity verification.
- Keep any credentials or sensitive values inside an encrypted vault, not in this repository.
- Update the manual rebuild guide when the backup changes.

Example checksum command:

```bash
sha256sum muse2-backup-20261005-233045.tar.gz
```

## Follow-up checklist

- [ ] Download `muse2-backup-20261005-233045.tar.gz` manually.
- [ ] Save it outside Meta and outside any single AI agent.
- [ ] Verify the archive can be opened.
- [ ] Create a second independent copy.
- [ ] Record and preserve the checksum.
- [ ] Update the manual rebuild guide.
- [ ] Submit or continue the account appeal without placing secrets in the request.
- [ ] Record any appeal response, export result, or provider explanation as dated evidence.

## Operational lesson

A general account export is not automatically an agent backup. Every agent platform should be tested with a small, non-sensitive sample to confirm exactly which chats, files, tasks, transcripts, and configurations are included before the platform is trusted with the only copy of business history.

> **Continuity rule:** After every data dump, the operator—not the agent—must download and preserve an independent copy.
