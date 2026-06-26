# Personal website — parthgoyal.uk

## What it is

Personal site and writing home for Parth Goyal — "quantitative researcher and economics
writer, using data to think out loud." Static, hosted on GitHub Pages with the custom
domain `parthgoyal.uk`.

## Structure

- **About** (`index.html`) — intro, links out to Substack / LinkedIn.
- **Writing & Projects** (`projects.html`) — index of posts and project writeups.
- **Résumé** (`resume.html`) — on-page CV plus a link to `assets/Parth-Goyal-CV.pdf`.
  Includes a "Copy-for-LLM" affordance. Orbis performance figures reserved for the PDF.
- **Posts** — standalone pages, e.g. `the-bitcoin-bubble.html`.

## Stack & deploy

- Plain HTML/CSS/JS (`style.css`, `site.js`), EB Garamond. No framework, no build.
- Deploy: commit + push to `main` → GitHub Pages publishes `ParthG60.github.io` at
  `parthgoyal.uk`.

## Connections

- Résumé content is downstream of the `~/cv/` build system — keep the PDF and on-page
  résumé in sync when the CV changes.
- Project/post pages link to the corresponding Substack pieces and, where relevant, the
  deployed dashboards (e.g. talent-misallocation).
