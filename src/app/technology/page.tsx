"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import TechnologyCategories from "@/components/technology/TechnologyCategories";

// ─── Data ────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    label: "Industry Focus",
    question: "Which industries do you specialize in?",
    answer:
      "We have deep expertise in Fintech, Healthcare, Logistics, and E-commerce. Each practice area is staffed with domain specialists who understand regulatory requirements, industry-specific architecture patterns, and the competitive landscape — so your team isn't educating ours from scratch.",
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
      "Yes — we've taken products from zero to 50,000+ monthly active users and from MVP to enterprise-grade platforms serving multiple markets. Our architecture decisions account for 10× growth so you don't pay for a rewrite eighteen months in.",
  },
  {
    label: "Results",
    question: "How do you measure and report on business outcomes?",
    answer:
      "We agree on KPIs before the first sprint — conversion rates, latency targets, cost-per-transaction, or whatever metric drives value for your business. Monthly reports track progress against those baselines, and post-launch retros document what moved the needle and why.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function TechnologyPage() {
  const [faqIndex, setFaqIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />

      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section
          className="relative px-[40px] overflow-hidden flex flex-col items-start gap-[28px]"
          style={{ minHeight: "850px", paddingTop: "228px", paddingBottom: "100px" }}
        >
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
              <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
                Industry{" "}
                <span style={{ color: "#ef5023" }}>Expertise</span>
              </h1>
              <p className="text-[20px] leading-[32px]" style={{ color: "#ffffff" }}>
                We deliver{" "}
                <span className="font-semibold">high-impact technology solutions</span>
                {" "}tailored to the unique challenges of Fintech, Healthcare, Logistics, and E-commerce — transforming industries through digital excellence.
              </p>
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

        {/* ── S_NEW_A: Technology Categories ── */}
        <TechnologyCategories />

{/* ── S5: FAQ ── */}
        <section className="px-[40px] py-[56px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>COMMON QUESTIONS</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                Everything you need <span style={{ color: "#ef5023" }}>to know</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[24px]">
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
                      <span className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#bbb" }}>{item.label}</span>
                      <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#888" }}>{item.question}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="rounded-[16px] p-[36px] flex flex-col gap-[20px]" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#ef5023]">{faqItems[faqIndex].label}</span>
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
        <section className="relative px-[40px] py-[48px] overflow-hidden" style={{ background: "#0d0d0d" }}>
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
                  Tell us about your project — no pitch, no obligation.
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