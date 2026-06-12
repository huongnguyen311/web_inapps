"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

const testimonials = [
  {
    id: 1,
    quote:
      "InApps didn't just deliver code — they became a genuine extension of our product team. The dedication and technical depth we got from their engineers matched anything we'd seen from in-house hires.",
    author: "Michael Tan",
    role: "CTO",
    company: "Techcombank Digital",
    avatar: "/Media/Image/prd 1.jpg",
    industry: "Fintech",
    result: "2 days → 4 hours loan approval",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "We needed a partner who could move at startup speed but had the discipline of an enterprise vendor. InApps hit both. The AI triage system they built has completely transformed how we handle claims.",
    author: "Sarah Nguyen",
    role: "VP Engineering",
    company: "Prudential Vietnam",
    avatar: "/Media/Image/prd 2.jpg",
    industry: "Insurance",
    result: "Manual sorting eliminated",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "From day one, the communication was transparent and the engineers were proactive. We shipped our MVP in 8 weeks — something our previous agency couldn't do in 6 months.",
    author: "James Whitfield",
    role: "Founder & CEO",
    company: "HealthNow",
    avatar: "/Media/Image/case 9.png",
    industry: "Healthcare",
    result: "MVP shipped in 8 weeks",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The supply chain visibility platform they built reduced our stockout incidents by 35% in the first quarter alone. The ROI was immediate and measurable.",
    author: "Linda Park",
    role: "Head of Operations",
    company: "LogiFlow Asia",
    avatar: "/Media/Image/case 10.png",
    industry: "Logistics",
    result: "35% fewer stockout incidents",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "InApps understood our omnichannel complexity from the first discovery call. Their team delivered a unified platform that boosted our conversion rate by 22% across three brands.",
    author: "Chris Lam",
    role: "Director of Digital",
    company: "FashionGroup SEA",
    avatar: "/Media/Image/case 11.png",
    industry: "Retail",
    result: "+22% conversion rate",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "We've worked with offshore teams before — InApps is in a different league. Senior engineers, honest timelines, and a team that genuinely cares about outcomes.",
    author: "David Müller",
    role: "Product Lead",
    company: "SaaSCore GmbH",
    avatar: "/Media/Image/case 1.png",
    industry: "SaaS",
    result: "3x faster feature delivery",
    rating: 5,
  },
];

const INDUSTRIES = ["All", "Fintech", "Healthcare", "Insurance", "Logistics", "Retail", "SaaS"];

const stats = [
  { value: "4.9★", label: "on Clutch", sub: "Verified reviews" },
  { value: "200+", label: "clients served", sub: "Since 2010" },
  { value: "15+", label: "countries", sub: "Global reach" },
  { value: "95%", label: "client retention", sub: "Long-term partners" },
];

