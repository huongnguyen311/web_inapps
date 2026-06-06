"use client";

import { useState } from "react";

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

export default function FAQSection() {
  const [faqIndex, setFaqIndex] = useState(0);

  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
      <style>{`
        @keyframes faqFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-faq-fade { animation: faqFade 0.25s ease forwards; }
      `}</style>

      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>Common Questions</p>
            </div>
            <h2 className="font-black text-[#0a0a0a] text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-1.5px]">
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
                  <span className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: faqIndex === i ? "#ef5023" : "#777" }}>{label}</span>
                  <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#555" }}>{question}</span>
                </div>
              </button>
            ))}
          </div>

          {/* right - answer panel */}
          <div key={faqIndex} className="rounded-[16px] p-[20px] md:p-[36px] flex flex-col gap-[20px] animate-faq-fade" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ef5023]">{faqCategories[faqIndex].label}</span>
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
  );
}