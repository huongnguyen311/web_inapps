# Case Studies Section Redesign

**Date:** 2026-05-27  
**File:** `src/app/page.tsx` (lines 514–545)  
**Status:** Approved for implementation

---

## Summary

Replace the current plain 2×2 grid in the Case Studies section with a redesigned layout featuring static industry filter tabs and gradient-accent cards. All within the existing dark theme and orange (`#ef5023`) palette.

---

## Design Decisions

| Decision | Choice | Reason |
|---|---|---|
| Layout | Filterable grid (2×2) | Shows industry range, scalable |
| Card header | Orange-family gradient + decorative rings | Visual richness without real images |
| Industry color-coding | All orange — no per-industry colors | Consistent with site palette |
| Filter tabs | Static / decorative only | No JS filtering needed |
| Card CTA | "View case →" link (no navigation yet) | Placeholder for future routing |
| Card hover | Border color lift only | Subtle, matches rest of site |

---

## Layout Structure

```
[ Section header row ]
  eyebrow (orange line + "OUR WORK" label)
  h2: "Case Studies & Success Stories"
  "View All →" button (right-aligned)

[ Filter tabs row ]
  All (orange filled, active)  |  Fintech  |  Healthtech  |  E-Commerce  |  SaaS
  — static, no click behavior —

[ 2×2 Card Grid ]
  Card  Card
  Card  Card
```

---

## Card Anatomy

Each card has two zones:

**1. Gradient Header (90px tall)**
- Background: dark orange-family gradient (`#1c0900 → #2e1200 → #0d0d0d`)
- Decorative rings: 3 concentric circles, positioned top-right, `rgba(239,80,35,0.05–0.15)` opacity
- Subtle background pattern unique per card (plain / diagonal stripes / dot grid / horizontal lines) — all in `rgba(239,80,35,0.04–0.06)` opacity
- Bottom-left: `●  INDUSTRY` label — 5px orange dot + uppercase orange text, 9px, tracking 2px

**2. Card Body**
- Title: white, 18px, font-weight 900, tracking -0.3px
- Description: `#555`, 13px, line-height 1.7
- Divider: `1px solid #1a1a1a`
- Result row: green metric with small circle icon on left, orange "View case →" on right

---

## Card Data

| Industry | Title | Description | Result |
|---|---|---|---|
| Fintech | Payment Platform Rebuild | Rebuilt a legacy payment gateway serving 2M+ transactions/day, cutting latency by 60%. | 60% faster processing |
| Healthtech | Telemedicine Mobile App | End-to-end telemedicine platform with video consults, EHR integration, and HIPAA compliance. | 1M+ active users in 6 months |
| E-Commerce | Marketplace Scale-up | Re-architected a B2C marketplace to handle 10× Black Friday traffic with zero downtime. | 3× revenue growth in Q1 |
| SaaS | CRM Analytics Dashboard | Real-time analytics suite with ML-powered churn prediction for a SaaS CRM platform. | 40% reduction in churn |

---

## Colours & Tokens

All values already exist in the site palette — no new tokens needed.

| Token | Value | Usage |
|---|---|---|
| `accent` | `#ef5023` | Eyebrow, tabs, "View case →", ring borders |
| `bg-3` | `#111111` | Card background |
| `bg-2` | `#0a0a0a` | Section background |
| `border` | `#1f1f1f` | Card border, divider |
| `text` | `#ffffff` | Card title |
| `muted` | `#555555` | Card description |
| `green` | `#22c55e` | Result metric |

---

## Interaction

- **Filter tabs:** No behavior. "All" renders as active (orange filled). Others render as inactive (dark bg, muted text). No `useState` needed.
- **Card hover:** Border color lifts from `#1f1f1f` to `#2a2a2a` (matches existing service cards pattern).
- **"View case →":** Renders as a `<span>` or `<a href="#">` — no routing yet.

---

## Implementation Scope

- Replace the `caseStudies` data array with an updated structure including a `pattern` field (one of `none | stripes | dots | lines`).
- Replace the grid JSX (lines 530–543) with the new card layout.
- Keep the section wrapper, header row, and "View All →" button — only update their styling to match the eyebrow pattern used elsewhere (add the orange line + eyebrow div that is missing from the current header).
- No new files, no new components — all inline in `page.tsx`.

---

## Out of Scope

- Actual filter functionality
- Case study detail pages
- Image assets per card
- Animations beyond the existing hover pattern
