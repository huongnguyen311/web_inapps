# Testimonials Section Redesign

**Date:** 2026-05-27  
**File:** `src/app/page.tsx`  
**Status:** Approved for implementation

---

## Summary

Replace the current static 3-column grid with an auto-playing slider that shows 3 testimonial cards per slide. Each slide is a full-width 3-column grid of compact cards. Navigation is via dots and arrows. No progress bar.

---

## Design Decisions

| Decision | Choice |
|---|---|
| Layout | Slider — 3 cards per slide visible at once |
| Auto-play | Yes — 5 seconds per slide |
| Manual nav | Dots (clickable) + Prev/Next arrows |
| Progress bar | None |
| Card style | Compact dark card with decorative rings (matches site pattern) |
| Section bg | Keep existing `#0a0a0a` |
| Remove warm bg | Yes — remove `bg-[#140800]` and `border-y border-[#2a1800]` |

---

## Section Structure

```
[ Eyebrow row ]
  orange line (28px) + "TESTIMONIALS" label

[ h2 ]
  "What Our Partners Say" — "Partners Say" in orange

[ Slider wrapper — overflow hidden ]
  [ Slider track — flex, translateX on slide change ]
    [ Slide ] — 3-col grid, gap-[16px]
      Card  Card  Card
    [ Slide ] — (repeat for additional sets if data grows)

[ Controls row ]
  Left: dot indicators (orange active dot = 24px wide, inactive = 6px)
  Right: ← arrow (bordered) + → arrow (orange filled)
```

---

## Card Anatomy

Each card (`bg-[#111]`, `border border-[#1f1f1f]`, `rounded-[16px]`, `p-[28px]`):

1. **Decorative rings** — two absolutely-positioned divs, top-right corner:
   - Outer ring: `100px × 100px`, `border: 1px solid rgba(239,80,35,0.10)`, offset `-20px` right/top
   - Inner fill: `56px × 56px`, `background: rgba(239,80,35,0.05)`, offset `4px` right/top

2. **Big quote mark** — `"` character, `rgba(239,80,35,0.18)`, `52px`, `font-weight:900`, `line-height:0.8`

3. **Stars** — `★★★★★`, `text-[#ef5023]`, `11px`, `letter-spacing: 2px`

4. **Quote text** — `text-[#888]`, `13px`, `leading-[1.75]`, italic, `flex:1`

5. **Attribution row** — separated by `border-t border-[#1a1a1a]`, `pt-[14px]`:
   - Avatar: `36px` circle, `bg-[#ef5023]`, initials in white `font-black 11px`
   - Name: `text-white`, `13px`, `font-bold`
   - Role: `text-[#444]`, `11px`

Card hover: border lifts `#1f1f1f` → `#2a2a2a`

---

## Slider Behaviour

- **State:** `slideIndex` (0-based) tracked with `useState`
- **Transform:** `translateX(-${slideIndex * 100}%)` on the track div
- **Transition:** `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- **Auto-play:** `setInterval` every 5000ms, advances to next slide, wraps around
- **Manual nav:** clicking dots or arrows clears and resets the interval
- **Total slides:** determined by `Math.ceil(testimonials.length / 3)` — with 3 testimonials, that's 1 slide. A second slide can be added later when more testimonials exist. For now render 1 slide only (no dots needed if only 1 slide — hide controls if `totalSlides === 1`).

---

## Data

`testimonials` array stays as-is (no changes to the data):

```ts
const testimonials = [
  { quote: "...", name: "Sarah Jenkins", role: "CTO, Fintech Global" },
  { quote: "...", name: "David Chen",    role: "Product VP, SaaS Pro" },
  { quote: "...", name: "Michael Scott", role: "Founder, Paperless Inc" },
];
```

---

## Colours

All existing palette values — no new tokens:

| Token | Value | Usage |
|---|---|---|
| `bg-3` | `#111` | Card background |
| `bg-2` | `#0a0a0a` | Section background |
| `border` | `#1f1f1f` | Card border |
| `accent` | `#ef5023` | Stars, quote mark, avatar, active dot, → arrow |
| `muted` | `#888` | Quote text |
| `faint` | `#444` | Role text, inactive dots |

---

## Implementation Scope

- Replace the `{/* ── 10. TESTIMONIALS */}` section JSX entirely
- Update `section` className: remove `bg-[#140800] border-y border-[#2a1800]`, use `bg-[#0a0a0a]`
- Add `slideIndex` useState (re-use the now-deleted `activeTab` pattern)
- Add `useEffect` for auto-play interval (cleanup on unmount)
- All changes inline in `page.tsx` — no new files, no new components

---

## Out of Scope

- Swipe/touch support
- Keyboard navigation
- Accessibility ARIA attributes
- Transition animations beyond CSS transform
