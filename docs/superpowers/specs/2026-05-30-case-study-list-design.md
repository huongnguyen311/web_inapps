# Case Study List Page — Design Spec

**Date:** 2026-05-30  
**Status:** Approved  
**Route:** `/case-study`

---

## Overview

A paginated list page displaying all case studies. Visitors can filter by industry category. Each case study is shown as a card with image, title, short description, category tag, and an optional "Featured" star badge.

---

## Page Structure

### 1. Header (existing `<Header />` component)
No changes. Sticky, frosted-glass style.

### 2. Hero Section
- **Eyebrow:** "Our Work" (small orange uppercase label with leading dash)
- **H1:** "Real results for *real businesses*" — "real businesses" in orange (`#ef5023`)
- **Subtext:** Short summary sentence (e.g. "42 case studies across healthcare, logistics, e-commerce...")
- **Stat row:** 4 stats separated by vertical dividers (hardcoded strings):
  - `42+` Case studies
  - `6` Industries
  - `98%` Client satisfaction
  - `12yr` Track record
- Background: white (`#fff`), with two subtle radial orange glow decorations (CSS `::before`/`::after`, `pointer-events: none`)

### 3. Filter Bar
- **Sticky** below header (`top: 68px`)
- White background, bottom border `#ebebeb`
- **Underline tab style:** active tab = orange text + 2px orange bottom border
- Tabs (7 total):
  - All
  - E-commerce & Healthcare
  - Healthcare
  - Logistics & Supply Chain
  - Media & Entertainment
  - Retail & E-commerce
  - Technology
- Horizontally scrollable on narrow viewports (`overflow-x: auto`, no scrollbar)
- Clicking a tab filters the grid (client-side state)

### 4. Case Study Grid
- **3 columns** on desktop, 2 on tablet, 1 on mobile
- **Gap:** 28px
- **10 cards per page**

### 5. Pagination
- Centered below grid
- Format: `‹ 1 2 3 … N ›`
- Active page: orange background + shadow
- Arrow buttons: grey default, orange on hover

---

## Card Anatomy

```
┌──────────────────────────────┐
│  [⭐ Featured]   [Category]  │  ← overlaid on thumbnail
│                              │
│     Thumbnail 228px tall     │
│   (image or icon placeholder)│
│                              │
├──────────────────────────────┤
│  Card Title (17px 800)       │
│                              │
│  Description — 3 lines max   │
│  (14px, #888, line-height    │
│   1.7, -webkit-line-clamp:3) │
│                              │
│ ─────────────────────────── │
│  View Detail  →[ ◯ ]        │
└──────────────────────────────┘
```

**Card fields:**
| Field | Source | Notes |
|---|---|---|
| `name` | string | Card title |
| `image` | string (URL) | Thumbnail. Falls back to icon placeholder |
| `shortDescription` | string | 2–3 lines, clamped to 3 |
| `category` | string | Shown as `cat-tag` on thumbnail |
| `featured` | boolean | Shows `⭐ Featured` badge if `true` |
| `slug` | string | Used for `href="/case-study/[slug]"` |

**Card states:**
- Default: `border: 1px solid #ebebeb`
- Hover: border orange tint, `translateY(-6px)`, box-shadow, "View Detail" arrow turns orange

**Featured badge:** orange pill top-left of thumbnail, `⭐ Featured` text  
**Category tag:** white/translucent pill bottom-right of thumbnail

---

## Visual Design Tokens

| Token | Value |
|---|---|
| Page background | `#f7f7f8` |
| Card background | `#fff` |
| Card border | `#ebebeb` |
| Card border-radius | `20px` |
| Thumbnail height | `228px` |
| Thumbnail placeholder bg | `linear-gradient(140deg, #f2f2f2, #e8e8e8)` |
| Accent / orange | `#ef5023` |
| Heading color | `#0a0a0a` |
| Body text | `#888` |
| Font base | 16px, `-apple-system` stack |
| Card title | 17px, weight 800 |
| Description | 14px, line-height 1.7 |
| Filter tab | 14px, weight 600 |
| Grid gap | 28px |
| Cards per page | 10 |

---

## Data

Case studies are currently hardcoded. The data structure per item:

```ts
type CaseStudy = {
  slug: string;
  name: string;
  image?: string;         // optional; shows placeholder icon if absent
  shortDescription: string;
  category: string;       // must match one of the 6 filter categories
  featured?: boolean;
};
```

The full list lives in a data file (e.g. `src/data/caseStudies.ts`). Filtering is done client-side by matching `category === activeTab` (or showing all when tab is "All").

---

## Pagination Logic

- Items per page: **10**
- Total pages: `Math.ceil(filteredItems.length / 10)`
- Pagination resets to page 1 when filter tab changes
- Show `…` ellipsis when total pages > 5
- Format: `‹  1  2  3  …  N  ›`

---

## Responsive Breakpoints

| Breakpoint | Grid columns | Notes |
|---|---|---|
| ≥ 1024px | 3 | Default desktop |
| 640–1023px | 2 | Tablet |
| < 640px | 1 | Mobile, padding 16px |

---

## Existing Page

The current `src/app/case-study/page.tsx` is a **single case study detail page** (NovaPay), not a list. It needs to be replaced with the new list page. The detail page should move to `src/app/case-study/[slug]/page.tsx` (already exists).
