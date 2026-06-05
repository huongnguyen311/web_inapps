# Navigation Mega Menu — Design Spec
**Date:** 2026-05-27  
**Status:** Approved

---

## Overview

Cập nhật component `Header.tsx` để thêm mega menu dropdown cho 3 nav items có sub-menu: **Services**, **Expertise**, **About Us**. Hai items còn lại (**Case Studies**, **Blog**) là plain links không có sub-menu.

---

## Menu Structure

### Nav items

| Item | Type | Sub-menu |
|------|------|----------|
| Services | Mega menu | ✓ |
| Expertise | Mega menu | ✓ |
| Case Studies | Link | — |
| Blog | Link | — |
| About Us | Mega menu | ✓ |

---

## Mega Menu: Services

**Layout:** 4 cột — border-top cam `#ef5023` (2px)

### Cột 1 — Engagement Models
- 🌏 **Offshore Development Center** — Dedicated offshore team, fully managed
- 👥 **Staff Augmentation** — Scale team with vetted engineers
- ✅ **QA & Testing** — Manual & automated quality assurance
- 🎨 **UI/UX Design** — User-centered design & prototyping

### Cột 2 — AI & Automation
- 🧠 **AI Agent Development** — Autonomous agents for complex tasks
- ⚙️ **Agentic Workflow Automation** — End-to-end AI-driven process flows
- ✨ **Generative AI Integration** — LLM-powered features in your product
- 🔬 **AI Development Services** — Custom ML models & AI infrastructure

### Cột 3 — Engineering
- 💻 **Custom Software Development** — Tailored solutions built from scratch
- 🌐 **Web Development** — Performant, scalable web applications
- 📱 **Mobile App Development** — Native & cross-platform mobile apps
- ☁️ **Cloud & DevOps** — CI/CD, infra, and cloud migration
- 🚀 **MVP / Proof of Concept** — Validate ideas fast, ship lean MVPs
- 🔗 **System Integration** — Connect APIs, ERPs, and data sources

### Cột 4 — CTA Card
- Icon + Title: "Book a Discovery Call"
- Desc: "Get a free 30-min consultation on your next project."
- Button: `Book a Discovery Call` (bg `#ef5023`)
- Stats: "500+ in-house developers worldwide"
- Badges: ISO Certified · Clutch Top · Sao Khue

---

## Mega Menu: Expertise

**Layout:** 3 cột — border-top cam `#ef5023` (2px)

### Cột 1 — Industries
- 🏦 **Fintech & Banking** — Payment systems, trading platforms, KYC
- 🏥 **Healthcare & MedTech** — EHR, telemedicine, health data platforms
- 🛒 **E-commerce & Retail** — Marketplace, POS, inventory systems
- 🚚 **Logistics & Supply Chain** — Fleet management, tracking, WMS
- ☁️ **SaaS & Enterprise** — Multi-tenant platforms at scale

### Cột 2 — Technologies (dạng tag theo nhóm)
- **Frontend:** React · Next.js · Vue.js · TypeScript
- **Backend:** Node.js · Python · Go · Java
- **Cloud & AI:** AWS · GCP · Azure · AI/ML · LLM
- **Mobile:** React Native · Flutter · Swift

### Cột 3 — CTA Card
- Icon + Title: "Find Your Tech Stack"
- Desc: "Not sure which technology fits your project? Talk to our engineers."
- Button: `Talk to an Expert`
- Stats: "150+ senior tech experts", "10+ years of experience"

---

## Mega Menu: About Us

**Layout:** 2 cột — border-top cam `#ef5023` (2px)

### Cột 1 — Company (numbered list)
- 01 **Our Story** — 10+ years building software for the world
- 02 **Leadership Team** — Meet the people behind InApps
- 03 **Life at InApps** — Culture, values, and how we work
- 04 **Careers** — Join our growing team of 150+ engineers
- 05 **Press & Awards** — #1 Vietnam · Top 5 SEA on Clutch

### Cột 2 — Stats Highlight Card
- Title: "InApps by Numbers"
- 2×2 grid stats: 10+ Years · 150+ Experts · 250+ Projects · 95% Retention
- Badges: #1 Vietnam · Top 5 SEA · Clutch 5.0★

---

## Visual Design System

### Colors
- Background panel: `#0d0d0d`
- Border: `1px solid #1f1f1f`
- Top accent border: `2px solid #ef5023`
- Item hover bg: `#161616`
- Item hover title color: `#ef5023`
- Col title: `#555` (uppercase, letter-spacing 2px)
- Item title: `#e0e0e0`
- Item desc: `#555`
- CTA card bg: `linear-gradient(135deg, #1a0800, #120500)`
- CTA card border: `rgba(239,80,35,0.2)`

### Typography
- Col title: `10px`, `font-weight: 800`, uppercase, letter-spacing `2px`
- Item title: `13px`, `font-weight: 600`
- Item desc: `11px`, color `#555`
- Tech tags: `11px`, `font-weight: 600`

### Interactions
- **Trigger:** hover vào nav item có sub-menu
- **Arrow indicator:** `▾` xoay 180° khi menu mở (`transition: transform 0.2s`)
- **Show/hide:** CSS `:hover` group hoặc state trong React (`useState`)
- **Item hover:** background `#161616`, title color đổi sang `#ef5023`
- **Panel animation:** `opacity 0→1` + `translateY(-4px → 0)`, duration `150ms ease-out`
- **Close:** mouse leave khỏi nav item + panel (dùng `onMouseLeave` với delay nhỏ ~100ms để tránh flicker)

### Layout
- Panel: full-width (left-edge align với logo, right-edge align với CTA) hoặc centered dưới nav
- `border-radius: 0 0 16px 16px` (bo góc dưới)
- Subtle grid background pattern: `rgba(255,255,255,0.015)` 40×40px
- `z-index: 50` để overlay lên content

### Icon treatment
- Icon container: `30×30px`, `border-radius: 7px`
- Default: `bg rgba(239,80,35,0.1)`, `border rgba(239,80,35,0.15)`
- Blue variant: `bg rgba(59,130,246,0.1)`, `border rgba(59,130,246,0.2)`
- Green variant: `bg rgba(34,197,94,0.1)`, `border rgba(34,197,94,0.2)`
- Purple variant: `bg rgba(168,85,247,0.1)`, `border rgba(168,85,247,0.2)`

---

## Component Architecture

```
Header.tsx (client component — "use client")
├── logo
├── nav
│   ├── NavItem (plain link) — Case Studies, Blog
│   └── NavItemWithMenu — Services, Expertise, About Us
│       ├── trigger (label + arrow)
│       └── MegaMenu panel (absolute positioned)
│           ├── MegaCol (repeatable)
│           │   ├── ColTitle
│           │   └── MegaItem[] (icon + title + desc)
│           └── CtaCard
└── CTA button
```

**State:** `activeMenu: string | null` — track menu nào đang mở  
**Approach:** React state + mouse events (không dùng CSS-only `:hover` vì cần delay để tránh flicker khi di chuyển chuột giữa trigger và panel)

---

## Files to Change

- `src/components/Header.tsx` — rewrite toàn bộ với mega menu logic
- Không cần file mới, không cần thư viện thêm (pure Tailwind + inline style nhất quán với codebase hiện tại)
