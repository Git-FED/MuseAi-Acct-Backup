# Site Testing

Run the dependency-free checks from the repository root:

```bash
node tests/data-validation.test.js
node tests/navigation.test.js
node tests/worksheets.test.js
node tests/accessibility.test.js
```

Acceptance checks:

- Keyboard-only navigation, visible focus, and usable button names
- Readable contrast, reduced-motion preference, and mobile layouts
- Navigation links, Launchpad paths, downloads, printing, and missing-asset behavior
- Worksheet save, storage failure handling, preview, export, and clear-saved-data controls
- Incident tracker uses elapsed time and follow-up reminders, never a promised unlock deadline
- JSON loading failure fallback
- Service-worker update behavior and exclusion of worksheet state
- No interactive field asks for passwords, API keys, tokens, or other secrets
- Stress-test content is observational and never calls live accounts
