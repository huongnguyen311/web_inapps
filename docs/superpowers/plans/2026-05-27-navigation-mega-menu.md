# Navigation Mega Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `Header.tsx` để thêm mega menu dropdown cho Services, Expertise, và About Us với hover interaction, animation, và full content theo spec.

**Architecture:** Single client component `Header.tsx` dùng `useState` để track menu nào đang mở (`activeMenu: string | null`). Dùng `useRef` + `setTimeout` để delay close (~100ms) tránh flicker khi di chuyển chuột từ trigger sang panel. Tất cả styles dùng inline style + Tailwind nhất quán với codebase hiện tại.

**Tech Stack:** React (useState, useRef, useCallback), Next.js App Router, Tailwind CSS, inline styles

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/components/Header.tsx` | Modify (rewrite) | Nav bar + 3 mega menu panels + hover logic |

Không tạo file mới — toàn bộ logic gọn trong một component.

---

### Task 1: Scaffold Header với state và plain nav links

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Đọc file hiện tại để hiểu structure**

Đọc `src/components/Header.tsx` — hiện tại nó là server component đơn giản với `navLinks` array và render plain `<a>` tags.

- [ ] **Step 2: Rewrite Header với "use client" và activeMenu state**

Thay toàn bộ nội dung `src/components/Header.tsx` bằng:

```tsx
"use client";

