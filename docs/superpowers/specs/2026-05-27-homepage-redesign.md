# Homepage Redesign — Design Spec
**Date:** 2026-05-27  
**File:** `src/app/page.tsx`

---

## Overview

Full redesign of the InApps homepage — same 11 sections, same content, new visual style and layout structure. The target aesthetic is **premium & minimal** (think Vercel, Linear) aimed at US/EU CTOs and VPs Engineering evaluating an offshore development partner.

---

## Palette

| Token | Value | Usage |
|---|---|---|
| `bg-base` | `#fafafa` | Default section background |
| `bg-white` | `#ffffff` | Alternate light sections |
| `bg-dark` | `#0a0a0a` | Hero, Case Studies, Advantage |
| `bg-amber-deep` | `#140800` | Testimonials |
| `bg-amber-mid` | `#100a00` | (removed — not used in final) |
| `bg-cream` | `#fffbf0` | Client Logos |
| `accent` | `#ef5023` | Primary accent — unchanged |
| `border-light` | `#e8e8e8` | Light section borders |
| `border-amber` | `#2a1800` | Amber section borders |
| `text-primary` | `#0a0a0a` | Body text on light bg |
| `text-muted` | `#888888` | Descriptive text |
| `text-faint` | `#555555` | Secondary dark-bg text |

---

## Navigation

- Sticky frosted glass bar (`backdrop-filter: blur(16px)`, `bg-white/85`)
- Height: `64px`, horizontal padding `60px`
- Logo: `InApps` with `Apps` in `#ef5023`
- Links: Services, Case Studies, Technologies, About, Blog
- CTA button: `#0a0a0a` bg, switches to `#ef5023` on hover — "Get a Free Call"
- Border bottom: `1px solid #e8e8e8`
- **Replaces** the existing `<Header />` component import

---

## Section-by-Section Design

### 1. Hero — `bg-dark` (`#0a0a0a`)
- **Layout:** Centered, `text-align: center`
- Background: grid-line texture (`rgba(255,255,255,0.03)` lines, 60px grid) + top-center orange radial glow
- Badge: pill with pulse dot — "AI-Driven Software Development"
- Headline: `72px`, `font-weight: 900`, `letter-spacing: -3px` — "Your Trusted **Offshore** Development Partner" (`Offshore` in `#ef5023`)
- Subtext: `17px`, `color: #666`, max-width `520px`
- Buttons: Primary (`#ef5023` + orange shadow) + Ghost (white border)
- Stats row: 4 stats (10+, 250+, 150+, 95%) separated by `border-top: 1px solid #1a1a1a`
- **Change from current:** left-aligned → centered; adds grid texture + glow; adds 150+ Experts stat

### 2. Client Logos — `bg-cream` (`#fffbf0`)
- Thin label + logo marquee strip (existing marquee animation kept)
- Divider: `#f0ddb2` (warm cream border, not gray)
- Fade gradients: `from-[#fffbf0]` instead of `from-white`
- **Change from current:** background `#fff` → `#fffbf0`; border color warmed

### 3. Services — `bg-base` (`#fafafa`)
- **Layout:** 2-col header (title left, description right) above a 3×2 grid
- Grid: cards separated by `2px` gaps on `#e8e8e8` background, `border-radius: 16px`, `overflow: hidden`
- Each card: white bg, number label (`01`–`06` in faint gray), title, description, orange "Learn more →"
- Card hover: bg shifts to `#fdf5f2` (warm orange tint)
- Orange top border `3px` retained
- **Change from current:** removes individual card borders; adds numbered labels; 2-col header layout

### 4. Stats — `#ef5023` (unchanged)
- 4-column grid, vertical dividers between stats (`rgba(255,255,255,0.15)`)
- Diagonal grid texture overlay retained
- **Change from current:** padding tightened; dividers added between stat blocks

