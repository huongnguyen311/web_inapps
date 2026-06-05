import Link from "next/link";

const TESTIMONIALS = [
  {
    quote: "InApps became a true extension of our engineering team. Their developers don't just write code, they understand the product and the business behind it.",
    name: "Sarah Jenkins",
    role: "CTO, Fintech Global",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=72&h=72&fit=crop&crop=face&auto=format",
  },
  {
    quote: "The communication was seamless. Despite the time difference, it never felt like we were working with a remote team. We would recommend InApps to any company looking to scale.",
    name: "David Chen",
    role: "Product VP, SaaS Pro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=face&auto=format",
  },
  {
    quote: "The quality of code consistently exceeded our expectations. They follow engineering best practices rigorously, and their QA process is thorough. Genuinely top-tier talent.",
    name: "Michael Scott",
    role: "Founder, Paperless Inc",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=72&h=72&fit=crop&crop=face&auto=format",
  },
];

export default function ServiceTestimonialsStatic() {
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#080808" }}>

      {/* subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        zIndex: 0,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #080808 100%)", zIndex: 1 }} />

      <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]" style={{ zIndex: 10 }}>

        {/* header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[14px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">TESTIMONIALS</p>
            <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
              What Our <span className="text-[#ef5023]">Partners Say</span>
            </h2>
          </div>
          <Link
            href="/case-study"
            className="text-[#666] text-[12px] font-semibold hover:text-white transition-colors inline-flex items-center gap-[6px] flex-shrink-0"
            style={{ textDecoration: "none" }}
          >
            View all <span className="text-[#ef5023]">→</span>
          </Link>
        </div>

        {/* static grid */}
        <div className="grid grid-cols-3 gap-[16px]">
          {TESTIMONIALS.map(({ quote, name, role, avatar }) => (
            <div
              key={`${name}-${role}`}
              className="relative rounded-[16px] p-[20px] flex flex-col gap-[10px] overflow-hidden"
              style={{
                background: "#0f0d0c",
                border: "1px solid rgba(239,80,35,0.18)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,120,50,0.10)",
              }}
            >
              <div className="absolute pointer-events-none" style={{ left: "-10px", top: "-10px", width: "80px", height: "80px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 70%)" }} />
              <div className="font-black leading-[0.8] select-none text-[36px]" style={{ color: "rgba(239,80,35,0.18)" }}>&ldquo;</div>
              <div className="text-[#ef5023] text-[11px]" style={{ letterSpacing: "2px" }}>★★★★★</div>
              <p className="text-white text-[13px] leading-[1.75] italic flex-1">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-[10px] pt-[10px] mt-auto" style={{ borderTop: "1px solid rgba(239,80,35,0.10)" }}>
                <img src={avatar} alt={name} className="w-[36px] h-[36px] rounded-full object-cover flex-shrink-0" />
                <div>
                  <div className="font-bold text-white text-[13px]">{name}</div>
                  <div className="text-[11px]" style={{ color: "rgba(239,120,70,0.75)" }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}