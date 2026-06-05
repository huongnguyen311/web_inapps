"use client";

interface ProcessStep {
  phase: string;
  duration: string;
  description: string;
  includes: string[];
}

interface Props {
  steps: ProcessStep[];
}

const stepIcons = [
  <svg key="0" width="38" height="38" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke="#ef5023" strokeWidth="1.8"/>
    <path d="M11 8v3l2 2" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M18.5 18.5l-2.5-2.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="1" width="38" height="38" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#ef5023" strokeWidth="1.8"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#ef5023" strokeWidth="1.8"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#ef5023" strokeWidth="1.8"/>
    <path d="M14 17.5h7M17.5 14v7" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="2" width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path d="M4 17V7l4 4 4-6 4 6 4-4v10" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="3" width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L4 6.5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11v-6L12 3z" stroke="#ef5023" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8.5 12l2.5 2.5 4.5-4.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="4" width="38" height="38" viewBox="0 0 24 24" fill="none">
    <path d="M3 17l4-5 4 3 4-7 4 4" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 9h4v4" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

import { useState, useEffect, useRef } from "react";

const DURATION = 8000; // ms, must match animateMotion dur

// 4 nodes: top row [0,1], bottom row [2,3] (right-to-left: 2 on right, 3 on left)
// Evenly spaced fractions along the loop path
const NODE_FRACTIONS: Record<number, number> = { 0: 0, 1: 0.25, 2: 0.5, 3: 0.75 };

// Top row: 2 nodes near left and right ends on y=88
const TOP_NODES = [
  { x: 280, y: 88, stepIdx: 0 },
  { x: 720, y: 88, stepIdx: 1 },
];

// Bottom row: 2 nodes (right first, then left — dot travels right arc then left)
const BOT_NODES = [
  { x: 720, y: 292, stepIdx: 2 },
  { x: 280, y: 292, stepIdx: 3 },
];

export default function ServiceProcess({ steps }: Props) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % DURATION;
      const progress = elapsed / DURATION;

      let closest = -1;
      let minDist = Infinity;
      [0, 1, 2, 3].forEach((i) => {
        const f = NODE_FRACTIONS[i] ?? 0;
        const dist = Math.abs(progress - f);
        const wrapped = Math.min(dist, 1 - dist);
        if (wrapped < minDist) { minDist = wrapped; closest = i; }
      });
      setActiveNode(minDist < 0.06 ? closest : null);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">OUR PROCESS</p>
          </div>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            How We Turn Ideas into <span className="text-[#ef5023]">Real Results</span>
          </h2>
          <p className="text-[#555] text-[14px] leading-[1.75]">
            From first brief to shipped product. Transparent, iterative, and built around your goals.
          </p>
        </div>

        {/* cards */}
        <div className="flex flex-col md:flex-row items-start gap-0">
          {steps.map((step, idx) => (
            <div key={step.phase} className="flex flex-col md:flex-row items-start flex-1 w-full md:w-auto">

              {/* card + floating icon wrapper */}
              <div className="relative flex flex-col flex-1 w-full pt-[26px]">

                {/* floating icon */}
                <div
                  className="absolute top-0 left-[20px] z-10 w-[48px] h-[48px] rounded-[14px] flex items-center justify-center"
                  style={{ background: "#fff", border: "1.5px solid #ebebeb", boxShadow: "0 4px 12px rgba(239,80,35,0.12)" }}
                >
                  {stepIcons[idx] ?? stepIcons[0]}
                </div>

                {/* card */}
                <div
                  className="flex flex-col gap-[16px] rounded-[16px] px-[20px] pt-[48px] pb-[24px] flex-1 cursor-default overflow-hidden"
                  style={{
                    background: "#fff",
                    border: hoveredIdx === idx ? "1px solid rgba(239,80,35,0.45)" : "1px solid #e8e8e8",
                    boxShadow: hoveredIdx === idx
                      ? "0 0 0 1px rgba(239,80,35,0.3), 0 8px 32px rgba(239,80,35,0.10)"
                      : "0 1px 4px rgba(0,0,0,0.04)",
                    transform: hoveredIdx === idx ? "translateY(-4px)" : "translateY(0)",
                    transition: "border 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                    minHeight: "260px",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* phase + duration */}
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="font-black text-[#0a0a0a] text-[14px] leading-[1.4] tracking-[-0.3px]">{step.phase}</h3>
                    <span
                      className="self-start text-[10px] font-black px-[8px] py-[3px] rounded-[6px]"
                      style={{ background: "#fff5f2", color: "#ef5023", border: "1px solid #ffd5c9" }}
                    >{step.duration}</span>
                  </div>

                  {/* divider */}
                  <div className="h-[1px]" style={{ background: "#f0f0f0" }} />

                  {/* includes */}
                  <div className="flex flex-col gap-[9px]">
                    {step.includes.map((item) => (
                      <div key={item} className="flex items-start gap-[8px]">
                        <div className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[5px]" style={{ background: "#ef5023" }} />
                        <span className="text-[14px] text-[#444] leading-[1.55]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* arrow connector */}
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 w-full md:w-[40px] h-[32px] md:h-auto md:self-center my-[4px] md:my-0 md:mt-[26px]">
                  {/* desktop: horizontal arrow */}
                  <svg className="hidden md:block" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 0 6px rgba(239,80,35,0.5))" }}>
                    <path d="M4 16h24" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 8l8 8-8 8" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* mobile: vertical arrow */}
                  <svg className="md:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 0 6px rgba(239,80,35,0.5))" }}>
                    <path d="M16 4v24" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 20l8 8 8-8" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Closed-loop diagram ── */}
        <div className="hidden md:block w-full select-none" style={{ position: "relative", maxWidth: "85%", margin: "0 auto" }}>
          <svg
            width="100%"
            viewBox="0 0 1100 420"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* dashed oval loop */}
            <path
              id="proc-loop"
              d="M 200 88 L 800 88 A 102 102 0 0 1 800 292 L 200 292 A 102 102 0 0 1 200 88 Z"
              stroke="#ef5023"
              strokeWidth="1.8"
              strokeDasharray="7 5"
              opacity="0.5"
            />

            {/* top row nodes: 0, 1 */}
            {TOP_NODES.map(({ x, y, stepIdx }) => {
              const isActive = activeNode === stepIdx;
              const label = steps[stepIdx]?.phase ?? "";
              return (
                <g key={`top-${stepIdx}`}>
                  <line x1={x} y1={y} x2={x} y2={y - 52} stroke="#ef5023" strokeWidth="1.2" strokeOpacity="0.4"/>
                  <text x={x} y={y - 58} textAnchor="middle" fontSize="14" fontWeight="700" fill="#333" fontFamily="Arial, sans-serif">
                    {label}
                  </text>
                  {isActive && <circle cx={x} cy={y} r="50" fill="rgba(239,80,35,0.12)" stroke="#ef5023" strokeWidth="1.5" strokeOpacity="0.4"/>}
                  <circle cx={x} cy={y} r="44" fill={isActive ? "rgba(239,80,35,0.1)" : "rgba(239,80,35,0.05)"}/>
                  <circle cx={x} cy={y} r="34" fill={isActive ? "#fff8f6" : "#fff"} stroke="#ef5023" strokeWidth={isActive ? 2.5 : 2}
                    style={{ filter: isActive ? "drop-shadow(0 0 8px rgba(239,80,35,0.5))" : "none", transition: "all 0.3s ease" }}/>
                  <foreignObject x={x - 28} y={y - 28} width="56" height="56">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56,
                      transform: isActive ? "scale(1.15)" : "scale(1)", transition: "transform 0.3s ease" }}>
                      {stepIcons[stepIdx]}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* bottom row nodes: 2 (right), 3 (left) */}
            {BOT_NODES.map(({ x, y, stepIdx }) => {
              const isActive = activeNode === stepIdx;
              const label = steps[stepIdx]?.phase ?? "";
              return (
                <g key={`bot-${stepIdx}`}>
                  <line x1={x} y1={y} x2={x} y2={y + 52} stroke="#ef5023" strokeWidth="1.2" strokeOpacity="0.4"/>
                  <text x={x} y={y + 68} textAnchor="middle" fontSize="14" fontWeight="700" fill="#333" fontFamily="Arial, sans-serif">
                    {label}
                  </text>
                  {isActive && <circle cx={x} cy={y} r="50" fill="rgba(239,80,35,0.12)" stroke="#ef5023" strokeWidth="1.5" strokeOpacity="0.4"/>}
                  <circle cx={x} cy={y} r="44" fill={isActive ? "rgba(239,80,35,0.1)" : "rgba(239,80,35,0.05)"}/>
                  <circle cx={x} cy={y} r="34" fill={isActive ? "#fff8f6" : "#fff"} stroke="#ef5023" strokeWidth={isActive ? 2.5 : 2}
                    style={{ filter: isActive ? "drop-shadow(0 0 8px rgba(239,80,35,0.5))" : "none", transition: "all 0.3s ease" }}/>
                  <foreignObject x={x - 28} y={y - 28} width="56" height="56">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56,
                      transform: isActive ? "scale(1.15)" : "scale(1)", transition: "transform 0.3s ease" }}>
                      {stepIcons[stepIdx] ?? stepIcons[0]}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* center client node — same style as process nodes but filled */}
            <g>
              {/* glow */}
              <circle cx="500" cy="190" r="50" fill="rgba(239,80,35,0.08)"/>
              {/* outer ring — dashed, like the loop */}
              <circle cx="500" cy="190" r="42" fill="none" stroke="#ef5023" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4"/>
              {/* main filled circle */}
              <circle cx="500" cy="190" r="34" fill="#ef5023" stroke="#ef5023" strokeWidth="2" style={{ filter: "drop-shadow(0 4px 12px rgba(239,80,35,0.4))" }}/>
              {/* person icon white */}
              <circle cx="500" cy="181" r="9" fill="none" stroke="white" strokeWidth="1.8"/>
              <path d="M483 204 C483 194 491 188 500 188 C509 188 517 194 517 204" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              {/* label */}
              <text x="500" y="258" textAnchor="middle" fontSize="11" fontWeight="700" fill="#333" fontFamily="Arial, sans-serif">Client</text>
            </g>

            {/* animated dot */}
            <circle r="8" fill="#ef5023" opacity="0.9">
              <animate attributeName="r" values="8;10;8" dur="1.4s" repeatCount="indefinite"/>
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#proc-loop"/>
              </animateMotion>
            </circle>
            <circle r="14" fill="rgba(239,80,35,0.15)">
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#proc-loop"/>
              </animateMotion>
            </circle>
          </svg>
          <style>{`
            @keyframes pulseRing {
              0%   { r: 34; opacity: 0.6; }
              100% { r: 56; opacity: 0; }
            }
          `}</style>
        </div>

      </div>
    </section>
  );
}