# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `src/app/page.tsx` to a premium, minimal aesthetic — centered hero, new section layouts, light/dark alternating backgrounds — while keeping all existing content and data unchanged.

**Architecture:** Single `page.tsx` file rewritten section-by-section. `<Header />` import replaced with inline nav. `<Footer />` kept. No new dependencies — pure Tailwind + inline styles. Data arrays (logos, services, etc.) are preserved verbatim.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS, TypeScript

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/app/page.tsx` | Rewrite | The entire homepage — all 11 sections |
| `src/components/Header.tsx` | No change | Left untouched; import removed from page |

---

### Task 1: New Nav + Hero section

**Files:**
- Modify: `src/app/page.tsx` — replace Header import + hero section

- [ ] **Step 1: Replace the Header import and hero section**

Open `src/app/page.tsx`. Replace everything from the top of the file through the closing `</section>` of section 1 (the HERO) with the following. Keep all data arrays (`clientLogos`, `services`, etc.) and state hooks unchanged — only replace the JSX structure.

```tsx
"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgAdvantagePhoto1 = "https://www.figma.com/api/mcp/asset/d4363cdd-cffc-4cf2-917c-5e9063ded58a";
const imgAdvantagePhoto2 = "https://www.figma.com/api/mcp/asset/5d9b00c5-4d44-4207-bcfc-691aef6bdb8f";
const imgAdvantagePhoto3 = "https://www.figma.com/api/mcp/asset/d8d89fa1-253b-46c5-936b-2c4694e72b51";
const imgAvatarSarah   = "https://www.figma.com/api/mcp/asset/c7c276a1-4387-495a-bf92-b09e86e36f82";
const imgAvatarDavid   = "https://www.figma.com/api/mcp/asset/a06aef9d-ff4a-44c7-97b8-791e20ed699b";
const imgAvatarMichael = "https://www.figma.com/api/mcp/asset/e88d0558-3d5f-4633-8909-e04cbb98b7b4";

