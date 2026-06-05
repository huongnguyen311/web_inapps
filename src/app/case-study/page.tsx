"use client";

import { useState } from "react";

const faqItems = [
  {
    label: "Our Work",
    question: "What industries do your case studies cover?",
    answer: "Our portfolio spans Fintech, Healthcare, Logistics, E-commerce, SaaS, and more. Each case study reflects a real engagement , from MVP builds to enterprise-scale platforms serving millions of users.",
  },
  {
    label: "Results",
    question: "Are the metrics in your case studies real?",
    answer: "Yes , every metric is sourced directly from client-reported outcomes and tracked KPIs agreed at the start of the engagement. We don't publish vanity numbers.",
  },
  {
    label: "Relevance",
    question: "Can I find case studies similar to my use case?",
    answer: "Use the category filter to narrow by industry. If you don't see your exact domain, reach out , we likely have relevant experience we haven't published yet due to NDA constraints.",
  },
  {
    label: "Process",
    question: "How long does a typical project take?",
    answer: "MVPs typically ship in 6–12 weeks. Full-scale platforms range from 3 to 12 months depending on scope. Every engagement starts with a discovery phase to set realistic milestones before we write a single line of code.",
  },
  {
    label: "Next Steps",
    question: "How do I start a project like these?",
    answer: "Book a free 30-minute discovery call. We'll review your requirements, suggest the right engagement model, and send a transparent proposal , no pitch decks, no obligation.",
  },
];
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-study/CaseStudyCard";
import CaseStudyFilterBar from "@/components/case-study/CaseStudyFilterBar";
import CaseStudyPagination from "@/components/case-study/CaseStudyPagination";
import CaseStudyThumbnail from "@/components/case-study/CaseStudyThumbnail";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import { caseStudies, Category, Service } from "@/data/caseStudies";

const ITEMS_PER_PAGE = 10;

