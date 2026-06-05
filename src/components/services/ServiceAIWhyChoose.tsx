"use client";

import { useState } from "react";

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Senior engineers in 4–6 weeks",
    desc: "No ramp-up waiting. Your dedicated team is scoped, staffed, and running within a month, not a quarter.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    ),
    title: "Direct access to engineers",
    desc: "You work directly with the engineers building your product, not through account managers. Slack, standups, code reviews: your way.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L4 6.5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11v-6L12 3z"/>
        <path d="M8.5 12l2.5 2.5 4.5-4.5"/>
      </svg>
    ),
    title: "Built for production, not demos",
    desc: "We don't ship prototypes. Every build includes guardrails, monitoring, rollback plans, and SLA agreements before it touches real users.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        <path d="M8 10l2 2-2 2M13 14h3"/>
      </svg>
    ),
    title: "Top 1% vetted talent",
    desc: "Our engineers pass a rigorous multi-stage vetting process. They are not learning on your project — they have shipped production systems before.",
  },
];

export default function ServiceAIWhyChoose() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="relative px-[40px] py-[70px] overflow-hidden"
      style={{ background: "#ffffff", borderTop: "1px solid #e0e0e0" }}
    >
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* large watermark text */}
        <div style={{
          position: "absolute",
          top: "20px",
          right: "-40px",
          fontSize: "140px",
          fontWeight: 900,
          letterSpacing: "-6px",
          color: "rgba(239,80,35,0.08)",
          WebkitTextStroke: "0",
          userSelect: "none",
          lineHeight: 1,
          whiteSpace: "nowrap",
          fontFamily: "Arial Black, sans-serif",
        }}>
          TECH
        </div>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "20%", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]">

        {/* Header row with gradient divider */}
        <div className="flex flex-col gap-[10px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#ef5023]">WHY CHOOSE US</p>
          <div className="flex items-center gap-[24px]">
            <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px] flex-shrink-0">
              Why Choose <span className="text-[#ef5023]">InApps</span> Technology?
            </h2>
            <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to right, #e8e8e8, transparent)" }} />
          </div>
        </div>

        {/* Image left + features right */}
        <div className="flex flex-col lg:flex-row gap-[48px] items-center">

          {/* Image with shadow + accent */}
          <div
            className="lg:w-[440px] flex-shrink-0 relative rounded-[20px] overflow-hidden"
            style={{
              aspectRatio: "4/3",
              boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: "linear-gradient(90deg, #ef5023, #ff8a65)" }} />
            <img
              src="/Media/Image/case 3.png"
              alt="InApps team"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 50%)" }} />
          </div>

          {/* 2x2 feature grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
            {FEATURES.map((f, idx) => {
              const hovered = hoveredIdx === idx;
              return (
                <div
                  key={f.title}
                  className="flex flex-col gap-[12px] rounded-[16px] p-[24px] cursor-default"
                  style={{
                    background: hovered ? "#fff" : "#fff",
                    border: `1px solid ${hovered ? "rgba(239,80,35,0.3)" : "#e8e8e8"}`,
                    boxShadow: hovered
                      ? "0 12px 40px rgba(239,80,35,0.12), 0 4px 12px rgba(0,0,0,0.06)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="flex items-center gap-[10px]">
                    <div
                      className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{
                        background: hovered ? "rgba(239,80,35,0.12)" : "#fff2ee",
                        border: `1px solid ${hovered ? "rgba(239,80,35,0.3)" : "#ffd5c9"}`,
                        transition: "all 0.25s ease",
                      }}
                    >
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-[#0a0a0a] text-[14px] leading-[20px]">{f.title}</h3>
                  </div>
                  <div style={{ height: "1px", background: hovered ? "rgba(239,80,35,0.1)" : "#f0f0f0", transition: "background 0.25s ease" }} />
                  <p className="text-[#666] text-[13px] leading-[1.7]">{f.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}