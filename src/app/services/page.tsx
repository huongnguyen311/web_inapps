"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

const faqItems = [
  {
    label: "Getting Started",
    question: "How quickly can you kick off a project?",
    answer: "We can have your team ready within 2 weeks of the first call. Our pre-vetted talent pool means no lengthy recruitment cycles , just fast, reliable onboarding.",
  },
  {
    label: "AI & Automation",
    question: "What kinds of AI solutions do you build?",
    answer: "We build custom AI agents, agentic workflow pipelines, LLM integrations, and ML models for production. Whether you need a chatbot, a document processor, or a full autonomous workflow , we scope and build it end-to-end.",
  },
  {
    label: "Engagement",
    question: "Which engagement model is right for my team?",
    answer: "If you need long-term capacity, an Offshore Dev Center gives you a fully managed dedicated team. If you need to scale fast, Staff Augmentation slots engineers directly into your team. For fixed-scope work, project-based delivery with clear milestones is the cleanest option.",
  },
  {
    label: "Quality",
    question: "How do you ensure code quality and delivery?",
    answer: "Every project includes dedicated QA, code reviews, and CI/CD pipelines. We run automated test suites alongside manual regression cycles so nothing slips to production. Post-launch support is included in all engagements.",
  },
  {
    label: "IP & Legal",
    question: "Who owns the code and intellectual property?",
    answer: "You do , 100%. Every engagement includes a full IP transfer clause and NDA signed before we begin. Your code is yours from the first commit.",
  },
];

