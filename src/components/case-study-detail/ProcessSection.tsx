"use client";
// src/components/case-study-detail/ProcessSection.tsx
import { useState, useEffect, useRef } from "react";
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "teamStructure" | "teamImage">;

export default function ProcessSection({ teamStructure, teamImage }: Props) {
  const [openIndex, setOpenIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active = teamStructure[openIndex];

  // Intersection observer — fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-[16px] md:px-[40px] py-[48px] md:py-[70px] overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          top: -200, left: -200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,73,41,0.04) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-[1320px] mx-auto relative"
        style={{
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[64px] items-center">

          {/* Left: sticky */}
          <div className="lg:sticky lg:top-[24px]" style={{ paddingTop: 0 }}>
            <p
              className="text-[11px] font-bold tracking-[2px] uppercase mb-[10px]"
              style={{
                color: "#ef5023",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
              }}
            >
              Delivery Approach
            </p>

            <h2
              className="font-black text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-1.5px] mb-[14px]"
              style={{
                color: "#0a0a0a",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease 0.18s, transform 0.5s ease 0.18s",
              }}
            >
              The Experts Behind It
            </h2>

            <p
              className="text-[14px] leading-[1.8] mb-[40px]"
              style={{
                color: "#888",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease 0.26s, transform 0.5s ease 0.26s",
              }}
            >
              Every successful delivery starts with the right people. InApps assembled a dedicated, cross-functional team structured for speed, accountability, and long-term partnership.
            </p>

            {/* Active role card */}
            <div
              key={openIndex}
              className="rounded-[14px] p-[24px]"
              style={{
                marginBottom: 40,
                animation: "fadeSlideIn 0.3s cubic-bezier(0.4,0,0.2,1)",
                background: "linear-gradient(135deg, rgba(255,73,41,0.06) 0%, rgba(255,73,41,0.02) 100%)",
                border: "1px solid rgba(255,73,41,0.14)",
                boxShadow: "0 4px 20px rgba(255,73,41,0.07)",
              }}
            >
              {/* Red top accent line */}
              <div style={{ width: 36, height: 3, background: "#FF4929", borderRadius: 2, marginBottom: 16 }} />

              <div className="flex items-center gap-[12px] mb-[12px]">
                <span className="text-[18px] font-black tracking-[-0.5px]" style={{ color: "#0a0a0a" }}>
                  {active.role}
                </span>
                <span
                  className="text-[11px] font-bold tracking-[1px] uppercase px-[10px] py-[4px] rounded-full"
                  style={{
                    background: "rgba(255,73,41,0.1)",
                    color: "#FF4929",
                    border: "1px solid rgba(255,73,41,0.2)",
                  }}
                >
                  {active.count === 1 ? "1 person" : `${active.count} people`}
                </span>
              </div>

              <p className="text-[14px] leading-[1.85]" style={{ color: "#555" }}>
                {active.description}
              </p>
            </div>

            {/* Image */}
            {teamImage && (
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  aspectRatio: "16/9",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.14)",
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.04)";
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={teamImage}
                  alt="Team"
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)", transform: "scale(1)", display: "block" }}
                />
                {/* Dark gradient bottom */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)" }} />
                {/* Red left stripe */}
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 4, background: "#FF4929" }} />
                {/* Bottom label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.5px" }}>InApps Delivery Team</span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Built to deliver</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: accordion */}
          <div
            className="flex flex-col rounded-[16px] px-[16px] sm:px-[28px]"
            style={{
              paddingTop: 40,
              paddingBottom: 40,
              background: "#faf9f8",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.12), 0 2px 12px rgba(0,0,0,0.06)",
              alignSelf: "center",
              justifyContent: "space-evenly",
              marginTop: 0,
            }}
          >
            {teamStructure.map((member, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(16px)",
                    transition: `opacity 0.5s ease ${0.2 + i * 0.07}s, transform 0.5s ease ${0.2 + i * 0.07}s`,
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(i)}
                    className="w-full flex items-center py-[23px] text-left"
                    style={{
                      background: "none", border: "none", cursor: "pointer", gap: 0,
                      borderRadius: 8,
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = "rgba(255,73,41,0.03)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "none"; }}
                  >
                    {/* Circle badge */}
                    <div
                      className="flex-shrink-0 flex items-center justify-center font-black text-[12px]"
                      style={{
                        width: 38, height: 38,
                        borderRadius: "50%",
                        background: isOpen ? "#FF4929" : "#ffffff",
                        border: isOpen ? "none" : "1.5px solid rgba(255,73,41,0.25)",
                        color: isOpen ? "#fff" : "#FF4929",
                        boxShadow: isOpen ? "0 4px 16px rgba(255,73,41,0.3)" : "none",
                        transition: "background 0.25s ease, box-shadow 0.25s ease, border 0.25s ease",
                        marginRight: 14,
                      }}
                    >
                      ×{member.count}
                    </div>

                    {/* Role name */}
                    <span
                      className="flex-1 text-[15px] leading-[1.3]"
                      style={{
                        color: isOpen ? "#0a0a0a" : "#888",
                        fontWeight: isOpen ? 700 : 500,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {member.role}
                    </span>

                    {/* Arrow */}
                    <span
                      style={{
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20, height: 20,
                        borderRadius: "50%",
                        background: isOpen ? "#FF4929" : "transparent",
                        border: isOpen ? "none" : "1px solid rgba(255,73,41,0.25)",
                        transition: "background 0.25s ease, border 0.25s ease",
                      }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                        style={{
                          color: isOpen ? "#fff" : "#FF4929",
                          transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
                          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.25s ease",
                        }}
                      >
                        <path d="M1.5 4h5M4 1.5L6.5 4 4 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}