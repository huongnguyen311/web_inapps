import Link from "next/link";
import { PricingTier } from "@/data/services";

interface Props {
  tiers: PricingTier[];
}

export default function ServicePricingTable({ tiers }: Props) {
  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#111111", borderBottom: "1px solid #1f1f1f" }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-black text-white text-[32px] leading-[1.15] tracking-[-0.8px] mb-[8px]">Choose your engagement</h2>
        <p className="text-[15px] text-[#888] mb-[48px]">No fixed prices - we scope every engagement to your specific needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] items-end">
          {tiers.map((tier) => (
            <Link
              key={tier.name}
              href="/contact"
              className="relative flex flex-col rounded-[20px] overflow-hidden"
              style={{
                background: tier.highlight ? "#ef5023" : "rgba(255,255,255,0.04)",
                border: tier.highlight ? "none" : "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                transform: tier.highlight ? "translateY(-16px) scale(1.02)" : "none",
                boxShadow: tier.highlight
                  ? "0 32px 64px rgba(239,80,35,0.25), 0 12px 28px rgba(239,80,35,0.15)"
                  : "0 8px 32px rgba(0,0,0,0.4)",
                zIndex: tier.highlight ? 2 : 1,
              }}
            >
              {/* Top */}
              <div
                className="px-[28px] pt-[28px] pb-[24px]"
                style={{ borderBottom: tier.highlight ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="font-black text-white text-[20px] mb-[10px]">{tier.name}</h3>
                <p className="text-[13px] leading-[1.6]" style={{ color: tier.highlight ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)" }}>
                  {tier.description}
                </p>
              </div>

              {/* Differentiators */}
              <div className="flex flex-col gap-[10px] px-[28px] py-[22px] flex-1">
                {tier.differentiators.map((d) => (
                  <div key={d} className="flex items-center gap-[10px]">
                    <div
                      className="shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                      style={{ background: tier.highlight ? "rgba(255,255,255,0.2)" : "rgba(239,80,35,0.12)" }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke={tier.highlight ? "#ffffff" : "#ef5023"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px]" style={{ color: tier.highlight ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)" }}>{d}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-[28px] pb-[28px]">
                <div
                  className="flex items-center justify-between w-full px-[20px] py-[14px] rounded-[14px] font-bold text-[13px]"
                  style={{
                    background: tier.highlight ? "rgba(255,255,255,1)" : "linear-gradient(135deg, #ef5023 0%, #d94019 100%)",
                    color: tier.highlight ? "#ef5023" : "#ffffff",
                    boxShadow: tier.highlight ? "0 4px 20px rgba(255,255,255,0.25)" : "0 4px 20px rgba(239,80,35,0.45)",
                  }}
                >
                  <span>{tier.cta}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke={tier.highlight ? "#ef5023" : "#ffffff"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}