### 5. Case Studies — `bg-dark` (`#0a0a0a`)
- **Layout:** 2×2 grid (replaces 3-wide carousel with nav arrows)
- Cards: `#0f0f0f` bg, `#1a1a1a` gap background, `border-radius: 16px`
- Card content: tag, large title (`20px`, `800`), description, result metric + "View case →"
- "View All →" button top-right of section header (replaces bottom button)
- Remove image placeholder blocks — cards are text-only
- **Change from current:** carousel → static 2×2 grid; removes placeholder image areas; larger type

### 6. Industries — `bg-white` (`#ffffff`)
- Centered heading, 8-col chip grid
- Chips: `border: 1px solid #f0f0f0`, hover → `border-color: #ef5023`, `bg: #fff8f5`
- **Change from current:** `bg-[#0a0a0a]` → white; chips get warm hover state instead of dark

### 7. How We Work (Process) — `bg-base` (`#fafafa`)
- **Layout:** Horizontal timeline — 4 steps in a row
- Each step: numbered circle dot (`56px`, white bg, orange number) connected by a horizontal line
- Line: `position: absolute`, `top: 28px`, full width, `#e8e8e8`
- 2-col header (title left, description right) above steps
- Removes left orange accent bar
- **Change from current:** vertical-feel columns → explicit horizontal timeline with dot connectors

### 8. InApps Advantage — `bg-dark` (`#0a0a0a`)
- Same 2-col layout: photo collage left, text right
- Photo blocks: `#141414` bg, `#1a1a1a` border
- Advantage items: icon box (`36px`, `rgba(#ef5023, 0.1)` bg, emoji icon) replaces dot bullets
- Dividers between items: `1px solid #141414`
- **Change from current:** dot bullets → icon boxes; item dividers added; darker card backgrounds

### 9. Technologies — `bg-base` (`#fafafa`)
- 2-col header above tabs + tech grid
- Active tab: `#0a0a0a` bg + white text (not white bg + black text)
- Tech pills: `bg-white`, `border: #e8e8e8`, hover → orange border + orange glow ring
- **Change from current:** tab active state inverted (dark active); pill hover adds glow ring

### 10. Testimonials — `bg-amber-deep` (`#140800`)
- 3-col grid, cards `bg: #1a1000`, `border: #2a1800`
- Avatar: `#ef5023` solid circle with initials (replaces image)
- Role text: `#5a3a1a`
- Removes carousel navigation arrows
- **Change from current:** removes nav arrows; avatar bg changed to orange solid

### 11. CTA — `bg-base` (`#fafafa`) with inner dark box
- **Layout:** Light outer section, dark `#0a0a0a` rounded box inside
- Box: `border-radius: 24px`, `padding: 80px 60px`, orange radial glow from top
- Headline: `52px`, `letter-spacing: -2px`, "Ready to Build Your Next **Digital Product?**"
- Buttons: Primary (orange) + Ghost (white border on dark bg)
- **Change from current:** solid orange section → light section with contained dark box (inverted)

---

## Component Architecture

The page remains a single `page.tsx` file. Existing shared components:
- `<Header />` → **replaced inline** with new nav markup
- `<Footer />` → kept as-is
- `Label` / `Heading` shared components → **removed**, inline styles used per-section for design precision

The file will grow large. If it exceeds ~500 lines post-redesign, split section components into `src/components/home/` (e.g. `HeroSection.tsx`, `ServicesSection.tsx`).

---

## Animations / Interactions

- Marquee: existing CSS animation kept unchanged
- Nav CTA hover: `bg-[#0a0a0a]` → `bg-[#ef5023]`
- Service card hover: bg `#fff` → `#fdf5f2`
- Industry chip hover: border + bg warm tint
- Tech pill hover: border + glow ring
- Case card hover: bg lightens slightly
- No new JS animations added

---

## What Does NOT Change

- All section data (logos, services, case studies, industries, testimonials) — content unchanged
- `<Footer />` component
- Marquee CSS keyframe animation
- `#ef5023` as the sole accent color
- Amber sections: Logos (cream), Testimonials (dark amber) — retained from prior session work
- Font: Inter throughout
