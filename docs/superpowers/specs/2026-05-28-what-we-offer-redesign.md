# WHAT WE OFFER Section Redesign

**Date:** 2026-05-28
**File:** `src/app/services/page.tsx`
**Scope:** Replace the bento grid in the "Services Bento Grid" section with a vertical-sections layout.

---

## Goal

Redesign the WHAT WE OFFER section to:
- Make 4 specializations visually distinct and prominent (B: clear grouping)
- Feel premium and bold with strong visual impact (C: premium feel)
- Allow users to click each service to navigate to its detail page

---

## Layout: 4 Vertical Sections

The section header (badge + h2 + subtitle) stays unchanged.

Below the header: 4 stacked rows, one per specialization, separated by `gap-[16px]`.

### Row structure

Each specialization is a single card (`<div>`) containing:

**Category header row:**
- Icon: large emoji in a 72×72px box, icon font-size ~32px, box background `rgba(239,80,35,0.12)`, border `1px solid rgba(239,80,35,0.25)`, rounded-[14px]
- Category name: font-black, 20px, white
- Service count: `N services`, text-[12px], color `#64748b`
- Number badge: `01` / `02` / `03` / `04` — font-black, 80px, color `rgba(255,255,255,0.04)`, absolute positioned right side of card

**Divider:** `1px solid rgba(255,255,255,0.06)` between header and service list

**Service list:**
- Each service is a full-width `<a>` row
- Left: emoji icon, 32px font-size, inside a 44×44px box, background `rgba(239,80,35,0.08)`, rounded-[10px]
- Middle: service name, font-bold, 14px, white
- Right: `→` arrow, color `#ef5023`
- Hover state: row background `rgba(239,80,35,0.08)`, arrow nudges right by 4px (CSS transition)
- Each `<a>` links to `/services/<slug>` (slugified service name)

### Card styling

- Background: `#111111`
- Border: `1px solid #1f1f1f`
- Rounded: `rounded-[20px]`
- Padding: `p-[28px]`
- Gap between header and list: `gap-[20px]`
- AI & Automation (index 0): border `1px solid rgba(239,80,35,0.3)` — featured accent

---

## Data

```ts
const specializations = [
  {
    number: "01",
    icon: "🧠",
    name: "AI & Automation",
    services: [
      { icon: "🤖", name: "AI Agent Development", slug: "ai-agent-development" },
      { icon: "⚡", name: "Agentic Workflow Automation", slug: "agentic-workflow-automation" },
      { icon: "✨", name: "Generative AI Integration", slug: "generative-ai-integration" },
      { icon: "🔬", name: "AI Development Services", slug: "ai-development-services" },
    ],
  },
  {
    number: "02",
    icon: "⚙️",
    name: "Engineering",
    services: [
      { icon: "</>", name: "Custom Software Development", slug: "custom-software-development" },
      { icon: "🌐", name: "Web Development", slug: "web-development" },
      { icon: "📱", name: "Mobile App Development", slug: "mobile-app-development" },
      { icon: "📦", name: "SaaS Development", slug: "saas-development" },
      { icon: "☁️", name: "Cloud & DevOps", slug: "cloud-devops" },
      { icon: "🚀", name: "MVP / Proof of Concept", slug: "mvp-proof-of-concept" },
    ],
  },
  {
    number: "03",
    icon: "🤝",
    name: "Engagement Models",
    services: [
      { icon: "🏢", name: "Offshore Dev Center", slug: "offshore-dev-center" },
      { icon: "👥", name: "Staff Augmentation", slug: "staff-augmentation" },
      { icon: "🚀", name: "Project-Based Dev", slug: "project-based-dev" },
    ],
  },
  {
    number: "04",
    icon: "✨",
    name: "Quality & Design",
    services: [
      { icon: "🧪", name: "QA & Testing", slug: "qa-testing" },
      { icon: "🎨", name: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
];
```

---

## What Changes

- **Remove:** entire bento grid JSX (the `<div className="grid gap-[10px]" ...>` block) and the stats strip below it
- **Add:** 4 vertical section cards rendered from the data above
- **Keep:** section header (badge, h2, subtitle) and outer section wrapper unchanged
- **Keep:** stats strip — move it below the 4 cards, unchanged

---

## Hover Behavior

CSS via Tailwind group hover:
- Service row: `group` on the `<a>`, `group-hover:bg-[rgba(239,80,35,0.08)]` on the row div
- Arrow: `group-hover:translate-x-1 transition-transform duration-150`

---

## Out of Scope

- Service detail pages (`/services/[slug]`) — links go there but pages are not created in this task
- Mobile responsive layout
- Any other section on the page
