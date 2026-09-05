# SPay website — source export

## Contents
- `SPay Homepage.dc.html`, `SPay About.dc.html`, `SPay How It Works.dc.html`, `SPay Card.dc.html`, `SPay Contact.dc.html` — the pages. Each is a standalone HTML file: open directly in a browser (or serve the folder) and it renders.
- `SPay Website.dc.html` — multi-page shell.
- `responsive.css` — all tablet (≤1080px) and mobile (≤700/500px) overrides, plus the 1081–1400px header/journey fixes. Loaded by every page.
- `support.js` — runtime that renders the page templates. Keep it next to the pages.
- `assets/` — images and logo.
- `_ds/` — design-system tokens and stylesheets referenced by the pages.

## Running locally
Any static server works, e.g.:

    python3 -m http.server 8000

Then open `http://localhost:8000/SPay%20Homepage.dc.html`.

## Porting into your own codebase
The markup inside each page's `<x-dc>` block is plain HTML with inline styles — copy a section straight into your framework's component and it keeps its look. Two things travel with it:

1. `responsive.css` — the breakpoints rely on the `data-r="…"` hooks (`hero-art`, `section-art`, `bleed`, `hdr-nav`, `hdr-cta`, `botnav`, …) and on section ids (`#top`, `#rewards`, `#features`, `#personalise`, `#wallet`, `#verification`, `#journey`, `#borderless`). Keep those attributes on the elements you port, or the responsive rules will not apply.
2. `assets/` paths are relative — adjust to your asset pipeline.

`data-reveal="left|right|up"` drives the scroll-in animation; drop the attribute if you do not want it.
