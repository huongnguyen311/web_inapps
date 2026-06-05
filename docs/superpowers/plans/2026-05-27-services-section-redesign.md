# Services Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the "End-to-End Dev Services" section above the "As Seen On" section, rename its heading to "End-to-End Development Services", and redesign it as a dark card grid with orange-accented icon panels and a bottom CTA bar.

**Architecture:** All changes are within `src/app/page.tsx` — a single-file Next.js page component. The section order is changed by reordering JSX blocks. The services section JSX is replaced with a new dark-background design using inline Tailwind classes and inline styles consistent with the existing codebase pattern.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, inline styles

---

### Task 1: Move Services section above As Seen On and rename heading

**Files:**
- Modify: `src/app/page.tsx` (services section JSX, ~lines 383–417)

- [ ] **Step 1: Locate the two sections to reorder**

In `src/app/page.tsx`, find these two consecutive comment markers:
- `{/* ── AS SEEN ON ───── */}` — starts around line 359
- `{/* ── 5. SERVICES ─── */}` — starts around line 383

Services currently comes **after** As Seen On. We need to swap them so Services comes first.

- [ ] **Step 2: Cut the entire Services section JSX block**

The Services section spans from the `{/* ── 5. SERVICES */}` comment to its closing `</section>` tag (around line 417). Cut the entire block including the comment.

- [ ] **Step 3: Paste it immediately before the As Seen On section**

Paste the cut block so it now appears just before the `{/* ── AS SEEN ON */}` comment (which starts at the Stats section's closing `</section>`).

New order in JSX:
1. Stats `</section>` (ends around line 357)
2. ← Services section goes here (moved)
3. As Seen On section
4. Case Studies section
5. ...rest unchanged

- [ ] **Step 4: Update the heading text**

Inside the now-repositioned Services section, find:
```tsx
<h2 className="font-black text-[#0a0a0a] text-[44px] leading-[48px] tracking-[-1.5px]">
  End-to-End<br />
  <span className="text-[#ef5023]">Dev Services</span>
</h2>
```

Change `Dev Services` to `Development Services`:
```tsx
<h2 className="font-black text-[#0a0a0a] text-[44px] leading-[48px] tracking-[-1.5px]">
  End-to-End<br />
  <span className="text-[#ef5023]">Development Services</span>
</h2>
```

- [ ] **Step 5: Verify the page renders without errors**

Run the dev server if not already running:
```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run dev
```
Open http://localhost:3000 and confirm:
- Services section appears above "As Seen On"
- Heading reads "End-to-End Development Services"
- No console errors

---

### Task 2: Replace the Services section with the dark card grid redesign

**Files:**
- Modify: `src/app/page.tsx` (services section JSX)

- [ ] **Step 1: Replace the entire services section JSX**

Find and replace the full services `<section>` block (from `{/* ── 5. SERVICES */}` comment through its closing `</section>`). Replace it with:

```tsx
{/* ── SERVICES ──────────────────────────────────────────── */}
<section className="bg-[#0a0a0a] px-[60px] py-[100px]">
  <div className="max-w-[1320px] mx-auto flex flex-col gap-[56px]">

    {/* 2-col header */}
    <div className="grid grid-cols-2 gap-[48px] items-end">
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[28px] h-[2px] bg-[#ef5023]" />
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">What We Do</p>
        </div>
        <h2 className="font-black text-white text-[44px] leading-[50px] tracking-[-1.5px]">
          End-to-End<br />
          <span className="text-[#ef5023]">Development Services</span>
        </h2>
      </div>
      <p className="text-[#555] text-[15px] leading-[26px] pb-[4px]">
        Comprehensive technology solutions designed to help Western businesses scale faster with world-class engineering talent from Vietnam.
      </p>
    </div>

    {/* 3×2 card grid */}
    <div className="grid grid-cols-3 gap-[2px] bg-[#1a1a1a] rounded-[16px] overflow-hidden border border-[#1a1a1a]">
      {services.map(({ icon, title, desc }, i) => (
        <div
          key={title}
          className="group bg-[#111] px-[28px] py-[32px] flex flex-col gap-[16px] cursor-pointer hover:bg-[#161616] transition-colors relative overflow-hidden"
        >
          {/* hover gradient wash */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(239,80,35,0.06) 0%, transparent 60%)" }} />

          {/* icon + number row */}
          <div className="relative flex items-center justify-between">
            <div
              className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center border transition-all duration-200"
              style={{
                background: "rgba(239,80,35,0.10)",
                borderColor: "rgba(239,80,35,0.18)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(239,80,35,0.20)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,80,35,0.40)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(239,80,35,0.10)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,80,35,0.18)";
              }}
            >
              {icon}
            </div>
            <span className="text-[11px] font-bold text-[#2a2a2a] tracking-[1px] group-hover:text-[#ef5023] transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="relative font-extrabold text-white text-[17px] leading-[24px] tracking-[-0.3px]">{title}</h3>
          <p className="relative text-[#555] text-[13px] leading-[22px] flex-1">{desc}</p>
          <span className="relative text-[#ef5023] text-[12px] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
            Learn more →
          </span>
        </div>
      ))}
    </div>

    {/* CTA bar */}
    <div
      className="flex items-center justify-between px-[32px] py-[24px] rounded-[14px] border border-[#1a1a1a]"
      style={{ background: "#111" }}
    >
      <p className="text-[#555] text-[14px] leading-[22px]">
        Not sure which service fits your needs?{" "}
        <strong className="text-white font-bold">Talk to our team — we'll help you figure it out.</strong>
      </p>
      <button
        className="bg-[#ef5023] text-white text-[13px] font-bold px-[24px] h-[44px] rounded-[10px] border-none cursor-pointer hover:bg-[#d94010] transition-colors flex-shrink-0 ml-[32px]"
      >
        Get a Free Consultation →
      </button>
    </div>

  </div>
</section>
```

- [ ] **Step 2: Verify the SVG icons still render**

The `services` data array (defined near the top of the file, ~line 43) uses `icon` fields that contain SVG elements. The new grid iterates `services.map(({ icon, title, desc }, i) => ...)` — same destructuring as before, so icons should work. Confirm in the browser that each card shows its orange SVG icon inside the tinted box.

- [ ] **Step 3: Check hover interactions**

Hover over each card in the browser and verify:
- Card background shifts from `#111` to `#161616`
- Orange gradient wash fades in from top-left
- Number badge turns orange
- "Learn more →" becomes fully opaque

- [ ] **Step 4: Verify section order on full page**

Scroll through the page and confirm the final section order:
1. Hero
2. Client Logos Marquee
3. Why Outsource to Vietnam
4. Stats
5. **End-to-End Development Services** ← moved here
6. As Seen On
7. Case Studies
8. Engagement Models
9. Industries
10. How We Work
11. InApps Advantage
12. Technologies
13. Testimonials
14. CTA

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign services section with dark card grid, move above As Seen On"
```