// ─── Data (unchanged) ────────────────────────────────────────────────────────
// ... keep all existing data arrays exactly as they are ...
```

Then write the new `Home()` function opening and Nav + Hero:

```tsx
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-[60px] h-[64px] bg-white/85 backdrop-blur-[16px] border-b border-[#e8e8e8]">
        <div className="font-black text-[17px] tracking-[-0.5px] text-[#0a0a0a]">
          In<span className="text-[#ef5023]">Apps</span>
        </div>
        <nav className="flex gap-[32px]">
          {["Services", "Case Studies", "Technologies", "About", "Blog"].map((link) => (
            <a key={link} href="#" className="text-[13px] font-medium text-[#666] hover:text-[#0a0a0a] transition-colors no-underline">
              {link}
            </a>
          ))}
        </nav>
        <button className="bg-[#0a0a0a] text-white text-[13px] font-semibold px-[20px] h-[38px] rounded-[8px] hover:bg-[#ef5023] transition-colors border-none cursor-pointer">
          Get a Free Call
        </button>
      </header>

      <main className="flex-1 flex flex-col">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative bg-[#0a0a0a] px-[60px] py-[120px] overflow-hidden flex flex-col items-center text-center gap-[28px]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}>
          {/* radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center top, rgba(239,80,35,0.18) 0%, transparent 70%)" }} />

          <div className="relative flex flex-col items-center gap-[28px] max-w-[900px]">
            {/* badge */}
            <div className="inline-flex items-center gap-[8px] border border-[#ef5023]/35 bg-[#ef5023]/8 px-[16px] py-[6px] rounded-full">
              <span className="w-[6px] h-[6px] rounded-full bg-[#ef5023] animate-pulse" />
              <span className="text-[#ef5023] text-[11px] font-bold tracking-[1.5px] uppercase">AI-Driven Software Development</span>
            </div>

            {/* headline */}
            <h1 className="font-black text-white text-[72px] leading-[72px] tracking-[-3px] max-w-[820px]">
              Your Trusted{" "}
              <span className="text-[#ef5023]">Offshore</span>
              <br />Development Partner
            </h1>

            {/* subtext */}
            <p className="text-[#666] text-[17px] leading-[28px] max-w-[520px] font-normal">
              InApps delivers senior engineering talent for US and EU businesses — bridging the gap with high-quality, scalable solutions.
            </p>

            {/* buttons */}
            <div className="flex gap-[12px] items-center">
              <button className="bg-[#ef5023] text-white font-bold text-[14px] px-[28px] h-[50px] rounded-[10px] border-none cursor-pointer"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)" }}>
                Get a Free Consultation
              </button>
              <button className="bg-transparent text-white font-semibold text-[14px] px-[28px] h-[50px] rounded-[10px] border border-white/15 cursor-pointer hover:border-white/40 transition-colors">
                View Our Work →
              </button>
            </div>

            {/* stats */}
            <div className="flex gap-[56px] pt-[16px] border-t border-[#1a1a1a]">
              {[
                { val: "10+",  label: "Years"     },
                { val: "250+", label: "Projects"  },
                { val: "150+", label: "Experts"   },
                { val: "95%",  label: "Retention" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col gap-[2px]">
                  <span className="font-black text-white text-[32px] leading-[36px] tracking-[-1px]">{val}</span>
                  <span className="text-[#444] text-[11px] font-semibold uppercase tracking-[1px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify the file compiles**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors (or only pre-existing errors unrelated to the nav/hero).

- [ ] **Step 3: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/page.tsx
git commit -m "redesign: new sticky nav + centered hero with grid texture"
```

---

### Task 2: Client Logos section (section 2)

**Files:**
- Modify: `src/app/page.tsx` — section 2

- [ ] **Step 1: Replace the Client Logos section**

Find and replace the entire `{/* ── 2. CLIENT LOGOS MARQUEE */}` section with:

```tsx
        {/* ── 2. CLIENT LOGOS MARQUEE ──────────────────────────────────────── */}
        <section className="bg-[#fffbf0] py-[48px] overflow-hidden border-b border-[#f0ddb2]">
          <div className="max-w-[1100px] mx-auto px-[60px] flex flex-col gap-[24px]">
            <p className="text-center text-[#bbb] text-[11px] font-semibold tracking-[2px] uppercase">
              Trusted by engineering teams across{" "}
              <span className="text-[#ef5023]">15+ countries</span>
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#fffbf0] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#fffbf0] to-transparent z-10 pointer-events-none" />
              <div className="flex items-center gap-[72px] animate-marquee whitespace-nowrap w-max py-[8px]">
                {[...clientLogos, ...clientLogos].map(({ name, src }, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={name}
                    className="h-[64px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: logos section cream bg, warm border"
```

---

### Task 3: Services section (section 3)

**Files:**
- Modify: `src/app/page.tsx` — section 3

- [ ] **Step 1: Replace the Services section**

Find and replace the entire `{/* ── 3. SERVICES */}` section with:

```tsx
        {/* ── 3. SERVICES ──────────────────────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[100px] border-t-[3px] border-[#ef5023]">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-[64px]">
            {/* 2-col header */}
            <div className="grid grid-cols-2 gap-[48px] items-end">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">What We Do</p>
                <h2 className="font-black text-[#0a0a0a] text-[44px] leading-[48px] tracking-[-1.5px]">
                  End-to-End<br />
                  <span className="text-[#ef5023]">Dev Services</span>
                </h2>
              </div>
              <p className="text-[#888] text-[15px] leading-[26px] pb-[4px]">
                Comprehensive technology solutions designed to help Western businesses scale faster with world-class engineering talent.
              </p>
            </div>

            {/* flush grid */}
            <div className="grid grid-cols-3 gap-[2px] bg-[#e8e8e8] rounded-[16px] overflow-hidden">
              {services.map(({ icon, title, desc }, i) => (
                <div
                  key={title}
                  className="bg-white px-[28px] py-[32px] flex flex-col gap-[14px] hover:bg-[#fdf5f2] transition-colors cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-[#ddd] tracking-[1px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-[#0a0a0a] text-[16px] leading-[22px]">{title}</h3>
                  <p className="text-[#888] text-[13px] leading-[21px]">{desc}</p>
                  <span className="text-[#ef5023] text-[13px] font-bold mt-auto">Learn more →</span>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: services section 2-col header + flush card grid"
```

---

### Task 4: Stats section (section 4)

**Files:**
- Modify: `src/app/page.tsx` — section 4

- [ ] **Step 1: Replace the Stats section**

Find and replace the entire `{/* ── 4. STATS */}` section with:

```tsx
        {/* ── 4. STATS ─────────────────────────────────────────────────────── */}
        <section className="bg-[#ef5023] px-[60px] py-[80px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} />
          <div className="relative max-w-[1100px] mx-auto grid grid-cols-4">
            {[
              { value: "10+",  label: "Years of Experience",   sub: "In the industry"        },
              { value: "250+", label: "Projects Delivered",    sub: "Across 20+ countries"   },
              { value: "150+", label: "Tech Experts",          sub: "Senior & mid-level"      },
              { value: "95%",  label: "Client Retention Rate", sub: "Long-term partnerships"  },
            ].map(({ value, label, sub }, i) => (
              <div key={label}
                className={`flex flex-col gap-[6px] px-[40px] ${i > 0 ? "border-l border-white/15" : ""} ${i === 0 ? "pl-0" : ""}`}>
                <span className="font-black text-white text-[56px] leading-[56px] tracking-[-2px]">{value}</span>
                <span className="font-bold text-white/90 text-[14px] leading-[22px]">{label}</span>
                <span className="text-white/45 text-[12px]">{sub}</span>
              </div>
            ))}
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: stats section with vertical dividers"
```

---

### Task 5: Case Studies section (section 5)

**Files:**
- Modify: `src/app/page.tsx` — section 5, remove `caseIdx` state

- [ ] **Step 1: Remove carousel state and replace Case Studies section**

First remove the `caseIdx` state and `visibleCases` derived value — the new section shows all 4 case studies in a static 2×2 grid.

Remove these lines near the top of `Home()`:
```tsx
const [caseIdx, setCaseIdx] = useState(0);
// and
const visibleCases = caseStudies.slice(caseIdx, caseIdx + 3);
```

Then replace the entire `{/* ── 5. CASE STUDIES */}` section with:

```tsx
        {/* ── 5. CASE STUDIES ──────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] px-[60px] py-[100px]">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-[52px]">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Our Work</p>
                <h2 className="font-black text-white text-[44px] leading-[48px] tracking-[-1.5px]">
                  Case Studies &<br />
                  <span className="text-[#ef5023]">Success Stories</span>
                </h2>
              </div>
              <button className="text-[#ef5023] text-[13px] font-bold border border-[#ef5023]/30 px-[20px] h-[38px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[#ef5023]/10 transition-colors">
                View All →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-[2px] bg-[#1a1a1a] rounded-[16px] overflow-hidden">
              {caseStudies.map(({ tag, title, desc, result }) => (
                <div key={title}
                  className="bg-[#0f0f0f] p-[36px] flex flex-col gap-[16px] cursor-pointer hover:bg-[#141414] transition-colors">
                  <span className="text-[#ef5023] text-[10px] font-bold tracking-[2px] uppercase">{tag}</span>
                  <h3 className="font-black text-white text-[20px] leading-[26px] tracking-[-0.5px]">{title}</h3>
                  <p className="text-[#555] text-[13px] leading-[22px]">{desc}</p>
                  <div className="flex items-center justify-between pt-[16px] border-t border-[#1a1a1a]">
                    <span className="text-[#22c55e] text-[13px] font-bold">{result}</span>
                    <span className="text-[#444] text-[12px] font-bold hover:text-[#ef5023] transition-colors">View case →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: case studies static 2x2 grid, remove carousel"
```

---

### Task 6: Industries section (section 6)

**Files:**
- Modify: `src/app/page.tsx` — section 6

- [ ] **Step 1: Replace the Industries section**

Find and replace the entire `{/* ── 6. INDUSTRIES */}` section with:

```tsx
        {/* ── 6. INDUSTRIES ────────────────────────────────────────────────── */}
        <section className="bg-white px-[60px] py-[80px]">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[12px] items-center text-center">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Industries We Serve</p>
              <h2 className="font-black text-[#0a0a0a] text-[40px] leading-[44px] tracking-[-1.5px]">
                Built for <span className="text-[#ef5023]">Your Sector</span>
              </h2>
            </div>
            <div className="grid grid-cols-8 gap-[12px]">
              {industries.map(({ icon, name }) => (
                <div key={name}
                  className="border border-[#f0f0f0] rounded-[12px] p-[20px] flex flex-col items-center gap-[8px] cursor-pointer hover:border-[#ef5023] hover:bg-[#fff8f5] transition-all">
                  <span className="text-[24px]">{icon}</span>
                  <span className="text-[#444] text-[10px] font-bold text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: industries white bg, warm chip hover"
```

---

### Task 7: How We Work / Process section (section 7)

**Files:**
- Modify: `src/app/page.tsx` — section 7

- [ ] **Step 1: Replace the How We Work section**

Find and replace the entire `{/* ── 7. HOW WE WORK */}` section with:

```tsx
        {/* ── 7. HOW WE WORK ───────────────────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[100px]">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-[64px]">
            {/* 2-col header */}
            <div className="grid grid-cols-2 gap-[48px] items-end">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Our Process</p>
                <h2 className="font-black text-[#0a0a0a] text-[44px] leading-[48px] tracking-[-1.5px]">
                  How We <span className="text-[#ef5023]">Work</span>
                </h2>
              </div>
              <p className="text-[#888] text-[15px] leading-[26px] pb-[4px]">
                A streamlined engineering process designed for transparency, speed, and quality at every stage of delivery.
              </p>
            </div>

            {/* horizontal timeline */}
            <div className="relative grid grid-cols-4 gap-[0px]">
              {/* connecting line */}
              <div className="absolute top-[28px] left-0 right-0 h-[1px] bg-[#e8e8e8]" />
              {[
                { num: "01", title: "Discovery",     desc: "We deep-dive into your goals, technical needs, and team culture to craft the right approach." },
                { num: "02", title: "Team Curation", desc: "Hand-picking senior talent from our 150+ expert pool matched to your exact tech stack." },
                { num: "03", title: "Integration",   desc: "Seamlessly merging with your tools — Slack, Jira, GitHub — on day one." },
                { num: "04", title: "Scaling",       desc: "Continuous delivery and team expansion as your product and business grows." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="relative z-10 flex flex-col gap-[20px] pr-[32px]">
                  <div className="w-[56px] h-[56px] rounded-full bg-white border border-[#e8e8e8] flex items-center justify-center">
                    <span className="font-black text-[#ef5023] text-[18px]">{num}</span>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="font-bold text-[#0a0a0a] text-[16px]">{title}</h3>
                    <p className="text-[#888] text-[13px] leading-[21px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: process section horizontal timeline with dot connectors"
```

---

### Task 8: InApps Advantage section (section 8)

**Files:**
- Modify: `src/app/page.tsx` — section 8

- [ ] **Step 1: Replace the Advantage section**

Find and replace the entire `{/* ── 8. THE INAPPS ADVANTAGE */}` section with:

```tsx
        {/* ── 8. THE INAPPS ADVANTAGE ──────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] px-[60px] py-[100px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-[80px] items-center">
            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[12px] pb-[28px]">
                <div className="aspect-square relative rounded-[12px] overflow-hidden bg-[#141414] border border-[#1a1a1a]">
                  <img src={imgAdvantagePhoto1} alt="InApps team" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="bg-[#ef5023] rounded-[12px] flex flex-col items-center justify-center py-[40px] px-[20px]">
                  <span className="font-black text-white text-[36px] leading-[40px]">10+</span>
                  <span className="font-bold text-white/80 text-[10px] tracking-[1.5px] uppercase mt-[4px]">Years of Experience</span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[28px]">
                <div className="aspect-[3/4] relative rounded-[12px] overflow-hidden bg-[#141414] border border-[#1a1a1a]">
                  <img src={imgAdvantagePhoto2} alt="Development work" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="aspect-square relative rounded-[12px] overflow-hidden bg-[#141414] border border-[#1a1a1a]">
                  <img src={imgAdvantagePhoto3} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Why Choose Us</p>
                <h2 className="font-black text-white text-[44px] leading-[48px] tracking-[-1.5px]">
                  The InApps<br /><span className="text-[#ef5023]">Advantage</span>
                </h2>
                <p className="text-[#555] text-[15px] leading-[26px]">
                  We bridge Asian tech talent with Western market standards. We don&apos;t just write code — we build business value.
                </p>
              </div>
              <div className="flex flex-col">
                {[
                  { emoji: "🕐", title: "Time Zone Alignment",   desc: "Dedicated overlaps ensuring 4+ hours of shared working time with US/EU teams daily." },
                  { emoji: "💬", title: "Fluent Communication",  desc: "All lead engineers and PMs are fluent in English with cultural awareness of Western markets." },
                  { emoji: "🔒", title: "IP Protection",         desc: "Robust legal contracts and strict security protocols to safeguard your intellectual property." },
                  { emoji: "📊", title: "Transparent Reporting", desc: "Weekly sprint reviews, real-time Slack access, and full visibility into velocity and blockers." },
                ].map(({ emoji, title, desc }) => (
                  <div key={title} className="flex gap-[16px] items-start py-[20px] border-b border-[#141414] first:pt-0">
                    <div className="w-[36px] h-[36px] rounded-[8px] flex items-center justify-center text-[16px] flex-shrink-0"
                      style={{ background: "rgba(239,80,35,0.10)" }}>
                      {emoji}
                    </div>
                    <div className="flex flex-col gap-[3px]">
                      <h4 className="font-bold text-white text-[14px]">{title}</h4>
                      <p className="text-[#555] text-[12px] leading-[20px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: advantage section icon boxes + item dividers"
```

---

### Task 9: Technologies section (section 9)

**Files:**
- Modify: `src/app/page.tsx` — section 9, add `activeTab` state

- [ ] **Step 1: Ensure activeTab state exists at the top of Home()**

The `useState(0)` for `activeTab` was added in Task 1. Confirm the line exists:
```tsx
const [activeTab, setActiveTab] = useState(0);
```

- [ ] **Step 2: Replace the Technologies section**

Find and replace the entire `{/* ── 9. TECHNOLOGIES & PLATFORMS */}` section with:

```tsx
        {/* ── 9. TECHNOLOGIES & PLATFORMS ──────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[100px]">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-[48px]">
            {/* 2-col header */}
            <div className="grid grid-cols-2 gap-[48px] items-end">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Engineering Excellence</p>
                <h2 className="font-black text-[#0a0a0a] text-[44px] leading-[48px] tracking-[-1.5px]">
                  Our <span className="text-[#ef5023]">Tech Stack</span>
                </h2>
              </div>
              <p className="text-[#888] text-[15px] leading-[26px] pb-[4px]">
                We work with the most advanced and reliable technologies to build scalable digital products.
              </p>
            </div>

            {/* tabs */}
            <div className="flex gap-[6px] flex-wrap">
              {["AI Technologies", "Back-end", "Front-end", "App Development", "Cloud Computing", "DevOps"].map((tab, i) => (
                <button key={tab} onClick={() => setActiveTab(i)}
                  className={`h-[34px] px-[16px] rounded-full text-[12px] font-semibold border cursor-pointer transition-all ${
                    activeTab === i
                      ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                      : "bg-white text-[#888] border-[#e8e8e8] hover:border-[#0a0a0a]/30 hover:text-[#0a0a0a]"
                  }`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* tech pills */}
            <div className="flex flex-wrap gap-[8px]">
              {["Python", "TensorFlow", "PyTorch", "OpenCV", "LLaMA", "Keras", "YOLO", "Apache Spark", "MLflow", "Kubeflow"].map((name) => (
                <div key={name}
                  className="bg-white border border-[#e8e8e8] rounded-[8px] flex items-center justify-center px-[18px] py-[14px] min-w-[110px] cursor-pointer transition-all hover:border-[#ef5023]"
                  style={{ boxShadow: "0 0 0 0px rgba(239,80,35,0)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(239,80,35,0.10)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0px rgba(239,80,35,0)")}>
                  <div className="flex flex-col items-center gap-[4px]">
                    <span className="font-black text-[#0a0a0a] text-[13px]">
                      {name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                    </span>
                    <span className="text-[#aaa] text-[9px] font-medium text-center">{name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a href="/stack"
                className="border border-[#ef5023]/40 text-[#ef5023] font-bold text-[13px] px-[28px] h-[44px] rounded-[8px] hover:bg-[#ef5023]/8 transition-colors flex items-center gap-[8px] no-underline">
                Explore Full Tech Stack →
              </a>
            </div>
          </div>
        </section>
```

- [ ] **Step 3: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: tech section 2-col header, dark active tab, pill glow hover"
```

---

### Task 10: Testimonials section (section 10)

**Files:**
- Modify: `src/app/page.tsx` — section 10, remove `testimonialIdx` state

- [ ] **Step 1: Remove testimonial carousel state**

Remove these lines from `Home()`:
```tsx
const [testimonialIdx, setTestimonialIdx] = useState(0);
// and
const visibleTestimonials = testimonials.slice(testimonialIdx, testimonialIdx + 3);
```

- [ ] **Step 2: Replace the Testimonials section**

Find and replace the entire `{/* ── 10. TESTIMONIALS */}` section with:

```tsx
        {/* ── 10. TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="bg-[#140800] border-y border-[#2a1800] px-[60px] py-[100px]">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-[52px]">
            <div className="flex flex-col gap-[14px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Testimonials</p>
              <h2 className="font-black text-white text-[44px] leading-[48px] tracking-[-1.5px]">
                What Our <span className="text-[#ef5023]">Partners Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-[16px]">
              {testimonials.map(({ quote, name, role }) => (
                <div key={name} className="bg-[#1a1000] border border-[#2a1800] rounded-[16px] p-[32px] flex flex-col gap-[20px]">
                  <div className="text-[#ef5023] text-[13px] tracking-[2px]">★★★★★</div>
                  <p className="text-[#888] text-[14px] leading-[24px] italic flex-1">&ldquo;{quote}&rdquo;</p>
                  <div className="flex items-center gap-[12px] pt-[16px] border-t border-[#2a1800]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#ef5023] flex items-center justify-center text-white font-black text-[12px] flex-shrink-0">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-white text-[13px]">{name}</div>
                      <div className="text-[#5a3a1a] text-[10px] font-semibold uppercase tracking-[0.5px] mt-[1px]">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 3: Compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: testimonials static grid, orange avatar initials, no carousel"
```

---

### Task 11: CTA section + closing tags + marquee CSS

**Files:**
- Modify: `src/app/page.tsx` — section 11, close tags, style block

- [ ] **Step 1: Replace the CTA section and close the component**

Find and replace everything from `{/* ── 11. CTA */}` through the end of the file with:

```tsx
        {/* ── 11. CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[100px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="relative bg-[#0a0a0a] rounded-[24px] px-[60px] py-[80px] flex flex-col items-center gap-[28px] text-center overflow-hidden">
              {/* radial glow */}
              <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, rgba(239,80,35,0.20), transparent 70%)" }} />

              <h2 className="relative font-black text-white text-[52px] leading-[56px] tracking-[-2px] max-w-[640px]">
                Ready to Build Your Next<br />
                <span className="text-[#ef5023]">Digital Product?</span>
              </h2>
              <p className="relative text-[#555] text-[16px] leading-[27px] max-w-[460px]">
                Stop struggling with local talent shortages. Get high-quality senior engineers delivered on time, every time.
              </p>
              <div className="relative flex gap-[12px] flex-wrap justify-center">
                <button className="bg-[#ef5023] text-white font-bold text-[14px] px-[32px] h-[50px] rounded-[10px] border-none cursor-pointer"
                  style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)" }}>
                  Book a Free Consultation
                </button>
                <button className="bg-transparent text-white font-bold text-[14px] px-[32px] h-[50px] rounded-[10px] border border-white/15 cursor-pointer hover:border-white/40 transition-colors">
                  View Portfolio
                </button>
              </div>
              <span className="relative text-[#333] text-[11px] font-bold tracking-[1.5px] uppercase">
                No commitment required · Free 30-min call
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: Final compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: CTA dark box in light section, close component"
```

---

### Task 12: Remove unused Label and Heading components + clean up imports

**Files:**
- Modify: `src/app/page.tsx` — remove dead code

- [ ] **Step 1: Remove the Label and Heading shared components**

The `Label` and `Heading` function components defined in the old file are no longer used. Find and delete these two function definitions:

```tsx
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase"
       style={{ fontFamily: "'Inter', sans-serif" }}>
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-black text-white text-[42px] leading-[48px] tracking-[-1.5px]"
        style={{ fontFamily: "'Inter', sans-serif" }}>
      {children}
    </h2>
  );
}
```

Also remove the `Header` import at the top if still present:
```tsx
import Header from "@/components/Header";
```

- [ ] **Step 2: Final compile check**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1
```

Expected: clean compile.

- [ ] **Step 3: Final commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: remove unused Label/Heading components and Header import"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Nav: frosted glass, logo, links, dark CTA button — Task 1
- ✅ Hero: centered, 72px, grid texture, glow, 4 stats — Task 1
- ✅ Logos: cream bg, warm divider, gradient fix — Task 2
- ✅ Services: 2-col header, flush grid, numbered cards, hover — Task 3
- ✅ Stats: dividers between blocks — Task 4
- ✅ Case Studies: 2×2 static grid, no carousel, View All top-right — Task 5
- ✅ Industries: white bg, warm chip hover — Task 6
- ✅ Process: horizontal timeline, dot connectors, 2-col header — Task 7
- ✅ Advantage: icon boxes, photo block bg/border, item dividers — Task 8
- ✅ Technologies: 2-col header, dark active tab, pill glow ring — Task 9
- ✅ Testimonials: amber bg, static grid, orange avatar initials, no carousel — Task 10
- ✅ CTA: dark box inside light section, radial glow — Task 11
- ✅ Dead code cleanup — Task 12

**Placeholder scan:** No TBDs, TODOs, or vague steps. All code blocks are complete.

**Type consistency:** `activeTab`/`setActiveTab` defined in Task 1, used in Task 9. `caseStudies` array used directly (not sliced) in Task 5. `testimonials` array used directly in Task 10. All consistent.
