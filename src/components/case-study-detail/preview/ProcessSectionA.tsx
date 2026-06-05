// Option A: Dark hero + grid role cards
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "teamStructure" | "teamImage">;

export default function ProcessSectionA({ teamStructure }: Props) {
  const totalHeadcount = teamStructure.reduce((sum, m) => sum + m.count, 0);

  return (
    <section
      className="relative px-4 sm:px-[60px] py-[72px] overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* Glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          top: -200, right: -150,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,73,41,0.15) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />
      {/* Glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400, height: 400,
          bottom: -150, left: -100,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,73,41,0.08) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
        {/* Top: heading + stats */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[24px] mb-[48px]">
          <div>
            <p
              className="text-[11px] font-bold tracking-[2px] uppercase mb-[10px]"
              style={{ color: "#FF4929" }}
            >
              Delivery Approach
            </p>
            <h2
              className="font-black text-[36px] leading-[44px] tracking-[-1.5px] mb-[14px]"
              style={{ color: "#ffffff" }}
            >
              The Experts Behind It
            </h2>
            <p className="text-[14px] leading-[1.8] max-w-[520px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Every successful delivery starts with the right people. InApps assembled a dedicated, cross-functional team structured for speed, accountability, and long-term partnership.
            </p>
          </div>
          {/* Stats */}
          <div className="flex gap-[40px] flex-shrink-0">
            <div className="text-center">
              <div className="font-black leading-none mb-[6px]" style={{ fontSize: 48, color: "#FF4929" }}>
                {totalHeadcount}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Members
              </div>
            </div>
            <div className="text-center">
              <div className="font-black leading-none mb-[6px]" style={{ fontSize: 48, color: "#FF4929" }}>
                {teamStructure.length}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Roles
              </div>
            </div>
          </div>
        </div>

        {/* Role grid cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[12px]">
          {teamStructure.map((member, i) => (
            <div
              key={i}
              className="rounded-[12px] p-[20px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="font-black text-[20px] leading-none mb-[10px]"
                style={{ color: "#FF4929" }}
              >
                ×{member.count}
              </div>
              <div className="font-bold text-[14px] leading-[1.3] mb-[8px]" style={{ color: "#ffffff" }}>
                {member.role}
              </div>
              <div className="text-[12px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.35)" }}>
                {member.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}