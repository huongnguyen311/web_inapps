# Services Page Redesign

**Date:** 2026-05-28  
**File:** `src/app/services/page.tsx`  
**Live preview:** `http://localhost:3000/services`

## Overview

Redesign the services page from a light-themed layout with 4 generic service cards into a dark, premium SaaS-style page with a bento grid, full service catalogue (13 services across 4 categories), and an Engagement Models section.

**Design direction:** Dark Tech — full dark background (`#0a0f1a`), single accent color `#ef5023` (orange), Inter font throughout.

---

## Sections

### 1. Hero Section

**Layout:** Two-column grid (left text, right visual panel)  
**Background:** `#0a0f1a`

**Left column:**
- Badge: pill with animated dot + "NEXT-GEN TECH PARTNER" label in orange
- Headline: `Innovative Software Solutions for Your Business` — "Solutions" in orange `#ef5023`
- Subtext: existing copy, color `#64748b`
- CTAs: "Explore Services" (solid orange) + "View Portfolio" (ghost, orange border)

**Right column:**
- Panel background: dark gradient with subtle orange-tinted grid pattern overlay
- Center badge: rocket emoji + "500+ Projects Delivered" + "Across 30+ countries"
- Orange glow blur behind panel

---

### 2. Services Bento Grid

**Label:** "WHAT WE OFFER"  
**Headline:** `End-to-end engineering for ambitious teams`  
**Subtext:** "13 services across 4 specializations"

**Grid layout:** 3-column asymmetric (`1.6fr 1fr 1fr`), 2 rows

| Position | Category | Size | Accent |
|---|---|---|---|
| Left, spans 2 rows | AI & Automation | Large | Orange `#ef5023` — featured card |
| Top-right, spans 2 cols | Engineering | Wide | Orange, dim |
| Bottom-middle | Engagement Models | Small | Orange, dim |
| Bottom-right | Quality & Design | Small | Orange, dim |

**AI & Automation card (featured):**
- "Featured" label in orange
- Lists all 4 services as sub-cards: AI Agent Development, Agentic Workflow Automation, Generative AI Integration, AI Development Services
- Each sub-card shows service name + short description
- Orange glow radial blur top-right

**Engineering card:**
- 3×2 mini grid of 6 service chips: Custom Software Dev, Web Development, Mobile App Dev, SaaS Development, Cloud & DevOps, MVP / Proof of Concept
- Each chip shows icon + name

**Engagement Models card:**
- Links visually down to the Engagement Models section
- Shows: Offshore Dev Center, Staff Augmentation (teaser only)

**Quality & Design card:**
- Shows: QA & Testing, UI/UX Design

**Stats strip** (below grid, separated by top border):
- 500+ Projects | 30+ Countries | 13 Services | 4 Specializations

---

### 3. Engagement Models Section

**Label:** "HOW WE ENGAGE"  
**Headline:** `Choose your engagement model`  
**Subtext:** "Flexible models designed to match your team structure, timeline, and growth stage."

**Layout:** 3 equal cards, side-by-side  
**Theme:** All cards use orange `#ef5023` as sole accent. Differentiated by border opacity and background warmth.

#### Card 1 — Offshore Development Center
- Background: `#110a06`
- Border: `rgba(239,80,35,0.2)`
- Icon: 🏢
- Description: A fully managed, dedicated remote team that works exclusively on your product.
- **Best for:** Long-term development, Product scaling, Dedicated remote team
- CTA: `Build Your Dedicated Team →`

#### Card 2 — Staff Augmentation
- Background: `#140d07`
- Border: `rgba(239,80,35,0.25)`
- Icon: 👥
- Description: Vetted engineers embedded directly into your existing team and workflows.
- **Best for:** Fast hiring, Skill gaps, Team extension
- CTA: `Hire Engineers Now →`

#### Card 3 — Project-Based Development
- Background: gradient `#1f0e04 → #160a02`
- Border: `rgba(239,80,35,0.4)` (strongest)
- Badge: "POPULAR" pill (solid orange)
- Icon: 🚀
- Description: Fixed-scope delivery with clear milestones, managed end-to-end by our team.
- **Best for:** MVP development, Fixed-scope projects, Startup launches, Rapid prototyping
- **Key Benefits:** Predictable timelines, Lower management overhead, Faster time-to-market, Clear milestones & reporting
- CTA: `Start Your Project →`

---

### 4. CTA Banner

Keep existing structure. Update colors to match dark theme:
- Background: `linear-gradient(135deg, #1a0800 0%, #0d0d0d 100%)`
- Top accent border: solid orange `#ef5023`
- Headline: "Ready to build something amazing?" — white
- Subtext: existing copy — `#888888`
- CTAs: "Book a Free Consultation" (solid orange) + "Contact Sales" (ghost, white text)
- Decorative blurs: existing orange radial blurs

---

## Design Tokens

| Token | Value |
|---|---|
| Background | `#0a0f1a` |
| Surface | `#0f172a` |
| Accent | `#ef5023` |
| Accent dim | `rgba(239,80,35,0.1)` |
| Text primary | `#ffffff` |
| Text secondary | `#94a3b8` |
| Text muted | `#64748b` |
| Border default | `rgba(239,80,35,0.2)` |
| Font | Inter |

---

## What Changes vs Current Page

| Current | Redesigned |
|---|---|
| Light background `#fafafa` | Dark background `#0a0f1a` |
| 4 generic service cards | Bento grid with 13 services across 4 categories |
| "How We Work" 2×2 grid | Engagement Models section with 3 cards + CTAs |
| Multi-color card accents | Single orange accent throughout |
| Emoji-only icons | Emoji icons retained |

## What Stays the Same

- Page structure: Header → Hero → Content sections → CTA → Footer
- All existing copy (hero headline, subtext, CTA labels)
- Header and Footer components (unchanged)
- `pt-[88px]` main padding for fixed header offset
