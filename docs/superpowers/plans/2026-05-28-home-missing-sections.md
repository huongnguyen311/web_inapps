# Home Page — 5 Missing Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 5 missing sections to `src/app/page.tsx` — Value Proposition 3-col, Engagement Models, Case Study Feature, IP & Security Assurance, and FAQ — following funnel-first order.

**Architecture:** All sections are inline JSX in `page.tsx`, consistent with the existing file pattern. Data arrays are defined at the top of the file. The FAQ section uses an additional `useState<number>` for the active category. No new files or components are created.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS (inline style + className hybrid as used throughout the file), TypeScript.

**Spec:** `docs/superpowers/specs/2026-05-28-home-missing-sections-design.md`

---

## File Structure

| File | Change |
|---|---|
| `src/app/page.tsx` | Add 5 data arrays + 5 JSX sections inline |

No other files touched.

---

### Task 1: Add data arrays for all 5 sections

**Files:**
- Modify: `src/app/page.tsx` (top of file, after existing `testimonials` array)

Add the following data arrays after the closing of the `testimonials` array (around line 74) and before the `// ─── Page` comment:

- [ ] **Step 1: Add `valueProps` array**

In `src/app/page.tsx`, after the `testimonials` array, insert:

```tsx
const valueProps = [
  { metric: "60%", title: "Cost Savings",    desc: "vs. hiring in-house in US/EU" },
  { metric: "3%",  title: "Top Talent",      desc: "of Vietnam's engineer pool, rigorously screened" },
  { metric: "2wk", title: "Fast Onboarding", desc: "from first call to shipping code" },
];
```

- [ ] **Step 2: Add `engagementModels` array**

Directly after `valueProps`:

```tsx
const engagementModels = [
  {
    highlight: false,
    eyebrow:   "Staff Augmentation",
    title:     "Plug in talent",
    desc:      "Add vetted engineers to your existing team on demand.",
    features:  ["No full-cycle hiring", "Scale up or down anytime", "Senior engineers only"],
    cta:       "Learn more",
  },
  {
    highlight: true,
    eyebrow:   "Dedicated Team",
    title:     "Your offshore squad",
    desc:      "A full team embedded in your product, aligned with your timezone.",
    features:  ["Engineers + PM + QA", "Long-term partnership", "Full product focus"],
    cta:       "Book a call",
  },
  {
    highlight: false,
    eyebrow:   "End-to-End",
    title:     "Full delivery",
    desc:      "We own the product lifecycle from discovery to launch.",
    features:  ["Discovery to deployment", "Design included", "Post-launch support"],
    cta:       "Learn more",
  },
];
```

- [ ] **Step 3: Add `caseStudies` array**

Directly after `engagementModels`:

```tsx
const caseStudies = [
  { industry: "Fintech",     title: "Claims platform, 2M+ tx/day",      metric: "300%", metricLabel: "performance boost" },
  { industry: "SaaS",        title: "AI analytics dashboard, 50K users", metric: "5x",   metricLabel: "faster delivery"   },
  { industry: "E-commerce",  title: "Mobile app, 1M downloads",          metric: "40%",  metricLabel: "revenue increase"  },
];
```

- [ ] **Step 4: Add `trustPoints` array**

Directly after `caseStudies`:

```tsx
const trustPoints = [
  { title: "NDA signed before any call",       desc: "Legally binding, always" },
  { title: "IP ownership transfers fully",      desc: "You own everything we build" },
  { title: "GDPR & SOC2 compliant",            desc: "EU & enterprise data standards" },
  { title: "Vetted, background-checked devs",  desc: "Every engineer on your team" },
];
```

- [ ] **Step 5: Add `faqCategories` array**

Directly after `trustPoints`:

