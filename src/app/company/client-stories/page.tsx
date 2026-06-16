"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

function AnimatedNumber({ value, suffix = "", duration = 1800 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const reviews = [
  {
    id: 1,
    country: "GB",
    industry: "HEALTHCARE",
    result: "100K consultations in year 1",
    quote:
      "The InApps team delivered exactly what we needed, a stable telemedicine app our doctors and patients actually love. They understood HIPAA constraints and HL7 FHIR integration from day one with minimal handholding. 100,000 consultations completed in year one. Genuinely one of the best engineering partnerships we have had.",
    rating: 5,
    name: "Marcus Webb",
    title: "CTO, DR.NEE Healthcare",
    project: "Telemedicine App",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 2,
    country: "SG",
    industry: "BLOCKCHAIN & SECURITY",
    result: "30K+ enterprise users, 0 security incidents",
    quote:
      "We chose InApps because they were one of the few teams that could hold a serious technical conversation about both blockchain architecture and mobile performance. They delivered on every dimension \u2014 WebRTC end-to-end encryption, Ethereum consortium chain, and TSS key management \u2014 all production-grade within 8 months.",
    rating: 5,
    name: "Alexei Morozov",
    title: "CEO & Co-founder, Sotoria Encrypted Communications",
    project: "Encrypted Communications Platform",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 3,
    country: "VN",
    industry: "E-COMMERCE & HEALTHCARE",
    result: "+280% order volume",
    quote:
      "We went from zero online presence to a fully operational e-commerce platform serving 30+ pharmacy branches in 5 months. The InApps team handled medication compliance regulations without us having to explain it twice. Orders are up 280% versus pre-digital. Remarkable execution.",
    rating: 5,
    name: "Minh Tran",
    title: "CEO, PharmaGo",
    project: "Pharmacy E-Commerce Platform",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 4,
    country: "AU",
    industry: "FINTECH",
    result: "2 days \u2192 4 hours loan approval",
    quote:
      "InApps didn\u2019t just deliver code \u2014 they became a genuine extension of our product team. The dedication and technical depth we got from their engineers matched anything we\u2019d seen from in-house hires.",
    rating: 5,
    name: "Michael Tan",
    title: "CTO, Techcombank Digital",
    project: "Loan Processing System",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 5,
    country: "DE",
    industry: "SAAS",
    result: "3x faster feature delivery",
    quote:
      "We\u2019ve worked with offshore teams before \u2014 InApps is in a different league. Senior engineers, honest timelines, and a team that genuinely cares about outcomes.",
    rating: 5,
    name: "David M\u00fcller",
    title: "Product Lead, SaaSCore GmbH",
    project: "Analytics Dashboard",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 6,
    country: "US",
    industry: "INSURANCE",
    result: "Manual sorting eliminated",
    quote:
      "We needed a partner who could move at startup speed but had the discipline of an enterprise vendor. InApps hit both. The AI triage system they built has completely transformed how we handle claims.",
    rating: 5,
    name: "Sarah Nguyen",
    title: "VP Engineering, Prudential Vietnam",
    project: "AI Claims Triage System",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 7,
    country: "GB",
    industry: "LOGISTICS",
    result: "35% fewer stockout incidents",
    quote:
      "The supply chain visibility platform they built reduced our stockout incidents by 35% in the first quarter alone. The ROI was immediate and measurable.",
    rating: 5,
    name: "Linda Park",
    title: "Head of Operations, LogiFlow Asia",
    project: "Supply Chain Platform",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 8,
    country: "SG",
    industry: "RETAIL",
    result: "+22% conversion rate",
    quote:
      "InApps understood our omnichannel complexity from the first discovery call. Their team delivered a unified platform that boosted our conversion rate by 22% across three brands.",
    rating: 5,
    name: "Chris Lam",
    title: "Director of Digital, FashionGroup SEA",
    project: "Omnichannel Commerce",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 9,
    country: "VN",
    industry: "HEALTHCARE",
    result: "MVP shipped in 8 weeks",
    quote:
      "From day one, the communication was transparent and the engineers were proactive. We shipped our MVP in 8 weeks \u2014 something our previous agency couldn\u2019t do in 6 months.",
    rating: 5,
    name: "James Whitfield",
    title: "Founder & CEO, HealthNow",
    project: "Patient Portal MVP",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 10,
    country: "AU",
    industry: "FINTECH",
    result: "50% reduction in processing time",
    quote:
      "Their team integrated seamlessly with ours. The payment gateway they built processes thousands of transactions daily without a single hiccup. Truly impressive engineering.",
    rating: 5,
    name: "Tom Henderson",
    title: "Engineering Manager, PayStream AU",
    project: "Payment Gateway",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 11,
    country: "DE",
    industry: "E-COMMERCE",
    result: "+45% mobile conversion",
    quote:
      "InApps rebuilt our mobile experience from scratch. The new app is faster, more intuitive, and our customers love it. Mobile conversions jumped 45% in the first month.",
    rating: 5,
    name: "Anna Becker",
    title: "Head of Product, ShopWell Europe",
    project: "Mobile Commerce App",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    id: 12,
    country: "US",
    industry: "BLOCKCHAIN & SECURITY",
    result: "Zero downtime migration",
    quote:
      "Migrating our entire infrastructure to a new blockchain protocol was daunting. InApps handled it with zero downtime. Their expertise in distributed systems is world-class.",
    rating: 5,
    name: "Ryan Cooper",
    title: "CTO, ChainBridge Labs",
    project: "Blockchain Migration",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face&auto=format",
  },
];

const countryFlags: Record<string, string> = {
  GB: "\uD83C\uDDEC\uD83C\uDDE7",
  SG: "\uD83C\uDDF8\uD83C\uDDEC",
  VN: "\uD83C\uDDFB\uD83C\uDDF3",
  AU: "\uD83C\uDDE6\uD83C\uDDFA",
  DE: "\uD83C\uDDE9\uD83C\uDDEA",
  US: "\uD83C\uDDFA\uD83C\uDDF8",
};

const countryNames: Record<string, string> = {
  GB: "United Kingdom",
  SG: "Singapore",
  VN: "Vietnam",
  AU: "Australia",
  DE: "Germany",
  US: "United States",
};

const industries = ["All", ...Array.from(new Set(reviews.map((r) => r.industry)))];

const QUOTE_LIMIT = 140;

export default function ClientStoriesPage() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const filteredReviews = activeIndustry === "All" ? reviews : reviews.filter((r) => r.industry === activeIndustry);

  const toggleExpand = (id: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
            <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">

              <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
                What Our Clients <span className="text-[#ef5023]">Say</span>
              </h1>

              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
                Every word is from a real client at a real company: CTOs, founders, and VPs Engineering who trusted InApps to build their products across ODC, staff augmentation, and project engagements.
              </p>

              <div className="flex items-center gap-[12px] pt-[4px]">
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
              <div className="flex items-center gap-[12px] pt-[12px]">
                {[
                  { score: "4.9/5", platform: "Clutch.co", reviews: "48+ reviews" },
                  { score: "4.8/5", platform: "GoodFirms", reviews: "32+ reviews" },
                  { score: "4.7/5", platform: "Google", reviews: "60+ reviews" },
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
          {/* Subtle diagonal lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stat-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#000" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stat-lines)"/>
          </svg>
          <div className="relative max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-[24px]">

            {/* Clutch badge + Rating */}
            <div className="flex items-center gap-[20px]">
              <div className="flex-shrink-0 flex flex-col items-center justify-center rounded-[10px] px-[16px] py-[10px]" style={{ background: "#ef4223" }}>
                <span className="text-[7px] font-bold tracking-[1px] uppercase text-white/80 leading-[1]">Top Development Company</span>
                <span className="text-[18px] font-black text-white leading-[1.1] mt-[1px]" style={{ fontFamily: "Georgia, serif" }}>clutch</span>
                <span className="text-[7px] font-semibold tracking-[0.5px] uppercase text-white/60 leading-[1] mt-[1px]">Vietnam 2024</span>
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="font-black text-[#1a1a2e] text-[26px] leading-[1]" style={{ letterSpacing: "-0.5px" }}>4.9 / 5.0</span>
                <div className="flex gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[14px]" style={{ color: "#f59e0b" }}>{"\u2605"}</span>
                  ))}
                </div>
                <span className="text-[13px]" style={{ color: "#888" }}>48+ verified reviews on Clutch.co</span>
              </div>
            </div>

            {/* Top badges + CTA */}
            <div className="flex items-center gap-[14px] flex-wrap">
              <div className="flex flex-col items-center justify-center rounded-[12px] px-[32px] py-[16px]" style={{ background: "#f3f3f3" }}>
                <span className="font-black text-[#1a1a2e] text-[20px] leading-[1]">Top 1000</span>
                <span className="text-[12px] mt-[3px]" style={{ color: "#666" }}>Global Service Providers</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-[12px] px-[32px] py-[16px]" style={{ background: "#f3f3f3" }}>
                <span className="font-black text-[#1a1a2e] text-[20px] leading-[1]">Top 25</span>
                <span className="text-[12px] mt-[3px]" style={{ color: "#666" }}>Vietnam IT Companies</span>
              </div>
              <a
                href="https://clutch.co/profile/inapps-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[6px] px-[24px] h-[48px] rounded-[10px] font-bold text-[14px] text-white whitespace-nowrap transition-all hover:brightness-110"
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
            transform: translateY(-8px) scale(1.01);
            border-color: rgba(239,80,35,0.3) !important;
            box-shadow: 0 20px 50px rgba(239,80,35,0.10), 0 8px 20px rgba(0,0,0,0.06) !important;
          }
          .rv-card:hover::after {
            transform: scaleX(1);
          }
          @media (max-width: 639px) { .rv-grid { grid-template-columns: 1fr !important; } }
          @media (min-width: 640px) and (max-width: 1023px) { .rv-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
        <section id="reviews" className="relative px-[16px] md:px-[40px] py-[64px] md:py-[100px] overflow-hidden" style={{ background: "#fafafa" }}>

          {/* Decorative background */}
          <div className="absolute pointer-events-none" style={{ top: "-100px", right: "-60px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div className="absolute pointer-events-none" style={{ bottom: "-80px", left: "-40px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(239,80,35,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
          <div className="absolute pointer-events-none" style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(239,80,35,0.03) 0%, transparent 60%)", borderRadius: "50%" }} />
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rv-dots-bg" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="#ef5023"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rv-dots-bg)"/>
          </svg>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 1 }}>

            {/* Heading */}
            <div className="flex flex-col gap-[12px] max-w-[700px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">CLIENT REVIEWS</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                12 Verified <span className="text-[#ef5023]">Client Reviews</span>
              </h2>
              <p className="text-[16px] leading-[1.7]" style={{ color: "#666" }}>
                Clients from 48+ verified Clutch reviews. Representatives from the UK, US, Singapore, Australia, Germany, and Vietnam.
              </p>
            </div>

            {/* Industry filter tabs */}
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

            {/* Grid */}
            <div
              className="rv-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
            >
              {filteredReviews.map((r) => {
                const isLong = r.quote.length > QUOTE_LIMIT;
                const isExpanded = expandedCards.has(r.id);
                const displayQuote = isLong && !isExpanded ? r.quote.slice(0, QUOTE_LIMIT) + "..." : r.quote;

                return (
                <div
                  key={r.id}
                  className="rv-card flex flex-col rounded-[16px] p-[24px] gap-[14px] overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  {/* Verified badge + Country */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-[5px] rounded-full px-[10px] py-[3px]" style={{ background: "rgba(5,150,105,0.06)", border: "1px solid rgba(5,150,105,0.15)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1l1.3.8 1.5-.2.5 1.4 1.3.7-.2 1.5L11 6l-.6 1.3.2 1.5-1.3.7-.5 1.4-1.5-.2L6 11l-1.3-.8-1.5.2-.5-1.4-1.3-.7.2-1.5L1 6l.6-1.3-.2-1.5 1.3-.7.5-1.4 1.5.2L6 1z" fill="#059669"/>
                        <path d="M4.5 6l1 1 2-2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[10px] font-bold" style={{ color: "#059669" }}>Clutch Verified</span>
                    </div>
                    <span className="text-[12px] font-medium rounded-[4px] px-[7px] py-[2px]" style={{ color: "#555", background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.06)" }}>
                      {countryFlags[r.country] || ""} {countryNames[r.country] || r.country}
                    </span>
                  </div>

                  {/* Industry */}
                  <span className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>
                    {r.industry}
                  </span>

                  {/* Result badge */}
                  <div
                    className="inline-flex items-center gap-[6px] self-start rounded-full px-[12px] py-[5px]"
                    style={{ background: "rgba(239,80,35,0.06)", border: "1px solid rgba(239,80,35,0.12)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[12px] font-semibold" style={{ color: "#ef5023" }}>{r.result}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-[14px] leading-[1.75] flex-1" style={{ color: "#444" }}>
                    &ldquo;{displayQuote}&rdquo;
                    {isLong && (
                      <button
                        onClick={() => toggleExpand(r.id)}
                        className="ml-[4px] font-semibold text-[13px] cursor-pointer hover:underline"
                        style={{ color: "#ef5023", background: "none", border: "none", padding: 0 }}
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-[10px] pt-[14px] mt-auto" style={{ borderTop: "1px solid rgba(239,80,35,0.10)" }}>
                    <img src={r.avatar} alt={r.name} className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0" style={{ border: "2px solid rgba(239,80,35,0.2)" }} />
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-[13px] text-[#0a0a0a]">{r.name}</span>
                      <span className="text-[11px] leading-[1.4]" style={{ color: "#888" }}>{r.title}</span>
                      <span className="text-[11px] font-semibold leading-[1.4]" style={{ color: "#ef5023" }}>{r.project}</span>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>



          </div>
        </section>

        {/* ── External Platforms Banner ── */}
        <section className="px-[16px] md:px-[40px] py-[40px] md:py-[56px]" style={{ background: "#fff", borderTop: "1px solid #e8e8e8" }}>
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
              <div className="relative flex items-center gap-[12px] flex-shrink-0">
                <a
                  href="https://clutch.co/profile/inapps-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] px-[20px] h-[42px] rounded-[10px] font-bold text-[13px] text-white whitespace-nowrap transition-all hover:brightness-110"
                  style={{ background: "#ef5023", textDecoration: "none" }}
                >
                  View on Clutch.co →
                </a>
                <a
                  href="https://www.goodfirms.co/company/inapps-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] px-[20px] h-[42px] rounded-[10px] font-bold text-[13px] whitespace-nowrap transition-all hover:bg-[#f0f0f0]"
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="join-section-cross" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="0.6" fill="#ef5023"/>
                <line x1="18" y1="20" x2="22" y2="20" stroke="#ef5023" strokeWidth="0.3"/>
                <line x1="20" y1="18" x2="20" y2="22" stroke="#ef5023" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#join-section-cross)"/>
          </svg>
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
                Join 300+ companies who trust InApps
              </h3>
              <p className="relative text-[15px] leading-[1.6] max-w-[480px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                Start with a free 30-minute discovery call. No commitment required.
              </p>
              <div className="relative flex items-center gap-[12px] mt-[4px]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-[6px] px-[24px] h-[44px] rounded-[10px] font-bold text-[14px] text-[#ef5023] whitespace-nowrap transition-all hover:brightness-95"
                  style={{ background: "#fff", textDecoration: "none" }}
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-[6px] px-[24px] h-[44px] rounded-[10px] font-bold text-[14px] text-white whitespace-nowrap transition-all hover:bg-white/10"
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
    </div>
  );
}
