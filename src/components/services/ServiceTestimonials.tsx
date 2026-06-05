import Link from "next/link";
import { Testimonial } from "@/data/services";

interface Props {
  items: Testimonial[];
}

export default function ServiceTestimonials({ items }: Props) {
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to right, #ef5023 0%, #0a0a0a 60%)",
        opacity: 0.4,
      }} />

      <div className="relative max-w-[1200px] mx-auto">

        {/* header */}
        <div className="flex items-end justify-between mb-[40px]">
          <div className="flex flex-col gap-[14px]">
            <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">TESTIMONIALS</p>
            <h2 className="font-black text-white text-[38px] leading-[46px] tracking-[-1.5px]">
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

        <div className={`grid gap-[16px] ${items.length === 1 ? "grid-cols-1 max-w-[600px]" : "grid-cols-2"}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-[16px] p-[28px] flex flex-col gap-[10px] overflow-hidden"
              style={{ background: "#111", border: "1px solid #1f1f1f" }}
            >
              {/* decorative rings */}
              <div className="absolute pointer-events-none" style={{ right: "-20px", top: "-20px", width: "100px", height: "100px", borderRadius: "50%", border: "1px solid rgba(239,80,35,0.10)" }} />
              <div className="absolute pointer-events-none" style={{ right: "4px", top: "4px", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(239,80,35,0.05)" }} />

              {/* quote mark */}
              <div className="font-black leading-[0.8] select-none relative" style={{ fontSize: "36px", color: "rgba(239,80,35,0.18)" }}>&ldquo;</div>

              {/* stars */}
              <div className="text-[#ef5023] text-[11px]" style={{ letterSpacing: "2px" }}>★★★★★</div>

              <p className="text-white text-[13px] leading-[1.75] italic flex-1 relative">&ldquo;{item.quote}&rdquo;</p>

              <div className="relative flex items-center gap-[12px] pt-[16px] mt-auto" style={{ borderTop: "1px solid #1a1a1a" }}>
                {item.avatar ? (
                  <img src={item.avatar} alt={item.author} className="w-[36px] h-[36px] rounded-full object-cover flex-shrink-0" />
                ) : (
                  <div
                    className="w-[36px] h-[36px] rounded-full flex items-center justify-center font-bold text-[14px] flex-shrink-0"
                    style={{ background: "rgba(239,80,35,0.1)", color: "#ef5023" }}
                  >
                    {item.author[0] ?? "?"}
                  </div>
                )}
                <div>
                  <div className="font-bold text-white text-[13px]">{item.author}</div>
                  <div className="text-[#555] text-[11px]">{item.role}, {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}