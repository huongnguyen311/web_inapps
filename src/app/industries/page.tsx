"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

// ─── Data ────────────────────────────────────────────────────────────────────

const industryCards = [
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Web3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    name: "Blockchain Development",
    desc: "We build secure smart contracts, DeFi protocols, and NFT platforms. From token launches to full Web3 ecosystems, we deliver scalable on-chain solutions.",
    slug: "blockchain",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
  },
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Retail",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    name: "E-commerce Development",
    desc: "From storefronts to checkout flows, we engineer high-converting e-commerce platforms. POS systems, inventory management, and seamless payment integrations included.",
    slug: "e-commerce",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Finance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    name: "Fintech",
    desc: "We deliver payment gateways, trading platforms, and KYC pipelines built for compliance. Engineered for security, speed, and financial-grade reliability.",
    slug: "fintech",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Education",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    name: "EdTech",
    desc: "We build LMS platforms, interactive e-learning tools, and virtual classroom experiences. Designed to engage learners and scale to thousands of concurrent users.",
    slug: "edtech",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Health",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    name: "Healthcare",
    desc: "We develop EHR systems, telemedicine platforms, and health data pipelines with HIPAA compliance built in from day one, not added as an afterthought.",
    slug: "healthcare",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Scheduling",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    name: "Booking Platform",
    desc: "We engineer appointment scheduling, reservation systems, and real-time availability engines. Built to handle high concurrency without double-bookings or race conditions.",
    slug: "booking",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
  },
  {
    color: "#ef5023",
    colorBg: "rgba(239,80,35,0.08)",
    tag: "Platform",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: "Marketplace",
    desc: "We build multi-vendor platforms with seller onboarding, bidding systems, and escrow flows. From niche verticals to large-scale two-sided marketplaces.",
    slug: "marketplace",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
];

