"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/case-study-detail/HeroSection";
import ProjectOverview from "@/components/case-study-detail/ProjectOverview";
import ChallengesSection from "@/components/case-study-detail/ChallengesSection";
import ClientRequirements from "@/components/case-study-detail/ClientRequirements";
import SolutionsSection from "@/components/case-study-detail/SolutionsSection";
import TechnologySection from "@/components/case-study-detail/TechnologySection";
import ProcessSection from "@/components/case-study-detail/ProcessSection";
import ResultsSection from "@/components/case-study-detail/ResultsSection";
import CTASection from "@/components/case-study-detail/CTASection";
import RelatedCaseStudies from "@/components/case-study-detail/RelatedCaseStudies";
import FAQSection from "@/components/case-study-detail/FAQSection";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import { caseStudyDetail } from "@/data/caseStudyDetailMock";
import type { CaseStudy } from "@/data/caseStudies";

const albumImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
];

export default function CaseStudyDetailClient({ cs }: { cs: CaseStudy }) {
  const d = caseStudyDetail;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.75;
    sliderRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLightbox((prev) => (((prev ?? 0) + 1) % albumImages.length));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1">
        <HeroSection
          heroImage={cs.image || d.heroImage}
          title={cs.name}
          subtitle={cs.shortDescription}
        />
        <ServiceTrustedLogos />
        <ProjectOverview
          overviewImage={d.overviewImage}
          background={d.background}
          businessContext={d.businessContext}
          projectGoals={d.projectGoals}
          title={d.title}
          category={d.category}
        />
        <ClientRequirements requirementGroups={d.requirementGroups} />
        <ChallengesSection challenges={d.challenges} />
        <SolutionsSection solutions={d.solutions} />
        <TechnologySection techCategories={d.techCategories} />
        <ProcessSection teamStructure={d.teamStructure} teamImage={d.teamImage} />

        {/* Seamless dark band: Results + Photo Album + CTA */}
        <div className="relative overflow-hidden" style={{ background: "#0a0a0a" }}>
          {/* Circuit board traces */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(255,73,41,0.09)" strokeWidth="1" fill="none">
              <path d="M0,120 L200,120 L220,140 L400,140" />
              <path d="M0,200 L100,200 L120,180 L300,180 L320,200 L500,200" />
              <path d="M0,300 L160,300 L180,280 L380,280 L400,300 L580,300" />
              <path d="M0,420 L140,420 L160,400 L340,400 L360,420 L560,420" />
              <path d="M0,520 L200,520 L220,500 L420,500" />
              <path d="M1200,160 L1000,160 L980,140 L780,140" />
              <path d="M1200,260 L1060,260 L1040,240 L840,240 L820,260 L640,260" />
              <path d="M1200,360 L1020,360 L1000,340 L800,340 L780,360 L600,360" />
              <path d="M1200,480 L1040,480 L1020,460 L820,460 L800,480 L620,480" />
              <path d="M1200,580 L1000,580 L980,560 L780,560" />
            </g>
            <g stroke="rgba(255,255,255,0.035)" strokeWidth="0.8" fill="none">
              <path d="M0,60 L180,60 L200,80 L360,80" />
              <path d="M0,660 L200,660 L220,640 L400,640" />
              <path d="M1200,100 L960,100 L940,80 L740,80" />
              <path d="M1200,700 L980,700 L960,680 L760,680" />
            </g>
            <g fill="rgba(255,73,41,0.25)">
              <circle cx="200" cy="120" r="2" /><circle cx="300" cy="180" r="2" />
              <circle cx="380" cy="280" r="2" /><circle cx="360" cy="400" r="2" />
              <circle cx="1000" cy="160" r="2" /><circle cx="840" cy="240" r="2" />
              <circle cx="800" cy="340" r="2" /><circle cx="820" cy="460" r="2" />
            </g>
            <ellipse cx="600" cy="400" rx="280" ry="200" fill="rgba(255,73,41,0.03)" />
          </svg>

          <ResultsSection
            metrics={d.metrics}
            successStory={d.successStory}
            keyOutcomes={d.keyOutcomes}
          />

          {/* ── Photo Album — Peek Carousel ── */}
          <section style={{ padding: "70px 0", position: "relative", zIndex: 1 }}>
            <style>{`
              .peek-header {
                max-width: 1320px;
                margin: 0 auto 28px;
                padding: 0 40px;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
              }
              .peek-viewport {
                position: relative;
                overflow: hidden;
                max-width: 860px;
                margin: 0 auto;
                padding: 0 80px;
              }
              .peek-track {
                display: flex;
                transition: transform .45s cubic-bezier(.25,.46,.45,.94);
              }
              .peek-slide {
                flex: 0 0 100%;
                padding: 0 12px;
                box-sizing: border-box;
                transition: transform .45s cubic-bezier(.25,.46,.45,.94), opacity .45s;
                transform: scale(0.82);
                opacity: 0.4;
              }
              .peek-slide.active {
                transform: scale(1);
                opacity: 1;
              }
              .peek-slide-inner {
                border-radius: 16px;
                overflow: hidden;
                position: relative;
                background: #111;
              }
              .peek-slide-inner img {
                width: 100%;
                aspect-ratio: 21 / 9;
                object-fit: cover;
                display: block;
              }
              .peek-prev, .peek-next {
                position: absolute;
                top: 50%; transform: translateY(-50%);
                width: 48px; height: 48px; border-radius: 50%;
                background: rgba(20,20,20,.75);
                border: 1px solid rgba(255,255,255,.15);
                color: #fff; font-size: 22px; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                transition: background .2s, border-color .2s;
                backdrop-filter: blur(6px);
                z-index: 2;
              }
              .peek-prev { left: 16px; }
              .peek-next { right: 16px; }
              .peek-prev:hover, .peek-next:hover { background: #ef5023; border-color: #ef5023; }
              .peek-dots {
                display: flex;
                justify-content: center;
                gap: 7px;
                margin-top: 20px;
              }
              .peek-dot {
                width: 7px; height: 7px; border-radius: 50%;
                background: rgba(255,255,255,.2);
                border: none; cursor: pointer; padding: 0;
                transition: background .2s, transform .2s;
              }
              .peek-dot.active {
                background: #ef5023;
                transform: scale(1.3);
              }
            `}</style>

            {/* Header */}
            <div className="peek-header">
              <div>
                <p style={{ color: "#ef5023", fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 6 }}>Our Work in Photos</p>
                <h2 style={{ color: "#fff", fontSize: 30, fontWeight: 900, lineHeight: 1.3, letterSpacing: "-1px", margin: 0 }}>
                  Behind the <span style={{ color: "#ef5023" }}>Builds</span>
                </h2>
              </div>
              <p style={{ color: "#555", fontSize: 12, margin: 0 }}>{(lightbox ?? 0) + 1} / {albumImages.length}</p>
            </div>

            {/* Carousel */}
            <div className="peek-viewport">
              <div
                className="peek-track"
                style={{ transform: `translateX(${-(lightbox ?? 0) * 100}%)` }}
              >
                {albumImages.map((src, i) => (
                  <div key={i} className={`peek-slide${(lightbox ?? 0) === i ? " active" : ""}`}>
                    <div className="peek-slide-inner">
                      <img src={src} alt={`Case study ${i + 1}`} />
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="peek-prev"
                onClick={() => setLightbox(((lightbox ?? 0) - 1 + albumImages.length) % albumImages.length)}
              >‹</button>
              <button
                className="peek-next"
                onClick={() => setLightbox(((lightbox ?? 0) + 1) % albumImages.length)}
              >›</button>
            </div>

            {/* Dots */}
            <div className="peek-dots">
              {albumImages.map((_, i) => (
                <button
                  key={i}
                  className={`peek-dot${(lightbox ?? 0) === i ? " active" : ""}`}
                  onClick={() => setLightbox(i)}
                />
              ))}
            </div>
          </section>

          <CTASection />
        </div>


        <FAQSection />
        <RelatedCaseStudies relatedCases={d.relatedCases} />
      </main>
      <Footer />
    </div>
  );
}