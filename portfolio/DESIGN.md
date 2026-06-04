# Design

## Mood

Precision instrument on a lacquered surface. A senior engineer's portfolio — dark, considered, warm at the edges. The gold accent is brass hardware, not highlight reel. Authoritative without being cold.

## Color Palette

All colors in OKLCH.

| Role      | Token              | Value                        | Notes |
|-----------|--------------------|------------------------------|-------|
| bg        | `--lacquer`        | `oklch(7% .006 95)`          | Near-black, slight warm cast |
| bg-deep   | `--lacquer-deep`   | `oklch(4% .004 95)`          | Deepest surface, hero bg |
| bg-raised | `--lacquer-raised` | `oklch(11% .006 95)`         | Cards, panels |
| surface   | `--graphite`       | `oklch(15% .008 95)`         | Section alternates |
| surface-2 | `--graphite-2`     | `oklch(19% .008 95)`         | Code bg, nested cells |
| ink       | `--text`           | `oklch(100% 0 0)`            | Body text on dark bg |
| ink-muted | `--text-muted`     | `oklch(70% 0 0)`             | Secondary text |
| ink-faint | `--text-faint`     | `oklch(56% 0 0)`             | Labels, captions |
| champagne | `--champagne`      | `oklch(93% 0 0)`             | Headings, near-white |
| primary   | `--kinpaku`        | `oklch(84% .19 80.46)`       | Warm gold — CTAs, eyebrows, accents |
| primary-p | `--kinpaku-pale`   | `oklch(86% .07 84)`          | Hover state |
| primary-r | `--kinpaku-rich`   | `oklch(77% .13 82)`          | Work card bar, diamonds |
| accent    | `--patina`         | `oklch(70% .12 188)`         | Teal — links, company names |
| accent-p  | `--patina-pale`    | `oklch(82% .07 188)`         | Link hover |
| rule      | `--rule`           | `oklch(78% 0 0 / .13)`       | Default dividers |
| rule-warm | `--rule-warm`      | `oklch(78% .08 80 / .18)`    | Warm borders, section dividers |

**Button text rule:** `--kinpaku` (L 0.84, chroma 0.19) is a bright mid-luminance saturated fill — use `--lacquer-deep` (dark text) on primary buttons, not white. This is the exception to the white-on-saturated default because the gold is perceptually very light.

## Typography

### Font Stack

| Role    | Family                                          | Usage |
|---------|-------------------------------------------------|-------|
| Display | `Alumni Sans Pinstripe`, `Albert Sans`, Arial   | h1, h2, footer wordmark, stat numbers |
| Body    | `Albert Sans`, `Avenir Next`, Helvetica, system | Body copy, h3, buttons, nav |
| Mono    | `JetBrains Mono`, `SFMono-Regular`, Consolas    | Eyebrow labels, chips, metadata, timeline dates |

### Type Scale

| Role       | Size                              | Weight | Line | Tracking  |
|------------|-----------------------------------|--------|------|-----------|
| Display    | `clamp(3.2rem, 6.5vw, 5.6rem)`    | 300    | 1.02 | `-0.01em` |
| Headline   | `clamp(2rem, 3.6vw, 3rem)`        | 600    | 1.06 | `-0.005em`|
| Title/h3   | `1.08rem`                         | 500    | 1.35 | none      |
| Body       | `1.02rem`                         | 400    | 1.8  | `0.01em`  |
| Eyebrow    | `0.68rem`                         | 400    | 1    | `0.28em`  |
| Mono label | `0.62–0.70rem`                    | 400    | —    | `0.10–0.18em` |

Eyebrows always uppercase. Body line length capped at ~65ch via `maxWidth` on prose containers.

## Components

### Buttons

```css
.ks-btn {
  min-height: 52px;
  padding: 0 28px;
  border-radius: 2px;
  font-size: .95rem;
  font-weight: 500;
  transition: transform .18s var(--ease), background .18s var(--ease);
}
/* Primary: gold fill, dark text */
.ks-btn-primary { background: var(--kinpaku); color: var(--lacquer-deep); }
/* Ghost: transparent, warm border */
.ks-btn-ghost   { border: 1px solid var(--rule-warm); color: var(--champagne); }
```

Hover lifts by `translateY(-1px)`. No shadow on hover.

### Cards

```css
.ks-card {
  background: var(--lacquer-raised);
  border: 1px solid var(--rule);
  border-radius: 3px;
  padding: 32px;
  transition: border-color .2s, box-shadow .2s;
}
.ks-card:hover {
  border-color: var(--rule-warm);
  box-shadow: 0 8px 40px oklch(0% 0 0 / .5);
}
```

Work cards add a 2px top gradient bar: `linear-gradient(90deg, var(--kinpaku-rich), transparent)`.

### Chips / Tags

```css
.ks-chip {
  font-family: var(--mono);
  font-size: .62rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 2px;
  border: 1px solid var(--rule-warm);
  color: var(--text-faint);
  background: var(--graphite);
}
```

### Eyebrow Labels

Mono font, 0.28em tracking, uppercase, `--kinpaku` color. Used as section identifiers above every h2. Never body copy — max 4 words.

### Stats Grid

Tight grid with 1px `--rule` borders forming a table. Numbers in display font weight 600, labels in mono 0.62rem uppercase.

## Layout

- Full-width sections, no sidebar or nav-rail
- `max-width: 1320px` container, `padding: 100px clamp(22px, 4vw, 64px)` per section
- Sections separated by `border-top: 1px solid var(--rule-warm)`
- Two-column grids: `repeat(auto-fit, minmax(300px, 1fr))`
- Timeline: `grid-template-columns: 200px 1fr`, collapses to single column at 768px

## Motion

- Easing: `cubic-bezier(.2, .8, .2, 1)` — ease-out-quint feel
- Duration: `.18s` micro (buttons, borders), `.2s` cards
- Hover lift: `translateY(-1px)` on buttons only
- No entrance animations currently — add scroll-triggered reveals with `@media (prefers-reduced-motion: no-preference)` guard if added

## Texture

- Grain overlay: fixed SVG `feTurbulence` at `opacity: 0.038`, `mix-blend-mode: overlay` — adds materiality without visible noise
- Header blur: `backdrop-filter: blur(18px) saturate(1.2)` on sticky nav

## Spacing

Base unit: 4px. Common steps: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 100, 110.

## Do / Don't

**Do:** Use kinpaku sparingly — eyebrows, CTAs, one accent rule per card. Too much gold loses its weight.

**Don't:** Light backgrounds on any section. The dark lacquer is load-bearing identity; a single "light section" break would clash.

**Do:** Keep eyebrow labels under 4 words. They are wayfinding, not headlines.

**Don't:** Add a second display font. Alumni Sans Pinstripe is already distinctive; a third typeface would compete, not enrich.
