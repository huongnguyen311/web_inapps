export default function ServiceTrustBadge({ background = "#ffffff" }: { background?: string }) {
  return (
    <section className="px-[16px] md:px-[40px] py-[32px]" style={{ background }}>
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-[14px]">

        {/* Rating card */}
        <div
          className="flex flex-col gap-[8px] rounded-[12px] px-[20px] py-[20px] items-center text-center"
          style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
        >
          <div className="flex flex-col items-center gap-[4px]">
            <span className="font-black leading-[1] text-[32px] tracking-[-1px]" style={{ color: "#ef5023" }}>4.9/5</span>
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 9.375l-3.09 1.634.59-3.44L2 5.132l3.455-.502L7 1.5z" fill="#ef5023" />
                </svg>
              ))}
            </div>
          </div>
          <span className="text-[#0a0a0a] text-[13px] font-semibold">Clutch Rating · 50+ Reviews</span>
        </div>

        {/* Remaining stats */}
        {[
          { value: "750+", label: "Projects delivered" },
          { value: "10+",  label: "Years in business" },
          { value: "85%+", label: "Multi-year retention" },
          { value: "15+",  label: "Countries served" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col gap-[8px] rounded-[12px] px-[20px] py-[20px] items-center text-center"
            style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
          >
            <span className="font-black leading-[1] text-[32px] tracking-[-1px]" style={{ color: "#ef5023" }}>
              {value}
            </span>
            <span className="text-[#0a0a0a] text-[13px] font-semibold">{label}</span>
          </div>
        ))}

      </div>
    </section>
  );
}