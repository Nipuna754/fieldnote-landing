import localFont from "next/font/local";

/*
  Self-hosted variable fonts (SIL Open Font License, see src/fonts/).
  next/font preloads them and sizes a matching fallback font, so the page
  doesn't shift when the real fonts arrive.
*/

export const displayFont = localFont({
  src: "../fonts/bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-display-face",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const readingFont = localFont({
  src: "../fonts/literata-latin-wght-normal.woff2",
  weight: "200 900",
  variable: "--font-reading-face",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
