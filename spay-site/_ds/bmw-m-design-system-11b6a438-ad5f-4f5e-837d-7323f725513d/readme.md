# BMW M — Design System

A near-pure-black marketing surface for **BMW M**, the high-performance division of BMW. The system is built for editorial automotive pages: full-bleed photography of cars at speed, confident UPPERCASE headlines, and the signature **M tricolor** stripe used sparingly as a brand-identity marker.

> **Sources.** This system was authored from a written BMW M brand specification (colors, typography, layout, components, do's & don'ts). **No codebase, Figma file, or font binaries were attached.** Where the spec references real assets (BMW Type Next Latin, automotive photography, the BMW roundel), substitutions are documented below and flagged for the user to replace.

---

## ⚠️ Substitutions & caveats (please replace)

1. **Font — BMW Type Next Latin → Inter.** The real BMW typeface is licensed and was not provided. Per the brand spec, **Inter** (300 / 400 / 700) is the closest open-source substitute, loaded from Google Fonts. Display tracking is set to **−0.5px** (not 0) to approximate BMW Type's tighter spacing at large sizes. Drop real BMW Type Next Latin webfonts into `tokens/fonts.css`, keep the `--font-sans` token + the 300/400/700 cuts, and reset `--tracking-display` to `0`.
2. **Photography.** No licensed automotive imagery was provided. Full-bleed photo bands and photo cards use labelled dark placeholder blocks (`.m-photo-slot`) that mark where edge-to-edge car photography belongs and at what aspect ratio. Replace with real BMW M motorsport / cornering / cockpit / carbon-detail shots.
3. **BMW roundel logo.** The corporate BMW roundel is trademarked and was not provided. The nav logo is rendered as the **M tricolor stripe + "BMW M" wordmark** (which the spec documents as a system component). Add the real roundel SVG to `assets/` when available.
4. **Iconography.** No brand icon set was provided. The system substitutes **Lucide** (thin-stroke, outline) from CDN — the closest match to BMW M's minimal thin-line UI chrome. See ICONOGRAPHY.

---

## Brand context

BMW M is BMW's motorsport-born performance brand. Its marketing voltage comes almost entirely from **automotive photography**, not from UI decoration. The page floor is true black (`--color-canvas`, #000), type is white, and chrome stays minimal — thin sans-serif copy, 1px hairline dividers, all-caps letterspaced labels, flat rectangular buttons. The brand's only true decorative element is the **M tricolor stripe** (M Blue Light → M Blue Dark → M Red), reserved for brand-identity moments.

The system inverts almost nothing — there is **no light-mode marketing surface**.

---

## CONTENT FUNDAMENTALS

**Voice — engineered, confident, European.** Copy reads like precision engineering, not consumer-tech marketing. Short, declarative, unhurried.

- **Casing is a brand signal.** Display headlines (h1/h2) are **UPPERCASE** — `"THE ULTIMATE."`, `"MORE BMW M."`, `"MORE FROM BMW M MAGAZINE."`. Sentence-case display reads as off-brand. Body paragraphs and intro/lead copy stay **sentence-case**.
- **Labels are "machined."** Category tabs, button labels, and inline links are UPPERCASE with **1.5px letter-spacing** — `"VIEW ALL MODELS →"`, `"EXPLORE THIS MODEL →"`, `"READ MORE →"`. The chevron `→` follows most link labels.
- **Person.** Largely impersonal / product-forward ("The new BMW M5.", "510 hp."). Second person ("Drive an M.") appears on CTA bands. First person is essentially absent.
- **No emoji, ever.** The brand voice is engineered, not friendly-casual. Unicode is limited to the `→` chevron and `·` tab separators.
- **Numbers are heroes.** Specs (`0–100 km/h in 3.3s`, `625 hp`, `305 km/h`) are set in heavy display type as standalone callouts — the figures carry the marketing weight.
- **Tone discipline.** Don't over-explain. A model card is a name + one spec line + one link. Whitespace and a big photo do the persuading.

Example headline + sub pairing:
> **THE ULTIMATE DRIVING MACHINE.**
> The new BMW M5. Engineered without compromise.

---

## VISUAL FOUNDATIONS

**Color.** True-black canvas (`#000`) with white type. Surfaces step up in near-black increments — `surface-soft #0d0d0d` → `surface-card #1a1a1a` → `surface-elevated #262626` → `carbon-gray #2b2b2b`. There is **no brand color used as a fill** beyond these neutrals. The **M tricolor** (`#0066b1` → `#1c69d4` → `#e22718`) appears only as a 4px stripe / wordmark accent — never a button, never a background. A separate colder **electric-blue** (`#0653b6`) is reserved for M xDrive electric pages.

