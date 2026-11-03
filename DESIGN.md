---
name: Костя Тракторёнок — Monitoring Console Portfolio
description: A junior frontend portfolio built as its own developer tooling — a Better Stack-style monitoring console.
colors:
  bg: "#08080a"
  bg-elev: "#0d0d10"
  panel: "#121216"
  panel-2: "#17171c"
  panel-3: "#1d1d23"
  border: "#26262c"
  border-soft: "#1b1b20"
  border-strong: "#35353d"
  text: "#ececee"
  text-dim: "#a0a0a8"
  text-mute: "#82828c"
  white: "#ffffff"
  ink: "#0a0a0b"
  live: "#3ecf8e"
  live-dim: "#2fa473"
typography:
  display:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.3rem, 6.4vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "var(--font-geist-mono), ui-monospace, 'SF Mono', 'Cascadia Code', monospace"
    fontSize: "0.74rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.08em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "0.4rem"
  sm: "0.7rem"
  md: "1rem"
  lg: "1.3rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.62rem 1.1rem"
  button-primary-hover:
    backgroundColor: "#f1f1f3"
  button-ghost:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0.62rem 1.1rem"
  button-ghost-hover:
    backgroundColor: "{colors.panel-2}"
  chip:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.sm}"
    padding: "0.28rem 0.6rem"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.3rem"
---

# Design System: Костя Тракторёнок — Monitoring Console Portfolio

## Overview

**Creative North Star: "The Live Monitoring Console"**

The portfolio is built as a piece of the candidate's own developer tooling: a monochrome, near-black observability console in the Better Stack idiom. The ground is almost pure black (#08080a), structure is drawn with hairline borders rather than fills, and the entire surface reads as an operations dashboard where every panel is a status readout. The one idea it owns: deployed projects are rendered as *live monitors* — each one "operational", linkable, and observable right now.

