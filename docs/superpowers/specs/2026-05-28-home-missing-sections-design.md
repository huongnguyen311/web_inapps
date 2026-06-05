# Home Page — 5 Missing Sections Design

**Date:** 2026-05-28  
**Status:** Approved  
**File:** `src/app/page.tsx`

---

## Overview

Add 5 missing sections to the home page following a funnel-first order that guides visitors from value understanding → engagement options → social proof → trust/security → objection handling, before hitting the final CTA.

---

## Final Page Order

```
1.  Hero
2.  Social Proof Bar (logos + ratings)          ← existing
3.  Why Vietnam                                  ← existing
4.  Stats                                        ← existing
5.  Services                                     ← existing
6.  Value Proposition 3-col                      ← NEW
7.  Engagement Models                            ← NEW
8.  Case Study Feature                           ← NEW
9.  IP & Security Assurance                      ← NEW
10. Process (How We Work)                        ← existing
11. Testimonials                                 ← existing
12. FAQ / Objection Handling                     ← NEW
13. Final CTA                                    ← existing
```

---

## Section Designs

### 1. Value Proposition 3-column

**Position:** After Services, before Engagement Models  
**Background:** `#fafafa` (light — creates contrast with the dark Services section above)  
**Layout:** 3-column card grid, centered heading above

**Content — 3 cards:**
| Metric | Title | Description |
|---|---|---|
| `60%` | Cost Savings | vs. hiring in-house in US/EU |
| `3%` | Top Talent | of Vietnam's engineer pool, rigorously screened |
| `2wk` | Fast Onboarding | from first call to shipping code |

**Card anatomy:**
- Large orange metric (font-black, ~36px, `#ef5023`)
- Bold title (font-bold, 15px, `#0a0a0a`)
- Muted description (14px, `#888`)
- Orange bottom accent bar (2px, 24px wide, `#ef5023`)
- White card, `border: 1px solid #e8e8e8`, `border-radius: 12px`

**Section heading:** eyebrow "Why InApps" + h2 "Three reasons 500+ companies choose us"

---

### 2. Engagement Models

**Position:** After Value Prop, before Case Study  
**Background:** dark (`#0a0a0a`) — pricing-card style with 1 highlighted card  
**Layout:** 3-column, center card elevated (`translateY(-16px) scale(1.02)`) and orange background

**Three models:**
| Model | Highlight | Description | Best for |
|---|---|---|---|
| Staff Augmentation | no | Add vetted engineers to your existing team on demand | Skill gaps, short-term |
| **Dedicated Team** | **yes** | A full team embedded in your product, long-term | Scaling live products |
| End-to-End | no | We own the product lifecycle from discovery to launch | New products |

**Card anatomy (non-highlighted):**
- Category eyebrow (10px, `#ef5023`, uppercase)
- Title (font-black, 18px, white)
- Description (13px, `#666`)
- Feature list with orange checkmark bullets
- CTA button: orange gradient

**Highlighted card:**
- Background: `#ef5023`
- All text white / white-alpha
- CTA button: white bg, orange text
- Box shadow: `0 32px 64px rgba(239,80,35,0.25)`

**Section heading:** eyebrow "How We Engage" + h2 "Choose your model"

**Implementation note:** Adapt `ServicePricingTable` component — extract into a standalone component or inline in `page.tsx`. Data defined inline (no external data file needed for home page).

---

### 3. Case Study Feature

**Position:** After Engagement Models, before IP & Security  
**Background:** `#0a0a0a` (dark)  
**Layout:** Horizontal scrollable row of mini cards + "View all case studies →" link

**3 case study cards (min-width: ~200px, scrollable on overflow):**

| Industry | Title | Metric | Label |
|---|---|---|---|
| Fintech | Claims platform, 2M+ tx/day | 300% | performance boost |
| SaaS | AI analytics dashboard, 50K users | 5x | faster delivery |
| E-commerce | Mobile app, 1M downloads | 40% | revenue increase |

**Card anatomy:**
- Industry icon placeholder (32×32, `rgba(239,80,35,0.12)` bg, rounded)
- Industry label (10px, `#ef5023`, uppercase)
- Title (font-bold, 12px, white)
- Big metric (font-black, ~28px, `#ef5023`)
- Metric label (11px, `#555`)
- Card: `background: #111`, `border: 1px solid #1f1f1f`, `border-radius: 12px`

**Below cards:** centered "View all case studies →" link in `#ef5023`

**Section heading:** eyebrow "Proof It Works" + h2 "Results our clients have seen"

---

### 4. IP & Security Assurance

**Position:** After Case Study, before Process  
**Background:** `#0a0a0a` with subtle orange radial glow  
**Layout:** Single full-width panel — shield icon + headline on left, 2×2 trust points on right

**Panel styling:**
- Container: `border: 1px solid rgba(239,80,35,0.15)`, `background: linear-gradient(110deg, #111, #0f0800)`, `border-radius: 16px`
- Padding: `px-[48px] py-[40px]`

**Left side:**
- Shield icon (SVG, `#ef5023`, 48×48 container with `rgba(239,80,35,0.12)` bg)
- Heading: "Your IP is 100% yours" (font-black, 22px, white)
- Subtext: "Full legal protection from day one" (14px, `#666`)

**Right side — 2×2 grid of trust points:**
| Point | Description |
|---|---|
| NDA signed before any call | Legally binding, always |
| IP ownership transfers fully | You own everything we build |
| GDPR & SOC2 compliant | EU & enterprise data standards |
| Vetted, background-checked devs | Every engineer on your team |

Each trust point: orange dot bullet + text (`#888`, 13px)

**Section heading:** eyebrow "Security & Trust" (inside the panel, no separate heading)

---

### 5. FAQ / Objection Handling

**Position:** After Testimonials, before Final CTA  
**Background:** `#ffffff` (light — contrast before the orange CTA)  
**Layout:** Split panel — category sidebar (left 30%) + answer detail (right 70%)

**5 FAQ categories:**
1. **Timeline** — "How quickly can you start?"
2. **Time Zones** — "What about time zone differences?"
3. **IP & Legal** — "Who owns the code and IP?"
4. **Team Quality** — "What if I'm not happy with a developer?"
5. **Pricing** — "How does pricing work?"

**Selected state:** category pill gets `background: #fff5f2`, `color: #ef5023`, `border-radius: 6px`

**Answer panel anatomy:**
- Category label (10px, `#ef5023`, uppercase, bold)
- Question (font-black, 15px, `#0a0a0a`)
- Answer (14px, `#555`, line-height 1.75)
- "Also in [category]" related links section at bottom

**Default open:** Timeline category

**Section heading:** eyebrow "Common Questions" + h2 "Everything you need to know"

**State management:** `useState<number>` for active category index, client component

---

## Implementation Notes

- All 5 sections are inline in `src/app/page.tsx` (no new component files needed — consistent with current page structure)
- Data arrays defined at top of file alongside existing `services` and `testimonials` arrays
- FAQ requires `"use client"` — already present on the page
- No new dependencies required
- Add `.superpowers/` to `.gitignore` if not already present

---

## Out of Scope

- Mobile/responsive breakpoints (separate task)
- Real case study images (placeholder orange bg used)
- Real shield/security SVG icons (simple geometric SVGs inline)
- Connecting FAQ answers to dedicated content pages