```tsx
const faqCategories = [
  {
    label:    "Timeline",
    question: "How quickly can you start?",
    answer:   "We can have your team ready within 2 weeks of the first call. Our pre-vetted talent pool means no lengthy recruitment cycles — just fast, reliable onboarding.",
    related:  "First sprint delivered within 30 days",
  },
  {
    label:    "Time Zones",
    question: "What about time zone differences?",
    answer:   "We overlap 4+ hours daily with US and EU teams. Our leads work flexible hours and we use async-first workflows (Slack, Loom, Jira) so nothing waits overnight.",
    related:  "Daily standups available in your morning",
  },
  {
    label:    "IP & Legal",
    question: "Who owns the code and IP?",
    answer:   "You do — 100%. Every engagement includes a full IP transfer clause and NDA signed before we begin. Your code is yours from the first commit.",
    related:  "NDA template available on request",
  },
  {
    label:    "Team Quality",
    question: "What if I'm not happy with a developer?",
    answer:   "We guarantee a replacement within 2 weeks, no questions asked. All our engineers pass a rigorous 5-stage screening — but if someone isn't the right fit, we fix it fast.",
    related:  "5-stage screening process",
  },
  {
    label:    "Pricing",
    question: "How does pricing work?",
    answer:   "We scope every engagement individually — no fixed rate cards. After a free discovery call, we send a transparent proposal with monthly retainer or project-based pricing options.",
    related:  "Book a free scoping call",
  },
];
```

- [ ] **Step 6: Add `faqIndex` state**

In the `Home` component, after the existing `slideIndex` state (around line 82), add:

```tsx
const [faqIndex, setFaqIndex] = useState(0);
```

- [ ] **Step 7: Verify the file compiles**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors related to the new arrays.

