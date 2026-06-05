# Remove Three Homepage Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the Case Studies, Engagement Models, and Tech Stack sections from the homepage and delete all associated dead code.

**Architecture:** All changes are in `src/app/page.tsx`. Six deletions: two data/helper declarations at the top, one useState, and three JSX section blocks. No new code is added.

**Tech Stack:** Next.js (App Router), React, TypeScript.

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/app/page.tsx` | Modify | Delete `caseStudies` array, `patternStyle` helper, `activeTab` useState, and three section JSX blocks |

---

### Task 1: Remove dead code declarations and three section JSX blocks

**Files:**
- Modify: `src/app/page.tsx`

Six deletions in order from top to bottom.

- [ ] **Step 1: Delete the `caseStudies` data array (lines 86–91)**

Find and remove this exact block (including the trailing blank line):

```ts
const caseStudies: { tag: string; title: string; desc: string; result: string; pattern: 'none' | 'stripes' | 'dots' | 'lines' }[] = [
  { tag: "FINTECH",     title: "Payment Platform Rebuild",  desc: "Rebuilt a legacy payment gateway serving 2M+ transactions/day, cutting latency by 60%.",             result: "60% faster processing",        pattern: "none"    },
  { tag: "HEALTHTECH",  title: "Telemedicine Mobile App",   desc: "End-to-end telemedicine platform with video consults, EHR integration, and HIPAA compliance.",         result: "1M+ active users in 6 months", pattern: "stripes" },
  { tag: "E-COMMERCE",  title: "Marketplace Scale-up",      desc: "Re-architected a B2C marketplace to handle 10× Black Friday traffic with zero downtime.",              result: "3× revenue growth in Q1",      pattern: "dots"    },
  { tag: "SAAS",        title: "CRM Analytics Dashboard",   desc: "Real-time analytics suite with ML-powered churn prediction for a SaaS CRM platform.",                  result: "40% reduction in churn",       pattern: "lines"   },
];
```

Replace with: *(nothing — delete the block entirely)*

- [ ] **Step 2: Delete the `patternStyle` helper function**

Find and remove this exact block (including the trailing blank line):

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

Replace with: *(nothing — delete the block entirely)*

- [ ] **Step 3: Delete the `activeTab` useState**

Find and remove this exact line inside `export default function Home()`:

```ts
  const [activeTab, setActiveTab] = useState(0);
```

Replace with: *(nothing — delete the line entirely)*

After this step, also check whether `useState` is still imported at the top of the file. If it is only used by `activeTab`, remove it from the import. The import line currently reads:

```ts
import { useState } from "react";
```

If `useState` is no longer referenced anywhere else in the file, change to:

```ts
import React from "react";
```

If `useState` is still used elsewhere, leave the import unchanged.

- [ ] **Step 4: Delete the Case Studies section JSX**

Find and remove this entire block — from the comment through the closing `</section>` and trailing blank line:

```tsx
        {/* ── 5. CASE STUDIES ──────────────────────────────────────────────── */}
        <section className="bg-[#0a0a0a] px-[60px] py-[40px]">
```

The block ends at the `</section>` that closes this section (before the `{/* ── ENGAGEMENT MODELS` comment). Remove everything from the `{/* ── 5. CASE STUDIES` comment line through the closing `</section>` and the blank line that follows it.

- [ ] **Step 5: Delete the Engagement Models section JSX**

Find and remove this entire block — from the comment through the closing `</section>` and trailing blank line:

```tsx
        {/* ── ENGAGEMENT MODELS ────────────────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[40px] border-t border-[#e8e8e8]">
```

The block ends at the `</section>` that closes this section (before the `{/* ── 7. HOW WE WORK` comment). Remove everything from the `{/* ── ENGAGEMENT MODELS` comment line through the closing `</section>` and the blank line that follows it.

- [ ] **Step 6: Delete the Tech Stack section JSX**

Find and remove this entire block — from the comment through the closing `</section>` and trailing blank line:

```tsx
        {/* ── 9. TECHNOLOGIES & PLATFORMS ──────────────────────────────────── */}
        <section className="bg-[#fafafa] px-[60px] py-[40px]">
```

The block ends at the `</section>` that closes this section (before the `{/* ── 10. TESTIMONIALS` comment). Remove everything from the `{/* ── 9. TECHNOLOGIES & PLATFORMS` comment line through the closing `</section>` and the blank line that follows it.

- [ ] **Step 7: Verify TypeScript is clean**

Run: `cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit 2>&1 | head -30`

Expected: no output (zero errors). If errors appear, they will name the unused symbol or missing import — fix accordingly before committing.

- [ ] **Step 8: Commit**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web"
git add src/app/page.tsx
git commit -m "chore: remove case studies, engagement models, and tech stack sections"
```
