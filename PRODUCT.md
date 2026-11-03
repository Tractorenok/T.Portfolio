# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitor: a technical recruiter or team lead evaluating a frontend
candidate for a remote junior role. They arrive to decide one thing fast — is
this person worth a message — and act by reaching out (Telegram first). A
secondary visitor is a peer developer skimming the actual work.

## Product Purpose

Personal portfolio site for Костя Тракторёнок, a junior frontend developer in
Жигулёвск seeking a remote junior position. Success is a recruiter contacting
him; the site exists to make the skill real (via shipped projects) and the
contact frictionless. Content is in Russian.

## Positioning

A junior who already ships: real projects deployed to production (Vercel), with
accessibility (semantics, keyboard nav, reduced-motion, contrast) treated as a
baseline rather than an afterthought. The differentiator is demonstrated
end-to-end delivery (макет → боевой деплой), not a list of buzzwords.

## Operating Context

Single-page site, sections: Hero → About → Skills → Projects → Contact (+ header
nav, footer). Visitors skim on both desktop and mobile. Primary CTA is a
Telegram message; email and GitHub are secondary channels.

## Capabilities and Constraints

- Stack: Next.js 14 (App Router), React 18, TypeScript. Lenis for smooth scroll.
  Deployed on Vercel. No backend / no forms that post anywhere — contact is via
  external links (Telegram, email, GitHub).
- Content is centralized in `data/content.ts` and must stay the single source of
  truth that is easy to edit in one place.
- Accessibility is a product requirement, not a nice-to-have.

## Brand Commitments

- Name: Костя Тракторёнок. Role: Junior Frontend-разработчик. Location: Жигулёвск.
- Channels: Telegram @SexYTractorenok (primary CTA), email
  kostytractorenok@gmail.com, GitHub Tractorenok.
- Voice (confirmed this session): concise, confident, engineering-flavored —
  rewrite Russian copy tighter in this tone, preserving every fact. No invented
  claims, metrics, testimonials, or employers.

## Evidence on Hand

Two real, deployed projects (URLs in `data/content.ts`):
1. TracTor — фриланс-лендинг (flagship): interactive 7-step project calculator
   "Project Scanner". Next.js/React/TS.
2. FRONTEND.LOG — терминал-портфолио: terminal-style, no frameworks (pure
   HTML/CSS/JS).

Note: a third project ("Full-stack портфолио — по главам",
portfolio-chi-one-yxmeuio309.vercel.app) was removed by the user on 2026-11-03
after its deployment was deleted. Do not re-add it.

No metrics, testimonials, client names, or employment history are available —
future work must not fabricate them.

## Product Principles

1. The work is the proof — projects lead; claims stay subordinate to shipped,
   linkable evidence.
2. Make contact effortless — the path to a Telegram message is never more than
   one obvious action away.
3. Accessibility is baseline — keyboard, contrast, semantics, reduced-motion are
   non-negotiable and double as a credibility signal for this candidate.
4. One source of truth — all copy and data live in `data/content.ts`.
5. Honest junior — present real level and real work confidently; never inflate.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Keyboard-first interactions, visible focus, sufficient
contrast, and `prefers-reduced-motion` support are required throughout.
