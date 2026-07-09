"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import { solutionAccelerators } from "@/data/solutionAccelerators";
import type { SolutionAccelerator } from "@/data/solutionAccelerators";

/* ── Simple icon renderer (Lucide-style SVG paths inline) ── */
function Icon({ name, size = 20, color = "currentColor" }: { name: string; size?: number; color?: string }) {
  const paths: Record<string, string> = {
    brain: "M9.5 2a2.5 2.5 0 0 1 5 0v1a2.5 2.5 0 0 1 1.5 2.3V6a2.5 2.5 0 0 1 0 4.8V12a2.5 2.5 0 0 1-1.5 2.3V15a2.5 2.5 0 0 1-5 0v-.7A2.5 2.5 0 0 1 8 12V10.8A2.5 2.5 0 0 1 8 6V5.3A2.5 2.5 0 0 1 9.5 3V2z",
    layers: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    "git-branch": "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9",
    "bar-chart": "M12 20V10M18 20V4M6 20v-6",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    calendar: "M3 9h18M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 2v4M16 2v4",
    video: "M23 7l-7 5 7 5V7zM1 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z",
    "file-text": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
    link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
    "user-check": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM17 11l2 2 4-4",
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    activity: "M22 12h-4l-3 9L9 3l-3 9H2",
    "trending-up": "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
    file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
    settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
    package: "M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
    "shopping-cart": "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    "credit-card": "M1 4h22v16H1zM1 10h22",
    "map-pin": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    bell: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",
    map: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16",
    "alert-triangle": "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
    cpu: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
    users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    database: "M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6zM2 12c0 3.31 4.48 6 10 6s10-2.69 10-6M2 8c0 3.31 4.48 6 10 6s10-2.69 10-6",
    "pie-chart": "M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z",
    "toggle-right": "M17 5H7a7 7 0 0 0 0 14h10a7 7 0 0 0 0-14zM17 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    key: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
    terminal: "M4 17l6-6-6-6M12 19h8",
    "arrow-left": "M19 12H5M12 19l-7-7 7-7",
    "arrow-right": "M5 12h14M12 5l7 7-7 7",
    clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    check: "M20 6L9 17l-5-5",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] ?? paths["zap"]} />
    </svg>
  );
}

