"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

export default function SolutionAcceleratorsPage() {

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
                Solution <span className="text-[#ef5023]">Accelerators</span>
              </h1>

              <p className="text-[rgba(255,255,255,0.75)] text-[16px] leading-[28px]" style={{ marginTop: "-8px" }}>
                Industry-leading organizations recognize InApps Technology for engineering excellence, client satisfaction, and consistent delivery across global markets.
              </p>

              <div className="flex items-center gap-[12px] pt-[4px]">
                <a
                  href="#awards"
                  className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                  style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
                >
                  View Awards
                </a>
                <Link
                  href="/company/client-stories"
                  className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                  style={{ textDecoration: "none" }}
                >
                  Client Stories
                </Link>
              </div>

              {/* Rating badges */}
              <div className="flex items-center gap-[12px] pt-[12px]">
                {[
                  { score: "4.9/5", platform: "Clutch.co", reviews: "48+ reviews" },
                  { score: "4.8/5", platform: "GoodFirms", reviews: "32+ reviews" },
                  { score: "4.7/5", platform: "Google", reviews: "60+ reviews" },
                ].map((r) => (
                  <div
                    key={r.platform}
                    className="flex items-center gap-[10px] rounded-[10px] px-[14px] py-[10px]"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <div className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.15)" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3 6.2 6.8 1-4.9 4.8 1.2 6.8L12 17.3l-6.1 3.5 1.2-6.8L2.2 9.2l6.8-1L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-white text-[18px] leading-[1.1]">{r.score}</span>
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{r.platform} · {r.reviews}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />


      </main>
      <Footer />
    </div>
  );
}
