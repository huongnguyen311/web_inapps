# Case Studies Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 2-column auto-sliding Case Studies section with a vertical list of 4 always-visible horizontal cards, each showing an image with overlaid tags, plus description and metrics.

**Architecture:** Single-file change in `src/app/page.tsx`. Update the `caseStudies` data array to add `tags`, remove `caseIndex` state and its `useEffect`, then rewrite the Case Studies JSX section in-place. No new files, no new components.

**Tech Stack:** Next.js App Router, React, Tailwind CSS, inline `style` props (existing pattern in this file)

---

### Task 1: Update data array and remove slide state

**Files:**
- Modify: `src/app/page.tsx`

**Context:** The `caseStudies` array (lines 82–119) currently has no `tags` field. The `caseIndex` state (line 168) and its `useEffect` (lines 178–183) drive the auto-slide that we're removing.

- [ ] **Step 1: Replace the `caseStudies` array**

Find this block in `src/app/page.tsx` (starts at `const caseStudies = [`):

```ts
const caseStudies = [
  {
    industry: "Fintech",
    client: "Prudential",
    title: "Real-time claims processing platform",
    desc: "Built a claims platform handling 2M+ daily transactions, reducing processing time by 300% and cutting operational costs by 60%.",
    metrics: [{ value: "300%", label: "Faster Processing" }, { value: "60%", label: "Cost Reduction" }, { value: "2M+", label: "Daily Transactions" }],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "SaaS",
    client: "Future Processing",
    title: "AI analytics dashboard for 50K users",
    desc: "Delivered an AI-powered insights platform that cut time-to-insight by 5x and maintained 98% uptime across global regions.",
    metrics: [{ value: "5x", label: "Faster Insights" }, { value: "98%", label: "Uptime" }, { value: "50K+", label: "Active Users" }],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "E-commerce",
    client: "Mega Market",
    title: "Mobile commerce app with 1M downloads",
    desc: "Rebuilt the mobile shopping experience from scratch, achieving 1M downloads in 6 months and a 40% lift in revenue.",
    metrics: [{ value: "1M+", label: "Downloads" }, { value: "40%", label: "Revenue Increase" }, { value: "6mo", label: "To Launch" }],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "Healthtech",
    client: "Workpac",
    title: "Workforce management platform at scale",
    desc: "Modernized a legacy workforce platform for 30K+ workers, cutting admin overhead by 50% and improving shift-fill rates.",
    metrics: [{ value: "50%", label: "Less Admin" }, { value: "30K+", label: "Workers" }, { value: "3×", label: "Faster Onboarding" }],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
];
```

Replace with:

```ts
const caseStudies = [
  {
    industry: "Fintech",
    client: "Prudential",
    title: "Real-time claims processing platform",
    desc: "Built a claims platform handling 2M+ daily transactions, reducing processing time by 300% and cutting operational costs by 60%.",
    metrics: [{ value: "300%", label: "Faster Processing" }, { value: "60%", label: "Cost Reduction" }, { value: "2M+", label: "Daily Transactions" }],
    tags: ["React", "Node.js", "AWS"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "SaaS",
    client: "Future Processing",
    title: "AI analytics dashboard for 50K users",
    desc: "Delivered an AI-powered insights platform that cut time-to-insight by 5x and maintained 98% uptime across global regions.",
    metrics: [{ value: "5×", label: "Faster Insights" }, { value: "98%", label: "Uptime" }, { value: "50K+", label: "Active Users" }],
    tags: ["Python", "React", "GCP"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "E-commerce",
    client: "Mega Market",
    title: "Mobile commerce app with 1M downloads",
    desc: "Rebuilt the mobile shopping experience from scratch, achieving 1M downloads in 6 months and a 40% lift in revenue.",
    metrics: [{ value: "1M+", label: "Downloads" }, { value: "40%", label: "Revenue Increase" }, { value: "6mo", label: "To Launch" }],
    tags: ["React Native", "Firebase"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
  {
    industry: "Healthtech",
    client: "Workpac",
    title: "Workforce management platform at scale",
    desc: "Modernized a legacy workforce platform for 30K+ workers, cutting admin overhead by 50% and improving shift-fill rates.",
    metrics: [{ value: "50%", label: "Less Admin" }, { value: "30K+", label: "Workers" }, { value: "3×", label: "Faster Onboarding" }],
    tags: ["Vue.js", "Django", "Azure"],
    image: "/Media/Image/home 1.png",
    link: "/case-study",
  },
];
```

- [ ] **Step 2: Remove `caseIndex` state**

Find inside the `Home` component:

```ts
const [caseIndex, setCaseIndex] = useState(0);
```

Delete that line entirely.

- [ ] **Step 3: Remove the case studies `useEffect`**

Find and delete this entire block:

```ts
  useEffect(() => {
    const id = setInterval(() => {
      setCaseIndex(i => (i + 1) % caseStudies.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);
```

