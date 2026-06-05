# Tech Stack Section Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat 4-column category grid in `TechnologySection.tsx` with a layered row layout that visually communicates breadth + depth, with AI & ML highlighted as core expertise.

**Architecture:** Single component rewrite — no new files, no data changes. `TechCategory[]` is grouped into 5 display layers (CLIENT, API, AI & ML, DATA, INFRA) by a mapping function inside the component. Each layer renders a label column + badge row. AI layer gets special red accent treatment.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Next.js 16

---

## Files

| Action | File | Change |
|--------|------|--------|
| Modify | `src/components/case-study-detail/TechnologySection.tsx` | Full rewrite of render logic |

No other files change.

---

### Task 1: Rewrite `TechnologySection.tsx` with layer mapping and base layout

**Files:**
- Modify: `src/components/case-study-detail/TechnologySection.tsx`

- [ ] **Step 1: Read the current file**

Open `src/components/case-study-detail/TechnologySection.tsx` and confirm the current props type is `Pick<CaseStudyDetail, "techCategories">`.

- [ ] **Step 2: Replace the file with the new implementation**

Replace the entire content of `src/components/case-study-detail/TechnologySection.tsx` with:

```tsx
// src/components/case-study-detail/TechnologySection.tsx
import type { TechCategory } from "@/data/caseStudyDetailMock";

type Props = {
  techCategories: TechCategory[];
};

// Layer config — defines display order, label, color, and which categories map to it
const LAYERS: {
  key: string;
  label: string;
  subLabel?: string;
  categories: TechCategory["category"][];
  color: string;
  isCore?: boolean;
}[] = [
  {
    key: "client",
    label: "CLIENT",
    categories: ["Frontend", "Mobile"],
    color: "#61DAFB",
  },
  {
    key: "api",
    label: "API",
    categories: ["Backend"],
    color: "#68D391",
  },
  {
    key: "ai",
    label: "AI & ML",
    subLabel: "Core",
    categories: ["AI"],
    color: "#FF4929",
    isCore: true,
  },
  {
    key: "data",
    label: "DATA",
    categories: ["Database"],
    color: "#B794F4",
  },
  {
    key: "infra",
    label: "INFRA",
    categories: ["Cloud", "DevOps"],
    color: "#FC814A",
  },
];

function getInitials(name: string): string {
  return name
    .split(/[\s/.(-]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

function PrimaryBadge({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex items-center gap-[6px] rounded-[8px] px-[12px] py-[6px]"
      style={{
        background: `${color}1F`, // ~12% opacity
        border: `1px solid ${color}40`, // ~25% opacity
      }}
    >
      <div
        className="flex items-center justify-center rounded-[4px] text-[7px] font-black flex-shrink-0"
        style={{
          width: 18,
          height: 18,
          background: color,
          color: color === "#FF4929" ? "#fff" : "#0d0d0d",
        }}
      >
        {getInitials(name)}
      </div>
      <span
        className="text-[12px] font-semibold"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

function SecondaryBadge({ name, isCore }: { name: string; isCore?: boolean }) {
  if (isCore) {
    return (
      <span
        className="text-[11px] px-[10px] py-[5px] rounded-[6px]"
        style={{
          background: "rgba(255,73,41,0.08)",
          color: "#ff7a5a",
          border: "1px solid rgba(255,73,41,0.15)",
        }}
      >
        {name}
      </span>
    );
  }
  return (
    <span
      className="text-[11px] px-[10px] py-[5px] rounded-[6px]"
      style={{
        background: "rgba(255,255,255,0.05)",
        color: "#64748b",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {name}
    </span>
  );
}

export default function TechnologySection({ techCategories }: Props) {
  // Build a lookup: category name → techs array
  const categoryMap = new Map<TechCategory["category"], string[]>();
  for (const cat of techCategories) {
    const existing = categoryMap.get(cat.category) ?? [];
    categoryMap.set(cat.category, [...existing, ...cat.techs]);
  }

  // Build display layers — skip layers with no data
  const displayLayers = LAYERS.flatMap((layer) => {
    const techs = layer.categories.flatMap((c) => categoryMap.get(c) ?? []);
    if (techs.length === 0) return [];
    return [{ ...layer, techs }];
  });

  return (
    <section
      className="px-4 sm:px-[60px] py-[80px]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-[40px]">
          <p
            className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]"
            style={{ color: "#FF4929" }}
          >
            Built With
          </p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px] mb-[8px]">
            Technology Stack
          </h2>
          <p className="text-[14px]" style={{ color: "#64748b" }}>
            End-to-end coverage across client, API, AI, and infrastructure layers.
          </p>
        </div>

        {/* Layer rows */}
        <div className="flex flex-col">
          {displayLayers.map((layer, i) => {
            const isLast = i === displayLayers.length - 1;
            const [primary, ...secondary] = layer.techs;

            return (
              <div
                key={layer.key}
                className="flex items-start gap-[24px] relative"
                style={{
                  padding: "20px 0",
                  borderBottom: isLast
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                  paddingLeft: layer.isCore ? "12px" : undefined,
                }}
              >
                {/* Red accent line for AI layer */}
                {layer.isCore && (
                  <div
                    className="absolute left-0 top-0 bottom-0 rounded-[1px]"
                    style={{ width: 2, background: "#FF4929" }}
                  />
                )}

                {/* Layer label */}
                <div
                  className="flex-shrink-0 pt-[3px]"
                  style={{ width: 90 }}
                >
                  <div
                    className="text-[10px] font-bold uppercase tracking-[1.5px]"
                    style={{ color: layer.isCore ? "#FF4929" : "#64748b" }}
                  >
                    {layer.label}
                  </div>
                  {layer.subLabel && (
                    <div
                      className="text-[8px] font-semibold mt-[2px]"
                      style={{ color: "#FF4929", opacity: 0.7 }}
                    >
                      {layer.subLabel}
                    </div>
                  )}
                </div>

                {/* Vertical divider */}
                <div
                  className="flex-shrink-0 self-stretch mt-[2px]"
                  style={{
                    width: 1,
                    background: layer.isCore
                      ? "rgba(255,73,41,0.3)"
                      : "rgba(255,255,255,0.08)",
                  }}
                />

                {/* Badges */}
                <div className="flex flex-wrap gap-[8px] items-center flex-1">
                  {primary && (
                    <PrimaryBadge name={primary} color={layer.color} />
                  )}
                  {secondary.map((name) => (
                    <SecondaryBadge
                      key={name}
                      name={name}
                      isCore={layer.isCore}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify the dev server compiles without errors**

Check `http://localhost:3000/case-study/ai-patient-triage` in the browser.

