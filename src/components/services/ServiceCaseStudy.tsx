"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CaseStudyData } from "@/data/services";

interface Props {
  data: { items: CaseStudyData[] };
}

const TABS = ["ODC Model", "Dedicated Team", "Staff Augmentation", "Fixed-Price Model"];

const INTERVAL = 3000;

export default function ServiceCaseStudy({ data }: Props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const activeModel = TABS[tabIndex];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cs = data.items.find(c => c.model === activeModel) ?? data.items[tabIndex % data.items.length];

  const startTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + step, 100));
    }, 50);
    timerRef.current = setInterval(() => {
      setTabIndex(i => (i + 1) % TABS.length);
      setProgress(0);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimers();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const handleTabChange = (ti: number) => {
    setTabIndex(ti);
    startTimers();
  };

  if (!cs) return null;

  return (
    <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>

      {/* circuit board pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="circuit-case" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* grid lines */}
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
            {/* corner dots */}
            <circle cx="0" cy="0" r="2" fill="#ef5023"/>
            {/* horizontal trace with bends */}
            <path d="M 0 50 L 18 50 L 22 46 L 48 46 L 52 50 L 100 50" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
            {/* vertical trace with bends */}
            <path d="M 50 0 L 50 18 L 54 22 L 54 48 L 50 52 L 50 100" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
            {/* junction nodes */}
            <circle cx="50" cy="50" r="2.5" fill="none" stroke="#ef5023" strokeWidth="0.8"/>
            <circle cx="22" cy="46" r="1.5" fill="#ef5023"/>
            <circle cx="54" cy="22" r="1.5" fill="#ef5023"/>
            <circle cx="48" cy="46" r="1" fill="#ef5023"/>
            <circle cx="54" cy="48" r="1" fill="#ef5023"/>
            {/* small branch top-right */}
            <path d="M 75 0 L 75 12 L 80 17 L 80 30" fill="none" stroke="#ef5023" strokeWidth="0.4"/>
            <circle cx="75" cy="0" r="1.2" fill="#ef5023"/>
            <circle cx="80" cy="30" r="1.2" fill="#ef5023"/>
            {/* small branch bottom-left */}
            <path d="M 20 70 L 20 80 L 28 88 L 40 88" fill="none" stroke="#ef5023" strokeWidth="0.4"/>
            <circle cx="20" cy="70" r="1.2" fill="#ef5023"/>
            <circle cx="40" cy="88" r="1.2" fill="#ef5023"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-case)"/>
      </svg>

      {/* section header */}
      <div className="relative max-w-[1320px] mx-auto flex items-end justify-between mb-[24px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">CASE STUDIES</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            Results our clients <span className="text-[#ef5023]">have seen</span>
          </h2>
        </div>
      </div>

      {/* model filter tabs */}
      <div className="relative max-w-[1200px] mx-auto flex mb-[24px] md:justify-center border-b border-[#e8e8e8] overflow-x-auto overscroll-x-contain" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch", touchAction: "pan-x pinch-zoom", overflowY: "hidden" } as React.CSSProperties}>
        {TABS.map((tab, ti) => (
          <button
            key={tab}
            onClick={() => handleTabChange(ti)}
            className="relative text-[13px] px-[16px] md:px-[20px] py-[12px] md:py-[10px] transition-all duration-200 whitespace-nowrap flex-shrink-0"
            style={{
              background: "transparent",
              color: activeModel === tab ? "#ef5023" : "#888",
              fontWeight: activeModel === tab ? 700 : 500,
              border: "none",
              borderBottom: activeModel === tab ? "2px solid #ef5023" : "2px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {tab}
            {/* progress bar */}
            {activeModel === tab && (
              <span
                className="absolute bottom-0 left-0 h-[2px]"
                style={{
                  width: `${progress}%`,
                  background: "rgba(239,80,35,0.35)",
                  transition: "width 50ms linear",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* card */}
      <div className="relative max-w-[1200px] mx-auto rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-2" style={{ background: "#f5f5f5", border: "1px solid #e8e8e8", minHeight: "460px" }}>

        {/* LEFT - dark text card */}
        <div className="relative flex flex-col justify-between gap-[28px] px-[16px] md:px-[40px] py-[40px] rounded-l-[20px]" style={{ background: "#1a1a1a" }}>
          {/* dot pattern */}
          <div className="absolute inset-0 pointer-events-none rounded-l-[20px]"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative flex flex-col gap-[20px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-white border border-white/20 px-[10px] py-[4px] rounded-full">
                {cs.industry}
              </span>
            </div>

            <div className="flex flex-col gap-[12px]">
              <h3 className="font-black text-white text-[24px] leading-[32px] tracking-[-0.8px]">
                {cs.title}
              </h3>
              <div className="w-[32px] h-[1px]" style={{ background: "#ef5023" }} />
              <p className="text-white/60 text-[13px] leading-[1.8]">
                {cs.description}
              </p>
            </div>
          </div>

          {/* bottom: metrics + link */}
          <div className="relative flex flex-col gap-[24px]">
            <div className="flex gap-[32px]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
              {cs.stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-[4px]">
                  <span className="font-black text-white text-[22px] leading-[1] tracking-[-1px]">{value}</span>
                  <span className="text-white/40 text-[11px] font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-[10px]">
              <Link
                href={cs.link}
                className="group inline-flex items-center gap-[8px] text-white text-[12px] font-bold px-[16px] h-[44px] rounded-[8px] transition-all duration-200 hover:bg-[#d94010]"
                style={{ textDecoration: "none", background: "#ef5023" }}
              >
                Detail
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT - image */}
        <div className="relative overflow-hidden group min-h-[240px] md:min-h-0" style={{ background: "#f0f0f0" }}>
          <img
            src={cs.image ?? "/Media/Image/prd 1.jpg"}
            alt={cs.altText ?? cs.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

      </div>

      {/* CTA */}
      <div className="relative max-w-[1320px] mx-auto flex justify-center pt-[40px]">
        <Link
          href="/case-study"
          className="inline-flex items-center gap-[10px] h-[48px] px-[36px] rounded-[12px] font-bold text-[#ef5023] text-[14px] hover:bg-[#ef5023]/10 transition-colors"
          style={{ background: "transparent", border: "1.5px solid #ef5023", textDecoration: "none" }}
        >
          Discover Our Successes
        </Link>
      </div>

    </section>
  );
}