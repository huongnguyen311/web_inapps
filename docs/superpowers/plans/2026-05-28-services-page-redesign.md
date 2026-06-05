# Services Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `src/app/services/page.tsx` to a dark-themed, premium layout with a bento services grid, full 13-service catalogue, and an Engagement Models section replacing the current "How We Work" section.

**Architecture:** Single file rewrite of `src/app/services/page.tsx` — no new components needed since the page is self-contained and the existing `Header`/`Footer` stay unchanged. The page is broken into 4 clear sections: Hero, Services Bento Grid, Engagement Models, CTA Banner.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript, Inter font (already in project)

---

## File Structure

| File | Action | Purpose |
|---|---|---|
| `src/app/services/page.tsx` | **Rewrite** | Full dark redesign — all 4 sections |

No new files required. Header and Footer components are unchanged.

---

### Task 1: Hero Section — Dark Theme

**Files:**
- Modify: `src/app/services/page.tsx` — replace the Hero section only (lines 9–141)

- [ ] **Step 1: Replace the Hero section**

Replace everything inside `{/* Hero Section */}` (the `<section>` tag and its contents) with:

```tsx
{/* Hero Section */}
<section className="overflow-hidden px-[80px] py-[96px]" style={{ background: "#0a0f1a" }}>
  <div className="max-w-[1280px] mx-auto">
    <div className="grid grid-cols-2 gap-[48px] items-center">
      {/* Left: Hero Text */}
      <div className="flex flex-col gap-[32px] items-start">
        {/* Badge */}
        <div
          className="flex gap-[8px] items-center px-[13px] py-[5px] rounded-[9999px]"
          style={{
            background: "rgba(239,80,35,0.12)",
            border: "1px solid rgba(239,80,35,0.25)",
          }}
        >
          <div className="relative size-[8px]">
            <div className="absolute inset-0 rounded-[9999px] opacity-75" style={{ background: "#ef5023" }} />
            <div className="rounded-[9999px] size-[8px]" style={{ background: "#ef5023" }} />
          </div>
          <span
            className="font-bold text-[12px] tracking-[0.6px] uppercase"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            NEXT-GEN TECH PARTNER
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col w-full">
          <h1
            className="font-black text-[72px] tracking-[-1.8px] leading-[72px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Innovative
            <br />
            Software
            <br />
            <span style={{ color: "#ef5023" }}>Solutions</span>
            {` for`}
            <br />
            Your Business
          </h1>
        </div>

        {/* Subtext */}
        <p
          className="text-[18px] leading-[29.25px] max-w-[576px]"
          style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
        >
          We build scalable web, mobile, and AI solutions tailored to your unique business needs. From concept to deployment, we are your engineering powerhouse.
        </p>

        {/* CTAs */}
        <div className="flex gap-[16px] items-start">
          <button
            className="font-bold text-[18px] px-[32px] py-[17px] rounded-[12px] leading-[28px]"
            style={{ background: "#ef5023", color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Explore Services
          </button>
          <button
            className="font-bold text-[18px] px-[33px] py-[17px] rounded-[12px] leading-[28px]"
            style={{
              border: "1px solid rgba(239,80,35,0.5)",
              color: "#ef5023",
              background: "transparent",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Right: Hero visual */}
      <div className="relative">
        <div
          className="absolute inset-[-4px] rounded-[16px] blur-[4px] opacity-20"
          style={{ background: "linear-gradient(to right, #ef5023, #fb923c)" }}
        />
        <div
          className="aspect-video relative rounded-[16px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a0d00 0%, #0d0d0d 100%)",
            border: "1px solid rgba(239,80,35,0.2)",
            boxShadow: "0px 25px 50px -12px rgba(239,80,35,0.2)",
          }}
        >
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(239,80,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(239,80,35,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow */}
          <div
            className="absolute top-[-60px] right-[-60px] size-[200px] rounded-[9999px] pointer-events-none"
            style={{ background: "rgba(239,80,35,0.12)", filter: "blur(50px)" }}
          />
          {/* Center badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex flex-col items-center gap-[12px] px-[32px] py-[24px] rounded-[16px]"
              style={{
                background: "rgba(239,80,35,0.08)",
                border: "1px solid rgba(239,80,35,0.2)",
              }}
            >
              <span className="text-[40px]">🚀</span>
              <span
                className="font-bold text-[16px]"
                style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
              >
                500+ Projects Delivered
              </span>
              <span
                className="text-[13px]"
                style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
              >
                Across 30+ countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify in browser**

Run `npm run dev` if not already running. Open `http://localhost:3000/services`.  
Expected: Hero has dark `#0a0f1a` background, white headline, orange accent on "Solutions", orange CTAs.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "redesign: services hero — dark theme"
```

---

### Task 2: Services Bento Grid Section

**Files:**
- Modify: `src/app/services/page.tsx` — replace the Core Services section (lines 143–337)

- [ ] **Step 1: Replace the Core Services section**

Replace everything inside `{/* Core Services Section */}` with:

```tsx
{/* Services Bento Grid */}
<section className="px-[80px] py-[96px]" style={{ background: "#0a0f1a" }}>
  <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px]">
    {/* Section Header */}
    <div className="flex flex-col gap-[12px]">
      <div
        className="inline-flex items-center px-[12px] py-[4px] rounded-[9999px] self-start"
        style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}
      >
        <span
          className="font-bold text-[10px] tracking-[1.5px] uppercase"
          style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
        >
          WHAT WE OFFER
        </span>
      </div>
      <h2
        className="font-black text-[36px] tracking-[-0.9px] leading-[44px]"
        style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
      >
        End-to-end <span style={{ color: "#ef5023" }}>engineering</span> for ambitious teams
      </h2>
      <p className="text-[14px]" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>
        13 services across 4 specializations
      </p>
    </div>

    {/* Bento Grid */}
    <div
      className="grid gap-[10px]"
      style={{ gridTemplateColumns: "1.6fr 1fr 1fr", gridTemplateRows: "auto auto" }}
    >
      {/* AI & Automation — large, spans 2 rows */}
      <div
        className="flex flex-col gap-[16px] p-[24px] rounded-[16px] row-span-2 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a0d00 0%, #120800 100%)",
          border: "1px solid rgba(239,80,35,0.35)",
        }}
      >
        <div
          className="absolute top-[-40px] right-[-40px] size-[160px] rounded-[9999px] pointer-events-none"
          style={{ background: "rgba(239,80,35,0.12)", filter: "blur(40px)" }}
        />
        <div className="flex items-center gap-[10px]">
          <div
            className="flex items-center justify-center rounded-[10px] size-[40px] text-[18px] shrink-0"
            style={{ background: "rgba(239,80,35,0.15)", border: "1px solid rgba(239,80,35,0.3)" }}
          >
            🧠
          </div>
          <div>
            <div
              className="font-bold text-[9px] tracking-[1.5px] uppercase"
              style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
            >
              Featured
            </div>
            <div
              className="font-bold text-[15px]"
              style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
            >
              AI &amp; Automation
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          {[
            { name: "AI Agent Development", desc: "Autonomous agents for complex tasks" },
            { name: "Agentic Workflow Automation", desc: "End-to-end AI-driven process flows" },
            { name: "Generative AI Integration", desc: "LLM-powered features in your product" },
            { name: "AI Development Services", desc: "Custom ML models & AI infrastructure" },
          ].map((service) => (
            <div
              key={service.name}
              className="flex flex-col gap-[4px] p-[14px] rounded-[10px]"
              style={{
                background: "rgba(239,80,35,0.08)",
                border: "1px solid rgba(239,80,35,0.15)",
              }}
            >
              <span
                className="font-bold text-[13px]"
                style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
              >
                {service.name}
              </span>
              <span
                className="text-[11px] leading-[1.5]"
                style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
              >
                {service.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering — wide, spans 2 cols */}
      <div
        className="flex flex-col gap-[14px] p-[18px] rounded-[16px] col-span-2"
        style={{
          background: "#0f172a",
          border: "1px solid rgba(239,80,35,0.15)",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <div
            className="flex items-center justify-center rounded-[8px] size-[34px] text-[14px] shrink-0"
            style={{ background: "rgba(239,80,35,0.1)", border: "1px solid rgba(239,80,35,0.2)" }}
          >
            ⚙️
          </div>
          <span
            className="font-bold text-[14px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Engineering
          </span>
          <span
            className="ml-auto text-[11px]"
            style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
          >
            6 services
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[8px]">
          {[
            { icon: "</>", name: "Custom Software Development" },
            { icon: "🌐", name: "Web Development" },
            { icon: "📱", name: "Mobile App Development" },
            { icon: "📦", name: "SaaS Development" },
            { icon: "☁️", name: "Cloud & DevOps" },
            { icon: "🚀", name: "MVP / Proof of Concept" },
          ].map((s) => (
            <div
              key={s.name}
              className="flex flex-col gap-[4px] p-[10px] rounded-[8px]"
              style={{
                background: "rgba(239,80,35,0.06)",
                border: "1px solid rgba(239,80,35,0.12)",
              }}
            >
              <span className="text-[13px]">{s.icon}</span>
              <span
                className="font-bold text-[11px] leading-[1.4]"
                style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div
        className="flex flex-col gap-[10px] p-[18px] rounded-[16px]"
        style={{
          background: "#0f172a",
          border: "1px solid rgba(239,80,35,0.15)",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <div
            className="flex items-center justify-center rounded-[8px] size-[34px] text-[14px] shrink-0"
            style={{ background: "rgba(239,80,35,0.1)", border: "1px solid rgba(239,80,35,0.2)" }}
          >
            🤝
          </div>
          <span
            className="font-bold text-[13px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Engagement Models
          </span>
        </div>
        <div className="flex flex-col gap-[6px]">
          {["Offshore Dev Center", "Staff Augmentation", "Project-Based Dev"].map((s) => (
            <div
              key={s}
              className="flex items-center gap-[6px] p-[8px] rounded-[8px]"
              style={{ background: "rgba(239,80,35,0.06)", border: "1px solid rgba(239,80,35,0.1)" }}
            >
              <div
                className="size-[5px] rounded-[9999px] shrink-0"
                style={{ background: "rgba(239,80,35,0.6)" }}
              />
              <span
                className="text-[11px] font-bold"
                style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quality & Design */}
      <div
        className="flex flex-col gap-[10px] p-[18px] rounded-[16px]"
        style={{
          background: "#0f172a",
          border: "1px solid rgba(239,80,35,0.15)",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <div
            className="flex items-center justify-center rounded-[8px] size-[34px] text-[14px] shrink-0"
            style={{ background: "rgba(239,80,35,0.1)", border: "1px solid rgba(239,80,35,0.2)" }}
          >
            ✨
          </div>
          <span
            className="font-bold text-[13px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Quality &amp; Design
          </span>
        </div>
        <div className="flex flex-col gap-[6px]">
          {["QA & Testing", "UI/UX Design"].map((s) => (
            <div
              key={s}
              className="flex items-center gap-[6px] p-[8px] rounded-[8px]"
              style={{ background: "rgba(239,80,35,0.06)", border: "1px solid rgba(239,80,35,0.1)" }}
            >
              <div
                className="size-[5px] rounded-[9999px] shrink-0"
                style={{ background: "rgba(239,80,35,0.6)" }}
              />
              <span
                className="text-[11px] font-bold"
                style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Stats strip */}
    <div
      className="grid grid-cols-4 gap-[1px] pt-[24px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {[
        { value: "500+", label: "Projects" },
        { value: "30+", label: "Countries" },
        { value: "13", label: "Services", orange: true },
        { value: "4", label: "Specializations" },
      ].map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-[4px]">
          <span
            className="font-black text-[28px] tracking-[-0.5px]"
            style={{
              color: stat.orange ? "#ef5023" : "#ffffff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {stat.value}
          </span>
          <span
            className="text-[11px]"
            style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3000/services`.  
Expected: Bento grid visible — AI & Automation large left card with 4 sub-cards, Engineering wide card with 3×2 grid, two smaller cards bottom-right, stats strip with 500+/30+/13/4.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "redesign: services bento grid section"
```

---

### Task 3: Engagement Models Section

**Files:**
- Modify: `src/app/services/page.tsx` — replace the How We Work section (lines 339–541)

- [ ] **Step 1: Replace the How We Work section**

Replace everything inside `{/* How We Work Section */}` with:

```tsx
{/* Engagement Models Section */}
<section className="px-[80px] py-[96px]" style={{ background: "#060c18" }}>
  <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px]">
    {/* Section Header */}
    <div className="flex flex-col gap-[12px]">
      <div
        className="inline-flex items-center px-[12px] py-[4px] rounded-[9999px] self-start"
        style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}
      >
        <span
          className="font-bold text-[10px] tracking-[1.5px] uppercase"
          style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
        >
          HOW WE ENGAGE
        </span>
      </div>
      <h2
        className="font-black text-[36px] tracking-[-0.9px] leading-[44px]"
        style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
      >
        Choose your <span style={{ color: "#ef5023" }}>engagement model</span>
      </h2>
      <p
        className="text-[16px] leading-[26px] max-w-[560px]"
        style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
      >
        Flexible models designed to match your team structure, timeline, and growth stage.
      </p>
    </div>

    {/* 3 Cards */}
    <div className="grid grid-cols-3 gap-[14px]">
      {/* Card 1: Offshore Dev Center */}
      <div
        className="flex flex-col gap-[20px] p-[28px] rounded-[16px] relative overflow-hidden"
        style={{
          background: "#110a06",
          border: "1px solid rgba(239,80,35,0.2)",
        }}
      >
        <div
          className="absolute top-[-40px] right-[-40px] size-[140px] rounded-[9999px] pointer-events-none"
          style={{ background: "rgba(239,80,35,0.06)", filter: "blur(35px)" }}
        />
        <div
          className="flex items-center justify-center rounded-[10px] size-[44px] text-[20px] shrink-0"
          style={{ background: "rgba(239,80,35,0.1)", border: "1px solid rgba(239,80,35,0.2)" }}
        >
          🏢
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3
            className="font-bold text-[16px] leading-[24px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Offshore Development Center
          </h3>
          <p
            className="text-[12px] leading-[1.6]"
            style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
          >
            A fully managed, dedicated remote team that works exclusively on your product.
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span
            className="font-bold text-[9px] tracking-[1.5px] uppercase"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Best for
          </span>
          {["Long-term development", "Product scaling", "Dedicated remote team"].map((item) => (
            <div key={item} className="flex items-center gap-[8px]">
              <div
                className="size-[5px] rounded-[9999px] shrink-0"
                style={{ background: "rgba(239,80,35,0.6)" }}
              />
              <span
                className="text-[12px]"
                style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <div
          className="mt-auto pt-[16px] flex items-center gap-[6px]"
          style={{ borderTop: "1px solid rgba(239,80,35,0.1)" }}
        >
          <span
            className="font-bold text-[13px]"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Build Your Dedicated Team
          </span>
          <span style={{ color: "#ef5023" }}>→</span>
        </div>
      </div>

      {/* Card 2: Staff Augmentation */}
      <div
        className="flex flex-col gap-[20px] p-[28px] rounded-[16px] relative overflow-hidden"
        style={{
          background: "#140d07",
          border: "1px solid rgba(239,80,35,0.25)",
        }}
      >
        <div
          className="absolute top-[-40px] right-[-40px] size-[140px] rounded-[9999px] pointer-events-none"
          style={{ background: "rgba(239,80,35,0.08)", filter: "blur(35px)" }}
        />
        <div
          className="flex items-center justify-center rounded-[10px] size-[44px] text-[20px] shrink-0"
          style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}
        >
          👥
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3
            className="font-bold text-[16px] leading-[24px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Staff Augmentation
          </h3>
          <p
            className="text-[12px] leading-[1.6]"
            style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
          >
            Vetted engineers embedded directly into your existing team and workflows.
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span
            className="font-bold text-[9px] tracking-[1.5px] uppercase"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Best for
          </span>
          {["Fast hiring", "Skill gaps", "Team extension"].map((item) => (
            <div key={item} className="flex items-center gap-[8px]">
              <div
                className="size-[5px] rounded-[9999px] shrink-0"
                style={{ background: "rgba(239,80,35,0.6)" }}
              />
              <span
                className="text-[12px]"
                style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <div
          className="mt-auto pt-[16px] flex items-center gap-[6px]"
          style={{ borderTop: "1px solid rgba(239,80,35,0.12)" }}
        >
          <span
            className="font-bold text-[13px]"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Hire Engineers Now
          </span>
          <span style={{ color: "#ef5023" }}>→</span>
        </div>
      </div>

      {/* Card 3: Project-Based Development */}
      <div
        className="flex flex-col gap-[20px] p-[28px] rounded-[16px] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1f0e04, #160a02)",
          border: "1px solid rgba(239,80,35,0.4)",
        }}
      >
        <div
          className="absolute top-[-40px] right-[-40px] size-[160px] rounded-[9999px] pointer-events-none"
          style={{ background: "rgba(239,80,35,0.15)", filter: "blur(40px)" }}
        />
        {/* Popular badge */}
        <div
          className="absolute top-[16px] right-[16px] px-[8px] py-[3px] rounded-[9999px]"
          style={{ background: "#ef5023" }}
        >
          <span
            className="font-bold text-[9px] tracking-[0.5px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            POPULAR
          </span>
        </div>
        <div
          className="flex items-center justify-center rounded-[10px] size-[44px] text-[20px] shrink-0"
          style={{ background: "rgba(239,80,35,0.18)", border: "1px solid rgba(239,80,35,0.4)" }}
        >
          🚀
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3
            className="font-bold text-[16px] leading-[24px]"
            style={{ color: "#ffffff", fontFamily: "'Inter', sans-serif" }}
          >
            Project-Based Development
          </h3>
          <p
            className="text-[12px] leading-[1.6]"
            style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
          >
            Fixed-scope delivery with clear milestones, managed end-to-end by our team.
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span
            className="font-bold text-[9px] tracking-[1.5px] uppercase"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Best for
          </span>
          {["MVP development", "Fixed-scope projects", "Startup launches", "Rapid prototyping"].map((item) => (
            <div key={item} className="flex items-center gap-[8px]">
              <div className="size-[5px] rounded-[9999px] shrink-0" style={{ background: "#ef5023" }} />
              <span className="text-[12px]" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[8px]">
          <span
            className="font-bold text-[9px] tracking-[1.5px] uppercase"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Key Benefits
          </span>
          {[
            "Predictable timelines",
            "Lower management overhead",
            "Faster time-to-market",
            "Clear milestones & reporting",
          ].map((item) => (
            <div key={item} className="flex items-center gap-[8px]">
              <span className="text-[11px]" style={{ color: "#ef5023" }}>✓</span>
              <span className="text-[12px]" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <div
          className="mt-auto pt-[16px] flex items-center gap-[6px]"
          style={{ borderTop: "1px solid rgba(239,80,35,0.2)" }}
        >
          <span
            className="font-bold text-[13px]"
            style={{ color: "#ef5023", fontFamily: "'Inter', sans-serif" }}
          >
            Start Your Project
          </span>
          <span style={{ color: "#ef5023" }}>→</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3000/services`.  
Expected: 3 engagement cards visible — Offshore (dim orange), Staff Aug (slightly warmer), Project-Based (brightest border + POPULAR badge). All use orange accent only.

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "redesign: engagement models section"
```

---

### Task 4: CTA Banner — Dark Theme Update + Page Background Fix

**Files:**
- Modify: `src/app/services/page.tsx` — update CTA banner background + outer page background

- [ ] **Step 1: Update the outer page div background**

Find the outer wrapper div:
```tsx
<div className="min-h-screen bg-[#fafafa] flex flex-col">
```
Change to:
```tsx
<div className="min-h-screen flex flex-col" style={{ background: "#0a0f1a" }}>
```

- [ ] **Step 2: Update the CTA banner section background**

Find:
```tsx
<section className="px-[80px] py-[96px]" style={{ background: "#ffffff" }}>
```
(The CTA Banner section — last section before Footer)

Change to:
```tsx
<section className="px-[80px] py-[96px]" style={{ background: "#0a0f1a" }}>
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:3000/services`.  
Expected: The entire page is dark — no white or `#fafafa` backgrounds visible anywhere. CTA banner sits on dark background, the existing dark gradient inner card (`#1a0800 → #0d0d0d`) looks correct against it.

- [ ] **Step 4: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "redesign: cta banner dark theme + fix page background"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Hero dark theme — Task 1
- ✅ Bento grid with AI & Automation featured large card — Task 2
- ✅ Engineering 3×2 grid — Task 2
- ✅ Engagement Models + Quality & Design small cards — Task 2
- ✅ Stats strip — Task 2
- ✅ Engagement Models section with 3 cards, all orange — Task 3
- ✅ POPULAR badge on Project-Based card — Task 3
- ✅ CTA banner background updated — Task 4
- ✅ Outer page background fixed — Task 4

**Placeholder scan:** No TBDs, no "implement later", all code blocks complete.

**Type consistency:** No custom types introduced — all inline JSX. Service/stat data arrays are defined inline per section, no cross-task references.
