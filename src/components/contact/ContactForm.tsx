// src/components/contact/ContactForm.tsx
"use client";

import { useState } from "react";

type FormState = {
  email: string;
  name: string;
  phone: string;
  service: string;
  message: string;
};

const INITIAL: FormState = { email: "", name: "", phone: "", service: "", message: "" };

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isFormValid(f: FormState) {
  return (
    isValidEmail(f.email) &&
    f.name.trim().length >= 2 &&
    f.phone.trim().length >= 7 &&
    f.service !== "" &&
    f.message.trim().length >= 10
  );
}


export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [showPopup, setShowPopup] = useState(false);

  const valid = isFormValid(form);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setShowPopup(true);
  }

  function handleClose() {
    setShowPopup(false);
    setForm(INITIAL);
  }

  const inputStyle: React.CSSProperties = {
    background: "#f8f8f8",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    height: "48px",
    padding: "0 14px",
    fontSize: "15px",
    color: "#111",
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 600,
    color: "#ef5023",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <>
      <section
        id="contact-form"
        className="px-[16px] md:px-[40px] pt-[120px] md:pt-[200px] pb-[48px] md:pb-[80px]"
        style={{ background: "#fff", position: "relative", overflow: "hidden" }}
      >
        {/* Glow top-left */}
        <div style={{
          position: "absolute", top: "-160px", left: "-160px",
          width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,80,35,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Glow top-right */}
        <div style={{
          position: "absolute", top: "-120px", right: "-120px",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Glow bottom-center */}
        <div style={{
          position: "absolute", bottom: "-140px", left: "50%",
          transform: "translateX(-50%)",
          width: "900px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,80,35,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div
          className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[24px] lg:gap-[40px] items-stretch"
        >
          {/* ── Left: Dark Info Panel ── */}
          <div
            className="px-[20px] py-[28px] lg:px-[44px] lg:pt-[40px] lg:pb-[32px]"
            style={{
              background: "#0d0d0d",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div style={{
              position: "absolute", top: "-60px", left: "-60px",
              width: "280px", height: "280px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(239,80,35,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Brand */}
            <div style={{ position: "relative" }}>
              <div style={{ marginBottom: "16px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span style={{
                  fontSize: "13px",
                  fontWeight: 900,
                  color: "#fff",
                  background: "#ef5023",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "4px",
                }}>
                  INAPPS
                </span>
                <span style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "transparent",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  WebkitTextStroke: "1px #ef5023",
                }}>
                  TECHNOLOGY
                </span>
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: 900, lineHeight: 1.3, margin: 0, color: "#fff" }}>
                Innovate with InApps:<br />
                <span style={{ color: "#ef5023" }}>Empowering</span> Your Vision
              </h2>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "linear-gradient(to right, #ef5023, transparent)", marginTop: "36px" }} />

            {/* Bullet list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "19px", position: "relative", marginTop: "20px", paddingBottom: "8px" }}>
              {[
                {
                  title: "Offshore Development Excellence",
                  desc: "Tailored, cost-effective development with top-tier global talent.",
                },
                {
                  title: "Elite IT Professionals",
                  desc: "Access to the top 5% of IT experts for seamless staff augmentation.",
                },
                {
                  title: "Cutting-Edge Mobile & Web Apps",
                  desc: "Delivering unparalleled user experiences with state-of-the-art technology.",
                },
                {
                  title: "Comprehensive Quality Assurance",
                  desc: "Ensuring robust, reliable performance through rigorous testing protocols.",
                },
                {
                  title: "AI & Data Science Leadership",
                  desc: "Harnessing advanced analytics and AI for actionable insights and strategic growth.",
                },
                {
                  title: "Strategic Technology Consulting",
                  desc: "Bridging business goals and technology execution with expert advisory and roadmap planning.",
                },
              ].map(({ title, desc }) => (
                <div key={title} style={{ display: "flex", gap: "14px", alignItems: "flex-start", flex: 1 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "8px", flexShrink: 0,
                    background: "rgba(239,80,35,0.12)",
                    border: "1px solid rgba(239,80,35,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: "1px",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef5023" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "3px" }}>{title}</div>
                    <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: White Form ── */}
          <div
            className="p-[20px] lg:p-[40px]"
            style={{
              background: "#fff",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
              borderTop: "4px solid #ef5023",
            }}
          >
            <div>
              <h3 style={{ fontSize: "25px", fontWeight: 800, color: "#111", margin: 0 }}>
                <span style={{
                  borderBottom: "3px solid #ef5023",
                  paddingBottom: "2px",
                }}>
                  Tell us
                </span>{" "}about your project
              </h3>
              <p style={{ fontSize: "14px", color: "#111", margin: "6px 0 0" }}>
                Schedule a quick call with us and get a{" "}
                <span style={{ color: "#ef5023", fontWeight: 600 }}>unique proposal</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Business Email */}
              <div>
                <label htmlFor="contact-email" style={labelStyle}>Business Email <span style={{ color: "#ef5023" }}>*</span></label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Your Name */}
              <div>
                <label htmlFor="contact-name" style={labelStyle}>Your Name <span style={{ color: "#ef5023" }}>*</span></label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" style={labelStyle}>Phone number/WhatsApp <span style={{ color: "#ef5023" }}>*</span></label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  style={inputStyle}
                  required
                />
              </div>

              {/* Service radio */}
              <div>
                <label style={labelStyle}>Select Your Service <span style={{ color: "#ef5023" }}>*</span></label>
                <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
                  {["Dedicated Teams", "Staff Augmentation", "Project Based"].map((s) => (
                    <label
                      key={s}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#333",
                      }}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s}
                        checked={form.service === s}
                        onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                        style={{ accentColor: "#ef5023", width: "16px", height: "16px" }}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>How We Can Help? <span style={{ color: "#ef5023" }}>*</span></label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us about your project, goals, and timeline..."
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  rows={5}
                  style={{
                    ...inputStyle,
                    height: "auto",
                    padding: "12px 14px",
                    resize: "vertical",
                    lineHeight: 1.6,
                  }}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!valid}
                style={{
                  background: valid ? "#ef5023" : "#ccc",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "10px",
                  height: "55px",
                  cursor: valid ? "pointer" : "not-allowed",
                  transition: "background 0.2s",
                  boxShadow: valid ? "0 8px 24px rgba(239,80,35,0.3)" : "none",
                }}
              >
                SUBMIT
              </button>
            </form>

            {/* ── Our Achievements ── */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-[8px] pt-[24px]"
              style={{ borderTop: "1px solid #f0f0f0" }}
            >
              {[
                { num: "750+", label: "Projects delivered" },
                { num: "500+", label: "In-House Developers" },
                { num: "98%", label: "Clients Satisfied" },
                { num: "15+", label: "Countries Served" },
              ].map(({ num, label }) => (
                <div key={label} style={{
                  textAlign: "center",
                  padding: "14px 8px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, rgba(239,80,35,0.08) 0%, rgba(239,80,35,0.03) 100%)",
                }}>
                  <div style={{ fontSize: "24px", fontWeight: 900, color: "#ef5023", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "11px", color: "#555", marginTop: "5px", lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="px-[16px] md:px-[40px] py-[48px] md:py-[80px]" style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
        {/* Wave background pattern */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C200,20 400,100 600,60 S1000,20 1400,60 S1800,100 2000,60" fill="none" stroke="#ef5023" strokeWidth="1.5" opacity="0.18"/>
          <path d="M0,100 C200,60 400,140 600,100 S1000,60 1400,100 S1800,140 2000,100" fill="none" stroke="#ef5023" strokeWidth="1.5" opacity="0.14"/>
          <path d="M0,140 C200,100 400,180 600,140 S1000,100 1400,140 S1800,180 2000,140" fill="none" stroke="#ef5023" strokeWidth="1.2" opacity="0.10"/>
          <path d="M0,300 C300,250 600,350 900,300 S1400,250 1800,300 S2000,350 2400,300" fill="none" stroke="#ef5023" strokeWidth="1.2" opacity="0.07"/>
          <path d="M0,340 C300,290 600,390 900,340 S1400,290 1800,340 S2000,390 2400,340" fill="none" stroke="#ef5023" strokeWidth="1" opacity="0.05"/>
          <path d="M0,380 C300,330 600,430 900,380 S1400,330 1800,380 S2000,430 2400,380" fill="none" stroke="#ef5023" strokeWidth="0.8" opacity="0.03"/>
        </svg>

        <div style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "48px" }}>
          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
            <p style={{ color: "#ef5023", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", margin: 0 }}>Recognition</p>
            <h2 style={{ fontWeight: 900, color: "#111", fontSize: "36px", lineHeight: "44px", letterSpacing: "-1.5px", margin: 0 }}>
              Award-winning <span style={{ color: "#ef5023" }}>engineering partner</span>
            </h2>
            <p style={{ color: "#666", fontSize: "16px", maxWidth: "480px", margin: 0 }}>Recognized by the world's leading B2B review and research platforms</p>
          </div>

          {/* Marquee */}
          <div style={{ position: "relative", overflowX: "hidden", overflowY: "visible", paddingTop: "40px", paddingBottom: "40px", marginTop: "-40px", marginBottom: "-40px" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", pointerEvents: "none", zIndex: 10, background: "linear-gradient(to right, #fff, transparent)" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", pointerEvents: "none", zIndex: 10, background: "linear-gradient(to left, #fff, transparent)" }} />
            <div className="flex gap-[12px] animate-awards-marquee w-max">
              {[...Array(2)].flatMap(() => [
                "/Media/Award/2026-05-29_170835.png",
                "/Media/Award/2026-05-29_170930.png",
                "/Media/Award/2026-05-29_170943.png",
                "/Media/Award/2026-05-29_170954.png",
                "/Media/Award/2026-05-29_171006.png",
                "/Media/Award/2026-05-29_171019.png",
                "/Media/Award/2026-05-29_171030.png",
                "/Media/Award/2026-05-29_171041.png",
                "/Media/Award/2026-05-29_171051.png",
                "/Media/Award/2026-05-29_171115.png",
                "/Media/Award/2026-05-29_171127.png",
              ]).map((src, i) => (
                <div
                  key={i}
                  style={{ width: "120px", height: "120px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", padding: "12px" }}
                >
                  <img src={src} alt={`Award ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "8px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Thank You Popup ── */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={handleClose}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "48px",
              maxWidth: "480px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Checkmark icon */}
            <div
              style={{
                width: 64,
                height: 64,
                background: "rgba(239,80,35,0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14l6 6 12-12"
                  stroke="#ef5023"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 style={{ fontSize: "28px", fontWeight: 900, color: "#111", margin: "0 0 12px" }}>
              Thank You!
            </h3>
            <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.6, margin: "0 0 28px" }}>
              We&apos;ve received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              style={{
                background: "#ef5023",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                borderRadius: "10px",
                padding: "12px 40px",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(239,80,35,0.3)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}