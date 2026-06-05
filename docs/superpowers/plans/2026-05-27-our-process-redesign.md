# Our Process Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current horizontal timeline (circle numbers + connecting line) with a cleaner 4-column step design where each step has an icon card + number inline on the top row, no connecting line.

**Architecture:** Single file change in `src/app/page.tsx`. Replace the `{/* ── 7. HOW WE WORK */}` section JSX entirely. No new files, no state, no hooks — purely static markup.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, TypeScript, inline SVG icons.

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/app/page.tsx` | Modify | Replace the HOW WE WORK section JSX (lines ~431–469) |

---

### Task 1: Replace the Our Process section JSX

**Files:**
- Modify: `src/app/page.tsx` — the `{/* ── 7. HOW WE WORK */}` section

- [ ] **Step 1: Replace the entire section**

Find this exact block:
```tsx
        {/* ── 7. HOW WE WORK ───────────────────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[40px]">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[64px]">
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

Replace with:
```tsx
        {/* ── 7. HOW WE WORK ───────────────────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[56px]">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[56px]">

            {/* 2-col header */}
            <div className="grid grid-cols-2 gap-[48px] items-end">
              <div className="flex flex-col gap-[14px]">
                <div className="flex items-center gap-[8px]">
                  <div className="w-[24px] h-[2px] bg-[#ef5023]" />
                  <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Our Process</p>
                </div>
                <h2 className="font-black text-[#0a0a0a] text-[44px] leading-[48px] tracking-[-1.5px]">
                  How We <span className="text-[#ef5023]">Work</span>
                </h2>
              </div>
              <p className="text-[#888] text-[14px] leading-[1.75] pb-[4px]">
                A streamlined engineering process designed for transparency, speed, and quality at every stage of delivery.
              </p>
            </div>

            {/* 4-col steps */}
            <div className="grid grid-cols-4 gap-[32px]">

              {/* Step 01 — Discovery */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-black text-[#ef5023] tracking-[0.5px]">01</span>
                  <div className="flex-1 h-[1px] bg-[#e0e0e0]" />
                </div>
                <h3 className="font-black text-[#0a0a0a] text-[15px] tracking-[-0.3px]">Discovery</h3>
                <p className="text-[#888] text-[13px] leading-[1.7]">We deep-dive into your goals, technical needs, and team culture to craft the right approach.</p>
              </div>

              {/* Step 02 — Team Curation */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-black text-[#ef5023] tracking-[0.5px]">02</span>
                  <div className="flex-1 h-[1px] bg-[#e0e0e0]" />
                </div>
                <h3 className="font-black text-[#0a0a0a] text-[15px] tracking-[-0.3px]">Team Curation</h3>
                <p className="text-[#888] text-[13px] leading-[1.7]">Hand-picking senior talent from our 150+ expert pool matched to your exact tech stack.</p>
              </div>

              {/* Step 03 — Integration */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-black text-[#ef5023] tracking-[0.5px]">03</span>
                  <div className="flex-1 h-[1px] bg-[#e0e0e0]" />
                </div>
                <h3 className="font-black text-[#0a0a0a] text-[15px] tracking-[-0.3px]">Integration</h3>
                <p className="text-[#888] text-[13px] leading-[1.7]">Seamlessly merging with your tools — Slack, Jira, GitHub — on day one.</p>
              </div>

              {/* Step 04 — Scaling */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-black text-[#ef5023] tracking-[0.5px]">04</span>
                  <div className="flex-1 h-[1px] bg-[#e0e0e0]" />
                </div>
                <h3 className="font-black text-[#0a0a0a] text-[15px] tracking-[-0.3px]">Scaling</h3>
                <p className="text-[#888] text-[13px] leading-[1.7]">Continuous delivery and team expansion as your product and business grows.</p>
              </div>

            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20`

Expected: no output (zero errors).

- [ ] **Step 3: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/page.tsx
git commit -m "feat: redesign Our Process section with icon+number inline top row"
```
