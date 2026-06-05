"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "01",
    week: "Week 1–2",
    phase: "Discovery",
    bullets: [
      "Use-case scoping",
      "Data audit",
      "Feasibility analysis",
      "Success metrics defined",
      "Technical architecture drafted",
    ],
    deliverable: "Architecture\n& scope doc",
    highlight: false,
  },
  {
    num: "02",
    week: "Week 3–4",
    phase: "Prototype",
    bullets: [
      "Working proof-of-concept on your real data",
      "Model selection",
      "Initial accuracy benchmarks",
      "Stakeholder demo",
    ],
    deliverable: "Live demo\non real data",
    highlight: false,
  },
  {
    num: "03",
    week: "Week 5–6",
    phase: "Build",
    bullets: [
      "Production pipeline",
      "Integrations",
      "Guardrails",
      "Evaluation harness",
      "Monitoring & observability set up",
    ],
    deliverable: "Production-ready\npipeline",
    highlight: false,
  },
  {
    num: "04",
    week: "Week 7–8",
    phase: "Deploy",
    bullets: [
      "Production rollout",
      "Load testing",
      "Human-in-the-loop tuning",
      "Team handover",
      "Documentation & ongoing support plan",
    ],
    deliverable: "Live in production\n& support plan",
    highlight: true,
  },
];

// Step icons for diagram nodes — software delivery themed
const NODE_ICONS = [
  // 01 Discovery — magnifying glass + document
  <svg key="0" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>,
  // 02 Design — pen + ruler
  <svg key="1" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>,
  // 03 Build — code brackets
  <svg key="2" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
    <line x1="14" y1="4" x2="10" y2="20"/>
  </svg>,
  // 04 Launch — rocket
  <svg key="3" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>,
];

const DocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
  </svg>
);

const DURATION = 8000;

// 4 nodes: top row [0,1], bottom row [2,3] (rendered right-to-left: 3 on left, 2 on right)
// Path fractions: step0=0, step1=0.25 (top), step2=0.5 (bottom-right), step3=0.75 (bottom-left)
const NODE_FRACTIONS: Record<number, number> = { 0: 0, 1: 0.25, 2: 0.5, 3: 0.75 };

// Top row: 2 nodes
const TOP_NODES = [
  { x: 280, y: 88, stepIdx: 0 },
  { x: 820, y: 88, stepIdx: 1 },
];

// Bottom row: 2 nodes — mirrored to match top
const BOT_NODES = [
  { x: 820, y: 292, stepIdx: 2 },
  { x: 280, y: 292, stepIdx: 3 },
];

interface TimelineStep {
  num: string;
  week: string;
  phase: string;
  bullets: string[];
  deliverable: string;
  highlight: boolean;
}

