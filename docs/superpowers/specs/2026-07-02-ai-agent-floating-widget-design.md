# Floating AI Agent Widget — Design Spec

**Date:** 2026-07-02
**Component:** `src/components/AIAgentWidget.tsx`
**Scope:** Home page only (`src/app/page.tsx`)

## Purpose

Add a floating AI-agent chat widget to the bottom-right of the home page. It presents
as a real AI assistant with three visual states (closed launcher → welcome → active
chat) and replies using a client-side scripted engine (no backend). It reuses the
existing site design language and introduces no new dependencies.

## Placement & Mounting

- New client component `AIAgentWidget.tsx` in `src/components/`.
- Rendered once at the end of `src/app/page.tsx` (home only — not in the shared
  layout).
- Fixed position, bottom-right, `z-[100]` so it floats above all sections and the
  footer.
- Responsive: launcher offset `24px` from bottom/right on desktop, `16px` on mobile.
  The panel is `~360px` wide on desktop; on mobile it becomes near-full-width
  (`calc(100vw - 32px)`, max `360px`) and caps its height to the viewport.

## State Model

Local React state only:

- `open: boolean` — panel open/closed.
- `messages: { role: "user" | "bot"; text: string }[]` — conversation transcript.
- `typing: boolean` — whether the typing indicator is shown before a bot reply.
- `input: string` — controlled input value.
- `tooltipVisible: boolean` — greeting tooltip on the closed launcher.

No persistence across reloads (in-memory only). Opening the panel for the first time
seeds a single greeting bot message + suggested prompt chips.

## Three States

### 1. Closed (launcher)
- Round `60px` button, gradient `#ef5023 → #d94010`, white AI/sparkle glyph (inline SVG).
- Orange drop shadow / glow consistent with the hero CTA
  (`0 8px 32px rgba(239,80,35,0.35)`).
- **Animated:** a soft expanding **pulse ring** behind the button + subtle sparkle
  twinkle on the glyph.
- **Greeting tooltip:** a small bubble ("👋 Need help? Ask our AI") slides in ~2s
  after mount; dismissible via an `×`, and auto-hides once the panel is opened.

### 2. Welcome (panel just opened)
- Panel slides/fades up from the launcher.
- Header: small avatar, title "InApps AI Assistant", green online dot, close (`×`)
  button.
- Body seeds with one greeting bot bubble plus **3–4 suggested prompt chips**:
  - "What services do you offer?"
  - "How fast can you start?"
  - "How does pricing work?"
  - "Book a call"
- Clicking a chip sends it as a user message through the same matcher.

### 3. Active chat
- Same panel. Message list: user bubbles (orange, right-aligned) and bot bubbles
  (dark `#1a1a1a`, left-aligned).
- Typing indicator (three bouncing dots) shows for ~700ms before each bot reply.
- Auto-scroll to the newest message.
- Footer: text input + send button; `Enter` sends. A persistent "Book a Free Call"
  link to `/contact` sits near the input/header.

## Scripted Reply Engine

- A keyword → answer map covering these topics, with answers drawn from real site copy:
  - **greeting** — hello/hi → friendly intro.
  - **services** — dedicated teams, staff augmentation, product dev, AI & cloud.
  - **pricing** — no fixed rate cards; free discovery call → proposal.
  - **timeline** — team ready within ~2 weeks; shipping in 4–6 weeks.
  - **ai** — Claude / Cursor / Copilot in every sprint; AI-native by default.
  - **contact / booking** — points to `/contact` + the Book a Free Call CTA.
- Matching: lowercase the input, test against each topic's keyword list, return the
  first match. Fallback reply when nothing matches: a short helpful message that
  directs the user to `/contact` or to book a call.
- Suggested chips reuse the exact same matcher (a chip is just a pre-filled user
  message).

## Visual Language (matches existing site)

- Panel background `#111` / `#0a0a0a`; border `#1f1f1f`.
- Accent orange `#ef5023`; muted text `#888`.
- Font: inherits Inter from the app.
- Rounded corners `16–20px`; soft shadows plus a subtle orange glow.
- All animations implemented with inline styles + a small local `<style>` block of
  `@keyframes` (pulse ring, sparkle, typing dots, panel slide-up). No animation libs.

## Accessibility

- Launcher button has `aria-label` (e.g. "Open AI assistant").
- Panel is dismissible with `Esc`; close button is keyboard-focusable.
- Input is a labeled form; `Enter` submits.
- `prefers-reduced-motion: reduce` disables the pulse ring, sparkle, and slide
  animations (content still appears, just without motion).

## Constraints / Non-Goals

- **No new dependencies** — pure React + Tailwind + inline SVG.
- **No backend / no real AI call** — scripted only (upgradeable later to a Next.js
  route handler + Claude API without changing the UI shell).
- **No persistence** — conversation resets on reload.
- Home page only; not added to the global layout.

## Files

- **New:** `src/components/AIAgentWidget.tsx`
- **Modified:** `src/app/page.tsx` (import + render `<AIAgentWidget />` once at the
  end of the component tree).
