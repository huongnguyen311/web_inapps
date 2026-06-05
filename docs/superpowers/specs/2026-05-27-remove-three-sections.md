# Remove Three Homepage Sections

**Date:** 2026-05-27  
**File:** `src/app/page.tsx`  
**Status:** Approved for implementation

---

## Summary

Remove three sections from the homepage and clean up all associated dead code. No other changes.

---

## Deletions

### 1. `caseStudies` data array
- Location: ~line 86–91 (the typed array with `pattern` fields)
- Reason: Only used by the Case Studies section being removed

### 2. `patternStyle` helper function
- Location: immediately above `export default function Home()`
- Reason: Only used by the Case Studies section being removed

### 3. `activeTab` useState
- Location: first line inside `Home()` — `const [activeTab, setActiveTab] = useState(0);`
- Reason: Only used by the Tech Stack (Engineering Excellence) section being removed

### 4. Case Studies section JSX
- Comment: `{/* ── 5. CASE STUDIES */}`
- From: the comment line
- To: closing `</section>` + trailing blank line
- Eyebrow label: "Our Work"

### 5. Engagement Models section JSX
- Comment: `{/* ── ENGAGEMENT MODELS */}`
- From: the comment line
- To: closing `</section>` + trailing blank line
- Eyebrow label: "How We Engage"

### 6. Tech Stack section JSX
- Comment: `{/* ── 9. TECHNOLOGIES & PLATFORMS */}`
- From: the comment line
- To: closing `</section>` + trailing blank line
- Eyebrow label: "Engineering Excellence"

---

## Out of Scope

- Any other section on the page
- Styling or layout changes to remaining sections
- Navigation link changes
