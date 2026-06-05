# Trusted By Section Redesign

**Date:** 2026-05-27  
**Status:** Approved

## Summary

Replace the current text-only marquee strip (section 2 in `page.tsx`) with a real-logo sliding marquee. Add a centered headline above the logos and soft fade masks on both sides.

## Current State

Lines 214–232 of `src/app/page.tsx`. A single horizontal marquee of plain text company names (`clientLogos` array). The headline "Trusted by" is a small muted label inline with the scroll strip.

## Design

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section bg: #0a0a0a, border-y: #1f1f1f]               │
│                                                         │
│  "Trusted by Engineering Teams Across 15+ Countries"   │
│      (centered, muted grey + orange accent on count)   │
│                                                         │
│  ──────────────────────────────────────────────────     │
│  (thin divider #1f1f1f)                                 │
│                                                         │
│  ◀ fade │ [logo] [logo] [logo] … sliding left │ fade ▶  │
│         (seamless loop, duplicated set)                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Headline

- Text: `Trusted by Engineering Teams Across `**`15+ Countries`**
- Layout: centered
- Style: `#888`, `11px`, `700`, `tracking-[2px]`, `uppercase`
- "15+ Countries" highlighted in `#ef5023`

### Divider

- `1px` horizontal rule in `#1f1f1f`, `mx-[80px]`

### Logo marquee

- **Logo files:** `public/Media/client logo/*.{png}` — 18 logos
  - prupential, techcombank, lotte, Pegas, mega market, TS, kfc, Jollibee, fahasa, fram, ADM, annam, workpac, future processing, HVS, sg, baiond, simban
- Each logo rendered as `<img>` with `h-[32px] w-auto object-contain`
- Logo filter: `brightness(0) invert(1) opacity(60%)` — white silhouette, slightly muted
- On hover: `opacity(100%)` transition (brings logo to full white)
- Gap between logos: `56px`
- Animation: slide left, `30s linear infinite` (same as current `animate-marquee`)
- Duplicate the logo array for seamless looping (same technique as current code)
- Fade masks: `80px` wide on both sides, gradient from `#0a0a0a` to transparent
- Section padding: `py-[28px]`

### What is removed

- The old `clientLogos` text array (Accenture, Deloitte, etc.) — replaced by real image logos
- The inline `"Trusted by"` text label

## Files Changed

- `src/app/page.tsx` — section 2 only (lines ~214–232)
  - Replace `clientLogos` data with an image-based list
  - Rewrite the section JSX

## Out of Scope

- No changes to any other section
- No new components — keep it inline in page.tsx
- No tab interaction, no click behavior
