# Agent Offboarding

When an agent is retired, inaccessible, or no longer trusted:

1. Disable or revoke its tokens and OAuth grants.
2. Rotate shared credentials and webhook signing secrets.
3. Remove its access from repositories, cloud consoles, databases, and business tools.
4. Preserve only necessary audit evidence; do not archive secrets in this repository.
5. Confirm that scheduled jobs, webhooks, and background automations are understood.
6. Update the inventory and record the date and operator.
7. Test the human or alternate-agent fallback.
