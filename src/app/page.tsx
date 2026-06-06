"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { clientLogos } from "@/data/clients";

// ─── Palette ─────────────────────────────────────────────────────────────────
// accent:  #ef5023
// bg-1:    #000000  (page base)
// bg-2:    #0a0a0a  (alternate sections)
// bg-3:    #111111  (cards / elevated)
// border:  #1f1f1f
// text:    #ffffff
// muted:   #888888
// faint:   #444444

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="8" r="4" stroke="#ef5023" strokeWidth="2"/>
        <circle cx="5"  cy="21" r="3" stroke="#ef5023" strokeWidth="2"/>
        <circle cx="23" cy="21" r="3" stroke="#ef5023" strokeWidth="2"/>
        <path d="M8 20l6-9M20 20l-6-9" stroke="#ef5023" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Dedicated Development Teams",
    desc:  "Senior engineers and project managers embedded in your team, aligned with your timezone and focused on your product outcomes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#ef5023" strokeWidth="2"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#ef5023" strokeWidth="2"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#ef5023" strokeWidth="2"/>
        <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="#ef5023" strokeWidth="2"/>
      </svg>
    ),
    title: "IT Staff Augmentation",
    desc:  "Scale your team with vetted senior talent up or down, without the overhead of full-cycle hiring.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="16" rx="2" stroke="#ef5023" strokeWidth="2"/>
        <path d="M9 22v3M19 22v3M6 25h16" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 14h12M8 11h8" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "End-to-End Product Development",
    desc:  "From discovery to launch and iteration, we support the full product lifecycle alongside your team.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#ef5023" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="#ef5023" strokeWidth="1.5" opacity=".35"/>
      </svg>
    ),
    title: "AI & Cloud Engineering",
    desc:  "Custom AI models, data pipelines, and cloud-native infrastructure on AWS, GCP, and Azure, built for scale.",
  },
];


