"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

const JOBS = [
  {
    title: "Technical Project Manager",
    department: "Operations",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,800\u2013$4,500/mo",
    desc: "Managing 3\u20135 concurrent ODC engagements across AU/UK/SG clients. English-first communication, daily client standups, sprint planning, escalation management. PMP or SAFe a plus. You will be the primary day-to-day relationship manager for enterprise clients.",
    skills: ["Jira", "Linear", "Confluence", "Agile/Scrum", "Risk Management", "Client Reporting"],
  },
  {
    title: "Solution Architect",
    department: "Engineering",
    level: "Lead / Principal",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$4,500\u2013$7,000/mo",
    desc: "Client-facing pre-sales and delivery architecture role. Lead technical discovery calls, produce architecture proposals, and oversee complex multi-service ODC builds across multiple clients. This is a high-visibility role with direct exposure to C-suite stakeholders at US, EU, and AU clients.",
    skills: ["AWS", "System Design", "TypeScript", "Node.js", "PostgreSQL", "Kafka"],
  },
  {
    title: "AI / ML Engineer",
    department: "AI & Machine Learning",
    level: "Mid-Level",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,800\u2013$4,500/mo",
    desc: "AI team building RAG-powered enterprise knowledge agents and agentic workflows for clients in healthcare, legal, and fintech. LLM orchestration, vector search, and production ML deployment. You will work on real-world AI products used by enterprise clients across US and EU markets.",
    skills: ["Python", "LangChain", "LangGraph", "FastAPI", "OpenAI", "Pinecone"],
  },
  {
    title: "Senior DevOps / Cloud Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,500\u2013$4,500/mo",
    desc: "Platform engineer for a multi-client infrastructure pod supporting 8+ active ODC engagements. Building shared CI/CD platform, GitOps workflows, and cost optimisation tooling. You will own the infrastructure layer across multiple AWS accounts and have high autonomy.",
    skills: ["AWS", "Kubernetes", "Terraform", "ArgoCD", "GitHub Actions", "Datadog"],
  },
  {
    title: "Senior QA Automation Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,000\u2013$3,500/mo",
    desc: "QA lead for a German gaming client \u2014 building automated regression suites that run 5,000+ scenarios per nightly build. Performance testing with k6 for live multiplayer APIs. You will design the full test strategy and mentor 2 junior QA engineers.",
    skills: ["Playwright", "TypeScript", "Cypress", "Jest", "k6", "GitHub Actions"],
  },
  {
    title: "Lead Node.js Backend Engineer",
    department: "Engineering",
    level: "Lead / Principal",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$3,500\u2013$5,500/mo",
    desc: "Technical lead for a US logistics startup ODC. Microservices architecture, event-driven design, real-time fleet tracking APIs. Own architecture decisions and mentor 3 mid-senior engineers. You will be the primary technical point of contact for the client CTO.",
    skills: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Docker"],
  },
  {
    title: "Senior React Native Developer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,500\u2013$4,200/mo",
    desc: "Embedded in an Australian fintech ODC team building a cross-platform mobile banking app. 60fps UI standards, Detox E2E automation. You will work on the consumer-facing banking app used by 500K+ Australians, with direct access to the client product team in AU business hours.",
    skills: ["React Native", "TypeScript", "Expo", "Redux Toolkit", "Detox", "Firebase"],
  },
  {
    title: "Senior React Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,500\u2013$4,000/mo",
    desc: "Working with a UK SaaS client on a B2B analytics dashboard \u2014 React 18 + Next.js 15, TypeScript-strict, component-driven design system. You will own multiple feature squads, contribute to architecture decisions, and work directly with the client engineering team in UK business hours overlap.",
    skills: ["React 18+", "TypeScript", "Next.js", "GraphQL", "Jest", "Storybook"],
  },
];

