# Site Build Specification

## Architecture

The site is a static GitHub Pages site. `index.html` is the entry point. `main.js` initializes the site and imports one owner module per feature: navigation, theme, elapsed-time tracker, copy buttons, search, and scroll reveal.

## Components

The files under `site/components/` are reusable, documented HTML fragments. The current static pages include their needed markup directly so the site works without a build step. A future build may assemble the fragments, but it must preserve accessible landmarks and stable relative paths.

## Data

JSON lives under `site/assets/data/`. Providers require `id`, `name`, `status`, `description`, `source_url`, and `last_verified`. FAQs require `id`, `question`, `answer`, and `category`. Stress-test records require `id`, `title`, `observation`, `limitations`, and `status`.

## GitHub Pages paths

Use relative URLs only. The deployment workflow publishes `site/` as the Pages artifact, so links must work from a project repository path rather than assuming the domain root.

## Failure handling

If a JSON file or asset fails to load, display a useful explanatory fallback and keep the rest of the page usable. Never silently convert missing evidence into a positive safety verdict.

## Source of truth

Markdown documents are authoritative for policy and methodology. Website JSON is a presentation index and must link back to the relevant documentation. Changes to claims require updating both the source document and the website record.

## Templates

Templates are downloadable as plain text or CSV files. They must contain placeholders and instructions, never live credentials.
