"use client";

import { useState } from "react";
import { ServiceOverviewData } from "@/data/services";

interface Props {
  data: ServiceOverviewData;
}

export default function ServiceAIOverview({ data }: Props) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = ((e.clientY - cy) / (rect.height / 2)) * 6;
    const y = ((e.clientX - cx) / (rect.width / 2)) * -6;
    setTilt({ x, y });
  }

  return (
    <>
      {/* ── Section 1: Service Overview ── */}
      <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>

        {/* Pattern background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/Media/Pattern/p2.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            opacity: 0.1,
          }}
        />

        {/* Background decor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Concentric rings — left side */}
          <svg className="absolute -left-[120px] top-1/2 -translate-y-1/2 opacity-[0.06]" width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[60,100,140,180,220].map((r, i) => (
              <circle key={i} cx="240" cy="240" r={r} stroke="#ef5023" strokeWidth="1" />
            ))}
            <circle cx="240" cy="240" r="8" fill="#ef5023" opacity="0.3" />
          </svg>
          {/* Concentric rings — right bottom */}
          <svg className="absolute -right-[80px] -bottom-[100px] opacity-[0.04]" width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[40,80,120,160].map((r, i) => (
              <circle key={i} cx="180" cy="180" r={r} stroke="#0a0a0a" strokeWidth="1" />
            ))}
          </svg>
          {/* Orange accent corner — top left bracket */}
          <svg className="absolute top-[40px] left-[40px] opacity-[0.25]" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 48 L0 0 L48 0" stroke="#ef5023" strokeWidth="2" fill="none" />
          </svg>
          {/* Orange accent corner — bottom right bracket */}
          <svg className="absolute bottom-[40px] right-[40px] opacity-[0.15]" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M48 0 L48 48 L0 48" stroke="#ef5023" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="relative max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-[64px] items-center">

          {/* Left: headline + body */}
          <div className="flex flex-col gap-[24px] flex-1">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">SERVICE OVERVIEW</p>
            <h2 className="font-black text-[#0a0a0a] text-[28px] leading-[36px] md:text-[42px] md:leading-[50px] tracking-[-2px]">
              {data.title}
            </h2>
            <div style={{ width: "40px", height: "3px", background: "#ef5023", borderRadius: "2px" }} />
            <p className="text-[#555] text-[16px] leading-[1.85]" style={{ whiteSpace: "pre-line" }}>
              {data.body}
            </p>
          </div>

          {/* Right: image — tilt on hover */}
          <div
            className="lg:w-[520px] flex-shrink-0 relative"
            style={{ aspectRatio: "4/3", perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
          >
            <div className="absolute rounded-[20px]" style={{ inset: 0, transform: "rotate(4deg) translate(12px, 12px)", background: "#f0f0f0", border: "1px solid rgba(0,0,0,0.08)" }} />
            <div className="absolute rounded-[20px]" style={{ inset: 0, transform: "rotate(-2deg) translate(-8px, 8px)", background: "rgba(239,80,35,0.08)", border: "1px solid rgba(239,80,35,0.2)" }} />
            <div
              className="relative rounded-[20px] overflow-hidden w-full h-full"
              style={{
                transform: hovered ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.03)` : "rotateX(0deg) rotateY(0deg) scale(1)",
                transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
                boxShadow: hovered ? "0 40px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(239,80,35,0.15)" : "0 24px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                transformStyle: "preserve-3d",
              }}
            >
              <img src="/Media/Image/case 2.png" alt="InApps engineers collaborating on an AI agent project" className="w-full h-full object-cover" style={{ filter: "brightness(0.95)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(239,80,35,0.04) 0%, transparent 50%)" }} />
            </div>
          </div>

        </div>
      </section>

    </>
  );
}