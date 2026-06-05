# About Page Visual Redesign — Industries Style

**Date:** 2026-05-31  
**Scope:** Visual style overhaul only — no content changes  
**Reference:** `src/app/industries/page.tsx`

---

## Goal

Restyle `src/app/about/page.tsx` to match the visual language of the Industries page: dark theme, `font-black` typography, negative tracking, `#ef5023` accent, alternating dark/light sections, and Industries-style CTA.

---

## Global Changes

| Property | Before | After |
|---|---|---|
| Root background | `#f8f6f5` | `#0d0d0d` |
| Accent color | `#ff4929` | `#ef5023` |
| Heading weight | `font-extrabold` | `font-black` |
| Heading tracking | default | `tracking-[-1.5px]` to `tracking-[-2px]` |

---

## Section-by-Section

### S1: Hero
- **Layout:** Remove 2-column grid. Use full-width section with `imgHero` as absolute background (right side, `width: 65%`, `objectFit: cover`) + gradient overlay left-to-right (`#0d0d0d 35% → transparent 100%`) — identical pattern to Industries hero.
- **Text:** Badge "OUR STORY" in `#ef5023`, h1 `font-black` white tracking-[-2px], subtext `color: #ccc`.
- **Stats:** Keep 10+/250+/50+ values; style numbers `#ef5023 font-black text-[28px]`, labels `#888 text-[12px]`.
- **CTAs:** Primary button `#ef5023` with box-shadow; secondary ghost button `border border-white/30`.
- **Remove:** Quote card overlay.

### S2: Mission & Vision
- **Background:** `#fafafa`, `borderBottom: 1px solid #eee`
- **Layout:** Keep 2-column grid
- **Icon box:** Keep red square box, update shadow to match Industries pattern
- **Label:** Add small uppercase label `#ef5023 text-[11px] tracking-[1.5px]` above each heading ("OUR MISSION" / "OUR VISION")
- **Heading:** `font-black text-[#111] text-[36px] tracking-[-1.5px]`
- **Body text:** `text-[#444] text-[15px] leading-[1.75]`

### S3: Our Journey (Timeline)
- **Background:** `#0d0d0d`
- **Heading:** `font-black text-white text-[36px] tracking-[-1.5px]`; subtext `#888`
- **Cards:** `background: #1a1a1a`, `border: 1px solid rgba(239,80,35,0.18)`, `borderRadius: 16px`
- **Year badge:** `background: #ef5023`, keep rounded-full style
- **Card title:** `font-black text-white`
- **Card body:** `text-[#888]`

### S4: Team (The Hearts Behind the Code)
- **Background:** Keep `#0d0d0d`
- **Heading:** `font-black text-white text-[36px] tracking-[-1.5px]`
- **Subtext:** `text-[#888]`
- **Photo grid:** Keep layout, no style changes needed
- **Avatar border:** Keep `#ef5023`
- **Name:** `font-black text-white`
- **Role:** `text-[#ef5023] text-[11px] tracking-[1.5px] uppercase`

### S5: Core Values (What We Stand For)
- **Background:** `#fafafa`, `borderTop: 1px solid #e8e8e8`
- **Label:** `text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023]` above heading
- **Heading:** `font-black text-[#111] text-[36px] tracking-[-1.5px]`
- **Cards:** `background: #fff`, `border: 1px solid #e8e8e8`, `borderRadius: 16px`, `boxShadow: 0 1px 4px rgba(0,0,0,0.04)`
- **Card title:** `font-black text-[#0a0a0a]`
- **Card body:** `text-[#444] text-[15px] leading-[1.75]`

### S6: CTA (Final)
- **Replace** solid red CTA section with Industries S7 pattern:
  - Outer section: `background: #0d0d0d`, constellation SVG background (copy from Industries)
  - Inner card: `background: linear-gradient(110deg, #1a1a1a 0%, #141414 100%)`, `border: 1px solid rgba(239,80,35,0.18)`, `borderRadius: 20px`
  - Left glow: `rgba(239,80,35,0.12)` blur-[80px] circle
  - Heading: `font-black text-white text-[28px] tracking-[-0.6px]`
  - Subtext: `text-[#888] text-[14px]`
  - Button: `#ef5023` with arrow SVG icon, `boxShadow: 0 6px 24px rgba(239,80,35,0.4)`

---

## Files Changed

- `src/app/about/page.tsx` — full visual restyle, no content changes

## Files Unchanged

- All components (`Header`, `Footer`)
- All image URLs (Figma asset URLs remain the same)
- All text content
