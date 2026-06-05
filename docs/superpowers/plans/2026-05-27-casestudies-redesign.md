# Case Studies Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the plain 2×2 case study grid in `page.tsx` with a redesigned layout featuring static industry filter tabs and gradient-accent cards, all using the existing orange palette.

**Architecture:** All changes are self-contained in `src/app/page.tsx`. The `caseStudies` data array gains a `pattern` field. The section JSX is replaced in-place — section wrapper, header, and "View All →" button are kept but the eyebrow and grid are rewritten.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS (inline styles where Tailwind is insufficient), TypeScript.

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/app/page.tsx` | Modify | `caseStudies` data array + Case Studies section JSX (lines 86–91 data, lines 514–545 JSX) |

---

### Task 1: Update the `caseStudies` data array

**Files:**
- Modify: `src/app/page.tsx:86–91`

The current array has `{ tag, title, desc, result }`. Add a `pattern` field typed as `'none' | 'stripes' | 'dots' | 'lines'` to drive the card header texture.

- [ ] **Step 1: Replace the `caseStudies` array**

Find this block (around line 86):

```ts
const caseStudies = [
  { tag: "FINTECH",    title: "Payment Platform Rebuild",  desc: "Rebuilt a legacy payment gateway serving 2M+ transactions/day, cutting latency by 60%.",               result: "60% faster processing"      },
  { tag: "HEALTHTECH", title: "Telemedicine Mobile App",   desc: "End-to-end telemedicine platform with video consults, EHR integration, and HIPAA compliance.",           result: "1M+ active users in 6 months"},
  { tag: "E-COMMERCE", title: "Marketplace Scale-up",      desc: "Re-architected a B2C marketplace to handle 10x Black Friday traffic with zero downtime.",                 result: "3× revenue growth in Q1"    },
  { tag: "SAAS",       title: "CRM Analytics Dashboard",   desc: "Real-time analytics suite with ML-powered churn prediction for a SaaS CRM platform.",                    result: "40% reduction in churn"     },
];
```

Replace with:

```ts
const caseStudies: { tag: string; title: string; desc: string; result: string; pattern: 'none' | 'stripes' | 'dots' | 'lines' }[] = [
  { tag: "FINTECH",     title: "Payment Platform Rebuild",  desc: "Rebuilt a legacy payment gateway serving 2M+ transactions/day, cutting latency by 60%.",             result: "60% faster processing",       pattern: "none"    },
  { tag: "HEALTHTECH",  title: "Telemedicine Mobile App",   desc: "End-to-end telemedicine platform with video consults, EHR integration, and HIPAA compliance.",         result: "1M+ active users in 6 months", pattern: "stripes" },
  { tag: "E-COMMERCE",  title: "Marketplace Scale-up",      desc: "Re-architected a B2C marketplace to handle 10× Black Friday traffic with zero downtime.",              result: "3× revenue growth in Q1",     pattern: "dots"    },
  { tag: "SAAS",        title: "CRM Analytics Dashboard",   desc: "Real-time analytics suite with ML-powered churn prediction for a SaaS CRM platform.",                  result: "40% reduction in churn",      pattern: "lines"   },
];
```

- [ ] **Step 2: Verify the file saves without TypeScript errors**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20`

Expected: no errors (or only pre-existing unrelated errors — confirm any errors existed before this change).

---

### Task 2: Add the `patternStyle` helper

**Files:**
- Modify: `src/app/page.tsx` — add helper just above the `Home` component

A pure function that maps a `pattern` value to a CSS `backgroundImage` string for the card header texture. Keeping it outside the component avoids re-creation on every render.

- [ ] **Step 1: Add the helper function**

Insert this block immediately above `export default function Home()`:

```ts
function patternStyle(pattern: 'none' | 'stripes' | 'dots' | 'lines'): React.CSSProperties {
  switch (pattern) {
    case 'stripes':
      return { backgroundImage: 'repeating-linear-gradient(45deg, rgba(239,80,35,0.06) 0, rgba(239,80,35,0.06) 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px' };
    case 'dots':
      return { backgroundImage: 'radial-gradient(circle, rgba(239,80,35,0.18) 1px, transparent 1px)', backgroundSize: '16px 16px' };
    case 'lines':
      return { backgroundImage: 'repeating-linear-gradient(0deg, rgba(239,80,35,0.06) 0px, rgba(239,80,35,0.06) 1px, transparent 1px, transparent 12px)' };
    default:
      return {};
  }
}
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20`

Expected: no new errors.

---

### Task 3: Replace the Case Studies section JSX

**Files:**
- Modify: `src/app/page.tsx:514–545`

Replace the entire `{/* ── 5. CASE STUDIES ── */}` section. The section `<section>` wrapper bg and padding stay. The header gets the eyebrow pattern (orange line + label) to match other sections. The grid becomes gradient-accent cards with filter tabs above.