import { useState, useRef, useCallback } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((name: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMenu(name);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 100);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-[#1f1f1f]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Nav bar row */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-[120px] py-[18px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo_white.svg" alt="InApps.net" className="h-[52px] w-auto" />
        </div>

        {/* Nav links */}
        <nav className="flex gap-1 items-center">
          {/* Services — has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "services" ? "#ef5023" : "#ffffff", background: activeMenu === "services" ? "rgba(239,80,35,0.08)" : "transparent" }}
            >
              Services
              <span
                style={{
                  fontSize: "10px",
                  color: activeMenu === "services" ? "#ef5023" : "#666",
                  display: "inline-block",
                  transition: "transform 0.2s",
                  transform: activeMenu === "services" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >▾</span>
            </button>
            {/* Placeholder — mega menu added in Task 2 */}
          </div>

          {/* Expertise — has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("expertise")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "expertise" ? "#ef5023" : "#ffffff", background: activeMenu === "expertise" ? "rgba(239,80,35,0.08)" : "transparent" }}
            >
              Expertise
              <span
                style={{
                  fontSize: "10px",
                  color: activeMenu === "expertise" ? "#ef5023" : "#666",
                  display: "inline-block",
                  transition: "transform 0.2s",
                  transform: activeMenu === "expertise" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >▾</span>
            </button>
            {/* Placeholder — mega menu added in Task 3 */}
          </div>

          {/* Case Studies — plain link */}
          <a
            href="#"
            className="text-[15px] font-semibold text-white hover:text-[#ef5023] transition-colors px-3 py-2 rounded-lg whitespace-nowrap"
          >
            Case Studies
          </a>

          {/* Blog — plain link */}
          <a
            href="#"
            className="text-[15px] font-semibold text-white hover:text-[#ef5023] transition-colors px-3 py-2 rounded-lg whitespace-nowrap"
          >
            Blog
          </a>

          {/* About Us — has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("about")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[15px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "about" ? "#ef5023" : "#ffffff", background: activeMenu === "about" ? "rgba(239,80,35,0.08)" : "transparent" }}
            >
              About Us
              <span
                style={{
                  fontSize: "10px",
                  color: activeMenu === "about" ? "#ef5023" : "#666",
                  display: "inline-block",
                  transition: "transform 0.2s",
                  transform: activeMenu === "about" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >▾</span>
            </button>
            {/* Placeholder — mega menu added in Task 4 */}
          </div>
        </nav>

        {/* CTA */}
        <div className="flex justify-end">
          <button
            className="bg-[#ef5023] text-white text-[15px] font-bold px-6 h-[44px] rounded-lg hover:bg-[#e63d1f] transition-colors"
            style={{ boxShadow: "0 10px 15px -3px rgba(255,73,41,0.2),0 4px 6px -4px rgba(255,73,41,0.2)" }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Verify build không bị lỗi**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run build 2>&1 | tail -20
```

Expected: build thành công, không có TypeScript errors.

- [ ] **Step 4: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/components/Header.tsx
git commit -m "feat: scaffold Header with activeMenu state and nav structure"
```

---

### Task 2: Services Mega Menu panel

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Thêm Services mega menu panel**

Trong `Header.tsx`, thay phần comment `{/* Placeholder — mega menu added in Task 2 */}` bên dưới Services button bằng đoạn JSX sau:

```tsx
{activeMenu === "services" && (
  <div
    onMouseEnter={cancelClose}
    onMouseLeave={closeMenu}
    style={{
      position: "fixed",
      top: "88px",
      left: "120px",
      right: "120px",
      background: "#0d0d0d",
      border: "1px solid #1f1f1f",
      borderTop: "2px solid #ef5023",
      borderRadius: "0 0 16px 16px",
      padding: "24px 28px",
      zIndex: 49,
      opacity: 1,
      animation: "menuFadeIn 0.15s ease-out",
    }}
  >
    {/* Grid background */}
    <div
      style={{
        position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "0 0 16px 16px",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.1fr 1.5fr 0.9fr", gap: "0 32px", position: "relative" }}>

      {/* Col 1 — Engagement Models */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#555", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(239,80,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>🏢</span>
          Engagement Models
        </div>
        {[
          { icon: "🌏", title: "Offshore Dev Center", desc: "Dedicated offshore team, fully managed" },
          { icon: "👥", title: "Staff Augmentation", desc: "Scale team with vetted engineers" },
          { icon: "✅", title: "QA & Testing", desc: "Manual & automated quality assurance", iconBg: "rgba(59,130,246,0.1)", iconBorder: "rgba(59,130,246,0.2)" },
          { icon: "🎨", title: "UI/UX Design", desc: "User-centered design & prototyping", iconBg: "rgba(168,85,247,0.1)", iconBorder: "rgba(168,85,247,0.2)" },
        ].map((item) => (
          <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} iconBg={item.iconBg} iconBorder={item.iconBorder} />
        ))}
      </div>

      {/* Col 2 — AI & Automation */}
      <div style={{ borderLeft: "1px solid #161616", paddingLeft: "28px" }}>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#555", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(239,80,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>🤖</span>
          AI & Automation
        </div>
        {[
          { icon: "🧠", title: "AI Agent Development", desc: "Autonomous agents for complex tasks" },
          { icon: "⚙️", title: "Agentic Workflow Automation", desc: "End-to-end AI-driven process flows" },
          { icon: "✨", title: "Generative AI Integration", desc: "LLM-powered features in your product" },
          { icon: "🔬", title: "AI Development Services", desc: "Custom ML models & AI infrastructure" },
        ].map((item) => (
          <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>

      {/* Col 3 — Engineering */}
      <div style={{ borderLeft: "1px solid #161616", paddingLeft: "28px" }}>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#555", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(239,80,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>⚡</span>
          Engineering
        </div>
        {[
          { icon: "💻", title: "Custom Software Development", desc: "Tailored solutions built from scratch", iconBg: "rgba(34,197,94,0.1)", iconBorder: "rgba(34,197,94,0.2)" },
          { icon: "🌐", title: "Web Development", desc: "Performant, scalable web applications", iconBg: "rgba(34,197,94,0.1)", iconBorder: "rgba(34,197,94,0.2)" },
          { icon: "📱", title: "Mobile App Development", desc: "Native & cross-platform mobile apps", iconBg: "rgba(34,197,94,0.1)", iconBorder: "rgba(34,197,94,0.2)" },
          { icon: "☁️", title: "Cloud & DevOps", desc: "CI/CD, infra, and cloud migration", iconBg: "rgba(34,197,94,0.1)", iconBorder: "rgba(34,197,94,0.2)" },
          { icon: "🚀", title: "MVP / Proof of Concept", desc: "Validate ideas fast, ship lean MVPs" },
          { icon: "🔗", title: "System Integration", desc: "Connect APIs, ERPs, and data sources" },
        ].map((item) => (
          <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} iconBg={item.iconBg} iconBorder={item.iconBorder} />
        ))}
      </div>

      {/* Col 4 — CTA */}
      <div style={{ borderLeft: "1px solid #161616", paddingLeft: "28px" }}>
        <CtaCard
          icon="📞"
          title="Book a Discovery Call"
          desc="Get a free 30-min consultation on your next project."
          btnLabel="Book a Discovery Call"
          stats={[{ value: "500+", label: "in-house developers worldwide" }]}
          badges={["ISO Certified", "Clutch Top", "Sao Khue"]}
        />
      </div>

    </div>
  </div>
)}
```

- [ ] **Step 2: Thêm helper components MegaMenuItem và CtaCard trước function Header**

Thêm vào đầu file, sau các import:

```tsx
// ── Helper: MegaMenuItem ─────────────────────────────────────────────────────
function MegaMenuItem({
  icon, title, desc,
  iconBg = "rgba(239,80,35,0.1)",
  iconBorder = "rgba(239,80,35,0.15)",
}: {
  icon: string; title: string; desc: string;
  iconBg?: string; iconBorder?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: "10px",
        padding: "9px 8px", borderRadius: "9px",
        background: hovered ? "#161616" : "transparent",
        cursor: "pointer", transition: "background 0.12s", marginTop: "2px",
      }}
    >
      <div style={{
        width: 30, height: 30, borderRadius: 7, flexShrink: 0, marginTop: 1,
        background: iconBg, border: `1px solid ${iconBorder}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: hovered ? "#ef5023" : "#e0e0e0", lineHeight: 1.3, transition: "color 0.12s" }}>{title}</div>
        <div style={{ fontSize: 11, color: "#555", marginTop: 2, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}

// ── Helper: CtaCard ──────────────────────────────────────────────────────────
function CtaCard({
  icon, title, desc, btnLabel,
  stats, badges,
}: {
  icon: string; title: string; desc: string; btnLabel: string;
  stats: { value: string; label: string }[];
  badges: string[];
}) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1a0800 0%, #120500 100%)",
      border: "1px solid rgba(239,80,35,0.2)",
      borderRadius: 12, padding: 20,
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(239,80,35,0.15)", border: "1px solid rgba(239,80,35,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{title}</div>
        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginTop: 4 }}>{desc}</div>
      </div>
      <button style={{ background: "#ef5023", color: "white", fontSize: 12, fontWeight: 700, padding: "9px 16px", borderRadius: 8, border: "none", cursor: "pointer", textAlign: "center", boxShadow: "0 4px 16px rgba(239,80,35,0.25)" }}>
        {btnLabel}
      </button>
      <div style={{ paddingTop: 14, borderTop: "1px solid rgba(239,80,35,0.12)", display: "flex", flexDirection: "column", gap: 6 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ fontSize: 12, color: "#666", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#ef5023", flexShrink: 0, display: "inline-block" }} />
            <strong style={{ color: "#fff", fontWeight: 700 }}>{s.value}</strong> {s.label}
          </div>
        ))}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
          {badges.map((b) => (
            <span key={b} style={{ fontSize: 10, fontWeight: 700, color: "#ef5023", border: "1px solid rgba(239,80,35,0.3)", borderRadius: 5, padding: "3px 8px", background: "rgba(239,80,35,0.06)" }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Thêm CSS animation vào globals.css**

Mở `src/app/globals.css` và append:

```css
@keyframes menuFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- [ ] **Step 4: Verify build**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run build 2>&1 | tail -20
```

Expected: build thành công không có lỗi.

- [ ] **Step 5: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/components/Header.tsx src/app/globals.css
git commit -m "feat: add Services mega menu panel with 4-column layout"
```

---

### Task 3: Expertise Mega Menu panel

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Thêm Expertise mega menu panel**

Thay comment `{/* Placeholder — mega menu added in Task 3 */}` bên dưới Expertise button bằng:

```tsx
{activeMenu === "expertise" && (
  <div
    onMouseEnter={cancelClose}
    onMouseLeave={closeMenu}
    style={{
      position: "fixed",
      top: "88px",
      left: "120px",
      right: "120px",
      background: "#0d0d0d",
      border: "1px solid #1f1f1f",
      borderTop: "2px solid #ef5023",
      borderRadius: "0 0 16px 16px",
      padding: "24px 28px",
      zIndex: 49,
      animation: "menuFadeIn 0.15s ease-out",
    }}
  >
    <div
      style={{
        position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "0 0 16px 16px",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.85fr", gap: "0 32px", position: "relative" }}>

      {/* Col 1 — Industries */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#555", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(239,80,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>🏭</span>
          Industries
        </div>
        {[
          { icon: "🏦", title: "Fintech & Banking", desc: "Payment systems, trading platforms, KYC" },
          { icon: "🏥", title: "Healthcare & MedTech", desc: "EHR, telemedicine, health data platforms", iconBg: "rgba(59,130,246,0.1)", iconBorder: "rgba(59,130,246,0.2)" },
          { icon: "🛒", title: "E-commerce & Retail", desc: "Marketplace, POS, inventory systems", iconBg: "rgba(34,197,94,0.1)", iconBorder: "rgba(34,197,94,0.2)" },
          { icon: "🚚", title: "Logistics & Supply Chain", desc: "Fleet management, tracking, WMS" },
          { icon: "☁️", title: "SaaS & Enterprise", desc: "Multi-tenant platforms at scale", iconBg: "rgba(168,85,247,0.1)", iconBorder: "rgba(168,85,247,0.2)" },
        ].map((item) => (
          <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} iconBg={item.iconBg} iconBorder={item.iconBorder} />
        ))}
      </div>

      {/* Col 2 — Technologies */}
      <div style={{ borderLeft: "1px solid #161616", paddingLeft: "28px" }}>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#555", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(239,80,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>⚙️</span>
          Technologies
        </div>
        {[
          { group: "Frontend", tags: ["React", "Next.js", "Vue.js", "TypeScript"] },
          { group: "Backend", tags: ["Node.js", "Python", "Go", "Java"] },
          { group: "Cloud & AI", tags: ["AWS", "GCP", "Azure", "AI/ML", "LLM"] },
          { group: "Mobile", tags: ["React Native", "Flutter", "Swift"] },
        ].map(({ group, tags }) => (
          <div key={group} style={{ padding: "8px 8px 6px" }}>
            <div style={{ fontSize: 11, color: "#555", marginBottom: 8 }}>{group}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Col 3 — CTA */}
      <div style={{ borderLeft: "1px solid #161616", paddingLeft: "28px" }}>
        <CtaCard
          icon="🎯"
          title="Find Your Tech Stack"
          desc="Not sure which technology fits your project? Talk to our engineers for a free consultation."
          btnLabel="Talk to an Expert"
          stats={[
            { value: "150+", label: "senior tech experts" },
            { value: "10+", label: "years of experience" },
          ]}
          badges={[]}
        />
      </div>

    </div>
  </div>
)}
```

- [ ] **Step 2: Thêm helper TechTag trước function Header**

Thêm vào file sau `CtaCard` component:

```tsx
// ── Helper: TechTag ──────────────────────────────────────────────────────────
function TechTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 11, fontWeight: 600,
        color: hovered ? "#ef5023" : "#888",
        border: `1px solid ${hovered ? "rgba(239,80,35,0.4)" : "#222"}`,
        borderRadius: 6, padding: "4px 10px",
        background: hovered ? "rgba(239,80,35,0.06)" : "#111",
        cursor: "pointer", transition: "all 0.12s",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run build 2>&1 | tail -20
```

Expected: build thành công không có lỗi.

- [ ] **Step 4: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/components/Header.tsx
git commit -m "feat: add Expertise mega menu panel with industries and tech tags"
```

---

### Task 4: About Us Mega Menu panel

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Thêm About Us mega menu panel**

Thay comment `{/* Placeholder — mega menu added in Task 4 */}` bên dưới About Us button bằng:

```tsx
{activeMenu === "about" && (
  <div
    onMouseEnter={cancelClose}
    onMouseLeave={closeMenu}
    style={{
      position: "fixed",
      top: "88px",
      left: "120px",
      right: "120px",
      background: "#0d0d0d",
      border: "1px solid #1f1f1f",
      borderTop: "2px solid #ef5023",
      borderRadius: "0 0 16px 16px",
      padding: "24px 28px",
      zIndex: 49,
      animation: "menuFadeIn 0.15s ease-out",
    }}
  >
    <div
      style={{
        position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "0 0 16px 16px",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "0 32px", position: "relative" }}>

      {/* Col 1 — Company links */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#555", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: "10px", marginBottom: "4px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(239,80,35,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>ℹ️</span>
          Company
        </div>
        {[
          { num: "01", title: "Our Story", desc: "10+ years building software for the world" },
          { num: "02", title: "Leadership Team", desc: "Meet the people behind InApps" },
          { num: "03", title: "Life at InApps", desc: "Culture, values, and how we work" },
          { num: "04", title: "Careers", desc: "Join our growing team of 150+ engineers" },
          { num: "05", title: "Press & Awards", desc: "#1 Vietnam · Top 5 SEA on Clutch" },
        ].map((item) => (
          <AboutMenuItem key={item.num} num={item.num} title={item.title} desc={item.desc} />
        ))}
      </div>

      {/* Col 2 — Stats highlight */}
      <div style={{ borderLeft: "1px solid #161616", paddingLeft: "28px" }}>
        <div style={{
          background: "linear-gradient(135deg, #1a0800 0%, #0d0d0d 100%)",
          border: "1px solid rgba(239,80,35,0.15)",
          borderRadius: 12, padding: 20,
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#666", letterSpacing: "1px", textTransform: "uppercase" }}>InApps by Numbers</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { num: "10+", label: "Years Experience" },
              { num: "150+", label: "Tech Experts" },
              { num: "250+", label: "Projects Delivered" },
              { num: "95%", label: "Client Retention" },
            ].map(({ num, label }) => (
              <div key={label} style={{ background: "rgba(239,80,35,0.06)", border: "1px solid rgba(239,80,35,0.12)", borderRadius: 10, padding: "12px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}>
                  {num.replace(/[+%]/, "")}<span style={{ color: "#ef5023" }}>{num.match(/[+%]/)?.[0]}</span>
                </div>
                <div style={{ fontSize: 10, color: "#555", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
            {["#1 Vietnam", "Top 5 SEA", "Clutch 5.0★"].map((b) => (
              <span key={b} style={{ fontSize: 10, fontWeight: 700, color: "#ef5023", border: "1px solid rgba(239,80,35,0.3)", borderRadius: 5, padding: "3px 8px", background: "rgba(239,80,35,0.06)" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
)}
```

- [ ] **Step 2: Thêm helper AboutMenuItem sau TechTag**

```tsx
// ── Helper: AboutMenuItem ────────────────────────────────────────────────────
function AboutMenuItem({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "10px 10px", borderRadius: 9,
        background: hovered ? "#161616" : "transparent",
        cursor: "pointer", transition: "background 0.12s",
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 900, color: "#333", width: 22, textAlign: "center", flexShrink: 0 }}>{num}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: hovered ? "#ef5023" : "#ddd", transition: "color 0.12s" }}>{title}</div>
        <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{desc}</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run build 2>&1 | tail -20
```

Expected: build thành công không có lỗi.

- [ ] **Step 4: Commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add src/components/Header.tsx
git commit -m "feat: add About Us mega menu panel with company links and stats"
```

---

### Task 5: Smoke test và verify toàn bộ

**Files:**
- Read: `src/components/Header.tsx`

- [ ] **Step 1: Chạy dev server và verify thủ công**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`, kiểm tra:
- [ ] Hover vào **Services** → mega menu 4 cột hiện ra với animation fade-in
- [ ] Hover vào **Expertise** → mega menu 3 cột với tech tags hiện ra
- [ ] Hover vào **About Us** → mega menu 2 cột với stats card hiện ra
- [ ] Di chuyển chuột từ trigger xuống panel → menu không đóng (delay 100ms hoạt động)
- [ ] Rời khỏi menu → đóng sau 100ms
- [ ] **Case Studies** và **Blog** là plain links không có dropdown
- [ ] Arrow `▾` xoay 180° khi menu mở
- [ ] Hover từng item trong menu → background `#161616`, title đổi sang `#ef5023`

- [ ] **Step 2: Verify không có layout shift trên page**

Scroll xuống trang chính, verify header vẫn fixed và không bị lỗi layout khi mega menu mở.

- [ ] **Step 3: Final commit**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
git add -A
git commit -m "feat: complete navigation mega menu for Services, Expertise, About Us"
```
