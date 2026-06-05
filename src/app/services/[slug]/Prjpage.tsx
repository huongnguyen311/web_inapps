"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import ServiceTrustBadge from "@/components/services/ServiceTrustBadge";
import ServiceQualityVetting from "@/components/services/ServiceQualityVetting";
import ServiceAIWhyChoose from "@/components/services/ServiceAIWhyChoose";
import ServiceTimeline from "@/components/services/ServiceTimeline";
import ServiceCta from "@/components/services/ServiceCta";
import ServiceHero from "@/components/services/ServiceHero";
import type { ServiceData } from "@/data/services";

interface Props {
  service: ServiceData;
}

// ── Business Pain ─────────────────────────────────────────────────────────────

const PAIN_CARDS = [
  {
    title: "Slow Roadmap",
    description: "Feature delivery is slow and competitors move faster.",
    detail: "Your backlog keeps growing, sprint velocity drops, and every quarter ends with promises pushed to the next one. By the time a feature ships, the market has already moved on.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Hiring Bottlenecks",
    description: "Hard to find and retain top engineering talent.",
    detail: "Sourcing, screening, and onboarding a single senior engineer takes months. Meanwhile, your existing team is stretched thin covering gaps, and top candidates accept competing offers while you deliberate.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Technical Debt",
    description: "Legacy code, poor architecture and no time to refactor.",
    detail: "Every new feature takes twice as long because the foundation is fragile. Engineers spend more time firefighting bugs than building. The codebase becomes a liability that slows every decision down.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];

function PrjBusinessPainSection() {
  return (
    <section className="px-[40px] py-[70px]" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[52px]">
        {/* Heading — centered */}
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Business Pain</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            What&apos;s Slowing Your Business Down
          </h2>
        </div>

        {/* 2-col: image left, cards right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
          {/* Left — stock photo */}
          <div className="rounded-[20px] overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.10)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Business challenges"
              className="w-full object-cover"
              style={{ height: "540px" }}
            />
          </div>

          {/* Right — cards stacked */}
          <div className="flex flex-col gap-[16px]">
            {PAIN_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-[8px] rounded-[16px] p-[20px]"
                style={{ background: "#fff", border: "1px solid #ebebeb", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center gap-[12px]">
                  <div
                    className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fff2ee" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-black text-[#0a0a0a] text-[16px] leading-[22px]">{card.title}</h3>
                </div>
                <div style={{ height: "1px", background: "#f0f0f0" }} />
                <p className="text-[#444] text-[14px] leading-[1.7] font-medium">{card.description}</p>
                <p className="text-[#999] text-[13px] leading-[1.75]">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Overview ──────────────────────────────────────────────────────────────────

function PrjOverviewSection({ service }: { service: ServiceData }) {
  const { serviceOverview } = service.sections;
  if (!serviceOverview.enabled) return null;

  return (
    <section className="px-[40px] py-[80px]" style={{ background: "#f7f7f7" }}>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
        {/* Text */}
        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">What We Build</p>
            <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
              {serviceOverview.title}
            </h2>
          </div>
          <div className="flex flex-col gap-[16px]">
            {serviceOverview.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#444] text-[16px] leading-[1.75]">{para}</p>
            ))}
          </div>
          {serviceOverview.stats && serviceOverview.stats.length > 0 && (
            <div className="flex gap-[32px] pt-[8px]">
              {serviceOverview.stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-[4px]">
                  <span className="font-black text-[#ef5023] text-[28px] leading-[1] tracking-[-1px]">{value}</span>
                  <span className="text-[#888] text-[12px] font-semibold">{label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        {serviceOverview.image && (
          <div className="rounded-[20px] overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={serviceOverview.image} alt={serviceOverview.title} className="w-full h-full object-cover" style={{ maxHeight: "420px" }} />
          </div>
        )}
      </div>
    </section>
  );
}

// ── What You Get ──────────────────────────────────────────────────────────────

function PrjWhatYouGetSection({ service }: { service: ServiceData }) {
  const { whatYouGet } = service.sections;
  if (!whatYouGet.enabled) return null;

  return (
    <section className="px-[40px] py-[80px]" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">What&apos;s Included</p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Everything You Need to Ship
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {whatYouGet.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-[14px] rounded-[16px] p-[28px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-[28px]">{item.icon}</span>
              <h3 className="font-bold text-white text-[16px]">{item.title}</h3>
              <p className="text-white/55 text-[14px] leading-[1.65]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────────

function PrjProcessSection({ service }: { service: ServiceData }) {
  const { process } = service.sections;
  if (!process.enabled) return null;

  return (
    <section className="px-[40px] py-[80px]" style={{ background: "#f7f7f7" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">How We Work</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            From Discovery to Launch
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {process.steps.map((step, idx) => (
            <div
              key={step.phase}
              className="flex flex-col gap-[14px] rounded-[16px] p-[28px]"
              style={{ background: "#fff", border: "1px solid #ebebeb", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
            >
              <span className="text-[#ef5023] text-[12px] font-black tracking-[1.5px] uppercase">Phase {idx + 1}</span>
              <h3 className="font-black text-[#0a0a0a] text-[16px]">{step.phase}</h3>
              <p className="text-[#ef5023] text-[13px] font-semibold">{step.duration}</p>
              {step.includes && step.includes.length > 0 && (
                <ul className="flex flex-col gap-[6px]">
                  {step.includes.map((item) => (
                    <li key={item} className="text-[#555] text-[13px] flex items-start gap-[8px]">
                      <span className="text-[#ef5023] mt-[2px] flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Case Studies ──────────────────────────────────────────────────────────────

function PrjCaseStudySection({ service }: { service: ServiceData }) {
  const { caseStudy } = service.sections;
  if (!caseStudy.enabled || caseStudy.items.length === 0) return null;

  return (
    <section className="px-[40px] py-[80px]" style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Case Studies</p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Projects We&apos;ve Delivered
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {caseStudy.items.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="group flex flex-col rounded-[20px] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
            >
              {item.image && (
                <div className="overflow-hidden" style={{ height: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex flex-col gap-[12px] p-[28px]">
                <div className="flex gap-[8px]">
                  <span className="text-[11px] font-bold text-[#ef5023] bg-[#ef5023]/10 px-[10px] py-[4px] rounded-full tracking-[1px] uppercase">{item.industry}</span>
                  {item.model && (
                    <span className="text-[11px] font-semibold text-white/50 bg-white/06 px-[10px] py-[4px] rounded-full">{item.model}</span>
                  )}
                </div>
                <h3 className="font-black text-white text-[17px] leading-[24px] group-hover:text-[#ef5023] transition-colors">{item.title}</h3>
                <p className="text-white/55 text-[14px] leading-[1.65]">{item.description}</p>
                {item.stats && item.stats.length > 0 && (
                  <div className="flex gap-[24px] pt-[8px] border-t border-white/08 mt-[4px]">
                    {item.stats.map(({ value, label }) => (
                      <div key={label} className="flex flex-col gap-[2px]">
                        <span className="font-black text-[#ef5023] text-[20px] leading-[1]">{value}</span>
                        <span className="text-white/40 text-[11px] font-semibold">{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Tech Stack ────────────────────────────────────────────────────────────────

const TECH_STACKS = [
  {
    color: "#3b82f6",
    bg: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22" strokeOpacity="0.4"/>
      </svg>
    ),
    title: "Frontend",
    techs: "React, Next.js, Vue, Angular, TypeScript, Tailwind CSS",
  },
  {
    color: "#10b981",
    bg: "#ecfdf5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M7 8h2m2 0h2m2 0h2" strokeOpacity="0.5"/><path d="M7 11h4"/>
      </svg>
    ),
    title: "Backend",
    techs: "Node.js, Python, Java, .NET, Go, PHP",
  },
  {
    color: "#8b5cf6",
    bg: "#f5f3ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2"/>
      </svg>
    ),
    title: "Mobile",
    techs: "React Native, Flutter, Swift, Kotlin",
  },
  {
    color: "#f59e0b",
    bg: "#fffbeb",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    title: "Cloud & DevOps",
    techs: "AWS, Google Cloud, Azure, Docker, Kubernetes",
  },
  {
    color: "#ef4444",
    bg: "#fef2f2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Databases",
    techs: "PostgreSQL, MongoDB, MySQL, Redis",
  },
  {
    color: "#ef5023",
    bg: "#fff2ee",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8v4l3 3"/>
        <path d="M18 2v4h4"/>
      </svg>
    ),
    title: "AI / Data",
    techs: "OpenAI, LangChain, Python, ML, Analytics",
  },
];

function PrjTechStackSection() {
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(239,80,35,0.14) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 10% 100%, rgba(239,80,35,0.14) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 90% 0%, rgba(239,80,35,0.08) 0%, transparent 60%)" }} />
      <div className="relative max-w-[1320px] mx-auto flex flex-col md:flex-row gap-[48px] md:gap-[80px] items-start">

        {/* Left */}
        <div className="flex flex-col gap-[16px] md:max-w-[380px] flex-shrink-0">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Deep Tech Expertise</p>
          <h2 className="font-black text-white text-[32px] leading-[40px] tracking-[-1.2px]">
            Full-Stack Capabilities. Modern Technology.
          </h2>
          <p className="text-white/50 text-[14px] leading-[1.75]">
            We cover the full stack from pixel-perfect frontends to scalable backends, mobile apps, cloud infrastructure, and AI integrations. One team, every layer.
          </p>
        </div>

        {/* Right — 2×3 grid + CTA */}
        <div className="flex flex-col gap-[20px] flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px]" style={{ background: "#ebebeb", border: "1px solid #ebebeb", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.05)" }}>
            {TECH_STACKS.map((stack) => (
              <div key={stack.title} className="flex flex-col gap-[12px] p-[32px]" style={{ background: "#fff" }}>
                <div className="flex items-center gap-[12px]">
                  <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: stack.bg }}>
                    {stack.icon}
                  </div>
                  <h3 className="font-bold text-[#0a0a0a] text-[14px] leading-[20px]">{stack.title}</h3>
                </div>
                <p className="text-[#888] text-[14px] leading-[1.6]">{stack.techs}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <a
              href="/services/custom-software-development#tech"
              className="text-[#ef5023] text-[14px] font-semibold inline-flex items-center gap-[6px] hover:gap-[10px] transition-all"
              style={{ textDecoration: "none" }}
            >
              View full technology stack →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Case Studies ─────────────────────────────────────────────────────────────

const PRJ_CASE_STUDIES = [
  {
    industry: "Fintech",
    model: "ODC Model",
    title: "Real-time claims processing platform",
    desc: "Prudential needed a modern claims infrastructure to replace a brittle legacy system. We built a real-time platform handling 2M+ daily transactions, cutting processing time by 300% and reducing operational costs by 60%.",
    metrics: [{ value: "300%", label: "Faster Processing" }, { value: "60%", label: "Cost Reduction" }],
    image: "/Media/Image/prd 1.jpg",
    link: "/case-study",
  },
  {
    industry: "SaaS",
    model: "Dedicated Team",
    title: "AI analytics dashboard for 50K users",
    desc: "Delivered an AI-powered insights platform that cut time-to-insight by 5x and maintained 98% uptime across global regions.",
    metrics: [{ value: "5×", label: "Faster Insights" }, { value: "98%", label: "Uptime" }, { value: "50K+", label: "Active Users" }],
    image: "/Media/Image/prd 2.jpg",
    link: "/case-study",
  },
  {
    industry: "E-commerce",
    model: "Staff Augmentation",
    title: "Mobile commerce app with 1M downloads",
    desc: "Rebuilt the mobile shopping experience from scratch, achieving 1M downloads in 6 months and a 40% lift in revenue.",
    metrics: [{ value: "1M+", label: "Downloads" }, { value: "40%", label: "Revenue Increase" }, { value: "6mo", label: "To Launch" }],
    image: "/Media/Image/prd 3.jpg",
    link: "/case-study",
  },
  {
    industry: "Healthtech",
    model: "Fixed-Price Model",
    title: "Workforce management platform at scale",
    desc: "Modernized a legacy workforce platform for 30K+ workers, cutting admin overhead by 50% and improving shift-fill rates.",
    metrics: [{ value: "50%", label: "Less Admin" }, { value: "30K+", label: "Workers" }, { value: "3×", label: "Faster Onboarding" }],
    image: "/Media/Image/prd 4.jpg",
    link: "/case-study",
  },
];

const CASE_TABS = ["ODC Model", "Dedicated Team", "Staff Augmentation", "Fixed-Price Model"];

function PrjCaseStudiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PRJ_CASE_STUDIES[activeIdx];

  return (
    <section className="relative px-[40px] py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[24px]">

        {/* header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Case Studies</p>
            <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
              Results our clients <span className="text-[#ef5023]">have seen</span>
            </h2>
          </div>
        </div>

        {/* tabs */}
        <div className="flex gap-0 justify-center border-b border-[#e8e8e8]">
          {CASE_TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveIdx(i)}
              className="text-[13px] px-[20px] py-[10px] transition-all duration-200 whitespace-nowrap"
              style={{
                background: "transparent",
                color: activeIdx === i ? "#ef5023" : "#555",
                fontWeight: 700,
                border: "none",
                borderBottom: activeIdx === i ? "2px solid #ef5023" : "2px solid transparent",
                marginBottom: "-1px",
                cursor: "pointer",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* card */}
        <div className="rounded-[20px] overflow-hidden grid grid-cols-2" style={{ background: "#f5f5f5", border: "1px solid #e8e8e8", minHeight: "460px" }}>
          {/* left */}
          <div className="relative flex flex-col justify-between gap-[28px] px-[40px] py-[40px]" style={{ background: "#1a1a1a" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative flex flex-col gap-[20px]">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-white border border-white/20 px-[10px] py-[4px] rounded-full w-fit">
                {active.industry}
              </span>
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-black text-white text-[24px] leading-[32px] tracking-[-0.8px]">{active.title}</h3>
                <div className="w-[32px] h-[1px]" style={{ background: "#ef5023" }} />
                <p className="text-white/60 text-[14px] leading-[1.8]">{active.desc}</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-[24px]">
              <div className="flex gap-[32px]" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                {active.metrics.map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-[4px]">
                    <span className="font-black text-white text-[22px] leading-[1] tracking-[-1px]">{value}</span>
                    <span className="text-white/40 text-[11px] font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <Link
                href={active.link}
                className="inline-flex items-center gap-[8px] text-white text-[12px] font-bold px-[16px] h-[36px] rounded-[8px] w-fit"
                style={{ textDecoration: "none", background: "#ef5023" }}
              >
                Detail
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
          {/* right — image */}
          <div className="relative overflow-hidden" style={{ background: "#f0f0f0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.image} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-[16px]">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-[10px] h-[48px] px-[36px] rounded-[12px] font-bold text-[#ef5023] text-[14px] hover:bg-[#ef5023]/10 transition-colors"
            style={{ background: "transparent", border: "1.5px solid #ef5023", textDecoration: "none" }}
          >
            Discover Our Successes
          </Link>
        </div>

      </div>
    </section>
  );
}

// ── Common Questions ──────────────────────────────────────────────────────────

const PRJ_FAQ = [
  { label: "Timeline",     question: "How quickly can you start?",              answer: "We can have your team ready within 2 weeks of the first call. Our pre-vetted talent pool means no lengthy recruitment cycles — just fast, reliable onboarding." },
  { label: "Time Zones",   question: "What about time zone differences?",        answer: "We overlap 4+ hours daily with US and EU teams. Our leads work flexible hours and we use async-first workflows (Slack, Loom, Jira) so nothing waits overnight." },
  { label: "IP & Legal",   question: "Who owns the code and IP?",               answer: "You do — 100%. Every engagement includes a full IP transfer clause and NDA signed before we begin. Your code is yours from the first commit." },
  { label: "Team Quality", question: "What if I'm not happy with a developer?", answer: "We guarantee a replacement within 2 weeks, no questions asked. All our engineers pass a rigorous 5-stage screening — but if someone isn't the right fit, we fix it fast." },
  { label: "Pricing",      question: "How does pricing work?",                  answer: "We scope every engagement individually — no fixed rate cards. After a free discovery call, we send a transparent proposal with monthly retainer or project-based pricing options." },
];

function PrjCommonQuestions() {
  const [faqIndex, setFaqIndex] = useState(0);

  return (
    <section className="px-[40px] py-[70px]" style={{ background: "#f5f5f5", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Common Questions</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            Everything you need <span className="text-[#ef5023]">to know</span>
          </h2>
        </div>

        <div className="grid gap-[24px]" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
          {/* left — question list */}
          <div className="flex flex-col gap-[4px]">
            {PRJ_FAQ.map(({ label, question }, i) => (
              <button
                key={label}
                onClick={() => setFaqIndex(i)}
                className="group text-left flex items-start gap-[16px] px-[20px] py-[11px] rounded-[12px] transition-all duration-150 border-none cursor-pointer"
                style={{ background: faqIndex === i ? "rgba(239,80,35,0.07)" : "transparent", boxShadow: faqIndex === i ? "0 2px 12px rgba(239,80,35,0.08)" : "none" }}
              >
                <div className="w-[3px] rounded-full flex-shrink-0 mt-[2px]" style={{ height: "18px", background: faqIndex === i ? "#ef5023" : "transparent" }} />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#777" }}>{label}</span>
                  <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#555" }}>{question}</span>
                </div>
              </button>
            ))}
          </div>

          {/* right — answer */}
          <div key={faqIndex} className="rounded-[16px] p-[36px] flex flex-col gap-[20px]" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#ef5023]">{PRJ_FAQ[faqIndex].label}</span>
              <h3 className="font-black text-[#0a0a0a] text-[24px] leading-[1.35] tracking-[-0.4px]">{PRJ_FAQ[faqIndex].question}</h3>
            </div>
            <p className="text-[#666] text-[14px] leading-[1.8]">{PRJ_FAQ[faqIndex].answer}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Main layout ───────────────────────────────────────────────────────────────

export default function PrjPageClient({ service }: Props) {
  const { sections } = service;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceTrustedLogos />
        <PrjBusinessPainSection />
        {/* Delivery pillars */}
        <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          {/* Pattern background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/Media/Pattern/p3.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              opacity: 0.12,
            }}
          />
          {/* Fade vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%)" }}
          />
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]">
            <div className="flex flex-col gap-[16px] max-w-[680px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">Our Approach</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                How do you ensure software delivery doesn&apos;t become chaos?
              </h2>
              <p className="text-white/50 text-[15px] leading-[1.75]">
                Most projects fail not because of bad engineers, but because of unclear scope, poor communication, and skipped quality gates. Here&apos;s how we prevent that.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
              {[
                {
                  icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
                  title: "Clear Planning", sub: "Defined scope & roadmap",
                  desc: "Before a single line of code is written, we lock the scope, break it into milestones, and get sign-off. No ambiguous requirements, no moving goalposts mid-sprint.",
                  points: ["Requirements documented & approved", "Milestones tied to business outcomes", "Change requests go through a formal process"],
                },
                {
                  icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
                  title: "Transparent Communication", sub: "Regular updates & visibility",
                  desc: "You always know where the project stands. Weekly written updates, live sprint demos every two weeks, and a shared project board you can check any time.",
                  points: ["Weekly status reports, no fluff", "Live demo at end of every sprint", "Direct Slack access to your team"],
                },
                {
                  icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>),
                  title: "Continuous Quality", sub: "Testing & code reviews",
                  desc: "QA is not an afterthought. Every feature is peer-reviewed and tested before it's marked done — automated tests run on every commit, blocking broken code from merging.",
                  points: ["Peer code review on every PR", "Automated unit & integration tests in CI", "Dedicated QA engineer per project"],
                },
                {
                  icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                  title: "Reliable Delivery", sub: "Automated deployment & monitoring",
                  desc: "Releases are automated, repeatable, and safe. CI/CD pipelines push to staging first, monitoring catches issues before users do, and rollback is one command away.",
                  points: ["CI/CD pipeline from day one", "Staging environment before every release", "Real-time monitoring & alerting"],
                },
              ].map((pillar) => (
                <div key={pillar.title} className="flex flex-col gap-[20px] p-[28px] rounded-[16px]" style={{ background: "#1a1a1a" }}>
                  <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}>{pillar.icon}</div>
                  <div className="flex flex-col gap-[4px]">
                    <h3 className="font-black text-white text-[15px] leading-[22px]">{pillar.title}</h3>
                    <span className="text-[#ef5023] text-[11px] font-bold tracking-[1px] uppercase">{pillar.sub}</span>
                  </div>
                  <p className="text-white/50 text-[13px] leading-[1.7]">{pillar.desc}</p>
                  <ul className="flex flex-col gap-[8px]">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-[8px]">
                        <span className="text-[#ef5023] mt-[1px] flex-shrink-0 text-[12px]">✓</span>
                        <span className="text-white/60 text-[12px] leading-[1.6]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ServiceTimeline
          eyebrow="Delivery"
          heading={<span className="text-[#0a0a0a]">How we deliver</span>}
          steps={[
            {
              num: "01",
              week: "Week 1–2",
              phase: "Discovery",
              bullets: [
                "Stakeholder interviews",
                "Requirements & scope definition",
                "System architecture design",
                "Risk identification",
                "Delivery plan & milestones agreed",
              ],
              deliverable: "Scope doc\n& architecture",
              highlight: false,
            },
            {
              num: "02",
              week: "Week 3–4",
              phase: "Design",
              bullets: [
                "UX research & user flows",
                "Wireframes & prototypes",
                "High-fidelity UI design",
                "Design system setup",
                "Client review & sign-off",
              ],
              deliverable: "Approved designs\n& prototype",
              highlight: false,
            },
            {
              num: "03",
              week: "Week 5–7",
              phase: "Build",
              bullets: [
                "Sprint-based development",
                "Weekly demos to stakeholders",
                "CI/CD pipeline & automated tests",
                "Code reviews & QA each sprint",
                "Progress tracked in real time",
              ],
              deliverable: "Working software\neach sprint",
              highlight: false,
            },
            {
              num: "04",
              week: "Week 8",
              phase: "Launch",
              bullets: [
                "End-to-end QA & regression testing",
                "Performance & load testing",
                "Production deployment",
                "Team handover & documentation",
                "30-day hypercare support",
              ],
              deliverable: "Live in production\n& support plan",
              highlight: true,
            },
          ]}
        />
        <PrjTechStackSection />
        <ServiceAIWhyChoose />
        <ServiceTrustBadge background="#f5f5f5" />
        <PrjCaseStudiesSection />
        <PrjCommonQuestions />
        <ServiceCta serviceName={service.name} />
      </main>
      <Footer />
    </div>
  );
}