- [ ] **Step 1: Replace the Case Studies section**

Find and replace this entire block (from the comment to the closing `</section>`):

```tsx
        {/* ── 5. CASE STUDIES ──────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] px-[60px] py-[40px]">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[52px]">
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
                  <span className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">{tag}</span>
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

Replace with:

```tsx
        {/* ── 5. CASE STUDIES ──────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] px-[60px] py-[40px]">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[40px]">

            {/* header */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[28px] h-[2px] bg-[#ef5023]" />
                  <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Our Work</p>
                </div>
                <h2 className="font-black text-white text-[44px] leading-[48px] tracking-[-1.5px]">
                  Case Studies &amp;<br />
                  <span className="text-[#ef5023]">Success Stories</span>
                </h2>
              </div>
              <button className="text-[#ef5023] text-[13px] font-bold border border-[#ef5023]/30 px-[20px] h-[38px] rounded-[8px] bg-transparent cursor-pointer hover:bg-[#ef5023]/10 transition-colors">
                View All →
              </button>
            </div>

            {/* static filter tabs */}
            <div className="flex gap-[6px] flex-wrap">
              {["All", "Fintech", "Healthtech", "E-Commerce", "SaaS"].map((tab) => (
                <span
                  key={tab}
                  className={`text-[11px] font-700 px-[14px] py-[5px] rounded-full cursor-default select-none ${
                    tab === "All"
                      ? "bg-[#ef5023] text-white font-bold"
                      : "bg-[#141414] text-[#555] border border-[#1f1f1f] font-semibold"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* 2×2 card grid */}
            <div className="grid grid-cols-2 gap-[12px]">
              {caseStudies.map(({ tag, title, desc, result, pattern }) => (
                <div
                  key={title}
                  className="bg-[#111] rounded-[14px] overflow-hidden transition-colors duration-200"
                  style={{ border: "1px solid #1f1f1f" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#1f1f1f"}
                >
                  {/* gradient header */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "90px", background: "linear-gradient(135deg, #1c0900 0%, #2e1200 60%, #0d0d0d 100%)" }}
                  >
                    {/* background texture */}
                    <div className="absolute inset-0" style={patternStyle(pattern)} />
                    {/* decorative rings */}
                    <div className="absolute" style={{ right: "-24px", top: "-24px", width: "120px", height: "120px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.15)" }} />
                    <div className="absolute" style={{ right: "8px", top: "8px", width: "64px", height: "64px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.10)" }} />
                    <div className="absolute" style={{ right: "-8px", top: "-8px", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(239,80,35,0.08)" }} />
                    {/* industry label */}
                    <div className="absolute bottom-[14px] left-[20px] flex items-center gap-[6px]">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#ef5023]" />
                      <span className="text-[#ef5023] text-[9px] font-black tracking-[2px] uppercase">{tag}</span>
                    </div>
                  </div>

                  {/* card body */}
                  <div className="flex flex-col gap-[8px] px-[20px] pt-[20px] pb-[18px]">
                    <h3 className="font-black text-white text-[18px] leading-[24px]" style={{ letterSpacing: "-0.3px" }}>{title}</h3>
                    <p className="text-[#555] text-[13px]" style={{ lineHeight: "1.7" }}>{desc}</p>
                    <div className="flex items-center justify-between pt-[14px] mt-[4px]" style={{ borderTop: "1px solid #1a1a1a" }}>
                      <div className="flex items-center gap-[6px]">
                        <div className="w-[16px] h-[16px] rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(34,197,94,0.15)" }}>
                          <span className="text-[#22c55e] text-[8px] font-black">↑</span>
                        </div>
                        <span className="text-[#22c55e] text-[11px] font-bold">{result}</span>
                      </div>
                      <a href="#" className="text-[#ef5023] text-[11px] font-bold no-underline hover:opacity-75 transition-opacity">
                        View case →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20`

Expected: no new errors.

- [ ] **Step 3: Verify dev server renders correctly**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npm run dev 2>&1 | head -10`

Open `http://localhost:3000` and check:
- Section has eyebrow (orange line + "OUR WORK" label)
- Five filter tabs appear; "All" is orange-filled, others are dark/muted
- 2×2 grid renders with gradient headers
- Each card header shows the correct texture (Fintech: plain, Healthtech: diagonal stripes, E-Commerce: dot grid, SaaS: horizontal lines)
- Industry label bottom-left of each header
- Card body: white title, muted desc, green result metric with circle icon, orange "View case →"
- Hovering a card lifts the border from `#1f1f1f` to `#2a2a2a`

- [ ] **Step 4: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/page.tsx
git commit -m "feat: redesign case studies section with gradient cards and filter tabs"
```
