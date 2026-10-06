# PLAN.md: App 1, SaaS landing page + UI kit ("Fieldnote")

## Who it's for
Upwork clients who hire for landing pages, front-end builds and UI kits. This is the portfolio piece that proves: web design, front-end, UX/UI, accessibility (WCAG AA).

## What it is
A landing page for a made-up product, **Fieldnote**: a shared decision log for remote teams (what was decided, by whom, when, and why). Plus a small reusable UI kit built from the same design tokens, shown on a `/kit` page.

The product is fictional on purpose: no client name, no real brand, nothing to clear.

## What it stores
Nothing. Static site: no database, no log-in, no payments. Those steps from the video workflow are skipped for this app.

## Steps (same order as the videos)
| Step | This app |
|---|---|
| 1. Plan | This file. Approve before building. |
| 2. Front end | Tokens, UI kit, `/kit` page, landing page sections, run on localhost:3000 |
| 3. Back end | Skipped |
| 4. Log-in | Skipped |
| 5. Payments | Skipped |
| 6. Go live | Push to GitHub, deploy on Vercel (free), final QA on the live link |

## Tech
- Next.js (App Router, TypeScript), already scaffolded
- Hand-written CSS with design tokens as CSS custom properties (matches how you already work; no Tailwind)
- Fonts self-hosted with next/font/local (preloaded, size-matched fallbacks, no Google request at build time)
- Vercel for hosting. No secret keys are needed, so no `.env` yet.

## Design direction
- **Hero:** shows the product itself, a decision log writing in entry by entry. That is the one memorable thing and the only non-user-triggered motion on the page.
- **Color:** ink `#1B2430`, paper `#F3F5F2` (cool grey-green, not cream), spruce `#0E4A44` (primary), amber `#F2B33D` (the "Decided" highlight, used as a fill with dark text), rule `#C9D1CC`. Error: brick `#B3392F`. All text pairs checked against WCAG AA by script.
- **Type:** two clearly different families. Display and UI: Bricolage Grotesque. Reading text: Literata (serif, more line-height). Lines under 75 characters.
- **Layout:** left-aligned, asymmetric 12-column grid. Features as ruled rows, not a grid of identical cards. Numbers only on "How it works" because that really is a sequence.
- **Shape:** borders instead of shadows. Radius changes with hierarchy: 3px tags and inputs, 8px buttons, 14px panels.
- **Avoid:** cream + terracotta, black + neon accent, all-caps eyebrow labels, arrows on buttons, one accented word in headlines.
- **Motion:** hero log only, off when the visitor prefers reduced motion.

## Page sections (landing page)
1. Nav
2. Hero (headline, one line of copy, one button, the live log)
3. Proof strip (three plain claims, no fake logos)
4. What it does (4 ruled rows)
5. How it works (3 numbered steps: capture, decide, find)
6. Pricing (3 tiers, one clearly recommended)
7. Questions (accordion, keyboard accessible)
8. Final call to action
9. Footer

## UI kit (shown on `/kit`)
Button (primary, secondary, quiet), Badge, Input with label and error state, Card/Panel, Accordion, Nav, Footer, Section wrapper, DecisionLog.

## Build order inside Step 2
1. Tokens and global CSS
2. Fonts
3. UI kit components + `/kit` page
4. Hero
5. Remaining sections, one at a time
6. Responsive pass (360px, 768px, 1280px)
7. Accessibility pass (contrast script, keyboard-only walkthrough, Lighthouse)

## Figma
The case study should honestly say "designed in Figma, built in Next.js." Open item for you: either design the hero and kit in Figma using the tokens above, or pick a free community SaaS file. I'll supply a token table you can paste into Figma styles so the design and code share one source.

## Done when
- Matches the Figma frames closely at 360 / 768 / 1280 px
- Lighthouse accessibility 90 or higher, visible keyboard focus everywhere, reduced motion respected
- Live on Vercel, public GitHub repo
- Case study written (Problem / Solution / Tech / Result), demo video and screenshots saved

## Progress
- [x] Step 1: Plan
- [x] Step 2.1: Tokens, fonts, base styles (`/tokens`)
- [x] Step 2.2: UI kit components (`/kit`). axe: 0 violations on /, /kit, /tokens
- [x] Step 2.3: Hero (headline, pitch, animated log). axe: 0 violations; checked at 390 / 768 / 1280
- [x] Step 2.4: Remaining sections (proof strip, features, how it works, pricing, questions, final CTA) + `/signup` placeholder for the future waitlist form. axe: 0 violations on all 4 pages
- [x] Step 2.5: Responsive and accessibility pass. Lighthouse mobile: performance 97-99, accessibility 100, best practices 100, SEO 100 (/signup is noindex on purpose). Desktop: 100 across the board. Layout shift 0 on every page. Keyboard walkthrough: 22 stops, all with focus ring. No overflow at 320 / 360 / 768 / 1024 / 1280
- [x] Step 6: Go live. GitHub: https://github.com/Nipuna754/fieldnote-landing. Live: https://fieldnote-landing-one.vercel.app (all 4 pages load, links work, unknown pages return 404, /signup is noindex)
- [x] Motion pass: hero entrance, scroll reveals (CSS scroll-driven, no JavaScript), step bars draw in, hover lift on buttons and pricing cards, feature row underline, smooth accordion, nav underline, pulse on the open decision. All off for reduced motion. Lighthouse unchanged (mobile 97/100/100/100, desktop 100), CLS 0, axe 0 violations
- [ ] Upwork portfolio entry (images in hand, text drafted)