export default function ClientStoriesPage() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeIndustry === "All"
      ? testimonials
      : testimonials.filter((t) => t.industry === activeIndustry);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px]" style={{ paddingBottom: "100px" }}>
          {/* Banner background */}
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 16.png"
              alt=""
              className="absolute right-0 top-0 h-full"
              style={{ width: "65%", objectFit: "cover", objectPosition: "right center" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0d0d0d 35%, #0d0d0d 45%, rgba(13,13,13,0.7) 60%, transparent 100%)" }}
            />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
            <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-[8px] rounded-full px-[14px] py-[5px]" style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}>
                <span className="text-[11px] font-black tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Client Stories</span>
              </div>

              {/* Heading */}
              <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
                Real clients. <span className="text-[#ef5023]">Real results.</span> Real relationships.
              </h1>

              {/* Subtext */}
              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
                Don't take our word for it. Here's what global technology leaders say about working with InApps — from first call to long-term partnership.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-[12px] pt-[4px]">
                <a
                  href="#stories"
                  className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
                >
                  Read Stories ↓
                </a>
                <Link
                  href="/case-study"
                  className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                  style={{ textDecoration: "none" }}
                >
                  View Case Studies →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Stats bar ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
          <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center py-[28px] px-[12px]"
                style={{ borderRight: i < 3 ? "1px solid #e8e8e8" : "none" }}
              >
                <div className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-1px" }}>{s.value}</div>
                <div className="text-[14px] font-semibold text-[#111] mt-[4px]">{s.label}</div>
                <div className="text-[12px] mt-[2px]" style={{ color: "#888" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Filter + Stories ── */}
        <style>{`
          .story-card { transition: border-color .2s, box-shadow .2s, transform .2s; }
          .story-card:hover { border-color: rgba(239,80,35,.25) !important; box-shadow: 0 12px 40px rgba(239,80,35,.08), 0 2px 12px rgba(0,0,0,.07) !important; transform: translateY(-3px); }
          @media (max-width: 639px) { .stories-grid { grid-template-columns: 1fr !important; } }
        `}</style>
        <section id="stories" className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
              <defs>
                <pattern id="story-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#ef5023" fillOpacity="0.12"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#story-dots)"/>
            </svg>
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]" style={{ zIndex: 1 }}>

            {/* Section heading */}
            <div className="flex flex-col gap-[10px] max-w-[640px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>TESTIMONIALS</p>
              <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(32px, 3vw, 48px)", letterSpacing: "-1.5px" }}>
                What our clients <span style={{ color: "#ef5023" }}>say about us</span>
              </h2>
            </div>

            {/* Industry filter */}
            <div className="flex gap-[8px] flex-wrap">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className="text-[13px] font-semibold px-[18px] py-[7px] rounded-full cursor-pointer transition-all"
                  style={{
                    border: activeIndustry === ind ? "1.5px solid #ef5023" : "1.5px solid #e0e0e0",
                    background: activeIndustry === ind ? "#ef5023" : "#fff",
                    color: activeIndustry === ind ? "#fff" : "#555",
                  }}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div
              className="stories-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
            >
              {filtered.map((t) => (
                <div
                  key={t.id}
                  className="story-card flex flex-col rounded-[16px] overflow-hidden"
                  style={{ background: "#fff", border: "1.5px solid #e8e8e8", boxShadow: "0 2px 12px rgba(0,0,0,.05)" }}
                >
                  {/* Image strip */}
                  <div className="relative overflow-hidden" style={{ height: "180px" }}>
                    <img
                      src={t.avatar}
                      alt={t.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
                    <span className="absolute bottom-[12px] left-[16px] text-white text-[10px] font-black tracking-[1.5px] uppercase rounded-full px-[10px] py-[3px]" style={{ background: "rgba(239,80,35,0.9)" }}>
                      {t.industry}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-[22px]">
                    {/* Stars */}
                    <div className="flex gap-[3px] mb-[14px]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-[14px]" style={{ color: "#f59e0b" }}>★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="text-[14px] leading-[1.75] flex-1"
                      style={{
                        color: "#444",
                        display: "-webkit-box",
                        WebkitLineClamp: expanded === t.id ? "unset" : 4,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: expanded === t.id ? "visible" : "hidden",
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {t.quote.length > 160 && (
                      <button
                        onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                        className="text-[12px] font-bold text-left pt-[6px] bg-transparent border-none cursor-pointer"
                        style={{ color: "#ef5023" }}
                      >
                        {expanded === t.id ? "Show less" : "Read more"}
                      </button>
                    )}

                    <div className="h-[1px] my-[16px]" style={{ background: "#f0f0f0" }} />

                    {/* Author */}
                    <div className="flex items-center justify-between gap-[10px]">
                      <div>
                        <div className="text-[14px] font-bold" style={{ color: "#0a0a0a" }}>{t.author}</div>
                        <div className="text-[12px]" style={{ color: "#888" }}>{t.role} · {t.company}</div>
                      </div>
                      <div
                        className="text-[11px] font-bold text-right whitespace-nowrap rounded-[8px] px-[10px] py-[5px]"
                        style={{ background: "rgba(239,80,35,0.07)", border: "1px solid rgba(239,80,35,0.15)", color: "#ef5023" }}
                      >
                        {t.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#0d0d0d" }}>
          {/* Constellation background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
              <line x1="80"  y1="20"  x2="200" y2="60"/>
              <line x1="200" y1="60"  x2="340" y2="30"/>
              <line x1="340" y1="30"  x2="480" y2="80"/>
              <line x1="480" y1="80"  x2="620" y2="40"/>
              <line x1="620" y1="40"  x2="760" y2="90"/>
              <line x1="760" y1="90"  x2="900" y2="50"/>
              <line x1="900" y1="50"  x2="1040" y2="80"/>
              <line x1="1040" y1="80" x2="1160" y2="40"/>
            </g>
            <g fill="white">
              <circle cx="80"   cy="20"  r="1.5" opacity="0.25"/>
              <circle cx="340"  cy="30"  r="1.8" opacity="0.28"/>
              <circle cx="620"  cy="40"  r="1.5" opacity="0.25"/>
              <circle cx="900"  cy="50"  r="1.8" opacity="0.28"/>
              <circle cx="1160" cy="40"  r="1.5" opacity="0.22"/>
            </g>
            <g fill="#ef5023">
              <circle cx="200"  cy="60" r="2.5" opacity="0.55"/>
              <circle cx="480"  cy="80" r="2"   opacity="0.5"/>
              <circle cx="760"  cy="90" r="2.5" opacity="0.5"/>
              <circle cx="1040" cy="80" r="2"   opacity="0.45"/>
            </g>
          </svg>

          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 1 }}>
            <div
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px] sm:gap-[48px] px-[24px] sm:px-[56px] py-[36px] sm:py-[44px] rounded-[20px] overflow-hidden"
              style={{ background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)", border: "1px solid rgba(239,80,35,0.18)" }}
            >
              {/* Glow */}
              <div
                className="absolute pointer-events-none blur-[80px]"
                style={{ left: "-60px", top: "50%", transform: "translateY(-50%)", width: "240px", height: "240px", background: "rgba(239,80,35,0.12)", borderRadius: "50%" }}
              />

              <div className="relative flex flex-col gap-[8px] min-w-0" style={{ zIndex: 2 }}>
                <div className="text-[11px] font-black tracking-[2px] uppercase" style={{ color: "#ef5023" }}>YOUR STORY STARTS HERE</div>
                <h2 className="font-black text-white leading-[1.15]" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.8px" }}>
                  Ready to join our <span style={{ color: "#ef5023" }}>client family?</span>
                </h2>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#888" }}>
                  Book a 30-minute discovery call. No pitch decks. Just a direct conversation about your goals.
                </p>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-[12px] shrink-0" style={{ zIndex: 2 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-[10px] px-[28px] h-[48px] rounded-[12px] font-bold text-[14px] text-white whitespace-nowrap"
                  style={{ background: "#ef5023", textDecoration: "none", boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)" }}
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center justify-center gap-[10px] px-[28px] h-[48px] rounded-[12px] font-semibold text-[14px] text-white whitespace-nowrap"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}
                >
                  See Case Studies →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
