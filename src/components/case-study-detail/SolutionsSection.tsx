// src/components/case-study-detail/SolutionsSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "solutions">;

const icons = [
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
];

export default function SolutionsSection({ solutions }: Props) {
  return (
    <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fafafa" }}>

      {/* Abstract background */}
      <div className="absolute pointer-events-none" style={{
        width: "560px", height: "560px",
        top: "-200px", right: "-160px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,73,41,0.08) 0%, transparent 70%)",
        zIndex: 0,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        zIndex: 0,
      }} />

      <div className="max-w-[1320px] mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[64px] items-stretch">

          {/* Col 1: header + image that fills remaining height */}
          <div className="flex flex-col gap-[28px]">
            <div>
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[10px]" style={{ color: "#ef5023" }}>
                How We Solved It
              </p>
              <h2 className="font-black text-[#0a0a0a] text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-1.5px] mb-[14px]">
                Our Solutions
              </h2>
              <p className="text-[14px] leading-[1.8]" style={{ color: "#888" }}>
                NovaPay's challenges demanded more than quick fixes. We designed six interconnected solutions, each one addressing a specific pain point while contributing to a unified, future-proof platform. From infrastructure to mobile to AI, every layer was rebuilt with scale, security, and speed in mind.
              </p>
            </div>

            {/* Image with decorative surround */}
            <div className="relative h-[260px] md:h-[360px]" style={{ marginRight: "20px" }}>

              {/* Border frame — offset bottom-right */}
              <div className="absolute rounded-[16px]" style={{
                top: "12px", left: "12px", right: "-12px", bottom: "-12px",
                border: "1px solid rgba(255,73,41,0.2)",
                zIndex: 0,
              }} />

              {/* Orange tinted fill — layered behind */}
              <div className="absolute rounded-[16px]" style={{
                top: "6px", left: "6px", right: "-6px", bottom: "-6px",
                background: "rgba(255,73,41,0.05)",
                zIndex: 0,
              }} />

              {/* Main image — full area */}
              <div
                className="absolute inset-0 rounded-[16px] overflow-hidden"
                style={{
                  boxShadow: "0 20px 56px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)",
                  zIndex: 1,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                  alt="Engineering solutions"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 35%" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 55%)" }} />
              </div>

            </div>
          </div>

          {/* Col 2: solution rows — first item inline with description */}
          <div className="pt-0 lg:pt-[79px]">
            {/* First solution sits at top, no top border */}
            {solutions.slice(0, 1).map((s, i) => (
              <div
                key={s.title}
                className="grid gap-[16px] pb-[24px]"
                style={{ gridTemplateColumns: "36px 1fr", borderBottom: "1px solid #e0e0e0" }}
              >
                <span
                  className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,73,41,0.08)", color: "#FF4929" }}
                >
                  {icons[0]}
                </span>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-bold text-[#0a0a0a] text-[15px] leading-[1.35]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.75]" style={{ color: "#777" }}>{s.description}</p>
                </div>
              </div>
            ))}
            {solutions.slice(1).map((s, i) => (
              <div
                key={s.title}
                className="grid gap-[16px] py-[24px]"
                style={{ gridTemplateColumns: "36px 1fr", borderBottom: "1px solid #e0e0e0" }}
              >
                <span
                  className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,73,41,0.08)", color: "#FF4929" }}
                >
                  {icons[(i + 1) % icons.length]}
                </span>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-bold text-[#0a0a0a] text-[15px] leading-[1.35]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.75]" style={{ color: "#777" }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}