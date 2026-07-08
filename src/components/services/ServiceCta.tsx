import Link from "next/link";

interface Props {
  serviceName: string;
  heading?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export default function ServiceCta({ serviceName, heading, subtitle, ctaLabel }: Props) {
  return (
    <section className="relative px-[16px] md:px-[40px] py-[48px] overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* constellation background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
          <line x1="80"  y1="20"  x2="200" y2="60"/>
          <line x1="200" y1="60"  x2="340" y2="30"/>
          <line x1="340" y1="30"  x2="480" y2="80"/>
          <line x1="480" y1="80"  x2="620" y2="40"/>
          <line x1="620" y1="40"  x2="760" y2="90"/>
          <line x1="760" y1="90"  x2="900" y2="50"/>
          <line x1="900" y1="50"  x2="1040" y2="80"/>
          <line x1="1040" y1="80" x2="1160" y2="40"/>
          <line x1="200" y1="60"  x2="260" y2="120"/>
          <line x1="480" y1="80"  x2="520" y2="140"/>
          <line x1="760" y1="90"  x2="800" y2="145"/>
          <line x1="340" y1="30"  x2="380" y2="110"/>
          <line x1="620" y1="40"  x2="660" y2="130"/>
          <line x1="900" y1="50"  x2="940" y2="140"/>
        </g>
        <g fill="white">
          <circle cx="80"   cy="20"  r="1.5" opacity="0.25"/>
          <circle cx="340"  cy="30"  r="1.8" opacity="0.28"/>
          <circle cx="620"  cy="40"  r="1.5" opacity="0.25"/>
          <circle cx="900"  cy="50"  r="1.8" opacity="0.28"/>
          <circle cx="1160" cy="40"  r="1.5" opacity="0.22"/>
          <circle cx="260"  cy="120" r="1.2" opacity="0.2"/>
          <circle cx="520"  cy="140" r="1.2" opacity="0.2"/>
          <circle cx="800"  cy="145" r="1.2" opacity="0.18"/>
        </g>
        <g fill="#ef5023">
          <circle cx="200"  cy="60" r="2.5" opacity="0.55"/>
          <circle cx="480"  cy="80" r="2"   opacity="0.5"/>
          <circle cx="760"  cy="90" r="2.5" opacity="0.5"/>
          <circle cx="1040" cy="80" r="2"   opacity="0.45"/>
        </g>
        <g fill="none" stroke="#ef5023">
          <circle cx="200" cy="60" r="6" strokeWidth="0.6" opacity="0.18"/>
          <circle cx="480" cy="80" r="6" strokeWidth="0.6" opacity="0.15"/>
          <circle cx="760" cy="90" r="6" strokeWidth="0.6" opacity="0.18"/>
        </g>
      </svg>

      <div className="relative max-w-[1200px] mx-auto" style={{ zIndex: 1 }}>
        <div
          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px] sm:gap-[48px] px-[24px] sm:px-[56px] py-[36px] sm:py-[44px] rounded-[20px] overflow-hidden"
          style={{
            background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
            border: "1px solid rgba(239,80,35,0.18)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute pointer-events-none blur-[80px]"
            style={{
              left: "-60px", top: "50%", transform: "translateY(-50%)",
              width: "240px", height: "240px",
              background: "rgba(239,80,35,0.12)",
              borderRadius: "50%",
            }}
          />

          <div className="relative flex flex-col gap-[8px] min-w-0" style={{ zIndex: 2 }}>
            <h2 className="font-black text-white text-[28px] leading-[36px] tracking-[-0.6px]">
              {heading ?? `Ready to get started with ${serviceName}?`}
            </h2>
            <p className="text-[14px] text-[#888] leading-[1.6]">
              {subtitle ?? "Tell us about your project - no pitch, no obligation."}
            </p>
          </div>

          <Link
            href="/contact"
            className="relative shrink-0 z-10 inline-flex items-center gap-[10px] px-[28px] h-[48px] rounded-[12px] font-bold text-[14px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef5023] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
            style={{
              background: "#ef5023",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
              whiteSpace: "nowrap",
            }}
          >
            <span>{ctaLabel ?? "Talk to a Solutions Consultant"}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}