- [ ] **Step 8: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat(home): add data arrays for 5 new sections"
```

---

### Task 2: Add Value Proposition 3-column section

**Files:**
- Modify: `src/app/page.tsx` — insert JSX after the closing `</section>` of the Services section (the dark gradient section ending around line 411)

- [ ] **Step 1: Insert the Value Prop section**

After the closing `</section>` of the Services section, insert:

```tsx
{/* ── VALUE PROPOSITION 3-COL ────────────────────────────────────── */}
<section className="bg-[#fafafa] px-[60px] py-[56px] border-t border-[#e8e8e8]">
  <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

    {/* header */}
    <div className="flex flex-col gap-[14px] items-center text-center">
      <div className="flex items-center gap-[8px]">
        <div className="w-[24px] h-[2px] bg-[#ef5023]" />
        <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Why InApps</p>
        <div className="w-[24px] h-[2px] bg-[#ef5023]" />
      </div>
      <h2 className="font-black text-[#0a0a0a] text-[38px] leading-[46px] tracking-[-1.5px]">
        Three reasons <span className="text-[#ef5023]">500+ companies</span> choose us
      </h2>
    </div>

    {/* 3-col cards */}
    <div className="grid grid-cols-3 gap-[16px]">
      {valueProps.map(({ metric, title, desc }) => (
        <div
          key={title}
          className="flex flex-col gap-[12px] bg-white rounded-[12px] px-[28px] py-[32px]"
          style={{ border: "1px solid #e8e8e8" }}
        >
          <div className="font-black text-[#ef5023] text-[42px] leading-[1] tracking-[-2px]">{metric}</div>
          <div className="font-bold text-[#0a0a0a] text-[15px]">{title}</div>
          <div className="text-[#888] text-[14px] leading-[1.7]">{desc}</div>
          <div className="w-[24px] h-[2px] rounded-full bg-[#ef5023] mt-[4px]" />
        </div>
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 2: Check it renders**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat(home): add Value Proposition 3-column section"
```

---

### Task 3: Add Engagement Models section

**Files:**
- Modify: `src/app/page.tsx` — insert after closing `</section>` of Value Prop section

- [ ] **Step 1: Insert the Engagement Models section**

After the Value Prop section's closing `</section>`, insert:

```tsx
{/* ── ENGAGEMENT MODELS ───────────────────────────────────────────── */}
<section className="px-[60px] py-[56px]" style={{ background: "#0a0a0a" }}>
  <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

    {/* header */}
    <div className="flex flex-col gap-[14px]">
      <div className="flex items-center gap-[10px]">
        <div className="w-[28px] h-[2px] bg-[#ef5023]" />
        <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">How We Engage</p>
      </div>
      <h2 className="font-black text-white text-[38px] leading-[46px] tracking-[-1.5px]">
        Choose your <span className="text-[#ef5023]">model</span>
      </h2>
    </div>

    {/* 3-col cards */}
    <div className="grid grid-cols-3 gap-[16px] items-end">
      {engagementModels.map((model) => (
        <Link
          key={model.eyebrow}
          href="/contact"
          className="relative flex flex-col rounded-[20px] overflow-hidden"
          style={{
            background:   model.highlight ? "#ef5023" : "rgba(255,255,255,0.04)",
            border:       model.highlight ? "none" : "1px solid rgba(255,255,255,0.08)",
            textDecoration: "none",
            transform:    model.highlight ? "translateY(-16px) scale(1.02)" : "none",
            boxShadow:    model.highlight
              ? "0 32px 64px rgba(239,80,35,0.25), 0 12px 28px rgba(239,80,35,0.15)"
              : "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: model.highlight ? 2 : 1,
          }}
        >
          {/* top */}
          <div
            className="px-[28px] pt-[28px] pb-[24px]"
            style={{ borderBottom: model.highlight ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[1.5px] mb-[10px]"
               style={{ color: model.highlight ? "rgba(255,255,255,0.7)" : "#ef5023" }}>
              {model.highlight ? "⭐ " : ""}{model.eyebrow}
            </p>
            <h3 className="font-black text-white text-[20px] mb-[10px]">{model.title}</h3>
            <p className="text-[13px] leading-[1.6]"
               style={{ color: model.highlight ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)" }}>
              {model.desc}
            </p>
          </div>

          {/* features */}
          <div className="flex flex-col gap-[10px] px-[28px] py-[22px] flex-1">
            {model.features.map((f) => (
              <div key={f} className="flex items-center gap-[10px]">
                <div
                  className="shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  style={{ background: model.highlight ? "rgba(255,255,255,0.2)" : "rgba(239,80,35,0.12)" }}
                >
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke={model.highlight ? "#ffffff" : "#ef5023"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12px]"
                      style={{ color: model.highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.55)" }}>
                  {f}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-[28px] pb-[28px]">
            <div
              className="flex items-center justify-between w-full px-[20px] py-[14px] rounded-[14px] font-bold text-[13px]"
              style={{
                background: model.highlight ? "rgba(255,255,255,1)" : "linear-gradient(135deg,#ef5023 0%,#d94019 100%)",
                color:      model.highlight ? "#ef5023" : "#ffffff",
                boxShadow:  model.highlight ? "0 4px 20px rgba(255,255,255,0.25)" : "0 4px 20px rgba(239,80,35,0.45)",
              }}
            >
              <span>{model.cta}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke={model.highlight ? "#ef5023" : "#ffffff"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 2: Check it compiles**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat(home): add Engagement Models section"
```

---

### Task 4: Add Case Study Feature section

**Files:**
- Modify: `src/app/page.tsx` — insert after closing `</section>` of Engagement Models

- [ ] **Step 1: Insert the Case Study section**

After the Engagement Models section's closing `</section>`, insert:

```tsx
{/* ── CASE STUDY FEATURE ──────────────────────────────────────────── */}
<section className="px-[60px] py-[56px]" style={{ background: "#0a0a0a", borderTop: "1px solid #1f1f1f" }}>
  <div className="max-w-[1320px] mx-auto flex flex-col gap-[40px]">

    {/* header */}
    <div className="flex items-end justify-between gap-[48px]">
      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[28px] h-[2px] bg-[#ef5023]" />
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Proof It Works</p>
        </div>
        <h2 className="font-black text-white text-[38px] leading-[46px] tracking-[-1.5px]">
          Results our clients <span className="text-[#ef5023]">have seen</span>
        </h2>
      </div>
      <Link
        href="/case-study"
        className="flex-shrink-0 text-[#ef5023] text-[13px] font-bold border border-[#ef5023]/30 px-[20px] h-[38px] rounded-[8px] bg-transparent hover:bg-[#ef5023]/10 transition-colors inline-flex items-center"
        style={{ textDecoration: "none" }}
      >
        View all case studies →
      </Link>
    </div>

    {/* horizontal scrollable cards */}
    <div className="flex gap-[16px] overflow-x-auto pb-[8px]" style={{ scrollbarWidth: "none" }}>
      {caseStudies.map(({ industry, title, metric, metricLabel }) => (
        <div
          key={title}
          className="flex flex-col gap-[14px] rounded-[12px] p-[24px] flex-shrink-0"
          style={{ background: "#111", border: "1px solid #1f1f1f", minWidth: "220px" }}
        >
          {/* industry icon placeholder */}
          <div
            className="w-[36px] h-[36px] rounded-[8px]"
            style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.2)" }}
          />
          <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#ef5023]">{industry}</p>
          <p className="font-bold text-white text-[13px] leading-[1.5]">{title}</p>
          <div className="mt-auto">
            <div className="font-black text-[#ef5023] text-[32px] leading-[1] tracking-[-1px]">{metric}</div>
            <div className="text-[#555] text-[11px] mt-[4px]">{metricLabel}</div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 2: Check it compiles**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat(home): add Case Study Feature section"
```

---

### Task 5: Add IP & Security Assurance section

**Files:**
- Modify: `src/app/page.tsx` — insert after closing `</section>` of Case Study section, before the existing HOW WE WORK section

- [ ] **Step 1: Insert the IP & Security section**

After the Case Study section's closing `</section>`, insert:

```tsx
{/* ── IP & SECURITY ASSURANCE ─────────────────────────────────────── */}
<section className="px-[60px] py-[48px]" style={{ background: "#0a0a0a", borderTop: "1px solid #1f1f1f" }}>
  <div className="max-w-[1320px] mx-auto">
    {/* radial glow */}
    <div className="relative">
      <div
        className="absolute pointer-events-none"
        style={{ left: 0, top: "50%", transform: "translateY(-50%)", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 70%)" }}
      />

      <div
        className="relative flex items-center gap-[64px] rounded-[16px] px-[48px] py-[40px]"
        style={{ background: "linear-gradient(110deg, #111 0%, #0f0800 100%)", border: "1px solid rgba(239,80,35,0.15)" }}
      >
        {/* left */}
        <div className="flex flex-col gap-[16px] flex-shrink-0 max-w-[280px]">
          {/* shield icon */}
          <div
            className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center"
            style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}
          >
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path d="M12 2L3 6v8c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z" stroke="#ef5023" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M8 14l3 3 5-6" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Security & Trust</p>
            <h3 className="font-black text-white text-[22px] leading-[1.3] tracking-[-0.5px]">Your IP is 100% yours</h3>
            <p className="text-[#666] text-[14px] leading-[1.7]">Full legal protection from day one. We treat your codebase like it's our own.</p>
          </div>
        </div>

        {/* right — 2×2 trust points */}
        <div className="grid grid-cols-2 gap-[12px] flex-1">
          {trustPoints.map(({ title, desc }) => (
            <div key={title} className="flex items-start gap-[12px]">
              <div
                className="w-[20px] h-[20px] rounded-full flex-shrink-0 flex items-center justify-center mt-[2px]"
                style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}
              >
                <div className="w-[6px] h-[6px] rounded-full bg-[#ef5023]" />
              </div>
              <div>
                <p className="font-bold text-white text-[13px]">{title}</p>
                <p className="text-[#555] text-[12px] mt-[2px]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Check it compiles**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat(home): add IP & Security Assurance section"
```

---

### Task 6: Add FAQ / Objection Handling section

**Files:**
- Modify: `src/app/page.tsx` — insert after the closing `</section>` of the Testimonials section, before the Final CTA section

- [ ] **Step 1: Insert the FAQ section**

After the Testimonials section's closing `</section>` (around line 593), insert:

```tsx
{/* ── FAQ / OBJECTION HANDLING ────────────────────────────────────── */}
<section className="bg-white px-[60px] py-[56px]" style={{ borderTop: "1px solid #f0f0f0" }}>
  <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

    {/* header */}
    <div className="flex flex-col gap-[14px]">
      <div className="flex items-center gap-[8px]">
        <div className="w-[24px] h-[2px] bg-[#ef5023]" />
        <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Common Questions</p>
      </div>
      <h2 className="font-black text-[#0a0a0a] text-[38px] leading-[46px] tracking-[-1.5px]">
        Everything you need <span className="text-[#ef5023]">to know</span>
      </h2>
    </div>

    {/* split panel */}
    <div className="flex rounded-[16px] overflow-hidden" style={{ border: "1px solid #e8e8e8" }}>

      {/* sidebar — category nav */}
      <div className="flex flex-col gap-[2px] p-[16px] flex-shrink-0" style={{ width: "220px", borderRight: "1px solid #e8e8e8", background: "#fafafa" }}>
        {faqCategories.map(({ label }, i) => (
          <button
            key={label}
            onClick={() => setFaqIndex(i)}
            className="text-left px-[12px] py-[10px] rounded-[6px] font-semibold text-[13px] transition-all duration-150 border-none cursor-pointer"
            style={{
              background: faqIndex === i ? "#fff5f2" : "transparent",
              color:      faqIndex === i ? "#ef5023" : "#888",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* answer panel */}
      <div className="flex flex-col gap-[16px] px-[40px] py-[32px] flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#ef5023]">
          {faqCategories[faqIndex].label}
        </p>
        <h3 className="font-black text-[#0a0a0a] text-[20px] leading-[1.3] tracking-[-0.3px]">
          {faqCategories[faqIndex].question}
        </h3>
        <p className="text-[#555] text-[14px] leading-[1.75]">
          {faqCategories[faqIndex].answer}
        </p>
        <div className="mt-[8px] pt-[20px]" style={{ borderTop: "1px solid #f0f0f0" }}>
          <p className="text-[11px] font-semibold text-[#aaa] uppercase tracking-[1px] mb-[8px]">
            Also in {faqCategories[faqIndex].label}
          </p>
          <p className="text-[#ef5023] text-[13px] font-semibold">
            → {faqCategories[faqIndex].related}
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
```

- [ ] **Step 2: Check it compiles**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat(home): add FAQ / Objection Handling section"
```

---

### Task 7: Final verification

- [ ] **Step 1: Full type check**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit 2>&1
```

Expected: no errors.

- [ ] **Step 2: Build check**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx next build 2>&1 | tail -20
```

Expected: build completes with no errors.

- [ ] **Step 3: Dev server smoke test**

Start `npx next dev` and open `http://localhost:3000`. Verify manually:
- Value Prop 3 cards show 60%, 3%, 2wk
- Engagement Models: center card (Dedicated Team) is orange and elevated
- Case Study: 3 cards scroll horizontally
- IP & Security: dark panel with shield icon and 4 trust points
- FAQ: clicking sidebar categories switches the answer panel

- [ ] **Step 4: Add .superpowers to .gitignore if needed**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
grep -q ".superpowers" .gitignore 2>/dev/null || echo ".superpowers/" >> .gitignore
git add .gitignore
git diff --staged --quiet || git commit -m "chore: ignore .superpowers brainstorm dir"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Value Proposition 3-col → Task 2
- ✅ Engagement Models (pricing-card, 1 highlighted) → Task 3
- ✅ Case Study mini scrollable cards → Task 4
- ✅ IP & Security dark banner + shield + 4 trust points → Task 5
- ✅ FAQ split nav + answer panel → Task 6
- ✅ Page order (funnel-first) → data inserted at Task 1, JSX inserted in correct positions
- ✅ `faqIndex` state for FAQ interactivity → Task 1 Step 6

**Placeholder scan:** No TBDs. All code blocks are complete. No "similar to Task N" shortcuts.

**Type consistency:**
- `valueProps` array → consumed in Task 2 with `{ metric, title, desc }` destructuring ✅
- `engagementModels` array → consumed in Task 3 with `model.highlight`, `model.eyebrow`, `model.title`, `model.desc`, `model.features`, `model.cta` ✅
- `caseStudies` array → consumed in Task 4 with `{ industry, title, metric, metricLabel }` ✅
- `trustPoints` array → consumed in Task 5 with `{ title, desc }` ✅
- `faqCategories` array → consumed in Task 6 with `{ label }` (sidebar) and `faqCategories[faqIndex].label/question/answer/related` (panel) ✅
- `faqIndex` state → set via `setFaqIndex` in Task 6, read in Task 6 ✅
