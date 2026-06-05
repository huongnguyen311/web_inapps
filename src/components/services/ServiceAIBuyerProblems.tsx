"use client";

import { useState } from "react";

const PROBLEMS = [
  {
    title: "Repetitive tasks draining your team",
    description: "Hours spent on copy-paste workflows, manual data entry, and rule-based decisions that should be automated — but never are.",
    fix: "An AI agent handles these 24/7, freeing your team for higher-value work.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "AI pilots that never reach production",
    description: "Your team built a promising proof-of-concept, but it stalled — brittle integrations, no eval framework, and no clear path to deploying it reliably.",
    fix: "We engineer production-grade agents with guardrails, monitoring, and rollback from day one.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: "No AI expertise in-house",
    description: "Hiring senior AI/ML engineers takes months. Your roadmap is blocked while competitors are already shipping autonomous workflows.",
    fix: "Our vetted AI teams onboard in 2–4 weeks — no recruiting, no ramp-up lag.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function ServiceAIBuyerProblems() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden"
      style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/Media/Pattern/p3.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.1,
        }}
      />
      <div className="relative max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-[64px] items-start">

        {/* LEFT */}
        <div className="flex flex-col gap-[20px] lg:w-[340px] flex-shrink-0">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">
            Common Pain Points
          </p>
          <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px]">
            <span className="text-white">Why Most AI Agent</span><br />
            <span className="text-[#ef5023]">Projects Fail</span>
          </h2>
          <p className="text-white/50 text-[15px] leading-[1.75]">
            These are the exact problems our clients came to us with before we built their AI agents.
          </p>
        </div>

        {/* RIGHT — 3 cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {PROBLEMS.map((item, idx) => {
            const hovered = hoveredIdx === idx;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-[16px] rounded-[20px] p-[32px] cursor-default relative overflow-hidden"
                style={{
                  background: hovered ? "#1a1a1a" : "#141414",
                  border: `1.5px solid ${hovered ? "rgba(239,80,35,0.4)" : "#2a2a2a"}`,
                  boxShadow: hovered
                    ? "0 24px 64px rgba(239,80,35,0.15), 0 8px 24px rgba(0,0,0,0.4)"
                    : "0 4px 20px rgba(0,0,0,0.3)",
                  transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  {item.icon}
                </div>

                <h3 className="font-bold text-white text-[15px] leading-[22px] text-center">
                  {item.title}
                </h3>

                <div style={{ height: "1px", background: hovered ? "rgba(239,80,35,0.2)" : "#2a2a2a", transition: "background 0.25s ease" }} />

                <p className="text-white/50 text-[13px] leading-[1.7]">
                  {item.description}
                </p>

                <div className="flex gap-[8px] items-start mt-auto pt-[4px]">
                  <span className="text-[#ef5023] font-black text-[11px] tracking-[1px] uppercase flex-shrink-0 pt-[1px]">Fix</span>
                  <p className="text-white/60 text-[13px] leading-[1.65] font-medium">{item.fix}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}