- [ ] **Step 4: Verify TypeScript compiles**

Run:
```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit
```

Expected: no output (no errors). If you see errors about `caseIndex` or `setCaseIndex` still being referenced, find and remove those references in the JSX (they'll be in the old Case Studies section — leave that section in place for now, we replace it in Task 2).

- [ ] **Step 5: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "refactor: add tags to caseStudies data, remove auto-slide state"
```

---

### Task 2: Rewrite the Case Studies JSX section

**Files:**
- Modify: `src/app/page.tsx` (the `{/* ── CASE STUDY FEATURE ── */}` section, lines ~447–549)

**Context:** The current section uses `caseIndex` to show one slide at a time with a 2-column grid. We replace the entire section content (between the opening and closing `<section>` tags) with 4 always-visible horizontal cards.

The section header (eyebrow + h2 + "View all" button) stays the same — only the card area below it changes.

- [ ] **Step 1: Find the current Case Studies section**

It starts at:
```tsx
        {/* ── CASE STUDY FEATURE ──────────────────────────────────────────── */}
        <section className="relative px-[60px] py-[56px] overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #1a0800 50%, #0a0a0a 100%)" }}>
```

And ends just before:
```tsx
        {/* ── VALUE PROPOSITION 3-COL ────────────────────────────────────── */}
```

- [ ] **Step 2: Replace the entire Case Studies section**

Replace everything from `{/* ── CASE STUDY FEATURE */}` through its closing `</section>` with:

```tsx
        {/* ── CASE STUDY FEATURE ──────────────────────────────────────────── */}
        <section className="relative px-[60px] py-[56px] overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #1a0800 50%, #0a0a0a 100%)" }}>
          {/* grid pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          {/* radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(239,80,35,0.12) 0%, transparent 65%)" }} />

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]">

            {/* header row */}
            <div className="flex items-end justify-between gap-[48px]">
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[28px] h-[2px] bg-[#ef5023]" />
                  <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Case Studies</p>
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

            {/* card list */}
            <div className="flex flex-col gap-[16px]">
              {caseStudies.map(({ industry, client, title, desc, metrics, tags, image, link }) => (
                <div
                  key={title}
                  className="overflow-hidden"
                  style={{
                    background: "#111",
                    border: "1px solid #1f1f1f",
                    borderRadius: "12px",
                    display: "grid",
                    gridTemplateColumns: "280px 1fr",
                  }}
                >
                  {/* image column */}
                  <div className="relative" style={{ minHeight: "200px" }}>
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* bottom gradient */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}
                    />
                    {/* tags */}
                    <div className="absolute flex flex-wrap gap-[5px]" style={{ bottom: "14px", left: "14px" }}>
                      <span
                        style={{
                          background: "#ef5023",
                          color: "#fff",
                          fontSize: "9px",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "20px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {industry}
                      </span>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: "rgba(0,0,0,0.55)",
                            color: "#ccc",
                            fontSize: "9px",
                            fontWeight: 600,
                            padding: "3px 8px",
                            borderRadius: "20px",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* content column */}
                  <div className="flex flex-col gap-[10px] px-[28px] py-[24px]">
                    <p className="text-[#555] text-[10px] uppercase tracking-[1.5px]">{client}</p>
                    <h3 className="font-black text-white text-[18px] leading-[1.3] tracking-[-0.4px]">{title}</h3>
                    <p className="text-[#666] text-[13px] leading-[1.7]">{desc}</p>
                    <div className="flex gap-[24px] mt-[4px]">
                      {metrics.map(({ value, label }) => (
                        <div key={label} className="flex flex-col gap-[2px]">
                          <span className="font-black text-[#ef5023] text-[22px] leading-[1] tracking-[-1px]">{value}</span>
                          <span className="text-[#555] text-[10px] mt-[2px]">{label}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={link}
                      className="text-[#ef5023] text-[12px] font-bold mt-[6px] hover:underline"
                      style={{ textDecoration: "none" }}
                    >
                      Read full case study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
```

- [ ] **Step 3: Verify TypeScript compiles**

Run:
```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npx tsc --noEmit
```

Expected: no output. Fix any type errors before continuing.

- [ ] **Step 4: Visual check**

Run the dev server and open `http://localhost:3000`:
```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web && npm run dev
```

Verify:
- 4 cards visible, stacked vertically
- Each card: image on left (280px wide), content on right
- Orange industry tag + translucent tech tags overlaid at bottom of image
- Client name in small muted caps, bold white title, gray description
- 3 orange metric values with labels
- "Read full case study →" link in orange
- Section background is the dark gradient with grid pattern and radial glow
- No auto-slide, no dots navigation

- [ ] **Step 5: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/app/page.tsx
git commit -m "feat: redesign Case Studies as vertical horizontal card list with image + tags"
```
