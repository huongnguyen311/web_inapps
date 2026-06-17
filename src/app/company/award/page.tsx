"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

export default function AwardPage() {

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px]" style={{ paddingBottom: "100px" }}>
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 16.png"
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

              <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
                Awards, Certifications & <span className="text-[#ef5023]">Partnerships</span>
              </h1>

              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
                External validation of what our clients already know. InApps is ISO certified, award-winning, and a certified partner of the platforms we build on. Trust should be earned, not asserted.
              </p>

            </div>
          </div>
        </section>

        {/* ── Client & Review Logos ── */}
        <ServiceTrustedLogos />

        {/* ── S2: ISO Certifications ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>

          {/* topographic contour lines — từ about page */}
          <svg width="100%" height="100%" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
            {/* certification peak — concentric ellipses top-right */}
            <g fill="none" strokeLinecap="round">
              <ellipse cx="1200" cy="80"  rx="400" ry="210" stroke="#ef5023" strokeOpacity="0.035" strokeWidth="1"/>
              <ellipse cx="1200" cy="80"  rx="300" ry="158" stroke="#ef5023" strokeOpacity="0.048" strokeWidth="1"/>
              <ellipse cx="1200" cy="80"  rx="210" ry="110" stroke="#ef5023" strokeOpacity="0.065" strokeWidth="1.2"/>
              <ellipse cx="1200" cy="80"  rx="130" ry="68"  stroke="#ef5023" strokeOpacity="0.085" strokeWidth="1.2"/>
              <ellipse cx="1200" cy="80"  rx="60"  ry="32"  stroke="#ef5023" strokeOpacity="0.11"  strokeWidth="1.5"/>
            </g>
            {/* flowing ridge lines across section */}
            <g fill="none" stroke="#0a0a0a" strokeOpacity="0.04" strokeLinecap="round">
              <path d="M 0,300 C 200,240 420,160 660,200 S 980,310 1220,250 S 1380,170 1440,190" strokeWidth="1"/>
              <path d="M 0,370 C 180,310 400,230 640,270 S 960,380 1200,320 S 1360,240 1440,260" strokeWidth="1"/>
              <path d="M 0,440 C 160,380 380,300 620,340 S 940,450 1180,390 S 1340,310 1440,330" strokeWidth="0.8"/>
            </g>
          </svg>

          {/* orange glow — aligned with contour peak */}
          <div className="absolute pointer-events-none" style={{ right: "-120px", top: "-120px", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.055) 0%, transparent 65%)", zIndex: 1 }} />

          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 2 }}>

            {/* header */}
            <div className="flex flex-col gap-[12px] mb-[48px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">CERTIFICATIONS</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                Independently audited. Globally recognised.
              </h2>
              <p className="text-[16px] leading-[1.7] max-w-[700px]" style={{ color: "rgba(0,0,0,0.55)" }}>
                Certified to the highest international standards for security, quality management, and engineering process maturity.
              </p>
            </div>

            {/* cards — horizontal rows with timeline */}
            <div className="flex flex-col gap-[0px] relative">

              {/* vertical timeline line */}
              <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] hidden md:block" style={{ background: "linear-gradient(to bottom, #ef5023, rgba(239,80,35,0.15))" }} />

              {[
                {
                  tag: "CORE",
                  title: "ISO 27001:2022",
                  subtitle: "Information Security Management",
                  issuer: "Bureau Veritas · 2023",
                  desc: "The gold standard for information security management. Our ISO 27001 certification demonstrates rigorous controls over data handling, access management, incident response, and business continuity, giving enterprise clients confidence that their IP and customer data is protected.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                  ),
                },
                {
                  tag: "CORE",
                  title: "ISO 9001:2015",
                  subtitle: "Quality Management Systems",
                  issuer: "Bureau Veritas · 2021",
                  desc: "Certified quality management across all service delivery processes. ISO 9001 ensures consistent, measurable quality in project delivery, team management, and client communication, from a 2-engineer staff aug engagement to a 50-person ODC.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="5"/><path d="M8 13l-2 9 6-4 6 4-2-9"/>
                    </svg>
                  ),
                },
                {
                  tag: null,
                  title: "CMMI Level 3",
                  subtitle: "Capability Maturity Model Integration",
                  issuer: "ISACA · 2022",
                  desc: "CMMI Level 3 (Defined) validates that our software engineering processes are consistent, standardised, and proactively managed. This is the maturity level required by many enterprise and government procurement standards.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/>
                    </svg>
                  ),
                },
              ].map((cert) => (
                <div key={cert.title} className="flex items-stretch gap-[0px] md:gap-[32px] py-[24px]">

                  {/* left: icon node */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: "48px" }}>
                    <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ background: "#ef5023", boxShadow: "0 4px 16px rgba(239,80,35,0.35)", zIndex: 2 }}>
                      {cert.icon}
                    </div>
                  </div>

                  {/* right: content card */}
                  <div
                    className="group flex-1 rounded-[20px] p-[28px] flex flex-col md:flex-row md:items-start gap-[20px] md:gap-[32px] transition-all duration-300 cursor-default"
                    style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(239,80,35,0.12)", boxShadow: "0 4px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)" }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.borderColor = "rgba(239,80,35,0.35)"; el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1)"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.borderColor = "rgba(239,80,35,0.12)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)"; }}
                  >
                    {/* title column */}
                    <div className="flex flex-col gap-[8px] md:w-[280px] flex-shrink-0">
                      {/* mobile icon — shown only below md */}
                      <div className="flex md:hidden w-[40px] h-[40px] rounded-full items-center justify-center flex-shrink-0 mb-[4px]"
                        style={{ background: "#ef5023", boxShadow: "0 4px 12px rgba(239,80,35,0.3)" }}>
                        {cert.icon}
                      </div>
                      {cert.tag && (
                        <span className="inline-flex items-center gap-[5px] self-start px-[10px] py-[4px] rounded-[6px] text-[11px] font-bold uppercase tracking-[1px]" style={{ background: "#ef5023", color: "#fff" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          {cert.tag}
                        </span>
                      )}
                      <h3 className="font-black text-[#0a0a0a] text-[24px] leading-[32px] tracking-[-0.5px]">{cert.title}</h3>
                      <p className="text-[14px]" style={{ color: "#666" }}>{cert.subtitle}</p>
                      <span className="text-[12px] font-semibold inline-flex items-center gap-[5px] mt-[2px]" style={{ color: "#999" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        {cert.issuer}
                      </span>
                    </div>

                    {/* separator */}
                    <div className="hidden md:block w-[1px] self-stretch transition-colors duration-300" style={{ background: "#ebebeb" }} />
                    <div className="md:hidden" style={{ borderTop: "1px solid #ebebeb" }} />

                    {/* description */}
                    <p className="flex-1 text-[14px] leading-[1.85]" style={{ color: "#555" }}>
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S3: Industry Awards ── */}
        <section id="awards" className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}>

          {/* constellation network — từ careers page */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07, zIndex: 0 }}>
            <defs>
              <pattern id="s3-constellation" x="0" y="0" width="240" height="200" patternUnits="userSpaceOnUse">
                <line x1="30"  y1="25"  x2="95"  y2="58"  stroke="white" strokeWidth="0.5"/>
                <line x1="95"  y1="58"  x2="160" y2="30"  stroke="white" strokeWidth="0.5"/>
                <line x1="160" y1="30"  x2="210" y2="90"  stroke="white" strokeWidth="0.5"/>
                <line x1="95"  y1="58"  x2="140" y2="130" stroke="white" strokeWidth="0.5"/>
                <line x1="140" y1="130" x2="210" y2="90"  stroke="white" strokeWidth="0.5"/>
                <line x1="140" y1="130" x2="75"  y2="175" stroke="white" strokeWidth="0.5"/>
                <line x1="30"  y1="25"  x2="0"   y2="80"  stroke="white" strokeWidth="0.5"/>
                <line x1="210" y1="90"  x2="240" y2="50"  stroke="white" strokeWidth="0.5"/>
                <circle cx="30"  cy="25"  r="1.5" fill="white"    opacity="0.5"/>
                <circle cx="95"  cy="58"  r="2.8" fill="#ef5023"  opacity="0.9"/>
                <circle cx="160" cy="30"  r="1.5" fill="white"    opacity="0.5"/>
                <circle cx="210" cy="90"  r="2"   fill="white"    opacity="0.45"/>
                <circle cx="140" cy="130" r="2.2" fill="#ef5023"  opacity="0.75"/>
                <circle cx="75"  cy="175" r="1.2" fill="white"    opacity="0.35"/>
                <circle cx="0"   cy="80"  r="1.2" fill="white"    opacity="0.3"/>
                <circle cx="240" cy="50"  r="1.2" fill="white"    opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#s3-constellation)"/>
          </svg>

          {/* blurred orange glow — từ careers page */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 65%)", filter: "blur(80px)", zIndex: 0 }} />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)", filter: "blur(80px)", zIndex: 0 }} />

          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ position: "relative", zIndex: 2 }}>

            {/* header */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">RECOGNITION</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                Industry Awards
              </h2>
              <p className="text-[16px] leading-[1.7] max-w-[700px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                Recognised by industry bodies and review platforms for engineering excellence and client outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {[
                {
                  title: "Sao Khue Award",
                  org: "Vietnam Software & IT Services Association (VINASA)",
                  years: "2019, 2021, 2022, 2023",
                  desc: "Sao Khue (The North Star) is Vietnam's most prestigious award for software and IT services excellence. InApps has been recognised four times for outstanding product quality, delivery track record, and contribution to Vietnam's technology ecosystem.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ),
                },
                {
                  title: "Top Software Developers in Vietnam",
                  org: "Clutch.co",
                  years: "2021, 2022, 2023, 2024",
                  desc: "Clutch.co ranks B2B service providers based on verified client reviews, market presence, and industry expertise. InApps has been consistently ranked in the Top 10 Software Development Companies in Vietnam across four consecutive years.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  ),
                },
                {
                  title: "Top App Development Company",
                  org: "GoodFirms",
                  years: "2022, 2023",
                  desc: "GoodFirms recognised InApps as a top mobile app development company in Vietnam based on verified client reviews, expertise, and quality standards. Particularly noted for React Native and cross-platform mobile engineering.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  ),
                },
                {
                  title: "Best Software Outsourcing Company",
                  org: "Vietnam ICT Awards",
                  years: "2023",
                  desc: "The Vietnam ICT Award recognises technology companies driving innovation and digital transformation in Vietnam. InApps was recognised for its contribution to the offshore development ecosystem and for bringing international-grade engineering practices to Vietnam.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/>
                    </svg>
                  ),
                },
              ].map((award) => (
                <div
                  key={award.title}
                  className="relative flex flex-col gap-[20px] rounded-[20px] p-[28px] cursor-default transition-all duration-300 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)",
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.background = "rgba(239,80,35,0.08)"; el.style.borderColor = "rgba(239,80,35,0.28)"; el.style.boxShadow = "0 12px 48px rgba(0,0,0,0.5), 0 0 32px rgba(239,80,35,0.14), inset 0 1px 0 rgba(255,255,255,0.12)"; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.10)"; el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)"; }}
                >
                  {/* orange top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, rgba(239,80,35,0.55) 30%, rgba(239,80,35,0.55) 70%, transparent)" }} />

                  {/* icon + meta */}
                  <div className="flex items-start gap-[16px]">
                    <div
                      className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(239,80,35,0.16)", boxShadow: "0 0 16px rgba(239,80,35,0.18)" }}
                    >
                      {award.icon}
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <h3 className="font-black text-white text-[20px] leading-[28px] tracking-[-0.5px]">{award.title}</h3>
                      <span className="text-[#ef5023] text-[13px] font-bold">{award.org}</span>
                      <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{award.years}</span>
                    </div>
                  </div>

                  {/* divider */}
                  <div className="w-full h-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />

                  {/* description */}
                  <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {award.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S4: Technology Partnerships ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>

          {/* graph paper grid — từ about page */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.045) 0px, rgba(0,0,0,0.045) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,0,0,0.045) 0px, rgba(0,0,0,0.045) 1px, transparent 1px, transparent 40px)",
            zIndex: 0,
          }} />

          {/* orange dot accents tại intersection */}
          <svg width="100%" height="100%" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
            <circle cx="280"  cy="120" r="4"   fill="#ef5023" fillOpacity="0.22"/>
            <circle cx="600"  cy="200" r="3"   fill="#ef5023" fillOpacity="0.15"/>
            <circle cx="920"  cy="80"  r="4.5" fill="#ef5023" fillOpacity="0.18"/>
            <circle cx="1200" cy="240" r="3.5" fill="#ef5023" fillOpacity="0.14"/>
            <circle cx="440"  cy="360" r="3"   fill="#ef5023" fillOpacity="0.12"/>
            <circle cx="760"  cy="440" r="3.5" fill="#ef5023" fillOpacity="0.13"/>
            <circle cx="1080" cy="360" r="3"   fill="#ef5023" fillOpacity="0.11"/>
            <circle cx="160"  cy="440" r="2.5" fill="#ef5023" fillOpacity="0.10"/>
            <circle cx="1360" cy="400" r="3"   fill="#ef5023" fillOpacity="0.12"/>
          </svg>

          {/* orange glow top-right */}
          <div className="absolute pointer-events-none" style={{ right: "-80px", top: "-80px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.055) 0%, transparent 65%)", zIndex: 2 }} />

          <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ position: "relative", zIndex: 2 }}>

            {/* header */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">PARTNERSHIPS</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                Technology Partnerships
              </h2>
              <p className="text-[16px] leading-[1.7] max-w-[700px]" style={{ color: "#666" }}>
                Certified partners of the cloud and technology platforms we build on, which means better support, earlier access to features, and validated expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {[
                {
                  title: "Microsoft Certified Partner",
                  tier: "GOLD PARTNER",
                  desc: "InApps is a Microsoft Certified Gold Partner, with active certifications in Azure cloud architecture, Microsoft 365 integration, and Dynamics CRM implementation. Our engineers hold individual Microsoft certifications in Azure, Power Platform, and DevOps.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  ),
                },
                {
                  title: "AWS Select Partner",
                  tier: "AWS PARTNER NETWORK",
                  desc: "As an AWS Select Partner, InApps engineers have demonstrated expertise in AWS cloud services including EC2, RDS, Lambda, ECS, CloudFront, and the full DevOps toolchain. We design and operate production systems on AWS for clients across the US, EU, and Asia-Pacific.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
                    </svg>
                  ),
                },
                {
                  title: "Google Cloud Partner",
                  tier: "PARTNER",
                  desc: "Certified Google Cloud engineers on our team bring expertise in GCP services including GKE, BigQuery, Cloud Run, and Firebase. We help clients migrate to or build natively on Google Cloud infrastructure.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    </svg>
                  ),
                },
                {
                  title: "Atlassian Solution Partner",
                  tier: "PARTNER",
                  desc: "Our project management teams use Atlassian tools (Jira, Confluence, Bitbucket) natively and can configure and administer Atlassian environments for enterprise clients who standardise on the Atlassian ecosystem.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>
                    </svg>
                  ),
                },
              ].map((partner) => (
                <div
                  key={partner.title}
                  className="relative rounded-[20px] p-[28px] flex flex-col gap-[20px] transition-all duration-200"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(239,80,35,0.15)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.borderColor = "rgba(239,80,35,0.4)"; el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1), 0 8px 24px rgba(239,80,35,0.08)"; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.borderColor = "rgba(239,80,35,0.15)"; el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)"; }}
                >
                  {/* icon + meta */}
                  <div className="flex items-start gap-[16px]">
                    <div
                      className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(239,80,35,0.08)" }}
                    >
                      {partner.icon}
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <h3 className="font-black text-[#0a0a0a] text-[20px] leading-[28px] tracking-[-0.5px]">{partner.title}</h3>
                      <span className="inline-flex items-center self-start px-[10px] py-[4px] rounded-[6px] text-[11px] font-bold uppercase tracking-[1px]" style={{ background: "#ef5023", color: "#fff" }}>{partner.tier}</span>
                    </div>
                  </div>

                  {/* divider */}
                  <div style={{ borderTop: "1px solid #ebebeb" }} />

                  {/* description */}
                  <p className="text-[14px] leading-[1.8]" style={{ color: "#666" }}>
                    {partner.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S5: Stats ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#ffffff" }}>

          <div className="relative max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[14px]">
            {[
              { value: "3", label: "ISO Certifications" },
              { value: "4×", label: "Sao Khue Award Winner" },
              { value: "4", label: "Cloud Platform Partnerships" },
              { value: "9+", label: "Years in Operation" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-[8px] rounded-[12px] px-[20px] py-[20px] items-center text-center"
                style={{ background: "#ffffff", border: "1px solid #e8e8e8", boxShadow: "0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <span className="font-black leading-[1] text-[32px] tracking-[-1px]" style={{ color: "#ef5023" }}>
                  {value}
                </span>
                <span className="text-[#0a0a0a] text-[13px] font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── S6: CTA Banner ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>

          {/* blurred radial glows — từ careers page */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 65%)", filter: "blur(80px)", zIndex: 0 }} />
          <div className="absolute bottom-0 left-0 w-[440px] h-[440px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 65%)", filter: "blur(80px)", zIndex: 0 }} />
          <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[700px] h-[320px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(239,80,35,0.06) 0%, transparent 70%)", filter: "blur(100px)", zIndex: 0 }} />

          {/* concentric ripple rings — từ partner page */}
          <svg width="100%" height="100%" viewBox="0 0 1440 280" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80"  cy="280" rx="160" ry="100" fill="none" stroke="#ef5023" strokeWidth="1"   strokeOpacity="0.08"/>
            <ellipse cx="80"  cy="280" rx="300" ry="190" fill="none" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.055"/>
            <ellipse cx="80"  cy="280" rx="460" ry="290" fill="none" stroke="#ef5023" strokeWidth="0.6" strokeOpacity="0.035"/>
            <ellipse cx="1360" cy="0"  rx="200" ry="130" fill="none" stroke="#ef5023" strokeWidth="0.8" strokeOpacity="0.06"/>
            <ellipse cx="1360" cy="0"  rx="360" ry="230" fill="none" stroke="#ef5023" strokeWidth="0.5" strokeOpacity="0.04"/>
          </svg>

          <div className="relative max-w-[1320px] mx-auto" style={{ zIndex: 2 }}>
            <div className="relative rounded-[20px] overflow-hidden px-[32px] md:px-[56px] py-[36px] flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]"
              style={{ background: "#ef5023", boxShadow: "0 10px 30px -8px rgba(239,80,35,0.25), 0 4px 12px -4px rgba(239,80,35,0.15)" }}>

              {/* topographic contour lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="15%" cy="110%" rx="60%" ry="40%" fill="none" stroke="white" strokeWidth="1"/>
                <ellipse cx="15%" cy="110%" rx="46%" ry="30%" fill="none" stroke="white" strokeWidth="1"/>
                <ellipse cx="15%" cy="110%" rx="32%" ry="20%" fill="none" stroke="white" strokeWidth="1.2"/>
                <ellipse cx="15%" cy="110%" rx="20%" ry="12%" fill="none" stroke="white" strokeWidth="1.4"/>
                <ellipse cx="85%" cy="-10%" rx="50%" ry="35%" fill="none" stroke="white" strokeWidth="0.8"/>
                <ellipse cx="85%" cy="-10%" rx="36%" ry="24%" fill="none" stroke="white" strokeWidth="0.8"/>
                <ellipse cx="85%" cy="-10%" rx="22%" ry="14%" fill="none" stroke="white" strokeWidth="1"/>
              </svg>

              {/* content - left */}
              <div className="relative flex flex-col gap-[8px] max-w-[560px]">
                <h2 className="font-black text-white text-[28px] leading-[1.2] tracking-[-1px]">
                  Work with a certified, award-winning team
                </h2>
                <p className="text-white/70 text-[14px] leading-[1.6]">
                  Our certifications and awards reflect the processes and standards we hold ourselves to on every project. Start a conversation today.
                </p>
              </div>

              {/* CTAs - right */}
              <div className="relative flex items-center gap-[12px] flex-shrink-0">
                <Link
                  href="/contact"
                  className="h-[44px] px-[28px] rounded-[10px] font-bold text-[#ef5023] text-[13px] inline-flex items-center gap-[7px] transition-all duration-200 hover:bg-[#f5f5f5]"
                  style={{ background: "#ffffff", textDecoration: "none" }}
                >
                  Start a Project
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/company/about"
                  className="h-[44px] px-[24px] rounded-[10px] font-semibold text-white/80 text-[13px] inline-flex items-center transition-all duration-200 hover:text-white hover:bg-white/10"
                  style={{ textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  About InApps
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