Expected: page loads, Technology Stack section shows 5 rows (CLIENT, API, AI & ML, DATA, INFRA). AI & ML row has red accent line on the left and red-tinted badges.

- [ ] **Step 4: Visual check — layer order**

Verify top-to-bottom order matches spec:
1. CLIENT — React Native (primary badge, cyan), TypeScript, Redux Toolkit, Reanimated 3
2. API — Node.js (primary, green), NestJS, Apache Kafka, GraphQL
3. AI & ML — SageMaker (primary, red), PyTorch, XGBoost, Pandas — left accent line visible
4. DATA — PostgreSQL (primary, purple), Redis, DynamoDB
5. INFRA — AWS ECS (primary, orange), Terraform, Docker, GitHub Actions, Datadog

- [ ] **Step 5: Visual check — responsive**

Resize browser to mobile width (~375px). Verify:
- Badge row wraps correctly (flex-wrap)
- Layer label column stays at 90px, doesn't overflow
- Section padding uses `px-4` on mobile (not `px-[60px]`)

- [ ] **Step 6: Verify TypeScript — no type errors**

Run in terminal:
```bash
cd "c:\Users\ntthu\OneDrive\Documents\InApps\inapps-web" && npx tsc --noEmit
```
Expected: no output (zero errors).

- [ ] **Step 7: Commit**

```bash
cd "c:\Users\ntthu\OneDrive\Documents\InApps\inapps-web"
git add src/components/case-study-detail/TechnologySection.tsx
git commit -m "feat: redesign TechnologySection with tech layer stack layout

- Replace flat 4-col grid with horizontal layer rows (CLIENT/API/AI/DATA/INFRA)
- AI & ML highlighted as core expertise with red accent line and tinted badges
- Primary tech per layer gets icon badge, supporting techs use text-only tags
- Layer order is fixed; layers with no data are omitted automatically"
```

---

## Self-Review

**Spec coverage:**
- ✅ Horizontal rows per layer — Task 1 Step 2
- ✅ Layer mapping (Frontend+Mobile→CLIENT, etc.) — `LAYERS` config in Task 1 Step 2
- ✅ AI layer omitted if no data — `displayLayers` flatMap filter in Task 1 Step 2
- ✅ Primary badge with icon initials + layer color — `PrimaryBadge` component
- ✅ Secondary badges text-only — `SecondaryBadge` component
- ✅ AI accent line, red label, "Core" sub-label — `isCore` branch in render
- ✅ Header subtitle added — Task 1 Step 2
- ✅ Background, padding, max-width unchanged — confirmed in section wrapper
- ✅ `caseStudyDetailMock.ts` untouched — no task touches it
- ✅ `/stack` page untouched — out of scope, confirmed

**Placeholder scan:** No TBD, TODO, or vague steps. All code is complete.

**Type consistency:** `TechCategory["category"]` used in `LAYERS` config and `categoryMap` — consistent. `getInitials`, `PrimaryBadge`, `SecondaryBadge` defined before use.
