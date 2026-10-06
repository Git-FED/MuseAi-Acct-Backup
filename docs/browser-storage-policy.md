# Browser Storage Policy

The worksheet is an optional convenience for recording **non-secret metadata** locally in the current browser. It is not a vault.

## Allowed fields

Service names, purposes, owners, environments, data classifications, provider recovery URLs, rotation procedures, dates, fallback operators, and non-secret vault record references.

## Excluded fields

Passwords, API keys, tokens, private keys, payment credentials, customer records, regulated data, authentication codes, or any value that grants access.

## Retention and deletion

Records remain in browser `localStorage` until the user removes them or clears site data. Use **Clear saved data** when finished, especially on a shared device. The application must handle unavailable or full storage without losing the page or claiming that a save succeeded.

## Export

Export creates a local JSON or readable text file. The user must protect and delete exported files when finished. Exports contain metadata, but metadata can still reveal business relationships.

## Shared devices

Do not use the worksheet for sensitive business metadata on a shared or unmanaged device. Prefer a managed private device and delete local records after use.

## Network behavior

The site has no worksheet submission endpoint. The service worker caches static assets only and must not cache worksheet data. Provider-specific claims require a source and last-verified date.
