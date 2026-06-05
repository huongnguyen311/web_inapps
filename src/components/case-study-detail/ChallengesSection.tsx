// src/components/case-study-detail/ChallengesSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "challenges">;

export default function ChallengesSection({ challenges }: Props) {
  return (
    <section className="px-[40px] py-[70px] relative overflow-hidden" style={{ background: "#0d0d0d" }}>

      {/* Grid lines texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          zIndex: 0,
        }}
      />
      {/* Orange glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "-180px",
          right: "-100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,73,41,0.18) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />
      {/* Subtle blue-ish glow — bottom left for depth */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "360px",
          height: "360px",
          bottom: "-120px",
          left: "-80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(80,120,255,0.08) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />
      {/* Horizontal rule line accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(255,73,41,0.4) 40%, rgba(255,73,41,0.1) 100%)",
          zIndex: 0,
        }}
      />

      <div className="max-w-[1320px] mx-auto relative" style={{ zIndex: 1 }}>

        <div className="mb-[32px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[8px]" style={{ color: "#ef5023" }}>
            The Problem
          </p>
          <h2 className="font-black text-white text-[32px] leading-[40px] tracking-[-1.5px] mb-[6px]">
            Business Challenges
          </h2>
          <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.4)" }}>
            Four core obstacles that shaped every decision we made in rebuilding this platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px]" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
          {challenges.map((c) => (
            <div
              key={c.number}
              className="flex flex-col gap-[12px] px-[28px] py-[24px]"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-[10px]">
                <span
                  className="font-black text-[11px] tracking-[1px] px-[8px] py-[3px] rounded-full flex-shrink-0"
                  style={{
                    background: "rgba(255,73,41,0.12)",
                    color: "#FF4929",
                    border: "1px solid rgba(255,73,41,0.22)",
                  }}
                >
                  {c.number}
                </span>
                <h3 className="font-bold text-white text-[15px] leading-[1.3] tracking-[-0.3px]">
                  {c.title}
                </h3>
              </div>
              <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
                {c.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}