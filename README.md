# Fieldnote: SaaS landing page + UI kit

A landing page and reusable UI kit for **Fieldnote**, a fictional decision log for remote teams. Built as a portfolio piece to show web design, front-end and accessibility work.

> Fieldnote is not a real product. The people and decisions in the examples are made up.

## Pages
| Route | What it is |
|---|---|
| `/` | The landing page: hero, product facts, features, how it works, pricing, questions, call to action |
| `/kit` | The UI kit: every component, with notes on when to use it |
| `/tokens` | The design tokens: colour, type, spacing and shape |
| `/signup` | Placeholder where a waitlist form will go |

## Built with
- Next.js (App Router) and TypeScript
- Hand-written CSS Modules with design tokens as CSS custom properties (`src/styles/tokens.css`)
- Bricolage Grotesque and Literata, self-hosted with `next/font/local` (preloaded, with size-matched fallbacks so the page doesn't shift as fonts load)
- No UI framework, no CSS framework

## Accessibility
- Every text and UI colour pair meets WCAG 2.2 AA (`python scripts/contrast.py`)
- 0 automated violations (axe-core) on every page
- Full keyboard use with a visible focus ring, skip link, native `<details>` accordion
- The hero animation is the only automatic motion and is turned off for visitors who prefer reduced motion

## Run it locally
Needs Node.js 20.9 or newer.

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Project files
- `PLAN.md`: scope, design direction and progress
- `FIGMA-TOKENS.md`: the token table for Figma styles
- `src/components/`: UI kit components, one folder each
- `src/components/sections/`: landing page sections
