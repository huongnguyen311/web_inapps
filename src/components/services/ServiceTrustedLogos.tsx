import { clientLogos } from "@/data/clients";

export default function ServiceTrustedLogos() {
  return (
    <section className="pt-[48px] pb-[24px] overflow-hidden border-b border-[#e0e0e0]" style={{ background: "#f5f5f5" }}>
      <style>{`
        @keyframes sl-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sl-animate-marquee { animation: sl-marquee 70s linear infinite; }
      `}</style>
      <div className="max-w-[1320px] mx-auto px-[16px] md:px-[40px] flex flex-col gap-[24px]">

        {/* heading */}
        <div className="flex flex-col items-center gap-[6px]">
          <p className="text-center text-[#0a0a0a] text-[15px] font-semibold">
            Trusted by engineering teams across{" "}
            <span className="text-[#ef5023] font-bold">15+ countries</span>
          </p>
          <p className="text-[#aaa] text-[12px]">From startups to Fortune 500 companies</p>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none" />
          <div className="flex items-center gap-[72px] sl-animate-marquee whitespace-nowrap w-max py-[8px]">
            {[...clientLogos, ...clientLogos].map(({ name, src }, i) => (
              <img
                key={i}
                src={src}
                alt={name}
                className="h-[46px] w-auto object-contain transition-opacity duration-300"
                style={{ opacity: 1, filter: "grayscale(20%) contrast(1.1)" }}
              />
            ))}
          </div>
        </div>

        {/* review trust bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-[4px] pb-[8px]" style={{ borderTop: "1px solid #f0f0f0" }}>
          {/* Clutch */}
          <div className="flex items-center gap-[8px] px-[28px] py-[12px]">
            <div className="flex items-center gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.375l-3.09 1.634.59-3.44L2 5.132l3.455-.502L7 1.5z" fill="#ef5023"/>
                </svg>
              ))}
            </div>
            <span className="text-[#0a0a0a] text-[13px] font-semibold">Clutch <strong>4.9/5</strong> · 50+ reviews</span>
          </div>

          {/* divider */}
          <div className="hidden sm:block w-[1px] h-[20px] flex-shrink-0" style={{ background: "#e0e0e0" }} />

          {/* GoodFirms */}
          <div className="flex items-center gap-[7px] px-[28px] py-[12px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#34a853" strokeWidth="1.5"/>
              <path d="M5 8l2 2 4-4" stroke="#34a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#0a0a0a] text-[13px] font-semibold">GoodFirms Top Company</span>
          </div>

          {/* divider */}
          <div className="hidden sm:block w-[1px] h-[20px] flex-shrink-0" style={{ background: "#e0e0e0" }} />

          {/* ISO 27001 */}
          <div className="flex items-center gap-[7px] px-[28px] py-[12px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5L2 4v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1.5z" stroke="#4285f4" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M5.5 8l2 2 3-3" stroke="#4285f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#0a0a0a] text-[13px] font-semibold">ISO 27001 Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}