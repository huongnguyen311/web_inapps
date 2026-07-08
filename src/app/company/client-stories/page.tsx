"use client";

import { useState } from "react";

import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

// All quotes below are verbatim from InApps Technology's public Clutch.co profile:
// https://clutch.co/profile/inapps-technology (36 reviews, 4.9/5 overall)
const reviews = [
  {
    id: 1,
    country: "US",
    industry: "SOFTWARE",
    result: "Ongoing partnership since 2021",
    quote:
      "They've gone above and beyond with little touches to not only make the result usable, but visually appealing as well.",
    rating: 5,
    name: "James Fitzgerald",
    title: "CTO, Stremium",
    project: "Web Dashboard Development",
  },
  {
    id: 2,
    country: "PL",
    industry: "IT SERVICES",
    result: "14-month recruiting engagement",
    quote:
      "We chose them because they were a great culture fit.",
    rating: 5,
    name: "Karolina Kwa\u015Bniewska",
    title: "External Resourcing Manager, Future Processing",
    project: "IT Recruitment Services",
  },
  {
    id: 3,
    country: "VN",
    industry: "FINTECH",
    result: "6-10 person team, ongoing since 2024",
    quote:
      "They were responsive, proactive, and adapted quickly to our needs.",
    rating: 5,
    name: "Nancy D.",
    title: "Business Director, FinTech Company",
    project: "Digital Financial Platform",
  },
  {
    id: 4,
    country: "VN",
    industry: "LOGISTICS",
    result: "Maritime app shipped in 8 months",
    quote:
      "The team was responsive and flexible in addressing our requirements.",
    rating: 5,
    name: "Th\u00E0nh Trung Nguy\u1EC5n",
    title: "Multimedia, Haivan Shipping-Services",
    project: "Mobile App Development",
  },
  {
    id: 5,
    country: "VN",
    industry: "IT SERVICES",
    result: "Ongoing staff augmentation since 2025",
    quote:
      "They provide high-quality talent at a good price.",
    rating: 5,
    name: "Bui Kelly",
    title: "CEO, vitX",
    project: "IT Staff Augmentation",
  },
  {
    id: 6,
    country: "VN",
    industry: "TRAVEL",
    result: "Tour booking app, 5.0 on all categories",
    quote:
      "They provided a lot of new ideas to improve the app.",
    rating: 5,
    name: "Emrah Erk",
    title: "General Manager, Pegas Vietnam Travel",
    project: "Mobile App Development",
  },
  {
    id: 7,
    country: "VN",
    industry: "SOFTWARE",
    result: "Ongoing partnership since 2020",
    quote:
      "We are most impressed with their proactiveness, which saved us a lot of time and effort.",
    rating: 5,
    name: "Ken Heini",
    title: "CEO, EZtek",
    project: "Web Development",
  },
  {
    id: 8,
    country: "CA",
    industry: "IT SERVICES",
    result: "Delivered in 3 months",
    quote:
      "They were always there for us if we have any questions or concerns.",
    rating: 5,
    name: "Nathan Bui",
    title: "CEO & Founder, Tech Page Inc.",
    project: "Mobile App Development",
  },
  {
    id: 9,
    country: "VN",
    industry: "EDUCATION",
    result: "10-person dedicated team, ongoing",
    quote:
      "I am most impressed with the responsibility and the initiative in work.",
    rating: 5,
    name: "Verified Client",
    title: "Co-Founder, E-Learning Startup",
    project: "Custom Software Development",
  },
  {
    id: 10,
    country: "ID",
    industry: "GAMING",
    result: "12-month engagement, 5.0 rating",
    quote:
      "They are proactive to solve almost every problem we faced.",
    rating: 5,
    name: "Verified Client",
    title: "CEO & Founder, Gaming Studio",
    project: "Mobile App Development",
  },
  {
    id: 11,
    country: "AU",
    industry: "LOGISTICS",
    result: "Ongoing partnership since 2019",
    quote:
      "Whenever we had some feedback the team would take that onboard and provide a solution promptly.",
    rating: 5,
    name: "Verified Client",
    title: "Project Lead, Logistics Company",
    project: "Web App Development",
  },
];

const countryFlags: Record<string, string> = {
  PL: "\uD83C\uDDF5\uD83C\uDDF1",
  VN: "\uD83C\uDDFB\uD83C\uDDF3",
  AU: "\uD83C\uDDE6\uD83C\uDDFA",
  CA: "\uD83C\uDDE8\uD83C\uDDE6",
  ID: "\uD83C\uDDEE\uD83C\uDDE9",
  US: "\uD83C\uDDFA\uD83C\uDDF8",
};

