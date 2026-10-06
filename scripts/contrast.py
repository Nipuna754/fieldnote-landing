"""WCAG 2.x contrast checker for the Fieldnote palette.

Usage: python3 -I contrast.py
Prints each text/background pair with its ratio and PASS/FAIL against its target
(4.5 for normal text, 3.0 for large text and UI boundaries).
"""

PALETTE = {
    "ink": "#1B2430",
    "ink-muted": "#4A5560",
    "paper": "#F3F5F2",
    "surface": "#FBFCFA",
    "wash": "#E3EBE7",
    "spruce": "#0E4A44",
    "spruce-hover": "#0A3A35",
    "amber": "#F2B33D",
    "amber-hover": "#F6C766",
    "rule": "#C9D1CC",
    "rule-strong": "#7D8A84",
    "brick": "#B3392F",
}

# (foreground, background, target ratio, what it is)
PAIRS = [
    ("ink", "paper", 4.5, "body text on page"),
    ("ink", "surface", 4.5, "body text on panel"),
    ("ink-muted", "paper", 4.5, "secondary text on page"),
    ("ink-muted", "surface", 4.5, "secondary text on panel"),
    ("ink-muted", "wash", 4.5, "secondary text on wash"),
    ("paper", "spruce", 4.5, "primary button text"),
    ("paper", "spruce-hover", 4.5, "primary button text, hover"),
    ("ink", "amber", 4.5, "text on amber highlight"),
    ("ink", "amber-hover", 4.5, "amber button text, hover"),
    ("amber", "spruce", 3.0, "amber button against spruce band"),
    ("paper", "spruce", 3.0, "focus ring on spruce band"),
    ("spruce", "paper", 4.5, "link text on page"),
    ("spruce", "surface", 4.5, "link text on panel"),
    ("brick", "paper", 4.5, "error text on page"),
    ("brick", "surface", 4.5, "error text on panel"),
    ("spruce", "paper", 3.0, "focus ring against page"),
    ("spruce", "amber", 3.0, "focus ring against amber"),
    ("rule-strong", "paper", 3.0, "input border against page"),
    ("rule-strong", "surface", 3.0, "input border against panel"),
]


def channel(c: int) -> float:
    s = c / 255
    return s / 12.92 if s <= 0.03928 else ((s + 0.055) / 1.055) ** 2.4


def luminance(hex_color: str) -> float:
    h = hex_color.lstrip("#")
    r, g, b = (int(h[i : i + 2], 16) for i in (0, 2, 4))
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)


def ratio(fg: str, bg: str) -> float:
    a, b = luminance(fg), luminance(bg)
    hi, lo = max(a, b), min(a, b)
    return (hi + 0.05) / (lo + 0.05)


def main() -> int:
    failures = 0
    for fg, bg, target, label in PAIRS:
        r = ratio(PALETTE[fg], PALETTE[bg])
        ok = r >= target
        failures += 0 if ok else 1
        print(f"{'PASS' if ok else 'FAIL'}  {r:5.2f}:1 (need {target})  {fg} on {bg}  {label}")
    print(f"\n{len(PAIRS) - failures}/{len(PAIRS)} pairs pass")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