**Type.** Heavy display (700, UPPERCASE) against very light body (300, sentence-case). That weight gap is the editorial signature — never use 400 display or 500 body. Display sizes run 32–80px; body 14–16px Light.

**Backgrounds.** Pure black. **No gradients behind type, no atmospheric backdrops, no textures** (the one exception is the carbon-gray spec page, which carries a subtle fibre texture). Depth comes from **photography** — full-bleed cars, edge-to-edge, filling entire bands. Lighting in the photo (track lights, sunset rim-light) does the elevation work drop shadows would do in a SaaS system.

**Imagery vibe.** Cinematic, high-contrast automotive photography. Cars cornering at speed, carbon-fibre wheel detail, driver cockpits, motorsport pit lanes. Cinema aspect ratios (16:9 / 21:9) for action shots; 4:5 portrait for driver grids. Cars are always the subject; UI chrome backs off to small white overlay labels. Cool-to-neutral grade, never warm/cosy.

**Elevation & shadows.** **No drop shadows anywhere.** Depth = photography + the contrast between black canvas and a slightly-lighter `surface-card`. Cards are flat fills or hairline outlines.

**Borders.** 1px hairlines (`#3c3c3c`) as dividers between sections, around card outlines, between table rows. A stronger hairline (`#262626`) reads as a one-step elevation rather than an ink line.

**Corner radius.** Binary: **0px almost everywhere** (buttons, cards, photo containers, spec cells, inputs) — the rectangular silhouette IS the brand. The only exceptions: **`radius-full`** on circular icon buttons (carousel arrows, chatbot launcher) and **`radius-sm` (4px)** on a few configurator toggle pills. Nothing in between.

**Cards.** Flat. Either a `surface-card` fill or a 1px hairline outline — never both shadow + rounding. Photo cards keep sharp corners and edge-to-edge images. No left-border-accent cards.

**Spacing.** 4px base. `96px` between major bands, `64px` inside hero photo bands, `24–40px` inside cards/spec cells. Uniform, grid-aligned. Empty space stays as empty black canvas — never filled with decoration.

**Layout.** ~1440px max content width (wider than typical SaaS). 12-column editorial grid; photo bands bleed full-width with no max. Card grids 3-up desktop / 2-up tablet / 1-up mobile. **Band rhythm matters:** photo → spec table → photo → magazine grid → photo. Never two text-only bands in a row.

**Animation & states.** Timings are out of scope in the source spec; keep motion minimal and mechanical. Hover/press states are intentionally **not documented** in the brand spec (default + active only). In this system, interactive hovers use restrained treatments — button labels invert (transparent → white fill, or label brightens), category tabs reveal a 2px white underline, links nudge their chevron. No bounces, no scale-up flourishes.

**Transparency & blur.** Used only where a button or label sits over photography (transparent-background outline buttons; small white overlay captions). No frosted-glass panels system-wide.

---

## ICONOGRAPHY

No BMW M icon set was provided. UI chrome in the source is **minimal thin-line** iconography — search, account, language globe, chevrons, hamburger, share, favourite. The system substitutes **[Lucide](https://lucide.dev)** (outline, ~1.5–2px stroke) from CDN, the closest open match to BMW M's thin-stroke chrome. Load via `<script src="https://unpkg.com/lucide@latest"></script>` and `lucide.createIcons()`, or inline the SVGs.

- **Icon style:** outline / stroke, never filled, never duotone. White (`--color-on-dark`) on dark.
- **The chevron `→`** is the system's signature glyph — it follows nearly every text link.
- **The M tricolor stripe** functions as the brand's logo-mark in lieu of the roundel.
- **No emoji.** No unicode pictographs beyond `→` and `·`.

➡️ **Replace** with BMW's real licensed icon set when available; keep the thin-stroke / outline character.

---

## INDEX — what's in this folder

- **`styles.css`** — global entry point (consumers link this). `@import` lines only.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`. All CSS custom properties.
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- **`components/`** — reusable React primitives, grouped:
  - `core/` — `Button`, `IconButton`, `TextLink`, `MStripeDivider`, `BmwMLogo`, `Badge`
  - `forms/` — `TextInput`, `CategoryTabs`
  - `cards/` — `PhotoSlot`, `FeaturePhotoCard`, `ModelCard`, `SpecCell`
- **`ui_kits/marketing/`** — the BMW M marketing-site recreation (`index.html` + screen JSX).
- **`templates/m-homepage/`** — reusable homepage **template** (`MHomepage.dc.html`) consuming projects can copy as a starting point; composes the system's primitives via `ds-base.js`.
- **`SKILL.md`** — Agent-Skill manifest for downloadable use.

**Namespace** (for `@dsCard` HTML and `<x-import component-from-global-scope="…">`): `window.BMWMDesignSystem_11b6a4`.
