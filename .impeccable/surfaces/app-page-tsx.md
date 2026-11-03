---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

## Direction contract

Scope: single-page portfolio (`app/page.tsx` + all section components). Visitor mode: Persuade — a recruiter decides whether to message, and the work presentation does the convincing. Brief-pinned world: Better Stack (the observability/monitoring product's own UI language). No concept-seed roll; the brief wins.

THESIS: The portfolio is built as the candidate's own piece of developer tooling — a Better Stack-style monitoring console. It refuses the previous editorial "stack of sheets" world and refuses the generic neon-glow dark hero. The one idea it owns: deployed projects are *live monitors* — every project is "operational", linkable, observable right now.

OWN-WORLD: Monochrome, near-black ground (#08080a → panels #121216 / #1a1a1e), hairline borders (#2a2a30), text #ececee / #a0a0a8. One restrained signal color — operational green (#3ecf8e) — reserved only for live-status dots and the "available for hire" state, never decoration. Primary action is a crisp white pill button (dark text) carrying Better Stack's signature inset top-highlight (`box-shadow: inset 0 1px 0 rgba(255,255,255,…)` + soft drop). Geist everywhere; Geist Mono for data, labels, metadata, metrics, timestamps. Pill radius for buttons/chips, 8px for panels. Recognizable with content removed: black console, hairline-ruled rows, mono metric labels, green status dots, white CTA.

STORY: A recruiter lands, reads one confident line ("junior who already ships"), sees a live-status chip confirming availability, and scans three projects presented as operational monitors (green dot · LIVE · stack · open ↗). Belief: this person builds and deploys real, accessible production work. Action: one obvious path to a Telegram message, echoed at top-right nav and in a final contact console.

FIRST VIEWPORT: Full-width console. Sticky top bar: mono brand logotype left, nav center/right, white "Написать в Telegram" pill far right. Below, left-aligned hero: a small mono status chip with a pulsing green dot ("● Доступен · junior · удалёнка"), then a large Geist headline (~clamp 2.6–4.5rem, max ~16ch, tight tracking), a one-line pitch (~60ch, #a0a0a8), two actions (white primary Telegram pill + ghost "Проекты →"), and a mono "status strip" of real facts (3 проекта в проде · React · Next.js · deploy Vercel) ruled by hairlines. Primary action sits in the hero action row and is repeated top-right.

FORM: Monitoring-console / status-dashboard UI (the pinned Better Stack world). Position: brief-pinned, not ranked against alternatives. seed: none (brief-pinned, no roll). Signature interaction: on reveal, project "monitors" come online — a quiet left-to-right scan sweep across each row and the status dot settling to steady green "operational"; fully disabled under prefers-reduced-motion (dots render steady green). Motion grammar: one authored moment (monitors online), plus restrained exponential ease-out fade-up on sections; no scattered hover bounces.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
