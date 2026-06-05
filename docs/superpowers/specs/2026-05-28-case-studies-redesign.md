# Case Studies Section — Redesign Spec

**Date:** 2026-05-28  
**Status:** Approved  
**File:** `src/app/page.tsx`

---

## Overview

Redesign the Case Studies section on the home page from a 2-column auto-sliding layout to a vertical list of 4 horizontal cards — each always fully visible with an image, tags, description, and metrics.

---

## Section Position & Background

- **Position:** After Stats, before Value Proposition (unchanged)
- **Background:** `linear-gradient(160deg, #0a0a0a 0%, #1a0800 50%, #0a0a0a 100%)` — same as current
- **Decorators:** grid pattern overlay (`opacity: 0.04`) + radial glow (`rgba(239,80,35,0.12)`) — same as current

---

## Section Header

Same as current:
- Eyebrow: orange line + "Case Studies" label
- H2: "Results our clients **have seen**" (accent on last two words)
- Top-right: "View all case studies →" button (`border: 1px solid #ef5023/30`, hover: `bg-[#ef5023]/10`)

---

## Card List Layout

4 cards stacked vertically with `gap-[16px]`. No expand/collapse — all cards always fully visible.

### Card anatomy

```
┌──────────────────────────────────────────────────────────┐
│  [IMAGE 280px]  │  Client · Industry                     │
│                 │  Title (bold white, 18px)               │
│  [tags at       │  Description (muted, 13px, 2-3 lines)  │
│   bottom of     │                                         │
│   image]        │  300%  ·  60%  ·  2M+                  │
│                 │  label   label   label                  │
│                 │                                         │
│                 │  Read full case study →                 │
└──────────────────────────────────────────────────────────┘
```

**Card container:**
- `background: #111`
- `border: 1px solid #1f1f1f`
- `border-radius: 12px`
- `overflow: hidden`
- `display: grid; grid-template-columns: 280px 1fr`

---

## Image Column (left, 280px wide)

- Fixed width `280px`, full card height
- `<img>` with `object-fit: cover`, `width: 100%`, `height: 100%`
- Gradient overlay on bottom half: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)`
- Tags anchored to bottom-left of image (`position: absolute; bottom: 14px; left: 14px`)

**Tag styles:**
- Industry tag: `background: #ef5023`, `color: #fff`, `font-size: 9px`, `font-weight: 700`, `padding: 3px 10px`, `border-radius: 20px`, `text-transform: uppercase`, `letter-spacing: 1px`
- Tech tags: `background: rgba(0,0,0,0.55)`, `color: #ccc`, `font-size: 9px`, `font-weight: 600`, `padding: 3px 8px`, `border-radius: 20px`, `border: 1px solid rgba(255,255,255,0.1)`

---

## Content Column (right, flex)

Padding: `px-[28px] py-[24px]`, `display: flex; flex-direction: column; gap: [10px]`

| Element | Style |
|---|---|
| Client name | `text-[#555]`, `text-[10px]`, `uppercase`, `tracking-[1.5px]` |
| Title | `font-black`, `text-white`, `text-[18px]`, `leading-[1.3]`, `tracking-[-0.4px]` |
| Description | `text-[#666]`, `text-[13px]`, `leading-[1.7]` |
| Metrics row | `display: flex; gap: 24px; margin-top: 4px` |
| Metric value | `font-black`, `text-[#ef5023]`, `text-[22px]`, `leading-[1]`, `tracking-[-1px]` |
| Metric label | `text-[#555]`, `text-[10px]`, `margin-top: 2px` |
| CTA link | `text-[#ef5023]`, `text-[12px]`, `font-bold`, `margin-top: 6px`, `hover:underline` |

---

## Data Shape Change

Add `tags` array to each case study in the `caseStudies` data array:

```ts
const caseStudies = [
  {
    industry: "Fintech",
    client: "Prudential",
    title: "Real-time claims processing platform",
    desc: "Built a claims platform handling 2M+ daily transactions, reducing processing time by 300% and cutting operational costs by 60%.",
    metrics: [
      { value: "300%", label: "Faster Processing" },
      { value: "60%",  label: "Cost Reduction" },
      { value: "2M+",  label: "Daily Transactions" },
    ],
    tags: ["React", "Node.js", "AWS"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "SaaS",
    client: "Future Processing",
    title: "AI analytics dashboard for 50K users",
    desc: "Delivered an AI-powered insights platform that cut time-to-insight by 5x and maintained 98% uptime across global regions.",
    metrics: [
      { value: "5×",   label: "Faster Insights" },
      { value: "98%",  label: "Uptime" },
      { value: "50K+", label: "Active Users" },
    ],
    tags: ["Python", "React", "GCP"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "E-commerce",
    client: "Mega Market",
    title: "Mobile commerce app with 1M downloads",
    desc: "Rebuilt the mobile shopping experience from scratch, achieving 1M downloads in 6 months and a 40% lift in revenue.",
    metrics: [
      { value: "1M+", label: "Downloads" },
      { value: "40%", label: "Revenue Increase" },
      { value: "6mo", label: "To Launch" },
    ],
    tags: ["React Native", "Firebase"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "Healthtech",
    client: "Workpac",
    title: "Workforce management platform at scale",
    desc: "Modernized a legacy workforce platform for 30K+ workers, cutting admin overhead by 50% and improving shift-fill rates.",
    metrics: [
      { value: "50%", label: "Less Admin" },
      { value: "30K+", label: "Workers" },
      { value: "3×",  label: "Faster Onboarding" },
    ],
    tags: ["Vue.js", "Django", "Azure"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
];
```

---

## State Removal

- Remove `caseIndex` state (`useState<number>`)
- Remove the `useEffect` auto-slide interval for case studies
- Keep `slideIndex` and `faqIndex` state (used by other sections)

---

## Out of Scope

- Real per-project images (all use `/Media/Image/home 1.png` until real assets are provided)
- Mobile responsive breakpoints (separate task)
- Filtering by industry/tag
- Hover animations beyond standard cursor pointer
