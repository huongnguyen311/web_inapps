"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import type { IndustryData } from "@/data/industries";

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


const AI_FAILURES = [
  {
    number: "01",
    failure: "No observability in agentic workflows",
    consequence: "You don't know why the agent made a bad decision.",
    response: "We architect with structured logging and trace IDs from day one. Every agent decision is auditable.",
  },
  {
    number: "02",
    failure: "Error handling breaks on edge cases",
    consequence: "Agent loops, hallucinates, or silently fails.",
    response: "We build explicit fallback chains and human-in-the-loop checkpoints for every critical workflow.",
  },
  {
    number: "03",
    failure: "Monolithic prompt design",
    consequence: "Changing one behavior breaks five others.",
    response: "Modular agent architecture with isolated prompt templates and tool definitions that can be updated independently.",
  },
];


export default function IndustryDetailClient({ industry }: { industry: IndustryData }) {
  const { name } = industry;
  const [faqIndex, setFaqIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />

      <main className="flex-1">

        {/* ── S1: Hero ── */}
        <section
          className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px] pb-[60px] md:pb-[100px]"
        >
          {/* Banner background */}
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 4.png"
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
                {name}{" "}
                <span style={{ color: "#ef5023" }}>Expertise</span>
              </h1>

              {/* Subtext */}
              <p className="text-[20px] leading-[32px]" style={{ color: "#ffffff" }}>
                We deliver{" "}
                <span className="font-semibold">high-impact technology solutions</span>
                {" "}tailored to the unique challenges of {name}. Transforming industries through digital excellence.
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

        {/* ── S3: Where AI Projects Fail ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#f4f4f4", borderTop: "1px solid #e8e8e8" }}>

          {/* Large faded text — top right accent */}
          <span
            className="absolute top-0 right-[-20px] font-black select-none pointer-events-none"
            style={{
              fontSize: "clamp(160px, 18vw, 280px)",
              lineHeight: 1,
              color: "rgba(239,80,35,0.06)",
              letterSpacing: "-12px",
              filter: "blur(2px)",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            FAIL
          </span>

          {/* Orange glow blob — bottom left */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-80px", left: "-60px",
              width: "360px", height: "360px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1320px] mx-auto">

            {/* Header row */}
            <div className="flex flex-col gap-[10px] mb-[48px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>
                Production Reality
              </p>
              <h2 className="font-black text-[#111] text-[38px] leading-[46px] tracking-[-1.5px]">
                Where AI Projects Fail
              </h2>
              <p className="text-[13px] leading-[1.6]" style={{ color: "#999" }}>
                Only practitioners who've shipped real systems can write this accurately.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-[12px]">
              {AI_FAILURES.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] rounded-[14px] overflow-hidden"
                  style={{
                    background: "#fff",
                    border: "1px solid #ececec",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 12px 40px rgba(0,0,0,0.07), 0 2px 6px rgba(239,80,35,0.05)",
                  }}
                >
                  {/* Left — Problem */}
                  <div
                    className="flex"
                    style={{ background: "#ffffff" }}
                  >
                    {/* Thin accent bar */}
                    <div className="shrink-0 w-[3px]" style={{ background: "#ef5023" }} />

                    <div className="flex flex-col gap-[24px] px-[28px] py-[32px] w-full">
                      {/* Header: icon + label */}
                      <div className="flex items-center gap-[8px]">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <circle cx="7.5" cy="7.5" r="6.5" fill="rgba(239,80,35,0.08)" stroke="#ef5023" strokeWidth="1.2"/>
                          <path d="M5 5l5 5M10 5l-5 5" stroke="#ef5023" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-[2px]" style={{ color: "#ef5023" }}>Failure detected</span>
                      </div>

                      {/* Diagnostic content */}
                      <div className="flex flex-col gap-[10px]">
                        <p className="font-bold text-[15px] leading-[1.4]" style={{ color: "#111", fontFamily: "inherit" }}>
                          {item.failure}
                        </p>
                        <p className="text-[13px] leading-[1.7] italic" style={{ color: "#d9604a" }}>
                          → {item.consequence}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider arrow */}
                  <div
                    className="hidden md:flex items-center justify-center"
                    style={{ background: "#ffffff", width: "64px" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "44px", height: "44px",
                        background: "#ef5023",
                        boxShadow: "0 6px 20px rgba(239,80,35,0.45)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 9H14M10 5L14 9L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Right — Solution */}
                  <div
                    className="px-[32px] py-[36px] flex flex-col gap-[20px]"
                    style={{ background: "#fafafa" }}
                  >
                    <div className="flex items-center gap-[10px]">
                      {/* Shield-check icon */}
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2L3 4.5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5v-5L9 2Z" fill="rgba(34,197,94,0.1)" stroke="#16a34a" strokeWidth="1.3" strokeLinejoin="round"/>
                        <path d="M6 9l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: "#16a34a" }}>How we solve it</span>
                    </div>

                    <p className="text-[14px] leading-[1.7]" style={{ color: "#555" }}>{item.response}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── S4: Buyer Problem Triggers ── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-[360px_1fr] gap-[32px] md:gap-[80px] items-center">

            {/* Left — title + description */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Is this you?</p>
              <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px]">
                <span style={{ color: "#fff" }}>Three </span><span style={{ color: "#ef5023" }}>situations</span>
                <br /><span style={{ color: "#fff" }}>that bring </span><span style={{ color: "#ef5023" }}>teams</span><span style={{ color: "#fff" }}> to us</span>
              </h2>
              <p className="text-[14px] leading-[1.7]" style={{ color: "#888" }}>
                If any of these sound familiar, we've solved this problem in production not just in theory.
              </p>
            </div>

            {/* Right — checklist */}
            <div className="flex flex-col" style={{ borderTop: "1px solid #222" }}>
              {[
                "You're spending engineer time on work that follows a predictable pattern.",
                "You have data that could answer questions automatically, but it doesn't.",
                "You're integrating LLMs into your product but hitting production reliability issues.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="py-[24px] flex items-stretch gap-4"
                  style={{ borderBottom: "1px solid #222" }}
                >
                  <span className="flex-shrink-0" style={{ width: "4px", minHeight: "20px", alignSelf: "stretch", background: "#FF6B2B", borderRadius: "2px" }} />
                  <p className="font-semibold text-[15px] leading-[1.6]" style={{ color: "#e0e0e0" }}>{text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── S5: Technical Capabilities Tabs ── */}
        {(() => {
          const TABS = [
            {
              label: "Multi-Agent Systems",
              tag: "Orchestration",
              color: "#ef5023",
              desc: "Orchestration frameworks for agents that need to hand off, loop, or run in parallel. We pick the framework based on whether your workflow is deterministic or exploratory.",
              frameworks: [
                { name: "LangGraph", when: "Deterministic business workflow agents where state management and branching logic matter." },
                { name: "AutoGen", when: "Multi-agent conversations where agents critique and revise each other's outputs." },
                { name: "CrewAI", when: "Role-based agent teams with defined task sequences and human-in-the-loop checkpoints." },
              ],
            },
            {
              label: "RAG Pipelines",
              tag: "Retrieval",
              color: "#7c3aed",
              desc: "Retrieval systems that go beyond naive vector search. Chunk strategy and embedding model selection determine whether your RAG actually retrieves the right context.",
              frameworks: [
                { name: "Pinecone", when: "Managed vector store for production workloads that need fast ANN search at scale." },
                { name: "Weaviate", when: "Hybrid search combining BM25 + vector , when keyword precision matters alongside semantic similarity." },
                { name: "Chroma", when: "Local and dev-stage retrieval for rapid prototyping before committing to a managed store." },
              ],
            },
            {
              label: "Agentic Automation",
              tag: "Integration",
              color: "#0ea5e9",
              desc: "Agents that replace manual workflows by calling tools, reading databases, and triggering downstream systems. Integration layer is the hardest part — not the model.",
              frameworks: [
                { name: "API Connectors", when: "REST and GraphQL integrations so agents can read and write to your existing systems without rebuilding them." },
                { name: "Webhooks", when: "Event-driven triggers that let agents respond to external signals in real time." },
                { name: "DB Connectors", when: "Direct database read access for agents that need structured data alongside unstructured retrieval." },
              ],
            },
            {
              label: "LLM Integration",
              tag: "Models",
              color: "#16a34a",
              desc: "Model selection is an engineering decision  not a preference. We evaluate latency, cost, context window, and accuracy benchmarks for your specific task before recommending a model.",
              frameworks: [
                { name: "OpenAI", when: "GPT-4o for tool-use tasks requiring fast structured output and broad API ecosystem compatibility." },
                { name: "Anthropic", when: "Claude for long-context tasks, instruction following, and workflows where refusal behavior needs to be controlled." },
                { name: "Gemini", when: "Multimodal inputs — document, image, and video understanding in a single model call." },
              ],
            },
          ];
          const panel = TABS[activeTab];
          return (
            <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#f4f4f4" }}>
              <div
                className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0"
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(239,80,35,0.06)",
                }}
              >

                {/* Left — sidebar */}
                <div
                  className="flex flex-col"
                  style={{
                    background: "linear-gradient(160deg, #1a1a1a 0%, #111 100%)",
                    borderRight: "1px solid #2a2a2a",
                  }}
                >

                  {/* Header */}
                  <div
                    className="px-[28px] pt-[32px] pb-[24px]"
                    style={{ borderBottom: "1px solid #222" }}
                  >
                    <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[8px]" style={{ color: "#ef5023" }}>Under the hood</p>
                    <h2 className="font-black text-[22px] leading-[30px] tracking-[-0.8px]" style={{ color: "#fff" }}>Technical<br />Capabilities</h2>
                  </div>

                  {/* Vertical tab list */}
                  <div className="flex flex-col py-[12px]">
                    {TABS.map((tab, i) => (
                      <button
                        key={tab.label}
                        onClick={() => setActiveTab(i)}
                        role="tab"
                        aria-selected={activeTab === i}
                        className="group relative flex items-center gap-[14px] px-[20px] py-[14px] text-left cursor-pointer transition-all border-none"
                        style={{ background: "transparent" }}
                      >
                        {/* Active indicator bar */}
                        <div
                          className="absolute left-0 top-[8px] bottom-[8px] w-[3px] rounded-r-full transition-all"
                          style={{ background: activeTab === i ? "#ffffff" : "transparent" }}
                        />

                        {/* Active row highlight */}
                        {activeTab === i && (
                          <div className="absolute inset-0" style={{ background: "rgba(239,80,35,0.08)" }} />
                        )}

                        <div className="relative flex flex-col gap-[2px] pl-[8px]">
                          <span
                            className="text-[10px] font-bold uppercase tracking-[1.5px] transition-colors"
                            style={{ color: activeTab === i ? "#ef5023" : "#444" }}
                          >
                            {tab.tag}
                          </span>
                          <span
                            className="text-[13px] font-semibold leading-[1.4] transition-colors"
                            style={{ color: activeTab === i ? "#fff" : "#666" }}
                          >
                            {tab.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                </div>

                {/* Right — content panel */}
                <div
                  className="flex flex-col gap-[32px] px-[16px] md:px-[40px] py-[40px]"
                  style={{ background: `linear-gradient(160deg, ${panel.color}08 0%, #ffffff 40%)` }}
                >

                  {/* Panel header */}
                  <div className="flex flex-col gap-[6px]" style={{ borderBottom: `1px solid ${panel.color}20`, paddingBottom: "24px" }}>
                    <div className="flex items-center gap-[8px] mb-[4px]">
                      <span
                        className="inline-block px-[10px] py-[4px] rounded-[5px] text-[10px] font-bold uppercase tracking-[1.5px]"
                        style={{ background: panel.color, color: "#ffffff", boxShadow: `0 4px 12px ${panel.color}50` }}
                      >
                        {panel.tag}
                      </span>
                    </div>
                    <h3
                      className="font-black text-[24px] leading-[32px] tracking-[-0.8px] inline-block"
                      style={{
                        color: "#111",
                        borderBottom: `3px solid ${panel.color}`,
                        paddingBottom: "4px",
                        alignSelf: "flex-start",
                      }}
                    >
                      {panel.label}
                    </h3>
                    <p className="text-[14px] leading-[1.75]" style={{ color: "#888", maxWidth: "560px" }}>
                      {panel.desc}
                    </p>
                  </div>

                  {/* Framework cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
                    {panel.frameworks.map((f, fi) => (
                      <div
                        key={f.name}
                        className="flex flex-col gap-[12px] px-[20px] py-[20px] rounded-[12px]"
                        style={{
                          background: "#ffffff",
                          border: `1px solid ${panel.color}25`,
                          boxShadow: `0 2px 12px ${panel.color}10, 0 1px 3px rgba(0,0,0,0.05)`,
                        }}
                      >
                        <div className="flex items-center gap-[10px]">
                          <span
                            className="text-[13px] font-black tabular-nums"
                            style={{ color: panel.color, letterSpacing: "-0.5px", opacity: 0.6 }}
                          >
                            {String(fi + 1).padStart(2, "0")}
                          </span>
                          <span className="font-bold text-[14px]" style={{ color: "#111" }}>{f.name}</span>
                        </div>
                        <p className="text-[12px] leading-[1.7]" style={{ color: "#888" }}>{f.when}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </section>
          );
        })()}

        {/* ── S6: POC to Production Process ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#0d0d0d" }}>

          {/* Decorative: dot grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(239,80,35,0.22) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }} />

          {/* Decorative: large faded "PROCESS" text */}
          <span
            className="absolute bottom-[-20px] right-[-10px] font-black select-none pointer-events-none"
            style={{
              fontSize: "clamp(100px, 14vw, 200px)",
              lineHeight: 1,
              color: "rgba(239,80,35,0.09)",
              letterSpacing: "-8px",
              userSelect: "none",
            }}
            aria-hidden="true"
          >
            PROCESS
          </span>

          {/* Decorative: orange glow top-left */}
          <div className="absolute pointer-events-none" style={{
            top: "-100px", left: "-80px",
            width: "400px", height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,80,35,0.15) 0%, transparent 70%)",
          }} />

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[64px]">

            {/* Header */}
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Delivery Structure</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">POC to Production Process</h2>
            </div>

            {/* Vertical timeline + image */}
            {(() => {
              const phases = [
                { num: "01", phase: "Discovery", deliverables: ["Agent scope doc", "Use case prioritization", "Technical feasibility assessment"] },
                { num: "02", phase: "POC Build", deliverables: ["Working prototype with test dataset", "Happy path + key edge cases"] },
                { num: "03", phase: "Production Architecture", deliverables: ["Error handling", "Observability", "Fallback chains", "HITL design"] },
                { num: "04", phase: "Deploy & Monitor", deliverables: ["Production deployment", "Logging dashboard", "Stabilization period"] },
              ];
              return (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_655px] gap-[64px] items-center">

                  {/* Left: timeline */}
                  <div className="flex gap-[0]">

                    {/* Phase labels */}
                    <div className="flex flex-col shrink-0" style={{ width: "80px" }}>
                      {phases.map((row) => (
                        <div
                          key={row.num}
                          className="flex flex-col items-end pr-[14px]"
                          style={{ minHeight: "120px", justifyContent: "flex-start", paddingTop: "10px" }}
                        >
                          <span className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: "#555" }}>Phase</span>
                          <span className="font-black tabular-nums" style={{ color: "#ef5023", fontSize: "26px", letterSpacing: "-1.5px", lineHeight: 1.1 }}>{row.num}</span>
                        </div>
                      ))}
                    </div>

                    {/* Center: continuous rail */}
                    <div className="relative flex flex-col items-center shrink-0" style={{ width: "24px" }}>
                      <div
                        className="absolute w-[2px]"
                        style={{
                          top: "18px",
                          bottom: "18px",
                          background: "linear-gradient(to bottom, #ef5023, rgba(239,80,35,0.3))",
                        }}
                      />
                      {phases.map((row) => (
                        <div
                          key={row.num}
                          className="relative flex items-center justify-center"
                          style={{ minHeight: "120px" }}
                        >
                          <div
                            className="rounded-full"
                            style={{
                              width: "10px",
                              height: "10px",
                              background: "#ef5023",
                              boxShadow: "0 0 10px rgba(239,80,35,0.7)",
                              zIndex: 1,
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col" style={{ flex: 1 }}>
                      {phases.map((row) => (
                        <div
                          key={row.num}
                          className="flex flex-col gap-[12px] pl-[28px]"
                          style={{ minHeight: "120px", justifyContent: "center" }}
                        >
                          <h3 className="font-black text-white text-[20px] leading-[1.2] tracking-[-0.6px]">{row.phase}</h3>
                          <div className="flex flex-wrap gap-[6px]">
                            {row.deliverables.map((d) => (
                              <span
                                key={d}
                                className="inline-block px-[10px] py-[5px] rounded-[6px] text-[11px] font-medium"
                                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#aaa" }}
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Right: image */}
                  <div className="hidden md:flex items-center justify-center relative">

                    {/* Image — floating card concept */}
                    <div className="relative w-full" style={{ padding: "24px" }}>

                      {/* Grid background */}
                      <div className="absolute inset-0 pointer-events-none" style={{
                        backgroundImage: "linear-gradient(rgba(239,80,35,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(239,80,35,0.08) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        borderRadius: "16px",
                      }} />

                      {/* Front image card */}
                      <div className="relative rounded-[12px] overflow-hidden" style={{
                        zIndex: 1,
                        boxShadow: "0 2px 0 rgba(255,255,255,0.05) inset, 0 20px 60px rgba(0,0,0,0.7), 0 4px 20px rgba(239,80,35,0.15)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        transform: "scale(0.9)",
                        transformOrigin: "center center",
                      }}>
                        <img
                          src="/Media/Image/chart.png"
                          alt="Delivery process"
                          className="w-full h-auto object-contain block"
                        />
                      </div>


                    </div>

                  </div>

                </div>
              );
            })()}


          </div>
        </section>

        {/* ── S7: Models & Frameworks ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#f4f4f4", borderTop: "1px solid #e8e8e8" }}>

          {/* Circuit board lines — horizontal + vertical SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.32 }}>
            {/* Horizontal traces */}
            <line x1="0" y1="60" x2="100%" y2="60" stroke="#ef5023" strokeWidth="1" strokeDasharray="6 14"/>
            <line x1="0" y1="160" x2="60%" y2="160" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 20"/>
            <line x1="20%" y1="280" x2="100%" y2="280" stroke="#ef5023" strokeWidth="1" strokeDasharray="6 14"/>
            <line x1="0" y1="400" x2="45%" y2="400" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 16"/>
            <line x1="55%" y1="400" x2="100%" y2="400" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 16"/>
            <line x1="10%" y1="520" x2="90%" y2="520" stroke="#ef5023" strokeWidth="1" strokeDasharray="6 14"/>
            {/* Vertical traces */}
            <line x1="80" y1="0" x2="80" y2="100%" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 18"/>
            <line x1="240" y1="0" x2="240" y2="60%" stroke="#ef5023" strokeWidth="1" strokeDasharray="6 14"/>
            <line x1="600" y1="20%" x2="600" y2="100%" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 18"/>
            <line x1="900" y1="0" x2="900" y2="55%" stroke="#ef5023" strokeWidth="1" strokeDasharray="6 12"/>
            <line x1="1200" y1="30%" x2="1200" y2="100%" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 18"/>
            {/* Nodes / solder joints */}
            <circle cx="80" cy="60" r="3" fill="#ef5023"/>
            <circle cx="240" cy="160" r="3" fill="#ef5023"/>
            <circle cx="600" cy="280" r="3" fill="#ef5023"/>
            <circle cx="900" cy="400" r="3" fill="#ef5023"/>
            <circle cx="1200" cy="520" r="3" fill="#ef5023"/>
            <circle cx="80" cy="400" r="2" fill="#ef5023"/>
            <circle cx="600" cy="520" r="2" fill="#ef5023"/>
          </svg>

          {/* Binary stream — right edge */}
          <div
            className="absolute top-0 right-[32px] flex flex-col gap-[6px] pointer-events-none select-none"
            aria-hidden="true"
            style={{ opacity: 0.28 }}
          >
            {["01001100", "10110010", "00101101", "11010010", "01101001", "10010110", "00110101", "11001010", "01011010", "10100101", "00011011", "11100100"].map((bin, i) => (
              <span key={i} className="font-mono text-[11px] tracking-[2px]" style={{ color: "#ef5023" }}>{bin}</span>
            ))}
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            {/* Header */}
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Technical Stack</p>
              <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px]" style={{ color: "#111" }}>Models & Frameworks</h2>
            </div>

            {/* Category groups */}
            <div className="flex flex-col gap-[40px]">
              {[
                {
                  category: "Orchestration",
                  items: [
                    { name: "LangGraph", when: "Preferred for deterministic business workflow agents where state management and branching logic matter.", icon: "https://avatars.githubusercontent.com/u/126733545?s=48&v=4" },
                    { name: "AutoGen", when: "Multi-agent conversations where agents critique and revise each other's outputs.", icon: "https://avatars.githubusercontent.com/u/150780480?s=48&v=4" },
                    { name: "CrewAI", when: "Role-based agent teams with defined task sequences and human-in-the-loop checkpoints.", icon: "https://avatars.githubusercontent.com/u/153117024?s=48&v=4" },
                  ],
                },
                {
                  category: "Retrieval",
                  items: [
                    { name: "Pinecone", when: "Managed vector store for production workloads that need fast ANN search at scale.", icon: "https://avatars.githubusercontent.com/u/54333248?s=48&v=4" },
                    { name: "Weaviate", when: "Hybrid search combining BM25 + vector, when keyword precision matters alongside semantic similarity.", icon: "https://avatars.githubusercontent.com/u/37794290?s=48&v=4" },
                    { name: "Chroma", when: "Local and dev-stage retrieval for rapid prototyping before committing to a managed store.", icon: "https://avatars.githubusercontent.com/u/116134486?s=48&v=4" },
                  ],
                },
                {
                  category: "Models",
                  items: [
                    { name: "OpenAI", when: "GPT-4o for tool-use tasks requiring fast structured output and broad API ecosystem compatibility.", icon: "https://avatars.githubusercontent.com/u/14957082?s=48&v=4" },
                    { name: "Anthropic", when: "Claude for long-context tasks, instruction following, and workflows where refusal behavior needs to be controlled.", icon: "https://avatars.githubusercontent.com/u/76263028?s=48&v=4" },
                    { name: "Gemini", when: "Multimodal inputs — document, image, and video understanding in a single model call.", icon: "https://avatars.githubusercontent.com/u/1342004?s=48&v=4" },
                  ],
                },
                {
                  category: "Integration",
                  items: [
                    { name: "REST / GraphQL", when: "REST and GraphQL integrations so agents can read and write to your existing systems without rebuilding them.", icon: "https://avatars.githubusercontent.com/u/9950313?s=48&v=4" },
                    { name: "Webhooks", when: "Event-driven triggers that let agents respond to external signals in real time.", icon: "https://avatars.githubusercontent.com/u/8450408?s=48&v=4" },
                    { name: "DB Connectors", when: "Direct database read access for agents that need structured data alongside unstructured retrieval.", icon: "https://avatars.githubusercontent.com/u/177543?s=48&v=4" },
                  ],
                },
              ].map((group) => (
                <div key={group.category} className="flex flex-col gap-[16px]">

                  {/* Category label */}
                  <div className="flex items-center gap-[16px]">
                    <span
                      className="shrink-0 text-[14px] font-black uppercase tracking-[2px]"
                      style={{ color: "#ef5023", borderBottom: "2px solid #ef5023", paddingBottom: "2px" }}
                    >
                      {group.category}
                    </span>
                    <div className="flex-1 h-[1px]" style={{ background: "#e0e0e0" }} />
                  </div>

                  {/* Framework cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
                    {group.items.map((item, idx) => (
                      <div
                        key={item.name}
                        className="relative flex flex-col gap-[16px] px-[24px] py-[24px] rounded-[14px] overflow-hidden"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #ebebeb",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                        }}
                      >
                        {/* Icon + Name */}
                        <div className="relative flex items-center justify-between">
                          <span className="font-black text-[15px] tracking-[-0.3px]" style={{ color: "#111" }}>{item.name}</span>
                          <img src={item.icon} alt={item.name} width={40} height={40} className="object-contain rounded-[6px]" />
                        </div>

                        {/* Divider */}
                        <div className="relative" style={{ height: "1px", background: "#f0f0f0" }} />

                        {/* Description */}
                        <p className="relative text-[12px] leading-[1.7]" style={{ color: "#888" }}>{item.when}</p>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #ef5023, transparent)" }} />
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── S9: Real Engineer Profiles ── */}
        {(() => {
          const engineers = [
            {
              name: "Minh Tran",
              avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
              specialization: "Agentic Systems",
              years: 6,
              hardest: "Built a multi-agent loan underwriting system handling 12k daily decisions across 3 financial institutions. Designed a full audit trail with structured logging, HITL override flows for edge cases, and explicit fallback chains for every critical decision node. Integrated compliance checkpoints at each agent handoff to satisfy PCI-DSS requirements. System has been running in production for 18 months with zero critical incidents.",
              github: "github.com/minhtran",
            },
            {
              name: "Linh Nguyen",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
              specialization: "RAG & Retrieval",
              years: 5,
              hardest: "Designed a hybrid BM25 + vector retrieval pipeline for a legal tech platform processing 2M+ documents across 14 jurisdictions. Built a custom chunking strategy per document type, tuned embedding models for legal language, and implemented multi-tenant index isolation. Achieved sub-200ms p95 latency with real-time index updates under concurrent write load. Reduced hallucination rate by 62% compared to the previous naive RAG baseline.",
              github: "github.com/linhnguyen",
            },
            {
              name: "Duc Pham",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
              specialization: "LLM Integration",
              years: 4,
              hardest: "Shipped a production LLM router across OpenAI, Anthropic, and Gemini with automatic provider fallback, per-token cost tracking, and latency-based model selection per request type. Built a unified streaming interface consumed by 4 downstream product teams without requiring any client-side changes. Added circuit breakers per provider, retry logic with exponential backoff, and a real-time cost dashboard. Reduced average inference cost by 34% within the first quarter.",
              github: "github.com/ducpham",
            },
          ];
          const githubIcon = (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
          );
          return (
            <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>

              {/* Topographic contour lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.13 }}>
                {/* Wave contour set 1 — bottom-left origin */}
                <path d="M-100,600 C100,520 300,580 500,500 S800,420 1000,480 S1300,400 1500,440" fill="none" stroke="#ef5023" strokeWidth="1"/>
                <path d="M-100,540 C100,460 300,520 500,440 S800,360 1000,420 S1300,340 1500,380" fill="none" stroke="#ef5023" strokeWidth="1"/>
                <path d="M-100,480 C100,400 300,460 500,380 S800,300 1000,360 S1300,280 1500,320" fill="none" stroke="#ef5023" strokeWidth="1"/>
                <path d="M-100,420 C100,340 300,400 500,320 S800,240 1000,300 S1300,220 1500,260" fill="none" stroke="#ef5023" strokeWidth="0.8"/>
                <path d="M-100,360 C100,280 300,340 500,260 S800,180 1000,240 S1300,160 1500,200" fill="none" stroke="#ef5023" strokeWidth="0.8"/>
                <path d="M-100,300 C100,220 300,280 500,200 S800,120 1000,180 S1300,100 1500,140" fill="none" stroke="#ef5023" strokeWidth="0.6"/>
                <path d="M-100,240 C100,160 300,220 500,140 S800,60  1000,120 S1300,40  1500,80"  fill="none" stroke="#ef5023" strokeWidth="0.6"/>
                {/* Wave contour set 2 — top-right origin, offset phase */}
                <path d="M-100,680 C200,620 400,660 600,580 S900,520 1100,560 S1400,480 1500,510" fill="none" stroke="#ef5023" strokeWidth="0.7"/>
                <path d="M-100,740 C200,680 400,720 600,640 S900,580 1100,620 S1400,540 1500,570" fill="none" stroke="#ef5023" strokeWidth="0.5"/>
              </svg>

              {/* Glow — bottom left */}
              <div className="absolute bottom-[-60px] left-[-60px] pointer-events-none" style={{
                width: "400px", height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 70%)",
              }} />

              <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]">

                {/* Header */}
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>The Team</p>
                  <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">Engineers Behind the Work</h2>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#999", maxWidth: "520px" }}>
                    Discipline-specific AI engineers not generalists. Each has shipped real systems in production.
                  </p>
                </div>

                {/* 3-col card grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                  {engineers.map((eng) => (
                    <div
                      key={eng.name}
                      className="flex flex-col gap-[20px] rounded-[14px] overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(239,80,35,0.06)", backdropFilter: "blur(12px)" }}
                    >
                      {/* Top accent bar */}
                      <div style={{ height: "3px", background: "#ef5023" }} />

                      <div className="flex flex-col gap-[20px] px-[24px] pb-[28px]">
                        {/* Avatar + name */}
                        <div className="flex items-center gap-[16px]">
                          <div
                            className="rounded-full overflow-hidden shrink-0"
                            style={{ width: "72px", height: "72px", background: "#1e1e1e", border: "2px solid #2a2a2a" }}
                          >
                            <img src={eng.avatar} alt={eng.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col gap-[6px]">
                            <span className="font-black text-white text-[16px] leading-[1.2]">{eng.name}</span>
                            <span className="text-[11px] font-semibold" style={{ color: "#ef5023" }}>{eng.specialization}</span>
                            <span
                              className="inline-flex items-center gap-[5px] px-[8px] py-[3px] rounded-full text-[10px] font-bold uppercase tracking-[1px] self-start"
                              style={{ background: "rgba(99,210,138,0.12)", color: "#63d28a", border: "1px solid rgba(99,210,138,0.2)" }}
                            >
                              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#63d28a", display: "inline-block" }} />
                              {eng.years} yrs exp
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", background: "#1a1a1a" }} />

                        {/* Hardest system */}
                        <div className="flex flex-col gap-[8px] flex-1">
                          <span className="text-[9px] font-bold uppercase tracking-[2px]" style={{ color: "#ef5023" }}>Hardest system shipped</span>
                          <p className="text-[13px] leading-[1.8]" style={{ color: "#bbb" }}>{eng.hardest}</p>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center gap-[6px]">
                          <span style={{ color: "#fff" }}>{githubIcon}</span>
                          <a href={`https://${eng.github}`} target="_blank" rel="noopener noreferrer" className="text-[11px]" style={{ color: "#fff", textDecoration: "none" }}>{eng.github}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          );
        })()}

        {/* ── S10: FAQ ── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Common Questions</p>
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
                      <span className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#bbb" }}>{item.label}</span>
                      <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#888" }}>{item.question}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* right - answer panel */}
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

        {/* ── S11: Assessment CTA ── */}
        <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[680px] mx-auto flex flex-col gap-[40px]">

            {/* Headline */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Free Assessment</p>
              <h2 className="font-black text-white text-[32px] leading-[40px] tracking-[-1px]">
                Not sure if {name} AI is right for your use case?{" "}
                <span style={{ color: "#ef5023" }}>We'll tell you in 30 minutes.</span>
              </h2>
              <p className="text-[14px] leading-[1.7]" style={{ color: "#555" }}>
                No pitch. No obligation. Just an honest answer about whether we can help.
              </p>
            </div>

            {/* 3-field form */}
            <form
              className="flex flex-col gap-[16px]"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Field 1: Name */}
              <div className="flex flex-col gap-[6px]">
                <label className="text-[11px] font-semibold uppercase tracking-[1.5px]" style={{ color: "#444" }}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-[16px] h-[48px] rounded-[10px] text-[14px] text-white outline-none"
                  style={{
                    background: "#111",
                    border: "1px solid #222",
                    color: "#fff",
                  }}
                />
              </div>

              {/* Field 2: Work email */}
              <div className="flex flex-col gap-[6px]">
                <label className="text-[11px] font-semibold uppercase tracking-[1.5px]" style={{ color: "#444" }}>Work Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-[16px] h-[48px] rounded-[10px] text-[14px] outline-none"
                  style={{
                    background: "#111",
                    border: "1px solid #222",
                    color: "#fff",
                  }}
                />
              </div>

              {/* Field 3: Intent textarea */}
              <div className="flex flex-col gap-[6px]">
                <label className="text-[11px] font-semibold uppercase tracking-[1.5px]" style={{ color: "#444" }}>What are you trying to automate or augment?</label>
                <textarea
                  placeholder="Describe the process in 1–3 sentences..."
                  rows={3}
                  className="w-full px-[16px] py-[14px] rounded-[10px] text-[14px] outline-none resize-none"
                  style={{
                    background: "#111",
                    border: "1px solid #222",
                    color: "#fff",
                    lineHeight: "1.6",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[52px] rounded-[12px] font-bold text-[15px] text-white cursor-pointer border-none"
                style={{
                  background: "#ef5023",
                  boxShadow: "0 8px 32px rgba(239,80,35,0.35)",
                  marginTop: "4px",
                }}
              >
                Get My Free Assessment
              </button>

              <p className="text-center text-[11px]" style={{ color: "#333" }}>
                We respond within 1 business day.
              </p>
            </form>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}