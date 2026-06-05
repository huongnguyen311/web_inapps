"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import ServiceTrustBadge from "@/components/services/ServiceTrustBadge";
import ServiceQualityVetting from "@/components/services/ServiceQualityVetting";
import type { CaseStudy } from "@/data/caseStudies";

interface Props {
  cs: CaseStudy;
}

// ── Placeholder sections — fill in real data/components as needed ──────────

function AIHeroSection({ cs }: { cs: CaseStudy }) {
  return (
    <section
      className="relative px-[16px] md:px-[40px] overflow-hidden flex items-center min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px] pb-[60px] md:pb-[100px]"
      style={{ background: "#0d0d0d" }}
    >
      {/* Hero image background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Media/Image/case 17.png"
          alt=""
          className="absolute right-0 top-0 h-full object-cover"
          style={{ width: "68%" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #0d0d0d 30%, #0d0d0d 38%, rgba(13,13,13,0.75) 54%, rgba(13,13,13,0.1) 100%)" }}
        />
      </div>

      <div className="relative w-full max-w-[1320px] mx-auto">
        <div className="relative flex flex-col items-start gap-[24px] max-w-[640px]">
          {/* AI badge */}
          <div className="flex items-center gap-[8px] px-[12px] py-[6px] rounded-full border border-[#ef5023]/30 bg-[#ef5023]/08">
            <span className="w-[6px] h-[6px] rounded-full bg-[#ef5023] flex-shrink-0" />
            <span className="text-[#ef5023] text-[12px] font-bold tracking-[2px] uppercase">AI Case Study</span>
          </div>

          <h1 className="font-black text-white tracking-[-2px] text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[64px] md:leading-[72px]">
            {cs.name}
          </h1>

          <p className="text-white/80 text-[18px] leading-[30px]">
            {cs.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
            <a
              href="/contact"
              className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
            >
              Start a Similar Project
            </a>
            <a
              href="/case-study"
              className="bg-transparent text-white font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
              style={{ textDecoration: "none" }}
            >
              ← All Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIOverviewSection() {
  return (
    <section className="px-[16px] md:px-[40px] py-[72px]" style={{ background: "#f7f7f7", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Project Overview</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            The Challenge & Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-start">
          {/* Challenge */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "#fff2ee", border: "1px solid #ffd5c9" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0a0a0a] text-[18px]">The Problem</h3>
            </div>
            <p className="text-[#555] text-[15px] leading-[1.75]">
              {/* Replace with real content per case study */}
              Manual processes were creating bottlenecks, errors, and delays that cost the business time and money. The existing system could not scale with growing demand, and human intervention was required at every decision point.
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "#fff2ee", border: "1px solid #ffd5c9" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#0a0a0a] text-[18px]">Our Solution</h3>
            </div>
            <p className="text-[#555] text-[15px] leading-[1.75]">
              We designed and built a production-grade AI agent with multi-step reasoning, tool-use integrations, and a robust evaluation framework — enabling fully autonomous operation with human-in-the-loop checkpoints for high-stakes decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIResultsSection() {
  const metrics = [
    { value: "80%", label: "Faster processing" },
    { value: "4h",  label: "Down from 2 days" },
    { value: "3×",  label: "Team capacity" },
    { value: "99.2%", label: "Accuracy rate" },
  ];

  return (
    <section className="px-[16px] md:px-[40px] py-[72px]" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Results</p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Measurable Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-[8px] rounded-[16px] p-[28px] items-center text-center"
              style={{ background: "rgba(239,80,35,0.06)", border: "1px solid rgba(239,80,35,0.2)" }}
            >
              <span className="font-black text-[40px] leading-[1] tracking-[-2px]" style={{ color: "#ef5023" }}>{value}</span>
              <span className="text-white/60 text-[13px] font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIAgentArchitectureSection() {
  const steps = [
    { icon: "📥", title: "Data Ingestion", desc: "Agent collects and normalises inputs from multiple sources via API and webhook integrations." },
    { icon: "🧠", title: "Reasoning Layer", desc: "LLM-powered planning loop breaks the task into sub-steps, selects tools, and handles exceptions." },
    { icon: "🔧", title: "Tool Execution", desc: "Agent calls external APIs, queries databases, and writes outputs — all within guardrails." },
    { icon: "✅", title: "Validation & Output", desc: "Eval framework scores outputs before delivery. Human-in-the-loop checkpoint for edge cases." },
  ];

  return (
    <section className="px-[16px] md:px-[40px] py-[72px]" style={{ background: "#f7f7f7", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Architecture</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            How the Agent Works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-0">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col md:flex-row items-start flex-1 w-full">
              <div className="flex flex-col flex-1 w-full pt-[26px] relative">
                {/* icon */}
                <div
                  className="absolute top-0 left-[20px] z-10 w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[22px]"
                  style={{ background: "#fff", border: "1.5px solid #ebebeb", boxShadow: "0 4px 12px rgba(239,80,35,0.12)" }}
                >
                  {step.icon}
                </div>
                <div
                  className="flex flex-col gap-[12px] rounded-[16px] px-[20px] pt-[48px] pb-[24px] flex-1"
                  style={{ background: "#fff", border: "1px solid #e8e8e8", minHeight: "200px" }}
                >
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[10px] font-black text-[#ef5023] tracking-[2px] uppercase">Step {idx + 1}</span>
                    <h3 className="font-black text-[#0a0a0a] text-[15px]">{step.title}</h3>
                  </div>
                  <div style={{ height: "1px", background: "#f0f0f0" }} />
                  <p className="text-[14px] text-[#555] leading-[1.65]">{step.desc}</p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 w-full md:w-[40px] h-[40px] md:h-auto md:self-center my-[4px] md:mt-[26px]">
                  <svg className="hidden md:block" width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 0 8px rgba(239,80,35,0.85))" }}>
                    <path d="M4 16h24M19 8l8 8-8 8" stroke="#ef5023" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AICTASection() {
  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[80px]" style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-[760px] mx-auto flex flex-col items-center gap-[24px] text-center">
        <p className="text-[#ef5023] text-[11px] font-bold tracking-[2.5px] uppercase">Ready to automate?</p>
        <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
          Want a similar AI agent for your business?
        </h2>
        <p className="text-white/60 text-[16px] leading-[1.75] max-w-[520px]">
          Tell us your use case. We'll scope it, estimate timeline and cost, and show you how we'd build it — in a free 45-minute call.
        </p>
        <div className="flex gap-[12px]">
          <a
            href="/contact"
            className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
            style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
          >
            Book a Free Call
          </a>
          <a
            href="/services/ai-agent-development"
            className="bg-transparent text-white font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
            style={{ textDecoration: "none" }}
          >
            See AI Services →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Main layout ────────────────────────────────────────────────────────────────

export default function AICaseStudyDetailClient({ cs }: Props) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1">
        <AIHeroSection cs={cs} />
        <ServiceTrustedLogos />
        <ServiceTrustBadge />
        <AIOverviewSection />
        <AIAgentArchitectureSection />
        <AIResultsSection />
        <ServiceQualityVetting
          stages={[
            { stage: "Resume & Portfolio Screen", description: "We filter for engineers with verifiable production experience — no junior proxies or CV-padded candidates." },
            { stage: "Technical Assessment", description: "A timed, real-world coding challenge covering algorithms, system design, and domain knowledge relevant to the project." },
            { stage: "Live Coding Interview", description: "Pair-programming session with a senior InApps engineer to assess problem-solving, communication, and code quality under pressure." },
            { stage: "Architecture & Design Review", description: "Candidates walk through a system they've built — we probe trade-offs, scalability decisions, and how they handle ambiguity." },
            { stage: "Culture & Communication Fit", description: "We assess async communication skills, English proficiency, and ownership mindset — critical for remote client-facing delivery." },
          ]}
          metrics={[
            { value: "Top 5%", label: "of applicants pass all 5 stages" },
            { value: "3×", label: "more screening rounds than typical agencies" },
            { value: "98%", label: "client satisfaction on engineer quality" },
            { value: "<2 wks", label: "average time-to-placement" },
          ]}
        />
        <AICTASection />
      </main>
      <Footer />
    </div>
  );
}