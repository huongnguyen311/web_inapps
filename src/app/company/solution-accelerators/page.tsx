"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import { solutionAccelerators } from "@/data/solutionAccelerators";

const FILTERS = ["All", "Healthcare", "FinTech", "E-commerce", "Logistics"] as const;
type Filter = (typeof FILTERS)[number];

const FILTER_MAP: Record<Filter, string[]> = {
  All: [],
  Healthcare: ["Healthcare"],
  FinTech: ["Fintech"],
  "E-commerce": ["E-Commerce"],
  Logistics: ["Logistics"],
};

function getTopTags(acc: (typeof solutionAccelerators)[0]) {
  return acc.techCategories.flatMap((tc) => tc.items).slice(0, 4);
}

export default function SolutionAcceleratorsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = solutionAccelerators.filter((acc) => {
    if (activeFilter === "All") return true;
    return FILTER_MAP[activeFilter].includes(acc.category);
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── Hero ── */}
        <section
          className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[560px] md:min-h-[760px] pt-[140px] md:pt-[200px]"
          style={{ paddingBottom: "80px" }}
        >
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 16.png"
              alt=""
              className="absolute right-0 top-0 h-full"
              style={{ width: "60%", objectFit: "cover", objectPosition: "right center" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0d0d0d 40%, #0d0d0d 50%, rgba(13,13,13,0.7) 65%, transparent 100%)" }}
            />

            {/* dot grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.9" fill="rgba(255,255,255,0.07)" />
                </pattern>
              </defs>
              <rect width="55%" height="100%" fill="url(#hero-dots)" />
            </svg>

            {/* large arc top-left */}
            <svg className="absolute pointer-events-none" style={{ top: "-60px", left: "-60px", width: "480px", height: "480px", opacity: 0.07 }} viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="120" cy="120" r="200" stroke="#ef5023" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="140" stroke="#ef5023" strokeWidth="1" />
              <circle cx="120" cy="120" r="80" stroke="#ef5023" strokeWidth="0.8" />
            </svg>

            {/* corner bracket bottom-left */}
            <svg className="absolute pointer-events-none" style={{ bottom: "40px", left: "32px", width: "80px", height: "80px", opacity: 0.18 }} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80 L0 0 L80 0" stroke="#ef5023" strokeWidth="2" fill="none" />
            </svg>

            {/* horizontal scan lines */}
            <svg className="absolute pointer-events-none" style={{ top: 0, left: 0, width: "50%", height: "100%", opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-lines" x="0" y="0" width="1" height="24" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="10000" y2="0" stroke="#fff" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-lines)" />
            </svg>

            {/* glow orb bottom */}
            <div className="absolute pointer-events-none" style={{ bottom: "-80px", left: "15%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(239,80,35,0.12) 0%, transparent 65%)", borderRadius: "50%" }} />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
            <div className="flex flex-col items-start gap-[20px] max-w-[720px]">
              <h1 className="font-black text-white text-[38px] leading-[46px] sm:text-[50px] sm:leading-[58px] md:text-[64px] md:leading-[72px] tracking-[-2px]">
                Launch Faster with<br />
                <span className="text-[#ef5023]">Proven Foundations</span>
              </h1>
              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]">
                Move from Idea → POC → MVP in just 2–4 weeks with our ready-to-customize Solution Accelerators.
              </p>
              <div className="flex items-center gap-[12px] pt-[8px]">
                <a
                  href="#accelerators"
                  className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
                >
                  Explore Accelerators
                </a>
                <Link
                  href="/contact"
                  className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                  style={{ textDecoration: "none" }}
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trusted Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Filter + Cards ── */}
        <section id="accelerators" className="relative px-[16px] md:px-[40px] py-[72px] md:py-[100px] overflow-hidden" style={{ background: "#fafafa" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sa-list-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="#ef5023" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sa-list-dots)" />
          </svg>
          <div
            className="absolute pointer-events-none"
            style={{ top: "-80px", right: "-60px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }}
          />

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            {/* Section header */}
            <div className="flex flex-col gap-[10px] max-w-[680px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">WHAT WE OFFER</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                Pre-built accelerators for <span className="text-[#ef5023]">every domain</span>
              </h2>
              <p className="text-[16px] leading-[1.7]" style={{ color: "#666" }}>
                Each accelerator is a production-grade codebase you own entirely — configurable to your stack, brandable to your product, and deployable in weeks.
              </p>
            </div>

            {/* Filter bar */}
            <div className="flex items-center gap-[8px] flex-wrap">
              <span className="text-[13px] font-semibold mr-[4px]" style={{ color: "#444" }}>Industry:</span>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="inline-flex items-center px-[16px] h-[36px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer"
                  style={{
                    background: activeFilter === f ? "#ef5023" : "#fff",
                    color: activeFilter === f ? "#fff" : "#444",
                    border: activeFilter === f ? "1px solid #ef5023" : "1px solid #e0d8d0",
                    boxShadow: activeFilter === f ? "0 4px 16px rgba(239,80,35,0.25)" : "none",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="sa-list-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {filtered.map((acc) => {
                const tags = getTopTags(acc);
                return (
                  <Link
                    key={acc.slug}
                    href={`/company/solution-accelerators/${acc.slug}`}
                    className="sa-list-card group flex flex-col rounded-[20px] overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e1d9",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.07)",
                      textDecoration: "none",
                    }}
                  >
                    {/* Video thumbnail */}
                    <div className="relative overflow-hidden" style={{ height: "204px", background: "#111" }}>
                      <img
                        src={acc.image}
                        alt={acc.name}
                        className="sa-list-img w-full h-full object-cover"
                        style={{ opacity: 0.82, transition: "transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s" }}
                      />
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="sa-play-btn w-[52px] h-[52px] rounded-full flex items-center justify-center"
                          style={{
                            background: "rgba(239,80,35,0.92)",
                            backdropFilter: "blur(4px)",
                            boxShadow: "0 4px 24px rgba(239,80,35,0.5)",
                            transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Category badge */}
                      <span
                        className="absolute bottom-[14px] right-[14px] inline-flex items-center gap-[6px] text-[10px] font-bold tracking-[1.8px] uppercase px-[12px] py-[6px] rounded-[6px]"
                        style={{
                          background: "rgba(10,10,10,0.72)",
                          color: "rgba(255,255,255,0.92)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          letterSpacing: "1.8px",
                        }}
                      >
                        {acc.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col gap-[14px] p-[24px] flex-1">
                      <h3 className="font-black text-[#0a0a0a] text-[17px] leading-[1.35] group-hover:text-[#ef5023] transition-colors">
                        {acc.name}
                      </h3>

                      {/* MVP time */}
                      <div className="flex items-center gap-[5px]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        <span className="text-[12px] font-semibold" style={{ color: "#ef5023" }}>
                          MVP in 2–4 weeks
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] leading-[1.65]" style={{ color: "#666" }}>
                        {acc.shortDescription}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-[6px]">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold px-[8px] py-[3px] rounded-[6px]"
                            style={{ background: "#eef0f3", color: "#4a5568" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Details CTA */}
                      <div className="mt-auto pt-[14px]" style={{ borderTop: "1px solid #f0ebe4" }}>
                        <span className="sa-cta inline-flex items-center gap-[6px] text-[13px] font-bold" style={{ color: "#ef5023" }}>
                          View Details
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center gap-[12px] py-[60px] text-center">
                <p className="text-[18px] font-semibold" style={{ color: "#444" }}>No accelerators match this filter.</p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="text-[14px] font-semibold underline cursor-pointer"
                  style={{ color: "#ef5023" }}
                >
                  Show all accelerators
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          className="relative px-[16px] md:px-[40px] py-[48px] md:py-[64px] overflow-hidden"
          style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-[1320px] mx-auto">
            <div
              className="relative overflow-hidden flex flex-col items-center text-center gap-[20px] rounded-[20px] px-[32px] md:px-[56px] py-[40px] md:py-[52px]"
              style={{ background: "linear-gradient(135deg, #ef5023 0%, #d94010 100%)" }}
            >
              <div
                className="absolute pointer-events-none"
                style={{ top: "-50px", right: "-30px", width: "220px", height: "220px", background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", borderRadius: "50%" }}
              />
              <div
                className="absolute pointer-events-none"
                style={{ bottom: "-40px", left: "-20px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", borderRadius: "50%" }}
              />
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-sa-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-sa-grid)" />
              </svg>
              <h3 className="relative font-black text-white leading-[1.2] tracking-[-0.5px]" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                Don&apos;t see your use case? We build custom accelerators too.
              </h3>
              <p className="relative text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "560px" }}>
                Tell us your domain and tech constraints. We&apos;ll scope an accelerator that fits — and show you a proof of concept before you commit.
              </p>
              <div className="relative flex items-center gap-[12px] mt-[4px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-[6px] px-[28px] h-[48px] rounded-[10px] font-bold text-[15px] text-[#ef5023] whitespace-nowrap transition-all hover:brightness-95"
                  style={{ background: "#fff", textDecoration: "none" }}
                >
                  Talk to an Engineer
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-[6px] px-[28px] h-[48px] rounded-[10px] font-bold text-[15px] text-white whitespace-nowrap transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 639px) { .sa-list-grid { grid-template-columns: 1fr !important; } }
          @media (min-width: 640px) and (max-width: 1023px) { .sa-list-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 639px) { .sa-list-grid { grid-template-columns: 1fr !important; } }
          @media (min-width: 640px) and (max-width: 1023px) { .sa-list-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          .sa-list-card { transition: transform .35s cubic-bezier(.22,1,.36,1), border-color .3s, box-shadow .35s; }
          .sa-list-card:hover { transform: translateY(-10px); border-color: rgba(239,80,35,0.35) !important; box-shadow: 0 8px 0 rgba(239,80,35,0.08), 0 24px 56px rgba(239,80,35,0.14), 0 10px 28px rgba(0,0,0,0.1) !important; }
          .sa-list-card:hover .sa-list-img { transform: scale(1.07); opacity: 1 !important; }
          .sa-list-card:hover .sa-play-btn { transform: scale(1.18); box-shadow: 0 8px 32px rgba(239,80,35,0.7) !important; }
          .sa-list-card:hover .sa-cta svg { transform: translateX(4px); }
          .sa-list-card .sa-cta svg { transition: transform .25s cubic-bezier(.22,1,.36,1); }
        `}</style>

      </main>
      <Footer />
    </div>
  );
}
