"use client";

import { useState } from "react";
import { FaqItem } from "@/data/services";

interface Props {
  items: FaqItem[];
  heading?: string;
}

export default function ServiceFaq({ items, heading }: Props) {
  const [faqIndex, setFaqIndex] = useState(0);

  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">COMMON QUESTIONS</p>
            <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
              {heading ?? <>Everything you need <span className="text-[#ef5023]">to know</span></>}
            </h2>
          </div>
        </div>

        {/* two-column layout: left = question list, right = answer */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[24px]">

          {/* left - stacked question rows */}
          <div className="flex flex-col gap-[4px]">
            {items.map((item, i) => (
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
                {/* active indicator */}
                <div
                  className="w-[3px] rounded-full flex-shrink-0 mt-[2px] transition-all duration-150"
                  style={{ height: "18px", background: faqIndex === i ? "#ef5023" : "transparent" }}
                />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[11px] font-bold uppercase tracking-[1.5px]" style={{ color: faqIndex === i ? "#ef5023" : "#999" }}>{item.label}</span>
                  <span className="text-[14px] font-semibold leading-[1.5]" style={{ color: faqIndex === i ? "#0a0a0a" : "#555" }}>{item.question}</span>
                </div>
              </button>
            ))}
          </div>

          {/* right - answer panel */}
          <div className="rounded-[16px] p-[36px] flex flex-col gap-[20px]" style={{ background: "#ffffff", border: "1px solid #e0e0e0", boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}>
            <div className="flex flex-col gap-[8px]">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#ef5023]">{items[faqIndex].label}</span>
              <h3 className="font-black text-[#0a0a0a] text-[20px] leading-[1.35] tracking-[-0.4px]">
                {items[faqIndex].question}
              </h3>
            </div>
            <p className="text-[#666] text-[14px] leading-[1.8]">
              {items[faqIndex].answer}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}