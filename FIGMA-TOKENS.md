# Fieldnote tokens for Figma

Paste these into Figma as local styles/variables so the design and the code share one source. Code lives in `src/styles/tokens.css`.

## Colour (Figma variables, collection "Colour")
| Name | Hex | Use |
|---|---|---|
| ink | #1B2430 | Text |
| ink-muted | #4A5560 | Secondary text |
| paper | #F3F5F2 | Page background |
| surface | #FBFCFA | Panels |
| wash | #E3EBE7 | Hover, quiet fills |
| spruce | #0E4A44 | Primary buttons, links |
| spruce-hover | #0A3A35 | Primary hover |
| amber | #F2B33D | "Decided" highlight (fill, dark text on top); button on the spruce band |
| amber-hover | #F6C766 | Amber button, hover |
| rule | #C9D1CC | Dividers |
| rule-strong | #7D8A84 | Input borders |
| brick | #B3392F | Errors |

All text pairs pass WCAG AA (run `python3 -I scripts/contrast.py`).

## Text styles
Display and interface: **Bricolage Grotesque**. Reading text: **Literata**. Both are free on Google Fonts.

| Style | Family | Weight | Size (360px / 1280px) | Line height | Tracking |
|---|---|---|---|---|---|
| Display (h1) | Bricolage Grotesque | 700 | 44 / 84 | 104% | -2% |
| Heading 2 | Bricolage Grotesque | 700 | 34 / 56 | 104% | -2% |
| Heading 3 | Bricolage Grotesque | 700 | 26 / 36 | 104% | -2% |
| Heading 4 | Bricolage Grotesque | 700 | 21 | 104% | -2% |
| Body | Literata | 400 | 17 | 165% | 0 |
| Small | Literata | 400 | 15 | 165% | 0 |
| Caption | Literata | 400 | 13 | 165% | 0 |
| Button / label | Bricolage Grotesque | 600 | 15 | 130% | 0 |

Keep reading text to about 62 characters per line (roughly 560px at 17px).

## Spacing (4px base)
4, 8, 12, 16, 24, 32, 48, 72, 112

## Radius
- Tag, input: 3px
- Button: 8px
- Panel: 14px

## Borders and focus
- Divider: 1px, `rule`
- Input border: 1px, `rule-strong`
- Focus ring: 3px `paper` gap, then 3px `spruce`

## Layout
- Page width 1152px max, side margin 16px on phone growing to 40px on desktop
- Frames to design: 360, 768, 1280
