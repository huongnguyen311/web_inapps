"use client";

import React from "react";
import { TechGroup } from "@/data/services";

interface Props {
  groups: TechGroup[];
}

const GROUP_ICONS: Record<string, React.ReactNode> = {
  "LLM Models": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z"/>
      <circle cx="12" cy="10" r="2"/>
    </svg>
  ),
  "Agent Frameworks": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="5" height="5" rx="1.5"/>
      <rect x="16" y="8" width="5" height="5" rx="1.5"/>
      <rect x="9.5" y="3" width="5" height="5" rx="1.5"/>
      <path d="M5.5 13v3.5h13V13M12 8v-0.5"/>
    </svg>
  ),
  "Vector & Memory": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="8" ry="3"/>
      <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
      <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4"/>
    </svg>
  ),
  "Infrastructure": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="1.5"/>
      <rect x="2" y="10" width="20" height="5" rx="1.5"/>
      <rect x="2" y="17" width="20" height="4" rx="1.5"/>
      <circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6" cy="12.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  "Orchestration": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="4" cy="6" r="2"/>
      <circle cx="20" cy="6" r="2"/>
      <circle cx="4" cy="18" r="2"/>
      <circle cx="20" cy="18" r="2"/>
      <path d="M6 6.5l4.5 4M17.5 6.5l-4.5 4M6 17.5l4.5-4M17.5 17.5l-4.5-4"/>
    </svg>
  ),
  "Monitoring & Eval": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
};

function getIcon(label: string) {
  return GROUP_ICONS[label] ?? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>
    </svg>
  );
}

export default function ServiceTechStack({ groups }: Props) {
  return (
    <section
      className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]"
      style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* Header */}
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">
            TECHNOLOGY STACK
          </p>
          <div className="flex flex-col gap-[8px]">
            <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
              The Full Stack Behind Every AI Agent We Ship
            </h2>
            <p className="text-white/40 text-[14px] leading-[1.6]">
              Production-grade tools we use to build, deploy, and monitor AI systems at scale.
            </p>
          </div>
        </div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]" style={{ background: "#1f1f1f", borderRadius: "16px", overflow: "hidden", border: "1px solid #1f1f1f" }}>
          {groups.map((group, idx) => (
            <div
              key={group.label}
              className="flex flex-col gap-[16px] p-[28px]"
              style={{ background: "#111111" }}
            >
              {/* Group label */}
              <div className="flex items-center gap-[10px]">
                <span
                  className="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] flex-shrink-0"
                  style={{ background: "rgba(239,80,35,0.1)", color: "#ef5023" }}
                >
                  {getIcon(group.label)}
                </span>
                <span className="text-white/90 text-[13px] font-bold tracking-[0.5px] uppercase">
                  {group.label}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-[8px]">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-semibold px-[10px] py-[5px] rounded-[6px]"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}