Density is high and composed: content-height sections (not forced 100vh), hairline-ruled rows, and data expressed in monospace give the feel of a working instrument rather than a marketing page. Colour is withheld almost entirely. A single operational-green signal (#3ecf8e) carries all the meaning — availability and live status — and nothing else borrows it. The rest is neutral greys and one white primary action. Depth is quiet: a faint overhead radial light and a signature inset top-highlight on raised surfaces, never heavy drop shadows as decoration.

This world explicitly refuses the prior editorial "stack of sheets" treatment and the generic neon-glow dark hero. It is not a themed skin; it is a console whose vocabulary (status dots, mono metric labels, hairline rows, a white CTA pill) remains recognizable with all content removed.

**Key Characteristics:**
- Monochrome near-black ground built from layered neutral panels, not flat black.
- Hairline borders as the primary structural device; fills are secondary.
- Exactly one signal colour — operational green — reserved for live/available state.
- Geist for everything; Geist Mono for all data, labels, metadata, and metrics.
- Signature live-monitor "come online" scan sweep, fully disabled under reduced motion.
- WCAG 2.2 AA, themed browser surfaces, and reduced-motion support are part of the system.

## Colors

A near-monochrome neutral field layered dark-to-light, punctuated by exactly one green signal and one white action.

### Primary
- **Operational Green** (#3ecf8e): The single signal colour. Used strictly for live-status dots, the "Доступен" (available-for-hire) chip, the current/active timeline phase, live rows in the About console, and the LIVE label on monitors. Never used for decoration, borders, or ordinary emphasis. Deep Green (#2fa473) is its dimmed partner; `rgba(62,207,142,0.14)` is its soft halo for dot glows and scan sweeps.

### Neutral
- **Console Black** (#08080a): The base page ground (`--bg`). Elevated ground (#0d0d10) is a barely-lighter step used sparingly.
- **Panel Greys** (#121216 / #17171c / #1d1d23): The three-step raised-surface ramp (`--panel` / `--panel-2` / `--panel-3`). Panel is the default card/monitor fill; Panel-2 is hover and featured state; Panel-3 is the recessed preview well.
- **Hairline Borders** (#26262c / #1b1b20 / #35353d): Standard border, soft internal rule, and strong/hover border respectively. The soft rule divides rows inside a panel; the strong border marks hover and emphasis edges.
- **Text Ramp** (#ececee / #a0a0a8 / #82828c): Primary text, dimmed body/secondary, and muted metadata/labels (`--text` / `--text-dim` / `--text-mute`).
- **Signal White** (#ffffff) on **Ink** (#0a0a0b): The white primary pill and its near-black text; the one high-contrast action surface.

### Named Rules
**The One Signal Rule.** Operational green appears only where it reports real operational truth — live status, availability, the active phase. If green would be decoration, it is wrong. Everything expressive is carried by neutrals and the white action instead.

## Typography

**Display / Body Font:** Geist Sans (via the `geist` package, self-hosted, Cyrillic-capable; falls back to -apple-system, Segoe UI, Roboto).
**Label/Mono Font:** Geist Mono (falls back to ui-monospace, SF Mono, Cascadia Code).

**Character:** Geist is a clean, engineering-flavoured grotesque; paired with Geist Mono it reads as developer tooling. The division of labour is strict: Sans for prose and headlines, Mono for anything that is data.

### Hierarchy
- **Display** (600, clamp(2.3rem → 4.4rem), lh 1.1, tracking -0.035em): The hero H1 only, capped ~17ch with balanced wrapping.
- **Headline** (600, clamp(1.5rem → 2.1rem), lh 1.1, tracking -0.03em): Section titles; the contact card headline runs slightly larger (clamp 1.7rem → 2.6rem).
- **Title** (600, ~1.2rem, tracking -0.02em): Monitor / card / timeline headings.
- **Body** (400, 16px base, lh 1.6): Prose and summaries in dimmed text, constrained to 44–65ch.
- **Label** (500, ~0.72–0.78rem, tracking 0.08em, often UPPERCASE): Geist Mono. All metadata, metric labels, console bars, status chips, timeline phases, footer.

### Named Rules
**The Mono-Means-Data Rule.** Geist Mono is reserved for machine-readable content — labels, metrics, endpoints, timestamps, stack tags, status text. If text is prose a human reads in sentences, it is Geist Sans. The mono/sans split is how the console signals "this is a readout".

## Layout

A single centered column, max-width 1080px (`--maxw`), with fluid inline padding `clamp(1.1rem, 4vw, 2rem)`. Sections use fluid vertical rhythm `padding-block: clamp(3.5rem, 8vw, 6.5rem)` and are sized to content, not viewport. Section heads are a baseline-aligned flex row (title left, lead right, max 44ch) that wraps on narrow screens.

Internal composition is grid-driven: the About block is a 1.5fr/1fr text-plus-console split collapsing to one column ≤820px; monitors are a 1fr / minmax(260px,360px) content-plus-preview split that stacks (preview first) ≤760px; the timeline and case blocks use fixed label columns (112px / 96px) that collapse to a single column on small screens. Skills use an auto-fit grid of minmax(230px,1fr) cards. Breakpoints observed: 820px, 760px, 600px, 560px, 520px. The nav hides ≤760px.

## Elevation & Depth

Depth is atmospheric and minimal, not shadow-stacked. The page carries a faint fixed overhead radial light (`radial-gradient` top-center, white at ~4.5% opacity) that gives the black ground a sense of space without a decorative grid. Raised surfaces are lifted almost entirely by a 1px top edge-highlight plus their hairline border; a single soft ambient shadow underlines larger panels. Buttons carry a signature inset bright top-line.

### Shadow Vocabulary
- **Edge Top** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.055)`): The default lift for dark panels, cards, chips, and ghost buttons. A hairline of light along the top edge, Better Stack's signature.
- **Ambient Raise** (`box-shadow: 0 10px 30px rgba(0,0,0,0.5)`): Combined with Edge Top on the larger structural panels (console card, monitors, timeline, contact card, preview well).
- **Button Highlight** (`box-shadow: 0 1px 0 rgba(255,255,255,0.45) inset, 0 6px 20px rgba(0,0,0,0.45)`): The white primary pill's bright inset top-line plus soft drop — what makes the CTA read as a physical key.

### Named Rules
**The Edge-Not-Drop Rule.** Surfaces are lifted by a top edge-highlight and a hairline border first; ambient drop shadow is added only on the few large structural panels. Shadow is never used as decoration or hover flourish — hover shifts border and background, not elevation.

## Shapes

A graduated radius scale: 4px (`--r-xs`, small inline flags/focus), 6px (`--r-sm`, chips, nav items, skip link), 8px (`--r-md`, the default for panels/cards/monitors/previews), 12px (`--r-lg`, the contact card only), and full pill (999px) for buttons and status chips. The form language is rectangular panels with gently softened corners, divided internally by hairline rules; pills are reserved for actions and status badges. Small status markers are tiny squared dots (border-radius 1–2px) for metric facts and timeline phases, versus true circles (border-radius 50%) for live-status dots — squared = static datum, round = live signal.

## Components

### Buttons
- **Shape:** Full pill (999px), inline-flex with a leading icon slot; base padding 0.62rem 1.1rem, large variant 0.78rem 1.4rem.
- **Primary:** White (#ffffff) surface, Ink (#0a0a0b) text, carrying the Button Highlight shadow. Hover lightens to #f1f1f3 and lifts translateY(-1px); active returns to 0. This is the Telegram CTA, repeated in the hero and top-right nav.
- **Ghost:** Panel (#121216) surface, hairline border, text colour, Edge Top highlight. Hover shifts border to strong and background to Panel-2. Used for secondary actions ("Проекты →", secondary contacts).

### Chips
- **Style:** Geist Mono ~0.74rem, dimmed text on Panel fill with a hairline border, 6px radius. Carries stack tags and inline data.
- **Status chip:** A pill variant with Edge Top highlight and a pulsing green status dot, used for availability.

### Cards / Containers
- **Corner Style:** 8px (contact card 12px).
- **Background:** Panel (#121216); hover and featured states go to Panel-2 (#17171c).
- **Shadow Strategy:** Edge Top always; Ambient Raise added on the larger panels (see Elevation).
- **Border:** 1px hairline (#26262c); internal rows divided by the soft rule (#1b1b20).
- **Internal Padding:** ~1.3rem on skill cards; fluid clamp on monitors and the contact card.

### Navigation
- **Style:** Sticky top bar, 60px tall, translucent (`color-mix` bg at 78%) with a 14px backdrop blur and a soft bottom hairline. Brand is a mono logotype with a small pulsing status dot. Nav links are dimmed text, ~0.88rem, with 6px-radius hover that lightens text and adds a Panel-2 background. Hidden ≤760px.

### Live Monitor (signature)
Projects render as monitor rows inside a single bordered panel. Each row shows a mono meta line (status dot · LIVE label in green · endpoint host · optional FLAGSHIP flag), a title, a summary, a hairline-ruled case block (Задача / Решение / Научился with mono label columns), stack chips, and a live site preview well with an "Открыть ↗" pill. On scroll into view, a quiet left-to-right green scan sweep crosses the row and the status dot settles from muted grey to steady green with a soft halo — the monitor "coming online". Under `prefers-reduced-motion`, the sweep is removed and dots render steady green immediately.

## Do's and Don'ts

### Do:
- **Do** build structure from hairline borders (#26262c standard, #1b1b20 internal rules, #35353d hover/emphasis) before reaching for fills.
- **Do** layer surfaces on the panel ramp (#121216 → #17171c → #1d1d23) and lift them with the Edge Top inset highlight.
- **Do** set every label, metric, endpoint, timestamp, and stack tag in Geist Mono; keep prose in Geist Sans (the Mono-Means-Data Rule).
- **Do** reserve operational green (#3ecf8e) for live/available state only (the One Signal Rule), and keep the white pill the single primary action.
- **Do** disable the monitor sweep and dot pulse under `prefers-reduced-motion`, rendering status dots steady green, and keep focus-visible (2px green outline), selection, caret, and scrollbar themed from the palette.

### Don't:
- **Don't** use green for decoration, borders, headings, or hover states — if it isn't reporting operational truth, it's wrong.
- **Don't** add drop shadows as decoration or hover flourish; hover shifts border and background, not elevation (the Edge-Not-Drop Rule).
- **Don't** introduce a second accent hue, gradient fill, or neon glow — the world is monochrome plus one signal.
- **Don't** force sections to 100vh; size them to content on the 1080px column.