const testimonials = [
  { quote: "InApps became a true extension of our engineering team. Their developers don't just write code, they understand the product and the business behind it.", name: "Sarah Jenkins", role: "CTO, Fintech Global",    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=72&h=72&fit=crop&crop=face&auto=format" },
  { quote: "The communication was seamless. Despite the time difference, it never felt like we were working with a remote team. We would recommend InApps to any company looking to scale.", name: "David Chen", role: "Product VP, SaaS Pro",  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=face&auto=format" },
  { quote: "The quality of code consistently exceeded our expectations. They follow engineering best practices rigorously, and their QA process is thorough. Genuinely top-tier talent.", name: "Michael Scott", role: "Founder, Paperless Inc", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=72&h=72&fit=crop&crop=face&auto=format" },
];

const valueProps = [
  { metric: "60%", title: "Cost Savings",    desc: "vs. hiring in-house in US/EU" },
  { metric: "3%",  title: "Top Talent",      desc: "of Vietnam's engineer pool, rigorously screened" },
  { metric: "2wk", title: "Fast Onboarding", desc: "from first call to shipping code" },
];

const caseStudies = [
  {
    industry: "Fintech",
    client: "Prudential",
    model: "ODC Model",
    title: "Real-time claims processing platform",
    desc: "Prudential needed a modern claims infrastructure to replace a brittle legacy system struggling under growing transaction volume. We designed and built a real-time platform handling 2M+ daily transactions, cutting processing time by 300%, reducing operational costs by 60%, and giving their team full visibility into claim status at every stage.",
    metrics: [{ value: "300%", label: "Faster Processing" }, { value: "60%", label: "Cost Reduction" }],
    tags: ["React", "Node.js", "AWS"],
    image: "/Media/Image/prd%201.jpg",
    link: "/case-study",
  },
  {
    industry: "SaaS",
    client: "Future Processing",
    model: "Dedicated Team",
    title: "AI analytics dashboard for 50K users",
    desc: "Delivered an AI-powered insights platform that cut time-to-insight by 5x and maintained 98% uptime across global regions.",
    metrics: [{ value: "5×", label: "Faster Insights" }, { value: "98%", label: "Uptime" }, { value: "50K+", label: "Active Users" }],
    tags: ["Python", "React", "GCP"],
    image: "/Media/Image/prd%202.jpg",
    link: "/case-study",
  },
  {
    industry: "E-commerce",
    client: "Mega Market",
    model: "Staff Augmentation",
    title: "Mobile commerce app with 1M downloads",
    desc: "Rebuilt the mobile shopping experience from scratch, achieving 1M downloads in 6 months and a 40% lift in revenue.",
    metrics: [{ value: "1M+", label: "Downloads" }, { value: "40%", label: "Revenue Increase" }, { value: "6mo", label: "To Launch" }],
    tags: ["React Native", "Firebase"],
    image: "/Media/Image/prd%203.jpg",
    link: "/case-study",
  },
  {
    industry: "Healthtech",
    client: "Workpac",
    model: "Fixed-Price Model",
    title: "Workforce management platform at scale",
    desc: "Modernized a legacy workforce platform for 30K+ workers, cutting admin overhead by 50% and improving shift-fill rates.",
    metrics: [{ value: "50%", label: "Less Admin" }, { value: "30K+", label: "Workers" }, { value: "3×", label: "Faster Onboarding" }],
    tags: ["Vue.js", "Django", "Azure"],
    image: "/Media/Image/prd%204.jpg",
    link: "/case-study",
  },
];

const trustPoints = [
  { title: "NDA signed before any call",       desc: "Legally binding, always" },
  { title: "IP ownership transfers fully",      desc: "You own everything we build" },
  { title: "GDPR & SOC2 compliant",            desc: "EU & enterprise data standards" },
  { title: "Vetted, background-checked devs",  desc: "Every engineer on your team" },
];

const faqCategories = [
  {
    label:    "Timeline",
    question: "How quickly can you start?",
    answer:   "We can have your team ready within 2 weeks of the first call. Our pre-vetted talent pool means no lengthy recruitment cycles - just fast, reliable onboarding.",
  },
  {
    label:    "Time Zones",
    question: "What about time zone differences?",
    answer:   "We overlap 4+ hours daily with US and EU teams. Our leads work flexible hours and we use async-first workflows (Slack, Loom, Jira) so nothing waits overnight.",
  },
  {
    label:    "IP & Legal",
    question: "Who owns the code and IP?",
    answer:   "You do - 100%. Every engagement includes a full IP transfer clause and NDA signed before we begin. Your code is yours from the first commit.",
  },
  {
    label:    "Team Quality",
    question: "What if I'm not happy with a developer?",
    answer:   "We guarantee a replacement within 2 weeks, no questions asked. All our engineers pass a rigorous 5-stage screening - but if someone isn't the right fit, we fix it fast.",
  },
  {
    label:    "Pricing",
    question: "How does pricing work?",
    answer:   "We scope every engagement individually - no fixed rate cards. After a free discovery call, we send a transparent proposal with monthly retainer or project-based pricing options.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const CASE_TABS = ["ODC Model", "Dedicated Team", "Staff Augmentation", "Fixed-Price Model"];

export default function Home() {
  const [selectedAward, setSelectedAward] = useState<string | null>(null);
  const [faqIndex, setFaqIndex] = useState(0);
  const [caseTabIndex, setCaseTabIndex] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState<string>("AI Technologies");
  const caseModel = CASE_TABS[caseTabIndex];
  const caseTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedAward(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const caseTimerPaused = useRef(false);
  const pauseCaseTimer = useCallback(() => { caseTimerPaused.current = true; }, []);
  const resumeCaseTimer = useCallback(() => { caseTimerPaused.current = false; }, []);

  useEffect(() => {
    caseTimerRef.current = setInterval(() => {
      if (!caseTimerPaused.current) {
        setCaseTabIndex(i => (i + 1) % CASE_TABS.length);
      }
    }, 6000);
    return () => { if (caseTimerRef.current) clearInterval(caseTimerRef.current); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <Header />

      <main className="flex-1 flex flex-col">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px] pb-[60px] md:pb-[100px]">
          {/* banner background */}
          <div className="absolute inset-0">
            <img src="/banner.png" alt="" className="w-full h-full object-cover" style={{ filter: "blur(3px)", transform: "scale(1.04)" }} />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
          <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">
            {/* headline */}
            <h1 className="font-black text-white tracking-[-2px]">
              <div className="text-[32px] leading-[40px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] md:whitespace-nowrap">Dedicated Engineering Teams,</div>
              <div className="text-[32px] leading-[40px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] md:whitespace-nowrap"><span className="text-[#ef5023]">AI-Native by Default.</span></div>
            </h1>

            {/* subtext */}
            <p className="text-[#ffffff] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal">
              Senior engineers, fully dedicated to your product, not shared across projects.{" "}
              We build and manage your offshore team in Vietnam, embed AI tooling in every sprint,{" "}
              and have you shipping in 4–6 weeks.{" "}
              No vendor PM layer. No revolving door of contractors.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
              <Link
                href="/contact"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[14px] md:text-[16px] px-[24px] md:px-[28px] h-[48px] md:h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Book a Free Call
              </Link>
              <Link
                href="/case-study"
                className="bg-transparent text-white font-semibold text-[14px] md:text-[16px] px-[24px] md:px-[28px] h-[48px] md:h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
                style={{ textDecoration: "none" }}
              >
                View Our Work →
              </Link>
            </div>

            {/* social proof inline */}
            <div className="flex items-center gap-[8px] flex-wrap mt-[2px]">
              {/* Top Dev 2025 */}
              <div className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-full border border-white/30 bg-black/20">
                <svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z" fill="white"/></svg>
                <span className="text-white text-[11px] font-semibold">Top Dev 2025</span>
              </div>
              {/* GoodFirms Top */}
              <div className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-full border border-white/30 bg-black/20">
                <span className="w-[6px] h-[6px] rounded-full bg-[#4ade80] flex-shrink-0" />
                <span className="text-white text-[11px] font-semibold">GoodFirms Top</span>
              </div>
              {/* Stars + reviews */}
              <div className="flex items-center gap-[4px] px-[10px] py-[5px] rounded-full border border-white/30 bg-black/20">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 20 20" fill="#f59e0b"><path d="M10 1l2.39 7.26H20l-6.19 4.5 2.36 7.26L10 15.5l-6.17 4.52 2.36-7.26L0 8.26h7.61z"/></svg>
                ))}
                <span className="text-white font-bold text-[11px] ml-[2px]">4.9</span>
                <span className="text-white/75 text-[11px]">· 50+ reviews</span>
              </div>
              {/* ISO 27001 */}
              <div className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-full border border-white/30 bg-black/20">
                <svg width="11" height="11" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white text-[11px] font-semibold">ISO 27001</span>
              </div>
              {/* Sao Khue 2025 */}
              <div className="flex items-center gap-[5px] px-[10px] py-[5px] rounded-full border border-white/30 bg-black/20">
                <svg width="11" height="11" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/><path d="M10 6v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span className="text-white text-[11px] font-semibold">Sao Khue 2025</span>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* ── 2. CLIENT LOGOS MARQUEE + RATINGS ────────────────────────────── */}
        <section className="bg-[#f5f5f5] pt-[48px] pb-[24px] overflow-hidden border-b border-[#e0e0e0]">
          <div className="max-w-[1320px] mx-auto px-[16px] md:px-[40px] flex flex-col gap-[24px]">
            <div className="flex flex-col items-center gap-[6px]">
              <p className="text-center text-[#0a0a0a] text-[15px] font-semibold">
                Trusted by engineering teams across{" "}
                <span className="text-[#ef5023] font-bold">15+ countries</span>
              </p>
              <p className="text-[#aaa] text-[12px]">From startups to Fortune 500 companies</p>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
              <div className="flex items-center gap-[72px] animate-marquee whitespace-nowrap w-max py-[8px]">
                {[...clientLogos, ...clientLogos].map(({ name, src }, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={name}
                    className="h-[46px] w-auto object-contain transition-opacity duration-300"
                    style={{ opacity: 1, filter: "grayscale(20%) contrast(1.1)" }}
                  />
                ))}
              </div>
            </div>

            {/* review trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-0 pt-[4px] pb-[8px]" style={{ borderTop: "1px solid #f0f0f0" }}>
              {/* Clutch */}
              <div className="flex items-center gap-[8px] px-[28px] py-[12px]">
                <div className="flex items-center gap-[3px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.375l-3.09 1.634.59-3.44L2 5.132l3.455-.502L7 1.5z" fill="#ef5023"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[#0a0a0a] text-[13px] font-semibold">Clutch <strong>4.9/5</strong> · 50+ reviews</span>
              </div>

              {/* divider */}
              <div className="w-[1px] h-[20px] flex-shrink-0" style={{ background: "#e0e0e0" }} />

              {/* GoodFirms */}
              <div className="flex items-center gap-[7px] px-[28px] py-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#34a853" strokeWidth="1.5"/>
                  <path d="M5 8l2 2 4-4" stroke="#34a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#0a0a0a] text-[13px] font-semibold">GoodFirms Top Company</span>
              </div>

              {/* divider */}
              <div className="w-[1px] h-[20px] flex-shrink-0" style={{ background: "#e0e0e0" }} />

              {/* ISO 27001 */}
              <div className="flex items-center gap-[7px] px-[28px] py-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5L2 4v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1.5z" stroke="#4285f4" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M5.5 8l2 2 3-3" stroke="#4285f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#0a0a0a] text-[13px] font-semibold">ISO 27001 Certified</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── WHY OUTSOURCE TO VIETNAM ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fafafa] border-t border-[#e8e8e8] px-[16px] md:px-[40px] py-[48px] md:py-[70px]">
          <div className="max-w-[1320px] mx-auto rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]" style={{ minHeight: "580px" }}>

            {/* left - content panel */}
            <div className="relative flex flex-col justify-center gap-[24px] px-[0px] py-[32px] overflow-hidden">

              {/* eyebrow */}
              <div className="flex items-center">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">WHY VIETNAM WITH INAPPS</p>
              </div>

              {/* heading */}
              <div className="flex flex-col gap-[20px]">
                <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                  The engineering partner{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#ef5023]">that stays.</span>
                    <span className="absolute bottom-[4px] left-0 right-0 h-[6px] rounded-full opacity-20 z-0"
                      style={{ background: "#ef5023" }} />
                  </span>
                </h2>
                {/* quote-style highlight */}
                <div className="flex gap-[14px] items-stretch">
                  <div className="w-[3px] rounded-full bg-[#ef5023] flex-shrink-0 self-stretch" />
                  <p className="text-[#555] text-[16px] leading-[28px]">
                    Most offshore engagements fail at the team, not the tech. InApps is built differently: dedicated engineers, AI tooling in every sprint, and a Vietnam-based operation held to Western engineering standards. Most clients that start with us are still with us years later.
                  </p>
                </div>
              </div>

              {/* reasons - redesigned */}
              <div className="flex flex-col gap-[10px]">
                {[
                  { num: "01", title: "Dedicated teams",        desc: "Your engineers work exclusively on your product. No shared resources, no revolving door of contractors." },
                  { num: "02", title: "AI-Native workflow",    desc: "Claude, Cursor, and GitHub Copilot built into every sprint as standard practice, not an add-on you pay extra for." },
                  { num: "03", title: "Vietnam-based, Western standards",      desc: "ISO 27001 certified. Senior talent. 85%+ multi-year retention. GMT+7 with flex hours for AU and US morning standups." },
                ].map(({ num, title, desc }) => (
                  <div key={num}
                    className="group flex items-start gap-[16px] px-[16px] py-[16px] rounded-[12px] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 cursor-default">
                    {/* number badge */}
                    <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0 border border-[#e8e8e8] bg-white group-hover:bg-[#ef5023] group-hover:border-[#ef5023] transition-all duration-200"
                      style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
                      <span className="font-black text-[#ef5023] text-[11px] tracking-[0.5px] group-hover:text-white transition-colors">{num}</span>
                    </div>
                    <div className="flex flex-col gap-[3px] pt-[2px]">
                      <h4 className="font-bold text-[#0a0a0a] text-[15px] leading-[22px] group-hover:text-[#ef5023] transition-colors">{title}</h4>
                      <p className="text-[#555] text-[14px] leading-[22px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* right - photo collage (same style as Why Choose Us) */}
            <div className="grid grid-cols-2 gap-[12px] py-[32px] px-[16px] lg:pl-[63px] lg:pr-[28px] mt-[0px] lg:mt-[35px]">

              {/* col 1 - square image + orange stat card (offset down) */}
              <div className="flex flex-col gap-[12px] pb-[28px]">
                <div className="aspect-square relative rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)] hover:-translate-y-[4px] group">
                  <img
                    src="/Media/Image/case%201.png"
                    alt="InApps Vietnam team"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="bg-[#ef5023] rounded-[12px] flex flex-col items-center justify-center py-[32px] px-[20px] relative overflow-hidden shadow-[0_4px_12px_rgba(239,80,35,0.15)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(239,80,35,0.22)] hover:-translate-y-[4px]">
                  <div className="absolute inset-0 opacity-[0.08]"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }} />
                  <span className="relative font-black text-white text-[32px] leading-[36px] tracking-[-1px]">#1</span>
                  <span className="relative font-bold text-white/80 text-[11px] tracking-[1.5px] uppercase mt-[4px] text-center">Vietnam · Top 5 SEA</span>
                  <span className="relative text-white/50 text-[10px] mt-[2px]">Clutch 2024</span>
                </div>
              </div>

              {/* col 2 - tall image + small square image (offset up) */}
              <div className="flex flex-col gap-[12px] pt-[28px]">
                <div className="aspect-[3/4] relative rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)] hover:-translate-y-[4px] group">
                  <img
                    src="/Media/Image/case%202.png"
                    alt="InApps workspace"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: "center 50%" }}
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)" }} />
                </div>
                <div className="aspect-square relative rounded-[12px] overflow-hidden flex flex-col items-center justify-center gap-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)] hover:-translate-y-[4px] group">
                  <img
                    src="/Media/Image/case%203.png"
                    alt="InApps culture"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: "center 80%" }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="relative font-black text-white text-[28px] leading-[32px] tracking-[-1px]">5.0★</span>
                  <span className="relative text-white/70 text-[10px] font-bold uppercase tracking-[1px]">Clutch Rating</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="px-[16px] md:px-[40px] py-[24px] md:py-[32px]" style={{ background: "#ffffff" }}>
          <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-[14px]">
            {/* Rating card — special render */}
            <div
              className="flex flex-col gap-[8px] rounded-[12px] px-[20px] py-[20px] items-center text-center"
              style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
            >
              <div className="flex flex-col items-center gap-[4px]">
                <span className="font-black leading-[1] text-[32px] tracking-[-1px]" style={{ color: "#ef5023" }}>4.9/5</span>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.375l-3.09 1.634.59-3.44L2 5.132l3.455-.502L7 1.5z"
                        fill="#ef5023" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-[#0a0a0a] text-[13px] font-semibold">Clutch Rating · 50+ Reviews</span>
            </div>

            {/* remaining stat cards */}
            {[
              { value: "750+", label: "Projects delivered" },
              { value: "10+",  label: "Years in business" },
              { value: "85%+", label: "Multi-year retention" },
              { value: "15+",  label: "Countries served" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-[8px] rounded-[12px] px-[20px] py-[20px] items-center text-center"
                style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <span className="font-black leading-[1] text-[32px] tracking-[-1px]" style={{ color: "#ef5023" }}>
                  {value}
                </span>
                <span className="text-[#0a0a0a] text-[13px] font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </section>



        {/* ── HOW WE'RE DIFFERENT ─────────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>

          {/* p1 pattern top-right */}
          <div className="absolute pointer-events-none" style={{ top: 0, right: 0, width: "307px", height: "307px", opacity: 0.3, zIndex: 0 }}>
            <img src="/Media/Pattern/p1.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          {/* p1 pattern bottom-left */}
          <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, width: "307px", height: "307px", opacity: 0.3, zIndex: 0 }}>
            <img src="/Media/Pattern/p1.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 2 }}>

            {/* header */}
            <div className="flex flex-col gap-[12px] max-w-[640px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">HOW WE WORK</p>
              <h2 className="font-black text-white text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] tracking-[-1.5px] md:whitespace-nowrap">
                Engineering teams tailored to your product, not products adapted to fit a team.
              </h2>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {[
                {
                  tag: "DEDICATED",
                  title: "Your team, and only yours",
                  body: "Your engineers work exclusively on your product, never shared across other clients. Most partnerships started as a single build and have run continuously for years, because the team understands your product well enough to shape the roadmap, not just close tickets.",
                },
                {
                  tag: "AI-NATIVE",
                  title: "Claude, Cursor, and Copilot in every sprint",
                  body: "Every InApps engineer works with Claude, Cursor, and GitHub Copilot built into their daily workflow, across coding, code review, and documentation. Standard practice from day one, not an optional add-on you pay extra for.",
                },
                {
                  tag: "DIRECT",
                  title: "You interview and approve every engineer",
                  body: "Most offshore vendors assign your team for you. At InApps, you run the final interview and no engineer joins without your sign-off. You talk straight to the people writing your code, with no vendor PM layer in between.",
                },
              ].map(({ tag, title, body }) => (
                <div
                  key={tag}
                  className="flex flex-col gap-[20px] rounded-[20px] p-[32px] cursor-default transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(239,80,35,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,80,35,0.18)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(239,80,35,0.12), inset 0 1px 0 rgba(255,255,255,0.04)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"; }}
                >
                  {/* tag */}
                  <span className="text-[13px] font-black tracking-[3px] uppercase self-start px-[12px] py-[5px] rounded-full" style={{ color: "#ef5023", border: "1px solid rgba(239,80,35,0.3)", background: "rgba(239,80,35,0.08)" }}>{tag}</span>

                  {/* divider */}
                  <div className="w-full h-[1px]" style={{ background: "rgba(255,255,255,0.06)" }} />

                  {/* text */}
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="font-black text-white text-[24px] leading-[32px] tracking-[-0.5px]">{title}</h3>
                    <p className="text-[16px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.65)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── AI-NATIVE IN PRACTICE ───────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>

          {/* dot grid pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            zIndex: 0,
          }} />

          {/* orange glow top-right */}
          <div className="absolute pointer-events-none" style={{ right: "-100px", top: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.06) 0%, transparent 65%)", zIndex: 1 }} />

          {/* orange glow bottom-left */}
          <div className="absolute pointer-events-none" style={{ left: "-80px", bottom: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 70%)", zIndex: 1 }} />

          {/* grid lines */}
          <svg className="absolute inset-0 pointer-events-none w-full h-full" style={{ zIndex: 1 }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.12"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
            {/* orange crosshair accents */}
            <g opacity="0.2">
              <line x1="192" y1="80" x2="192" y2="112" stroke="#ef5023" strokeWidth="1.5"/>
              <line x1="176" y1="96" x2="208" y2="96" stroke="#ef5023" strokeWidth="1.5"/>
              <circle cx="192" cy="96" r="4" fill="none" stroke="#ef5023" strokeWidth="1"/>
            </g>
            <g opacity="0.15">
              <line x1="880" y1="200" x2="880" y2="232" stroke="#ef5023" strokeWidth="1.5"/>
              <line x1="864" y1="216" x2="896" y2="216" stroke="#ef5023" strokeWidth="1.5"/>
              <circle cx="880" cy="216" r="4" fill="none" stroke="#ef5023" strokeWidth="1"/>
            </g>
            <g opacity="0.12">
              <line x1="480" y1="380" x2="480" y2="412" stroke="#ef5023" strokeWidth="1.5"/>
              <line x1="464" y1="396" x2="496" y2="396" stroke="#ef5023" strokeWidth="1.5"/>
              <circle cx="480" cy="396" r="4" fill="none" stroke="#ef5023" strokeWidth="1"/>
            </g>
          </svg>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]" style={{ zIndex: 2 }}>

            {/* header */}
            <div className="flex flex-col gap-[16px] max-w-[700px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">AI IN PRACTICE</p>
              <h2 className="font-black text-[#0a0a0a] text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] tracking-[-1.5px] md:whitespace-nowrap">
                What "AI-native" actually means in practice
              </h2>
              <p className="text-[16px] leading-[1.75]" style={{ color: "rgba(0,0,0,0.55)" }}>
                Not a buzzword and not an upsell. The same AI tools you'd expect a modern engineer to use are standard across every InApps team, in every sprint.
              </p>
            </div>

            {/* timeline */}
            <div className="relative flex flex-col md:flex-row gap-[16px] md:gap-0 mt-[24px] items-stretch">

              {[
                {
                  num: "01",
                  phase: "Code",
                  desc: "Engineers pair with AI in the editor to scaffold, refactor, and move faster on routine work, so senior time goes to architecture and hard problems, not boilerplate.",
                  tools: ["Cursor", "GitHub Copilot", "Claude by Anthropic"],
                },
                {
                  num: "02",
                  phase: "Review",
                  desc: "AI-assisted review runs on every pull request to catch bugs, edge cases, and security issues early, alongside (never instead of) human review from senior engineers.",
                  tools: ["Claude", "GitHub Copilot"],
                },
                {
                  num: "03",
                  phase: "Documentation",
                  desc: "Specs, changelogs, and onboarding docs are drafted with AI and verified by the team, so your codebase stays documented and knowledge never walks out the door.",
                  tools: ["AI-assisted"],
                },
              ].map(({ num, phase, desc, tools }) => (
                <div key={num} className="flex-1 px-[12px] relative flex flex-col" style={{ zIndex: 1 }}>

                  {/* card with number badge overlapping top */}
                  <div className="flex flex-col gap-[16px] rounded-[20px] pt-[44px] px-[24px] pb-[24px] w-full relative flex-1 transition-all duration-300"
                    style={{ background: "#fff", border: "1px solid rgba(239,80,35,0.15)", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-6px)"; el.style.borderColor = "rgba(239,80,35,0.4)"; el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1), 0 8px 24px rgba(239,80,35,0.08)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.borderColor = "rgba(239,80,35,0.15)"; el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)"; }}
                  >

                    {/* circle overlapping top edge */}
                    <div className="absolute w-[48px] h-[48px] rounded-full flex items-center justify-center"
                      style={{ top: "-24px", left: "24px", background: "#ef5023", boxShadow: "0 4px 12px rgba(239,80,35,0.35)" }}>
                      <span className="font-black text-white text-[13px] tracking-[1px]">{num}</span>
                    </div>

                    {/* text */}
                    <div className="flex flex-col gap-[10px]">
                      <h3 className="font-black text-[#0a0a0a] text-[24px] leading-[32px] tracking-[-0.5px]">{phase}</h3>
                      <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(0,0,0,0.55)" }}>{desc}</p>
                    </div>

                    {/* divider */}
                    <div className="h-[1px]" style={{ background: "rgba(0,0,0,0.08)" }} />

                    {/* tool tags */}
                    <div className="flex flex-wrap gap-[6px]">
                      {tools.map(tool => (
                        <span
                          key={tool}
                          className="text-[11px] font-bold px-[10px] py-[4px] rounded-full"
                          style={{ background: "rgba(239,80,35,0.08)", color: "#ef5023", border: "1px solid rgba(239,80,35,0.2)" }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── WHAT WE BUILD ───────────────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ borderTop: "1px solid #1a1a1a" }}>
          {/* real photo background */}
          <div className="absolute inset-0" style={{ zIndex: 0 }}>
            <img src="/Media/Image/case%204.png" alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 50px" }} />
          </div>
          {/* dark overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(8,8,8,0.84)", zIndex: 1 }} />
          {/* orange glow left */}
          <div className="absolute pointer-events-none" style={{ left: "-80px", top: "30%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 70%)", zIndex: 2 }} />
          {/* blue accent top-right */}
          <div className="absolute pointer-events-none" style={{ right: "-60px", top: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)", zIndex: 2 }} />
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 3 }}>

            {/* header */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[12px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">WHAT WE BUILD</p>
                <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                  Everything you need to ship. Nothing you don't.
                </h2>
              </div>
              <a href="/services" className="text-white text-[13px] font-semibold hover:text-[#ef5023] transition-colors inline-flex items-center gap-[6px]" style={{ textDecoration: "none" }}>
                All services <span className="text-[#ef5023]">→</span>
              </a>
            </div>

            {/* uniform grid — add/remove items freely */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
              {[
                {
                  title: "Custom Software Development",
                  desc: "Web apps, APIs, and platform engineering with dedicated senior teams.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6M13 4l-2 16" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "Mobile App Development",
                  desc: "React Native and Flutter apps shipped to iOS and Android, production-ready.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="#ef5023" strokeWidth="1.8"/><path d="M9 7h6M9 11h6M9 15h4" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                },
                {
                  title: "AI Agent Development",
                  desc: "Custom agents, RAG pipelines, and LLM integrations built with LangGraph and AutoGen.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z" stroke="#ef5023" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "Offshore Dev Center",
                  desc: "A fully managed engineering team dedicated exclusively to your product.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="#ef5023" strokeWidth="1.8"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 12v4M10 14h4" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                },
                {
                  title: "Staff Augmentation",
                  desc: "Senior engineers embedded into your team in days, not months.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="#ef5023" strokeWidth="1.8"/><circle cx="17" cy="9" r="2.5" stroke="#ef5023" strokeWidth="1.8"/><path d="M3 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/><path d="M17 14c1.657 0 3 1.343 3 3" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/></svg>,
                },
                {
                  title: "Tech Audit & Remediation",
                  desc: "Codebase review, architecture assessment, and tech debt clean-up with a written report.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3L4 6.5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11v-6L12 3z" stroke="#ef5023" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.5 12l2.5 2.5 4.5-4.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
              ].map(({ title, desc, icon }) => (
                <div
                  key={title}
                  className="relative rounded-[20px] p-[28px] flex flex-col gap-[16px] transition-all duration-200 cursor-default overflow-hidden"
                  style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", boxShadow: "0 4px 24px rgba(0,0,0,0.18)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(239,80,35,0.4)"; el.style.boxShadow = "0 8px 32px rgba(239,80,35,0.14)"; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#2a2a2a"; el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)"; el.style.transform = "none"; }}
                >

                  {/* icon */}
                  <div className="relative w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(239,80,35,0.15)", border: "1px solid rgba(239,80,35,0.25)" }}>
                    {icon}
                  </div>

                  {/* text */}
                  <div className="relative flex flex-col gap-[8px] flex-1">
                    <h3 className="font-black text-white text-[16px] leading-[22px] tracking-[-0.4px]">{title}</h3>
                    <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.65)" }}>{desc}</p>
                  </div>

                  {/* learn more */}
                  <div className="relative flex items-center gap-[6px] mt-auto pt-[12px]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="text-[12px] font-bold" style={{ color: "#ef5023" }}>Learn more</span>
                    <span className="text-[#ef5023] text-[12px]">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────────────────── */}
        {(() => {
          const techCategories: Record<string, { name: string; color: string; svg: React.ReactNode }[]> = {
            "AI Technologies": [
              { name: "OpenAI", color: "#74AA9C", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#74AA9C" strokeWidth="1.5"/><path d="M12 8v4l3 2" stroke="#74AA9C" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Claude", color: "#D97706", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 4L6 20M12 4L18 20M8 14h8" stroke="#D97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Gemini", color: "#4285F4", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C8 3 5 7 5 12s3 9 7 9 7-4 7-9-3-9-7-9z" stroke="#4285F4" strokeWidth="1.5"/><path d="M3 12h18" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Hugging Face", color: "#FFD21E", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="11" r="7" stroke="#FFD21E" strokeWidth="1.5"/><path d="M9 11c0 0 1 2 3 2s3-2 3-2" stroke="#FFD21E" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9.5" cy="9.5" r="1" fill="#FFD21E"/><circle cx="14.5" cy="9.5" r="1" fill="#FFD21E"/></svg> },
              { name: "LangChain", color: "#6EE7B7", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h4l2-4 4 8 2-4h4" stroke="#6EE7B7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "LlamaIndex", color: "#7C3AED", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 4L4 8v8l8 4 8-4V8l-8-4z" stroke="#7C3AED" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "RAG Pipelines", color: "#A78BFA", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="1.5"/><path d="M17.5 14v7M14 17.5h7" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Vector DB", color: "#F472B6", svg: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="8" ry="3" stroke="#F472B6" strokeWidth="1.5"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="#F472B6" strokeWidth="1.5"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" stroke="#F472B6" strokeWidth="1.5"/></svg> },
              { name: "Pinecone", color: "#1DB990", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M5 7l7-4 7 4M5 17l7 4 7-4" stroke="#1DB990" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Ollama", color: "#aaaaaa", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="10" r="3" stroke="#aaaaaa" strokeWidth="1.5"/><circle cx="15" cy="10" r="3" stroke="#aaaaaa" strokeWidth="1.5"/><path d="M6 17c0-2 2.686-3 6-3s6 1 6 3" stroke="#aaaaaa" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Fine-tuning", color: "#34D399", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 12l-3.75 2.75 1.5-4.5L6 7.5h4.5L12 3z" stroke="#34D399" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "AutoGen", color: "#FF6B6B", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#FF6B6B" strokeWidth="1.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M5.636 18.364l2.121-2.121M16.243 7.757l2.121-2.121" stroke="#FF6B6B" strokeWidth="1.2" strokeLinecap="round"/></svg> },
              { name: "Python", color: "#4B8BBE", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 3 7 4.5 7 6.5V9h5v1H5.5C4 10 3 11 3 13s1 3.5 2.5 3.5H7v-2.5C7 12 9 10.5 12 10.5h3c1.5 0 2.5-1 2.5-2.5V6.5C17.5 4.5 15 3 12 3z" stroke="#4B8BBE" strokeWidth="1.3" strokeLinejoin="round"/><path d="M12 21c3 0 5-1.5 5-3.5V15h-5v-1h6.5c1.5 0 2.5-1 2.5-3s-1-3.5-2.5-3.5H17v2.5C17 12 15 13.5 12 13.5H9c-1.5 0-2.5 1-2.5 2.5v3.5C6.5 21.5 9 21 12 21z" stroke="#FFD43B" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
              { name: "Weaviate", color: "#61D6C4", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 5v8l-8 5-8-5V8l8-5z" stroke="#61D6C4" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "CrewAI", color: "#FF4D4D", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="3" stroke="#FF4D4D" strokeWidth="1.5"/><circle cx="16" cy="9" r="3" stroke="#FF4D4D" strokeWidth="1.5"/><path d="M4 19c0-2.761 3.582-5 8-5s8 2.239 8 5" stroke="#FF4D4D" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Mistral", color: "#F77F00", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h4v4H4zM10 6h4v4h-4zM16 6h4v4h-4zM4 14h4v4H4zM16 14h4v4h-4z" stroke="#F77F00" strokeWidth="1.4"/></svg> },
              { name: "Chroma", color: "#FF6B6B", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#FF6B6B" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="#FF6B6B" strokeWidth="1.3" opacity=".5"/><circle cx="12" cy="12" r="1.5" fill="#FF6B6B"/></svg> },
              { name: "n8n", color: "#EA4B71", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="3" stroke="#EA4B71" strokeWidth="1.5"/><circle cx="19" cy="6" r="3" stroke="#EA4B71" strokeWidth="1.5"/><circle cx="19" cy="18" r="3" stroke="#EA4B71" strokeWidth="1.5"/><path d="M8 12h6M14 12l-3-6M14 12l-3 6" stroke="#EA4B71" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { name: "Dify", color: "#5B6CFF", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#5B6CFF" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#5B6CFF" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Flowise", color: "#00D4AA", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 8h6v8H4zM14 8h6v8h-6zM10 12h4" stroke="#00D4AA" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/></svg> },
            ],
            "Back-end Technologies": [
              { name: "Node.js", color: "#6CC24A", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" stroke="#6CC24A" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 3v18M4 7.5l8 4.5 8-4.5" stroke="#6CC24A" strokeWidth="1.2" opacity=".5"/></svg> },
              { name: "Python", color: "#4B8BBE", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 3 7 4.5 7 6.5V9h5v1H5.5C4 10 3 11 3 13s1 3.5 2.5 3.5H7v-2.5C7 12 9 10.5 12 10.5h3c1.5 0 2.5-1 2.5-2.5V6.5C17.5 4.5 15 3 12 3z" stroke="#4B8BBE" strokeWidth="1.3" strokeLinejoin="round"/><path d="M12 21c3 0 5-1.5 5-3.5V15h-5v-1h6.5c1.5 0 2.5-1 2.5-3s-1-3.5-2.5-3.5H17v2.5C17 12 15 13.5 12 13.5H9c-1.5 0-2.5 1-2.5 2.5v3.5C6.5 21.5 9 21 12 21z" stroke="#FFD43B" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
              { name: "FastAPI", color: "#009688", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3L5 14h7l-1 7 8-11h-7l1-7z" stroke="#009688" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
              { name: "Django", color: "#44B78B", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3v13c0 2.761-2.239 5-5 5" stroke="#44B78B" strokeWidth="1.6" strokeLinecap="round"/><path d="M13 3v6h4M13 12h4" stroke="#44B78B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Go", color: "#00ADD8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M3 12h12M11 8l4 4-4 4" stroke="#00ADD8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 9a3 3 0 010 6" stroke="#00ADD8" strokeWidth="1.6" strokeLinecap="round"/></svg> },
              { name: "Rust", color: "#CE412B", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#CE412B" strokeWidth="1.5"/><path d="M8 10h4c1.1 0 2 .9 2 2s-.9 2-2 2H8v-4zM12 14l3 3" stroke="#CE412B" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { name: "GraphQL", color: "#E535AB", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4" r="1.5" stroke="#E535AB" strokeWidth="1.4"/><circle cx="4" cy="8" r="1.5" stroke="#E535AB" strokeWidth="1.4"/><circle cx="20" cy="8" r="1.5" stroke="#E535AB" strokeWidth="1.4"/><circle cx="4" cy="16" r="1.5" stroke="#E535AB" strokeWidth="1.4"/><circle cx="20" cy="16" r="1.5" stroke="#E535AB" strokeWidth="1.4"/><circle cx="12" cy="20" r="1.5" stroke="#E535AB" strokeWidth="1.4"/><path d="M5.3 8.75L11 4.75M13 4.75l5.7 4M19.5 9.5v5M18.7 15.25L13 19.25M11 19.25L5.3 15.25M4.5 14.5v-5" stroke="#E535AB" strokeWidth="1.2"/></svg> },
              { name: "REST APIs", color: "#F59E0B", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4l8 8-8 8" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "PostgreSQL", color: "#4F9EDB", svg: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="8" rx="6" ry="3.5" stroke="#4F9EDB" strokeWidth="1.5"/><path d="M6 8v5c0 1.933 2.686 3.5 6 3.5s6-1.567 6-3.5V8" stroke="#4F9EDB" strokeWidth="1.5"/><path d="M6 11c0 1.933 2.686 3.5 6 3.5s6-1.567 6-3.5" stroke="#4F9EDB" strokeWidth="1.5"/></svg> },
              { name: "MongoDB", color: "#4DB33D", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3c0 0-4 5-4 10a4 4 0 008 0C16 8 12 3 12 3z" stroke="#4DB33D" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 17v4" stroke="#4DB33D" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Redis", color: "#FF4438", svg: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="3" stroke="#FF4438" strokeWidth="1.5"/><path d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7" stroke="#FF4438" strokeWidth="1.5"/><path d="M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#FF4438" strokeWidth="1.5"/></svg> },
              { name: "MySQL", color: "#4479A1", svg: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="8" ry="3" stroke="#4479A1" strokeWidth="1.5"/><path d="M4 6v5c0 1.657 3.582 3 8 3s8-1.343 8-3V6M4 11v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#4479A1" strokeWidth="1.5"/></svg> },
              { name: "Elasticsearch", color: "#FEC514", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#FEC514" strokeWidth="1.5"/><path d="M7 10h10M7 14h10" stroke="#FEC514" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Kafka", color: "#231F20", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2.5" stroke="#aaaaaa" strokeWidth="1.4"/><circle cx="5" cy="14" r="2.5" stroke="#aaaaaa" strokeWidth="1.4"/><circle cx="19" cy="14" r="2.5" stroke="#aaaaaa" strokeWidth="1.4"/><path d="M12 7.5v4M12 11.5l-7 2.5M12 11.5l7 2.5" stroke="#aaaaaa" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { name: "Supabase", color: "#3ECF8E", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3L4 14h9V21l7-11h-9V3z" stroke="#3ECF8E" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Prisma", color: "#5A67D8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 20L12 3l4 13-12 4z" stroke="#5A67D8" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 3l4 13" stroke="#5A67D8" strokeWidth="1.3" opacity=".5"/></svg> },
              { name: "gRPC", color: "#4285F4", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 8h16M4 12h16M4 16h16" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Celery", color: "#A9CC54", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C8 3 5 7 5 12s3 9 7 9" stroke="#A9CC54" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 3c4 0 7 4 7 9" stroke="#A9CC54" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 12h6" stroke="#A9CC54" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "RabbitMQ", color: "#FF6600", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="#FF6600" strokeWidth="1.5"/><circle cx="8" cy="12" r="2" stroke="#FF6600" strokeWidth="1.3"/><circle cx="16" cy="12" r="2" stroke="#FF6600" strokeWidth="1.3"/></svg> },
              { name: "WebSocket", color: "#8B5CF6", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 12c0-4.418 3.582-8 8-8" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 12c0 4.418-3.582 8-8 8" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="2" stroke="#8B5CF6" strokeWidth="1.5"/></svg> },
            ],
            "Front-end Technologies": [
              { name: "React", color: "#61DAFB", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/></svg> },
              { name: "Next.js", color: "#aaaaaa", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#aaaaaa" strokeWidth="1.5"/><path d="M9 8.5v7L17 8.5" stroke="#aaaaaa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "TypeScript", color: "#3178C6", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#3178C6" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#3178C6" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Vue.js", color: "#42B883", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M3 4l9 16L21 4h-4l-5 9-5-9H3z" stroke="#42B883" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Tailwind CSS", color: "#38BDF8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M6 9c1-3 3-4.5 6-4.5C15 4.5 16.5 6 16.5 7.5c0 1.5-1 2.5-3 3.5C16 11 18 12 18 15c0 3-2 4.5-5 4.5C10 19.5 8 18 6 15" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round"/></svg> },
              { name: "Vite", color: "#646CFF", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M21 3L13 21l-3-7-7-3L21 3z" stroke="#646CFF" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Framer Motion", color: "#BB4BB8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 4h14v8H12L5 4zM5 12h7l7 8H5v-8z" stroke="#BB4BB8" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Shadcn/ui", color: "#aaaaaa", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#aaaaaa" strokeWidth="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#aaaaaa" strokeWidth="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#aaaaaa" strokeWidth="1.5"/><path d="M13 17h8M17 13v8" stroke="#aaaaaa" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Redux", color: "#764ABC", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M16.5 6A4.5 4.5 0 008 8.5" stroke="#764ABC" strokeWidth="1.5" strokeLinecap="round"/><path d="M7.5 18A4.5 4.5 0 0016 15.5" stroke="#764ABC" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16l-2 2 2 2M16 8l2-2-2-2" stroke="#764ABC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="2" stroke="#764ABC" strokeWidth="1.5"/></svg> },
              { name: "Three.js", color: "#aaaaaa", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 14H4L12 3z" stroke="#aaaaaa" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 10h8M6.5 13h11" stroke="#aaaaaa" strokeWidth="1" opacity=".5"/></svg> },
              { name: "Storybook", color: "#FF4785", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 3h14l-1 18H6L5 3z" stroke="#FF4785" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 9h6M9 13h4" stroke="#FF4785" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Zustand", color: "#FF6B35", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#FF6B35" strokeWidth="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "TanStack Query", color: "#FF4154", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" stroke="#FF4154" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Nuxt.js", color: "#00DC82", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M3 18L9 8l3 5 2-3 7 8H3z" stroke="#00DC82" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Astro", color: "#FF5D01", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M9 18c-3-3-3-9 3-12l1 4c2-2 5-2 5 1 0 2-1 4-3 5l-6 2z" stroke="#FF5D01" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
              { name: "GSAP", color: "#88CE02", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#88CE02" strokeWidth="1.5"/><path d="M8 12h4v4" stroke="#88CE02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Radix UI", color: "#9B8AFB", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="4" stroke="#9B8AFB" strokeWidth="1.5"/><path d="M8 12v8M8 16h4a4 4 0 000-8" stroke="#9B8AFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "D3.js", color: "#F9A03C", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 16c0-4 4-8 8-8s8 4 8 8" stroke="#F9A03C" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 16h16" stroke="#F9A03C" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16v-4M16 16v-4" stroke="#F9A03C" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { name: "Recharts", color: "#22D3EE", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 18L8 12l4 3 4-6 4 2" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Jest", color: "#C21325", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6l-8-4z" stroke="#C21325" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#C21325" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            ],
            "App Development": [
              { name: "React Native", color: "#61DAFB", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/></svg> },
              { name: "Flutter", color: "#54C5F8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 12l7-9 7 9-7 3-7-3z" stroke="#54C5F8" strokeWidth="1.5" strokeLinejoin="round"/><path d="M5 12l7 3v6l7-9" stroke="#54C5F8" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Swift", color: "#F05138", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M17.5 12.5c-.5-2 .5-4 2-5-1.5 0-3 1-4 2.5C14.5 8 13 6.5 11 6.5c1 1 1.5 2.5 1 4-1-1.5-3-2-5-1.5 1.5 1 2.5 3 2 5-1-1-2.5-1.5-4-1 1.5 1.5 1.5 4 0 5.5 1.5-.5 3-2 3.5-3.5.5 2 2 3.5 4 3.5-1-1-1.5-2.5-1-4 1 1.5 3 2 5 1.5-1.5-1-2.5-3-2-5z" stroke="#F05138" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
              { name: "Kotlin", color: "#7F52FF", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 3l7 9-7 9M12 3l7 9-7 9" stroke="#7F52FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Expo", color: "#aaaaaa", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#aaaaaa" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#aaaaaa" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Firebase", color: "#FFCA28", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L9 6l3 6 2-9 5 13H5z" stroke="#FFCA28" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Supabase", color: "#3ECF8E", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3L4 14h9V21l7-11h-9V3z" stroke="#3ECF8E" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "RevenueCat", color: "#E74C3C", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C8 3 5 6 5 10c0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7z" stroke="#E74C3C" strokeWidth="1.5"/><path d="M9 10l2 2 4-4" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Sentry", color: "#FB4226", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3l8 14H5L13 3z" stroke="#FB4226" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9.5 17A7.5 7.5 0 0117 9.5" stroke="#FB4226" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { name: "App Store", color: "#007AFF", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#007AFF" strokeWidth="1.5"/><path d="M9 16l3-8 3 8M10.5 13h3" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Play Store", color: "#34A853", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-14 9V3z" stroke="#34A853" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "OneSignal", color: "#E54B4D", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#E54B4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="#E54B4D" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Fastlane", color: "#00B0D8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3L5 14h7l-1 7 8-11h-7l1-7z" stroke="#00B0D8" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
              { name: "Detox", color: "#59B462", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#59B462" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Flipper", color: "#02B0F5", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#02B0F5" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" stroke="#02B0F5" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Reanimated", color: "#A78BFA", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 12c0-3.866 3.134-7 7-7" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/><path d="M19 12c0 3.866-3.134 7-7 7" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 9l-3 3 3 3M16 15l3-3-3-3" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Stripe SDK", color: "#635BFF", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#635BFF" strokeWidth="1.5"/><path d="M3 9h18" stroke="#635BFF" strokeWidth="1.5"/><path d="M7 14h3" stroke="#635BFF" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Mapbox", color: "#4264FB", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="7" stroke="#4264FB" strokeWidth="1.5"/><path d="M12 17v4" stroke="#4264FB" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="10" r="2.5" stroke="#4264FB" strokeWidth="1.3"/></svg> },
              { name: "MMKV", color: "#FF9500", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="#FF9500" strokeWidth="1.5"/><path d="M7 12h2l2-3 2 6 2-3h2" stroke="#FF9500" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "CodePush", color: "#008AD7", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v14M5 10l7-7 7 7" stroke="#008AD7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 21h18" stroke="#008AD7" strokeWidth="1.5" strokeLinecap="round"/></svg> },
            ],
            "Cloud Computing": [
              { name: "AWS", color: "#FF9900", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M7 14c-2.5-1-4-3-4-5.5C3 5.5 5.5 3 8.5 3c1 0 2 .3 2.8.8" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 14h8c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.5 0-1 .1-1.4.3" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 19l2-2 2 2M15 19l2-2 2 2" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "GCP", color: "#4285F4", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 6.5l2.5 2.5H9.5L12 6.5z" fill="#EA4335"/><path d="M7 9h10l1.5 2.5-1.5 2.5H7L5.5 11.5 7 9z" fill="#4285F4"/><path d="M9.5 14H14.5L12 17.5 9.5 14z" fill="#34A853"/></svg> },
              { name: "Azure", color: "#0078D4", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M5 20L12 4l4 7H9L5 20z" stroke="#0078D4" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 20h9l-5-7" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Vercel", color: "#aaaaaa", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 4L22 20H2L12 4z" stroke="#aaaaaa" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Cloudflare", color: "#F6821F", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M19.2 13.4c.1-.3.1-.6.1-.9a4.3 4.3 0 00-4.3-4.3c-1.4 0-2.7.7-3.5 1.8A3 3 0 005 12a3 3 0 003 3h11a2 2 0 00.2-1.6z" stroke="#F6821F" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Terraform", color: "#7B42BC", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M9 5l-5 3v6l5 3V5zM15 5l5 3v6l-5 3V5z" stroke="#7B42BC" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 8l6 3.5-6 3.5" stroke="#7B42BC" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Serverless", color: "#FD5750", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M13 3L5 14h7l-1 7 8-11h-7l1-7z" stroke="#FD5750" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
              { name: "S3 / Storage", color: "#569A31", svg: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="3" stroke="#569A31" strokeWidth="1.5"/><path d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#569A31" strokeWidth="1.5"/></svg> },
              { name: "CDN", color: "#F59E0B", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="9" stroke="#F59E0B" strokeWidth="1.5"/><path d="M3 12h18" stroke="#F59E0B" strokeWidth="1.5"/></svg> },
              { name: "Load Balancing", color: "#60A5FA", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="9" y="3" width="6" height="4" rx="1" stroke="#60A5FA" strokeWidth="1.5"/><rect x="3" y="17" width="6" height="4" rx="1" stroke="#60A5FA" strokeWidth="1.5"/><rect x="15" y="17" width="6" height="4" rx="1" stroke="#60A5FA" strokeWidth="1.5"/><path d="M12 7v4M12 11l-6 6M12 11l6 6" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { name: "DigitalOcean", color: "#0080FF", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#0080FF" strokeWidth="1.5"/><path d="M12 16v4M8 20h4M8 17h3" stroke="#0080FF" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Pulumi", color: "#8A3391", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="3" stroke="#8A3391" strokeWidth="1.5"/><circle cx="6" cy="17" r="3" stroke="#8A3391" strokeWidth="1.5"/><circle cx="18" cy="17" r="3" stroke="#8A3391" strokeWidth="1.5"/><path d="M12 9v3M12 12l-6 5M12 12l6 5" stroke="#8A3391" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { name: "Railway", color: "#7C3AED", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="18" height="8" rx="2" stroke="#7C3AED" strokeWidth="1.5"/><path d="M8 8V6M16 8V6M6 16v2M18 16v2" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "AWS Lambda", color: "#FF9900", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 20l5-16h2L7 20H4zM10 20L14 8l4 12h-8z" stroke="#FF9900" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
              { name: "CloudWatch", color: "#FF4F8B", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF4F8B" strokeWidth="1.5"/><path d="M7 12l3 3 5-6" stroke="#FF4F8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "VPC", color: "#8B5CF6", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#8B5CF6" strokeWidth="1.5"/><rect x="7" y="7" width="10" height="10" rx="2" stroke="#8B5CF6" strokeWidth="1.3" opacity=".5"/></svg> },
              { name: "RDS", color: "#3B82F6", svg: <svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="3" stroke="#3B82F6" strokeWidth="1.5"/><path d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7" stroke="#3B82F6" strokeWidth="1.5"/></svg> },
              { name: "Netlify", color: "#00C7B7", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M3 12h18M12 3l9 9-9 9-9-9 9-9z" stroke="#00C7B7" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Render", color: "#46E3B7", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#46E3B7" strokeWidth="1.5"/><path d="M8 8h5c1.657 0 3 1.343 3 3s-1.343 3-3 3H8v-6zM13 14l3 4" stroke="#46E3B7" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { name: "Fly.io", color: "#7E22CE", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L3 9l9 12 9-12-9-6z" stroke="#7E22CE" strokeWidth="1.5" strokeLinejoin="round"/><path d="M3 9h18" stroke="#7E22CE" strokeWidth="1.3" opacity=".5"/></svg> },
            ],
            "DevOps": [
              { name: "Docker", color: "#2496ED", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="10" width="4" height="3" rx=".5" stroke="#2496ED" strokeWidth="1.4"/><rect x="7" y="10" width="4" height="3" rx=".5" stroke="#2496ED" strokeWidth="1.4"/><rect x="12" y="10" width="4" height="3" rx=".5" stroke="#2496ED" strokeWidth="1.4"/><rect x="7" y="6.5" width="4" height="3" rx=".5" stroke="#2496ED" strokeWidth="1.4"/><rect x="12" y="6.5" width="4" height="3" rx=".5" stroke="#2496ED" strokeWidth="1.4"/><path d="M2 13.5s0 3 4 3h10c4 0 6-2 6-2s-2-1-2-3" stroke="#2496ED" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { name: "Kubernetes", color: "#326CE5", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="1.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M5.636 18.364l2.121-2.121M16.243 7.757l2.121-2.121" stroke="#326CE5" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "GitHub Actions", color: "#2088FF", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2088FF" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="#2088FF" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "GitLab CI", color: "#FC6D26", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 21L3 9l2.5-6L8 9h8l2.5-6L21 9l-9 12z" stroke="#FC6D26" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "ArgoCD", color: "#EF7B4D", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#EF7B4D" strokeWidth="1.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#EF7B4D" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Helm", color: "#277A9F", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 8v8l8 5 8-5V8l-8-5z" stroke="#277A9F" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Terraform", color: "#7B42BC", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M9 5l-5 3v6l5 3V5zM15 5l5 3v6l-5 3V5z" stroke="#7B42BC" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Ansible", color: "#EE0000", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EE0000" strokeWidth="1.5"/><path d="M9 18l6-12 3 8" stroke="#EE0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Prometheus", color: "#E6522C", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#E6522C" strokeWidth="1.5"/><path d="M12 7v5M12 16v1" stroke="#E6522C" strokeWidth="1.8" strokeLinecap="round"/></svg> },
              { name: "Grafana", color: "#F46800", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#F46800" strokeWidth="1.5"/><path d="M7 15l3-4 2 3 2-5 3 3" stroke="#F46800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Datadog", color: "#632CA6", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 14l4-8 4 6 4-4 4 6" stroke="#632CA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="4" width="18" height="16" rx="2" stroke="#632CA6" strokeWidth="1.3"/></svg> },
              { name: "Nginx", color: "#009900", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3z" stroke="#009900" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 8v8l8-8v8" stroke="#009900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { name: "Vault", color: "#FFD814", svg: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="2" stroke="#FFD814" strokeWidth="1.5"/><circle cx="12" cy="13" r="3" stroke="#FFD814" strokeWidth="1.5"/><path d="M12 3v3" stroke="#FFD814" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Loki", color: "#F5A623", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 10h16M4 14h10M4 18h6" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Jaeger", color: "#60A5FA", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="3" stroke="#60A5FA" strokeWidth="1.5"/><circle cx="6" cy="18" r="3" stroke="#60A5FA" strokeWidth="1.5"/><circle cx="18" cy="18" r="3" stroke="#60A5FA" strokeWidth="1.5"/><path d="M12 9v4M12 13l-6 5M12 13l6 5" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { name: "SonarQube", color: "#4E9BCD", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 20c0-8 4-12 8-14M12 6c4 2 8 6 8 14" stroke="#4E9BCD" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Istio", color: "#466BB0", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="#466BB0" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 7v10M7 9.5l5 2.5 5-2.5" stroke="#466BB0" strokeWidth="1.2" opacity=".6"/></svg> },
              { name: "Fluentd", color: "#0E83C8", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M6 10h12M8 14h8M10 18h4" stroke="#0E83C8" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { name: "Jenkins", color: "#D33833", svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="5" stroke="#D33833" strokeWidth="1.5"/><path d="M8 14l-2 6h12l-2-6" stroke="#D33833" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
              { name: "Trivy", color: "#1904DA", svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v6c0 4 3 7 8 8 5-1 8-4 8-8V7l-8-4z" stroke="#4F46E5" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            ],
          };
          const techTabs = Object.keys(techCategories);
          const activeItems = techCategories[activeTechTab] ?? [];
          return (
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px] relative overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          {/* circuit board pattern top-left */}
          <svg className="absolute pointer-events-none" style={{ top: 0, left: 0, width: "283px", height: "283px", opacity: 0.9, zIndex: 0, transform: "scaleX(-1) scaleY(-1)" }} viewBox="0 0 354 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* grid base lines */}
            <line x1="40" y1="354" x2="40" y2="280" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="40" y1="280" x2="120" y2="280" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="120" y1="280" x2="120" y2="200" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="120" y1="200" x2="220" y2="200" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="220" y1="200" x2="220" y2="120" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="220" y1="120" x2="354" y2="120" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>

            <line x1="80" y1="354" x2="80" y2="320" stroke="#ffffff" strokeWidth="0.8" opacity="0.12"/>
            <line x1="80" y1="320" x2="160" y2="320" stroke="#ffffff" strokeWidth="0.8" opacity="0.12"/>
            <line x1="160" y1="320" x2="160" y2="240" stroke="#ffffff" strokeWidth="0.8" opacity="0.12"/>
            <line x1="160" y1="240" x2="260" y2="240" stroke="#ffffff" strokeWidth="0.8" opacity="0.12"/>
            <line x1="260" y1="240" x2="260" y2="160" stroke="#ffffff" strokeWidth="0.8" opacity="0.12"/>
            <line x1="260" y1="160" x2="354" y2="160" stroke="#ffffff" strokeWidth="0.8" opacity="0.12"/>

            <line x1="0" y1="310" x2="60" y2="310" stroke="#ffffff" strokeWidth="0.8" opacity="0.1"/>
            <line x1="60" y1="310" x2="60" y2="354" stroke="#ffffff" strokeWidth="0.8" opacity="0.1"/>

            <line x1="180" y1="354" x2="180" y2="290" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <line x1="180" y1="290" x2="290" y2="290" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <line x1="290" y1="290" x2="290" y2="180" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <line x1="290" y1="180" x2="354" y2="180" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>

            <line x1="354" y1="80" x2="310" y2="80" stroke="#ffffff" strokeWidth="0.8" opacity="0.1"/>
            <line x1="310" y1="80" x2="310" y2="140" stroke="#ffffff" strokeWidth="0.8" opacity="0.1"/>
            <line x1="310" y1="140" x2="354" y2="140" stroke="#ffffff" strokeWidth="0.8" opacity="0.1"/>

            {/* nodes / solder points */}
            <circle cx="40" cy="280" r="3.5" fill="#ef5023" opacity="0.7"/>
            <circle cx="120" cy="280" r="2.5" fill="#ef5023" opacity="0.5"/>
            <circle cx="120" cy="200" r="3.5" fill="#ef5023" opacity="0.7"/>
            <circle cx="220" cy="200" r="2.5" fill="#ef5023" opacity="0.5"/>
            <circle cx="220" cy="120" r="3.5" fill="#ef5023" opacity="0.7"/>
            <circle cx="160" cy="320" r="2.5" fill="#ffffff" opacity="0.2"/>
            <circle cx="160" cy="240" r="3" fill="#ffffff" opacity="0.25"/>
            <circle cx="260" cy="240" r="2.5" fill="#ffffff" opacity="0.2"/>
            <circle cx="260" cy="160" r="3" fill="#ffffff" opacity="0.25"/>
            <circle cx="180" cy="290" r="2.5" fill="#ef5023" opacity="0.4"/>
            <circle cx="290" cy="290" r="3" fill="#ef5023" opacity="0.5"/>
            <circle cx="290" cy="180" r="2.5" fill="#ef5023" opacity="0.4"/>
            <circle cx="310" cy="140" r="2.5" fill="#ffffff" opacity="0.15"/>

            {/* IC chip bottom-left area */}
            <rect x="20" y="310" width="36" height="36" rx="4" stroke="#ef5023" strokeWidth="1.2" opacity="0.4"/>
            <line x1="26" y1="310" x2="26" y2="305" stroke="#ef5023" strokeWidth="1" opacity="0.4"/>
            <line x1="32" y1="310" x2="32" y2="305" stroke="#ef5023" strokeWidth="1" opacity="0.4"/>
            <line x1="38" y1="310" x2="38" y2="305" stroke="#ef5023" strokeWidth="1" opacity="0.4"/>
            <line x1="44" y1="310" x2="44" y2="305" stroke="#ef5023" strokeWidth="1" opacity="0.4"/>
            <line x1="50" y1="310" x2="50" y2="305" stroke="#ef5023" strokeWidth="1" opacity="0.4"/>

            {/* IC chip right area */}
            <rect x="300" y="50" width="40" height="40" rx="4" stroke="#ffffff" strokeWidth="1" opacity="0.15"/>
            <line x1="300" y1="58" x2="295" y2="58" stroke="#ffffff" strokeWidth="1" opacity="0.15"/>
            <line x1="300" y1="66" x2="295" y2="66" stroke="#ffffff" strokeWidth="1" opacity="0.15"/>
            <line x1="300" y1="74" x2="295" y2="74" stroke="#ffffff" strokeWidth="1" opacity="0.15"/>
            <line x1="300" y1="82" x2="295" y2="82" stroke="#ffffff" strokeWidth="1" opacity="0.15"/>

            {/* small node rings */}
            <circle cx="40" cy="280" r="6" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.3"/>
            <circle cx="120" cy="200" r="6" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.3"/>
            <circle cx="220" cy="120" r="6" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.3"/>
            <circle cx="290" cy="290" r="5" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.25"/>
          </svg>

          {/* circuit board small top-right */}
          <svg className="absolute pointer-events-none" style={{ top: 0, right: 0, width: "218px", height: "218px", opacity: 0.8, zIndex: 0 }} viewBox="0 0 354 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="354" x2="40" y2="280" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="40" y1="280" x2="120" y2="280" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="120" y1="280" x2="120" y2="200" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="120" y1="200" x2="220" y2="200" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="220" y1="200" x2="220" y2="120" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="220" y1="120" x2="354" y2="120" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="180" y1="354" x2="180" y2="290" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <line x1="180" y1="290" x2="290" y2="290" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <line x1="290" y1="290" x2="290" y2="180" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <line x1="290" y1="180" x2="354" y2="180" stroke="#ef5023" strokeWidth="1" opacity="0.2"/>
            <circle cx="40" cy="280" r="3.5" fill="#ef5023" opacity="0.7"/>
            <circle cx="120" cy="200" r="3.5" fill="#ef5023" opacity="0.7"/>
            <circle cx="220" cy="120" r="3.5" fill="#ef5023" opacity="0.7"/>
            <circle cx="290" cy="290" r="3" fill="#ef5023" opacity="0.5"/>
            <circle cx="40" cy="280" r="6" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.3"/>
            <circle cx="120" cy="200" r="6" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.3"/>
            <rect x="300" y="50" width="40" height="40" rx="4" stroke="#ef5023" strokeWidth="1" opacity="0.25"/>
            <line x1="300" y1="58" x2="295" y2="58" stroke="#ef5023" strokeWidth="1" opacity="0.25"/>
            <line x1="300" y1="66" x2="295" y2="66" stroke="#ef5023" strokeWidth="1" opacity="0.25"/>
            <line x1="300" y1="74" x2="295" y2="74" stroke="#ef5023" strokeWidth="1" opacity="0.25"/>
          </svg>

          {/* circuit board small bottom-right */}
          <svg className="absolute pointer-events-none" style={{ bottom: 0, right: 0, width: "164px", height: "164px", opacity: 0.8, zIndex: 0 }} viewBox="0 0 354 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="354" x2="40" y2="280" stroke="#ffffff" strokeWidth="1" opacity="0.2"/>
            <line x1="40" y1="280" x2="160" y2="280" stroke="#ffffff" strokeWidth="1" opacity="0.2"/>
            <line x1="160" y1="280" x2="160" y2="180" stroke="#ffffff" strokeWidth="1" opacity="0.2"/>
            <line x1="160" y1="180" x2="290" y2="180" stroke="#ffffff" strokeWidth="1" opacity="0.2"/>
            <line x1="290" y1="180" x2="290" y2="354" stroke="#ffffff" strokeWidth="1" opacity="0.2"/>
            <line x1="100" y1="354" x2="100" y2="320" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="100" y1="320" x2="220" y2="320" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="220" y1="320" x2="220" y2="240" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <line x1="220" y1="240" x2="354" y2="240" stroke="#ef5023" strokeWidth="1" opacity="0.3"/>
            <circle cx="40" cy="280" r="3" fill="#ffffff" opacity="0.3"/>
            <circle cx="160" cy="280" r="3" fill="#ffffff" opacity="0.3"/>
            <circle cx="160" cy="180" r="3" fill="#ffffff" opacity="0.3"/>
            <circle cx="100" cy="320" r="3" fill="#ef5023" opacity="0.5"/>
            <circle cx="220" cy="320" r="3" fill="#ef5023" opacity="0.5"/>
            <circle cx="220" cy="240" r="3" fill="#ef5023" opacity="0.5"/>
            <rect x="240" y="290" width="30" height="30" rx="3" stroke="#ffffff" strokeWidth="0.8" opacity="0.2"/>
          </svg>

          <div className="max-w-[1320px] mx-auto relative" style={{ zIndex: 3 }}>
            {/* header */}
            <div className="flex flex-col gap-[8px] mb-[40px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">TECH STACK</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                Our Technologies and Platforms
              </h2>
            </div>

            {/* tabs */}
            <div className="flex items-center gap-[8px] mb-[48px] flex-wrap">
              {techTabs.map((tab) => {
                const isActive = activeTechTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTechTab(tab)}
                    className="px-[18px] py-[8px] rounded-full text-[13px] font-semibold transition-all cursor-pointer whitespace-nowrap"
                    style={{
                      background: isActive ? "transparent" : "transparent",
                      border: isActive ? "1.5px solid #ef5023" : "1.5px solid transparent",
                      color: isActive ? "#ef5023" : "rgba(255,255,255,0.65)",
                    }}
                    onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.90)"; }}
                    onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* tech grid — compact pills, 5 cols */}
            <div className="flex flex-wrap gap-[8px]">
              {activeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-[8px] px-[14px] py-[8px] rounded-full cursor-default transition-all flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.16)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <div className="w-[16px] h-[16px] flex-shrink-0">{item.svg}</div>
                  <span className="text-[12px] font-medium whitespace-nowrap" style={{ color: "rgba(255,255,255,0.7)" }}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
          );
        })()}

        {/* ── CASE STUDY FEATURE ──────────────────────────────────────────── */}
        {(() => {
          const activeCaseStudy = caseStudies.find(c => c.model === caseModel) ?? caseStudies[0];
          return (
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }} onMouseEnter={pauseCaseTimer} onMouseLeave={resumeCaseTimer}>

          {/* section header */}
          <div className="max-w-[1320px] mx-auto flex items-end justify-between mb-[24px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">CASE STUDIES</p>
              </div>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                Results our clients <span className="text-[#ef5023]">have seen</span>
              </h2>
            </div>
          </div>

          {/* model filter tabs */}
          <div className="max-w-[1200px] mx-auto flex gap-[0px] mb-[24px] justify-center border-b border-[#e8e8e8]">
            {CASE_TABS.map((tab, ti) => (
              <button
                key={tab}
                onClick={() => { if (caseTimerRef.current) clearInterval(caseTimerRef.current); setCaseTabIndex(ti); caseTimerRef.current = setInterval(() => { if (!caseTimerPaused.current) setCaseTabIndex(i => (i + 1) % CASE_TABS.length); }, 6000); }}
                className="text-[13px] px-[20px] py-[10px] transition-all duration-200 relative whitespace-nowrap"
                style={{
                  background: "transparent",
                  color: caseModel === tab ? "#ef5023" : "#555",
                  fontWeight: 700,
                  border: "none",
                  borderBottom: caseModel === tab ? "2px solid #ef5023" : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* card */}
          <div className="max-w-[1200px] mx-auto rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-2" style={{ background: "#f5f5f5", border: "1px solid #e8e8e8", minHeight: "460px" }}>

            {/* LEFT - dark text card */}
            <div className="relative flex flex-col justify-between gap-[28px] px-[20px] md:px-[40px] py-[28px] md:py-[40px] md:rounded-l-[20px]" style={{ background: "#1a1a1a" }}>
              {/* dot pattern */}
              <div className="absolute inset-0 pointer-events-none rounded-l-[20px]"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

              <div className="relative flex flex-col gap-[20px]">
                {/* tag */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white border border-white/20 px-[10px] py-[4px] rounded-full">
                    {activeCaseStudy.industry}
                  </span>
                </div>

                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-black text-white text-[24px] leading-[32px] tracking-[-0.8px]">
                    {activeCaseStudy.title}
                  </h3>
                  <div className="w-[32px] h-[1px]" style={{ background: "#ef5023" }} />
                  <p className="text-white/60 text-[14px] leading-[1.8]">
                    {activeCaseStudy.desc}
                  </p>
                </div>
              </div>

              {/* bottom: metrics + link */}
              <div className="relative flex flex-col gap-[24px]">
                <div className="flex gap-[32px]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                  {activeCaseStudy.metrics.map(({ value, label }) => (
                    <div key={label} className="flex flex-col gap-[4px]">
                      <span className="font-black text-white text-[22px] leading-[1] tracking-[-1px]">{value}</span>
                      <span className="text-white/40 text-[11px] font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-[10px]">
                  <Link
                    href={activeCaseStudy.link}
                    className="group inline-flex items-center gap-[8px] text-white text-[12px] font-bold px-[16px] h-[36px] rounded-[8px] transition-all duration-200 hover:bg-[#d94010]"
                    style={{ textDecoration: "none", background: "#ef5023" }}
                  >
                    Detail
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT - image */}
            <div className="relative overflow-hidden group" style={{ background: "#f0f0f0" }}>
              <img
                src={activeCaseStudy.image}
                alt={activeCaseStudy.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

          </div>

          {/* CTA button */}
          <div className="max-w-[1320px] mx-auto flex justify-center pt-[40px]">
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
        })()}



        {/* ── ENGAGEMENT MODELS ───────────────────────────────────────────── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            {/* header */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">ENGAGEMENT MODELS</p>
              <h2 className="font-black text-[#0a0a0a] text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] tracking-[-1.5px] md:whitespace-nowrap">
                Choose how you want to work with us
              </h2>
              <p className="text-[#666] text-[16px] leading-[1.7] md:whitespace-nowrap">
                All models include dedicated engineers, full transparency, and no hidden fees.
              </p>
            </div>

            {/* 4-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] items-stretch">

              {/* DEDICATED TEAM — highlighted */}
              {[
                {
                  tag: "DEDICATED TEAM",
                  popular: true,
                  price: "",
                  note: "",
                  best: "Best for: long-term product teams",
                  badge: "85%+ of clients stay for year 2+",
                  desc: "A full engineering team working exclusively on your product — managed, retained, and ready to own your roadmap.",
                  features: ["Dedicated full-time engineers", "Managed HR & payroll", "Scrum Master included", "Monthly performance reviews"],
                },
                {
                  tag: "STAFF AUGMENTATION",
                  popular: false,
                  price: "",
                  note: "",
                  best: "Best for: filling specific skill gaps fast",
                  badge: null,
                  desc: "Engineers who embed directly into your team — productive from day one, no HR overhead, flexible scale.",
                  features: ["Individual or small pods", "Direct team integration", "Ready in 1–3 weeks", "Flexible ramp-up"],
                },
                {
                  tag: "PROJECT-BASED",
                  popular: false,
                  price: "",
                  note: "",
                  best: "Best for: MVPs and defined-scope builds",
                  badge: null,
                  desc: "End-to-end delivery on a defined scope, milestone billing, with a dedicated PM running every sprint.",
                  features: ["Fixed scope & timeline", "Milestone-based billing", "Dedicated project manager", "Post-launch support"],
                },
                {
                  tag: "MANAGED SERVICES",
                  popular: false,
                  price: "",
                  note: "",
                  best: "Best for: ongoing operations and reliability",
                  badge: null,
                  desc: "We run and maintain your product end to end — monitoring, SLAs, and continuous improvements included.",
                  features: ["Ongoing maintenance & support", "Monitoring & SLAs", "Continuous improvements", "Predictable monthly cost"],
                },
              ].map(({ tag, popular, price, note, best, badge, desc, features }) => (
                <div
                  key={tag}
                  className="relative rounded-[20px] p-[28px] flex flex-col gap-[20px] transition-all duration-200"
                  style={{
                    background: "#ffffff",
                    border: popular ? "2px solid rgba(239,80,35,0.45)" : "1px solid #e4e4e4",
                    boxShadow: popular ? "0 40px 80px -16px rgba(0,0,0,0.28), 0 16px 32px -8px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* popular badge */}
                  {popular && (
                    <div className="absolute -top-[13px] left-[28px]">
                      <span className="text-[10px] font-black tracking-[1.5px] uppercase bg-[#ef5023] text-white px-[12px] py-[4px] rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* tag */}
                  <p className="text-[13px] font-black tracking-[2px] uppercase" style={{ color: "#0a0a0a" }}>{tag}</p>

                  {/* best for */}
                  <p className="text-[13px] font-semibold" style={{ color: "#666" }}>{best}</p>

                  {/* retention badge */}
                  {badge && (
                    <div className="inline-flex items-center gap-[7px] self-start px-[12px] py-[6px] rounded-full"
                      style={{ background: "#ef5023" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="white"/></svg>
                      <span className="text-[11px] font-bold tracking-[0.3px] text-white">{badge}</span>
                    </div>
                  )}

                  {/* desc */}
                  <p className="text-[14px] leading-[1.8]" style={{ color: "#666" }}>{desc}</p>

                  {/* divider */}
                  <div style={{ borderTop: "1px solid #ebebeb" }} />

                  {/* features */}
                  <ul className="flex flex-col gap-[10px] flex-1">
                    {features.map(f => (
                      <li key={f} className="text-[14px] leading-[1.6]" style={{ color: "#444" }}>{f}</li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="w-full font-medium text-[13px] h-[44px] rounded-[10px] inline-flex items-center justify-center gap-[8px] transition-all duration-200"
                    style={{
                      background: popular ? "#ef5023" : "transparent",
                      color: popular ? "#fff" : "#0a0a0a",
                      border: popular ? "none" : "1px solid #e0e0e0",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      if (popular) { el.style.background = "#d94010"; }
                      else { el.style.borderColor = "#0a0a0a"; }
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      if (popular) { el.style.background = "#ef5023"; }
                      else { el.style.borderColor = "#e0e0e0"; }
                    }}
                  >
                    Request a Free Proposal
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 10. TESTIMONIALS ─────────────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#080808" }}>

          {/* subtle grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            zIndex: 0,
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #080808 100%)", zIndex: 1 }} />
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]" style={{ zIndex: 10 }}>

            {/* header */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">TESTIMONIALS</p>
                <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                  What Our <span className="text-[#ef5023]">Partners Say</span>
                </h2>
              </div>
              <Link
                href="/case-study"
                className="text-[#666] text-[12px] font-semibold hover:text-white transition-colors inline-flex items-center gap-[6px] flex-shrink-0"
                style={{ textDecoration: "none" }}
              >
                View all <span className="text-[#ef5023]">→</span>
              </Link>
            </div>

            {/* static grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {testimonials.map(({ quote, name, role, avatar }) => (
                <div
                  key={`${name}-${role}`}
                  className="relative rounded-[16px] p-[20px] flex flex-col gap-[10px] overflow-hidden"
                  style={{
                    background: "#0f0d0c",
                    border: "1px solid rgba(239,80,35,0.18)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,120,50,0.10)",
                  }}
                >
                  <div className="absolute pointer-events-none" style={{ left: "-10px", top: "-10px", width: "80px", height: "80px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 70%)" }} />
                  <div className="font-black leading-[0.8] select-none text-[36px]" style={{ color: "rgba(239,80,35,0.18)" }}>&ldquo;</div>
                  <div className="text-[#ef5023] text-[11px]" style={{ letterSpacing: "2px" }}>★★★★★</div>
                  <p className="text-white text-[13px] leading-[1.75] italic flex-1">&ldquo;{quote}&rdquo;</p>
                  <div className="flex items-center gap-[10px] pt-[10px] mt-auto" style={{ borderTop: "1px solid rgba(239,80,35,0.10)" }}>
                    <img src={avatar} alt={name} className="w-[36px] h-[36px] rounded-full object-cover flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-[13px]">{name}</div>
                      <div className="text-[11px]" style={{ color: "rgba(239,120,70,0.75)" }}>{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── ONBOARDING ──────────────────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#080808" }}>
          {/* top-center orange glow */}
          <div className="absolute pointer-events-none" style={{ left: "50%", top: "-60px", transform: "translateX(-50%)", width: "700px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.09) 0%, transparent 65%)", zIndex: 0 }} />
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[64px]" style={{ zIndex: 1 }}>

            {/* header */}
            <div className="flex flex-col gap-[14px] max-w-[640px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">GETTING STARTED</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                From first call to a shipping team,<br />simpler than you think.
              </h2>
              <p className="text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
                No lengthy procurement. No months of interviews.
              </p>
            </div>

            {/* steps */}
            <div className="relative">
              {/* continuous connector line — absolute, behind circles */}
              <div className="hidden md:block absolute left-[calc(16.667%)] right-[calc(16.667%)] h-[2px] pointer-events-none"
                style={{ top: "48px", background: "linear-gradient(90deg, #ef5023 0%, rgba(239,80,35,0.4) 50%, #ef5023 100%)" }} />

              <div className="grid grid-cols-1 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    timeline: "Day 1–5",
                    title: "We map your needs",
                    desc: "30 minutes. A solutions architect maps your stack and tells you exactly what your team would cost before you commit to anything.",
                    bullets: ["Free 30-min architecture call", "Stack & team size scoping", "Transparent cost estimate", "No obligation to proceed"],
                    deliverable: "Proposal in your inbox",
                  },
                  {
                    step: "02",
                    timeline: "Weeks 1–3",
                    title: "You approve every hire",
                    desc: "We shortlist candidates in 3–5 days, matched to your tech stack. You interview every engineer. No one joins without your sign-off.",
                    bullets: ["3–5 day candidate shortlist", "CV + technical portfolio review", "You run the final interview", "Replacement guarantee if needed"],
                    deliverable: "Signed team, ready to start",
                  },
                  {
                    step: "03",
                    timeline: "Weeks 4–6",
                    title: "Your team ships",
                    desc: "Engineers join your Slack, GitHub, and standups from week one. No PM layer. Most teams push their first commit by week 4.",
                    bullets: ["Day-1 access to Slack & GitHub", "Sprint setup with your workflow", "First commit by week 4", "Weekly async progress reports"],
                    deliverable: "Code in production",
                  },
                ].map(({ step, timeline, title, desc, bullets, deliverable }, idx) => (
                  <div key={step} className="flex flex-col items-center px-[12px] md:px-[40px]">

                    {/* timeline label */}
                    <p className="text-[11px] font-black tracking-[2px] uppercase mb-[10px]" style={{ color: "#ef5023" }}>{timeline}</p>

                    {/* circle icon — sits on top of the line */}
                    <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-[36px] relative z-10"
                      style={{ background: "#ef5023", boxShadow: "0 0 0 8px #080808, 0 0 0 10px rgba(239,80,35,0.3)" }}>
                      {idx === 0 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}><circle cx="11" cy="11" r="7" stroke="white" strokeWidth="1.8"/><path d="M11 8v3l2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><path d="M18.5 18.5l-2.5-2.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>}
                      {idx === 1 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}><circle cx="9" cy="7" r="3" stroke="white" strokeWidth="1.8"/><circle cx="17" cy="9" r="2.5" stroke="white" strokeWidth="1.8"/><path d="M3 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><path d="M17 14c1.657 0 3 1.343 3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/></svg>}
                      {idx === 2 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}><path d="M12 3L4 6.5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11v-6L12 3z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.5 12l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>

                    {/* card */}
                    <div className="w-full rounded-[16px] p-[24px] flex flex-col gap-[16px]"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>

                      {/* step number + title */}
                      <div className="flex items-center gap-[10px]">
                        <span className="font-black text-[40px] leading-[1] tracking-[-3px] select-none flex-shrink-0"
                          style={{ color: "rgba(239,80,35,0.20)" }}>{step}</span>
                        <h3 className="font-black text-white text-[20px] leading-[28px] tracking-[-0.5px]">{title}</h3>
                      </div>

                      {/* desc */}
                      <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.65)" }}>{desc}</p>

                      {/* divider */}
                      <div className="h-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />

                      {/* bullets */}
                      <div className="flex flex-col gap-[8px]">
                        {bullets.map((b) => (
                          <div key={b} className="flex items-start gap-[8px]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-[2px]">
                              <circle cx="7" cy="7" r="6" stroke="rgba(239,80,35,0.4)" strokeWidth="1.2"/>
                              <path d="M4.5 7l2 2 3-3" stroke="#ef5023" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.70)" }}>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* deliverable badge */}
                      <div className="flex items-center gap-[6px] mt-[4px] self-start px-[10px] py-[5px] rounded-full"
                        style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5.5l2 2 4-4" stroke="#ef5023" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[11px] font-bold" style={{ color: "#ef5023" }}>{deliverable}</span>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center gap-[10px] font-black text-[14px] px-[32px] h-[52px] rounded-full text-white transition-all duration-200"
                style={{ background: "#ef5023", textDecoration: "none", boxShadow: "0 0 0 0 rgba(239,80,35,0.4)" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#d94010"; el.style.boxShadow = "0 0 0 8px rgba(239,80,35,0.15)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#ef5023"; el.style.boxShadow = "0 0 0 0 rgba(239,80,35,0.4)"; }}
              >
                Book a Discovery Call
                <span className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-[2px]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            </div>

          </div>
        </section>

        {/* ── FAQ / OBJECTION HANDLING ────────────────────────────────────── */}
<section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
  <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

    {/* header */}
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">COMMON QUESTIONS</p>
        </div>
        <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
          Everything you need <span className="text-[#ef5023]">to know</span>
        </h2>
      </div>
    </div>

    {/* two-column layout: left = question list, right = answer */}
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[24px]">

      {/* left - stacked question rows */}
      <div className="flex flex-col gap-[4px]">
        {faqCategories.map(({ label, question }, i) => (
          <button
            key={label}
            onClick={() => setFaqIndex(i)}
            aria-expanded={faqIndex === i}
            className="group text-left flex items-start gap-[16px] px-[20px] py-[11px] rounded-[12px] transition-all duration-150 border-none cursor-pointer"
            style={{
              background: faqIndex === i ? "rgba(239,80,35,0.07)" : "transparent",
              boxShadow: faqIndex === i ? "0 2px 12px rgba(239,80,35,0.08)" : "none",
            }}
          >
            {/* active indicator */}
            <div
              className="w-[3px] rounded-full flex-shrink-0 mt-[2px] transition-all duration-150"
              style={{
                height: "18px",
                background: faqIndex === i ? "#ef5023" : "transparent",
              }}
            />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#777" }}>{label}</span>
              <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#555" }}>{question}</span>
            </div>
          </button>
        ))}
      </div>

      {/* right - answer panel */}
      <div key={faqIndex} className="rounded-[16px] p-[36px] flex flex-col gap-[20px] animate-faq-fade" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#ef5023]">{faqCategories[faqIndex].label}</span>
          <h3 className="font-black text-[#0a0a0a] text-[24px] leading-[1.35] tracking-[-0.4px]">
            {faqCategories[faqIndex].question}
          </h3>
        </div>
        <p className="text-[#666] text-[14px] leading-[1.8]">
          {faqCategories[faqIndex].answer}
        </p>
      </div>

    </div>

  </div>
</section>

        {/* ── AWARDS ───────────────────────────────────────────────────────── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden bg-[#0a0a0a]" style={{ borderTop: "1px solid #1a1a1a" }}>
          {/* constellation background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
              <line x1="80"  y1="30"  x2="200" y2="80"/>
              <line x1="200" y1="80"  x2="320" y2="40"/>
              <line x1="320" y1="40"  x2="420" y2="120"/>
              <line x1="420" y1="120" x2="560" y2="60"/>
              <line x1="560" y1="60"  x2="680" y2="110"/>
              <line x1="680" y1="110" x2="800" y2="50"/>
              <line x1="800" y1="50"  x2="920" y2="90"/>
              <line x1="200" y1="80"  x2="260" y2="180"/>
              <line x1="260" y1="180" x2="380" y2="200"/>
              <line x1="380" y1="200" x2="420" y2="120"/>
              <line x1="380" y1="200" x2="500" y2="240"/>
              <line x1="500" y1="240" x2="620" y2="200"/>
              <line x1="620" y1="200" x2="680" y2="110"/>
              <line x1="620" y1="200" x2="740" y2="240"/>
              <line x1="740" y1="240" x2="860" y2="210"/>
              <line x1="860" y1="210" x2="920" y2="90"/>
              <line x1="140" y1="260" x2="260" y2="180"/>
              <line x1="140" y1="260" x2="60"  y2="180"/>
              <line x1="60"  y1="180" x2="80"  y2="30"/>
              <line x1="500" y1="240" x2="480" y2="300"/>
              <line x1="740" y1="240" x2="780" y2="310"/>
            </g>
            <g fill="white">
              <circle cx="80"  cy="30"  r="1.5" opacity="0.25"/>
              <circle cx="320" cy="40"  r="2"   opacity="0.3"/>
              <circle cx="560" cy="60"  r="1.5" opacity="0.25"/>
              <circle cx="800" cy="50"  r="2"   opacity="0.28"/>
              <circle cx="920" cy="90"  r="1.5" opacity="0.22"/>
              <circle cx="260" cy="180" r="1.5" opacity="0.22"/>
              <circle cx="500" cy="240" r="2"   opacity="0.25"/>
              <circle cx="740" cy="240" r="1.5" opacity="0.22"/>
              <circle cx="60"  cy="180" r="1.2" opacity="0.2"/>
              <circle cx="140" cy="260" r="1.2" opacity="0.2"/>
              <circle cx="860" cy="210" r="1.5" opacity="0.22"/>
              <circle cx="480" cy="300" r="1.2" opacity="0.18"/>
              <circle cx="780" cy="310" r="1.2" opacity="0.18"/>
            </g>
            <g fill="#ef5023">
              <circle cx="200" cy="80"  r="2.5" opacity="0.55"/>
              <circle cx="420" cy="120" r="2"   opacity="0.5"/>
              <circle cx="680" cy="110" r="2.5" opacity="0.5"/>
              <circle cx="380" cy="200" r="2"   opacity="0.5"/>
              <circle cx="620" cy="200" r="2.5" opacity="0.55"/>
            </g>
            <g fill="none" stroke="#ef5023">
              <circle cx="200" cy="80"  r="6" strokeWidth="0.6" opacity="0.18"/>
              <circle cx="420" cy="120" r="6" strokeWidth="0.6" opacity="0.15"/>
              <circle cx="680" cy="110" r="6" strokeWidth="0.6" opacity="0.18"/>
              <circle cx="620" cy="200" r="6" strokeWidth="0.6" opacity="0.15"/>
            </g>
          </svg>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 2 }}>

            {/* header */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">RECOGNITION</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                Award-winning <span className="text-[#ef5023]">engineering partner</span>
              </h2>
              <p className="text-[#555] text-[16px] max-w-[480px]">Recognized by the world's leading B2B review and research platforms</p>
            </div>

            {/* awards marquee */}
            <div className="relative" style={{ overflowX: "hidden", overflowY: "visible", paddingTop: "40px", paddingBottom: "40px", marginTop: "-40px", marginBottom: "-40px" }}>
              <div className="absolute left-0 top-0 bottom-0 w-[80px] pointer-events-none z-10" style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-[80px] pointer-events-none z-10" style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />
              <div className="flex gap-[12px] animate-awards-marquee w-max">
                {[...Array(2)].flatMap(() => [
                  "/Media/Award/2026-05-29_170835.png",
                  "/Media/Award/2026-05-29_170930.png",
                  "/Media/Award/2026-05-29_170943.png",
                  "/Media/Award/2026-05-29_170954.png",
                  "/Media/Award/2026-05-29_171006.png",
                  "/Media/Award/2026-05-29_171019.png",
                  "/Media/Award/2026-05-29_171030.png",
                  "/Media/Award/2026-05-29_171041.png",
                  "/Media/Award/2026-05-29_171051.png",
                  "/Media/Award/2026-05-29_171115.png",
                  "/Media/Award/2026-05-29_171127.png",
                ]).map((src, i) => (
                  <button
                    key={i}
                    className="award-card flex-shrink-0 flex items-center justify-center rounded-[12px] p-[12px] cursor-pointer"
                    style={{ width: "120px", height: "120px", background: "#111", border: "1px solid #1f1f1f" }}
                    aria-label={`View award ${i + 1}`}
                    onClick={() => setSelectedAward(src)}
                  >
                    <img src={src} alt={`Award ${i + 1}`} className="w-full h-full object-contain rounded-[8px]" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* award lightbox */}
          {selectedAward && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Award detail"
              className="fixed inset-0 flex items-center justify-center bg-black/60 cursor-pointer"
              style={{ zIndex: 100 }}
              onClick={() => setSelectedAward(null)}
            >
              <div
                className="rounded-[20px] p-[24px] cursor-default"
                style={{
                  background: "#111",
                  border: "1px solid #2a2a2a",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
                  animation: "awardPopIn 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onClick={e => e.stopPropagation()}
              >
                <img src={selectedAward} alt="Award" style={{ width: "280px", height: "280px", objectFit: "contain", borderRadius: "12px" }} />
                <button
                  onClick={() => setSelectedAward(null)}
                  className="mt-[16px] w-full text-center text-[12px] font-semibold"
                  style={{ color: "rgba(255,255,255,0.45)", background: "none", border: "none", cursor: "pointer" }}
                  aria-label="Close award detail"
                >
                  Press Esc or click outside to close
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ── 11. CTA ──────────────────────────────────────────────────────── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          <div className="max-w-[1320px] mx-auto">
            <div className="relative rounded-[20px] overflow-hidden px-[56px] py-[44px] flex flex-col items-center text-center gap-[24px]"
              style={{ background: "#ef5023", boxShadow: "0 10px 30px -8px rgba(239,80,35,0.25), 0 4px 12px -4px rgba(239,80,35,0.15)" }}>

              {/* topographic contour lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="15%" cy="110%" rx="60%" ry="40%" fill="none" stroke="white" strokeWidth="1"/>
                <ellipse cx="15%" cy="110%" rx="46%" ry="30%" fill="none" stroke="white" strokeWidth="1"/>
                <ellipse cx="15%" cy="110%" rx="32%" ry="20%" fill="none" stroke="white" strokeWidth="1.2"/>
                <ellipse cx="15%" cy="110%" rx="20%" ry="12%" fill="none" stroke="white" strokeWidth="1.4"/>
                <ellipse cx="85%" cy="-10%" rx="50%" ry="35%" fill="none" stroke="white" strokeWidth="0.8"/>
                <ellipse cx="85%" cy="-10%" rx="36%" ry="24%" fill="none" stroke="white" strokeWidth="0.8"/>
                <ellipse cx="85%" cy="-10%" rx="22%" ry="14%" fill="none" stroke="white" strokeWidth="1"/>
              </svg>

              {/* content */}
              <div className="relative flex flex-col items-center gap-[16px] max-w-[640px]">
                <span className="text-white/70 text-[11px] font-bold tracking-[2px] uppercase">READY TO BUILD?</span>
                <h2 className="font-black text-white text-[32px] leading-[1.2] tracking-[-1px]">
                  Start your dedicated team in 2 weeks.
                </h2>
                <p className="text-white/70 text-[14px] leading-[1.6]">
                  No commitment. Free 30-min discovery call to scope your project and meet your first engineer.
                </p>
              </div>

              {/* CTAs */}
              <div className="relative flex items-center gap-[12px]">
                <Link
                  href="/contact"
                  className="h-[44px] px-[28px] rounded-[10px] font-bold text-[#ef5023] text-[13px] inline-flex items-center gap-[7px] transition-all duration-200 hover:bg-[#f5f5f5]"
                  style={{ background: "#ffffff", textDecoration: "none" }}
                >
                  Book a Free Call
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/case-study"
                  className="h-[44px] px-[24px] rounded-[10px] font-semibold text-white/80 text-[13px] inline-flex items-center transition-all duration-200 hover:text-white hover:bg-white/10"
                  style={{ textDecoration: "none" }}
                >
                  View Portfolio
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
        @keyframes faqFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-faq-fade { animation: faqFade 0.25s ease forwards; }
      `}</style>
    </div>
  );
}