export default function ServicesPage() {
  const [faqIndex, setFaqIndex] = useState(0);
  const aiScrollRef = useRef<HTMLDivElement>(null);

  const specializations = [
    {
      number: "01",
      icon: "🤝",
      name: "Engagement Models",
      services: [
        { icon: "🏢", name: "Dedicated Development Team", slug: "dedicated-development-team", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", desc: "Dedicated offshore team, fully managed." },
        { icon: "👥", name: "Staff Augmentation", slug: "staff-augmentation", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", desc: "Scale your team with vetted engineers." },
        { icon: "📋", name: "Project-Based", slug: "project-based-dev", img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80", desc: "Fixed-scope delivery with clear milestones." },
        { icon: "🔧", name: "Managed Services", slug: "managed-services", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", desc: "Full ownership of your tech operations." },
      ],
    },
    {
      number: "02",
      icon: "🧠",
      name: "AI & Automation",
      services: [
        { icon: "🤖", name: "AI Agent Development", slug: "ai-agent-development", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", desc: "Autonomous agents for complex tasks." },
        { icon: "⚡", name: "Agentic Workflow Automation", slug: "agentic-workflow-automation", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", desc: "End-to-end AI-driven process flows." },
        { icon: "✨", name: "Generative AI Integration", slug: "generative-ai-integration", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", desc: "LLM-powered features in your product." },
        { icon: "🔬", name: "AI Consulting & Strategy", slug: "ai-consulting-strategy", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", desc: "Assess AI readiness and define your roadmap." },
      ],
    },
    {
      number: "03",
      icon: "⚙️",
      name: "Engineering",
      services: [
        { icon: "💻", name: "Custom Software Development", slug: "custom-software-development", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80", desc: "Tailored solutions built from scratch." },
        { icon: "🚀", name: "MVP & Rapid Prototyping", slug: "mvp-rapid-prototyping", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", desc: "Validate ideas fast, ship lean MVPs." },
        { icon: "☁️", name: "Cloud & DevOps", slug: "cloud-devops", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", desc: "CI/CD, infra, and cloud migration." },
        { icon: "🔗", name: "System Integration", slug: "system-integration", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", desc: "Connect APIs, ERPs, and data sources." },
        { icon: "📱", name: "Mobile App Development", slug: "mobile-app-development", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", desc: "Native and cross-platform apps for iOS and Android." },
        { icon: "🛠️", name: "Software Maintenance", slug: "software-maintenance", img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80", desc: "Ongoing support & tech debt reduction." },
      ],
    },
    {
      number: "04",
      icon: "✨",
      name: "Quality & Design",
      services: [
        { icon: "🧪", name: "QA & Testing", slug: "qa-testing", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", desc: "Manual and automated quality assurance." },
        { icon: "🎨", name: "UI/UX Design", slug: "ui-ux-design", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", desc: "User-centered design & prototyping." },
        { icon: "🔍", name: "Tech Audit & Remediation", slug: "tech-audit-remediation", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", desc: "Code & architecture deep-dive." },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative px-[40px] overflow-hidden flex flex-col items-start gap-[28px]" style={{ minHeight: "850px", paddingTop: "228px", paddingBottom: "100px" }}>
          {/* Banner background */}
          <div className="absolute inset-0">
            <img
              src="/banner.png"
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
            <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px] whitespace-nowrap">
              AI-Powered <span className="text-[#ef5023]">Software</span> Solutions
              <br />for Growing Businesses
            </h1>

            {/* Subtext */}
            <p className="text-[#ffffff] text-[20px] leading-[32px] font-normal">
              We build scalable web, mobile, and AI products tailored to your needs. From idea to launch, our engineering team helps you move faster and scale with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
              <Link
                href="/contact"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Start Your Project
              </Link>
              <Link
                href="/case-study"
                className="bg-transparent text-white font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
                style={{ textDecoration: "none" }}
              >
                See Case Study →
              </Link>
            </div>
          </div>
          </div>
        </section>

        <ServiceTrustedLogos />

        {/* ── All Service Sections ── */}
        <section>

          {/* shared card renderer */}
          {([
            {
              num: "01", title: "Engagement Models", sub: "Work with us the way that fits your team",
              count: "4 models", dark: false,
              bg: "#ffffff", cardBg: "#fff4ef", cardBorder: "#fad4c0", illoBg: "#ffe9df",
              items: specializations[0].services.map(s => ({ service: s, tag: "", highlight: false })),
            },
            {
              num: "02", title: "AI & Automation", sub: "Intelligent systems that work while you sleep",
              count: "4 services", dark: false,
              bg: "#fafafa", cardBg: "#fff4ef", cardBorder: "#fad4c0", illoBg: "#ffe9df",
              items: specializations[1].services.map(s => ({ service: s, tag: "", highlight: false })),
            },
            {
              num: "03", title: "Engineering", sub: "Full-stack delivery from idea to production",
              count: "6 services", dark: false,
              bg: "#ffffff", cardBg: "#fff4ef", cardBorder: "#fad4c0", illoBg: "#ffe9df",
              items: specializations[2].services.map(s => ({ service: s, tag: "", highlight: false })),
            },
            {
              num: "04", title: "Quality & Design", sub: "Ship with confidence, delight every user",
              count: "3 services", dark: false,
              bg: "#fafafa", cardBg: "#fff4ef", cardBorder: "#fad4c0", illoBg: "#ffe9df",
              items: specializations[3].services.map(s => ({ service: s, tag: "", highlight: false })),
            },
          ] as const).map((spec) => (
            <div key={spec.num} style={{ borderBottom: "1px solid #e5e7eb" }}>

              {/* ── Banner ── */}
              <div
                className="px-[40px] py-[32px]"
                style={{ background: spec.dark ? "#f0f0f0" : "#f7f7f7", borderBottom: "1px solid #e8e8e8" }}
              >
                <div className="max-w-[1320px] mx-auto flex items-center justify-between">
                  <div className="flex items-center gap-[24px]">
                    {/* Number pill */}
                    <div
                      className="shrink-0 flex items-center justify-center rounded-[8px]"
                      style={{ width: "44px", height: "44px", background: "#ef5023" }}
                    >
                      <span className="font-black text-[13px] tabular-nums" style={{ color: "#ffffff", letterSpacing: "0.5px" }}>{spec.num}</span>
                    </div>
                    {/* Titles */}
                    <div className="flex flex-col gap-[3px]">
                      <span className="font-black text-[24px] leading-[1.1] tracking-[-0.6px]" style={{ color: "#111111" }}>{spec.title}</span>
                      <span className="text-[14px] leading-[1.5]" style={{ color: "#6b7280" }}>{spec.sub}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <span className="font-semibold text-[11px] tracking-[1.2px] uppercase" style={{ color: "#9ca3af" }}>{spec.count}</span>
                    <div className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: "#ef5023" }} />
                  </div>
                </div>
              </div>

              {/* ── Cards ── */}
              <div className="px-[40px] py-[32px]" style={{ background: spec.bg }}>
                <div className="max-w-[1320px] mx-auto">
                <div
                  ref={spec.items.length > 4 ? aiScrollRef : undefined}
                  className="overflow-x-auto pb-[8px]"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                <div
                  className="flex flex-row gap-[24px]"
                  style={{ width: "100%", flexWrap: spec.items.length > 4 ? "nowrap" : "wrap" }}
                >
                  {spec.items.map(({ service, tag, highlight }) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex flex-col rounded-[10px] overflow-hidden transition-all duration-200 hover:-translate-y-[2px] hover:border-[#ef5023]"
                      style={{
                        textDecoration: "none",
                        background: spec.cardBg,
                        border: highlight ? "1.5px solid #ef5023" : `1px solid ${spec.cardBorder}`,
                        transition: "transform 0.2s, border-color 0.15s",
                        flex: "0 0 calc(25% - 18px)",
                      }}
                    >
                      {/* Illustration */}
                      <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative", background: spec.illoBg }}>
                        <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
                        {tag && (
                          <div className="absolute top-[6px] left-[6px] px-[6px] py-[1px] rounded-full" style={{ background: highlight ? "#ef5023" : "rgba(0,0,0,0.08)" }}>
                            <span className="font-bold text-[8px] tracking-[0.6px] uppercase" style={{ color: highlight ? "#fff" : "#6b7280" }}>{tag}</span>
                          </div>
                        )}
                      </div>
                      {/* Text */}
                      <div className="flex items-center justify-between gap-[8px] px-[18px] py-[16px]">
                        <div className="flex flex-col gap-[6px] min-w-0">
                          <span className="font-extrabold text-[17px] leading-[1.3] tracking-[-0.3px] truncate" style={{ color: highlight ? "#ef5023" : "#0a0a0a" }}>{service.name}</span>
                          <span className="text-[14px] leading-[1.7]" style={{ color: "#888", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{service.desc}</span>
                        </div>
                        <div
                          className="shrink-0 flex items-center justify-center rounded-full transition-all duration-150 group-hover:translate-x-[2px]"
                          style={{ width: "28px", height: "28px", background: "rgba(239,80,35,0.1)", border: "1px solid rgba(239,80,35,0.2)", flexShrink: 0 }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="#ef5023" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                </div>
                {spec.items.length > 4 && (
                  <div className="flex items-center justify-center gap-[8px] pt-[24px]">
                    <button
                      onClick={() => {
                        const el = aiScrollRef.current;
                        if (!el) return;
                        el.scrollTo({ left: Math.max(el.scrollLeft - (280 + 24), 0), behavior: "smooth" });
                      }}
                      style={{
                        width: "44px", height: "44px", borderRadius: "50%",
                        background: "transparent",
                        border: "1.5px solid rgba(239,80,35,0.35)",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.15s",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button
                      onClick={() => {
                        const el = aiScrollRef.current;
                        if (!el) return;
                        el.scrollTo({ left: el.scrollLeft + (280 + 24), behavior: "smooth" });
                      }}
                      style={{
                        width: "44px", height: "44px", borderRadius: "50%",
                        background: "transparent",
                        border: "1.5px solid rgba(239,80,35,0.35)",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.15s",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                )}
                </div>
              </div>

            </div>
          ))}

        </section>

        {/* ── Common Questions ── */}
        <section className="px-[40px] py-[80px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <style>{`
            @keyframes faqFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
            .animate-faq-fade { animation: faqFade 0.25s ease forwards; }
          `}</style>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            {/* header */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">COMMON QUESTIONS</p>
                <h2 className="font-black text-[#0a0a0a] text-[38px] leading-[46px] tracking-[-1.5px]">
                  Everything you need <span className="text-[#ef5023]">to know</span>
                </h2>
              </div>
            </div>

            {/* two-column layout */}
            <div className="grid gap-[24px]" style={{ gridTemplateColumns: "1fr 1.2fr" }}>

              {/* left - question list */}
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
                      <span className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#bbb" }}>{label}</span>
                      <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#888" }}>{question}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* right - answer panel */}
              <div key={faqIndex} className="rounded-[16px] p-[36px] flex flex-col gap-[20px] animate-faq-fade" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
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

        {/* ── Bottom CTA strip ── */}
        <section className="px-[40px] py-[64px]" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1320px] mx-auto">
            <div
              className="relative flex items-center justify-between gap-[48px] px-[56px] py-[44px] rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
                border: "1px solid rgba(239,80,35,0.18)",
              }}
            >
              {/* Left glow */}
              <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full pointer-events-none blur-[80px]" style={{ background: "rgba(239,80,35,0.12)" }} />

              {/* Text */}
              <div className="relative flex flex-col gap-[8px] min-w-0">
                <h2 className="font-black text-[26px] leading-[1.15] tracking-[-0.6px]" style={{ color: "#ffffff" }}>
                  Not sure which service fits your situation?
                </h2>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#888888" }}>
                  Our team will review your requirements and recommend the right model&nbsp;- no pitch, no obligation.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="relative shrink-0 inline-flex items-center gap-[10px] px-[28px] py-[15px] rounded-[12px] font-bold text-[14px] overflow-hidden"
                style={{
                  background: "#ef5023",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  whiteSpace: "nowrap",
                }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(255,255,255,0.1) 0%, transparent 55%)" }} />
                <span className="relative">Talk to a Solutions Consultant</span>
                <div className="relative flex items-center justify-center rounded-full" style={{ width: "22px", height: "22px", background: "rgba(255,255,255,0.18)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}