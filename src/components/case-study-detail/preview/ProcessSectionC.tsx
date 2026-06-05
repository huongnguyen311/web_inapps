// Option C: Split red/white panel
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "teamStructure" | "teamImage">;

export default function ProcessSectionC({ teamStructure }: Props) {
  const totalHeadcount = teamStructure.reduce((sum, m) => sum + m.count, 0);

  return (
    <section className="relative overflow-hidden" style={{ background: "#fff" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]" style={{ minHeight: 560 }}>

          {/* Left: red panel */}
          <div
            className="relative flex flex-col justify-between px-[60px] py-[72px] overflow-hidden"
            style={{ background: "#FF4929" }}
          >
            {/* Decorative circle */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 320, height: 320,
                right: -100, bottom: -100,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.12)",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                width: 160, height: 160,
                left: -60, top: -60,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                className="text-[11px] font-bold tracking-[2px] uppercase mb-[14px]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Delivery Approach
              </p>
              <h2
                className="font-black text-[36px] leading-[44px] tracking-[-1.5px] mb-[20px]"
                style={{ color: "#ffffff" }}
              >
                The Experts Behind It
              </h2>
              <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.75)" }}>
                Every successful delivery starts with the right people. InApps assembled a dedicated team structured for speed and long-term partnership.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-[40px]" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <div className="font-black leading-none mb-[6px]" style={{ fontSize: 52, color: "#ffffff" }}>
                  {totalHeadcount}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Team Members
                </div>
              </div>
              <div>
                <div className="font-black leading-none mb-[6px]" style={{ fontSize: 52, color: "#ffffff" }}>
                  {teamStructure.length}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Roles
                </div>
              </div>
            </div>
          </div>

          {/* Right: white role list */}
          <div
            className="flex flex-col justify-center px-[60px] py-[72px]"
            style={{ background: "#ffffff" }}
          >
            <div className="flex flex-col gap-[0px]">
              {teamStructure.map((member, i) => (
                <div
                  key={i}
                  className="flex gap-[20px] py-[20px] items-start"
                  style={{
                    borderBottom: i < teamStructure.length - 1 ? "1px solid #f0f0f0" : "none",
                  }}
                >
                  {/* Square badge */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center font-black text-[14px] rounded-[10px]"
                    style={{
                      width: 44, height: 44,
                      background: "#FFF0ED",
                      color: "#FF4929",
                    }}
                  >
                    ×{member.count}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-[4px]" style={{ paddingTop: 2 }}>
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