export default function ServiceTimeline({
  eyebrow = "Delivery",
  heading,
  steps,
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  steps?: TimelineStep[];
} = {}) {
  const ACTIVE_STEPS = steps ?? STEPS;
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [diagramMounted, setDiagramMounted] = useState(false);
  const startRef = useRef<number | null>(null);
  const visibleRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (mq.matches) setDiagramMounted(true);
    const handler = (e: MediaQueryListEvent) => setDiagramMounted(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let raf: number;
    const animate = (ts: number) => {
      raf = requestAnimationFrame(animate);
      if (!visibleRef.current) return;
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % DURATION;
      const progress = elapsed / DURATION;

      let closest = -1;
      let minDist = Infinity;
      ACTIVE_STEPS.forEach((_, i) => {
        const f = NODE_FRACTIONS[i] ?? 0;
        const dist = Math.abs(progress - f);
        const wrapped = Math.min(dist, 1 - dist);
        if (wrapped < minDist) { minDist = wrapped; closest = i; }
      });
      setActiveNode(minDist < 0.06 ? closest : null);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]"
      style={{ background: "#f5f5f5", borderTop: "1px solid #e8e8e8" }}
    >
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex flex-col gap-[10px] max-w-[680px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">{eyebrow}</p>
          <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px]">
            {heading ?? (
              <><span className="text-[#0a0a0a]">From Idea to Production in </span><span className="text-[#ef5023]">8 Weeks</span></>
            )}
          </h2>
          <p className="text-[#888] text-[15px] leading-[1.7] max-w-[540px]">
            A clear, proven process to launch your dedicated team fast.
          </p>
        </div>

        {/* 5-card timeline */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {ACTIVE_STEPS.map((step, idx) => (
            <div key={step.num} className="flex flex-col lg:flex-row items-stretch flex-1">

              {/* card */}
              <div
                className="group relative flex flex-col gap-[14px] rounded-[16px] p-[24px] pt-[28px] flex-1 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-[4px]"
                style={{
                  background: step.highlight ? "#fdfaf9" : "#fafafa",
                  border: `1px solid ${step.highlight ? "#eeddd8" : "#e8e8e8"}`,
                  boxShadow: step.highlight
                    ? "0 16px 48px rgba(239,80,35,0.08), 0 4px 16px rgba(239,80,35,0.05)"
                    : "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                {/* top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px]"
                  style={{ background: "linear-gradient(90deg, #ef5023 0%, #ff8a65 100%)", opacity: step.highlight ? 0.6 : 0.25 }}
                />

                {/* week + icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[12px] font-bold uppercase tracking-[1px]"
                    style={{ color: "#ef5023" }}
                  >
                    {step.week}
                  </span>
                  <div
                    className="w-[32px] h-[32px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{
                      background: step.highlight ? "rgba(239,80,35,0.07)" : "#f0f0f0",
                    }}
                  >
                    {NODE_ICONS[idx]}
                  </div>
                </div>

                {/* phase title */}
                <h3 className="font-black text-[#0a0a0a] text-[14px] leading-[20px] tracking-[-0.2px]">
                  {step.phase}
                  {step.highlight && <span className="ml-[6px] text-[11px] font-black text-[#ef5023] uppercase tracking-[1px]">→ Live</span>}
                </h3>

                {/* bullets */}
                <ul className="flex flex-col gap-[5px] flex-1">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-[7px]">
                      <svg className="flex-shrink-0 mt-[3px]" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l2.5 2.5 5.5-5" stroke="#ef5023" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[12px] text-[#555] leading-[1.55]">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* deliverable footer */}
                <div
                  className="flex items-start gap-[8px] rounded-[10px] px-[12px] py-[10px] mt-[4px]"
                  style={{ background: step.highlight ? "rgba(239,80,35,0.08)" : "rgba(0,0,0,0.03)" }}
                >
                  <span style={{ color: "#ef5023", flexShrink: 0, marginTop: 1 }}><DocIcon /></span>
                  <span className="text-[12px] font-semibold text-[#0a0a0a] leading-[1.5]" style={{ whiteSpace: "pre-line" }}>
                    {step.deliverable}
                  </span>
                </div>
              </div>

              {/* arrow connector between cards */}
              {idx < ACTIVE_STEPS.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 w-full lg:w-[32px] h-[32px] lg:h-auto my-[4px] lg:my-0">
                  <svg className="hidden lg:block" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ filter: "drop-shadow(0 0 4px rgba(239,80,35,0.5))" }}>
                    <path d="M2 10h16M12 4l6 6-6 6" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="lg:hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ filter: "drop-shadow(0 0 4px rgba(239,80,35,0.5))" }}>
                    <path d="M10 2v16M4 12l6 6 6-6" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── 4-node closed-loop diagram ── */}
        {diagramMounted && <div className="w-full select-none" style={{ maxWidth: "85%", margin: "0 auto" }}>
          <svg
            width="100%"
            viewBox="0 0 1100 390"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* dashed oval loop */}
            <path
              id="timeline-loop"
              d="M 280 88 L 820 88 A 102 102 0 0 1 820 292 L 280 292 A 102 102 0 0 1 280 88 Z"
              stroke="#ef5023"
              strokeWidth="1.8"
              strokeDasharray="7 5"
              opacity="0.5"
            />

            {/* top row nodes: 0, 1 */}
            {TOP_NODES.map(({ x, y, stepIdx }) => {
              const isActive = activeNode === stepIdx;
              const label = ACTIVE_STEPS[stepIdx].phase;
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
                      {NODE_ICONS[stepIdx]}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* bottom row nodes: 2 (right), 3 (left) */}
            {BOT_NODES.map(({ x, y, stepIdx }) => {
              const isActive = activeNode === stepIdx;
              const label = ACTIVE_STEPS[stepIdx].phase;
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
                      {NODE_ICONS[stepIdx]}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* animated dot */}
            <circle r="8" fill="#ef5023" opacity="0.9">
              <animate attributeName="r" values="8;10;8" dur="1.4s" repeatCount="indefinite"/>
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#timeline-loop"/>
              </animateMotion>
            </circle>
            <circle r="14" fill="rgba(239,80,35,0.15)">
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#timeline-loop"/>
              </animateMotion>
            </circle>
          </svg>
          <style>{`
            @keyframes pulseRingTimeline {
              0%   { r: 34; opacity: 0.6; }
              100% { r: 56; opacity: 0; }
            }
          `}</style>
        </div>}

      </div>
    </section>
  );
}