# Our Process Section Redesign

**Date:** 2026-05-27
**File:** `src/app/page.tsx`
**Status:** Approved for implementation

---

## Summary

Redesign the "Our Process / How We Work" section. Keep the horizontal 4-column layout and light `#fafafa` background. Replace the old circle-number + connecting line pattern with a cleaner design: each step has an icon + number inline on the top row, followed by title and description below. No connecting line between steps.

---

## Design Decisions

| Decision | Choice |
|---|---|
| Layout | Horizontal 4-column grid — unchanged |
| Background | Keep `#fafafa` — unchanged |
| Step marker | Icon (44px white card) + number `01` inline on same row |
| Connecting line | Removed — steps stand independently |
| Number style | `11px font-black #ef5023`, sits right of icon with a short `#e0e0e0` dash filling remaining space |
| Icon style | 44×44px white rounded card (`rounded-[12px]`), `border border-[#e8e8e8]`, subtle shadow, orange stroke SVG icon |
| Title style | `15px font-black #0a0a0a tracking-[-0.3px]` |
| Description style | `13px #888 leading-[1.7]` |

---

## Section Structure

```
[ Eyebrow: orange line + "Our Process" ]
[ h2: "How We Work" — "Work" in orange ]
[ Subtitle: right column, 2-col grid ]

[ 4-column steps grid ]
  [ Step ]
    [ icon-card ]  [ "01" ]  [ ── dash ── ]
    [ Title ]
    [ Description ]
```

---

## Step Top Row

Each step's top row is a flex row with 3 elements:
1. **Icon card** — `w-[44px] h-[44px] rounded-[12px] bg-white border border-[#e8e8e8]` with `box-shadow: 0 1px 4px rgba(0,0,0,0.06)`. Contains an orange stroke SVG icon (20×20).
2. **Number** — `text-[11px] font-black text-[#ef5023] tracking-[0.5px]` — e.g. `01`
3. **Dash** — `flex-1 h-[1px] bg-[#e0e0e0]` — fills remaining horizontal space

---

## Icons (SVG, stroke="#ef5023", strokeWidth="2", 20×20)

| Step | Icon |
|---|---|
| Discovery | Search/magnifier: `<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>` |
| Team Curation | People/users: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>` |
| Integration | Link/chain: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>` |
| Scaling | Trending up: `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>` |

---

## Colours

| Token | Value | Usage |
|---|---|---|
| accent | `#ef5023` | Eyebrow line, eyebrow text, number, icon stroke |
| bg-light | `#fafafa` | Section background |
| card-bg | `#ffffff` | Icon card background |
| border | `#e8e8e8` | Icon card border, dash |
| text | `#0a0a0a` | h2, step title |
| muted | `#888` | Subtitle, step description |
| dash | `#e0e0e0` | Horizontal dash in step top row |

---

## Implementation Scope

- Replace the `{/* ── 7. HOW WE WORK */}` section JSX entirely in `src/app/page.tsx`
- No new files, no new components
- No state or hooks needed — purely static

---

## Out of Scope

- Hover animations on steps
- Mobile responsive adjustments
- Any changes to the header copy
