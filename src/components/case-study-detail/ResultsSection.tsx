// src/components/case-study-detail/ResultsSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "metrics" | "successStory" | "keyOutcomes">;

export default function ResultsSection({ metrics, successStory, keyOutcomes }: Props) {
  const displayOutcomes = keyOutcomes.slice(0, 4);

  return (
    <section className="relative px-[40px] py-[70px]">
      <div className="max-w-[1320px] mx-auto relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[8px]" style={{ color: "#ef5023" }}>
            Measurable Impact
          </p>
          <h2 className="font-black text-white text-[32px] leading-[38px] tracking-[-1px] mb-[12px]">
            What We Delivered
          </h2>
          <div style={{ width: 40, height: 3, background: "#FF4929", borderRadius: 2 }} />
        </div>

        {/* Stat Cards — compact 36px */}
        <div
          className="grid mb-[48px]"
          style={{
            gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {metrics.map((m, i) => (
            <div key={i} style={{ background: "#111", padding: "24px 16px", textAlign: "center" }}>
              <div
                className="font-black leading-none mb-[10px]"
                style={{ fontSize: 36, color: "#FF4929", letterSpacing: "-1px" }}
              >
                {m.value}
              </div>
              <div
                className="uppercase"
                style={{ fontSize: 11, color: "#999", letterSpacing: "1px", lineHeight: 1.4 }}
                dangerouslySetInnerHTML={{ __html: m.label.replace(" ", "<br/>") }}
              />
            </div>
          ))}
        </div>

        {/* 2 col: Quote + Key Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start">

          {/* Quote */}
          <div
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "36px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="font-black mb-[16px]"
              style={{ fontSize: 56, color: "#FF4929", fontFamily: "Georgia, serif", lineHeight: 0.8, opacity: 0.5 }}
            >"</div>
            <p className="text-[14px] leading-[1.8] mb-[24px]" style={{ color: "#ccc" }}>
              {successStory}
            </p>
            <div className="flex items-center gap-[12px]">
              <div style={{ width: 28, height: 2, background: "#FF4929", borderRadius: 1 }} />
              <span className="uppercase text-[11px] tracking-[1.5px]" style={{ color: "#555" }}>
                NovaPay Financial Group
              </span>
            </div>
          </div>

          {/* Key Outcomes */}
          <div>
            <p className="uppercase text-[11px] font-bold tracking-[2px] mb-[20px]" style={{ color: "#ef5023" }}>
              Key Outcomes
            </p>
            <div className="flex flex-col gap-[14px]">
              {displayOutcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[14px]"
                  style={{
                    paddingBottom: i < displayOutcomes.length - 1 ? 14 : 0,
                    borderBottom: i < displayOutcomes.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                  }}
                >
                  <span className="flex-shrink-0 mt-[2px]" style={{ color: "#FF4929", fontSize: 14 }}>▶</span>
                  <span className="text-[13px] leading-[1.6]" style={{ color: "#bbb" }}>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
