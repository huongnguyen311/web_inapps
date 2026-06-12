import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import FaqSection from "@/components/FaqSection";


export default function AboutPage() {
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
              style={{ background: "linear-gradient(to right, #0d0d0d 35%, #0d0d0d 45%, rgba(13,13,13,0.7) 60%, transparent 100%)" }}
            />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
          <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">
            {/* Heading */}
            <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
              Grow Revenue. <span className="text-[#ef5023]">Partner</span> with InApps.
            </h1>

            {/* Subtext */}
            <p className="text-[#ffffff] text-[20px] leading-[32px]">
              Co-sell, co-deliver, and earn with a proven offshore engineering team.
            </p>
            <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
              The InApps Partner Program is built for agencies, software firms, venture builders, and talent providers ready to scale their business and unlock new revenue streams.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-[12px] pt-[4px]">
              <a
                href="/contact"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Become a Partner →
              </a>
              <a
                href="#partners"
                className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                style={{ textDecoration: "none" }}
              >
                Explore the Program ↓
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Why Partner with InApps ── */}
        <style>{`
          .partner-card {
            background: #fafafa;
            border: 1px solid #ebebeb;
            transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          }
          .partner-card:hover {
            border-color: rgba(239,80,35,0.3);
            box-shadow: 0 8px 32px rgba(239,80,35,0.08);
            background: #fff;
          }
        `}</style>
        <section id="partners" className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #e8e8e8" }}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Radial glows */}
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: "40%", left: "45%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(239,80,35,0.04) 0%, transparent 70%)", borderRadius: "50%" }} />
            {/* Dot grid */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
              <defs>
                <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#ef5023" fillOpacity="0.12"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)"/>
            </svg>
            {/* Decorative ring top-right */}
            <svg style={{ position: "absolute", top: "-40px", right: "8%", opacity: 0.07 }} width="260" height="260" viewBox="0 0 260 260" fill="none">
              <circle cx="130" cy="130" r="120" stroke="#ef5023" strokeWidth="1.5" strokeDasharray="8 6"/>
              <circle cx="130" cy="130" r="80" stroke="#ef5023" strokeWidth="1" strokeDasharray="4 8"/>
            </svg>
            {/* Decorative ring bottom-left */}
            <svg style={{ position: "absolute", bottom: "-50px", left: "4%", opacity: 0.06 }} width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="#ef5023" strokeWidth="1.5" strokeDasharray="6 5"/>
            </svg>
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]">

            {/* Header */}
            <div className="flex flex-col gap-[10px] max-w-[640px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>PARTNER PROGRAM</p>
              <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(32px, 3vw, 48px)", letterSpacing: "-1.5px" }}>
                Why Partner with <span style={{ color: "#ef5023" }}>InApps</span>
              </h2>
              <p className="text-[16px] leading-[1.75]" style={{ color: "#666", marginTop: "4px" }}>
                Join a proven ecosystem that delivers quality, scale, and mutual success.
              </p>
            </div>

            {/* 6-card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {[
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#ef5023" strokeWidth="1.8"/>
                      <line x1="2" y1="12" x2="22" y2="12" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#ef5023" strokeWidth="1.8"/>
                    </svg>
                  ),
                  title: "Global Delivery",
                  desc: "Proven delivery coverage across EU, US, AU, and SG time zones — your clients stay covered.",
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4 5.5V11c0 4.8 3.4 9.3 8 10.5 4.6-1.2 8-5.7 8-10.5V5.5L12 2z" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="8.5 12 11 14.5 15.5 9.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Agile & Secure",
                  desc: "ISO-aligned processes and IP-safe engagement models protect you and your clients.",
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#ef5023" strokeWidth="1.8"/>
                      <path d="M8 21h8M12 17v4" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M7 10l2 2 4-4" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Flexible Models",
                  desc: "ODC, Project-Based, and Staff Augmentation — structure deals the way your clients need them.",
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="9" cy="7" r="4" stroke="#ef5023" strokeWidth="1.8"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Co-selling Support",
                  desc: "We join your sales calls, co-brand proposals, and handle technical scoping — so you close bigger deals.",
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <line x1="12" y1="1" x2="12" y2="23" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Clear Commercials",
                  desc: "Tiered commissions up to 20%, paid monthly — full transparency with zero hidden deductions.",
                },
                {
                  icon: (
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="#ef5023" strokeWidth="1.8"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M19 3l1.5 1.5L17 8" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Vetted Talent Pool",
                  desc: "500+ pre-screened engineers across 10+ tech stacks, ready to deploy on your next deal.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="partner-card flex flex-col gap-[16px] p-[28px] rounded-[16px]"
                >
                  <div className="flex items-center self-start flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-black text-[#0a0a0a] text-[17px] leading-[1.25]">{item.title}</h3>
                    <p className="text-[13px] leading-[1.7]" style={{ color: "#888" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Choose Your Partnership Track ── */}
        <style>{`
          .track-card {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
            will-change: transform;
          }
          .track-card:hover {
            transform: translateY(-18px) scale(1.015);
            box-shadow: 0 40px 80px rgba(0,0,0,0.14), 0 8px 24px rgba(239,80,35,0.08);
            border-color: rgba(239,80,35,0.4);
          }
          .track-card:hover .track-cta {
            background: linear-gradient(90deg, #d94418, #ef5023) !important;
          }
        `}</style>
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>

          {/* Background decoration — topographic contours */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {/* Soft glow blobs */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(59,91,219,0.07) 0%, transparent 60%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "440px", height: "440px", background: "radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 60%)", borderRadius: "50%" }} />

            {/* Topographic contour lines */}
            <svg width="100%" height="100%" viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>

              {/* IGA peak — top-left quadrant, blue contours */}
              <g fill="none" stroke="#3b5bdb" strokeLinecap="round">
                <ellipse cx="310" cy="190" rx="260" ry="140" strokeOpacity="0.06" strokeWidth="1"/>
                <ellipse cx="310" cy="190" rx="190" ry="100" strokeOpacity="0.08" strokeWidth="1"/>
                <ellipse cx="310" cy="190" rx="130" ry="68"  strokeOpacity="0.10" strokeWidth="1.2"/>
                <ellipse cx="310" cy="190" rx="80"  ry="42"  strokeOpacity="0.13" strokeWidth="1.4"/>
                <ellipse cx="310" cy="190" rx="40"  ry="22"  strokeOpacity="0.16" strokeWidth="1.6" strokeDasharray="4 6"/>
              </g>

              {/* TPN peak — bottom-right quadrant, green contours */}
              <g fill="none" stroke="#059669" strokeLinecap="round">
                <ellipse cx="1130" cy="340" rx="280" ry="150" strokeOpacity="0.06" strokeWidth="1"/>
                <ellipse cx="1130" cy="340" rx="200" ry="108" strokeOpacity="0.08" strokeWidth="1"/>
                <ellipse cx="1130" cy="340" rx="138" ry="74"  strokeOpacity="0.10" strokeWidth="1.2"/>
                <ellipse cx="1130" cy="340" rx="84"  ry="46"  strokeOpacity="0.13" strokeWidth="1.4"/>
                <ellipse cx="1130" cy="340" rx="42"  ry="24"  strokeOpacity="0.16" strokeWidth="1.6" strokeDasharray="4 6"/>
              </g>

              {/* Bridge ridge — flowing curves connecting the two peaks */}
              <g fill="none" stroke="#0a0a0a" strokeOpacity="0.055" strokeLinecap="round">
                <path d="M 0,340 C 160,280 320,160 520,200 S 840,320 1040,260 S 1280,180 1440,220" strokeWidth="1"/>
                <path d="M 0,380 C 180,310 360,200 560,240 S 860,360 1060,300 S 1300,220 1440,260" strokeWidth="1"/>
                <path d="M 0,420 C 200,360 400,240 600,280 S 880,400 1080,340 S 1320,260 1440,300" strokeWidth="1"/>
                <path d="M 0,300 C 140,240 280,120 480,160 S 800,280 1000,220 S 1260,140 1440,180" strokeWidth="0.8"/>
                <path d="M 0,460 C 220,400 440,280 640,320 S 920,440 1120,380 S 1340,300 1440,340" strokeWidth="0.8"/>
              </g>

              {/* Brand orange saddle point — centre */}
              <g fill="none" stroke="#ef5023" strokeLinecap="round">
                <ellipse cx="720" cy="260" rx="120" ry="60" strokeOpacity="0.07" strokeWidth="1"/>
                <ellipse cx="720" cy="260" rx="72"  ry="36" strokeOpacity="0.10" strokeWidth="1.2"/>
                <ellipse cx="720" cy="260" rx="36"  ry="18" strokeOpacity="0.14" strokeWidth="1.5" strokeDasharray="3 5"/>
              </g>

              {/* Summit dots */}
              <circle cx="310"  cy="190" r="4" fill="#3b5bdb" fillOpacity="0.22"/>
              <circle cx="310"  cy="190" r="8" fill="none" stroke="#3b5bdb" strokeOpacity="0.12" strokeWidth="1"/>
              <circle cx="1130" cy="340" r="4" fill="#059669" fillOpacity="0.22"/>
              <circle cx="1130" cy="340" r="8" fill="none" stroke="#059669" strokeOpacity="0.12" strokeWidth="1"/>
              <circle cx="720"  cy="260" r="5" fill="#ef5023" fillOpacity="0.25"/>
              <circle cx="720"  cy="260" r="11" fill="none" stroke="#ef5023" strokeOpacity="0.10" strokeWidth="1.2"/>
            </svg>
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]" style={{ zIndex: 1 }}>

            {/* Header */}
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>PARTNERSHIP TRACKS</p>
              <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(30px, 3vw, 46px)", letterSpacing: "-1.5px" }}>
                Choose Your <span style={{ color: "#ef5023" }}>Partnership Track</span>
              </h2>
              <p className="text-[15px] leading-[1.75]" style={{ color: "#666" }}>
                Two distinct paths to mutual success
              </p>

            </div>

            {/* Two cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">

              {/* Card 1 — IGA */}
              <div
                className="track-card flex flex-col rounded-[20px] overflow-hidden"
                style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
              >
                {/* Top gradient bar */}
                <div style={{ height: "5px", background: "linear-gradient(90deg, #3b5bdb, #7c3aed, #ef5023)" }} />

                <div className="flex flex-col gap-[20px] p-[28px]">
                  {/* Icon + title row + badge */}
                  <div className="flex items-start justify-between gap-[12px]">
                    <div className="flex items-center gap-[14px]">
                      <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #3b5bdb 0%, #7c3aed 100%)" }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C8 6 7 10 7 14h10c0-4-1-8-5-12z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 14v3a5 5 0 0 0 10 0v-3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                          <path d="M5 16l-2 2M19 16l2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h3 className="font-black text-[#0a0a0a] leading-[1.2]" style={{ fontSize: "clamp(17px, 1.5vw, 21px)", letterSpacing: "-0.5px" }}>
                          InApps Growth Alliance (IGA)
                        </h3>
                        <p className="text-[13px]" style={{ color: "#888" }}>For Partners in EU/US/AU/SG</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] font-black px-[10px] py-[4px] rounded-full whitespace-nowrap" style={{ background: "linear-gradient(90deg, #3b5bdb, #7c3aed)", color: "#fff" }}>
                      Growth Partner
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-[6px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#888" strokeWidth="1.8"/>
                      <circle cx="12" cy="9" r="2.5" stroke="#888" strokeWidth="1.8"/>
                    </svg>
                    <span className="text-[13px] font-bold tracking-[1px]" style={{ color: "#666" }}>EU US AU SG</span>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] leading-[1.75]" style={{ color: "#666" }}>
                    Co-sell and co-deliver software projects with tiered commissions up to 20% and full deal protection.
                  </p>

                  {/* CTA */}
                  <a
                    href="#iga-detail"
                    className="track-cta w-full inline-flex items-center justify-center gap-[8px] h-[48px] rounded-[10px] font-bold text-[14px] text-white mt-[4px]"
                    style={{ background: "linear-gradient(90deg, #ef5023, #ff7340)", textDecoration: "none", boxShadow: "0 4px 16px rgba(239,80,35,0.3)", transition: "box-shadow 0.3s ease" }}
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>

              {/* Card 2 — TPN */}

              <div
                className="track-card flex flex-col rounded-[20px] overflow-hidden"
                style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
              >
                {/* Top gradient bar */}
                <div style={{ height: "5px", background: "linear-gradient(90deg, #059669, #0ea5e9)" }} />

                <div className="flex flex-col gap-[20px] p-[28px]">
                  {/* Icon + title row + badge */}
                  <div className="flex items-start justify-between gap-[12px]">
                    <div className="flex items-center gap-[14px]">
                      <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)" }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="5" r="2.5" stroke="white" strokeWidth="1.8"/>
                          <circle cx="5" cy="17" r="2.5" stroke="white" strokeWidth="1.8"/>
                          <circle cx="19" cy="17" r="2.5" stroke="white" strokeWidth="1.8"/>
                          <path d="M12 7.5v4M12 11.5l-5.5 4M12 11.5l5.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <h3 className="font-black text-[#0a0a0a] leading-[1.2]" style={{ fontSize: "clamp(17px, 1.5vw, 21px)", letterSpacing: "-0.5px" }}>
                          InApps Talent Partner Network (TPN)
                        </h3>
                        <p className="text-[13px]" style={{ color: "#888" }}>For Providers in VN/PH</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] font-black px-[10px] py-[4px] rounded-full whitespace-nowrap" style={{ background: "linear-gradient(90deg, #059669, #0ea5e9)", color: "#fff" }}>
                      Talent Partner
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-[6px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#888" strokeWidth="1.8"/>
                      <circle cx="12" cy="9" r="2.5" stroke="#888" strokeWidth="1.8"/>
                    </svg>
                    <span className="text-[13px] font-bold tracking-[1px]" style={{ color: "#666" }}>VN PH</span>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] leading-[1.75]" style={{ color: "#666" }}>
                    Supply pre-vetted engineers and unlock a predictable, long-term demand pipeline for your team.
                  </p>

                  {/* CTA */}
                  <a
                    href="#tpn-detail"
                    className="track-cta w-full inline-flex items-center justify-center gap-[8px] h-[48px] rounded-[10px] font-bold text-[14px] text-white mt-[4px]"
                    style={{ background: "linear-gradient(90deg, #ef5023, #ff7340)", textDecoration: "none", boxShadow: "0 4px 16px rgba(239,80,35,0.3)", transition: "box-shadow 0.3s ease" }}
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── IGA Detail ── */}
        <section id="iga-detail" className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #e8e8e8" }}>
          {/* BG — orange geometric shards */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 62%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(255,115,64,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <svg width="100%" height="100%" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
              <polygon points="0,0 320,0 0,260"            fill="rgba(239,80,35,0.02)"  stroke="#ef5023" strokeWidth="1.2" strokeOpacity="0.11"/>
              <polygon points="0,0 180,0 0,140"            fill="none"                  stroke="#ff7340" strokeWidth="0.8" strokeOpacity="0.08"/>
              <polygon points="1440,560 1140,560 1440,320" fill="rgba(224,61,16,0.02)"  stroke="#e03d10" strokeWidth="1.2" strokeOpacity="0.10"/>
              <polygon points="1440,560 1280,560 1440,440" fill="none"                  stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.07"/>
              <polygon points="720,60 790,160 720,260 650,160" fill="rgba(239,80,35,0.02)" stroke="#ef5023" strokeWidth="1" strokeOpacity="0.11" strokeDasharray="5 7"/>
              <line x1="0"    y1="380" x2="340"  y2="100" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.08"/>
              <line x1="1440" y1="180" x2="1100" y2="460" stroke="#ff7340" strokeWidth="0.8" strokeOpacity="0.08"/>
            </svg>
          </div>
          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-[56px] items-start">

              {/* Left column */}
              <div className="flex flex-col gap-[40px]">

                {/* Eyebrow + heading */}
                <div className="flex flex-col gap-[16px]">
                  <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>
                    GROWTH PARTNERS
                  </p>
                  <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px" }}>
                    InApps Growth Alliance <span style={{ color: "#ef5023" }}>(IGA)</span>
                  </h2>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "#666" }}>
                    For agencies, software firms, and venture builders in EU, US, Australia, and Singapore
                  </p>
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-black text-[#0a0a0a] text-[20px]">Benefits</h3>
                  <div className="flex flex-col gap-[12px]">
                    {[
                      "Tiered commissions up to 20%",
                      "Deal protection & exclusivity",
                      "Co-selling and co-delivery models",
                      "Enablement materials & playbooks",
                      "BOT/ODC setup pathways",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-[12px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                          <circle cx="10" cy="10" r="9" stroke="#ef5023" strokeWidth="1.5"/>
                          <polyline points="6,10 9,13 14,7" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[15px]" style={{ color: "#333" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Models */}
                <div className="flex flex-col gap-[14px]">
                  <h3 className="font-black text-[#0a0a0a] text-[20px]">Commercial Models</h3>
                  <div className="flex flex-wrap gap-[10px]">
                    {[
                      { label: "Project-based",                    bg: "rgba(239,80,35,0.08)",  border: "rgba(239,80,35,0.28)",  color: "#c94010" },
                      { label: "Dedicated Teams",                  bg: "rgba(255,115,64,0.08)", border: "rgba(255,115,64,0.28)", color: "#c95a10" },
                      { label: "Build-Operate-Transfer (BOT/ODC)", bg: "rgba(224,61,16,0.07)",  border: "rgba(224,61,16,0.25)",  color: "#b03210" },
                    ].map(({ label, bg, border, color }) => (
                      <span
                        key={label}
                        className="text-[13px] font-semibold px-[16px] py-[7px] rounded-full"
                        style={{ background: bg, border: `1px solid ${border}`, color }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right column — Use Cases card */}
              <div
                className="flex flex-col rounded-[18px] overflow-hidden self-start sticky top-[100px]"
                style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              >
                {/* Card header */}
                <div className="px-[28px] pt-[28px] pb-[20px] flex items-center gap-[12px]" style={{ borderBottom: "1px solid rgba(239,80,35,0.15)", background: "linear-gradient(135deg, #ef5023 0%, #ff7340 100%)" }}>
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.18)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.8"/>
                      <path d="M7 8h10M7 12h7M7 16h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-white text-[18px]">Use Cases</h3>
                </div>
                {/* Rows */}
                <div className="flex flex-col">
                  {[
                    {
                      title: "White-Label Delivery",
                      desc: "We deliver under your brand while you own the client",
                      accent: "#ef5023",
                      iconBg: "rgba(239,80,35,0.08)",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                    },
                    {
                      title: "Scale Roadmaps",
                      desc: "Expand capacity for larger, longer projects",
                      accent: "#ff7340",
                      iconBg: "rgba(255,115,64,0.08)",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 17l4-8 4 4 4-6 4 2" stroke="#ff7340" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 20h18" stroke="#ff7340" strokeWidth="1.8" strokeLinecap="round"/></svg>,
                    },
                    {
                      title: "Launch MVPs",
                      desc: "Rapid prototyping and go-to-market delivery",
                      accent: "#e03d10",
                      iconBg: "rgba(224,61,16,0.08)",
                      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8 6 7 10 7 14h10c0-4-1-8-5-12z" stroke="#e03d10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14v3a5 5 0 0 0 10 0v-3" stroke="#e03d10" strokeWidth="1.8" strokeLinecap="round"/></svg>,
                    },
                  ].map((uc, i, arr) => (
                    <div
                      key={uc.title}
                      className="flex items-start gap-[16px] px-[24px] py-[20px]"
                      style={{ borderBottom: i < arr.length - 1 ? "1px solid #f4f4f4" : "none", borderLeft: `3px solid ${uc.accent}` }}
                    >
                      <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: uc.iconBg }}>
                        {uc.icon}
                      </div>
                      <div className="flex flex-col gap-[3px]">
                        <span className="font-bold text-[14px]" style={{ color: "#0a0a0a" }}>{uc.title}</span>
                        <span className="text-[12px] leading-[1.6]" style={{ color: "#888" }}>{uc.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TPN Detail ── */}
        <section id="tpn-detail" className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          {/* BG — concentric ripple rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 60%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(255,115,64,0.07) 0%, transparent 62%)", borderRadius: "50%" }} />
            <svg width="100%" height="100%" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
              <ellipse cx="100" cy="500" rx="140" ry="90"  fill="none" stroke="#e03d10" strokeWidth="1.2" strokeOpacity="0.10"/>
              <ellipse cx="100" cy="500" rx="260" ry="170" fill="none" stroke="#e03d10" strokeWidth="1"   strokeOpacity="0.07"/>
              <ellipse cx="100" cy="500" rx="380" ry="250" fill="none" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.05"/>
              <ellipse cx="100" cy="500" rx="500" ry="330" fill="none" stroke="#ef5023" strokeWidth="0.6" strokeOpacity="0.03"/>
              <rect x="1352" y="474" width="36" height="36" rx="4" fill="none" stroke="#ef5023" strokeWidth="1" strokeOpacity="0.14" transform="rotate(45 1370 492)"/>
              <rect x="1360" y="482" width="20" height="20" rx="2" fill="none" stroke="#ff7340" strokeWidth="0.7" strokeOpacity="0.10" transform="rotate(45 1370 492)"/>
              <polygon points="1180,200 1210,260 1150,260" fill="none" stroke="#ef5023" strokeWidth="1" strokeOpacity="0.12"/>
              <path d="M 620,20 A 100 60 0 0 1 820,20" fill="none" stroke="#ef5023" strokeWidth="0.9" strokeOpacity="0.11" strokeDasharray="5 7"/>
              <line x1="690" y1="280" x2="750" y2="280" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.12"/>
              <line x1="720" y1="250" x2="720" y2="310" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.12"/>
              <circle cx="720" cy="280" r="4" fill="none" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.15"/>
              <line x1="1340" y1="440" x2="1380" y2="400" stroke="#ff7340" strokeWidth="1" strokeOpacity="0.12"/>
              <line x1="1360" y1="460" x2="1400" y2="420" stroke="#ff7340" strokeWidth="0.7" strokeOpacity="0.09"/>
            </svg>
          </div>
          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-[56px] items-start">

              {/* Left column — Tech Stacks card */}
              <div
                className="flex flex-col rounded-[18px] overflow-hidden self-start sticky top-[100px]"
                style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              >
                {/* Card header — orange gradient */}
                <div className="px-[28px] pt-[28px] pb-[20px] flex items-center gap-[12px]" style={{ borderBottom: "1px solid rgba(239,80,35,0.15)", background: "linear-gradient(135deg, #ef5023 0%, #ff7340 100%)" }}>
                  <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.18)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="1.8"/>
                      <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-white text-[18px]">Tech Stacks in Demand</h3>
                </div>
                <div className="px-[24px] py-[20px] flex flex-col gap-[20px]">
                  <div className="grid grid-cols-2 gap-[8px]">
                    {["Node.js", "Java", ".NET", "React", "Vue", "Angular", "Flutter", "QA/Testing", "DevOps", "Data/AI"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[13px] font-medium px-[14px] py-[8px] rounded-lg"
                        style={{ background: "rgba(239,80,35,0.05)", border: "1px solid rgba(239,80,35,0.15)", color: "#c94010" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Compliance card */}
                  <div className="flex flex-col gap-[10px] p-[18px] rounded-[12px]" style={{ background: "rgba(239,80,35,0.05)", border: "1px solid rgba(239,80,35,0.15)" }}>
                    <span className="font-black text-[14px]" style={{ color: "#c94010" }}>Compliance Requirements</span>
                    <div className="flex flex-col gap-[6px]">
                      {[
                        "English proficiency (B2+ level)",
                        "Delivery SLAs and KPIs",
                        "NDA and security protocols",
                        "Secure development tooling",
                      ].map((req) => (
                        <div key={req} className="flex items-start gap-[8px]">
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                            <circle cx="10" cy="10" r="9" stroke="#ef5023" strokeWidth="1.5"/>
                            <polyline points="6,10 9,13 14,7" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-[13px] leading-[1.5]" style={{ color: "#c94010" }}>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-[40px]">

                {/* Eyebrow + heading */}
                <div className="flex flex-col gap-[16px]">
                  <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>
                    TALENT PROVIDERS
                  </p>
                  <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px" }}>
                    InApps Talent Partner Network <span style={{ color: "#ef5023" }}>(TPN)</span>
                  </h2>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "#666" }}>
                    For dev companies and recruiters in Vietnam and Philippines
                  </p>
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-black text-[#0a0a0a] text-[20px]">Benefits</h3>
                  <div className="flex flex-col gap-[12px]">
                    {[
                      "Predictable demand pipeline",
                      "Long-term placement opportunities",
                      "Clear SLAs & feedback loops",
                      "Preferred supplier program",
                      "Premium rate negotiations",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-[12px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                          <circle cx="10" cy="10" r="9" stroke="#ef5023" strokeWidth="1.5"/>
                          <polyline points="6,10 9,13 14,7" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[15px]" style={{ color: "#333" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Program Tiers & Benefits ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          {/* BG — photo with dark overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img src="/Media/Image/case 17.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", opacity: 0.15 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.6) 30%, rgba(10,10,10,0.6) 70%, #0a0a0a 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #0a0a0a 0%, transparent 20%, transparent 80%, #0a0a0a 100%)" }} />
          </div>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]" style={{ zIndex: 1 }}>

            {/* Header */}
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>PROGRAM TIERS</p>
              <h2 className="font-black text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 3vw, 46px)", letterSpacing: "-1.5px" }}>
                Program Tiers &amp; <span style={{ color: "#ef5023" }}>Benefits</span>
              </h2>
              <p className="text-[15px] leading-[1.75]" style={{ color: "#888" }}>Grow with us and unlock exclusive benefits</p>
            </div>

            {/* Progression diagram + Table */}
            {(() => {
              const tiers = [
                {
                  icon: (
                    <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
                      <rect x="12" y="5" width="12" height="8" rx="3" stroke="#ef5023" strokeWidth="1.6"/>
                      <rect x="15" y="13" width="6" height="5" stroke="#ef5023" strokeWidth="1.4"/>
                      <rect x="8"  y="18" width="20" height="6" rx="2" stroke="#ef5023" strokeWidth="1.6"/>
                      <line x1="6" y1="30" x2="30" y2="30" stroke="#ef5023" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  ),
                  badge: "Starter", badgeColor: "#2d9e5f", badgeBg: "#e6f9ef",
                  tierName: "Registered", accent: "#2d9e5f",
                  step: "01",
                  qual: "New partners",
                  benefits: ["Deal registration", "Enablement kit"],
                  extras: null,
                  iconPaths: (<><rect x="12" y="5" width="12" height="8" rx="3" stroke="#ef5023" strokeWidth="1.6"/><rect x="15" y="13" width="6" height="5" stroke="#ef5023" strokeWidth="1.4"/><rect x="8" y="18" width="20" height="6" rx="2" stroke="#ef5023" strokeWidth="1.6"/><line x1="6" y1="30" x2="30" y2="30" stroke="#ef5023" strokeWidth="1.6" strokeLinecap="round"/></>),
                },
                {
                  icon: (
                    <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
                      <path d="M18 5 C14 9 12 15 12 21 h12 C24 15 22 9 18 5 Z" stroke="#ef5023" strokeWidth="1.6" strokeLinejoin="round"/>
                      <circle cx="18" cy="17" r="2.5" stroke="#ef5023" strokeWidth="1.3"/>
                      <path d="M12 21 L8 27 L12 27 Z" stroke="#ef5023" strokeWidth="1.4" strokeLinejoin="round"/>
                      <path d="M24 21 L28 27 L24 27 Z" stroke="#ef5023" strokeWidth="1.4" strokeLinejoin="round"/>
                      <path d="M15 27 Q16 31 18 29 Q20 31 21 27" stroke="#ef5023" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  badge: "Growth", badgeColor: "#6366f1", badgeBg: "#ede9fe",
                  tierName: "Select", accent: "#6366f1",
                  step: "02",
                  qual: "2–3 deals / steady supply",
                  benefits: ["Higher margin", "Case study", "Priority reviews"],
                  extras: "Webinars, pipeline clinics",
                  iconPaths: (<><path d="M18 5 C14 9 12 15 12 21 h12 C24 15 22 9 18 5 Z" stroke="#ef5023" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="18" cy="17" r="2.5" stroke="#ef5023" strokeWidth="1.3"/><path d="M12 21 L8 27 L12 27 Z" stroke="#ef5023" strokeWidth="1.4" strokeLinejoin="round"/><path d="M24 21 L28 27 L24 27 Z" stroke="#ef5023" strokeWidth="1.4" strokeLinejoin="round"/><path d="M15 27 Q16 31 18 29 Q20 31 21 27" stroke="#ef5023" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></>),
                },
                {
                  icon: (
                    <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
                      <rect x="9" y="17" width="18" height="13" rx="3" stroke="#ef5023" strokeWidth="1.6"/>
                      <circle cx="14.5" cy="23" r="2" stroke="#ef5023" strokeWidth="1.3"/>
                      <circle cx="21.5" cy="23" r="2" stroke="#ef5023" strokeWidth="1.3"/>
                      <path d="M14 28 h8" stroke="#ef5023" strokeWidth="1.3" strokeLinecap="round"/>
                      <path d="M9 17 L9 10 L13 13.5 L18 9 L23 13.5 L27 10 L27 17" stroke="#ef5023" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                    </svg>
                  ),
                  badge: "Elite", badgeColor: "#a855f7", badgeBg: "#f5e8ff",
                  tierName: "Premier", accent: "#a855f7",
                  step: "03",
                  qual: "Strategic contributors",
                  benefits: ["Top commission", "Executive sponsor", "Roadmap access"],
                  extras: "MDF support, BOT/JV eligibility",
                  iconPaths: (<><rect x="9" y="17" width="18" height="13" rx="3" stroke="#ef5023" strokeWidth="1.6"/><circle cx="14.5" cy="23" r="2" stroke="#ef5023" strokeWidth="1.3"/><circle cx="21.5" cy="23" r="2" stroke="#ef5023" strokeWidth="1.3"/><path d="M14 28 h8" stroke="#ef5023" strokeWidth="1.3" strokeLinecap="round"/><path d="M9 17 L9 10 L13 13.5 L18 9 L23 13.5 L27 10 L27 17" stroke="#ef5023" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/></>),
                },
              ];
              return (
                <div className="flex flex-col gap-[40px]">

                  {/* ── Progression diagram ── */}
                  <div className="flex items-center justify-center gap-[48px]">
                    {tiers.map((tier, i) => (
                      <Fragment key={tier.tierName}>
                        <div className="flex flex-col items-center gap-[12px]" style={{ minWidth: "140px" }}>
                          <div className="flex items-center justify-center" style={{ width: "96px", height: "96px", borderRadius: "22px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                            {tier.icon}
                          </div>
                          <span className="text-[11px] font-bold px-[12px] py-[4px] rounded-full" style={{ background: tier.badgeBg, color: tier.badgeColor }}>{tier.badge}</span>
                          <span className="font-bold text-[14px] text-white">{tier.tierName}</span>
                        </div>
                        {i < tiers.length - 1 && (
                          <div style={{ flexShrink: 0, marginBottom: "52px" }}>
                            <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
                              <defs>
                                <linearGradient id={`ag${i}`} x1="0" y1="0" x2="52" y2="0" gradientUnits="userSpaceOnUse">
                                  <stop offset="0%" stopColor="#3a3a3a"/>
                                  <stop offset="100%" stopColor="#ef5023" stopOpacity="0.6"/>
                                </linearGradient>
                              </defs>
                              <line x1="2" y1="14" x2="38" y2="14" stroke={`url(#ag${i})`} strokeWidth="1.5" strokeDasharray="4 3"/>
                              <path d="M34 6 L50 14 L34 22 Z" fill="rgba(239,80,35,0.15)" stroke="#ef5023" strokeWidth="1.2" strokeOpacity="0.55" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>

                  {/* ── Table ── */}
                  <div className="rounded-[16px] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 12px 40px rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.5)" }}>
                    {/* Header */}
                    <div className="grid px-[28px] py-[16px]" style={{ gridTemplateColumns: "220px 1fr 2fr 1fr", background: "linear-gradient(90deg, rgba(239,80,35,0.9) 0%, rgba(255,106,56,0.85) 100%)" }}>
                      {["Tier", "Fit", "Benefits", "Extras"].map((h) => (
                        <span key={h} className="font-bold text-white text-[15px]">{h}</span>
                      ))}
                    </div>
                    {/* Rows */}
                    {tiers.map((tier, i) => (
                      <div key={tier.tierName} className="grid items-center px-[28px] py-[22px]" style={{ gridTemplateColumns: "220px 1fr 2fr 1fr", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                        {/* Tier cell */}
                        <div className="flex items-center gap-[12px]">
                          <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
                              {tier.iconPaths}
                            </svg>
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <span className="font-bold text-[14px]" style={{ color: "#ef5023" }}>{tier.tierName}</span>
                            <span className="text-[10px] font-bold px-[8px] py-[2px] rounded-full self-start" style={{ background: tier.badgeBg, color: tier.badgeColor }}>{tier.badge}</span>
                          </div>
                        </div>
                        <span className="text-[13px]" style={{ color: "#aaa" }}>{tier.qual}</span>
                        <span className="text-[13px]" style={{ color: "#aaa" }}>{tier.benefits.join(", ")}</span>
                        <span className="text-[13px]" style={{ color: "#666" }}>{tier.extras ?? "–"}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })()}

          </div>
        </section>

        {/* ── How the Program Works ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          {/* BG — flowing wave lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
              <g fill="none" stroke="#ef5023" strokeOpacity="0.055" strokeWidth="1.2" strokeLinecap="round">
                <path d="M -40,80  C 120,40  280,120 440,80  S 760,40  920,80  S 1240,40  1480,80"/>
                <path d="M -40,160 C 140,120 300,200 460,160 S 780,120  940,160 S 1260,120 1480,160"/>
                <path d="M -40,260 C 160,220 340,300 520,260 S 840,220  1000,260 S 1280,220 1480,260"/>
                <path d="M -40,360 C 180,320 360,400 540,360 S 860,320  1020,360 S 1300,320 1480,360"/>
                <path d="M -40,440 C 200,400 380,480 580,440 S 900,400  1060,440 S 1320,400 1480,440"/>
              </g>
              <g fill="none" stroke="#0a0a0a" strokeOpacity="0.04" strokeWidth="0.8" strokeLinecap="round">
                <path d="M -40,120 C 130,80  290,160 460,120 S 780,80  940,120 S 1260,80  1480,120"/>
                <path d="M -40,310 C 170,270 350,350 540,310 S 860,270 1020,310 S 1300,270 1480,310"/>
              </g>
              <circle cx="200"  cy="68"  r="4" fill="#ef5023" fillOpacity="0.18"/>
              <circle cx="560"  cy="68"  r="4" fill="#ef5023" fillOpacity="0.18"/>
              <circle cx="920"  cy="68"  r="4" fill="#ef5023" fillOpacity="0.18"/>
              <circle cx="1240" cy="68"  r="4" fill="#ef5023" fillOpacity="0.18"/>
            </svg>
            <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />
          </div>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]" style={{ zIndex: 1 }}>

            {/* Header */}
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>HOW IT WORKS</p>
              <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(30px, 3vw, 46px)", letterSpacing: "-1.5px" }}>
                How the Program <span style={{ color: "#ef5023" }}>Works</span>
              </h2>
              <p className="text-[15px] leading-[1.75]" style={{ color: "#888" }}>Simple process, powerful results</p>
            </div>

            {/* Steps timeline */}
            <div className="relative flex flex-col md:flex-row items-start md:items-start justify-between gap-[32px] md:gap-[0px]">
              {/* Horizontal connector line — desktop only */}
              <div className="absolute hidden md:block" style={{ top: "36px", left: "10%", right: "10%", height: "3px", background: "linear-gradient(90deg, #ef5023, #ff8c6b)", zIndex: 0 }} />

              {[
                {
                  icon: (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="14 2 14 8 20 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="9" y1="13" x2="15" y2="13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                      <line x1="9" y1="17" x2="13" y2="17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Apply Online",
                  desc: "Submit application with company details",
                },
                {
                  icon: (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="1.8"/>
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="12" cy="16" r="1.5" fill="white"/>
                    </svg>
                  ),
                  title: "Qualify & Sign",
                  desc: "Complete NDA/MSA and qualification process",
                },
                {
                  icon: (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M22 10v6M2 10l10-7 10 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 21v-9a6 6 0 0 1 12 0v9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="12" cy="15" r="2" stroke="white" strokeWidth="1.6"/>
                    </svg>
                  ),
                  title: "Get Enabled",
                  desc: "Access portal, templates, and pricing",
                },
                {
                  icon: (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.8"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                      <polyline points="16 11 18 13 22 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Register or Receive",
                  desc: "IGA: register deals for protection. TPN: receive talent requisitions from InApps.",
                },
                {
                  icon: (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.8"/>
                      <path d="M8 17V13M12 17V9M16 17V12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Govern & Scale",
                  desc: "Monthly check-ins and Quarterly Business Reviews (QBRs) to track growth.",
                },
              ].map((step, i) => (
                <div key={step.title} className="relative flex flex-col items-center gap-[16px] text-center" style={{ flex: 1, zIndex: 1 }}>
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #ff7340 0%, #ef5023 100%)", boxShadow: "0 6px 20px rgba(239,80,35,0.35)", border: "3px solid #fff" }}
                  >
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-[6px] px-[8px]">
                    <span className="font-black text-[15px]" style={{ color: "#0a0a0a" }}>{step.title}</span>
                    <span className="text-[13px] leading-[1.6]" style={{ color: "#888" }}>{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">

              {/* Growth KPIs */}
              <div className="flex flex-col gap-[18px] p-[28px] rounded-[16px]" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-[10px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <polyline points="3 17 9 11 13 15 21 7" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="17 7 21 7 21 11" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-black text-[18px]" style={{ color: "#0a0a0a" }}>Growth KPIs</span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  {[
                    "Pipeline generation and quality",
                    "Win rate and deal progression",
                    "Renewal and upsell performance",
                  ].map((kpi) => (
                    <div key={kpi} className="flex items-start gap-[8px]">
                      <span className="text-[15px] font-bold" style={{ color: "#ef5023", flexShrink: 0, marginTop: "1px" }}>•</span>
                      <span className="text-[14px] leading-[1.6]" style={{ color: "#666" }}>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Talent KPIs */}
              <div className="flex flex-col gap-[18px] p-[28px] rounded-[16px]" style={{ background: "#fff", border: "1px solid #e8e8e8", boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-[10px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#ef5023" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#ef5023" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-black text-[18px]" style={{ color: "#0a0a0a" }}>Talent KPIs</span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  {[
                    "Time to fill and quality metrics",
                    "Engineer performance and feedback",
                    "Attrition and retention rates",
                  ].map((kpi) => (
                    <div key={kpi} className="flex items-start gap-[8px]">
                      <span className="text-[15px] font-bold" style={{ color: "#ef5023", flexShrink: 0, marginTop: "1px" }}>•</span>
                      <span className="text-[14px] leading-[1.6]" style={{ color: "#666" }}>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Success Snapshots ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          {/* BG — dot grid + scattered accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
              <g fill="white">
                <circle cx="72"   cy="48"  r="2"   fillOpacity="0.18"/>
                <circle cx="240"  cy="120" r="1.5" fillOpacity="0.14"/>
                <circle cx="430"  cy="35"  r="2"   fillOpacity="0.16"/>
                <circle cx="620"  cy="95"  r="1.5" fillOpacity="0.13"/>
                <circle cx="820"  cy="52"  r="2"   fillOpacity="0.15"/>
                <circle cx="1020" cy="80"  r="1.5" fillOpacity="0.14"/>
                <circle cx="1250" cy="40"  r="2"   fillOpacity="0.16"/>
                <circle cx="150"  cy="300" r="2"   fillOpacity="0.12"/>
                <circle cx="400"  cy="260" r="1.5" fillOpacity="0.10"/>
                <circle cx="680"  cy="320" r="2"   fillOpacity="0.12"/>
                <circle cx="940"  cy="270" r="1.5" fillOpacity="0.11"/>
                <circle cx="1180" cy="340" r="2"   fillOpacity="0.10"/>
                <circle cx="280"  cy="460" r="1.5" fillOpacity="0.09"/>
                <circle cx="760"  cy="490" r="2"   fillOpacity="0.10"/>
                <circle cx="1380" cy="420" r="1.5" fillOpacity="0.09"/>
              </g>
              <g fill="#ef5023">
                <circle cx="130"  cy="75"  r="2.5" fillOpacity="0.38"/>
                <circle cx="360"  cy="140" r="2"   fillOpacity="0.32"/>
                <circle cx="580"  cy="55"  r="2.5" fillOpacity="0.30"/>
                <circle cx="800"  cy="130" r="2"   fillOpacity="0.35"/>
                <circle cx="1060" cy="60"  r="3"   fillOpacity="0.28"/>
                <circle cx="1310" cy="170" r="2"   fillOpacity="0.30"/>
                <circle cx="220"  cy="390" r="2"   fillOpacity="0.26"/>
                <circle cx="500"  cy="440" r="2.5" fillOpacity="0.28"/>
                <circle cx="740"  cy="380" r="2"   fillOpacity="0.25"/>
                <circle cx="1000" cy="450" r="2.5" fillOpacity="0.27"/>
                <circle cx="1200" cy="390" r="2"   fillOpacity="0.24"/>
                <circle cx="60"   cy="480" r="1.8" fillOpacity="0.22"/>
                <circle cx="1430" cy="300" r="2"   fillOpacity="0.26"/>
              </g>
              <circle cx="580"  cy="55"  r="3"  fill="#ef5023" fillOpacity="0.30"/>
              <circle cx="580"  cy="55"  r="8"  fill="none" stroke="#ef5023" strokeWidth="0.9" strokeOpacity="0.16"/>
              <circle cx="580"  cy="55"  r="14" fill="none" stroke="#ef5023" strokeWidth="0.6" strokeOpacity="0.08"/>
              <circle cx="1060" cy="60"  r="3"  fill="#ef5023" fillOpacity="0.28"/>
              <circle cx="1060" cy="60"  r="8"  fill="none" stroke="#ef5023" strokeWidth="0.9" strokeOpacity="0.15"/>
              <circle cx="1060" cy="60"  r="14" fill="none" stroke="#ef5023" strokeWidth="0.6" strokeOpacity="0.07"/>
              <circle cx="740"  cy="380" r="3"  fill="#ef5023" fillOpacity="0.26"/>
              <circle cx="740"  cy="380" r="8"  fill="none" stroke="#ef5023" strokeWidth="0.9" strokeOpacity="0.14"/>
              <circle cx="740"  cy="380" r="14" fill="none" stroke="#ef5023" strokeWidth="0.6" strokeOpacity="0.07"/>
            </svg>
          </div>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 1 }}>

            {/* Header */}
            <div className="flex flex-col gap-[10px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>SUCCESS SNAPSHOTS</p>
              <h2 className="font-black text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 3vw, 46px)", letterSpacing: "-1.5px" }}>
                Success <span style={{ color: "#ef5023" }}>Snapshots</span>
              </h2>
              <p className="text-[15px] leading-[1.75]" style={{ color: "#888" }}>Real results from our partner network</p>
            </div>

            {/* Cards */}
            <style>{`
              .snapshot-card {
                transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
              }
              .snapshot-card:hover {
                transform: translateY(-12px);
                box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(239,80,35,0.25), 0 8px 24px rgba(239,80,35,0.12);
                border-color: rgba(239,80,35,0.35) !important;
              }
            `}</style>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                {
                  type: "IGA",
                  banner: "linear-gradient(135deg, #ef5023 0%, #ff7340 100%)",
                  title: "Agency Enterprise Win",
                  desc: "A UK digital agency white-labeled InApps delivery to win a £2M enterprise project — without hiring a single additional in-house engineer.",
                  metric: "£2M deal closed",
                },
                {
                  type: "IGA",
                  banner: "linear-gradient(135deg, #e03d10 0%, #ef5023 100%)",
                  title: "Venture Builder MVP Scale",
                  desc: "A US startup accelerator used the IGA co-delivery model to launch 5 MVPs simultaneously — cutting time-to-market by 60% vs. their prior approach.",
                  metric: "60% faster time-to-market",
                },
                {
                  type: "TPN",
                  banner: "linear-gradient(135deg, #c94010 0%, #e03d10 100%)",
                  title: "Supplier Doubled Placements",
                  desc: "A Vietnamese engineering firm joined TPN and secured a 12-month preferred supplier agreement, doubling their active placement count within two quarters.",
                  metric: "2× placement rate",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="snapshot-card flex flex-col rounded-[16px] overflow-hidden"
                  style={{ background: "#111", border: "1px solid rgba(239,80,35,0.15)", boxShadow: "0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,80,35,0.05)" }}
                >
                  <div
                    className="flex items-center gap-[10px] px-[20px] py-[18px]"
                    style={{ background: card.banner, minHeight: "90px" }}
                  >
                    <div className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.18)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="1.8"/>
                        <line x1="9" y1="7" x2="15" y2="7" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                        <line x1="9" y1="11" x2="15" y2="11" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                        <line x1="9" y1="15" x2="12" y2="15" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="font-bold text-white text-[13px]">{card.type === "TPN" ? "Talent Partner Success" : "Growth Partner Success"}</span>
                  </div>

                  <div className="flex flex-col gap-[16px] px-[24px] py-[24px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,80,35,0.12)", border: "1px solid rgba(239,80,35,0.25)" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef5023">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span className="font-black text-[15px] text-white">{card.title}</span>
                    </div>

                    <p className="text-[14px] leading-[1.7]" style={{ color: "#888" }}>{card.desc}</p>

                    <div className="flex items-center justify-between pt-[4px]">
                      <span
                        className="inline-flex items-center gap-[5px] text-[12px] font-semibold px-[10px] py-[4px] rounded-full"
                        style={{ background: "rgba(239,80,35,0.12)", color: "#ff7340" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <polyline points="3 17 9 11 13 15 21 7" stroke="#ff7340" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="17 7 21 7 21 11" stroke="#ff7340" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {card.metric}
                      </span>
                      <a href="/contact" style={{ fontSize: "13px", color: "#fff", textDecoration: "none", fontWeight: 600 }}>
                        Success Story
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Common Questions (FAQ) ── */}
        <FaqSection />

        {/* ── Ready to Partner CTA ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden" style={{ background: "linear-gradient(135deg, #ff7340 0%, #ef5023 50%, #e03d10 100%)" }}>

          {/* BG — sunburst rays + noise dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
              <defs>
                <pattern id="cta-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="white" fillOpacity="0.07"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)"/>
              <g stroke="white" strokeOpacity="0.08" strokeWidth="1" strokeLinecap="round">
                <line x1="720" y1="200" x2="720"  y2="-60"/>
                <line x1="720" y1="200" x2="1080" y2="-40"/>
                <line x1="720" y1="200" x2="1340" y2="80"/>
                <line x1="720" y1="200" x2="1460" y2="260"/>
                <line x1="720" y1="200" x2="1340" y2="430"/>
                <line x1="720" y1="200" x2="1040" y2="480"/>
                <line x1="720" y1="200" x2="720"  y2="480"/>
                <line x1="720" y1="200" x2="400"  y2="480"/>
                <line x1="720" y1="200" x2="100"  y2="430"/>
                <line x1="720" y1="200" x2="-20"  y2="260"/>
                <line x1="720" y1="200" x2="100"  y2="80"/>
                <line x1="720" y1="200" x2="360"  y2="-40"/>
              </g>
              <circle cx="720" cy="200" r="150" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1"/>
              <circle cx="720" cy="200" r="280" fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="1"/>
              <circle cx="720" cy="200" r="420" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="0.8"/>
            </svg>
            <div style={{ position: "absolute", left: "20%", top: "-20%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", right: "15%", bottom: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px] items-center" style={{ zIndex: 1 }}>

            {/* Header */}
            <div className="flex flex-col gap-[10px] items-center text-center">
              <h2 className="font-black text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 3.5vw, 50px)", letterSpacing: "-1.5px" }}>
                Ready to Partner with InApps?
              </h2>
              <p className="text-[16px]" style={{ color: "rgba(255,255,255,0.8)" }}>
                Choose your partnership path and start growing together
              </p>
            </div>

            {/* Two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full max-w-[900px]">

              {/* Growth Partner */}
              <div className="flex flex-col items-center gap-[20px] px-[32px] py-[32px] rounded-[20px] text-center" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.15)", borderTop: "4px solid transparent", backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(135deg, #3b5bdb, #7c3aed)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}>
                <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3b5bdb 0%, #7c3aed 100%)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8 6 7 10 7 14h10c0-4-1-8-5-12z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 14v3a5 5 0 0 0 10 0v-3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M5 16l-2 2M19 16l2 2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-black text-[#0a0a0a] text-[20px]">Growth Partner</h3>
                  <p className="text-[14px]" style={{ color: "#666" }}>Co-sell, co-deliver, scale fast</p>
                  <p className="text-[12px] font-black tracking-[2px]" style={{ color: "#aaa" }}>EU US AU SG</p>
                </div>

                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center h-[48px] rounded-[10px] font-bold text-[14px] text-white"
                  style={{ background: "#ef5023", textDecoration: "none", boxShadow: "0 4px 16px rgba(239,80,35,0.35)" }}
                >
                  Register Your Opportunities
                </a>

                <p className="text-[13px]" style={{ color: "#888" }}>Perfect for agencies, software firms, and venture builders</p>
              </div>

              {/* Talent Provider */}
              <div className="flex flex-col items-center gap-[20px] px-[32px] py-[32px] rounded-[20px] text-center" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.15)", borderTop: "4px solid transparent", backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(135deg, #059669, #0ea5e9)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}>
                <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="5" r="2.5" stroke="white" strokeWidth="1.8"/>
                    <circle cx="5" cy="17" r="2.5" stroke="white" strokeWidth="1.8"/>
                    <circle cx="19" cy="17" r="2.5" stroke="white" strokeWidth="1.8"/>
                    <path d="M12 7.5v4M12 11.5l-5.5 4M12 11.5l5.5 4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-black text-[#0a0a0a] text-[20px]">Talent Provider</h3>
                  <p className="text-[14px]" style={{ color: "#666" }}>Supply vetted talent. Secure demand.</p>
                  <p className="text-[12px] font-black tracking-[2px]" style={{ color: "#aaa" }}>VN PH</p>
                </div>

                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center h-[48px] rounded-[10px] font-bold text-[14px] text-white"
                  style={{ background: "#ef5023", textDecoration: "none", boxShadow: "0 4px 16px rgba(239,80,35,0.35)" }}
                >
                  Become a Preferred Supplier
                </a>

                <p className="text-[13px]" style={{ color: "#888" }}>Ideal for dev companies and recruiters in VN/PH</p>
              </div>

            </div>

            {/* Request Partner Pack */}
            <a
              href="/contact"
              className="inline-flex items-center gap-[10px] px-[32px] h-[52px] rounded-[14px] font-bold text-[14px] text-white"
              style={{ border: "2px solid rgba(255,255,255,0.6)", textDecoration: "none", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Request the Partner Pack
            </a>

          </div>
        </section>

        {/* ── S6: Final CTA ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#0d0d0d" }}>
          {/* Constellation background */}
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
              {/* Glow */}
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
