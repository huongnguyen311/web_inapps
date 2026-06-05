// Option B: Light bg + timeline with vertical line + circle badges
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "teamStructure" | "teamImage">;

export default function ProcessSectionB({ teamStructure, teamImage }: Props) {
  const totalHeadcount = teamStructure.reduce((sum, m) => sum + m.count, 0);

  return (
    <section
      className="relative px-4 sm:px-[60px] py-[72px] overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          zIndex: 0,
        }}
      />

      <div className="max-w-[1200px] mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[64px] items-start">

          {/* Left: heading + image */}
          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[10px]" style={{ color: "#FF4929" }}>
              Delivery Approach
            </p>
            <h2 className="font-black text-[36px] leading-[44px] tracking-[-1.5px] mb-[14px]" style={{ color: "#0a0a0a" }}>
              The Experts Behind It
            </h2>
            <p className="text-[14px] leading-[1.8] mb-[32px]" style={{ color: "#888" }}>
              Every successful delivery starts with the right people. InApps assembled a dedicated, cross-functional team structured for speed, accountability, and long-term partnership.
            </p>

            {/* Stats */}
            <div className="flex gap-[40px] mb-[36px]">
              <div>
                <div className="font-black leading-none mb-[4px]" style={{ fontSize: 44, color: "#FF4929" }}>{totalHeadcount}</div>
                <div className="text-[10px] font-bold uppercase tracking-[1px]" style={{ color: "#94a3b8" }}>Team Members</div>
              </div>
              <div>
                <div className="font-black leading-none mb-[4px]" style={{ fontSize: 44, color: "#FF4929" }}>{teamStructure.length}</div>
                <div className="text-[10px] font-bold uppercase tracking-[1px]" style={{ color: "#94a3b8" }}>Roles</div>
              </div>
            </div>

            {/* Image */}
            {teamImage && (
              <div className="relative" style={{ height: 280 }}>
                <div className="absolute rounded-[14px]" style={{ top: 10, left: 10, right: -10, bottom: -10, border: "1px solid rgba(255,73,41,0.2)", zIndex: 0 }} />
                <div className="absolute inset-0 rounded-[14px] overflow-hidden" style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.12)", zIndex: 1 }}>
                  <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 60%)" }} />
                </div>
              </div>
            )}
          </div>

          {/* Right: timeline */}
          <div className="relative" style={{ paddingTop: 8 }}>
            {/* Vertical line */}
            <div
              className="absolute"
              style={{
                left: 19, top: 18, bottom: 18,
                width: 2,
                background: "linear-gradient(to bottom, #FF4929 0%, rgba(255,73,41,0.08) 100%)",
              }}
            />

            <div className="flex flex-col gap-[0px]">
              {teamStructure.map((member, i) => (
                <div key={i} className="flex gap-[20px] py-[16px] items-start">
                  {/* Circle badge */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center font-black text-[13px]"
                    style={{
                      width: 40, height: 40,
                      borderRadius: "50%",
                      background: i === 0 ? "#FF4929" : "rgba(255,73,41,0.1)",
                      border: i === 0 ? "none" : "1.5px solid rgba(255,73,41,0.3)",
                      color: i === 0 ? "#fff" : "#FF4929",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    ×{member.count}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-[4px]" style={{ paddingTop: 8 }}>
                    <h3 className="font-bold text-[15px] leading-[1.3]" style={{ color: "#0a0a0a" }}>
                      {member.role}
                    </h3>
                    <p className="text-[13px] leading-[1.7]" style={{ color: "#888" }}>
                      {member.description}
                    </p>
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