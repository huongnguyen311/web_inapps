"use client";

import { useState, useId } from "react";

const TABS = [
  {
    label: "AI Agents",
    desc: "We build autonomous AI agents that plan, reason, and execute multi-step tasks across your business workflows without constant human hand-holding.",
    tags: ["LangChain", "CrewAI", "AutoGen", "LangGraph"],
    caseStudy: "Customer support agent handling 80% of inbound tickets automatically, response time cut from 4 hours to 30 seconds.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M17 8h2M5 8H3M12 3V1M12 15v2"/>
      </svg>
    ),
  },
  {
    label: "GenAI Integration",
    desc: "We integrate large language models (LLMs) directly into your existing products and internal tools, adding intelligent features without rebuilding from scratch.",
    tags: ["OpenAI", "Anthropic", "Gemini", "Mistral"],
    caseStudy: "SaaS platform added AI-powered document summarization reducing review time by 65%, shipped in 3 weeks.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    label: "Agentic Workflows",
    desc: "We design multi-agent pipelines where specialized agents collaborate, one plans, one researches, one executes, to complete complex business processes end-to-end.",
    tags: ["LangGraph", "AutoGen", "Prefect", "Temporal"],
    caseStudy: "E-commerce ops team automated order reconciliation across 5 systems, saving 200+ manual hours per month.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="9" width="5" height="5" rx="1"/><rect x="17" y="9" width="5" height="5" rx="1"/>
        <rect x="9.5" y="3" width="5" height="5" rx="1"/>
        <path d="M7 11.5h3.5M17 11.5h-3.5M12 8v1.5"/>
      </svg>
    ),
  },
  {
    label: "RAG & Knowledge Bases",
    desc: "We build retrieval-augmented generation systems that give AI agents access to your internal knowledge, docs, databases, policies, with accurate, grounded answers.",
    tags: ["Pinecone", "Weaviate", "pgvector", "LlamaIndex"],
    caseStudy: "Legal firm's AI assistant answers policy questions from 50,000+ documents with 94% accuracy, zero hallucinations.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9"/>
        <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/>
      </svg>
    ),
  },
];

export default function ServiceAICapabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS[activeTab];
  const gridId = useId();

  return (
    <section
      className="relative px-[40px] py-[70px] overflow-hidden"
      style={{ background: "#111111", borderTop: "1px solid #1a1a1a" }}
    >
      {/* background decor */}
      <div className="absolute inset-0 pointer-events-none">
        {/* grid lines */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <pattern id={gridId} width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`}/>
        </svg>
        {/* orange glow top-right */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.12) 0%, transparent 70%)" }} />
        {/* subtle glow bottom-left */}
        <div style={{ position: "absolute", bottom: "-60px", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.06) 0%, transparent 70%)" }} />
        {/* horizontal scan line */}
        <div style={{ position: "absolute", top: "38%", left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(239,80,35,0.08), transparent)" }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]">

        {/* header */}
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">TECHNICAL DEPTH</p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Our AI Capabilities
          </h2>
        </div>

        {/* tab + content layout */}
        <div
          className="flex flex-col lg:flex-row rounded-[20px] overflow-hidden"
          style={{ border: "1px solid #2a2a2a", boxShadow: "0 16px 56px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)" }}
        >
          {/* left — tab list */}
          <div
            className="flex flex-row lg:flex-col lg:w-[280px] flex-shrink-0"
            style={{ background: "#1a1a1a", borderRight: "1px solid #2a2a2a", display: "flex", flexDirection: "column" }}
          >
            {TABS.map((t, i) => {
              const active = activeTab === i;
              return (
                <button
                  key={t.label}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-[12px] px-[24px] text-left w-full transition-all border-none cursor-pointer flex-1"
                  style={{
                    background: active ? "#242424" : "transparent",
                    borderLeft: active ? "3px solid #ef5023" : "3px solid transparent",
                    borderBottom: "1px solid #2a2a2a",
                    boxShadow: active ? "2px 0 12px rgba(239,80,35,0.12)" : "none",
                    transition: "all 0.2s ease",
                    minHeight: "72px",
                  }}
                >
                  <div
                    className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{
                      background: active ? "rgba(239,80,35,0.15)" : "rgba(255,255,255,0.05)",
                      color: active ? "#ef5023" : "#666",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {t.icon}
                  </div>
                  <span
                    className="text-[13px] leading-[1.4]"
                    style={{
                      fontWeight: active ? 700 : 500,
                      color: active ? "#ffffff" : "#666",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* right — content panel */}
          <div className="flex-1 p-[48px] flex flex-col gap-[32px]" style={{ background: "#181818" }}>

            {/* description */}
            <p className="text-white/70 text-[15px] leading-[1.85]">{tab.desc}</p>

            {/* tech tags */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[10px] font-black uppercase tracking-[2.5px] text-white/30">Tech Stack</p>
              <div className="flex flex-wrap gap-[8px]">
                {tab.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-semibold px-[14px] py-[6px] rounded-full"
                    style={{
                      background: "rgba(239,80,35,0.08)",
                      border: "1px solid rgba(239,80,35,0.25)",
                      color: "#ef5023",
                      boxShadow: "0 2px 8px rgba(239,80,35,0.10)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* mini case study */}
            <div
              className="rounded-[16px] p-[28px] flex flex-col gap-[12px] mt-auto"
              style={{
                background: "rgba(239,80,35,0.08)",
                border: "1px solid rgba(239,80,35,0.2)",
                boxShadow: "0 8px 32px rgba(239,80,35,0.1)",
              }}
            >
              <div className="flex items-center gap-[8px]">
                <div
                  className="w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#ef5023" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/>
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[2px] text-[#ef5023]">Mini Case Study</span>
              </div>
              <p className="text-white/60 text-[13px] leading-[1.75] font-medium">{tab.caseStudy}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}