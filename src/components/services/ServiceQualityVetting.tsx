"use client";

interface VettingStage {
  stage: string;
  description: string;
}

interface QualityMetric {
  value: string;
  label: string;
}

interface Props {
  stages: VettingStage[];
  metrics: QualityMetric[];
}

export default function ServiceQualityVetting({ stages, metrics }: Props) {
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>
      {/* pattern top-left corner */}
      <div className="absolute pointer-events-none" style={{
        top: 0, left: 0, width: "35%", height: "45%",
        backgroundImage: "url('/Media/Pattern/p1.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "320px",
        opacity: 0.07,
        maskImage: "radial-gradient(ellipse at 0% 0%, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at 0% 0%, black 30%, transparent 75%)",
      }} />
      {/* pattern bottom-left corner */}
      <div className="absolute pointer-events-none" style={{
        bottom: 0, left: 0, width: "35%", height: "45%",
        backgroundImage: "url('/Media/Pattern/p1.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "320px",
        opacity: 0.07,
        maskImage: "radial-gradient(ellipse at 0% 100%, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at 0% 100%, black 30%, transparent 75%)",
      }} />
      {/* pattern right side */}
      <div className="absolute pointer-events-none" style={{
        top: 0, right: 0, width: "40%", height: "100%",
        backgroundImage: "url('/Media/Pattern/p1.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "320px",
        opacity: 0.07,
        maskImage: "radial-gradient(ellipse at 100% 50%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 100% 50%, black 30%, transparent 70%)",
      }} />
      <div className="relative max-w-[1320px] mx-auto">

        {/* header */}
        <div className="flex flex-col gap-[10px] mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#ef5023]">HIRING PROCESS</p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Our Engineer Evaluation Process
          </h2>
          <p className="text-[#888] text-[15px] leading-[1.75] max-w-[520px]">
            Every engineer on your project passes 4 rigorous stages before we let them near client work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-[24px] items-stretch">

          {/* LEFT: vetting stages as checklist */}
          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #222 0%, #161616 60%, #111 100%)",
              border: "1px solid #333",
              boxShadow: "0 12px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* top accent bar */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #ef5023, #ff8a65, transparent)", borderRadius: "20px 20px 0 0" }} />
            {/* orange glow top-left */}
            <div className="absolute pointer-events-none" style={{
              top: "-60px", left: "-60px", width: "300px", height: "300px",
              background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 70%)",
            }} />
            {stages.map((item, i) => (
              <div
                key={item.stage}
                className="group flex items-start gap-[16px] px-[24px] pt-[28px] pb-[20px] transition-colors duration-150 hover:bg-[#1a1a1a]"
                style={{ borderBottom: i < stages.length - 1 ? "1px solid #1f1f1f" : "none" }}
              >
                {/* checkmark */}
                <svg className="shrink-0 mt-[3px]" width="16" height="16" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* content */}
                <div className="flex flex-col gap-[3px]">
                  <div className="flex items-center gap-[10px]">
                    <h4 className="font-bold text-white text-[14px] leading-[1.4]">{item.stage}</h4>
                    <span
                      className="text-[10px] font-bold px-[7px] py-[2px] rounded-full"
                      style={{ background: "rgba(239,80,35,0.12)", color: "#ef5023" }}
                    >
                      Stage {i + 1}
                    </span>
                  </div>
                  <p className="text-[#aaa] text-[13px] leading-[1.6] mt-[2px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: metrics */}
          <div className="flex flex-col gap-[12px]">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="relative flex flex-col gap-[4px] rounded-[16px] px-[22px] py-[20px] cursor-default overflow-hidden"
                style={{
                  background: i === 0
                    ? "linear-gradient(135deg, rgba(239,80,35,0.18) 0%, rgba(239,80,35,0.08) 100%)"
                    : "rgba(255,255,255,0.06)",
                  border: i === 0 ? "1px solid rgba(239,80,35,0.4)" : "1px solid rgba(255,255,255,0.15)",
                  boxShadow: i === 0
                    ? "0 8px 28px rgba(239,80,35,0.2), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 4px 16px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(8px)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateX(6px)";
                  el.style.background = i === 0
                    ? "linear-gradient(135deg, rgba(239,80,35,0.25) 0%, rgba(239,80,35,0.12) 100%)"
                    : "rgba(255,255,255,0.11)";
                  el.style.boxShadow = i === 0
                    ? "0 16px 40px rgba(239,80,35,0.3), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "0 8px 32px rgba(255,255,255,0.10)";
                  el.style.border = i === 0 ? "1px solid rgba(239,80,35,0.6)" : "1px solid rgba(255,255,255,0.28)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateX(0)";
                  el.style.background = i === 0
                    ? "linear-gradient(135deg, rgba(239,80,35,0.18) 0%, rgba(239,80,35,0.08) 100%)"
                    : "rgba(255,255,255,0.06)";
                  el.style.boxShadow = i === 0
                    ? "0 8px 28px rgba(239,80,35,0.2), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 4px 16px rgba(0,0,0,0.3)";
                  el.style.border = i === 0 ? "1px solid rgba(239,80,35,0.4)" : "1px solid rgba(255,255,255,0.15)";
                }}
              >
                {/* left accent bar */}
                <div className="absolute left-0 top-[12px] bottom-[12px] w-[3px] rounded-r-full"
                  style={{ background: i === 0 ? "#ef5023" : "rgba(255,255,255,0.2)" }} />
                <span
                  className="font-black text-[32px] leading-none tracking-[-1px]"
                  style={{ color: "#ef5023" }}
                >
                  {m.value}
                </span>
                <span
                  className="text-[12px] leading-[1.5]"
                  style={{ color: "#fff" }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}