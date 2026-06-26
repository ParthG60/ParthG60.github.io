# Personal website

Static site at **parthgoyal.uk** (custom domain via `CNAME`), hosted on **GitHub Pages**
from `github.com/ParthG60/ParthG60.github.io`.

- **No build step.** Plain HTML/CSS/JS edited directly. Deploy = push to `main`; Pages
  serves it automatically.
- Pages: `index.html` (About), `projects.html` (Writing & Projects), `resume.html`
  (on-page résumé + PDF link), plus post pages like `the-bitcoin-bubble.html`.
- Shared: `style.css`, `site.js`. Fonts: EB Garamond.
- `assets/` holds the CV PDF and dissertation PDF (large) and `favicon.svg`.

The on-page CV mirrors the `~/cv/` build output — when the CV changes, update
`assets/Parth-Goyal-CV.pdf` and the `resume.html` body together.

Prose on the site is reader-facing: apply the writing preferences in ~/.claude/CLAUDE.md.