const DEPARTMENTS = ["All", "Operations", "Engineering", "AI & Machine Learning"];

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJobs = activeFilter === "All"
    ? JOBS
    : JOBS.filter((j) => j.department === activeFilter);

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
              style={{ background: "linear-gradient(to right, #0d0d0d 55%, rgba(13,13,13,0.85) 75%, transparent 100%)" }}
            />
            <div className="absolute inset-0 block md:hidden" style={{ background: "rgba(13,13,13,0.35)" }} />
          </div>
          {/* Halftone dot matrix — masked to dark left zone */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 38%, transparent 52%)",
            maskImage: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 38%, transparent 52%)",
          }} />
          {/* Floating ring */}
          <div className="absolute pointer-events-none" style={{ top: "18%", left: "3%", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.14)" }} />
          {/* Orange ambient glow bottom-left */}
          <div className="absolute bottom-0 left-0 w-[420px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom left, rgba(239,80,35,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />

          <div className="relative w-full max-w-[1320px] mx-auto">
            <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">

              <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
                Build Great Software.<br />
                <span className="text-[#ef5023]">Work with the Best.</span>
              </h1>

              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
                Join Vietnam&apos;s leading AI-native offshore development center. Work on international products used by millions of users across the US, EU, Singapore, and Australia, without leaving Vietnam.
              </p>

              <div className="flex flex-wrap items-center gap-[12px] pt-[4px]">
                <a
                  href="#open-roles"
                  className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
                >
                  View Open Roles
                </a>
                <a
                  href="/contact"
                  className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                  style={{ textDecoration: "none" }}
                >
                  Send Open Application
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Life at InApps ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>
          {/* L-grid lines + crosshair accents — dark-inverted from home "AI-Native" section */}
          <svg className="absolute inset-0 pointer-events-none w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="life-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.06"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#life-grid)"/>
            <g opacity="0.28">
              <line x1="192" y1="80" x2="192" y2="112" stroke="#ef5023" strokeWidth="1.5"/>
              <line x1="176" y1="96" x2="208" y2="96" stroke="#ef5023" strokeWidth="1.5"/>
              <circle cx="192" cy="96" r="4" fill="none" stroke="#ef5023" strokeWidth="1"/>
            </g>
            <g opacity="0.20">
              <line x1="880" y1="200" x2="880" y2="232" stroke="#ef5023" strokeWidth="1.5"/>
              <line x1="864" y1="216" x2="896" y2="216" stroke="#ef5023" strokeWidth="1.5"/>
              <circle cx="880" cy="216" r="4" fill="none" stroke="#ef5023" strokeWidth="1"/>
            </g>
            <g opacity="0.14">
              <line x1="480" y1="380" x2="480" y2="412" stroke="#ef5023" strokeWidth="1.5"/>
              <line x1="464" y1="396" x2="496" y2="396" stroke="#ef5023" strokeWidth="1.5"/>
              <circle cx="480" cy="396" r="4" fill="none" stroke="#ef5023" strokeWidth="1"/>
            </g>
          </svg>
          {/* Glow overlays */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 65%)", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 65%)", filter: "blur(80px)" }} />
          <div className="absolute top-[40%] left-[50%] w-[600px] h-[300px] -translate-x-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(239,80,35,0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />

          <div className="relative max-w-[1320px] mx-auto py-[70px]" style={{ zIndex: 2 }}>
            {/* Section header */}
            <div className="flex flex-col items-start gap-[10px] mb-[48px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">
                Life at InApps
              </p>
              <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px] text-white">
                What makes InApps <span className="text-[#ef5023]">different</span>
              </h2>
              <p className="text-[16px] leading-[28px] max-w-[720px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Not a typical Vietnam outsourcing shop. We run like a product company: English-first, Agile, AI-tooled, and dedicated to one client team at a time.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  ),
                  title: "English-First Communication",
                  desc: "All client communication, technical specs, PR reviews, and standups happen in English. We invest in English coaching for engineers who want to accelerate their communication skills.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  title: "Western Business Hours Overlap",
                  desc: "UK/EU clients: 2\u20134 hours overlap (2pm\u20136pm Vietnam time). AU/SG clients: 3\u20135 hours overlap. US clients: same-day async. Flexible start times to optimise for your client timezone.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                  ),
                  title: "Agile Sprint Model",
                  desc: '2-week sprints with real sprint planning, daily standups, retrospectives, and bi-weekly demos to the client. No waterfall, no "just do what the PM says" culture.',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  ),
                  title: "Dedicated to One Client",
                  desc: "You work on one client\u2019s product, not split across multiple. You own real features, make real architectural decisions, and see your work ship to real users.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ),
                  title: "IP-Safe Environment",
                  desc: "Secure office with VPN access, clean-desk policy, ISO 27001 certified processes. You operate within professional enterprise security standards, building your awareness as you go.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  ),
                  title: "Growth by Numbers",
                  desc: "InApps grew from 50 to 500+ engineers in 6 years. Senior engineers become leads, leads become solution architects. The trajectory is yours to drive.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col gap-[16px] rounded-[20px] p-[32px] transition-all duration-300 cursor-default"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderTop: "1px solid rgba(239,80,35,0.30)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                    e.currentTarget.style.borderTopColor = "rgba(239,80,35,0.70)";
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,80,35,0.12), inset 0 1px 0 rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    const icon = e.currentTarget.querySelector(".card-icon") as HTMLElement;
                    if (icon) icon.style.filter = "drop-shadow(0 0 6px rgba(239,80,35,0.4))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.borderTopColor = "rgba(239,80,35,0.30)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                    const icon = e.currentTarget.querySelector(".card-icon") as HTMLElement;
                    if (icon) icon.style.filter = "none";
                  }}
                >
                  <div className="card-icon flex-shrink-0 transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-[18px] leading-[24px] text-white">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Perks & Benefits ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          {/* Graph paper grid pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #e8e8e8 0px, #e8e8e8 1px, transparent 1px, transparent 28px),
                              repeating-linear-gradient(90deg, #e8e8e8 0px, #e8e8e8 1px, transparent 1px, transparent 28px)`,
            opacity: 0.5,
          }} />

          <div className="relative max-w-[1320px] mx-auto py-[70px]" style={{ zIndex: 2 }}>
            {/* Section header */}
            <div className="flex flex-col items-start gap-[10px] mb-[48px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">
                Perks &amp; Benefits
              </p>
              <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px]" style={{ color: "#0a0a0a" }}>
                Why engineers choose <span className="text-[#ef5023]">InApps</span>
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                  title: "Competitive Salary",
                  desc: "Market-leading compensation with transparent ranges. Salaries benchmarked quarterly against top Vietnam tech companies and adjusted annually.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  title: "Global Products",
                  desc: "Work on products used by millions of users in the US, EU, Singapore, and Australia. International exposure with no relocation required.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                      <path d="M9 9h6v6H9z"/>
                      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
                    </svg>
                  ),
                  title: "AI-First Culture",
                  desc: "GitHub Copilot, Cursor AI, and custom coding agents built into every team\u2019s workflow. InApps-trained engineers consistently outperform the market on AI tool usage.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                  ),
                  title: "L&D Budget",
                  desc: "Annual $1,000 learning budget for certifications, conferences, and courses. Quarterly in-house tech talks and paid AWS/GCP certification preparation.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  ),
                  title: "Premium Healthcare",
                  desc: "Full private health insurance covering you and dependents, including dental and specialist care. No-gap claims for hospitalisation.",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="13 17 18 12 13 7"/>
                      <polyline points="6 17 11 12 6 7"/>
                    </svg>
                  ),
                  title: "Clear Career Ladder",
                  desc: "Engineering levels from Junior to Principal with documented promotion criteria and quarterly reviews. No politics, advancement based on measurable output.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative flex flex-col gap-[14px] rounded-[16px] p-[28px] transition-all duration-300 cursor-default"
                  style={{
                    background: "transparent",
                    borderLeft: "3px solid #e0e0e0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                    e.currentTarget.style.borderLeftWidth = "5px";
                    e.currentTarget.style.borderLeftColor = "#ef5023";
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.borderLeftWidth = "3px";
                    e.currentTarget.style.borderLeftColor = "#e0e0e0";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="perk-icon flex-shrink-0" style={{ color: "#ef5023" }}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-[18px] leading-[24px]" style={{ color: "#0a0a0a" }}>
                    {card.title}
                  </h3>
                  <p className="text-[#666] text-[14px] leading-[1.7]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="px-[16px] md:px-[40px]" style={{ background: "#fafafa", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          <div className="max-w-[960px] mx-auto py-[36px]">
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-y-[24px]">
              {[
                { value: "9",    label: "Open Roles" },
                { value: "500+", label: "Engineers" },
                { value: "9+",   label: "Years of Excellence" },
                { value: "300+", label: "Global Clients" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center justify-center">
                  {i > 0 && <div className="hidden sm:block w-[1px] h-[36px] mx-[32px] md:mx-[48px]" style={{ background: "#e0e0e0" }} />}
                  <div className="flex flex-col items-center gap-[4px]">
                    <span className="font-black text-[#ef5023] text-[28px] leading-[1]" style={{ letterSpacing: "-1px" }}>{stat.value}</span>
                    <span className="text-[#888] text-[12px] font-medium tracking-[0.3px]">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section id="open-roles" className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#f7f7f7", borderTop: "1px solid #e8e8e8" }}>
          {/* Pattern background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "url('/Media/Pattern/p1.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px",
            opacity: 0.05,
            WebkitMaskImage: "linear-gradient(to bottom right, transparent 0%, black 40%)",
            maskImage: "linear-gradient(to bottom right, transparent 0%, black 40%)",
          }} />

          <div className="relative max-w-[1320px] mx-auto py-[70px]" style={{ zIndex: 2 }}>
            {/* Section header */}
            <div className="flex flex-col items-start gap-[10px] mb-[36px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">
                Open Positions
              </p>
              <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px]" style={{ color: "#0a0a0a" }}>
                {filteredJobs.length} Roles <span className="text-[#ef5023]">Available</span>
              </h2>
              <p className="text-[#555] text-[16px] leading-[28px] max-w-[720px]">
                All roles are based in Ho Chi Minh City or Hanoi with hybrid work model. Salary ranges are transparent, no negotiation games.
              </p>
            </div>

            {/* Filter tabs — underline style */}
            <div className="flex items-center gap-[4px] mb-[36px] pb-[1px] overflow-x-auto" style={{ borderBottom: "1px solid #e0e0e0" }}>
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveFilter(dept)}
                  className="relative px-[16px] py-[12px] text-[13px] font-semibold transition-all duration-200"
                  style={{
                    background: "transparent",
                    color: activeFilter === dept ? "#ef5023" : "#888",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {dept}
                  {activeFilter === dept && (
                    <span className="absolute bottom-[-1px] left-[16px] right-[16px] h-[2px] rounded-full" style={{ background: "#ef5023" }} />
                  )}
                </button>
              ))}
            </div>

            {/* Job cards */}
            <div className="flex flex-col gap-[16px]">
              {filteredJobs.map((job) => (
                <div
                  key={job.title}
                  className="rounded-[16px] p-[28px] flex flex-col gap-[14px] transition-all duration-300"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#ef5023";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e8e8e8";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[16px]">
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex flex-wrap items-center gap-[12px]">
                        <h3 className="font-bold text-[20px] leading-[1.3]" style={{ color: "#0a0a0a" }}>
                          {job.title}
                        </h3>
                        <span
                          className="text-[11px] font-semibold px-[10px] py-[4px] rounded-[6px]"
                          style={{ background: "#eef6ff", color: "#2563eb" }}
                        >
                          {job.department}
                        </span>
                        <span
                          className="text-[11px] font-semibold px-[10px] py-[4px] rounded-[6px]"
                          style={{ background: "rgba(239,80,35,0.08)", color: "#ef5023" }}
                        >
                          {job.level}
                        </span>
                      </div>

                      <div className="flex flex-col gap-[8px]">
                        {/* Row 1: Location · Mode · Type */}
                        <div className="flex flex-wrap items-stretch w-fit rounded-[10px] overflow-hidden text-[12px] font-medium" style={{ border: "none" }}>
                          <span className="flex items-center gap-[6px] px-[14px] py-[8px] text-[#555]" style={{ borderRight: "1px solid #e8e8e8" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-[6px] px-[14px] py-[8px] text-[#555]" style={{ borderRight: "1px solid #e8e8e8" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            {job.mode}
                          </span>
                          <span className="flex items-center gap-[6px] px-[14px] py-[8px] text-[#555]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            {job.type}
                          </span>
                        </div>
                        {/* Row 2: Salary */}
                        {job.salary && (
                          <div className="flex items-stretch w-fit rounded-[10px] overflow-hidden text-[12px] font-bold" style={{ border: "none" }}>
                            <span className="flex items-center justify-center px-[12px] py-[8px]" style={{ background: "rgba(239,80,35,0.10)", color: "#ef5023", borderRight: "1px solid rgba(239,80,35,0.25)" }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            </span>
                            <span className="flex items-center px-[14px] py-[8px]" style={{ background: "rgba(239,80,35,0.05)", color: "#ef5023" }}>
                              {job.salary}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[14px] px-[28px] h-[44px] rounded-[10px] inline-flex items-center gap-[6px] transition-colors flex-shrink-0 w-fit"
                      style={{ textDecoration: "none", boxShadow: "0 2px 8px rgba(239,80,35,0.2)" }}
                    >
                      Apply <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>

                  <p className="text-[#666] text-[13px] leading-[1.7]">
                    {job.desc}
                  </p>

                  <div style={{ borderTop: "1px solid rgba(239,80,35,0.18)" }} />
                  <div className="flex flex-wrap gap-[8px]">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-[12px] py-[5px] rounded-full"
                        style={{ background: "#f0f0f0", color: "#444" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Don't see your role? */}
            <div className="mt-[48px] rounded-[16px] px-[32px] py-[32px] md:px-[48px] md:py-[36px] flex flex-col md:flex-row md:items-center md:justify-between gap-[20px]" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}>
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-bold text-white text-[22px] leading-[28px]">Don&apos;t see your role?</h3>
                <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  We are always looking for exceptional engineers. Send your CV and we will reach out when a matching client project opens.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-[8px] px-[24px] h-[44px] rounded-[10px] font-bold text-[14px] text-white transition-all duration-200 flex-shrink-0 w-fit"
                style={{ background: "#ef5023", textDecoration: "none" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#d94010"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#ef5023"; }}
              >
                Send Open Application <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
        <section className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>
          {/* Concentric rings top-right — adapted from ServiceAIOverview for dark bg */}
          <svg className="absolute -right-[100px] -top-[100px] pointer-events-none" width="580" height="580" viewBox="0 0 580 580" fill="none" style={{ opacity: 0.09 }}>
            {[60, 110, 160, 210, 260, 310, 360].map((r, i) => (
              <circle key={i} cx="290" cy="290" r={r} stroke="#ef5023" strokeWidth="1" />
            ))}
            <circle cx="290" cy="290" r="9" fill="#ef5023" opacity="0.45" />
          </svg>
          {/* Concentric rings bottom-left — white, from ServiceAIOverview */}
          <svg className="absolute -left-[60px] -bottom-[60px] pointer-events-none" width="360" height="360" viewBox="0 0 360 360" fill="none" style={{ opacity: 0.04 }}>
            {[45, 85, 125, 165].map((r, i) => (
              <circle key={i} cx="180" cy="180" r={r} stroke="white" strokeWidth="1" />
            ))}
          </svg>
          {/* Bracket accent corner — top right */}
          <svg className="absolute top-[40px] right-[40px] pointer-events-none" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.22 }}>
            <path d="M48 0 L48 48 L0 48" stroke="#ef5023" strokeWidth="2" fill="none" />
          </svg>
          {/* Glow layers */}
          <div className="absolute top-[-60px] right-[10%] w-[350px] h-[350px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-[10%] left-[5%] w-[420px] h-[320px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(239,80,35,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
          {/* Dashed vertical timeline spine on the left */}
          <div className="absolute left-[40px] md:left-[72px] top-[120px] bottom-[80px] w-[1px] pointer-events-none" style={{
            backgroundImage: "repeating-linear-gradient(to bottom, rgba(239,80,35,0.18) 0px, rgba(239,80,35,0.18) 6px, transparent 6px, transparent 14px)",
          }} />

          <div className="relative max-w-[1320px] mx-auto py-[70px]" style={{ zIndex: 2 }}>
            <div className="flex flex-col items-start gap-[10px] mb-[48px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">
                Hiring Process
              </p>
              <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px] text-white">
                From CV to offer in <span className="text-[#ef5023]">10–14 days</span>
              </h2>
            </div>

            <div className="flex flex-col gap-[16px]">
              {[
                {
                  step: "01",
                  title: "CV Screening",
                  duration: "1\u20132 days",
                  desc: "We review your CV and portfolio. No ATS black holes: a real engineer reads your application and responds within 2 business days.",
                },
                {
                  step: "02",
                  title: "Technical Assessment",
                  duration: "3\u20134 days",
                  desc: "A practical coding challenge or take-home task scoped to ~2 hours. No whiteboard puzzles: real-world problems relevant to your role.",
                },
                {
                  step: "03",
                  title: "Technical Interview",
                  duration: "45\u201360 min",
                  desc: "System design discussion and code review with a Senior or Lead engineer. We assess depth of knowledge, not memorised answers.",
                },
                {
                  step: "04",
                  title: "Culture & English Interview",
                  duration: "30 min",
                  desc: "Conversation with InApps HR and a Project Manager. English fluency, communication style, and team fit: in a relaxed format.",
                },
                {
                  step: "05",
                  title: "Offer & Onboarding",
                  duration: "2\u20133 days",
                  desc: "Competitive written offer with transparent salary breakdown. Onboarding starts within 2 weeks of acceptance, sometimes sooner.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-[24px] rounded-[20px] p-[32px] transition-all duration-300 hover:-translate-y-[2px]"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderLeft: "1px solid rgba(239,80,35,0.30)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                    e.currentTarget.style.borderLeftColor = "rgba(239,80,35,0.70)";
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,80,35,0.10), inset 0 1px 0 rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.borderLeftColor = "rgba(239,80,35,0.30)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)";
                  }}
                >
                  <div
                    className="w-[52px] h-[52px] rounded-[14px] flex flex-col items-center justify-center flex-shrink-0"
                    style={{ background: "#ef5023" }}
                  >
                    <span className="text-white text-[10px] font-bold leading-[1] opacity-80">Step</span>
                    <span className="text-white text-[18px] font-black leading-[1.1]">{item.step}</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-[8px]">
                    <div className="flex flex-wrap items-center justify-between gap-[12px]">
                      <h3 className="font-bold text-[18px] leading-[1.3] text-white">
                        {item.title}
                      </h3>
                      <span
                        className="text-[#ef5023] text-[12px] font-semibold px-[12px] py-[4px] rounded-full flex-shrink-0"
                        style={{ background: "rgba(239,80,35,0.10)" }}
                      >
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ready to join ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          {/* Dot grid pattern for dark bg */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          {/* Corner glow */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse at bottom right, rgba(239,80,35,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
          <div className="max-w-[1320px] mx-auto py-[70px]" style={{ position: "relative", zIndex: 2 }}>
            <div
              className="relative rounded-[20px] overflow-hidden px-[24px] sm:px-[56px] py-[36px] sm:py-[44px] flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]"
              style={{
                background: "#ef5023",
                boxShadow: "0 10px 30px -8px rgba(239,80,35,0.25), 0 4px 12px -4px rgba(239,80,35,0.15)",
              }}
            >
              {/* Diagonal stripe overlay inside card */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.045) 0px, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 18px)",
              }} />
              <div className="relative flex flex-col gap-[10px] max-w-[560px]" style={{ zIndex: 1 }}>
                <h2 className="font-black text-white text-[28px] leading-[36px]" style={{ letterSpacing: "-0.6px" }}>
                  Ready to join the team?
                </h2>
                <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.80)" }}>
                  Browse open roles above or send us an open application. We respond to every qualified applicant within 2 business days.
                </p>
              </div>

              <div className="relative flex flex-wrap items-center gap-[12px]" style={{ zIndex: 1 }}>
                <a
                  href="mailto:careers@inapps.net"
                  className="inline-flex items-center gap-[10px] px-[28px] h-[44px] rounded-[10px] font-bold text-[13px] hover:bg-[#f5f5f5] transition-colors"
                  style={{ background: "#ffffff", color: "#ef5023", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  careers@inapps.net
                </a>
                <a
                  href="/company/about"
                  className="inline-flex items-center px-[24px] h-[44px] rounded-[10px] font-semibold text-[13px] hover:bg-white/10 hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.80)", textDecoration: "none", whiteSpace: "nowrap" }}
                >
                  Learn About ODC Model
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
