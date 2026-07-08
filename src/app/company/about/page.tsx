import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import TeamSlider from "@/components/TeamSlider";


export default function CompanyAboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px]" style={{ paddingBottom: "100px" }}>
          {/* Banner background — case-study style */}
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 18.png"
              alt=""
              className="absolute right-0 top-0 h-full"
              style={{ width: "65%", objectFit: "cover", objectPosition: "right center" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0d0d0d 55%, rgba(13,13,13,0.85) 75%, transparent 100%)" }}
            />
            <div className="absolute inset-0 block md:hidden" style={{ background: "rgba(13,13,13,0.35)" }} />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
          <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">
            {/* Heading */}
            <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
              Ship Faster. <span className="text-[#ef5023]">Scale Smarter.</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#ffffff] text-[20px] leading-[32px]">
              With an engineering team that thinks like a partner.
            </p>
            <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
              InApps builds dedicated offshore engineering teams for growing companies — so you can move faster without sacrificing quality or ownership.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-[12px] pt-[4px]">
              <a
                href="/contact"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Talk to Us →
              </a>
              <a
                href="/case-study"
                className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                style={{ textDecoration: "none" }}
              >
                See Our Work
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />

        {/* ── S3: Our Story ── */}
        <section className="px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#fff" }}>
          <div className="max-w-[1320px] mx-auto py-[70px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">

            {/* Left: padded image card with effects */}
            <div className="flex flex-col justify-between gap-[28px]" style={{ background: "#fff" }}>

              {/* Image card — with ribbon deco + glow border */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "20px",
                  height: "440px",
                  boxShadow: "0 0 0 1px rgba(239,80,35,0.2), 0 20px 60px rgba(239,80,35,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {/* Ribbon */}
                <div
                  className="absolute z-10 text-white font-black text-[9px] tracking-[1.5px] uppercase"
                  style={{
                    top: "26px",
                    left: "-28px",
                    width: "120px",
                    textAlign: "center",
                    background: "#ef5023",
                    padding: "5px 0",
                    transform: "rotate(-35deg)",
                  }}
                >
                  Since 2016
                </div>
                <img
                  src="/Media/Image/case 18.png"
                  alt="InApps team"
                  className="w-full h-full object-cover"
                  style={{
                    transform: "scale(1.04)",
                    transition: "transform 6s ease",
                    filter: "saturate(0.9) contrast(1.05)",
                  }}
                />
                {/* Color tint overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(239,80,35,0.08) 0%, transparent 60%)" }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{ height: "80px", background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }}
                />
              </div>

            </div>

            {/* Right: text panel */}
            <div className="flex flex-col justify-between gap-[40px]" style={{ background: "#fff" }}>

              {/* Heading */}
              <div className="flex flex-col gap-[10px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>OUR STORY</p>
                <h2
                  className="font-black"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1.1", letterSpacing: "-1.5px", color: "#0a0a0a" }}
                >
                  Why InApps <span style={{ color: "#ef5023" }}>Was Built</span>
                </h2>
              </div>

              {/* Paragraph */}
              <div className="flex flex-col gap-[20px]">
                <p className="leading-[1.9]" style={{ fontSize: "16px", color: "#444" }}>
                  Before founding InApps, our founders spent years working with offshore software teams and noticed the same problem repeatedly. Projects were delivered, requirements were met, but many products failed to create real business value.
                </p>
                <p className="leading-[1.9]" style={{ fontSize: "16px", color: "#444" }}>
                  The issue was not talent — it was a lack of ownership. Engineers were often measured by tasks completed rather than outcomes achieved.
                </p>
                <p className="leading-[1.9]" style={{ fontSize: "16px", color: "#444" }}>
                  InApps was built on a different belief: great software comes from teams that think beyond execution, ask the right questions, and take responsibility for the product&apos;s success. Today, we aim to be a trusted technology partner genuinely invested in our clients&apos; long-term growth.
                </p>
              </div>


            </div>
          </div>
          </div>
        </section>

        {/* ── CEO ── */}
        <section className="px-[16px] md:px-[40px]" style={{ background: "#0a0a0a", borderTop: "1px solid #222", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100'%3E%3Cpath d='M0 90 L20 75 L40 80 L60 55 L80 60 L100 35 L120 40 L140 20 L160 10' fill='none' stroke='%23181818' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M0 100 L20 88 L40 92 L60 70 L80 74 L100 52 L120 56 L140 38 L160 28' fill='none' stroke='%23141414' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundSize: "160px 100px" }}>
            <div className="max-w-[1320px] mx-auto py-[70px]">
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_400px] gap-[1px] items-center">

                {/* Left: text */}
                <div className="flex flex-col gap-[28px]">
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>MEET OUR CEO</p>
                    <h2 className="font-black leading-[1.1]" style={{ fontSize: "clamp(32px, 3vw, 44px)", letterSpacing: "-1.5px", color: "#fff" }}>
                      Tam Ho
                    </h2>
                    <p className="font-semibold text-[15px]" style={{ color: "#888" }}>CEO &amp; Co-Founder, InApps</p>
                  </div>

                  <p className="text-[16px] leading-[1.9]" style={{ color: "#bbb" }}>
                    Tam Ho founded InApps in 2016 with a single conviction: offshore teams can and should work as true partners, not just vendors. With over a decade of experience across Southeast Asia, the UK, and North America, he has grown InApps from a Ho Chi Minh City startup into a globally recognized engineering partner trusted by 300+ businesses.
                  </p>

                  {/* Pull quote */}
                  <div className="flex flex-col gap-[12px]" style={{ borderLeft: "3px solid #ef5023", paddingLeft: "20px" }}>
                    <p className="italic leading-[1.6]" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "18px", color: "#fff" }}>
                      &ldquo;Offshore does not mean out of sight. We are here to build{" "}
                      <span style={{ color: "#ef5023" }}>with you</span>, not just for you.&rdquo;
                    </p>
                    <p className="text-[13px] font-semibold" style={{ color: "#666" }}>Tam Ho, CEO &amp; Co-Founder</p>
                  </div>
                </div>

                {/* Right: photo */}
                <div className="relative flex justify-center lg:justify-end">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "380px",
                      height: "460px",
                      boxShadow: "0 24px 80px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <style>{`
                      .ceo-img {
                        transform: scale(1.03);
                        filter: brightness(0.85) saturate(0.9);
                        transition: transform 0.6s ease, filter 0.6s ease;
                      }
                      .ceo-img:hover {
                        transform: scale(1.09);
                        filter: brightness(1.05) saturate(1.1);
                      }
                    `}</style>
                    <img
                      src="/Media/Image/CEO-Tam-Ho.jpg"
                      alt="Tam Ho – CEO & Co-Founder, InApps"
                      className="ceo-img w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(239,80,35,0.18) 0%, transparent 60%)", pointerEvents: "none", transition: "opacity 0.6s ease" }} />
                    <div className="absolute inset-x-0 bottom-0" style={{ height: "120px", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
                    <div className="absolute bottom-[24px] left-[24px] flex flex-col gap-[2px]">
                      <span className="font-black text-white text-[18px]" style={{ letterSpacing: "-0.5px" }}>Tam Ho</span>
                      <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>CEO &amp; Co-Founder</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </section>

        {/* ── Journey: 2-col timeline + image ── */}
        <section className="px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", backgroundImage: "radial-gradient(ellipse 100% 90% at 50% 50%, rgba(239,80,35,0.12) 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,200,150,0.09) 0%, transparent 65%)" }}>
            <div className="max-w-[1320px] mx-auto py-[70px]">
              <div className="grid grid-cols-1 lg:grid-cols-[62%_38%] gap-[48px] items-stretch">

                {/* Left: timeline */}
                <div
                  className="timeline-scroll relative flex flex-col rounded-[20px] p-[16px] sm:p-[40px]"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e8e8",
                    backgroundImage: `repeating-linear-gradient(0deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 28px)`,
                    boxShadow: "0 8px 40px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)",
                    maxHeight: "520px",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  <div className="absolute top-[40px] bottom-[40px] left-[81px] sm:left-[105px]" style={{ width: "1px", background: "linear-gradient(to bottom, transparent, rgba(239,80,35,0.3) 5%, rgba(239,80,35,0.3) 95%, transparent)" }} />
                  {[
                    { year: "2026", title: "Global AI Expansion", body: "Scaling AI-native engineering teams across North America, Europe, and APAC. Deepening partnerships in enterprise AI and cloud-native platforms.", isCurrent: true },
                    { year: "2025", title: "AI-Native ODC", body: "Every engineering team is AI-Native: faster delivery, smarter QA, measurable ROI." },
                    { year: "2024", title: "London HQ", body: "Launched InApps UK office in London. Top IT services leader in Vietnam and Southeast Asia." },
                    { year: "2022", title: "AI and IoT", body: "Became a catalyst for IoT and digital transformation with UK and EU partners." },
                    { year: "2020", title: "Global Footprint", body: "Presence across North America, Europe, and APAC. 100+ projects, 98% client satisfaction." },
                    { year: "2019", title: "APAC Expansion", body: "Opened Singapore office. Grew mobile expertise with Flutter and React Native." },
                    { year: "2018", title: "Recognition", body: "Expanded into E-commerce and FinTech. First Clutch Award for client satisfaction in Southeast Asia." },
                    { year: "2016", title: "Foundation", body: "Founded in Ho Chi Minh City by CEO Tam Ho. First offshore projects in EdTech and Healthcare." },
                  ].map((m, i, arr) => (
                    <div key={m.year} className="flex gap-[32px] items-start" style={{ paddingBottom: i < arr.length - 1 ? "40px" : "0" }}>
                      <div className="flex-shrink-0 relative" style={{ width: "56px", textAlign: "right", paddingTop: "2px" }}>
                        <span className="font-black" style={{ fontSize: "13px", letterSpacing: "0.5px", color: m.isCurrent ? "#ef5023" : "#aaa" }}>
                          {m.year}
                        </span>
                        <div style={{
                          position: "absolute", right: "-13px", top: "5px",
                          width: m.isCurrent ? "10px" : "7px", height: m.isCurrent ? "10px" : "7px",
                          borderRadius: "50%",
                          background: m.isCurrent ? "#ef5023" : "#fff",
                          border: m.isCurrent ? "none" : "1.5px solid #ccc",
                          boxShadow: m.isCurrent ? "0 0 0 3px rgba(239,80,35,0.15)" : "none",
                          marginTop: m.isCurrent ? "-1.5px" : "0",
                        }} />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <h4 className="font-black text-[16px] leading-[1.25]" style={{ color: m.isCurrent ? "#ef5023" : "#0a0a0a" }}>{m.title}</h4>
                        <p className="text-[13px] leading-[1.75]" style={{ color: "#888" }}>{m.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: stats panel */}
                <div className="relative flex flex-col gap-[0px] rounded-[20px] overflow-hidden self-start lg:sticky top-[24px]" style={{ border: "1px solid #e8e8e8", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

                  {/* Dark header */}
                  <div className="flex flex-col gap-[12px] px-[32px] py-[28px]" style={{ background: "#0a0a0a" }}>
                    <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>OUR JOURNEY</p>
                    <h3 className="font-black text-white leading-[1.1]" style={{ fontSize: "26px", letterSpacing: "-1px" }}>
                      Nine years.<br /><span style={{ color: "#ef5023" }}>One mission.</span>
                    </h3>
                  </div>

                  {/* Stats — 2×2 grid */}
                  <div className="grid grid-cols-2" style={{ background: "#f7f7f7" }}>
                    {[
                      { value: "2016", suffix: "", label: "Year Founded" },
                      { value: "750", suffix: "+", label: "Projects Shipped" },
                      { value: "500", suffix: "+", label: "Engineers Placed" },
                      { value: "15",  suffix: "+", label: "Countries Served" },
                    ].map((s, i) => (
                      <div
                        key={s.label}
                        className="flex flex-col gap-[6px] px-[16px] py-[20px] sm:px-[28px] sm:py-[28px]"
                        style={{
                          background: "#fff",
                          borderRight: i % 2 === 0 ? "1px solid #eee" : "none",
                          borderBottom: i < 2 ? "1px solid #eee" : "none",
                        }}
                      >
                        <div
                          className="font-black leading-[1]"
                          style={{ fontSize: "38px", letterSpacing: "-2px" }}
                        >
                          <span style={{
                            background: s.suffix ? "linear-gradient(135deg, #ff7340 0%, #ef5023 60%)" : "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}>{s.value}</span>
                          {s.suffix && (
                            <span style={{ color: "#ef5023", fontSize: "24px", verticalAlign: "top", marginTop: "4px", display: "inline-block" }}>{s.suffix}</span>
                          )}
                        </div>
                        <div className="text-[11px] font-semibold uppercase tracking-[1px]" style={{ color: "#999" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-[4px] w-full" style={{ background: "linear-gradient(to right, #ef5023, #ff8c6b)" }} />
                </div>

              </div>
            </div>
        </section>

        {/* ── S2: Mission & Vision ── */}
        <style>{`
          .timeline-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        <style>{`
          @keyframes mv-fadein {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes mv-glow-pulse {
            0%, 100% { opacity: 0.07; transform: translateY(-50%) scale(1); }
            50%       { opacity: 0.13; transform: translateY(-50%) scale(1.08); }
          }
          @keyframes mv-num-float {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-8px); }
          }
          @keyframes mv-icon-pop {
            0%   { transform: scale(0.7) rotate(-8deg); opacity: 0; }
            70%  { transform: scale(1.08) rotate(2deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .mv-card {
            transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
          }
          .mv-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.1) !important;
          }
          .mv-card:hover .mv-icon {
            box-shadow: 0 12px 40px rgba(239,80,35,0.45) !important;
            transform: scale(1.08);
          }
          .mv-icon {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .mv-card-mission { animation: mv-fadein 0.7s ease both; animation-delay: 0.1s; }
          .mv-card-vision  { animation: mv-fadein 0.7s ease both; animation-delay: 0.25s; }
          .mv-num { animation: mv-num-float 6s ease-in-out infinite; }
          .mv-icon-anim { animation: mv-icon-pop 0.6s cubic-bezier(.22,.68,0,1.2) both; }
          .group:hover img { transform: scale(1.05); }
          .group img { transition: transform 0.6s ease; }
          .mv-card-mission .mv-icon-anim { animation-delay: 0.3s; }
          .mv-card-vision  .mv-icon-anim { animation-delay: 0.45s; }
        `}</style>
        <section className="relative px-[16px] md:px-[40px] overflow-hidden" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>

          {/* Background mesh */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute" style={{ left: "-80px", top: "50%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 70%)", borderRadius: "50%", animation: "mv-glow-pulse 5s ease-in-out infinite" }} />
            <div className="absolute" style={{ right: "-80px", top: "50%", transform: "translateY(-50%)", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,80,35,0.04) 0%, transparent 70%)", borderRadius: "50%", animation: "mv-glow-pulse 7s ease-in-out infinite reverse" }} />
          </div>

          <div className="relative max-w-[1320px] mx-auto py-[70px]" style={{ zIndex: 1 }}>

            <div className="flex flex-col gap-[10px] mb-[48px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>WHO WE ARE</p>
              <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(32px, 3vw, 44px)", letterSpacing: "-1.5px" }}>Our Foundation</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #e8e8e8", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)", position: "relative" }}>
              <div className="absolute hidden lg:block" style={{ left: "50%", top: "10%", bottom: "10%", width: "2px", background: "linear-gradient(to bottom, transparent, #ef5023 20%, #ef5023 80%, transparent)", transform: "translateX(-50%)", zIndex: 10 }} />

              {/* ── Mission ── */}
              <div className="mv-card mv-card-mission relative flex flex-col gap-[28px] p-[36px] overflow-hidden" style={{ background: "#fff" }}>
                <div className="relative flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="mv-icon mv-icon-anim flex-shrink-0 w-[52px] h-[52px] rounded-[16px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ef5023 0%, #c73d14 100%)", boxShadow: "0 8px 32px rgba(239,80,35,0.3)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>CORE VALUES</p>
                      <h3 className="font-black leading-[1.15]" style={{ fontSize: "20px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                        Integrity That{" "}
                        <span style={{ background: "linear-gradient(90deg, #ff7340 0%, #ef5023 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Drives Action</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="relative text-[15px] leading-[1.9]" style={{ color: "#666" }}>
                  Five principles guide everything we do , from how we write code to how we treat our clients.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-[4px] sm:gap-[8px]" style={{ paddingLeft: "0", paddingRight: "0" }}>
                  {[
                    { label: "Integrity",
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 5.5V11c0 4.8 3.4 9.3 8 10.5C17.6 20.3 21 15.8 21 11V5.5L12 2z" stroke="#ef5023" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="8.5 12 11 14.5 15.5 9.5" stroke="#ef5023" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg> },
                    { label: "Expertise",
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <circle cx="10" cy="7" r="4" stroke="#ef5023" strokeWidth="1"/>
                        <path d="M2 21c0-4 3.6-7 8-7" stroke="#ef5023" strokeWidth="1" strokeLinecap="round"/>
                        <polygon points="17,11 18,14 21,14 18.5,16 19.5,19 17,17.5 14.5,19 15.5,16 13,14 16,14" stroke="#ef5023" strokeWidth="1" strokeLinejoin="round"/>
                      </svg> },
                    { label: "Quality",
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="9" r="5" stroke="#ef5023" strokeWidth="1"/>
                        <polygon points="12,6 12.9,8.2 15.3,8.2 13.4,9.6 14.1,12 12,10.6 9.9,12 10.6,9.6 8.7,8.2 11.1,8.2" stroke="#ef5023" strokeWidth="1" strokeLinejoin="round"/>
                        <path d="M8.5 13.5L7 20l5-2 5 2-1.5-6.5" stroke="#ef5023" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg> },
                    { label: "Professional",
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="8" width="20" height="13" rx="2" stroke="#ef5023" strokeWidth="1"/>
                        <path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#ef5023" strokeWidth="1"/>
                        <rect x="9" y="12" width="6" height="4" rx="1" stroke="#ef5023" strokeWidth="1"/>
                        <line x1="2" y1="14" x2="9" y2="14" stroke="#ef5023" strokeWidth="1" strokeLinecap="round"/>
                        <line x1="15" y1="14" x2="22" y2="14" stroke="#ef5023" strokeWidth="1" strokeLinecap="round"/>
                      </svg> },
                    { label: "Ownership",
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="4" r="2" stroke="#ef5023" strokeWidth="1"/>
                        <path d="M12 6v5" stroke="#ef5023" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M9 9l-2 4h10l-2-4" stroke="#ef5023" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 21l3-4h6l3 4" stroke="#ef5023" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="7" y1="21" x2="17" y2="21" stroke="#ef5023" strokeWidth="1" strokeLinecap="round"/>
                        <line x1="16" y1="4" x2="16" y2="9" stroke="#ef5023" strokeWidth="1" strokeLinecap="round"/>
                        <path d="M16 4l3 1.5-3 1.5" stroke="#ef5023" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg> },
                  ].map(({ label, icon }) => (
                    <div key={label} className="flex flex-col items-center gap-[6px] sm:gap-[10px]">
                      <div className="flex items-center justify-center w-[46px] h-[46px] sm:w-[76px] sm:h-[76px]" style={{ borderRadius: "50%", background: "rgba(239,80,35,0.07)" }}>
                        {icon}
                      </div>
                      <span className="font-bold text-[9px] sm:text-[12px]" style={{ color: "#0a0a0a", letterSpacing: "0px" }}>{label}</span>
                      <div className="flex items-center gap-[5px]">
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ef5023" }} />
                        <span style={{ width: "24px", height: "2px", background: "linear-gradient(90deg, #ef5023, rgba(239,80,35,0.2))", borderRadius: "2px" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Vision ── */}
              <div className="mv-card mv-card-vision relative flex flex-col gap-[28px] p-[36px] overflow-hidden" style={{ background: "#fff" }}>
                <div className="relative flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="mv-icon mv-icon-anim flex-shrink-0 w-[52px] h-[52px] rounded-[16px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/><path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>OUR VISION</p>
                      <h3 className="font-black leading-[1.15]" style={{ fontSize: "20px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                        The Most Trusted{" "}
                        <span style={{ background: "linear-gradient(90deg, #ff7340 0%, #ef5023 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Global Engineering Hub</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="relative text-[15px] leading-[1.9]" style={{ color: "#666" }}>
                  To be the world&apos;s most trusted global engineering hub, recognized for{" "}
                  <span style={{ color: "#0a0a0a", fontWeight: 600 }}>human-centric design</span>, technical integrity, and sustainable growth. We envision a future where technology serves humanity through{" "}
                  <span style={{ color: "#0a0a0a", fontWeight: 600 }}>seamless collaboration</span>.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── S5: Core Values ── */}
        <section className="relative overflow-hidden py-[70px] px-[16px] md:px-[40px]" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_3fr]" style={{ minHeight: "600px" }}>

              {/* Left: office photo full-height with overlay + heading */}
              <div className="relative hidden lg:block" style={{ minHeight: "600px" }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                  alt="InApps office"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "saturate(0.85)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(239,80,35,0.15) 100%)" }} />
                <div className="absolute inset-0 flex flex-col justify-end p-[52px]">
                  <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#ef5023" }}>OUR VALUES</p>
                  <h2 className="font-black text-white leading-[1.1]" style={{ fontSize: "clamp(36px, 3.5vw, 52px)", letterSpacing: "-2px" }}>
                    Our Core<br /><span style={{ color: "#ef5023" }}>Mission</span>
                  </h2>
                  <p className="mt-[16px] text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "340px" }}>
                    Realizing ideas through technology, people, and a commitment to lasting impact.
                  </p>
                </div>
              </div>

              {/* Right: value cards grid */}
              <div className="relative flex flex-col justify-center py-[70px] lg:pl-[48px]">
                <div className="absolute inset-0 pointer-events-none">
                  <img src="/Media/Pattern/p3.png" alt="" style={{ position: "absolute", bottom: "-35%", right: "-5%", width: "84%", maxWidth: "456px", opacity: 0.35, userSelect: "none" }} />
                </div>
                <div className="flex flex-col gap-[8px] mb-[40px] lg:hidden">
                  <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>OUR VALUES</p>
                  <h2 className="font-black text-white text-[36px] leading-[1.1]" style={{ letterSpacing: "-1.5px" }}>Our Core <span style={{ color: "#ef5023" }}>Mission</span></h2>
                </div>

                <div className="grid grid-cols-2 gap-[16px]">
                  {[
                    {
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#ef5023" strokeWidth="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/></svg>,
                      title: "For Customers",
                      body: "Realizing customer ideas through the revolution of mobility, systemization, automation, and our core human competencies.",
                    },
                    {
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#ef5023" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/></svg>,
                      title: "For Employees",
                      body: "Building a comprehensive development environment for each employee goes along with the company's vision toward sustainability and happiness.",
                    },
                    {
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><line x1="12" y1="1" x2="12" y2="23" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/></svg>,
                      title: "For Owners",
                      body: "Bringing effective long-term investment to shareholders through transparency and building strong relationships.",
                    },
                    {
                      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#ef5023" strokeWidth="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#ef5023" strokeWidth="2"/></svg>,
                      title: "For Society",
                      body: "Solving common problems of society through applying advanced technology in a humane way.",
                    },
                  ].map((val) => (
                    <div
                      key={val.title}
                      className="flex flex-col gap-[12px] p-[24px]"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.06) inset",
                      }}
                    >
                      <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,80,35,0.12)" }}>
                        {val.icon}
                      </div>
                      <h3 className="font-black text-white text-[16px] leading-[1.3]">{val.title}</h3>
                      <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>{val.body}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── S4: Team ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#f5f4f0" }}>

          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <svg style={{ position:"absolute", top:"8%", left:"4%", opacity:0.08 }} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <svg style={{ position:"absolute", top:"45%", left:"2%", opacity:0.07, transform:"rotate(-10deg)" }} width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="6" height="6"/><path d="M15 3h-2v2h-2V3H9v2H7V3H5v2H3v2h2v2H3v2h2v2H3v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3h-2v2z"/></svg>
            <svg style={{ position:"absolute", top:"76%", left:"3%", opacity:0.08 }} width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            <svg style={{ position:"absolute", top:"22%", left:"8%", opacity:0.07, transform:"rotate(6deg)" }} width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            <svg style={{ position:"absolute", top:"6%", right:"5%", opacity:0.08, transform:"rotate(5deg)" }} width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            <svg style={{ position:"absolute", top:"32%", right:"3%", opacity:0.07, transform:"rotate(-6deg)" }} width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            <svg style={{ position:"absolute", top:"58%", right:"2%", opacity:0.07, transform:"rotate(12deg)" }} width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <svg style={{ position:"absolute", top:"78%", right:"5%", opacity:0.08 }} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]">
            <div className="flex flex-col gap-[12px] items-start text-left">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>THE TEAM</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px]" style={{ letterSpacing: "-1.5px" }}>Leadership &amp; Team</h2>
              <p className="text-[15px] max-w-2xl leading-[1.75]" style={{ color: "#666" }}>
                Led by experienced technologists and delivery managers, our teams combine Vietnamese engineering talent with Western business culture to deliver outcomes you can measure.
              </p>
            </div>

            <style>{`
              .team-card {
                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
              }
              .team-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(239,80,35,0.08) !important;
                border-color: rgba(239,80,35,0.35) !important;
              }
              .team-card:hover .team-photo-ring {
                border-color: #ef5023 !important;
              }
              .team-card-accent {
                height: 3px;
                background: linear-gradient(90deg, #ff7340, #ef5023);
                border-radius: 0 0 20px 20px;
                transform: scaleX(0);
                transition: transform 0.3s ease;
              }
              .team-card:hover .team-card-accent {
                transform: scaleX(1);
              }
            `}</style>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] max-w-[860px] mx-auto w-full">
              {[
                {
                  img: "/Media/Image/CEO-Tam-Ho.jpg",
                  name: "Tam Hồ",
                  role: "CEO & Co-Founder",
                  bio: "Tam founded InApps in 2016 with a vision to build Vietnam's highest-quality offshore engineering company. He grew InApps from 12 to 500+ engineers.",
                  linkedin: "https://linkedin.com/in/tamho",
                },
                {
                  img: "/Media/Image/COO-Hoa-Tran.jpg",
                  name: "Hòa Trần",
                  role: "COO & Co-Founder",
                  bio: "Hòa co-founded InApps in 2016 alongside Tam. She oversees all client operations and built the ISO 27001:2022-certified delivery framework.",
                  linkedin: "https://linkedin.com/in/hoatran",
                },
                {
                  img: "/Media/Image/CTO-Vinh-Nguyen.jpg",
                  name: "Vinh Nguyễn",
                  role: "Chief Technology Officer",
                  bio: "Vinh leads InApps technical strategy and solution architecture. With 15+ years in fintech, SaaS and AI platforms, he drives engineering quality across all ODC teams.",
                  linkedin: "https://linkedin.com/in/vinhnguyen",
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="team-card flex flex-col items-center text-center gap-[16px] pt-[28px] px-[24px] pb-0 rounded-[20px] overflow-hidden"
                  style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="team-photo-ring w-[120px] h-[120px] rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: "3px solid #f0ede8", transition: "border-color 0.3s ease" }}
                  >
                    <img alt={member.name} src={member.img} className="w-full h-full object-cover object-top" />
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <h3 className="font-black text-[#0a0a0a] text-[18px] leading-[1.2]">{member.name}</h3>
                    <p className="font-bold text-[13px]" style={{ color: "#ef5023" }}>{member.role}</p>
                  </div>

                  <p className="text-[13px] leading-[1.7]" style={{ color: "#666" }}>{member.bio}</p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[6px] text-[13px] font-semibold mb-[20px]"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077b5" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#0077b5"/><path d="M8.5 10v7H6v-7h2.5zm-1.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM18 17h-2.5v-3.5c0-1-.5-1.5-1.25-1.5S13 12.5 13 13.5V17h-2.5v-7H13v1c.5-.75 1.25-1.25 2.25-1.25C17 9.75 18 11 18 13v4z" fill="#fff"/></svg>
                    LinkedIn
                  </a>

                  <div className="team-card-accent w-full" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[6px] items-center text-center">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>COMPANY CULTURE</p>
              <p className="text-[15px] leading-[1.8]" style={{ color: "#555", maxWidth: "680px" }}>
                At InApps, we foster an open, empowered workplace where responsibility, innovation, and continuous growth are at the core ,building a team that thrives together, sustainably.
              </p>
            </div>

            <TeamSlider />
          </div>
        </section>

        {/* ── S6: Final CTA ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#0d0d0d" }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
              <line x1="80"  y1="20"  x2="200" y2="60"/>
              <line x1="200" y1="60"  x2="340" y2="30"/>
              <line x1="340" y1="30"  x2="480" y2="80"/>
              <line x1="480" y1="80"  x2="620" y2="40"/>
              <line x1="620" y1="40"  x2="760" y2="90"/>
              <line x1="760" y1="90"  x2="900" y2="50"/>
              <line x1="900" y1="50"  x2="1040" y2="80"/>
              <line x1="1040" y1="80" x2="1160" y2="40"/>
              <line x1="200" y1="60"  x2="260" y2="120"/>
              <line x1="480" y1="80"  x2="520" y2="140"/>
              <line x1="760" y1="90"  x2="800" y2="145"/>
              <line x1="340" y1="30"  x2="380" y2="110"/>
              <line x1="620" y1="40"  x2="660" y2="130"/>
              <line x1="900" y1="50"  x2="940" y2="140"/>
            </g>
            <g fill="white">
              <circle cx="80"   cy="20"  r="1.5" opacity="0.25"/>
              <circle cx="340"  cy="30"  r="1.8" opacity="0.28"/>
              <circle cx="620"  cy="40"  r="1.5" opacity="0.25"/>
              <circle cx="900"  cy="50"  r="1.8" opacity="0.28"/>
              <circle cx="1160" cy="40"  r="1.5" opacity="0.22"/>
              <circle cx="260"  cy="120" r="1.2" opacity="0.2"/>
              <circle cx="520"  cy="140" r="1.2" opacity="0.2"/>
              <circle cx="800"  cy="145" r="1.2" opacity="0.18"/>
            </g>
            <g fill="#ef5023">
              <circle cx="200"  cy="60" r="2.5" opacity="0.55"/>
              <circle cx="480"  cy="80" r="2"   opacity="0.5"/>
              <circle cx="760"  cy="90" r="2.5" opacity="0.5"/>
              <circle cx="1040" cy="80" r="2"   opacity="0.45"/>
            </g>
            <g fill="none" stroke="#ef5023">
              <circle cx="200" cy="60" r="6" strokeWidth="0.6" opacity="0.18"/>
              <circle cx="480" cy="80" r="6" strokeWidth="0.6" opacity="0.15"/>
              <circle cx="760" cy="90" r="6" strokeWidth="0.6" opacity="0.18"/>
            </g>
          </svg>

          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 1 }}>
            <div
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px] sm:gap-[48px] px-[24px] sm:px-[56px] py-[36px] sm:py-[44px] rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
                border: "1px solid rgba(239,80,35,0.18)",
              }}
            >
              <div
                className="absolute pointer-events-none blur-[80px]"
                style={{
                  left: "-60px", top: "50%", transform: "translateY(-50%)",
                  width: "240px", height: "240px",
                  background: "rgba(239,80,35,0.12)",
                  borderRadius: "50%",
                }}
              />

              <div className="relative flex flex-col gap-[8px] min-w-0" style={{ zIndex: 2 }}>
                <h2 className="font-black text-white text-[28px] leading-[36px]" style={{ letterSpacing: "-0.6px" }}>
                  Ready to scale your engineering team?
                </h2>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#888" }}>
                  Let&apos;s discuss how our offshore talent can help you reach your goals faster.
                </p>
              </div>

              <a
                href="/contact"
                className="relative shrink-0 z-10 inline-flex items-center gap-[10px] px-[28px] h-[48px] rounded-[12px] font-bold text-[14px] overflow-hidden text-white"
                style={{
                  background: "#ef5023",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  whiteSpace: "nowrap",
                }}
              >
                <span>Contact Our Experts</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
