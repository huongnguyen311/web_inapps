"use client";

const COLS = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    ),
    title: "Team Composition",
    desc: "We provide the right people with the right skills.",
    bullets: ["Senior & vetted engineers", "Dedicated Tech Lead", "QA & optional PM", "Flexible team size"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Infrastructure",
    desc: "Secure, reliable and ready to deliver.",
    bullets: ["Secure office & work setup", "High-performance devices", "VPN, SSO & access control", "Enterprise-grade security"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "HR & Management",
    desc: "We handle operations so you can focus on product.",
    bullets: ["Recruitment & onboarding", "Payroll & compliance", "Performance management", "Retention & support"],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8M8 14h5"/>
      </svg>
    ),
    title: "Communication & Process",
    desc: "Seamless collaboration across your team.",
    bullets: ["Agile delivery & ceremonies", "Real-time reporting", "Tools & documentation", "Transparent process"],
  },
];

export default function ServiceWhatYouGet({ items }: any) {
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>

      {/* circuit grid lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.10 }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="circuit-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1.5" fill="#ef5023"/>
            <path d="M 0 40 L 20 40 L 24 36 L 56 36 L 60 40 L 80 40" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
            <path d="M 40 0 L 40 20 L 44 24 L 44 56 L 40 60 L 40 80" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
            <circle cx="40" cy="40" r="2" fill="none" stroke="#ef5023" strokeWidth="0.8"/>
            <circle cx="24" cy="36" r="1.2" fill="#ef5023"/>
            <circle cx="44" cy="24" r="1.2" fill="#ef5023"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-grid)"/>
      </svg>

      {/* orange glow top-left */}
      <div className="absolute pointer-events-none" style={{
        top: "-140px", left: "-100px", width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(239,80,35,0.18) 0%, transparent 60%)",
        borderRadius: "50%",
      }} />
      {/* orange glow bottom-right */}
      <div className="absolute pointer-events-none" style={{
        bottom: "-120px", right: "-80px", width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(239,80,35,0.12) 0%, transparent 60%)",
        borderRadius: "50%",
      }} />

      <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">WHAT'S INCLUDED</p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Everything in one engagement.
          </h2>
        </div>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]" style={{ paddingTop: "32px" }}>
          {COLS.map((col, i) => (
            <div
              key={col.title}
              className="group relative flex flex-col gap-[20px] px-[24px] pb-[28px] rounded-[20px] transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "52px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(239,80,35,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(239,80,35,0.15), inset 0 1px 0 rgba(255,255,255,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)";
              }}
            >
              {/* orange top accent line */}
              <div className="absolute top-0 left-[24px] right-[24px] h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #ef5023, transparent)" }}
              />

              {/* icon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[-22px] w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(239,80,35,0.10)", border: "1px solid rgba(239,80,35,0.2)", boxShadow: "0 4px 16px rgba(239,80,35,0.15)" }}
              >
                {col.icon}
              </div>

              {/* title + desc */}
              <div className="flex flex-col gap-[6px]">
                <h4 className="font-bold text-white text-[15px] leading-[22px]">{col.title}</h4>
                <p className="text-[#aaa] text-[13px] leading-[20px]">{col.desc}</p>
              </div>

              {/* divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

              {/* bullets */}
              <ul className="flex flex-col gap-[8px]">
                {col.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-[8px]">
                    <svg className="flex-shrink-0 mt-[3px]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3 6-6" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] text-[#ccc] leading-[20px]">{b}</span>
                  </li>
                ))}
              </ul>

              {/* see details */}
              <a
                href="/contact"
                className="inline-flex items-center gap-[6px] text-[#ef5023] text-[13px] font-semibold mt-[4px] transition-all duration-200 group-hover:gap-[10px]"
                style={{ textDecoration: "none" }}
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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