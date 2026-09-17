# Canna Blooms — Location Landing Page

A production-ready Next.js (App Router + TypeScript + SCSS) landing page for
Canna Blooms, a New York State licensed cannabis dispensary with locations in
Farmingville, Queens and Vestal. Design structure is modeled on the CanRealm
NY Shop reference; all branding, copy, and business data are Canna Blooms' own.

## Scroll animation & hover effects

- **Scroll reveal**: `components/ScrollReveal.tsx` is a small client component
  using `IntersectionObserver` to fade + slide each below-the-fold section up
  into place the first time it scrolls into view (`app/page.tsx` wraps every
  section from `RatingStrip` down through `Footer` in it; the `Hero` is
  visible on first paint, so it's intentionally left out). The animation
  itself is plain CSS (`.reveal` / `.reveal--visible` in `styles/style.scss`)
  and respects `prefers-reduced-motion`.
- **Hover effects**: buttons lift and gain a soft shadow, all card types
  (location cards, info cards, neighborhood cards, review cards) lift
  slightly with a brightened border/shadow on hover, and FAQ questions turn
  green on hover — all defined via the `card-hover` mixin in
  `styles/_mixins.scss` plus the individual component blocks in
  `styles/_components.scss`.

## Icons

All icons (location pin, clock, phone, star rating, FAQ plus/close) use
[`react-icons`](https://react-icons.github.io/react-icons/) (`Fi*` / `Fa*`
sets) as real SVG components — there are no emoji or Unicode glyph
characters anywhere in the UI.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Where everything lives

- **All page content is data-driven from one file: `data/siteData.json`.**
  Edit that file to change any text, location info, hours, FAQs, footer copy,
  or SEO metadata — no component code needs to change.
- `components/` — one component per section, matching the CanRealm NY Shop
  reference's structure: `Hero` (includes the Canna Blooms logo at the top
  of the composition, then eyebrow → heading → description → CTA → the
  location cards, embedded directly beneath the CTA exactly as CanRealm
  does it — no separate "store locations" heading), `RatingStrip`,
  `Neighborhoods`, `OpeningHours`, `GettingHere`, `BeforeVisit`, `Licensing`,
  `GoogleReviews`, `FirstVisit`, `FAQ`, `TrustSection`, `Footer`. `TopBar` is
  the thin dark 21+/legal strip at the very top. There is intentionally
  **no separate nav/logo header bar** between the top strip and the hero —
  the CanRealm reference doesn't have one.
- Styling is **SCSS** (`styles/`), imported once via `app/layout.tsx`:
  - `style.scss` — entry point
  - `_variables.scss` — the centralized design tokens: brand colors,
    `$container-width` (1200px), spacing scale, radius, breakpoints
  - `_mixins.scss` — container, card, section-heading, button, focus-ring
  - `_responsive.scss` — shared 3-col / 4-col grid mixins
  - `_components.scss` — top bar, hero, location cards, rating strip,
    info cards, review cards, accordion, trust box, footer
  - `_sections.scss` — generic section wrapper/heading/grid rules
- `app/layout.tsx` — root layout, wires up the Next.js Metadata API from
  `siteData.json.seo`.
- `app/page.tsx` — assembles every section in order, matching the CanRealm
  page's section order exactly (no sections added or removed).
- `lib/types.ts` — TypeScript shape of `siteData.json`.
- `lib/data.ts` — single import point (`siteData`) used by every component.
- `public/images/canna-blooms-logo.webp` — the Canna Blooms logo, used in
  the **Hero** (top of the composition) and again, smaller, in the Footer.

## Footer note

The footer's column links (Shop / About / Help / Guides), tagline, giant
"CANNA.BLOOMS" wordmark, legal links and disclaimer text are all sourced
from Canna Blooms' own real privacy-policy page footer (verified from the
uploaded screenshot) — not invented, and not copied from CanRealm. Update
`data/siteData.json` → `footer` to change any of it.

## Data notes / what's configurable

Per-location `phone` and `license` fields, and per-review `location` tags,
are intentionally left as empty strings in `siteData.json` because that exact
information wasn't available from the supplied source material. Fill them in
directly in the JSON — nothing else needs to change. Section copy was written
to avoid asserting anything (e.g. Sunday hours, exact license numbers) that
isn't verifiable from the supplied Canna Blooms content.

## Content verified against

- Uploaded Canna Blooms homepage / privacy policy screenshots
- Uploaded Canna Blooms logo
- Uploaded `new_york_zip_codes.csv` (drives the "Neighborhoods We Serve" data)
- CanRealm NY Shop screenshot (layout/structure reference only — no CanRealm
  branding, copy, or business data appears anywhere in this project)

## QA checklist (all pass in this build)

- `npm run build` and `tsc --noEmit` complete with zero errors/warnings
- No hardcoded business content inside components — everything reads from
  `data/siteData.json`
- Section order and count match the CanRealm NY Shop reference exactly —
  nothing added, nothing removed
- Canna Blooms logo renders inside the Hero (top of composition) and in
  the Footer, at correct aspect ratio (400×267 source), no stretching
- Each of the 3 locations has its own `visitUrl`, defined in JSON
- FAQ is a plain question-list accordion (no card backgrounds), keyboard
  accessible and ARIA-correct
- Hero "Find Your Location" CTA is a plain anchor link to `#store-locations`
  (native smooth scroll via `scroll-behavior: smooth` in `style.scss`)
- Design tokens are centralized in `styles/_variables.scss`
  (`$container-width`, `$primary-green`, `$dark-green`, `$cream`,
  `$radius-md`, spacing scale, breakpoints)
- Responsive grids collapse from 3/4 columns → 2 → 1 on smaller viewports
- Styling is SCSS throughout (no Tailwind, no other CSS framework)
- No CanRealm branding, text, or business data anywhere in the project
