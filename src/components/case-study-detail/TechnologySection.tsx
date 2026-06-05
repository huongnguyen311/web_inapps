// src/components/case-study-detail/TechnologySection.tsx
import type { TechCategory } from "@/data/caseStudyDetailMock";

type Props = {
  techCategories: TechCategory[];
};

export default function TechnologySection({ techCategories }: Props) {
  const allTechs = techCategories.flatMap((cat) => cat.techs);
  const totalCategories = techCategories.length;

  return (
    <section
      className="px-[40px] py-[70px] relative overflow-hidden"
      style={{ background: "#f8f6f5" }}
    >
      {/* Watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "120px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(80px, 14vw, 160px)",
          fontWeight: 900,
          color: "rgba(255,73,41,0.05)",
          lineHeight: 1,
          letterSpacing: "-4px",
          fontFamily: "Inter, sans-serif",
          zIndex: 0,
        }}
      >
        TECH
      </div>

      <div className="max-w-[1320px] mx-auto relative" style={{ zIndex: 1 }}>

        {/* Top: heading + description stacked */}
        <div className="mb-[32px]">
          <p
            className="text-[11px] font-bold tracking-[2px] uppercase mb-[10px]"
            style={{ color: "#ef5023" }}
          >
            Built With
          </p>
          <h2
            className="font-black text-[28px] leading-[34px] tracking-[-1px] mb-[12px]"
            style={{ color: "#0f172a" }}
          >
            Technology Stack
          </h2>
          <p
            className="text-[14px] leading-[1.6] max-w-[560px]"
            style={{ color: "#64748b" }}
          >
            Leveraging high-expertise engineering and battle-tested technologies, the InApps team delivered a scalable, production-ready solution built for long-term growth.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-[32px]" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }} />

        {/* tech list — auto columns, fixed width per column */}
        <div className="grid gap-x-[80px] gap-y-[40px]" style={{ gridTemplateColumns: "repeat(auto-fill, 160px)" }}>
          {techCategories.map((cat, ci) => (
            <div
              key={ci}
              className="flex flex-col gap-[10px] items-start"
              style={{
                borderLeft: ci > 0 ? "1px solid rgba(0,0,0,0.1)" : "none",
                paddingLeft: ci > 0 ? 24 : 0,
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[2px] mb-[4px]" style={{ color: "#ef5023" }}>
                {cat.category}
              </p>
              {cat.techs.map((tech, ti) => (
                <div key={ti} className="flex items-center gap-[10px]">
                  <span className="flex-shrink-0" style={{ color: "#FF4929", fontSize: 10 }}>▶</span>
                  <span className="text-[14px] leading-[1.4]" style={{ color: "#1e293b" }}>{tech}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}