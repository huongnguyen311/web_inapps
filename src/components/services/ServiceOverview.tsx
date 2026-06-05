import { ServiceOverviewData } from "@/data/services";

interface Props {
  data: ServiceOverviewData;
  eyebrow?: string;
}

export default function ServiceOverview({ data, eyebrow }: Props) {
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>

      {/* corner blends */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 80% 90% at 0% 0%, rgba(239,80,35,0.50) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 100% 100%, rgba(239,80,35,0.22) 0%, transparent 70%),
          radial-gradient(ellipse 40% 50% at 100% 0%, rgba(100,80,200,0.14) 0%, transparent 60%),
          radial-gradient(ellipse 35% 45% at 0% 100%, rgba(100,80,200,0.10) 0%, transparent 60%)
        `,
      }} />

      <div className="relative max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1fr] gap-[40px] md:gap-[80px] items-center">
        {/* Left - image */}
        <div className="relative" style={{ aspectRatio: "4/3" }}>
          {/* orange accent border top-left */}
          <div className="absolute top-0 left-0 w-[48px] h-[3px] z-10" style={{ background: "#ef5023" }} />
          <div className="absolute top-0 left-0 w-[3px] h-[48px] z-10" style={{ background: "#ef5023" }} />
          {/* bottom-right corner */}
          <div className="absolute bottom-0 right-0 w-[48px] h-[3px] z-10" style={{ background: "rgba(239,80,35,0.4)" }} />
          <div className="absolute bottom-0 right-0 w-[3px] h-[48px] z-10" style={{ background: "rgba(239,80,35,0.4)" }} />

          {/* glow behind image */}
          <div className="absolute inset-0 z-0" style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(239,80,35,0.18) 0%, transparent 70%)",
            transform: "scale(1.1)",
          }} />

          {/* image */}
          <div className="absolute inset-[10px] rounded-[16px] overflow-hidden z-[1]" style={{
            boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
          }}>
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.92)" }} />
            {/* dark overlay bottom fade */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
            }} />
          </div>
        </div>

        {/* Right - text */}
        <div>
          {eyebrow && (
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase mb-[10px]">{eyebrow}</p>
          )}
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px] mb-[20px]">{data.title}</h2>
          <div className="text-[15px] text-[#bbb] leading-[1.75] mb-[32px]" style={{ whiteSpace: "pre-line" }}>
            {data.body}
          </div>

          {data.stats && data.stats.length > 0 && (
            <div
              className="grid pt-[24px]"
              style={{
                borderTop: "1px solid rgba(239,80,35,0.4)",
                gridTemplateColumns: `repeat(${data.stats.length}, 1fr)`,
                gap: data.stats.length >= 5 ? "12px" : "24px",
              }}
            >
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-black text-[#ef5023] leading-[1] tracking-[-1px]"
                    style={{ fontSize: (data.stats?.length ?? 0) >= 5 ? "24px" : "28px" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[#aaa] mt-[4px]"
                    style={{ fontSize: "12px" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
