# Tech Stack Section Redesign — Case Study Detail

**Date:** 2026-05-31  
**Scope:** `TechnologySection.tsx` component used in `/case-study/[slug]` pages  
**Status:** Approved

---

## Goal

Replace the current 4-column category card grid with a layered row layout that communicates both **breadth** (many techs) and **depth** (highlights core expertise) to potential clients.

---

## Context

- **Location:** Case study detail page, e.g. `/case-study/ai-patient-triage`
- **Audience:** Potential clients evaluating InApps' technical capability
- **Current design:** `grid grid-cols-4` — flat cards, all categories treated equally, no visual hierarchy
- **Data source:** `techCategories: TechCategory[]` from `caseStudyDetailMock.ts`, typed as `"Frontend" | "Backend" | "Mobile" | "Cloud" | "Database" | "AI" | "DevOps"`

---

## Design: Tech Layer Stack (Direction G)

### Layout

Horizontal rows, one per layer, reading top-to-bottom:

```
CLIENT    | React Native ★  TypeScript  Redux Toolkit  Reanimated 3
API       | Node.js ★       NestJS      Apache Kafka   GraphQL  
AI & ML ★ | SageMaker ★     PyTorch ★   XGBoost        Pandas        ← highlighted
DATA      | PostgreSQL ★    Redis        DynamoDB
INFRA     | AWS ECS ★       Terraform   Docker         GitHub Actions  Datadog
```

Left column: layer label (90px wide, fixed).  
Vertical divider line separating label from tech badges.  
Right: tech badges, flex-wrap.

### Layer Mapping

Map existing `TechCategory` values to display layers:

| TechCategory value | Display layer label | Layer order |
|--------------------|--------------------|----|
| `Frontend` / `Mobile` | `CLIENT` | 1 |
| `Backend` | `API` | 2 |
| `AI` | `AI & ML` | 3 |
| `Database` | `DATA` | 4 |
| `Cloud` / `DevOps` | `INFRA` | 5 |

If a case study has no `AI` category, AI layer is omitted. Order is fixed regardless of data order.

### Badge Types

Each layer shows two tiers of badges:

**Primary badge** (first tech in the category array):
- Has a small colored icon block (initials, 18×18px) + tech name
- Color-coded per layer (see colors below)
- Background: tinted color at 12% opacity, border at 25% opacity

**Secondary badges** (remaining techs):
- Text only, no icon
- `background: rgba(255,255,255,0.05)`, `color: #64748b`
- Same border-radius, same height

### AI Layer Special Treatment

AI & ML is the "core expertise" layer — visually dominant:
- 2px red accent line on the far left (`#FF4929`)
- Label color: `#FF4929` (vs `#64748b` for other layers)
- Small "Core" sub-label below "AI & ML"
- Vertical divider: `#FF4929` at 30% opacity
- Primary badges: red tinted (`rgba(255,73,41,0.15)`, border `rgba(255,73,41,0.35)`)
- Secondary badges: `color: #ff7a5a`, red-tinted background

### Layer Colors

| Layer | Accent color |
|-------|-------------|
| CLIENT | `#61DAFB` (React blue) |
| API | `#68D391` (green) |
| AI & ML | `#FF4929` (InApps red) |
| DATA | `#B794F4` (purple) |
| INFRA | `#FC814A` (orange/AWS) |

### Section Header

Unchanged from current:
```
[Built With]          ← red, 11px, uppercase, tracking-[2px]
Technology Stack      ← white, 34px, font-black, tracking-[-1.5px]
End-to-end coverage…  ← #64748b, 14px subtitle (new addition)
```

### Background & Spacing

- Section background: `#0d0d0d` (unchanged)
- Section padding: `px-4 sm:px-[60px] py-[80px]` (unchanged)
- Max-width: `1200px` (unchanged)
- Header margin-bottom: `40px`
- Row padding: `20px 0`
- Row separator: `1px solid rgba(255,255,255,0.06)`
- Gap between badges: `8px`

---

## Component Changes

### `TechnologySection.tsx`

- Replace grid with flex-column layer rows
- Add layer mapping logic (Frontend+Mobile → CLIENT, etc.)
- Add `isCore` flag for AI layer
- Render primary badge (with icon) + secondary badges (text only)
- No external dependencies needed — pure CSS/Tailwind

### `caseStudyDetailMock.ts`

No changes to data structure. The `TechCategory` type and `techCategories` array remain the same.

---

## What Stays the Same

- Dark background `#0d0d0d`
- Section padding and max-width
- "Built With" + "Technology Stack" heading
- Data shape (`TechCategory[]`)

---

## Out of Scope

- Real SVG logos (icon blocks use text initials for now — logo swap is a follow-up)
- The `/stack` page (`TechStack.tsx`) — not touched
- Any other case study detail sections
