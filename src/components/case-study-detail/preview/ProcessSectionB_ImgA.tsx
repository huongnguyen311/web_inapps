// Image Option A: Diagonal clip + red accent bar
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";
type Props = Pick<CaseStudyDetail, "teamStructure" | "teamImage">;

export default function ProcessSectionB_ImgA({ teamStructure, teamImage }: Props) {
  const totalHeadcount = teamStructure.reduce((sum, m) => sum + m.count, 0);
  return (
    <section className="relative px-4 sm:px-[60px] py-[72px] overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[64px] items-start">
          {/* Left */}
          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[10px]" style={{ color: "#FF4929" }}>Delivery Approach</p>
            <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px] mb-[14px]" style={{ color: "#0a0a0a" }}>The Experts Behind It</h2>
            <p className="text-[14px] leading-[1.8] mb-[32px]" style={{ color: "#888" }}>
              Every successful delivery starts with the right people. InApps assembled a dedicated, cross-functional team structured for speed, accountability, and long-term partnership.
            </p>
            <div className="flex gap-[40px] mb-[40px]">
              <div>
                <div className="font-black leading-none mb-[4px]" style={{ fontSize: 44, color: "#FF4929" }}>{totalHeadcount}</div>
                <div className="text-[10px] font-bold uppercase tracking-[1px]" style={{ color: "#94a3b8" }}>Team Members</div>
              </div>
              <div>
                <div className="font-black leading-none mb-[4px]" style={{ fontSize: 44, color: "#FF4929" }}>{teamStructure.length}</div>
                <div className="text-[10px] font-bold uppercase tracking-[1px]" style={{ color: "#94a3b8" }}>Roles</div>
              </div>
            </div>

            {/* Image A: diagonal clip + left accent bar */}
            {teamImage && (
              <div className="relative" style={{ height: 280 }}>
                {/* Red accent bar left */}
                <div style={{ position: "absolute", left: -8, top: 20, bottom: 20, width: 4, background: "#FF4929", borderRadius: 2, zIndex: 2 }} />
                {/* Clipped image */}
                <div style={{
                  position: "absolute", inset: 0,
                  borderRadius: 12,
                  overflow: "hidden",
                  clipPath: "polygon(0 0, 94% 0, 100% 100%, 6% 100%)",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.15)",
                  zIndex: 1,
                }}>
                  <img src={teamImage} alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,73,41,0.15) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
                </div>
                {/* Label */}
                <div style={{ position: "absolute", bottom: 14, left: 24, zIndex: 2 }}>
                  <div style={{ background: "#FF4929", color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 12px", borderRadius: 4 }}>
                    InApps Team
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: timeline */}
          <div className="relative" style={{ paddingTop: 8 }}>
            <div className="flex flex-col">
              {teamStructure.map((member, i) => (
                <div key={i} className="flex gap-[20px] items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex items-center justify-center font-black text-[13px]" style={{ width: 40, height: 40, borderRadius: "50%", background: i === 0 ? "#FF4929" : "#ffffff", border: i === 0 ? "none" : "2px solid rgba(255,73,41,0.35)", color: i === 0 ? "#fff" : "#FF4929", boxShadow: i === 0 ? "0 4px 12px rgba(255,73,41,0.3)" : "none", zIndex: 1 }}>
                      ×{member.count}
                    </div>
                    {i < teamStructure.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 24, background: "repeating-linear-gradient(to bottom, rgba(255,73,41,0.35) 0px, rgba(255,73,41,0.35) 4px, transparent 4px, transparent 10px)" }} />
                    )}
                  </div>
                  <div className="flex flex-col gap-[4px] pb-[20px]" style={{ paddingTop: 8 }}>
                    <h3 className="font-bold text-[15px] leading-[1.3]" style={{ color: "#0a0a0a" }}>{member.role}</h3>
                    <p className="text-[13px] leading-[1.7]" style={{ color: "#888" }}>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}