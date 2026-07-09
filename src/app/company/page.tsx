import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";

export const metadata: Metadata = {
  title: "InApps Technology: Company Overview, Awards & Careers",
  description:
    "Explore InApps Technology: who we are, the certifications behind our delivery, verified client reviews, open engineering roles, and our partner program. Offices in Vietnam, the US, Australia, and Singapore.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "InApps Technology: Company Overview",
    description:
      "Who we are, verified client reviews, awards and certifications, open roles, and our partner program.",
    type: "website",
    url: "/company",
    images: [{ url: "/Media/og-company.png", width: 1200, height: 630, alt: "InApps Technology company overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InApps Technology: Company Overview",
    description: "Who we are, verified client reviews, awards and certifications, open roles, and our partner program.",
    images: ["/Media/og-company.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://inapps.net" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://inapps.net/company" },
  ],
};

const sections = [
  {
    href: "/company/about",
    title: "About Us",
    desc: "Our story, leadership, and the ownership-driven culture behind our delivery model. Founded in Ho Chi Minh City in 2016.",
    cta: "Meet the team",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#ef5023" strokeWidth="1.8"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/company/client-stories",
    title: "Client Reviews",
    desc: "Verbatim reviews from our 4.9/5 Clutch.co profile, written by the CEOs and CTOs who run delivery through InApps.",
    cta: "Read the reviews",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ef5023" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/company/award",
    title: "Awards & Certifications",
    desc: "ISO 27001, SOC 2 Type II, and CMMI Level 3, plus Clutch recognition. Every claim links to a source you can verify.",
    cta: "See the credentials",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="9" r="6" stroke="#ef5023" strokeWidth="1.8"/>
        <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/company/careers",
    title: "Careers",
    desc: "Open engineering roles in Ho Chi Minh City. Hybrid work and long-running international ODC projects for US, EU, and AU clients.",
    cta: "View open roles",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#ef5023" strokeWidth="1.8"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="#ef5023" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    href: "/company/partner",
    title: "Partner Program",
    desc: "White-label delivery and up to 20% commission for agencies, software firms, and talent providers.",
    cta: "Explore the program",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M8.5 13.5L5 17a3.54 3.54 0 0 0 5 5l3.5-3.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M15.5 10.5L19 7a3.54 3.54 0 0 0-5-5l-3.5 3.5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M9 15l6-6" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/company/solution-accelerators",
    title: "Solution Accelerators",
    desc: "Six production-ready codebases for AI, healthcare, fintech, commerce, logistics, and SaaS. You own the code entirely.",
    cta: "Browse accelerators",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const facts = [
  { value: "2016", label: "Founded in Ho Chi Minh City" },
  { value: "4", label: "Offices: Vietnam, US, Australia, Singapore" },
  { value: "4.9/5", label: "Clutch rating across 36 reviews" },
  { value: "3", label: "Certifications: ISO 27001, SOC 2, CMMI L3" },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1 flex flex-col">

        {/* ── S1: Hero ── */}
        <section className="relative px-[16px] md:px-[40px] overflow-hidden flex flex-col items-start gap-[28px] min-h-[600px] md:min-h-[850px] pt-[140px] md:pt-[228px]" style={{ paddingBottom: "100px" }}>
          {/* Banner background - case-study style */}
          <div className="absolute inset-0">
            <img
              src="/Media/Image/case 18.jpg"
              alt=""
              fetchPriority="high"
              className="absolute right-0 top-0 h-full"
              style={{ width: "65%", objectFit: "cover", objectPosition: "right center" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0d0d0d 35%, #0d0d0d 45%, rgba(13,13,13,0.7) 60%, transparent 100%)" }}
            />
            <div className="absolute inset-0 block md:hidden" style={{ background: "rgba(13,13,13,0.55)" }} />
          </div>

          <div className="relative w-full max-w-[1320px] mx-auto">
          <div className="relative flex flex-col items-start gap-[24px] max-w-[860px]">
            {/* Eyebrow */}
            <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>COMPANY</p>

            {/* Heading */}
            <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
              The Company Behind Your Next <span className="text-[#ef5023]">Engineering Team</span>
            </h1>

            {/* Subtext */}
            <p className="text-[rgba(255,255,255,0.85)] text-[20px] leading-[32px] max-w-[640px]">
              InApps Technology builds dedicated offshore engineering teams from Ho Chi Minh City for clients across the US, EU, Australia, and Singapore.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-[12px] pt-[4px]">
              <a
                href="/contact"
                className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Talk to us →
              </a>
              <a
                href="#explore"
                className="bg-transparent font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center text-white"
                style={{ textDecoration: "none" }}
              >
                Explore InApps ↓
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center gap-[10px] pt-[8px]">
              {["★ 4.9/5 on Clutch · 36 reviews", "ISO 27001 · SOC 2 Type II · CMMI L3", "Delivering since 2016"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-[12px] py-[6px] rounded-full text-[12px] font-semibold"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.75)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* ── Client Logos ── */}
        <ServiceTrustedLogos />

        {/* ── Explore InApps ── */}
        <style>{`
          .company-card {
            background: #fafafa;
            border: 1px solid #ebebeb;
            transition: border-color 0.2s, box-shadow 0.2s, background 0.2s, transform 0.2s;
          }
          .company-card:hover {
            border-color: rgba(239,80,35,0.3);
            box-shadow: 0 8px 32px rgba(239,80,35,0.08);
            background: #fff;
            transform: translateY(-4px);
          }
          .company-card:hover .company-card-cta {
            color: #d94010;
          }
        `}</style>
        <section id="explore" className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#fff", borderTop: "1px solid #e8e8e8" }}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(239,80,35,0.05) 0%, transparent 65%)", borderRadius: "50%" }} />
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
              <defs>
                <pattern id="company-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#ef5023" fillOpacity="0.12"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#company-dots)"/>
            </svg>
          </div>

          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[56px]">

            {/* Header */}
            <div className="flex flex-col gap-[10px] max-w-[640px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>EXPLORE INAPPS</p>
              <h2 className="font-black text-[#0a0a0a] leading-[1.1]" style={{ fontSize: "clamp(32px, 3vw, 48px)", letterSpacing: "-1.5px" }}>
                Get to Know <span style={{ color: "#ef5023" }}>InApps</span>
              </h2>
              <p className="text-[16px] leading-[1.75]" style={{ color: "#666", marginTop: "4px" }}>
                Everything about the company in one place: who we are, what clients say on the record, the credentials behind our delivery, and the ways to work with us.
              </p>
            </div>

            {/* 6-card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {sections.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="company-card flex flex-col gap-[16px] p-[28px] rounded-[16px]"
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-center self-start flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-[6px] flex-1">
                    <h3 className="font-black text-[#0a0a0a] text-[17px] leading-[1.25]">{item.title}</h3>
                    <p className="text-[13px] leading-[1.7]" style={{ color: "#888" }}>{item.desc}</p>
                  </div>
                  <span className="company-card-cta inline-flex items-center gap-[6px] font-bold text-[13px]" style={{ color: "#ef5023" }}>
                    {item.cta}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* ── At a Glance ── */}
        <section className="relative px-[16px] md:px-[40px] py-[70px] overflow-hidden" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "560px", height: "560px", background: "radial-gradient(circle, rgba(239,80,35,0.09) 0%, transparent 60%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "480px", height: "480px", background: "radial-gradient(circle, rgba(239,80,35,0.07) 0%, transparent 60%)", borderRadius: "50%" }} />
          </div>
          <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ zIndex: 1 }}>
            <div className="flex flex-col gap-[10px] max-w-[600px]">
              <p className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "#ef5023" }}>AT A GLANCE</p>
              <h2 className="font-black text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 3vw, 46px)", letterSpacing: "-1.5px" }}>
                InApps in <span style={{ color: "#ef5023" }}>Numbers</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-[8px] p-[28px] rounded-[16px]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="font-black text-[36px] leading-none" style={{ color: "#ff7340" }}>{fact.value}</span>
                  <span className="text-[13px] leading-[1.6]" style={{ color: "#888" }}>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative px-[16px] md:px-[40px] py-[90px] overflow-hidden" style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img src="/Media/Pattern/p3.png" alt="" style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "406px", opacity: 0.18, mixBlendMode: "screen" }} />
          </div>
          <div className="relative max-w-[760px] mx-auto flex flex-col gap-[28px] items-center text-center" style={{ zIndex: 1 }}>
            <h2 className="font-black text-white leading-[1.05]" style={{ fontSize: "clamp(28px, 4vw, 54px)", letterSpacing: "-2px" }}>
              Ready to scale your engineering team?
            </h2>
            <p className="text-[17px]" style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
              Tell us what you are building. We reply within one business day.
            </p>
            <a
              href="/contact"
              className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[32px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
            >
              Book a discovery call →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