const faqItems = [
  {
    label: "Industry Focus",
    question: "Which industries do you specialize in?",
    answer:
      "We have deep expertise in Fintech, Healthcare, Logistics, and E-commerce. Each practice area is staffed with domain specialists who understand regulatory requirements, industry-specific architecture patterns, and the competitive landscape   so your team isn't educating ours from scratch.",
  },
  {
    label: "Compliance",
    question: "How do you handle industry-specific compliance requirements?",
    answer:
      "Compliance is built into our delivery process, not bolted on at the end. For Fintech we work within PCI-DSS and GDPR frameworks; Healthcare engagements are designed around HIPAA and HL7 from day one. Our compliance architects review every milestone before code ships to production.",
  },
  {
    label: "Scale",
    question: "Can you scale solutions from startup to enterprise level?",
    answer:
      "Yes   we've taken products from zero to 50,000+ monthly active users and from MVP to enterprise-grade platforms serving multiple markets. Our architecture decisions account for 10× growth so you don't pay for a rewrite eighteen months in.",
  },
  {
    label: "Results",
    question: "How do you measure and report on business outcomes?",
    answer:
      "We agree on KPIs before the first sprint   conversion rates, latency targets, cost-per-transaction, or whatever metric drives value for your business. Monthly reports track progress against those baselines, and post-launch retros document what moved the needle and why.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  const [faqIndex, setFaqIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />

      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section
          className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px] pb-[60px] md:pb-[100px]"
        >
          {/* Banner background */}
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 5.png"
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
            {/* Heading */}
            <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
              Industry{" "}
              <span style={{ color: "#ef5023" }}>Expertise</span>
            </h1>

            {/* Subtext */}
            <p className="text-[20px] leading-[32px]" style={{ color: "#ffffff" }}>
              We deliver{" "}
              <span className="font-semibold">high-impact technology solutions</span>
              {" "}tailored to the unique challenges of Fintech, Healthcare, Logistics, and E-commerce   transforming industries through digital excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
              <Link
                href="/contact"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Start a Project
              </Link>
              <Link
                href="/case-studies"
                className="bg-transparent text-white font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
                style={{ textDecoration: "none" }}
              >
                View Case Studies →
              </Link>
            </div>
          </div>
          </div>
        </section>

        {/* ── S2: Trusted Logos ── */}
        <ServiceTrustedLogos />

        {/* ── S4: Industry Cards ── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#ffffff" }}>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[56px]">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>WHAT WE BUILD</p>
                <h2 className="font-black text-[#0a0a0a] text-[28px] leading-[36px] md:text-[42px] md:leading-[50px] tracking-[-1.5px]">
                  Our <span style={{ color: "#ef5023" }}>Industries</span>
                </h2>
                <p className="text-[16px] leading-[1.75]" style={{ color: "#666", maxWidth: "520px" }}>
                  Specialized engineering expertise across fast-growing verticals, from regulated finance to cutting-edge Web3.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-[8px] font-semibold text-[14px] px-[24px] h-[44px] rounded-[10px] transition-colors hover:bg-[#d94010]"
                style={{ background: "#ef5023", color: "#ffffff", textDecoration: "none", boxShadow: "0 6px 20px rgba(239,80,35,0.35)" }}
              >
                Start a project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {industryCards.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-[4px]"
                  style={{
                    textDecoration: "none",
                    background: "#ffffff",
                    border: "1.5px solid #d8d8d8",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={industry.img}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)" }} />

                    {/* Icon badge bottom-left */}
                    <div
                      className="absolute bottom-[14px] left-[14px] flex items-center justify-center rounded-[14px]"
                      style={{
                        width: "52px",
                        height: "52px",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,0.3)",
                        color: "#ffffff",
                      }}
                    >
                      {industry.icon}
                    </div>

                    {/* Arrow bottom-right */}
                    <div
                      className="absolute bottom-[14px] right-[14px] flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[6px] group-hover:translate-x-0"
                      style={{ width: "36px", height: "36px", background: industry.color }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-[10px] px-[24px] py-[22px]">
                    {/* color accent bar */}
                    <div className="w-[32px] h-[3px] rounded-full" style={{ background: industry.color }} />
                    <span className="font-bold text-[17px] leading-[1.3] tracking-[-0.3px]" style={{ color: "#0a0a0a" }}>{industry.name}</span>
                    <span className="text-[14px] leading-[1.7]" style={{ color: "#666" }}>{industry.desc}</span>
                    <div className="mt-[4px] pt-[14px]" style={{ borderTop: "1px solid #f4f4f4" }}>
                      <span className="inline-flex items-center gap-[6px] text-[12px] font-semibold" style={{ color: industry.color }}>
                        Explore
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5h6M5 2l3 3-3 3" stroke={industry.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* hover border */}
                  <div
                    className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ border: `1.5px solid ${industry.color}` }}
                  />
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── S5: FAQ ── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">COMMON QUESTIONS</p>
                <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                  Everything you need <span style={{ color: "#ef5023" }}>to know</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[24px]">
              {/* left - question list */}
              <div className="flex flex-col gap-[4px]">
                {faqItems.map((item, i) => (
                  <button
                    key={item.question}
                    onClick={() => setFaqIndex(i)}
                    aria-expanded={faqIndex === i}
                    aria-label={item.question}
                    className="group text-left flex items-start gap-[16px] px-[20px] py-[11px] rounded-[12px] transition-all duration-150 border-none cursor-pointer"
                    style={{
                      background: faqIndex === i ? "rgba(239,80,35,0.07)" : "transparent",
                      boxShadow: faqIndex === i ? "0 2px 12px rgba(239,80,35,0.08)" : "none",
                    }}
                  >
                    <div
                      className="w-[3px] rounded-full flex-shrink-0 mt-[2px] transition-all duration-150"
                      style={{ height: "18px", background: faqIndex === i ? "#ef5023" : "transparent" }}
                    />
                    <div className="flex flex-col gap-[2px]">
                      <span className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: faqIndex === i ? "#ef5023" : "#bbb" }}>{item.label}</span>
                      <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#888" }}>{item.question}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* right - answer panel */}
              <div className="rounded-[16px] p-[36px] flex flex-col gap-[20px]" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ef5023]">{faqItems[faqIndex].label}</span>
                  <h3 className="font-black text-[#0a0a0a] text-[20px] leading-[1.35] tracking-[-0.4px]">
                    {faqItems[faqIndex].question}
                  </h3>
                </div>
                <p className="text-[#666] text-[14px] leading-[1.8]">
                  {faqItems[faqIndex].answer}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── S7: Final CTA ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#0d0d0d" }}>
          {/* constellation background */}
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
              <line x1="200" y1="60"  x2="260" y2="120"/>
              <line x1="480" y1="80"  x2="520" y2="140"/>
              <line x1="760" y1="90"  x2="800" y2="145"/>
              <line x1="340" y1="30"  x2="380" y2="110"/>
              <line x1="620" y1="40"  x2="660" y2="130"/>
              <line x1="900" y1="50"  x2="940" y2="140"/>
            </g>
            <g fill="white">
              <circle cx="80"   cy="20"  r="1.5" opacity="0.25"/>
              <circle cx="340"  cy="30"  r="1.8" opacity="0.28"/>
              <circle cx="620"  cy="40"  r="1.5" opacity="0.25"/>
              <circle cx="900"  cy="50"  r="1.8" opacity="0.28"/>
              <circle cx="1160" cy="40"  r="1.5" opacity="0.22"/>
              <circle cx="260"  cy="120" r="1.2" opacity="0.2"/>
              <circle cx="520"  cy="140" r="1.2" opacity="0.2"/>
              <circle cx="800"  cy="145" r="1.2" opacity="0.18"/>
            </g>
            <g fill="#ef5023">
              <circle cx="200"  cy="60" r="2.5" opacity="0.55"/>
              <circle cx="480"  cy="80" r="2"   opacity="0.5"/>
              <circle cx="760"  cy="90" r="2.5" opacity="0.5"/>
              <circle cx="1040" cy="80" r="2"   opacity="0.45"/>
            </g>
            <g fill="none" stroke="#ef5023">
              <circle cx="200" cy="60" r="6" strokeWidth="0.6" opacity="0.18"/>
              <circle cx="480" cy="80" r="6" strokeWidth="0.6" opacity="0.15"/>
              <circle cx="760" cy="90" r="6" strokeWidth="0.6" opacity="0.18"/>
            </g>
          </svg>

          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 1 }}>
            <div
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px] sm:gap-[48px] px-[24px] sm:px-[56px] py-[36px] sm:py-[44px] rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
                border: "1px solid rgba(239,80,35,0.18)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute pointer-events-none blur-[80px]"
                style={{
                  left: "-60px", top: "50%", transform: "translateY(-50%)",
                  width: "240px", height: "240px",
                  background: "rgba(239,80,35,0.12)",
                  borderRadius: "50%",
                }}
              />

              <div className="relative flex flex-col gap-[8px] min-w-0" style={{ zIndex: 2 }}>
                <h2 className="font-black text-white text-[28px] leading-[36px] tracking-[-0.6px]">
                  Ready to Lead Your Industry?
                </h2>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#888" }}>
                  Tell us about your project   no pitch, no obligation.
                </p>
              </div>

              <Link
                href="/contact"
                className="relative shrink-0 z-10 inline-flex items-center gap-[10px] px-[28px] h-[48px] rounded-[12px] font-bold text-[14px] overflow-hidden"
                style={{
                  background: "#ef5023",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  whiteSpace: "nowrap",
                }}
              >
                <span>Start a Conversation</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}