export default function SolutionAcceleratorDetailClient({
  accelerator: a,
}: {
  accelerator: SolutionAccelerator;
}) {
  const related = solutionAccelerators.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── Hero ── */}
        <section
          className={a.slug === "ai-document-intelligence"
            ? "relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px]"
            : "relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start min-h-[600px] md:min-h-[820px] pt-[140px] md:pt-[210px]"}
          style={a.slug === "ai-document-intelligence"
            ? { minHeight: "850px", paddingTop: "228px", paddingBottom: "100px" }
            : { paddingBottom: "90px" }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            {a.slug === "ai-document-intelligence" ? (
              <>
                <img
                  src={a.heroImage}
                  alt=""
                  className="absolute right-0 top-0 h-full"
                  style={{ width: "65%", objectFit: "cover", objectPosition: "right center" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #0d0d0d 35%, #0d0d0d 45%, rgba(13,13,13,0.7) 60%, transparent 100%)" }}
                />
                <div className="absolute inset-0 block md:hidden" style={{ background: "rgba(13,13,13,0.55)" }} />
              </>
            ) : (
              <>
                <img
                  src={a.heroImage}
                  alt=""
                  className="absolute right-0 top-0 h-full"
                  style={{ width: "60%", objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0d0d0d 38%, #0d0d0d 48%, rgba(13,13,13,0.75) 63%, transparent 100%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0d0d 0%, transparent 40%)" }} />
                <div className="absolute inset-0 block md:hidden" style={{ background: "rgba(13,13,13,0.55)" }} />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }} xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-grid-sa" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-grid-sa)" />
                </svg>
                <div className="absolute pointer-events-none" style={{ bottom: "-60px", left: "-40px", width: "380px", height: "380px", background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 70%)", borderRadius: "50%" }} />
              </>
            )}
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
            {/* Breadcrumb */}
            {a.slug !== "ai-document-intelligence" && (
              <div className="flex items-center gap-[8px] mb-[28px] text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Link href="/company/solution-accelerators" className="hover:text-white transition-colors" style={{ textDecoration: "none", color: "inherit" }}>Solution Accelerators</Link>
                <span>/</span>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>{a.name}</span>
              </div>
            )}

            <div className={`flex flex-col items-start ${a.slug === "ai-document-intelligence" ? "gap-[24px] max-w-[860px]" : "gap-[20px] max-w-[820px]"}`}>
              {/* Category badge */}
              {a.slug !== "ai-document-intelligence" && (
                <span
                  className="inline-flex items-center gap-[6px] text-[11px] font-black tracking-[1.8px] uppercase px-[12px] py-[5px] rounded-full"
                  style={{ background: `${a.categoryColor}18`, color: a.categoryColor, border: `1px solid ${a.categoryColor}40` }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: a.categoryColor, display: "inline-block" }} />
                  {a.category}
                </span>
              )}

              <h1 className="font-black text-white text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] md:text-[64px] md:leading-[72px] tracking-[-2px]">
                {a.name}
              </h1>

              {a.slug !== "ai-document-intelligence" && (
                <p className="text-[18px] font-semibold italic" style={{ color: a.categoryColor, marginTop: "-6px" }}>
                  {a.tagline}
                </p>
              )}

              <p className="text-[16px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "680px" }}>
                {a.shortDescription}
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-[12px] pt-[8px] flex-wrap">
                <Link
                  href="/contact"
                  className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[15px] px-[28px] h-[52px] rounded-[10px] inline-flex items-center transition-colors gap-[8px]"
                  style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
                >
                  Get a Demo
                  <Icon name="arrow-right" size={16} color="#fff" />
                </Link>
                <Link
                  href="/company/solution-accelerators"
                  className="bg-transparent font-semibold text-[15px] px-[28px] h-[52px] rounded-[10px] border border-white/25 hover:border-white/50 transition-colors inline-flex items-center gap-[8px] text-white"
                  style={{ textDecoration: "none" }}
                >
                  <Icon name="arrow-left" size={16} color="rgba(255,255,255,0.7)" />
                  All Accelerators
                </Link>
              </div>

              {/* Quick stats */}
              {a.slug !== "ai-document-intelligence" && (
                <div className="flex items-center gap-[12px] pt-[16px] flex-wrap">
                  {[
                    { label: "Time to production", value: a.timeSaved },
                    { label: "Technologies", value: a.techCount },
                    { label: "Active deployments", value: a.clientsUsing },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-[10px] rounded-[10px] px-[16px] py-[10px]"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      <div className="flex flex-col">
                        <span className="font-black text-white text-[18px] leading-[1.1]">{s.value}</span>
                        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Trusted Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Overview + Problem ── */}
        {a.slug === "ai-document-intelligence" ? (
          <>
            {/* S-A: Business Challenge */}
            <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fafafa" }}>
              <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, transparent, #ef5023, transparent)" }} />

              <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[12px] max-w-[680px]">
                  <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">THE CHALLENGE</p>
                  <h2 className="font-black text-[#0a0a0a] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] tracking-[-1.5px]">
                    Why document processing <span className="text-[#ef5023]">breaks at scale</span>
                  </h2>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "#666" }}>
                    Enterprises spend 40-60% of operational bandwidth manually processing documents, while off-the-shelf tools fail when layouts change or schemas evolve.
                  </p>
                </div>

                {/* Diagnostic rows - one container, separated by hairlines */}
                <div className="rounded-[20px] overflow-hidden" style={{ background: "#fff", border: "1px solid #e8e1d9", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                  {[
                    {
                      stat: "40-60%",
                      label: "ops bandwidth",
                      icon: "clock",
                      title: "High processing overhead",
                      desc: "Nearly half of enterprise operational bandwidth is consumed by manual document handling (invoices, contracts, forms) with zero automation.",
                    },
                    {
                      stat: "9–12 mo",
                      label: "build from scratch",
                      icon: "trending-up",
                      title: "Slow build cycles",
                      desc: "Building a custom extraction pipeline from scratch takes 9–12 months before a single document is processed in production.",
                    },
                    {
                      stat: "3–6×",
                      label: "tool fragmentation",
                      icon: "database",
                      title: "Knowledge silos",
                      desc: "Teams maintain multiple disconnected tools for document handling. Each one breaks when layouts drift, and nobody owns the failure.",
                    },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="challenge-row flex flex-col sm:flex-row"
                      style={{ borderTop: i > 0 ? "1px solid #e8e1d9" : "none" }}
                    >
                      {/* Stat column */}
                      <div
                        className="flex sm:flex-col items-center sm:justify-center gap-[8px] sm:gap-[6px] px-[28px] py-[20px] sm:py-[32px] flex-shrink-0 sm:w-[160px] relative overflow-hidden"
                        style={{ background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}
                      >
                        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(239,80,35,0.10) 0%, transparent 70%)" }} />
                        <span className="relative font-black text-[22px] sm:text-[24px] leading-[1] tracking-[-1px]" style={{ color: "#ef5023" }}>{c.stat}</span>
                        <span className="relative text-[10px] sm:text-center leading-[1.4] uppercase tracking-[1px] font-bold" style={{ color: "rgba(255,255,255,0.35)" }}>{c.label}</span>
                      </div>

                      {/* Content */}
                      <div className="flex items-start gap-[16px] px-[28px] py-[24px] sm:py-[28px] flex-1">
                        <div className="w-[38px] h-[38px] flex items-center justify-center flex-shrink-0 mt-[1px]">
                          <Icon name={c.icon} size={20} color="#ef5023" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h3 className="font-black text-[#0a0a0a] text-[16px] leading-[1.3]">{c.title}</h3>
                          <p className="text-[14px] leading-[1.7]" style={{ color: "#666" }}>{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* S-B: Solution Overview - full-width redesign */}
            <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fff" }}>
              {/* Grid paper pattern */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.09 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="sa-ov-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#ef5023" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sa-ov-grid)" />
              </svg>
              {/* Orange radial glow - top left */}
              <div className="absolute pointer-events-none" style={{ top: "-120px", left: "-80px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
              <div className="absolute right-0 top-0 bottom-0 pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, transparent, #ef5023, transparent)" }} />

              <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">

                {/* Header - full width */}
                <div className="flex flex-col gap-[12px] max-w-[580px]">
                  <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">SOLUTION OVERVIEW</p>
                  <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                    What the engine <span className="text-[#ef5023]">delivers</span>
                  </h2>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "#444" }}>
                    {a.shortDescription}
                  </p>
                </div>

                {/* Feature grid + Built with footer - one container */}
                <div
                  className="rounded-[20px] overflow-hidden"
                  style={{ border: "1px solid #e8e1d9", boxShadow: "0 16px 56px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {a.features.map((f, i) => (
                      <div
                        key={i}
                        className="sol-feat-row flex items-start gap-[16px] px-[28px] py-[24px]"
                        style={{
                          borderTop: Math.floor(i / 2) > 0 ? "1px solid #e8e1d9" : "none",
                          borderLeft: i % 2 === 1 ? "1px solid #e8e1d9" : "none",
                        }}
                      >
                        <div className="flex-shrink-0 mt-[2px]">
                          <Icon name={f.icon} size={18} color="#ef5023" />
                        </div>
                        <div className="flex flex-col gap-[3px]">
                          <span className="font-black text-[#0a0a0a] text-[15px] leading-[1.3]">{f.title}</span>
                          <span className="text-[13px] leading-[1.65]" style={{ color: "#888" }}>{f.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Built with - full-width footer row */}
                  <div
                    className="flex flex-wrap items-center gap-x-[20px] gap-y-[10px] px-[28px] py-[18px]"
                    style={{ borderTop: "1px solid #e8e1d9", background: "#fafafa" }}
                  >
                    <span className="text-[11px] font-bold tracking-[1.5px] uppercase flex-shrink-0" style={{ color: "#bbb" }}>Built with</span>
                    {["GPT-4o", "PaddleOCR", "LangChain", "FastAPI", "Kubernetes", "React"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[12px] font-semibold px-[10px] py-[4px] rounded-full"
                        style={{ background: "#fff", border: "1px solid #e8e1d9", color: "#555" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          </>
        ) : (
          <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fff" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sa-dot-ov" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.8" fill="#ef5023" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sa-dot-ov)" />
            </svg>
            <div className="absolute left-0 top-0 bottom-0 pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, transparent, #ef5023, transparent)" }} />
            <div className="relative max-w-[1320px] mx-auto grid md:grid-cols-2 gap-[56px] items-start">
              <div className="flex flex-col gap-[20px]">
                <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">OVERVIEW</p>
                <h2 className="font-black text-[#0a0a0a] text-[32px] leading-[40px] tracking-[-1.2px]">What it is</h2>
                <p className="text-[16px] leading-[1.75]" style={{ color: "#444" }}>{a.overview}</p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#888" }}>THE PROBLEM IT SOLVES</p>
                <h2 className="font-black text-[#0a0a0a] text-[32px] leading-[40px] tracking-[-1.2px]">Why teams need this</h2>
                <p className="text-[16px] leading-[1.75]" style={{ color: "#444" }}>{a.problemStatement}</p>
              </div>
            </div>
          </section>
        )}

        {/* ── Video Demo - ai-document-intelligence only ── */}
        {a.slug === "ai-document-intelligence" && (
          <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#0a0a0a" }}>
            {/* Spotlight glow behind frame */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div style={{ width: "900px", height: "500px", background: "radial-gradient(ellipse, rgba(239,80,35,0.10) 0%, rgba(239,80,35,0.03) 40%, transparent 70%)", borderRadius: "50%" }} />
            </div>
            {/* Subtle grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.035 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="vid-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#fff" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#vid-grid)" />
            </svg>

            <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[52px]">
              {/* Header */}
              <div className="flex flex-col gap-[12px] max-w-[640px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>PROTOTYPE DEMO</p>
                <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                  See it <span style={{ color: "#ef5023" }}>in action</span>
                </h2>
                <p className="text-[16px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Watch the AI Document Intelligence Engine process a real document, from raw upload to structured output in seconds.
                </p>
              </div>

              {/* Floating video frame */}
              <div className="relative">
                {/* Orange ground glow / reflection */}
                <div className="absolute pointer-events-none" style={{
                  bottom: "-32px", left: "10%", right: "10%", height: "60px",
                  background: "radial-gradient(ellipse, rgba(239,80,35,0.18) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }} />

                {/* Frame wrapper - elevated */}
                <div
                  style={{
                    borderRadius: "14px",
                    boxShadow: [
                      "0 0 0 1px rgba(255,255,255,0.11)",        /* rim highlight */
                      "0 2px 4px rgba(0,0,0,0.5)",               /* near shadow */
                      "0 20px 60px rgba(0,0,0,0.75)",            /* mid shadow */
                      "0 60px 120px rgba(0,0,0,0.6)",            /* deep shadow */
                      "0 0 80px rgba(239,80,35,0.08)",           /* orange aura */
                    ].join(", "),
                    transform: "translateY(-4px)",
                    position: "relative",
                  }}
                >
                  {/* Top highlight line */}
                  <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)", zIndex: 2, borderRadius: "2px" }} />

                  {/* Browser chrome */}
                  <div
                    className="flex items-center gap-[10px] px-[16px]"
                    style={{
                      background: "linear-gradient(to bottom, #252525, #1e1e1e)",
                      height: "46px",
                      borderRadius: "14px 14px 0 0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Traffic lights */}
                    <div className="flex items-center gap-[7px] flex-shrink-0">
                      <div className="w-[13px] h-[13px] rounded-full" style={{ background: "#ff5f57", boxShadow: "0 0 6px rgba(255,95,87,0.5)" }} />
                      <div className="w-[13px] h-[13px] rounded-full" style={{ background: "#febc2e", boxShadow: "0 0 6px rgba(254,188,46,0.4)" }} />
                      <div className="w-[13px] h-[13px] rounded-full" style={{ background: "#28c840", boxShadow: "0 0 6px rgba(40,200,64,0.4)" }} />
                    </div>
                    {/* URL bar */}
                    <div className="flex-1 flex justify-center px-[20px] hidden md:flex">
                      <div className="flex items-center gap-[8px] px-[14px] h-[28px] rounded-[6px] text-[12px]" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)", maxWidth: "420px", width: "100%" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        <span>demo.inapps.net / ai-document-intelligence</span>
                      </div>
                    </div>
                    {/* Demo badge */}
                    <span
                      className="text-[10px] font-bold px-[10px] py-[4px] rounded-full flex-shrink-0 flex items-center gap-[5px]"
                      style={{ background: "rgba(239,80,35,0.18)", color: "#ef5023", border: "1px solid rgba(239,80,35,0.35)" }}
                    >
                      <span className="w-[5px] h-[5px] rounded-full inline-block animate-pulse" style={{ background: "#ef5023" }} />
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Video */}
                  <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000", borderRadius: "0 0 14px 14px", overflow: "hidden" }}>
                    <video
                      controls
                      className="absolute inset-0 w-full h-full object-cover"
                      poster={a.heroImage}
                      style={{ background: "#000" }}
                    >
                      <source src="/Media/Video/ai-document-demo.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ── Idea → POC/MVP - ai-document-intelligence only ── */}
        {a.slug === "ai-document-intelligence" && (
          <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fff" }}>
            <div className="relative max-w-[1320px] mx-auto flex flex-col md:flex-row gap-[48px] md:gap-[64px] md:items-start">

              {/* Left: heading + promise + CTA */}
              <div className="flex flex-col gap-[32px] md:max-w-[360px] flex-shrink-0">
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">SPEED TO MARKET</p>
                  <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                    From idea to
                    <span className="flex items-center gap-[10px]" style={{ paddingLeft: "48px", marginTop: "2px" }}>
                      <span
                        className="inline-flex items-center justify-center flex-shrink-0 rounded-full"
                        style={{
                          width: "30px",
                          height: "30px",
                          background: "#ef5023",
                          lineHeight: 1,
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ color: "#ef5023" }}>POC / MVP</span>
                    </span>
                  </h2>
                  <p className="text-[16px] leading-[1.7]" style={{ color: "#666" }}>
                    We don't start with slide decks. We configure, connect, and ship a working prototype you can demo to stakeholders in weeks, not quarters.
                  </p>
                </div>

                {/* Promise card */}
                <div
                  className="rounded-[20px] overflow-hidden flex"
                  style={{
                    border: "1px solid rgba(239,80,35,0.2)",
                    boxShadow: "0 8px 32px rgba(239,80,35,0.12), 0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Orange left panel - the number */}
                  <div
                    className="flex flex-col items-center justify-center gap-[2px] px-[20px] py-[20px] flex-shrink-0"
                    style={{ background: "#ef5023", minWidth: "100px" }}
                  >
                    <span className="font-black leading-none tracking-[-2px] text-white" style={{ fontSize: "42px" }}>2–4</span>
                    <span className="font-bold text-[11px] tracking-[2px] uppercase text-white" style={{ opacity: 0.8 }}>weeks</span>
                  </div>
                  {/* Dark right panel - context */}
                  <div
                    className="flex flex-col justify-center gap-[5px] px-[18px] py-[18px] relative overflow-hidden flex-1"
                    style={{ background: "#0a0a0a" }}
                  >
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at right center, rgba(239,80,35,0.07) 0%, transparent 65%)" }} />
                    <span className="relative font-black text-[15px] tracking-[-0.2px] text-white leading-[1.25]">to POC / MVP</span>
                    <span className="relative text-[11px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.38)" }}>Full production in ~12 wks</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-[8px] px-[24px] h-[48px] rounded-[10px] font-bold text-[15px] text-white w-fit"
                  style={{ background: "#ef5023", boxShadow: "0 4px 20px rgba(239,80,35,0.3)", textDecoration: "none" }}
                >
                  Book a Scoping Call
                  <Icon name="arrow-right" size={15} color="#fff" />
                </Link>
              </div>

              {/* Right: sprint brief table */}
              <div className="flex-1 overflow-x-auto">
              <div
                className="rounded-[20px] overflow-hidden"
                style={{
                  minWidth: "320px",
                  border: "1px solid #e8e1d9",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Table header */}
                <div
                  className="grid px-[28px] py-[15px]"
                  style={{
                    gridTemplateColumns: "140px 1fr",
                    background: "#ef5023",
                    borderBottom: "none",
                  }}
                >
                  <span className="text-[13px] font-bold tracking-[1.5px] uppercase text-white">TIMELINE</span>
                  <span className="text-[13px] font-bold tracking-[1.5px] uppercase text-white">MILESTONE</span>
                </div>

                {/* Milestone rows */}
                {[
                  {
                    week: "Week 1",
                    title: "Idea & Scoping",
                    desc: "We map your document types, data targets, and integration endpoints. A working spec in 5 days, no slide decks.",
                    final: false,
                  },
                  {
                    week: "Week 1–2",
                    title: "AI Pipeline Config",
                    desc: "OCR, extraction models, and classification rules configured for your exact document schemas and edge cases.",
                    final: false,
                  },
                  {
                    week: "Week 2–3",
                    title: "Integration & Testing",
                    desc: "Connect to your ERP, CRM, or cloud storage. Validated against real documents from your environment.",
                    final: false,
                  },
                  {
                    week: "Week 3–4",
                    title: "POC / MVP Live",
                    desc: "A working deployment you can demo to stakeholders, or push directly into production.",
                    final: true,
                  },
                ].map((step, i, arr) => (
                  <div
                    key={i}
                    className="grid px-[28px] py-[24px]"
                    style={{
                      gridTemplateColumns: "140px 1fr",
                      borderBottom: i < arr.length - 1 ? "1px solid #e8e1d9" : "none",
                      background: step.final ? "rgba(239,80,35,0.03)" : "#fff",
                    }}
                  >
                    {/* Week pill */}
                    <div className="flex items-start pt-[3px]">
                      <span
                        className="text-[11px] font-black tracking-[0.3px] px-[10px] py-[4px] rounded-full whitespace-nowrap"
                        style={{
                          background: step.final ? "#ef5023" : "rgba(239,80,35,0.08)",
                          color: step.final ? "#fff" : "#ef5023",
                        }}
                      >
                        {step.week}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-[6px]">
                      <div className="flex items-center gap-[8px]">
                        {step.final && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                            <circle cx="8" cy="8" r="7.5" fill="#ef5023" />
                            <path d="M4.5 8.2l2.3 2.3 4.2-4.8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        <h3 className="font-black text-[#0a0a0a] text-[16px] leading-[1.3]">{step.title}</h3>
                      </div>
                      <p className="text-[14px] leading-[1.7]" style={{ color: "#666" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>

            </div>
          </section>
        )}

        {/* ── Key Features ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fff" }}>
          <div className="absolute pointer-events-none" style={{ top: "-80px", right: "-60px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[14px] max-w-[640px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">CAPABILITIES</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                What's <span className="text-[#ef5023]">included</span>
              </h2>
              <p className="text-[16px] leading-[1.75]" style={{ color: "#555" }}>
                Six production-ready modules built for scale. Activate selectively based on your document workflow and integration needs.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
              className="sa-feat-grid"
            >
              {a.features.map((f, i) => (
                <div
                  key={i}
                  className="sa-feat-card flex flex-col gap-[16px] rounded-[20px] p-[28px] relative overflow-hidden"
                  style={{ background: "#fafaf8", border: "1px solid #ddd5cc", boxShadow: "0 4px 24px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" }}
                >
                  {/* Dot pattern corner */}
                  <div className="absolute top-0 right-0 pointer-events-none" style={{
                    width: "120px", height: "120px",
                    backgroundImage: `radial-gradient(circle, #ef502330 1.5px, transparent 1.5px)`,
                    backgroundSize: "14px 14px",
                    WebkitMaskImage: "radial-gradient(ellipse at top right, black 10%, transparent 72%)",
                    maskImage: "radial-gradient(ellipse at top right, black 10%, transparent 72%)",
                  }} />
                  {/* Accent bar */}
                  <div className="absolute left-0 top-[24px] bottom-[24px] rounded-r-full pointer-events-none" style={{ width: "3px", background: "linear-gradient(to bottom, #ef5023, #ef502380)" }} />

                  <div
                    className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "#ef502315" }}
                  >
                    <Icon name={f.icon} size={20} color="#ef5023" />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="font-black text-[#0a0a0a] text-[16px] leading-[1.3]">{f.title}</h3>
                    <p className="text-[14px] leading-[1.7]" style={{ color: "#666" }}>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="relative px-[16px] md:px-[40px] py-[48px] md:py-[64px] overflow-hidden" style={{ background: "#0a0a0a" }}>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[36px]">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[16px]">
              <div className="flex flex-col gap-[12px]">
                <p className="text-[11px] font-bold tracking-[2.5px] uppercase" style={{ color: "#ef5023" }}>TECHNOLOGY STACK</p>
                <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
                  Built with <span style={{ color: "#ef5023" }}>production-grade</span> tech
                </h2>
              </div>
            </div>

            {/* Editorial rows */}
            <div className="flex flex-col">
              {a.techCategories.map((cat, i) => {
                const featured = i === 0;
                return (
                  <div
                    key={i}
                    className="sa-tech-row flex flex-col md:flex-row md:items-start gap-[16px] md:gap-0 py-[24px] relative"
                    style={{ borderTop: `1px solid ${featured ? "rgba(239,80,35,0.20)" : "rgba(255,255,255,0.08)"}` }}
                  >
                    {/* Category name column */}
                    <div className="flex-shrink-0 md:w-[220px] flex flex-col gap-[6px] md:pt-[2px]">
                      <span
                        className="font-black tracking-[-0.5px] leading-none"
                        style={{
                          fontSize: "20px",
                          color: featured ? "#ef5023" : "#ffffff",
                        }}
                      >
                        {cat.label}
                      </span>
                    </div>

                    {/* Rule line (desktop) */}
                    <div
                      className="hidden md:block self-start mt-[12px] mx-[28px] flex-shrink-0"
                      style={{
                        width: "28px",
                        height: "2px",
                        background: featured ? "#ef5023" : "rgba(255,255,255,0.2)",
                        borderRadius: "2px",
                      }}
                    />

                    {/* Chips */}
                    <div className="flex flex-wrap gap-[8px] flex-1 md:pt-[2px]">
                      {cat.items.map((tech, j) => (
                        <span
                          key={j}
                          className="sa-tech-chip inline-flex items-center text-[13px] font-semibold px-[14px] py-[7px] rounded-[8px]"
                          style={{
                            background: featured ? "rgba(239,80,35,0.12)" : "rgba(255,255,255,0.06)",
                            border: featured ? "1px solid rgba(239,80,35,0.28)" : "1px solid rgba(255,255,255,0.12)",
                            color: featured ? "#ffffff" : "rgba(255,255,255,0.78)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Bottom rule */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
            </div>

          </div>
        </section>

        {/* ── Business Outcomes ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fff" }}>
          {/* Dot grid pattern */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.14 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sa-out-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.6" fill="#ef5023" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sa-out-dots)" />
          </svg>
          {/* Orange radial glow - bottom right */}
          <div className="absolute pointer-events-none" style={{ bottom: "-100px", right: "-80px", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>PROVEN RESULTS</p>
                <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                  Business <span style={{ color: "#ef5023" }}>outcomes</span>
                </h2>
              </div>
            </div>

            {/* Scoreboard */}
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ border: "1px solid #e5e5e5", boxShadow: "0 16px 56px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)" }}
            >
              {/* Orange top stripe */}
              <div style={{ height: "3px", background: "linear-gradient(to right, #ef5023 0%, #ff7a4d 35%, rgba(239,80,35,0.12) 100%)" }} />

              {/* Stats row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {a.outcomes.map((o, i) => (
                  <div
                    key={i}
                    className="sa-outcome-cell flex flex-col gap-[20px] px-[20px] sm:px-[32px] py-[28px] sm:py-[40px] relative"
                    style={{
                      borderRight: i < a.outcomes.length - 1 ? "1px solid #e8e1d9" : "none",
                      borderTop: i >= 2 ? "1px solid #e8e1d9" : "none",
                    }}
                  >
                    {/* Number */}
                    <span
                      className="font-black leading-none tracking-[-2px]"
                      style={{
                        fontSize: "clamp(32px, 3.5vw, 44px)",
                        color: i === 0 ? "#ef5023" : "#0a0a0a",
                      }}
                    >
                      {o.metric}
                    </span>

                    {/* Label + desc */}
                    <div className="flex flex-col gap-[5px]">
                      <span className="font-bold text-[14px] leading-[1.35]" style={{ color: "#0a0a0a" }}>
                        {o.label}
                      </span>
                      <span className="text-[12px] leading-[1.5]" style={{ color: "#aaa" }}>
                        {o.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ── How it Works ── */}
        {a.slug !== "ai-document-intelligence" && (
        <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#fafafa" }}>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[12px] max-w-[640px]">
              <p className="text-[#ef5023] text-[11px] font-bold tracking-[2px] uppercase">ENGAGEMENT MODEL</p>
              <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
                From kickoff to <span className="text-[#ef5023]">production</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-[0px] relative">
              {/* connector line */}
              <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-[2px] pointer-events-none" style={{ background: "linear-gradient(to right, #ef5023, rgba(239,80,35,0.2))" }} />
              {[
                { step: "01", title: "Discovery", desc: "1-week deep-dive into your stack, requirements, and compliance constraints." },
                { step: "02", title: "Configuration", desc: "We configure the accelerator to your domain: schemas, integrations, branding." },
                { step: "03", title: "Integration", desc: "Wire the accelerator to your existing systems: ERP, CRM, cloud, or on-prem." },
                { step: "04", title: "Go-Live", desc: "Production deploy with handover docs, runbooks, and 30-day hypercare." },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-start gap-[14px] p-[24px]">
                  <div
                    className="w-[44px] h-[44px] rounded-full flex items-center justify-center font-black text-[14px] flex-shrink-0 relative z-[1]"
                    style={{ background: i === 0 ? "#ef5023" : "#fff", color: i === 0 ? "#fff" : "#ef5023", border: "2px solid #ef5023", boxShadow: "0 0 0 4px #fafafa" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-black text-[#0a0a0a] text-[17px]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.7]" style={{ color: "#666" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ── Related Accelerators ── */}
        {related.length > 0 && (
          <section className="relative px-[16px] md:px-[40px] py-[70px] md:py-[96px] overflow-hidden" style={{ background: "#0d0d0d" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sa-rel-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sa-rel-grid)" />
            </svg>

            <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[40px]">

              {/* Header */}
              <div className="flex items-end justify-between gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>MORE ACCELERATORS</p>
                  <h2 className="font-black text-white text-[32px] leading-[40px] tracking-[-1.2px]">
                    Explore <span style={{ color: "#ef5023" }}>others</span>
                  </h2>
                </div>
                <Link
                  href="/company/solution-accelerators"
                  className="hidden sm:inline-flex items-center gap-[6px] font-semibold text-[13px] transition-colors"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  View all <Icon name="arrow-right" size={13} color="currentColor" />
                </Link>
              </div>

              {/* Cards grid */}
              <div className="grid md:grid-cols-3 gap-[20px]">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/company/solution-accelerators/${r.slug}`}
                    className="sa-rel-card group flex flex-col rounded-[20px] overflow-hidden"
                    style={{
                      background: "#161616",
                      border: "1px solid rgba(255,255,255,0.12)",
                      textDecoration: "none",
                    }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden flex-shrink-0" style={{ height: "196px" }}>
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)" }} />
                      {/* Category chip */}
                      <span
                        className="absolute bottom-[16px] left-[16px] inline-flex items-center gap-[6px] text-[10px] font-bold tracking-[1.5px] uppercase px-[10px] py-[5px] rounded-full"
                        style={{
                          background: "rgba(10,10,10,0.55)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.14)",
                          color: "#ffffff",
                        }}
                      >
                        <span
                          className="flex-shrink-0 rounded-full"
                          style={{ width: "6px", height: "6px", background: r.categoryColor }}
                        />
                        {r.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col gap-[12px] p-[24px] flex-1">
                      <h3 className="font-black text-white text-[16px] leading-[1.35] group-hover:text-[#ef5023] transition-colors">
                        {r.name}
                      </h3>
                      <p className="text-[13px] leading-[1.65] flex-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {r.shortDescription.slice(0, 96)}…
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-[8px]" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>
                          {r.timeSaved} to production
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon name="arrow-right" size={15} color="#ef5023" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="relative px-[16px] md:px-[40px] py-[56px] md:py-[80px] overflow-hidden" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Grid pattern on section background */}
          <div className="max-w-[1320px] mx-auto">
            <div
              className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-[32px] rounded-[20px] px-[36px] md:px-[52px] py-[40px] md:py-[48px]"
              style={{ background: "linear-gradient(135deg, #ef5023 0%, #d94010 100%)" }}
            >
              <div className="absolute pointer-events-none" style={{ top: "-60px", right: "-40px", width: "280px", height: "280px", background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
              <div className="absolute pointer-events-none" style={{ bottom: "-40px", left: "20%", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />

              <div className="relative flex flex-col gap-[10px] max-w-[560px]">
                <h3 className="font-black text-white text-[26px] leading-[1.25] tracking-[-0.5px]">
                  Ready to accelerate your {a.category} project?
                </h3>
                <p className="text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Talk to an InApps engineer. We'll show you a live demo, scope your customisation needs, and give you a time-to-production estimate, no commitment required.
                </p>
              </div>

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-[12px] flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-[8px] px-[28px] h-[50px] rounded-[10px] font-bold text-[15px] text-[#ef5023] whitespace-nowrap transition-all hover:brightness-95"
                  style={{ background: "#fff", textDecoration: "none" }}
                >
                  Book a Demo
                  <Icon name="arrow-right" size={15} color="#ef5023" />
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-[6px] px-[28px] h-[50px] rounded-[10px] font-bold text-[15px] text-white whitespace-nowrap transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        @media (max-width: 767px) { .sa-feat-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 768px) and (max-width: 1023px) { .sa-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        .sa-feat-card { transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s; }
        .sa-feat-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.13), 0 4px 12px rgba(0,0,0,0.07) !important; }
        .sa-rel-card { transition: border-color .25s, transform .25s, box-shadow .25s; }
        .sa-rel-card:hover { border-color: rgba(239,80,35,0.35) !important; transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,80,35,0.25); }
        .challenge-row { transition: background .18s; cursor: default; }
        .challenge-row:hover { background: rgba(239,80,35,0.03) !important; }
        .sol-feat-row { transition: background .18s; }
        .sol-feat-row:hover { background: rgba(239,80,35,0.03) !important; }
        .sa-tech-row { transition: background .2s; }
        .sa-tech-chip { transition: filter .15s; cursor: default; }
        .sa-tech-chip:hover { filter: brightness(1.2); }
        .sa-outcome-cell { transition: background .2s; background: #fff; }
        .sa-outcome-cell:hover { background: #fdf9f7 !important; }
      `}</style>

      <Footer />
    </div>
  );
}
