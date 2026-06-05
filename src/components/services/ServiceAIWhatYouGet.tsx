"use client";

const COLS = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: "Clear Sprint Goals",
    desc: "Every sprint starts with agreed outcomes — not just a task list.",
    bullets: ["Defined acceptance criteria", "Scope locked per sprint", "No surprise scope creep", "Weekly delivery reviews"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Living Documentation",
    desc: "Code, decisions, and architecture stay documented as you go.",
    bullets: ["ADRs for key decisions", "Up-to-date README", "Onboarding runbooks", "API contracts in sync"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Automated Quality Gates",
    desc: "CI/CD enforces standards before anything reaches production.",
    bullets: ["Automated test suites", "Linting & code review", "Branch protection rules", "Zero-manual-merge policy"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Transparent Ownership",
    desc: "Every feature has a named engineer who owns it end-to-end.",
    bullets: ["Clear RACI per module", "On-call rotation", "Incident accountability", "Post-mortems, not blame"],
  },
];

export default function ServiceAIWhatYouGet() {
  return (
    <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>

      {/* dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2a2a2a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      {/* orange glow top-left */}
      <div className="absolute pointer-events-none" style={{ top: "-120px", left: "-80px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239,80,35,0.12) 0%, transparent 65%)", borderRadius: "50%" }} />
      {/* orange glow bottom-right */}
      <div className="absolute pointer-events-none" style={{ bottom: "-100px", right: "-60px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 65%)", borderRadius: "50%" }} />

      {/* header */}
      <div className="relative max-w-[1320px] mx-auto mb-[48px]" style={{ textAlign: "left" }}>
        <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase" style={{ margin: 0 }}>WHAT WE BUILD</p>
        <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]" style={{ margin: 0, padding: 0, textAlign: "left" }}>
          End-to-End AI Agent Systems
        </h2>
      </div>

      <div className="relative max-w-[1320px] mx-auto">

        {/* 4-col grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]"
        >
          {COLS.map((col) => (
            <div
              key={col.title}
              className="group relative flex flex-col gap-[20px] px-[28px] pb-[32px] rounded-[16px] transition-all duration-300 hover:bg-[#0f0f0f]/60 hover:-translate-y-[6px] hover:border-[#ef5023]/40 hover:shadow-[0_16px_40px_rgba(239,80,35,0.15)]"
              style={{ background: "#161616", border: "1px solid #2a2a2a", paddingTop: "56px", boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)" }}
            >
              {/* icon — overlapping top edge */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[-24px] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "transparent", boxShadow: "none" }}
              >
                {col.icon}
              </div>

              {/* title + desc */}
              <div className="flex flex-col gap-[4px]">
                <h4 className="font-bold text-white text-[15px] leading-[22px]">{col.title}</h4>
                <p className="text-[#666] text-[13px] leading-[20px]">{col.desc}</p>
              </div>

              {/* divider */}
              <div style={{ height: "1px", background: "#1f1f1f" }} />

              {/* bullets */}
              <ul className="flex flex-col gap-[8px]">
                {col.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-[8px]">
                    <svg className="flex-shrink-0 mt-[3px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7l3 3 6-6" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] text-[#aaa] leading-[20px]">{b}</span>
                  </li>
                ))}
              </ul>

              {/* see details */}
              <a
                href="/contact"
                className="inline-flex items-center gap-[6px] text-[#ef5023] text-[13px] font-semibold mt-[4px] group-hover:gap-[10px] transition-all duration-200"
                style={{ textDecoration: "none" }}
              >
                See details
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}