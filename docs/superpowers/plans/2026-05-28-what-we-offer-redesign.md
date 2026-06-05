# WHAT WE OFFER Section Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the bento grid in the WHAT WE OFFER section of `src/app/services/page.tsx` with 4 vertical section cards, one per specialization, each listing its services as clickable rows linking to `/services/<slug>`.

**Architecture:** All changes are self-contained in `src/app/services/page.tsx`. The data (specializations + services) is defined as a const array inside the file. No new files or components needed — the section is rendered inline using `.map()`. Hover behavior is implemented with Tailwind's `group` / `group-hover` utilities.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, TypeScript.

---

## Files

- Modify: `src/app/services/page.tsx` — replace the bento grid JSX with vertical sections layout

---

### Task 1: Replace bento grid with vertical sections

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Add the specializations data constant**

Open `src/app/services/page.tsx`. Before the `return` statement inside `ServicesPage`, add:

```tsx
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

- [ ] **Step 2: Replace the bento grid JSX**

In `src/app/services/page.tsx`, find the block starting with the comment `{/* Bento Grid */}` and ending just before the `{/* Stats strip */}` comment. Replace the entire bento grid `<div>` (the `<div className="grid gap-[10px]" ...>` block and its children) with:

```tsx
{/* Vertical Sections */}
<div className="flex flex-col gap-[16px]">
  {specializations.map((spec, i) => (
    <div
      key={spec.name}
      className="relative overflow-hidden rounded-[20px] p-[28px] flex flex-col gap-[20px]"
      style={{
        background: "#111111",
        border: i === 0
          ? "1px solid rgba(239,80,35,0.3)"
          : "1px solid #1f1f1f",
      }}
    >
      {/* Number badge */}
      <span
        className="absolute right-[24px] top-[16px] font-black select-none pointer-events-none"
        style={{
          fontSize: "80px",
          lineHeight: 1,
          color: "rgba(255,255,255,0.04)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {spec.number}
      </span>

      {/* Category header */}
      <div className="flex items-center gap-[16px]">
        <div
          className="flex items-center justify-center rounded-[14px] shrink-0"
          style={{
            width: "72px",
            height: "72px",
            background: "rgba(239,80,35,0.12)",
            border: "1px solid rgba(239,80,35,0.25)",
            fontSize: "32px",
          }}
        >
          {spec.icon}
        </div>
        <div className="flex flex-col gap-[4px]">
          <span
            className="font-black text-[20px] leading-[1.2]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            {spec.name}
          </span>
          <span
            className="text-[12px]"
            style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
          >
            {spec.services.length} services
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      {/* Service list */}
      <div className="flex flex-col gap-[4px]">
        {spec.services.map((service) => (
          <a
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex items-center gap-[14px] px-[14px] py-[12px] rounded-[12px] transition-colors duration-150"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(239,80,35,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div
              className="flex items-center justify-center rounded-[10px] shrink-0"
              style={{
                width: "44px",
                height: "44px",
                background: "rgba(239,80,35,0.08)",
                fontSize: "20px",
              }}
            >
              {service.icon}
            </div>
            <span
              className="flex-1 font-bold text-[14px]"
              style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
            >
              {service.name}
            </span>
            <span
              className="text-[16px] transition-transform duration-150 group-hover:translate-x-1"
              style={{ color: "#ef5023" }}
            >
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 3: Verify the page renders correctly**

Run the dev server:
```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
npm run dev
```

Open `http://localhost:3000/services` in the browser. Verify:
- 4 stacked cards appear under the section header
- Each card shows category icon (72px box), name, service count
- Each service row has a 44px icon box, name, and orange `→`
- Hovering a service row shows light orange background and arrow nudges right
- Card `01` (AI & Automation) has an orange-tinted border, others are `#1f1f1f`
- Number badge (`01`–`04`) is visible but very faint in the top-right of each card
- Stats strip below the cards is unchanged

- [ ] **Step 4: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/services/page.tsx
git commit -m "feat: redesign WHAT WE OFFER section with vertical specialization cards"
```
