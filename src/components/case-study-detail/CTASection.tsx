// src/components/case-study-detail/CTASection.tsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px]">

      <div className="relative max-w-[700px] mx-auto flex flex-col items-center text-center gap-[24px]" style={{ zIndex: 1 }}>

        <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>
          Work With Us
        </p>

        <h2 className="font-black text-white text-[40px] leading-[48px] tracking-[-1.5px]">
          Ready to build something that matters?
        </h2>

        <p className="text-[15px] leading-[1.7]" style={{ color: "#666", maxWidth: 480 }}>
          Tell us your challenge and we'll connect you with the InApps team that has solved it before.
        </p>

        <div className="flex items-center gap-[12px] pt-[8px]">
          <Link
            href="/contact"
            className="inline-flex items-center gap-[8px] px-[32px] h-[52px] rounded-[10px] font-bold text-[14px]"
            style={{
              background: "#FF4929",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(255,73,41,0.35)",
            }}
          >
            Book a Free Call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/case-study"
            className="inline-flex items-center px-[32px] h-[52px] rounded-[10px] font-bold text-[14px]"
            style={{
              background: "transparent",
              color: "#fff",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            View Portfolio
          </Link>
        </div>

        <p className="text-[11px]" style={{ color: "#444" }}>
          No commitment · Free 30-min discovery call
        </p>

      </div>
    </section>
  );
}