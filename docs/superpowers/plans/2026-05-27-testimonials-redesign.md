# Testimonials Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static 3-column testimonial grid with an auto-playing slider showing 3 cards per slide, with dot indicators and arrow navigation.

**Architecture:** All changes in `src/app/page.tsx`. Add `useState`/`useEffect` imports, replace the Testimonials section JSX with a slider implementation. No new files or components.

**Tech Stack:** Next.js (App Router), React (useState, useEffect), Tailwind CSS, TypeScript.

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/app/page.tsx` | Modify | Add React imports, replace Testimonials section JSX |

---

### Task 1: Add useState and useEffect imports

**Files:**
- Modify: `src/app/page.tsx:3`

The current import line is:
```ts
import Footer from "@/components/Footer";
```

`useState` and `useEffect` were previously removed. They must be added back for the slider.

- [ ] **Step 1: Update the import line**

Find:
```ts
import Footer from "@/components/Footer";
```

Replace with:
```ts
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -20`

Expected: no new errors.

- [ ] **Step 3: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/page.tsx
git commit -m "chore: re-add useState and useEffect imports for testimonials slider"
```

---

### Task 2: Replace the Testimonials section JSX

**Files:**
- Modify: `src/app/page.tsx` — the `{/* ── 10. TESTIMONIALS */}` section

Replace the entire section (from comment through closing `</section>`) with the slider implementation.

- [ ] **Step 1: Add slideIndex state inside Home()**

The `export default function Home()` currently has no state. Add `slideIndex` state at the top of the component, immediately after the opening brace:

Find:
```tsx
export default function Home() {

  return (
```

Replace with:
```tsx
export default function Home() {
  const totalSlides = Math.ceil(testimonials.length / 3);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (totalSlides <= 1) return;
    const id = setInterval(() => {
      setSlideIndex(i => (i + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(id);
  }, [totalSlides]);

  return (
```

- [ ] **Step 2: Replace the Testimonials section JSX**

Find this entire block:
```tsx
        {/* ── 10. TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="bg-[#140800] border-y border-[#2a1800] px-[60px] py-[40px]">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[52px]">
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
                      <div className="font-bold text-white text-[14px]">{name}</div>
                      <div className="text-[#5a3a1a] text-[11px] font-semibold uppercase tracking-[0.5px] mt-[1px]">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
```

Replace with:
```tsx
        {/* ── 10. TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] px-[60px] py-[40px]">
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[40px]">

            {/* header */}
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[28px] h-[2px] bg-[#ef5023]" />
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Testimonials</p>
              </div>
              <h2 className="font-black text-white text-[44px] leading-[48px] tracking-[-1.5px]">
                What Our <span className="text-[#ef5023]">Partners Say</span>
              </h2>
            </div>

            {/* slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${slideIndex * 100}%)`, transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
              >
                {Array.from({ length: totalSlides }).map((_, si) => (
                  <div key={si} className="min-w-full grid grid-cols-3 gap-[16px]">
                    {testimonials.slice(si * 3, si * 3 + 3).map(({ quote, name, role }) => (
                      <div
                        key={name}
                        className="relative bg-[#111] rounded-[16px] p-[28px] flex flex-col gap-[16px] overflow-hidden transition-colors duration-200"
                        style={{ border: "1px solid #1f1f1f" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#1f1f1f"}
                      >
                        {/* decorative rings */}
                        <div className="absolute pointer-events-none" style={{ right: "-20px", top: "-20px", width: "100px", height: "100px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.10)" }} />
                        <div className="absolute pointer-events-none" style={{ right: "4px", top: "4px", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(239,80,35,0.05)" }} />

                        {/* quote mark */}
                        <div className="text-[#ef5023] font-black leading-[0.8] select-none" style={{ fontSize: "52px", opacity: 0.18 }}>&ldquo;</div>

                        {/* stars */}
                        <div className="text-[#ef5023] text-[11px]" style={{ letterSpacing: "2px" }}>★★★★★</div>

                        {/* quote text */}
                        <p className="text-[#888] text-[13px] leading-[1.75] italic flex-1">&ldquo;{quote}&rdquo;</p>

                        {/* attribution */}
                        <div className="flex items-center gap-[10px] pt-[14px] mt-auto" style={{ borderTop: "1px solid #1a1a1a" }}>
                          <div className="w-[36px] h-[36px] rounded-full bg-[#ef5023] flex items-center justify-center text-white font-black text-[11px] flex-shrink-0">
                            {name.split(" ").map((n: string) => n[0]).join("")}
                          </div>
                          <div>
                            <div className="font-bold text-white text-[13px]">{name}</div>
                            <div className="text-[#444] text-[11px]">{role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* controls — only shown when more than 1 slide */}
            {totalSlides > 1 && (
              <div className="flex items-center justify-between">
                {/* dots */}
                <div className="flex items-center gap-[6px]">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className="h-[3px] rounded-full border-none cursor-pointer transition-all duration-300"
                      style={{ width: i === slideIndex ? "24px" : "6px", background: i === slideIndex ? "#ef5023" : "#222" }}
                    />
                  ))}
                </div>
                {/* arrows */}
                <div className="flex gap-[8px]">
                  <button
                    onClick={() => setSlideIndex(i => (i - 1 + totalSlides) % totalSlides)}
                    className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-[12px] cursor-pointer transition-all duration-200"
                    style={{ border: "1px solid #1f1f1f", background: "transparent", color: "#555" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#ef5023"; (e.currentTarget as HTMLElement).style.color = "#ef5023"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1f1f1f"; (e.currentTarget as HTMLElement).style.color = "#555"; }}
                  >←</button>
                  <button
                    onClick={() => setSlideIndex(i => (i + 1) % totalSlides)}
                    className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-[12px] cursor-pointer transition-all duration-200"
                    style={{ background: "#ef5023", border: "1px solid #ef5023", color: "white" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#d94010"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#ef5023"}
                  >→</button>
                </div>
              </div>
            )}

          </div>
        </section>
```

- [ ] **Step 3: Verify no TypeScript errors**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -30`

Expected: no output (zero errors).

- [ ] **Step 4: Verify visually**

Run dev server: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npm run dev`

Open `http://localhost:3000` and check:
- Testimonials section background is `#0a0a0a` (no warm brown)
- Eyebrow: orange line + "TESTIMONIALS" label
- h2: "What Our **Partners Say**" with "Partners Say" in orange
- 3 cards visible side by side, each with: decorative rings top-right, quote mark, stars, italic quote, divider, avatar + name/role
- Cards have `#111` background with `#1f1f1f` border, hover lifts to `#2a2a2a`
- Controls row hidden (only 3 testimonials = 1 slide, so `totalSlides === 1`)
- No auto-play interval fires (guarded by `if (totalSlides <= 1) return`)

- [ ] **Step 5: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/page.tsx
git commit -m "feat: redesign testimonials section as auto-play slider with 3 cards per slide"
```
