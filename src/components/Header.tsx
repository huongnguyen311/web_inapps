"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


// ── Helper: MegaMenuItem ─────────────────────────────────────────────────────
function MegaMenuItem({
  icon, title, desc, href,
  iconBg = "rgba(239,80,35,0.1)",
  iconBorder = "rgba(239,80,35,0.15)",
}: {
  icon: string; title: string; desc: string; href?: string;
  iconBg?: string; iconBorder?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "flex-start", gap: "10px",
        padding: "9px 8px", borderRadius: "9px",
        background: hovered ? "#f5f5f5" : "transparent",
        cursor: "pointer", transition: "background 0.12s", marginTop: "2px",
      }}
    >
      <div style={{
        width: 30, height: 30, borderRadius: 7, flexShrink: 0, marginTop: 1,
        background: iconBg, border: `1px solid ${iconBorder}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: hovered ? "#ef5023" : "#111", lineHeight: 1.3, transition: "color 0.12s" }}>{title}</div>
        <div style={{ fontSize: 11, color: "#888", marginTop: 2, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
  if (href) {
    return <Link href={href} style={{ textDecoration: "none" }}>{inner}</Link>;
  }
  return inner;
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

// ── Helper: TechTag ──────────────────────────────────────────────────────────
function TechTag({ label, color = "#6366f1" }: { label: string; color?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 11, fontWeight: 600,
        color: hovered ? color : color,
        border: `1px solid ${hovered ? color : `${color}40`}`,
        borderRadius: 6, padding: "4px 10px",
        background: hovered ? `${color}18` : `${color}0d`,
        cursor: "pointer", transition: "all 0.12s",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

// ── Helper: AboutMenuItem ────────────────────────────────────────────────────
function AboutMenuItem({ num: icon, title, desc, href }: { num: string; title: string; desc: string; href?: string }) {
  const [hovered, setHovered] = useState(false);
  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "10px 10px", borderRadius: 9,
        background: hovered ? "#f5f5f5" : "transparent",
        cursor: "pointer", transition: "background 0.12s",
      }}
    >
      <div style={{ width: 30, height: 30, borderRadius: 7, flexShrink: 0, background: "rgba(239,80,35,0.08)", border: "1px solid rgba(239,80,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: hovered ? "#ef5023" : "#111", transition: "color 0.12s" }}>{title}</div>
        <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{desc}</div>
      </div>
    </div>
  );
  if (href) {
    return <Link href={href} style={{ textDecoration: "none" }}>{inner}</Link>;
  }
  return inner;
}

export default function Header({ forceDark = false }: { forceDark?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // When forceDark is true, logo & nav always use the "scrolled" (dark) appearance
  const dark = forceDark || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileSubmenu(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${dark ? "backdrop-blur-md" : ""}`}
      style={{
        fontFamily: "'Inter', sans-serif",
        background: dark ? "rgba(255,255,255,0.97)" : "transparent",
        borderColor: dark ? "#e5e7eb" : "transparent",
      }}
    >
      {/* Nav bar row */}
      <div className="px-[16px] md:px-[40px] py-[14px] md:py-[18px]">
      <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] max-w-[1320px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className="relative h-[40px] md:h-[52px]" style={{ width: "auto" }}>
              <img
                src="/logo_white.svg"
                alt="InApps.net"
                className="h-[40px] md:h-[52px] w-auto absolute top-0 left-0 transition-opacity duration-500"
                style={{ opacity: dark ? 0 : 1 }}
              />
              <img
                src="/Media/inapps-logo_black.svg"
                alt="InApps.net"
                className="h-[40px] md:h-[52px] w-auto absolute top-0 left-0 transition-opacity duration-500"
                style={{ opacity: dark ? 1 : 0 }}
              />
              {/* invisible placeholder to maintain width */}
              <img src="/logo_white.svg" alt="" className="h-[40px] md:h-[52px] w-auto invisible" aria-hidden="true" />
            </div>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-[44px] h-[44px] rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={dark ? "#111" : "#fff"} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={dark ? "#111" : "#fff"} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>

        {/* Nav links - hidden on mobile */}
        <nav className="hidden md:flex gap-1 items-center">
          {/* Services - has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[17px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "services" ? "#ef5023" : (dark ? "#111" : "#ffffff"), background: activeMenu === "services" ? "rgba(239,80,35,0.08)" : "transparent" }}
              onClick={() => router.push("/services")}
            >
              <span style={{ position: "relative" }}>
                Services
                {pathname.startsWith("/services") && <span style={{ position: "absolute", bottom: -6, left: 0, right: 0, height: 2, background: "#ef5023", borderRadius: 2 }} />}
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: activeMenu === "services" ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {activeMenu === "services" && (
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
                style={{
                  position: "fixed",
                  top: "89px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "1100px",
                  background: "#ffffff",
                  border: "1px solid #d0d0d0",
                  borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  zIndex: 49,
                  animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                <div style={{ display: "flex", gap: 0 }}>

                  {/* CTA card - left */}
                  <div style={{ width: 220, flexShrink: 0, padding: "24px 20px", borderRight: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden", background: "#0d0d0d", display: "flex", flexDirection: "column" }}>
                    {/* background image */}
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/Media/Image/case 1.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
                    {/* dark overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(20,5,0,0.65) 0%, rgba(10,10,10,0.70) 100%)" }} />
                    {/* content above overlay */}
                    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#ef5023", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>SINCE 2010</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#ffffff", lineHeight: 1.4, marginBottom: 8 }}>
                      Dedicated Engineering Teams, AI-Native by Default
                    </div>
                    <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: 16 }}>
                      Senior engineers. Direct access. Long-term partnerships in Vietnam.
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 16 }}>
                      {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: 12 }}>★</span>)}
                      <span style={{ fontSize: 12, color: "#aaa", marginLeft: 4 }}>4.9 on Clutch</span>
                    </div>
                    <Link href="/contact" style={{ textDecoration: "none", marginTop: "auto" }}>
                      <div style={{ background: "#ef5023", color: "white", fontSize: 12, fontWeight: 700, padding: "13px 16px", borderRadius: 8, textAlign: "center", cursor: "pointer" }}>
                        Book a Discovery Call
                      </div>
                    </Link>
                    </div>{/* end relative content */}
                  </div>

                  {/* Col - Engagement Models */}
                  <div style={{ flex: 1, padding: "24px 16px", borderRight: "1px solid #f0f0f0" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#ef5023", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #ef5023", display: "flex", alignItems: "center", gap: 6 }}>
                      ⬡ ENGAGEMENT MODELS
                    </div>
                    {[
                      { icon: "🌏", title: "Dedicated Development Team", desc: "Dedicated offshore team, fully managed", href: "/services/dedicated-development-team" },
                      { icon: "👥", title: "Staff Augmentation", desc: "Scale your team with vetted engineers", href: "/services/staff-augmentation" },
                      { icon: "✅", title: "Project-Based", desc: "Fixed-scope delivery with clear milestones", href: "/services/project-based-dev" },
                      { icon: "🔧", title: "Managed Services", desc: "Full ownership of your tech operations", href: "/services/managed-services" },
                    ].map((item) => (
                      <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} href={item.href} iconBg="rgba(239,80,35,0.08)" iconBorder="rgba(239,80,35,0.15)" />
                    ))}
                  </div>

                  {/* Col - AI & Automation */}
                  <div style={{ flex: 1, padding: "24px 16px", borderRight: "1px solid #f0f0f0" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#6366f1", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #6366f1", display: "flex", alignItems: "center", gap: 6 }}>
                      ⬡ AI & AUTOMATION
                    </div>
                    {[
                      { icon: "🧠", title: "AI Agent Development", desc: "Autonomous agents for complex tasks", href: "/services/ai-agent-development" },
                      { icon: "⚙️", title: "Agentic Workflow Automation", desc: "End-to-end AI-driven process flows", href: "/services/agentic-workflow-automation" },
                      { icon: "✨", title: "Generative AI Integration", desc: "LLM-powered features in your product", href: "/services/generative-ai-integration" },
                      { icon: "🔬", title: "AI Consulting & Strategy", desc: "Assess AI readiness and define your roadmap", href: "/services/ai-consulting" },
                    ].map((item) => (
                      <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} href={item.href} iconBg="rgba(99,102,241,0.08)" iconBorder="rgba(99,102,241,0.15)" />
                    ))}
                  </div>

                  {/* Col - Engineering */}
                  <div style={{ flex: 1, padding: "24px 16px", borderRight: "1px solid #f0f0f0" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#3b82f6", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #3b82f6", display: "flex", alignItems: "center", gap: 6 }}>
                      ⬡ ENGINEERING
                    </div>
                    {[
                      { icon: "💻", title: "Custom Software Development", desc: "Tailored solutions built from scratch", href: "/services/custom-software-development" },
                      { icon: "🚀", title: "MVP & Rapid Prototyping", desc: "Validate ideas fast, ship lean MVPs", href: "/services/mvp-proof-of-concept" },
                      { icon: "☁️", title: "Cloud & DevOps", desc: "CI/CD, infra, and cloud migration", href: "/services/cloud-devops" },
                      { icon: "🔗", title: "System Integration", desc: "Connect APIs, ERPs, and data sources", href: "/services/system-integration" },
                      { icon: "🛠️", title: "Software Maintenance", desc: "Ongoing support & tech debt reduction", href: "/services/software-maintenance" },
                    ].map((item) => (
                      <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} href={item.href} iconBg="rgba(59,130,246,0.08)" iconBorder="rgba(59,130,246,0.15)" />
                    ))}
                  </div>

                  {/* Col - Quality & Design */}
                  <div style={{ flex: 1, padding: "24px 16px" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#10b981", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #10b981", display: "flex", alignItems: "center", gap: 6 }}>
                      ⬡ QUALITY & DESIGN
                    </div>
                    {[
                      { icon: "🧪", title: "QA & Testing", desc: "Manual & automated quality assurance", href: "/services/qa-testing" },
                      { icon: "🎨", title: "UI/UX Design", desc: "User-centered design & prototyping", href: "/services/ui-ux-design" },
                      { icon: "🔍", title: "Tech Audit & Remediation", desc: "Code & architecture deep-dive", href: "/services/tech-audit" },
                    ].map((item) => (
                      <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} href={item.href} iconBg="rgba(16,185,129,0.08)" iconBorder="rgba(16,185,129,0.15)" />
                    ))}
                  </div>

                </div>

                {/* Footer bar */}
                <div style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    {["ISO 27001", "Clutch Top Co.", "Sao Khue Award"].map((b) => (
                      <span key={b} style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>{b}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Link href="/services" style={{ fontSize: 12, fontWeight: 600, color: "#555", textDecoration: "none" }}>
                      View All Services →
                    </Link>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <span style={{ background: "#ef5023", color: "white", fontSize: 12, fontWeight: 700, padding: "7px 16px", borderRadius: 7, cursor: "pointer" }}>
                        Book a Discovery Call
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Industries - has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("industries")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[17px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "industries" ? "#ef5023" : (dark ? "#111" : "#ffffff"), background: activeMenu === "industries" ? "rgba(239,80,35,0.08)" : "transparent" }}
              onClick={() => router.push("/industries")}
            >
              <span style={{ position: "relative" }}>
                Industries
                {pathname.startsWith("/industries") && <span style={{ position: "absolute", bottom: -6, left: 0, right: 0, height: 2, background: "#ef5023", borderRadius: 2 }} />}
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: activeMenu === "industries" ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {activeMenu === "industries" && (
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
                style={{
                  position: "fixed", top: "89px", left: "50%", transform: "translateX(-50%)",
                  width: "640px", background: "#ffffff", border: "1px solid #d0d0d0",
                  borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)",
                  overflow: "hidden", zIndex: 49, animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                <div style={{ display: "flex", gap: 0 }}>
                  {/* CTA card - left */}
                  <div style={{ width: 220, flexShrink: 0, padding: "24px 20px", borderRight: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden", background: "#0d0d0d", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/Media/Image/case 2.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(20,5,0,0.65) 0%, rgba(10,10,10,0.70) 100%)" }} />
                    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "#ef5023", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>INDUSTRIES</div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: "#ffffff", lineHeight: 1.4, marginBottom: 8 }}>
                        Built for your industry, not just your stack.
                      </div>
                      <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: 16 }}>
                        Sector-specific expertise across fintech, healthcare, e-commerce and more.
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 16 }}>
                        {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: 12 }}>★</span>)}
                        <span style={{ fontSize: 12, color: "#aaa", marginLeft: 4 }}>4.9 on Clutch</span>
                      </div>
                      <Link href="/contact" style={{ textDecoration: "none", marginTop: "auto" }}>
                        <div style={{ background: "#ef5023", color: "white", fontSize: 12, fontWeight: 700, padding: "13px 16px", borderRadius: 8, textAlign: "center", cursor: "pointer" }}>
                          Book a Discovery Call
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: "24px 20px" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#ef5023", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #ef5023", display: "flex", alignItems: "center", gap: 6 }}>⬡ INDUSTRIES</div>
                    {[
                      { icon: "🏦", title: "Fintech & Banking", desc: "Payment systems, trading platforms, KYC", href: "/industries/fintech" },
                      { icon: "🏥", title: "Healthcare & MedTech", desc: "EHR, telemedicine, health data platforms", href: "/industries/healthcare", iconBg: "rgba(59,130,246,0.08)", iconBorder: "rgba(59,130,246,0.15)" },
                      { icon: "🛒", title: "E-commerce & Retail", desc: "Marketplace, POS, inventory systems", href: "/industries/e-commerce", iconBg: "rgba(34,197,94,0.08)", iconBorder: "rgba(34,197,94,0.15)" },
                      { icon: "🚚", title: "Logistics & Supply Chain", desc: "Fleet management, tracking, WMS", href: "/industries/logistics" },
                      { icon: "☁️", title: "SaaS & Enterprise", desc: "Multi-tenant platforms at scale", href: "/industries/saas", iconBg: "rgba(168,85,247,0.08)", iconBorder: "rgba(168,85,247,0.15)" },
                    ].map((item) => (
                      <MegaMenuItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} href={item.href} iconBg={item.iconBg} iconBorder={item.iconBorder} />
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#888" }}>Industries we specialize in</span>
                  <Link href="/industries" style={{ fontSize: 12, fontWeight: 600, color: "#555", textDecoration: "none" }}>View All →</Link>
                </div>
              </div>
            )}
          </div>

          {/* Case Studies - plain link */}
          <a href="/case-study" className="text-[17px] font-semibold hover:text-[#ef5023] transition-colors px-3 py-2 rounded-lg whitespace-nowrap" style={{ color: pathname.startsWith("/case-study") ? "#ef5023" : (dark ? "#111" : "#ffffff"), textDecoration: "none", position: "relative" }}>
            Case Studies
            {pathname.startsWith("/case-study") && <span style={{ position: "absolute", bottom: 2, left: 12, right: 12, height: 2, background: "#ef5023", borderRadius: 2 }} />}
          </a>

          {/* Technology - has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("technology")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[17px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "technology" ? "#ef5023" : (dark ? "#111" : "#ffffff"), background: activeMenu === "technology" ? "rgba(239,80,35,0.08)" : "transparent" }}
              onClick={() => router.push("/technology")}
            >
              <span style={{ position: "relative" }}>
                Technology
                {pathname.startsWith("/technology") && <span style={{ position: "absolute", bottom: -6, left: 0, right: 0, height: 2, background: "#ef5023", borderRadius: 2 }} />}
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: activeMenu === "technology" ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {activeMenu === "technology" && (
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
                style={{
                  position: "fixed", top: "89px", left: "50%", transform: "translateX(-50%)",
                  width: "720px", background: "#ffffff", border: "1px solid #d0d0d0",
                  borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)",
                  overflow: "hidden", zIndex: 49, animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                <div style={{ display: "flex", gap: 0 }}>
                  {/* CTA card - left */}
                  <div style={{ width: 220, flexShrink: 0, padding: "24px 20px", borderRight: "1px solid rgba(255,255,255,0.1)", position: "relative", overflow: "hidden", background: "#0d0d0d", display: "flex", flexDirection: "column" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/Media/Image/case 1.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(20,5,0,0.65) 0%, rgba(10,10,10,0.70) 100%)" }} />
                    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "#ef5023", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>TECHNOLOGY</div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: "#ffffff", lineHeight: 1.4, marginBottom: 8 }}>
                        Modern Stack, Proven at Scale
                      </div>
                      <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: 16 }}>
                        Full-stack expertise across frontend, backend, cloud, AI, and mobile platforms.
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 16 }}>
                        {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#f59e0b", fontSize: 12 }}>★</span>)}
                        <span style={{ fontSize: 12, color: "#aaa", marginLeft: 4 }}>4.9 on Clutch</span>
                      </div>
                      <Link href="/contact" style={{ textDecoration: "none", marginTop: "auto" }}>
                        <div style={{ background: "#ef5023", color: "white", fontSize: 12, fontWeight: 700, padding: "13px 16px", borderRadius: 8, textAlign: "center", cursor: "pointer" }}>
                          Book a Discovery Call
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Tech stacks */}
                  <div style={{ flex: 1, padding: "24px 20px" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#6366f1", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #6366f1", display: "flex", alignItems: "center", gap: 6 }}>⬡ TECHNOLOGIES</div>
                    {[
                      { group: "Frontend",   color: "#3b82f6", tags: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
                      { group: "Backend",    color: "#10b981", tags: ["Node.js", "Python", "Go", "Java", "PHP", ".NET"] },
                      { group: "Cloud & DevOps", color: "#6366f1", tags: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"] },
                      { group: "AI & ML",    color: "#ef5023", tags: ["LLM", "OpenAI", "LangChain", "AI Agents", "ML Ops"] },
                      { group: "Mobile",     color: "#f59e0b", tags: ["React Native", "Flutter", "Swift", "Kotlin"] },
                      { group: "Database",   color: "#8b5cf6", tags: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
                    ].map(({ group, color, tags }) => (
                      <div key={group} style={{ padding: "8px 8px 6px" }}>
                        <div style={{ fontSize: 11, color: "#888", marginBottom: 8 }}>{group}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {tags.map((tag) => <TechTag key={tag} label={tag} color={color} />)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#888" }}>Technologies we use to build your product</span>
                  <Link href="/technology" style={{ fontSize: 12, fontWeight: 600, color: "#555", textDecoration: "none" }}>View All →</Link>
                </div>
              </div>
            )}
          </div>

          {/* Blog - plain link */}
          <a href="/blog" className="text-[17px] font-semibold hover:text-[#ef5023] transition-colors px-3 py-2 rounded-lg whitespace-nowrap" style={{ color: pathname.startsWith("/blog") ? "#ef5023" : (dark ? "#111" : "#ffffff"), textDecoration: "none", position: "relative" }}>
            Blog
            {pathname.startsWith("/blog") && <span style={{ position: "absolute", bottom: 2, left: 12, right: 12, height: 2, background: "#ef5023", borderRadius: 2 }} />}
          </a>

          {/* Company - has mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("about")}
            onMouseLeave={closeMenu}
          >
            <button
              className="flex items-center gap-[5px] text-[17px] font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              style={{ color: activeMenu === "about" ? "#ef5023" : (dark ? "#111" : "#ffffff"), background: activeMenu === "about" ? "rgba(239,80,35,0.08)" : "transparent" }}
              onClick={() => router.push("/about")}
            >
              <span style={{ position: "relative" }}>
                Company
                {pathname.startsWith("/about") && <span style={{ position: "absolute", bottom: -6, left: 0, right: 0, height: 2, background: "#ef5023", borderRadius: 2 }} />}
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: activeMenu === "about" ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {activeMenu === "about" && (
              <div
                onMouseEnter={cancelClose}
                onMouseLeave={closeMenu}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: "400px",
                  background: "#ffffff",
                  border: "1px solid #d0d0d0",
                  borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  zIndex: 49,
                  animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                <div style={{ padding: "24px 20px" }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "#ef5023", letterSpacing: "2px", textTransform: "uppercase", paddingBottom: 10, marginBottom: 4, borderBottom: "2px solid #ef5023", display: "flex", alignItems: "center", gap: 6 }}>
                    ⬡ COMPANY
                  </div>
                  {[
                    { num: "📖", title: "Our Story", desc: "10+ years building software for the world", href: "/about" },
                    { num: "👤", title: "Leadership Team", desc: "Meet the people behind InApps", href: "/about#leadership" },
                    { num: "🌱", title: "Life at InApps", desc: "Culture, values, and how we work", href: "/about#culture" },
                    { num: "💼", title: "Careers", desc: "Join our growing team of 150+ engineers", href: "/about#careers" },
                    { num: "🏆", title: "Press & Awards", desc: "#1 Vietnam · Top 5 SEA on Clutch", href: "/about#awards" },
                  ].map((item) => (
                    <AboutMenuItem key={item.num} num={item.num} title={item.title} desc={item.desc} href={item.href} />
                  ))}
                </div>

                {/* Footer bar */}
                <div style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: "#888" }}>#1 Vietnam · Top 5 SEA on Clutch</span>
                  <Link href="/about" style={{ fontSize: 12, fontWeight: 600, color: "#555", textDecoration: "none" }}>
                    About us →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA - hidden on mobile */}
        <div className="hidden md:flex justify-end">
          <Link
            href="/contact"
            className="bg-[#ef5023] text-white text-[15px] font-bold px-6 h-[44px] rounded-lg hover:bg-[#e63d1f] transition-colors inline-flex items-center"
            style={{ boxShadow: "0 10px 15px -3px rgba(255,73,41,0.2),0 4px 6px -4px rgba(255,73,41,0.2)", textDecoration: "none" }}
          >
            Talk to us
          </Link>
        </div>
      </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" style={{ top: 0 }}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          {/* Drawer */}
          <div
            className="absolute top-0 right-0 h-full w-[85%] max-w-[360px] flex flex-col overflow-y-auto"
            style={{ background: "#fff", boxShadow: "-4px 0 24px rgba(0,0,0,0.15)" }}
          >
            {/* Close */}
            <div className="flex items-center justify-between px-[20px] py-[16px]" style={{ borderBottom: "1px solid #eee" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col py-[8px]">
              {/* Services */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                  className="w-full flex items-center justify-between px-[20px] py-[14px] text-left"
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, fontWeight: 600, color: pathname.startsWith("/services") ? "#ef5023" : "#111" }}
                >
                  Services
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: mobileSubmenu === "services" ? "rotate(180deg)" : "rotate(0deg)" }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {mobileSubmenu === "services" && (
                  <div className="flex flex-col pb-[8px]" style={{ background: "#fafafa" }}>
                    {[
                      { title: "Dedicated Development Team", href: "/services/dedicated-development-team" },
                      { title: "Staff Augmentation", href: "/services/staff-augmentation" },
                      { title: "Project-Based", href: "/services/project-based-dev" },
                      { title: "Managed Services", href: "/services/managed-services" },
                      { title: "AI Agent Development", href: "/services/ai-agent-development" },
                      { title: "Agentic Workflow Automation", href: "/services/agentic-workflow-automation" },
                      { title: "Generative AI Integration", href: "/services/generative-ai-integration" },
                      { title: "Custom Software Development", href: "/services/custom-software-development" },
                      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
                      { title: "QA & Testing", href: "/services/qa-testing" },
                      { title: "UI/UX Design", href: "/services/ui-ux-design" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="px-[32px] py-[10px] text-[14px]" style={{ color: "#555", textDecoration: "none" }}>
                        {item.title}
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setMobileOpen(false)} className="px-[32px] py-[10px] text-[13px] font-semibold" style={{ color: "#ef5023", textDecoration: "none" }}>
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === "industries" ? null : "industries")}
                  className="w-full flex items-center justify-between px-[20px] py-[14px] text-left"
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, fontWeight: 600, color: pathname.startsWith("/industries") ? "#ef5023" : "#111" }}
                >
                  Industries
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: mobileSubmenu === "industries" ? "rotate(180deg)" : "rotate(0deg)" }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {mobileSubmenu === "industries" && (
                  <div className="flex flex-col pb-[8px]" style={{ background: "#fafafa" }}>
                    {[
                      { title: "Fintech & Banking", href: "/industries/fintech" },
                      { title: "Healthcare & MedTech", href: "/industries/healthcare" },
                      { title: "E-commerce & Retail", href: "/industries/e-commerce" },
                      { title: "Logistics & Supply Chain", href: "/industries/logistics" },
                      { title: "SaaS & Enterprise", href: "/industries/saas" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="px-[32px] py-[10px] text-[14px]" style={{ color: "#555", textDecoration: "none" }}>
                        {item.title}
                      </Link>
                    ))}
                    <Link href="/industries" onClick={() => setMobileOpen(false)} className="px-[32px] py-[10px] text-[13px] font-semibold" style={{ color: "#ef5023", textDecoration: "none" }}>
                      View All Industries →
                    </Link>
                  </div>
                )}
              </div>

              {/* Plain links */}
              {[
                { title: "Case Studies", href: "/case-study" },
                { title: "Technology", href: "/technology" },
                { title: "Blog", href: "/blog" },
                { title: "Company", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-[20px] py-[14px] text-[16px] font-semibold"
                  style={{ color: pathname.startsWith(item.href) ? "#ef5023" : "#111", textDecoration: "none" }}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto px-[20px] py-[20px]" style={{ borderTop: "1px solid #eee" }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full h-[48px] rounded-[10px] text-[15px] font-bold"
                style={{ background: "#ef5023", color: "#fff", textDecoration: "none", boxShadow: "0 6px 20px rgba(239,80,35,0.3)" }}
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}