"use client";

interface Props {
  checklist: string[];
  variant?: "ai";
}

const cards = [
  {
    tag: "Good fit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6 6L23 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: "#ef5023",
    title: "You need a team of 3+ engineers working full-time, exclusively on your product",
    desc: "Senior engineers dedicated to your product, not shared across clients.",
  },
  {
    tag: "Good fit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="white" strokeWidth="2.2"/>
        <path d="M5 24c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "#ef5023",
    title: "You want cost efficiency without the management headache",
    desc: "We handle HR, payroll, onboarding, and performance. You stay focused on building.",
  },
  {
    tag: "Good fit",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="17" rx="2.5" stroke="white" strokeWidth="2.2"/>
        <path d="M9 6V4M19 6V4" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M4 12h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 17h10M9 20.5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "#ef5023",
    title: "You're looking for a long-term team, not a short-term vendor",
    desc: "Our clients stay an average of 3+ years. We grow with your product.",
  },
];

export default function ServiceRightForYou({ checklist, variant }: Props) {
  const isAI = variant === "ai";
  return (
    <section className="relative px-[40px] py-[70px] overflow-hidden" style={{ background: isAI ? "#f4f4f4" : "#ffffff", borderTop: "1px solid #e8e8e8" }}>

      {/* corner blends */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 60% 80% at 100% 0%, rgba(239,80,35,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 50% 60% at 0% 100%, rgba(239,80,35,0.05) 0%, transparent 65%)
        `,
      }} />

      {/* subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, #e8e8e8 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.6,
      }} />

      {/* AI variant decor */}
      {isAI && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Concentric rings top right */}
          <svg className="absolute -top-[80px] -right-[80px] opacity-[0.2]" width="400" height="400" viewBox="0 0 400 400" fill="none">
            {[50, 100, 150, 200, 250].map((r, i) => (
              <circle key={i} cx="400" cy="0" r={r} stroke="#ef5023" strokeWidth="1.5" />
            ))}
          </svg>
          {/* Concentric rings bottom left */}
          <svg className="absolute -bottom-[60px] -left-[60px] opacity-[0.2]" width="300" height="300" viewBox="0 0 300 300" fill="none">
            {[40, 80, 120, 160].map((r, i) => (
              <circle key={i} cx="0" cy="300" r={r} stroke="#ef5023" strokeWidth="1.5" />
            ))}
          </svg>
          {/* Corner bracket top left */}
          <svg className="absolute top-[32px] left-[32px] opacity-[0.7]" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 48 L0 0 L48 0" stroke="#ef5023" strokeWidth="2.5" fill="none" />
          </svg>
          {/* Corner bracket bottom right */}
          <svg className="absolute bottom-[32px] right-[32px] opacity-[0.5]" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M48 0 L48 48 L0 48" stroke="#ef5023" strokeWidth="2.5" fill="none" />
          </svg>
          {/* Horizontal accent line center */}
          <div className="absolute left-0 right-0" style={{ top: "50%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(239,80,35,0.3), transparent)" }} />
        </div>
      )}

      <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* header */}
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">IS THIS RIGHT FOR YOU?</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            You'll benefit from this if
          </h2>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-[20px] px-[32px] pt-[36px] pb-[36px] rounded-[20px]"
              style={{ background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)", border: "1px solid #e8e8e8" }}
            >
              {/* tag badge */}
              <span
                className="text-[12px] font-semibold px-[14px] py-[5px] rounded-full"
                style={{ background: "#fff4f0", color: "#ef5023", border: "1px solid #fcd5c7" }}
              >
                {card.tag}
              </span>

              {/* icon circle */}
              <div
                className="w-[64px] h-[64px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: card.iconBg, boxShadow: `0 8px 24px ${card.iconBg}40` }}
              >
                {card.icon}
              </div>

              {/* text */}
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-bold text-[#0a0a0a] text-[16px] leading-[24px]">{card.title}</h3>
                <p className="text-[#666] text-[14px] leading-[22px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}