const countryNames: Record<string, string> = {
  PL: "Poland",
  VN: "Vietnam",
  AU: "Australia",
  CA: "Canada",
  ID: "Indonesia",
  US: "United States",
};

const industries = ["All", ...Array.from(new Set(reviews.map((r) => r.industry)))];

const industryColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  "SOFTWARE":    { bg: "#eef2ff", text: "#4338ca", border: "#c7d2fe", dot: "#6366f1" },
  "IT SERVICES": { bg: "#f0fdfa", text: "#0f766e", border: "#99f6e4", dot: "#14b8a6" },
  "FINTECH":     { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe", dot: "#3b82f6" },
  "LOGISTICS":   { bg: "#fefce8", text: "#a16207", border: "#fde047", dot: "#eab308" },
  "TRAVEL":      { bg: "#fff1f2", text: "#be123c", border: "#fecdd3", dot: "#f43f5e" },
  "EDUCATION":   { bg: "#f0fdf4", text: "#15803d", border: "#86efac", dot: "#22c55e" },
  "GAMING":      { bg: "#f5f3ff", text: "#6d28d9", border: "#ddd6fe", dot: "#8b5cf6" },
};

function nameInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ClientStoriesPage() {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredReviews = activeIndustry === "All" ? reviews : reviews.filter((r) => r.industry === activeIndustry);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px]" style={{ paddingBottom: "100px" }}>
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
            <div className="absolute inset-0 block md:hidden" style={{ background: "rgba(13,13,13,0.55)" }} />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
            <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">

              <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
                What Our Clients <span className="text-[#ef5023]">Say</span>
              </h1>

              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
                Every quote on this page is taken verbatim from our public Clutch.co profile: CTOs, CEOs, and founders who trusted InApps to build their products across ODC, staff augmentation, and project engagements.
              </p>

              <div className="flex flex-wrap items-center gap-[12px] pt-[4px]">
                <a
                  href="#reviews"
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

              {/* Rating badges */}
              <div className="flex flex-wrap items-center gap-[12px] pt-[12px]">
                {[
                  { score: "4.9/5", platform: "Overall on Clutch.co", reviews: "36 reviews" },
                  { score: "4.9/5", platform: "Quality", reviews: "Clutch rating" },
                  { score: "4.9/5", platform: "Willing to refer", reviews: "Clutch rating" },
                ].map((r) => (
                  <div
                    key={r.platform}
                    className="flex items-center gap-[10px] rounded-[10px] px-[14px] py-[10px]"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <div className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.15)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3 6.2 6.8 1-4.9 4.8 1.2 6.8L12 17.3l-6.1 3.5 1.2-6.8L2.2 9.2l6.8-1L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-white text-[18px] leading-[1.1]">{r.score}</span>
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{r.platform} · {r.reviews}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Clutch Stats bar ── */}
        {/* ── Stats ── */}
        <section className="relative px-[16px] md:px-[40px] py-[32px] md:py-[40px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}>
          {/* Họa tiết stats: diagonal lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stat-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#000" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stat-lines)"/>
          </svg>
          {/* Họa tiết stats: vòng tròn góc phải */}
          <div className="absolute pointer-events-none" style={{ top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.10)" }} />
          <div className="absolute pointer-events-none" style={{ top: "-70px", right: "-70px", width: "260px", height: "260px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.05)" }} />
          {/* Họa tiết stats: accent line trái */}
          <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, transparent, #ef5023, transparent)" }} />
          <div className="relative max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-[24px]">

            {/* Clutch rating: official live widget, hand-made block as fallback */}
            <style>{`
              /* official Clutch widget stays hidden until its iframe actually loads;
                 if it never loads (ad-blocker, offline), the fallback block remains */
              .cw-stack .clutch-widget { display: none; }
              .cw-stack:has(.clutch-widget iframe) .clutch-widget { display: block; }
              .cw-stack:has(.clutch-widget iframe) .cw-fallback { display: none; }
            `}</style>
            <div className="cw-stack">
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-height="50"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="141271"
              />
              <div className="cw-fallback flex items-center gap-[20px]">
                <img
                  src="/Media/Partners/clutch.svg"
                  alt="Clutch logo"
                  className="flex-shrink-0"
                  style={{ height: "34px", width: "auto", display: "block" }}
                />
                <div className="w-[1px] self-stretch flex-shrink-0" style={{ background: "#e8e8e8" }} />
                <div className="flex flex-col gap-[3px]">
                  <span className="font-black text-[#1a1a2e] text-[26px] leading-[1]" style={{ letterSpacing: "-0.5px" }}>4.9 / 5.0</span>
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[14px]" style={{ color: "#f59e0b" }}>{"\u2605"}</span>
                    ))}
                  </div>
                  <span className="text-[13px]" style={{ color: "#888" }}>36 client reviews on Clutch.co {"\u00b7"} Premier Verified since 2016</span>
                </div>
              </div>
            </div>

            {/* Top badges + CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[10px]">
              <div className="flex flex-col items-center justify-center rounded-[12px] px-[32px] py-[16px] text-center" style={{ background: "#f3f3f3" }}>
                <span className="font-black text-[#1a1a2e] text-[20px] leading-[1]">13×</span>
                <span className="text-[12px] mt-[3px]" style={{ color: "#666" }}>Cited as &ldquo;Communicative&rdquo;</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-[12px] px-[32px] py-[16px] text-center" style={{ background: "#f3f3f3" }}>
                <span className="font-black text-[#1a1a2e] text-[20px] leading-[1]">13×</span>
                <span className="text-[12px] mt-[3px]" style={{ color: "#666" }}>Cited as &ldquo;Timely&rdquo;</span>
              </div>
              <a
                href="https://clutch.co/profile/inapps-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-[6px] px-[24px] h-[48px] rounded-[10px] font-bold text-[14px] text-white transition-all hover:brightness-110"
                style={{ background: "#ef5023", textDecoration: "none" }}
              >
                Read all reviews on Clutch →
              </a>
            </div>

          </div>
        </section>

        {/* ── 12 Client Reviews ── */}
        <style>{`
          .rv-card {
            transition: all .3s cubic-bezier(.4,0,.2,1);
            position: relative;
            overflow: hidden;
          }
          .rv-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #ef5023, #ff8c42);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform .3s cubic-bezier(.4,0,.2,1);
          }
          .rv-card:hover {
            transform: translateY(-6px);
            border-color: rgba(239,80,35,0.35) !important;
            box-shadow: 0 20px 48px rgba(239,80,35,0.10), 0 6px 16px rgba(0,0,0,0.08) !important;
          }
          .rv-card:hover::after {
            transform: scaleX(1);
          }
        `}</style>
        <section id="reviews" className="relative px-[16px] md:px-[40px] py-[64px] md:py-[100px] overflow-hidden" style={{ background: "#fafafa" }}>

          {/* Họa tiết reviews: dot grid toàn section */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rv-dots-bg" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="#ef5023"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rv-dots-bg)"/>
          </svg>
          {/* Họa tiết reviews: glow cam góc trên phải */}
          <div className="absolute pointer-events-none" style={{ top: "-80px", right: "-60px", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(239,80,35,0.06) 0%, transparent 65%)", borderRadius: "50%" }} />
          {/* Họa tiết reviews: glow cam góc dưới trái */}
          <div className="absolute pointer-events-none" style={{ bottom: "-60px", left: "-40px", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />
          {/* Họa tiết reviews: đường viền lượn sóng ngang */}
          <svg className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: "60px", opacity: 0.06 }} viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30 C240 0, 480 60, 720 30 S1200 0, 1440 30 V0 H0Z" fill="#ef5023"/>
          </svg>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 1 }}>

            {/* Heading */}
            <div className="flex flex-col gap-[12px] max-w-[700px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">CLIENT REVIEWS</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                Verified <span className="text-[#ef5023]">Client Reviews</span>
              </h2>
              <p className="text-[16px] leading-[1.7]" style={{ color: "#666" }}>
                A selection from 36 reviews on our Clutch.co profile, quoted word for word. Reviewers from the US, Poland, Canada, Australia, Indonesia, and Vietnam.
              </p>
            </div>

            {/* Industry filter tabs */}
            <div className="relative">
              <div className="flex gap-0 border-b border-[#e8e8e8] overflow-x-auto">
                {industries.map((ind) => {
                  const isActive = activeIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => setActiveIndustry(ind)}
                      className="text-[13px] px-[20px] py-[10px] transition-all relative whitespace-nowrap cursor-pointer"
                      style={{
                        background: "transparent",
                        color: isActive ? "#ef5023" : "#555",
                        fontWeight: 700,
                        border: "none",
                        borderBottom: isActive ? "2px solid #ef5023" : "2px solid transparent",
                        marginBottom: "-1px",
                      }}
                    >
                      {ind === "All" ? "All" : ind}
                    </button>
                  );
                })}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[60px] pointer-events-none md:hidden" style={{ background: "linear-gradient(to left, #fafafa, transparent)" }} />
            </div>

            {/* Cards */}
            <div className="rv-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {filteredReviews.map((r) => {
                const displayQuote = r.quote.length > 185 ? r.quote.slice(0, 185) + "..." : r.quote;

                return (
                  <div
                    key={r.id}
                    className="rv-card flex flex-col rounded-[20px] overflow-hidden relative"
                    style={{ background: "#fff", border: "1px solid #e8e1d9", boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}
                  >
                    {/* Họa tiết: dot grid mờ góc trên phải */}
                    <div className="absolute top-0 right-0 pointer-events-none" style={{
                      width: "160px", height: "160px",
                      backgroundImage: "radial-gradient(circle, rgba(239,80,35,0.22) 1.5px, transparent 1.5px)",
                      backgroundSize: "14px 14px",
                      WebkitMaskImage: "radial-gradient(ellipse at top right, black 10%, transparent 72%)",
                      maskImage: "radial-gradient(ellipse at top right, black 10%, transparent 72%)",
                    }} />

                    {/* Họa tiết: vòng tròn lớn góc dưới trái */}
                    <div className="absolute bottom-[-40px] left-[-40px] pointer-events-none rounded-full" style={{
                      width: "130px", height: "130px",
                      background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 70%)",
                    }} />

                    {/* Accent bar trái */}
                    <div className="absolute left-0 top-[28px] bottom-[28px] rounded-r-full pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, #ef5023, #ffb347)" }} />

                    <div className="flex flex-col gap-[18px] p-[28px] pl-[34px] flex-1">

                      {/* Header: industry + stars | country */}
                      <div className="flex items-center justify-between gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                          {(() => {
                            const c = industryColors[r.industry] ?? { bg: "rgba(239,80,35,0.09)", text: "#ef5023", border: "rgba(239,80,35,0.2)", dot: "#ef5023" };
                            return (
                              <span className="inline-flex items-center gap-[5px] text-[9px] font-black tracking-[1.8px] uppercase px-[9px] py-[3px] rounded-full" style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: c.dot, display: "inline-block", flexShrink: 0 }} />
                                {r.industry}
                              </span>
                            );
                          })()}
                          <div className="flex gap-[2px]">
                            {Array.from({ length: r.rating }).map((_, i) => (
                              <span key={i} style={{ color: "#f59e0b", fontSize: "11px" }}>★</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-[12px] font-semibold" style={{ color: "#555" }}>
                          {countryFlags[r.country]} <span style={{ color: "#666", fontSize: "11px" }}>{countryNames[r.country]}</span>
                        </span>
                      </div>

                      {/* Quote */}
                      <div className="flex-1 relative">
                        <span style={{
                          position: "absolute", top: "-10px", left: "-6px",
                          fontSize: "72px", lineHeight: 1,
                          color: "#ef5023", fontFamily: "Georgia, serif",
                          opacity: 0.08, userSelect: "none", pointerEvents: "none",
                        }}>&ldquo;</span>
                        <p className="text-[14px] leading-[1.85] relative z-[1]" style={{ color: "#2c2c2c" }}>
                          {displayQuote}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: "#ef5023" }}>
                          <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                            <path d="M2 9.5L9.5 2M9.5 2H4M9.5 2V7.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[13px] font-bold" style={{ color: "#ef5023" }}>{r.result}</span>
                      </div>

                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-[10px] px-[28px] pl-[34px] py-[16px]" style={{ borderTop: "1px solid #f0ebe4", background: "#faf8f6" }}>
                      <div className="flex items-center gap-[10px] min-w-0">
                        <div
                          className="w-[38px] h-[38px] rounded-full flex items-center justify-center flex-shrink-0 font-black text-[12px] text-white"
                          style={{ background: "linear-gradient(135deg, #ef5023, #ff8c42)", border: "2px solid rgba(239,80,35,0.2)" }}
                          aria-hidden="true"
                        >
                          {nameInitials(r.name)}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-[13px] truncate" style={{ color: "#111" }}>{r.name}</span>
                          <span className="text-[11px] truncate" style={{ color: "#999" }}>{r.title}</span>
                          <span className="text-[10px] font-semibold" style={{ color: "#ef5023" }}>{r.project}</span>
                        </div>
                      </div>
                      <a href="https://clutch.co/profile/inapps-technology" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-[5px] rounded-full px-[10px] py-[4px] flex-shrink-0"
                        style={{ background: "rgba(5,150,105,0.07)", border: "1px solid rgba(5,150,105,0.2)", textDecoration: "none" }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1l1.3.8 1.5-.2.5 1.4 1.3.7-.2 1.5L11 6l-.6 1.3.2 1.5-1.3.7-.5 1.4-1.5-.2L6 11l-1.3-.8-1.5.2-.5-1.4-1.3-.7.2-1.5L1 6l.6-1.3-.2-1.5 1.3-.7.5-1.4 1.5.2L6 1z" fill="#059669"/>
                          <path d="M4.5 6l1 1 2-2" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold" style={{ color: "#059669" }}>Verified</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>



          </div>
        </section>

        {/* ── External Platforms Banner ── */}
        <section className="relative px-[16px] md:px-[40px] py-[40px] md:py-[56px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #e8e8e8" }}>
          {/* Họa tiết external: horizontal stripes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ext-stripes" x="0" y="0" width="1" height="24" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="1440" y2="0" stroke="#000" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ext-stripes)"/>
          </svg>
          {/* Họa tiết external: accent line phải */}
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, transparent, rgba(239,80,35,0.4), transparent)" }} />
          <div className="max-w-[1320px] mx-auto">
            <div className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px] rounded-[16px] px-[32px] md:px-[40px] py-[28px] md:py-[32px]" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #eef1f5 100%)", border: "1px solid #e0e4ea" }}>
              {/* Decorative circles */}
              <div className="absolute pointer-events-none" style={{ top: "-30px", right: "-20px", width: "120px", height: "120px", background: "radial-gradient(circle, rgba(239,80,35,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
              <div className="absolute pointer-events-none" style={{ bottom: "-20px", left: "30%", width: "80px", height: "80px", background: "radial-gradient(circle, rgba(239,80,35,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ext-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="#0a0a0a"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ext-dots)"/>
              </svg>
              <div className="relative flex flex-col gap-[8px] max-w-[600px]">
                <h3 className="font-black text-[#0a0a0a] text-[20px] leading-[1.2] tracking-[-0.5px]">Read More on External Platforms</h3>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#666" }}>
                  Our full review history is available on Clutch.co and GoodFirms, independently verified, unedited reviews from verified clients.
                </p>
              </div>
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-[10px]">
                <a
                  href="https://clutch.co/profile/inapps-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-[6px] px-[20px] h-[42px] rounded-[10px] font-bold text-[13px] text-white transition-all hover:brightness-110"
                  style={{ background: "#ef5023", textDecoration: "none" }}
                >
                  View on Clutch.co →
                </a>
                <a
                  href="https://www.goodfirms.co/company/inapps-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-[6px] px-[20px] h-[42px] rounded-[10px] font-bold text-[13px] transition-all hover:bg-[#f0f0f0]"
                  style={{ background: "#fff", border: "1px solid #d0d0d0", color: "#333", textDecoration: "none" }}
                >
                  View on GoodFirms →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Join Banner ── */}
        <section className="relative px-[16px] md:px-[40px] py-[40px] md:py-[56px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="join-section-cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="0.8" fill="#ef5023"/>
                <line x1="17" y1="20" x2="23" y2="20" stroke="#ef5023" strokeWidth="0.4"/>
                <line x1="20" y1="17" x2="20" y2="23" stroke="#ef5023" strokeWidth="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#join-section-cross)"/>
          </svg>
          {/* Họa tiết join: glow giữa */}
          <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(239,80,35,0.05) 0%, transparent 70%)" }} />
          <div className="max-w-[1320px] mx-auto">
            <div className="relative overflow-hidden flex flex-col items-center text-center gap-[20px] rounded-[16px] px-[32px] md:px-[56px] py-[40px] md:py-[48px]" style={{ background: "linear-gradient(135deg, #ef5023 0%, #d94010 100%)" }}>
              {/* Decorative elements */}
              <div className="absolute pointer-events-none" style={{ top: "-50px", right: "-30px", width: "220px", height: "220px", background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
              <div className="absolute pointer-events-none" style={{ bottom: "-40px", left: "-20px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="join-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#join-grid)"/>
              </svg>
              <h3 className="relative font-black text-white leading-[1.2] tracking-[-0.5px]" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                Work with a team clients rate 4.9/5
              </h3>
              <p className="relative text-[15px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.85)" }}>
                Start with a free 30-minute discovery call. No commitment required.
              </p>
              <div className="relative flex flex-wrap items-center gap-[12px] mt-[4px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-[6px] px-[24px] h-[44px] rounded-[10px] font-bold text-[14px] text-[#ef5023] transition-all hover:brightness-95"
                  style={{ background: "#fff", textDecoration: "none" }}
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-[6px] px-[24px] h-[44px] rounded-[10px] font-bold text-[14px] text-white transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
      <Script src="https://widget.clutch.co/static/js/widget.js" strategy="lazyOnload" />
    </div>
  );
}
