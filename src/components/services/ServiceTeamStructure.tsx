interface TeamRole {
  title: string;
  responsibility: string;
  icon: string;
}

interface Props {
  roles: TeamRole[];
  note?: string;
}

const AVATARS: Record<string, { initials: string; bg: string; name: string }> = {
  "🧠": { initials: "TA", bg: "#1a1a2e", name: "Tuan Anh" },
  "⚙️": { initials: "MH", bg: "#ef5023", name: "Minh Hieu" },
  "🔗": { initials: "PL", bg: "#2d4a3e", name: "Phuong Linh" },
  "☁️": { initials: "DK", bg: "#2a1f3d", name: "Duc Khoa" },
  "🧪": { initials: "NQ", bg: "#3d2a1f", name: "Ngoc Quynh" },
  "📋": { initials: "VT", bg: "#1f3d2a", name: "Van Thanh" },
};

export default function ServiceTeamStructure({ roles, note }: Props) {
  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto">

        {/* header */}
        <div className="flex flex-col gap-[10px] mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#ef5023]">THE TEAM</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            Who works on your project
          </h2>
          <p className="text-[#888] text-[14px] leading-[1.75] max-w-[520px]">
            Every engagement comes with a dedicated cross-functional team, not a pool of contractors. You work with real people, not an anonymous pool.
          </p>
        </div>

        {/* photo + persona grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[20px] items-stretch">

          {/* photo */}
          <div className="relative rounded-[20px] overflow-hidden" style={{ minHeight: "400px", background: "#0a0a0a" }}>
            {/* image with color tint overlay */}
            <img
              src="/Media/Image/case 8.png"
              alt="InApps team"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.9 }}
            />
            {/* orange gradient wash */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(239,80,35,0.35) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)" }}
            />
            {/* bottom fade */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)" }}
            />

            {/* top-left accent line */}
            <div className="absolute top-0 left-0 w-[60px] h-[3px]" style={{ background: "#ef5023" }} />
            <div className="absolute top-0 left-0 w-[3px] h-[60px]" style={{ background: "#ef5023" }} />


            {/* bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-[24px]">
              <p className="text-white font-bold text-[14px] mb-[2px]">InApps Engineering Team</p>
              <p className="text-white/40 text-[11px]">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>

          {/* role list */}
          <div
            className="flex flex-col rounded-[20px] overflow-hidden h-full"
            style={{ background: "#fff", border: "1.5px solid rgba(239,80,35,0.35)", boxShadow: "0 4px 24px rgba(239,80,35,0.08)" }}
          >
            {/* top accent bar */}
            <div style={{ height: "3px", background: "linear-gradient(90deg, #ef5023, #ff8a65)", borderRadius: "20px 20px 0 0" }} />
            {roles.map((role, i) => (
              <div
                key={role.title}
                className="group flex items-center gap-[16px] px-[24px] py-[18px] transition-colors duration-150 hover:bg-[#fff5f2]"
                style={{ borderBottom: i < roles.length - 1 ? "1px solid #f5ede9" : "none" }}
              >
                {/* index */}
                <span
                  className="shrink-0 w-[28px] h-[28px] rounded-[7px] flex items-center justify-center font-black text-[11px] tracking-[0.5px]"
                  style={{ background: "rgba(239,80,35,0.10)", color: "#ef5023" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* accent bar */}
                <div className="shrink-0 w-[3px] h-[28px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ background: "#ef5023" }} />

                {/* content */}
                <div className="flex flex-col gap-[2px] flex-1">
                  <p className="font-bold text-[#0a0a0a] text-[13px] leading-[1.3] group-hover:text-[#ef5023] transition-colors duration-150">{role.title}</p>
                  <p className="text-[#555] text-[13px] leading-[1.6]">{role.responsibility}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* note   below grid */}
        {note && (
          <div
            className="flex items-start gap-[12px] mt-[16px] rounded-[12px] px-[22px] py-[16px]"
            style={{ background: "#fafafa", border: "1px solid #ececec" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10" stroke="#ef5023" strokeWidth="1.8" />
              <path d="M12 8v5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="16" r="0.8" fill="#ef5023" />
            </svg>
            <p className="text-[13px] text-[#888] leading-[1.65]">{note}</p>
          </div>
        )}

      </div>
    </section>
  );
}