export default function CaseStudyListPage() {
  const [activeTab, setActiveTab] = useState<"industry" | "service">("industry");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeService, setActiveService] = useState<Service>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [faqIndex, setFaqIndex] = useState(0);

  const filtered =
    activeTab === "industry"
      ? activeCategory === "All"
        ? caseStudies
        : caseStudies.filter((cs) => cs.category === activeCategory)
      : activeService === "All"
        ? caseStudies
        : caseStudies.filter((cs) => cs.service === activeService);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handleTabChange(tab: "industry" | "service") {
    setActiveTab(tab);
    setCurrentPage(1);
  }

  function handleCategoryChange(cat: Category) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleServiceChange(svc: Service) {
    setActiveService(svc);
    setCurrentPage(1);
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f7f7f8" }}>
      <Header />

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <style>{`
          @media (max-width: 1023px) {
            .cs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 639px) {
            .cs-grid { grid-template-columns: 1fr !important; }
            .cs-main { padding: 32px 16px 64px !important; }
          }
        `}</style>

        {/* ── S1: Hero Banner (original) ── */}
        <section
          className="relative px-[40px] overflow-hidden flex flex-col items-start gap-[28px]"
          style={{ minHeight: "850px", paddingTop: "228px", paddingBottom: "100px" }}
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
            <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
              From MVP to Scale{" "}
              <span style={{ color: "#ef5023" }}>Outcomes, Not Promises</span>
            </h1>

            <p className="text-[#ffffff] text-[20px] leading-[32px]">
              Senior engineers. Verified client metrics. {caseStudies.length} engagements across fintech, healthcare, logistics, and e-commerce. For startups and Fortune 500 alike.
            </p>


            <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
              <a
                href="#case-study-grid"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Explore Our Work ↓
              </a>
              <Link
                href="/contact"
                className="bg-transparent text-white font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
                style={{ textDecoration: "none" }}
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
          </div>
        </section>

        {/* ── S2: Trusted Logos (original) ── */}
        <ServiceTrustedLogos />

        {/* ── Filter Bar ── */}
        <CaseStudyFilterBar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          activeService={activeService}
          onServiceChange={handleServiceChange}
        />

        {/* ── Grid ── */}
        <div id="case-study-grid" className="px-[40px]" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <div className="cs-main max-w-[1320px] mx-auto">

          <div className="flex flex-col gap-[10px] mb-[40px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">OUR PORTFOLIO</p>
            <h2 className="font-black text-[#0a0a0a] text-[38px] leading-[46px] tracking-[-1.5px]">
              Proven results across <span className="text-[#ef5023]">every industry</span>
            </h2>
          </div>

          {/* ── Latest case study   full-width hero card ── */}
          {activeCategory === "All" && currentPage === 1 && caseStudies[0] && (() => {
            const latest = caseStudies[0];
            return (
              <>
              <style>{`
                .cs-latest-card:hover { border-color: rgba(239,80,35,.3) !important; transform: translateY(-5px); box-shadow: 0 16px 48px rgba(239,80,35,.1), 0 0 0 1px rgba(239,80,35,.12) !important; }
                .cs-latest-card:hover .cs-latest-link { gap: 10px; }
                .cs-latest-card:hover .cs-latest-arr { transform: translateX(3px); }
              `}</style>
              <Link
                href={`/case-study/${latest.slug}`}
                className="cs-latest-card"
                style={{
                  textDecoration: "none",
                  display: "grid",
                  gridTemplateColumns: "3fr 2fr",
                  minHeight: 400,
                  borderRadius: 20,
                  border: "1.5px solid #ebebeb",
                  background: "#fff",
                  boxShadow: "0 2px 16px rgba(0,0,0,.06)",
                  overflow: "hidden",
                  marginBottom: 28,
                  transition: "border-color .25s, transform .25s, box-shadow .25s",
                }}
              >
                {/* Thumbnail */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: 400 }}>
                  {latest.image ? (
                    <img src={latest.image} alt={latest.name} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
                  ) : (
                    <CaseStudyThumbnail category={latest.category} size="large" />
                  )}
                  {/* right-edge fade */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to right, transparent 70%, rgba(255,255,255,.6) 100%)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* Body */}
                <div style={{ padding: "44px 44px 44px 36px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  {/* Category pill */}
                  <div style={{
                    display: "inline-flex", alignSelf: "flex-start",
                    background: "#ef5023", color: "#fff",
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "4px 12px", borderRadius: 100,
                    marginBottom: 16, position: "relative",
                  }}>
                    {latest.category}
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 900, color: "#0a0a0a", lineHeight: 1.25, letterSpacing: "-.6px", marginBottom: 14, position: "relative" }}>
                    {latest.name}
                  </h3>
                  <div style={{ width: 36, height: 2.5, background: "#ef5023", borderRadius: 2, marginBottom: 14, position: "relative" }} />
                  <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7, marginBottom: 28, position: "relative" }}>
                    {latest.shortDescription}
                  </p>
                  <div className="cs-latest-link" style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "#ef5023", fontSize: 13, fontWeight: 700,
                    transition: "gap .15s", position: "relative",
                  }}>
                    Read Case Study
                    <span className="cs-latest-arr" style={{
                      fontSize: 15, display: "inline-block",
                      transition: "transform .15s",
                    }}>→</span>
                  </div>
                </div>
              </Link>
              </>
            );
          })()}

          {paginated.length === 0 ? (
            <p style={{ color: "#aaa", fontSize: 16, textAlign: "center", padding: "64px 0" }}>
              No case studies found in this category.
            </p>
          ) : (
            <>
              <div className="cs-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 28,
                marginBottom: 60,
              }}>
                {paginated.map((cs) => (
                  <CaseStudyCard key={cs.slug} cs={cs} />
                ))}
              </div>

              <CaseStudyPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={setCurrentPage}
              />
            </>
          )}
        </div>
        </div>

        {/* ── Common Questions ── */}
        <section className="px-[40px]" style={{ paddingTop: "70px", paddingBottom: "70px", background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <style>{`
            @keyframes faqFadeCs { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
            .animate-faq-fade-cs { animation: faqFadeCs 0.25s ease forwards; }
          `}</style>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">COMMON QUESTIONS</p>
                <h2 className="font-black text-[#0a0a0a] text-[38px] leading-[46px] tracking-[-1.5px]">
                  Everything you need <span className="text-[#ef5023]">to know</span>
                </h2>
              </div>
            </div>

            <div className="grid gap-[24px]" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
              <div className="flex flex-col gap-[4px]">
                {faqItems.map(({ label, question }, i) => (
                  <button
                    key={label}
                    onClick={() => setFaqIndex(i)}
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
                      <span className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: faqIndex === i ? "#ef5023" : "#bbb" }}>{label}</span>
                      <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#888" }}>{question}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div key={faqIndex} className="rounded-[16px] p-[36px] flex flex-col gap-[20px] animate-faq-fade-cs" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
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

      </main>

      <Footer />
    </div>
  );
}