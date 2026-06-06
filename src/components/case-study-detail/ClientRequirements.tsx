// src/components/case-study-detail/ClientRequirements.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "requirementGroups">;

export default function ClientRequirements({ requirementGroups }: Props) {
  return (
    <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#ffffff" }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          zIndex: 0,
        }}
      />
      {/* Orange glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          right: "-150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />
      {/* Subtle warm glow — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-150px",
          left: "-100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,80,35,0.04) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 1 }}>
        <div className="mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#ef5023" }}>
            What They Needed
          </p>
          <h2 className="font-black text-[#0a0a0a] text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-1.5px] mb-[16px]">
            Client Requirements
          </h2>
          <p className="text-[15px] leading-[1.7]" style={{ color: "#666", maxWidth: "640px" }}>
            NovaPay came to InApps with a clear vision and a tight timeline. Across four key areas, their requirements shaped every architectural and product decision we made.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[0px] gap-y-[0px]" style={{ border: "1px solid #e8e8e8", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" }}>
          {requirementGroups.flatMap((group) =>
            group.items.map((item, i) => ({ item, group, i }))
          ).map(({ item, group, i }, idx) => (
            <div
              key={`${group.title}-${i}`}
              className={`flex items-start gap-[14px] px-[20px] py-[14px] ${idx % 2 === 0 ? "sm:border-r sm:border-r-[#ebebeb]" : ""}`}
              style={{
                background: Math.floor(idx / 2) % 2 === 0 ? "#f7f7f8" : "#ffffff",
                borderBottom: "1px solid #ebebeb",
              }}
            >
              <span
                className="mt-[2px] w-[20px] h-[20px] rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black"
                style={{ background: "rgba(255,73,41,0.10)", color: "#FF4929", border: "1px solid rgba(255,73,41,0.2)" }}
              >
                ✓
              </span>
              <span className="text-[15px] leading-[1.6]" style={{ color: "#333" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}