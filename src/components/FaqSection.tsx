"use client";

import { useState } from "react";

const faqCategories = [
  {
    label:    "Commission",
    question: "How does commission and payout work?",
    answer:   "IGA partners earn tiered commissions from 10% up to 20% based on deal volume and tier level. Payouts are made monthly, net-30 after client payment is received. The full commission schedule is included in your Partner Agreement — no hidden deductions.",
  },
  {
    label:    "Deal Protection",
    question: "How do I register and protect a deal?",
    answer:   "Submit a deal registration through your partner portal in under 5 minutes. Once approved, your deal is exclusively protected for 90 days — our direct sales team will not approach that account independently. Protection renews automatically if the deal progresses.",
  },
  {
    label:    "Tier Advancement",
    question: "How do I move to a higher partner tier?",
    answer:   "Tier advancement is reviewed quarterly based on deal volume, quality scores, and delivery outcomes. Select tier requires 2–3 closed deals per quarter. Premier requires consistent strategic contribution and a joint account plan. Your dedicated partner manager tracks progress with you in monthly cadence calls.",
  },
  {
    label:    "Onboarding",
    question: "How quickly can I start after signing?",
    answer:   "Onboarding takes 5–7 business days. Within 48 hours of signing the NDA and MSA, you'll have access to the partner portal, co-branded proposal templates, pricing playbooks, and your assigned partner manager contact.",
  },
  {
    label:    "Exclusivity",
    question: "Can I co-sell with other vendors?",
    answer:   "Yes — InApps does not require exclusivity. You're free to work with other technology or delivery partners. The one guarantee we do provide: registered deals are fully protected. Our direct sales team will not independently approach any account you've registered in the portal.",
  },
];

export default function FaqSection() {
  const [faqIndex, setFaqIndex] = useState(0);

  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">PARTNER FAQ</p>
            </div>
            <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
              Questions <span className="text-[#ef5023]">partners ask</span>
            </h2>
          </div>
        </div>

        {/* two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[24px]">

          {/* left - question list */}
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
                <div
                  className="w-[3px] rounded-full flex-shrink-0 mt-[2px] transition-all duration-150"
                  style={{ height: "18px", background: faqIndex === i ? "#ef5023" : "transparent" }}
                />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#777" }}>{label}</span>
                  <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#555" }}>{question}</span>
                </div>
              </button>
            ))}
          </div>

          {/* right - answer panel */}
          <div key={faqIndex} className="rounded-[16px] p-[36px] flex flex-col gap-[20px]" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
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
  );
}
