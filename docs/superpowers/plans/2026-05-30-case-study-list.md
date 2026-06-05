# Case Study List Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `src/app/case-study/page.tsx` with a paginated, filterable case study list page matching the approved design spec.

**Architecture:** Data lives in `src/data/caseStudies.ts`. The list page (`page.tsx`) is a `"use client"` component that holds `activeCategory` and `currentPage` state. Filtering and pagination are done in-memory client-side. Three sub-components handle the card, filter bar, and pagination — kept small and focused.

**Tech Stack:** Next.js (App Router), React, TypeScript, inline styles (matching existing codebase pattern)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/data/caseStudies.ts` | Create | Type definition + seed data (10+ case studies) |
| `src/app/case-study/page.tsx` | Replace | Page shell: state, filtering, pagination logic |
| `src/components/case-study/CaseStudyCard.tsx` | Create | Single card UI |
| `src/components/case-study/CaseStudyFilterBar.tsx` | Create | Underline tab filter bar |
| `src/components/case-study/CaseStudyPagination.tsx` | Create | Pagination row |

---

## Task 1: Data file

**Files:**
- Create: `src/data/caseStudies.ts`

- [ ] **Step 1: Create the data file**

```ts
// src/data/caseStudies.ts

export const CATEGORIES = [
  "All",
  "E-commerce & Healthcare",
  "Healthcare",
  "Logistics & Supply Chain",
  "Media & Entertainment",
  "Retail & E-commerce",
  "Technology",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type CaseStudy = {
  slug: string;
  name: string;
  image?: string;
  shortDescription: string;
  category: Exclude<Category, "All">;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-patient-triage",
    name: "AI-Powered Patient Triage System",
    shortDescription:
      "Rebuilt the triage workflow for a 12-hospital network using real-time ML scoring — cutting average ER wait times by 40% and reducing misclassification errors by 28%.",
    category: "Healthcare",
    featured: true,
  },
  {
    slug: "supply-chain-visibility",
    name: "Supply Chain Visibility Platform",
    shortDescription:
      "End-to-end tracking for 14 warehouses and 200+ SKUs — giving ops teams real-time visibility and reducing stockout incidents by 35% in the first quarter.",
    category: "Logistics & Supply Chain",
  },
  {
    slug: "omnichannel-retail",
    name: "Omnichannel Retail Platform",
    shortDescription:
      "Unified inventory, order management, and customer data across online and physical stores for 3 fashion brands — boosting conversion rate by 22%.",
    category: "Retail & E-commerce",
  },
  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    shortDescription:
      "White-label analytics product for a 50k+ MAU B2B platform — real-time event tracking, cohort analysis, and a drag-and-drop report builder shipped in 20 weeks.",
    category: "Technology",
  },
  {
    slug: "streaming-content-platform",
    name: "Streaming Content Platform",
    shortDescription:
      "Re-architected a legacy VOD platform into microservices supporting 1M+ concurrent viewers, with adaptive bitrate streaming and a personalised recommendation engine.",
    category: "Media & Entertainment",
    featured: true,
  },
  {
    slug: "loyalty-rewards-engine",
    name: "Loyalty & Rewards Engine",
    shortDescription:
      "Points-based loyalty system for a supermarket chain with 2M registered members — integrating POS, mobile, and partner APIs to drive an 18% uplift in repeat purchases.",
    category: "Retail & E-commerce",
  },
  {
    slug: "pharmacy-ecommerce",
    name: "Pharmacy eCommerce Platform",
    shortDescription:
      "HIPAA-compliant online pharmacy with prescription verification, insurance integration, and same-day delivery — scaling to 80k orders/month in 8 months.",
    category: "E-commerce & Healthcare",
  },
  {
    slug: "last-mile-delivery",
    name: "Last-Mile Delivery Optimiser",
    shortDescription:
      "ML-based route optimisation reducing average delivery cost by 27% across 600+ drivers — live tracking, dynamic re-routing, and proof-of-delivery built in.",
    category: "Logistics & Supply Chain",
  },
  {
    slug: "devops-automation",
    name: "DevOps Automation Platform",
    shortDescription:
      "Internal developer platform consolidating CI/CD, secrets management, and infrastructure provisioning — cutting deployment lead time from 3 days to under 2 hours.",
    category: "Technology",
  },
  {
    slug: "remote-patient-monitoring",
    name: "Remote Patient Monitoring App",
    shortDescription:
      "IoT-connected mobile app for chronic disease management — syncing wearable data in real time, alerting care teams to critical readings, reducing readmissions by 31%.",
    category: "Healthcare",
  },
  {
    slug: "digital-banking-transformation",
    name: "Digital Banking Transformation",
    shortDescription:
      "A 36-week end-to-end platform rebuild for NovaPay Financial Group — from legacy core banking to a cloud-native, AI-powered mobile experience.",
    category: "Technology",
    featured: true,
  },
  {
    slug: "media-rights-management",
    name: "Media Rights Management System",
    shortDescription:
      "Centralised rights and royalties platform for a pan-Asian content distributor — automating contract ingestion, usage tracking, and monthly payouts across 40+ partners.",
    category: "Media & Entertainment",
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/caseStudies.ts
git commit -m "feat: add caseStudies data file with type definitions and seed data"
```

---

## Task 2: CaseStudyCard component

**Files:**
- Create: `src/components/case-study/CaseStudyCard.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/case-study/CaseStudyCard.tsx
"use client";

import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-study/${cs.slug}`}
      style={{ textDecoration: "none" }}
      className="cs-card"
    >
      <style>{`
        .cs-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #ebebeb;
          cursor: pointer;
          transition: border-color .25s, transform .25s, box-shadow .25s;
          text-decoration: none;
        }
        .cs-card:hover {
          border-color: rgba(239,80,35,.35);
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(0,0,0,.1), 0 0 0 1px rgba(239,80,35,.12);
        }
        .cs-card:hover .cs-view-btn { color: #ef5023; }
        .cs-card:hover .cs-arrow { background: #ef5023; transform: translateX(2px); }
        .cs-card:hover .cs-arrow path { stroke: #fff; }
      `}</style>

      {/* Thumbnail */}
      <div style={{
        position: "relative",
        height: 228,
        background: "linear-gradient(140deg, #f2f2f2 0%, #e8e8e8 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", flexShrink: 0,
      }}>
        {/* subtle grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {cs.image ? (
          <img src={cs.image} alt={cs.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16,
              background: "rgba(239,80,35,.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
          </div>
        )}

        {/* gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,.1) 100%)",
        }} />

        {/* Featured badge */}
        {cs.featured && (
          <div style={{
            position: "absolute", top: 16, left: 16, zIndex: 2,
            background: "#ef5023", color: "#fff",
            fontSize: 11, fontWeight: 800, letterSpacing: ".3px",
            borderRadius: 20, padding: "5px 13px",
            display: "flex", alignItems: "center", gap: 4,
            boxShadow: "0 4px 12px rgba(239,80,35,.4)",
          }}>
            ⭐ Featured
          </div>
        )}

        {/* Category tag */}
        <div style={{
          position: "absolute", bottom: 16, right: 16, zIndex: 2,
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(8px)",
          color: "#444", fontSize: 11, fontWeight: 700,
          borderRadius: 20, padding: "5px 13px",
          border: "1px solid rgba(0,0,0,.07)",
        }}>
          {cs.category}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
        <h4 style={{
          fontSize: 17, fontWeight: 800, color: "#0a0a0a",
          marginBottom: 10, lineHeight: 1.3, letterSpacing: "-.3px",
        }}>
          {cs.name}
        </h4>
        <p style={{
          fontSize: 14, color: "#888", lineHeight: 1.7,
          marginBottom: 20, flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {cs.shortDescription}
        </p>

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "flex-end",
          paddingTop: 16, borderTop: "1px solid #f2f2f2",
        }}>
          <div className="cs-view-btn" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 14, fontWeight: 700, color: "#0a0a0a",
            transition: "color .15s",
          }}>
            View Detail
            <div className="cs-arrow" style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "#f4f4f4",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .2s, transform .2s",
            }}>
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                <path className="cs-arrow" d="M2 5h6M5 2l3 3-3 3" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study/CaseStudyCard.tsx
git commit -m "feat: add CaseStudyCard component"
```

---

## Task 3: CaseStudyFilterBar component

**Files:**
- Create: `src/components/case-study/CaseStudyFilterBar.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/case-study/CaseStudyFilterBar.tsx
"use client";

import { CATEGORIES, Category } from "@/data/caseStudies";

type Props = {
  active: Category;
  onChange: (cat: Category) => void;
};

export default function CaseStudyFilterBar({ active, onChange }: Props) {
  return (
    <div style={{
      background: "#fff",
      borderBottom: "1px solid #ebebeb",
      padding: "0 56px",
      position: "sticky",
      top: 68,
      zIndex: 90,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      } as React.CSSProperties}>
        {CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              style={{
                fontSize: 14, fontWeight: 600,
                padding: "18px 20px",
                color: isActive ? "#ef5023" : "#bbb",
                background: "none", border: "none",
                borderBottom: isActive ? "2px solid #ef5023" : "2px solid transparent",
                marginBottom: -1,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color .15s, border-color .15s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#555"; }}
              onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#bbb"; }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study/CaseStudyFilterBar.tsx
git commit -m "feat: add CaseStudyFilterBar component"
```

---

## Task 4: CaseStudyPagination component

**Files:**
- Create: `src/components/case-study/CaseStudyPagination.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/case-study/CaseStudyPagination.tsx
"use client";

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function CaseStudyPagination({ currentPage, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  // Build page number list: always show first, last, current ±1, with ellipsis
  const pages: (number | "...")[] = [];
  const addPage = (n: number) => {
    if (n < 1 || n > totalPages) return;
    if (!pages.includes(n)) pages.push(n);
  };

  addPage(1);
  if (currentPage - 2 > 2) pages.push("...");
  addPage(currentPage - 1);
  addPage(currentPage);
  addPage(currentPage + 1);
  if (currentPage + 2 < totalPages - 1) pages.push("...");
  addPage(totalPages);

  const btnStyle = (active: boolean, disabled?: boolean): React.CSSProperties => ({
    minWidth: 40, height: 40, borderRadius: 10,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 14, fontWeight: 600,
    cursor: disabled ? "default" : "pointer",
    border: active ? "1px solid #ef5023" : "1px solid #e5e5e5",
    background: active ? "#ef5023" : "#fff",
    color: active ? "#fff" : "#aaa",
    boxShadow: active ? "0 4px 14px rgba(239,80,35,.3)" : "none",
    transition: "all .15s",
    padding: "0 8px",
  });

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
      {/* Prev */}
      <button
        onClick={() => currentPage > 1 && onChange(currentPage - 1)}
        style={{ ...btnStyle(false, currentPage === 1), fontSize: 18, color: currentPage === 1 ? "#ddd" : "#aaa" }}
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} style={{ minWidth: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc", fontSize: 14 }}>
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            style={btnStyle(p === currentPage)}
            onMouseEnter={(e) => { if (p !== currentPage) { (e.currentTarget as HTMLElement).style.borderColor = "#ef5023"; (e.currentTarget as HTMLElement).style.color = "#ef5023"; } }}
            onMouseLeave={(e) => { if (p !== currentPage) { (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5"; (e.currentTarget as HTMLElement).style.color = "#aaa"; } }}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => currentPage < totalPages && onChange(currentPage + 1)}
        style={{ ...btnStyle(false, currentPage === totalPages), fontSize: 18, color: currentPage === totalPages ? "#ddd" : "#aaa" }}
      >
        ›
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study/CaseStudyPagination.tsx
git commit -m "feat: add CaseStudyPagination component"
```

---

## Task 5: Replace case-study list page

**Files:**
- Replace: `src/app/case-study/page.tsx`

> Note: The current `page.tsx` is a single case study detail (NovaPay). That content already exists in `src/app/case-study/[slug]/page.tsx`. We simply overwrite `page.tsx` with the new list page.

- [ ] **Step 1: Replace page.tsx**

```tsx
// src/app/case-study/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-study/CaseStudyCard";
import CaseStudyFilterBar from "@/components/case-study/CaseStudyFilterBar";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";
import { caseStudies, CATEGORIES, Category } from "@/data/caseStudies";

const ITEMS_PER_PAGE = 10;

const heroStats = [
  { num: "42+", label: "Case studies" },
  { num: "6",   label: "Industries" },
  { num: "98%", label: "Client satisfaction" },
  { num: "12yr", label: "Track record" },
];

export default function CaseStudyListPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleCategoryChange(cat: Category) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f7f7f8" }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* ── Hero ── */}
        <section style={{
          background: "#fff",
          padding: "72px 56px 52px",
          borderBottom: "1px solid #ebebeb",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* glow decorations */}
          <div style={{
            position: "absolute", top: -120, right: -100,
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(239,80,35,.07) 0%, transparent 70%)",
            borderRadius: "50%", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -80, left: "30%",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(239,80,35,.04) 0%, transparent 70%)",
            borderRadius: "50%", pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
              color: "#ef5023", marginBottom: 20,
            }}>
              <span style={{ width: 24, height: 2, background: "#ef5023", borderRadius: 2, display: "inline-block" }} />
              Our Work
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 52, fontWeight: 900, letterSpacing: -2.5,
              lineHeight: 1.05, color: "#0a0a0a", marginBottom: 18, maxWidth: 640,
            }}>
              Real results for{" "}
              <span style={{ color: "#ef5023" }}>real businesses</span>
            </h1>

            {/* Subtext */}
            <p style={{ fontSize: 17, color: "#888", lineHeight: 1.7, maxWidth: 500, marginBottom: 36 }}>
              {filtered.length > 0 ? filtered.length : caseStudies.length}+ case studies across healthcare, logistics, e-commerce, and more — from MVP to enterprise-scale platforms.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
              {heroStats.map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 40 }}>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1, color: "#0a0a0a", lineHeight: 1 }}>
                      {s.num.includes("%") || s.num.includes("+") || s.num.includes("yr") ? (
                        <>
                          {s.num.replace(/[%+yr]/g, "")}
                          <span style={{ color: "#ef5023" }}>{s.num.match(/[%+yr]+/)?.[0]}</span>
                        </>
                      ) : s.num}
                    </div>
                    <div style={{ fontSize: 13, color: "#aaa", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                  </div>
                  {i < heroStats.length - 1 && (
                    <div style={{ width: 1, height: 40, background: "#ebebeb" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Filter Bar ── */}
        <CaseStudyFilterBar active={activeCategory} onChange={handleCategoryChange} />

        {/* ── Grid ── */}
        <div style={{ padding: "48px 56px 80px", maxWidth: 1312, margin: "0 auto" }}>
          {paginated.length === 0 ? (
            <p style={{ color: "#aaa", fontSize: 16, textAlign: "center", padding: "64px 0" }}>
              No case studies found in this category.
            </p>
          ) : (
            <>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 28,
                marginBottom: 60,
              }}>
                {paginated.map((cs) => (
                  <CaseStudyCard key={cs.slug} cs={cs} />
                ))}
              </div>

              <CaseStudyPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={setCurrentPage}
              />
            </>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Add responsive grid CSS**

Add a `<style>` tag inside the page's `<main>` for responsive breakpoints (after the grid `<div>`):

```tsx
{/* Add this inside <main>, before the grid section */}
<style>{`
  @media (max-width: 1023px) {
    .cs-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 639px) {
    .cs-grid { grid-template-columns: 1fr !important; }
    .cs-hero-padding { padding: 48px 16px 36px !important; }
    .cs-filter-bar { padding: 0 16px !important; }
    .cs-main-padding { padding: 32px 16px 64px !important; }
  }
`}</style>
```

Add `className="cs-grid"` to the grid `<div>`, `className="cs-hero-padding"` to the hero section, and `className="cs-main-padding"` to the outer grid container.

- [ ] **Step 3: Start dev server and verify visually**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run dev
```

Open `http://localhost:3000/case-study` and verify:
- Hero renders with stats row
- All 7 filter tabs appear and are clickable
- Grid shows 3 columns, cards have correct layout
- Pagination shows when there are >10 items (add more seed data if needed)
- Hover state on card: lifts up, border turns orange, "View Detail" arrow turns orange
- Filter resets to page 1 when switching categories
- "View Detail" links to `/case-study/[slug]`

- [ ] **Step 4: Commit**

```bash
git add src/app/case-study/page.tsx
git commit -m "feat: implement case study list page with filter, grid, pagination"
```

---

## Task 6: Responsive polish

**Files:**
- Modify: `src/app/case-study/page.tsx`
- Modify: `src/components/case-study/CaseStudyFilterBar.tsx`

- [ ] **Step 1: Update page hero padding for mobile**

In `src/app/case-study/page.tsx`, the hero section uses `padding: "72px 56px 52px"`. Wrap it with a className and update the `<style>` tag to reduce padding on mobile:

```tsx
// Hero section — add className
<section className="cs-hero" style={{ ... }}>

// In <style> tag — add:
@media (max-width: 639px) {
  .cs-hero { padding: 40px 16px 32px !important; }
  .cs-hero h1 { font-size: 36px !important; letter-spacing: -1.5px !important; }
  .cs-hero-stats { flex-wrap: wrap; gap: 20px !important; }
}
```

- [ ] **Step 2: Update filter bar padding for mobile**

In `src/components/case-study/CaseStudyFilterBar.tsx`, wrap outer div with `className="cs-filter-bar"` and add to the page's style tag:

```css
@media (max-width: 639px) {
  .cs-filter-bar { padding: 0 16px !important; }
}
```

- [ ] **Step 3: Verify on mobile viewport**

In browser DevTools, set viewport to 375px wide and verify:
- Grid is 1 column
- Hero text is readable (h1 ~36px)
- Filter bar scrolls horizontally without overflow
- Cards look correct at full width

- [ ] **Step 4: Commit**

```bash
git add src/app/case-study/page.tsx src/components/case-study/CaseStudyFilterBar.tsx
git commit -m "feat: add mobile responsive styles for case study list"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Hero: eyebrow, H1 with orange span, subtext, stat row (hardcoded)
- ✅ Filter bar: sticky, 7 tabs, underline style, resets page on change
- ✅ Grid: 3 col desktop, 2 tablet, 1 mobile, gap 28px
- ✅ Card: thumbnail 228px, featured badge, category tag, title, description 3-line clamp, View Detail button with circle arrow
- ✅ Pagination: `‹ 1 2 … N ›`, resets on filter change, hides when 1 page
- ✅ Data: `src/data/caseStudies.ts` with `CaseStudy` type and 12 seed items
- ✅ Existing page replaced (not duplicated)

**Placeholder scan:** No TBD or TODO found.

**Type consistency:** `Category`, `CaseStudy`, `CATEGORIES` defined in Task 1 and used consistently in Tasks 2–5.
