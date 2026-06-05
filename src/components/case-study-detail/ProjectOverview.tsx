// src/components/case-study-detail/ProjectOverview.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "overviewImage" | "background" | "businessContext" | "projectGoals" | "title" | "category">;

export default function ProjectOverview({ overviewImage, background, businessContext, projectGoals, title, category }: Props) {
  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#f7f7f8" }}>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[64px] items-start">
        {/* Left — text */}
        <div className="flex flex-col gap-[28px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[-16px]" style={{ color: "#ef5023" }}>
            Project Overview
          </p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            {title}
          </h2>

          {/* Tag */}
          <span
            className="self-start px-[14px] py-[6px] rounded-full text-[12px] font-semibold"
            style={{ background: "rgba(255,73,41,0.08)", color: "#FF4929", border: "1px solid rgba(255,73,41,0.2)" }}
          >
            {category}
          </span>

          {/* Single paragraph */}
          <p className="text-[15px] leading-[1.85]" style={{ color: "#444" }}>
            InApps Technology partnered with NovaPay Financial Group, a fast-growing neobank serving over 2 million users across Southeast Asia, to deliver a full-scale digital transformation of their core banking platform. Over 36 weeks, the InApps team rebuilt NovaPay's legacy monolithic system into a cloud-native, microservices-based architecture, shipped native iOS and Android apps with real-time transaction capabilities, and integrated an AI-powered fraud detection engine that scores every transaction in under 50ms. The result is a modern, scalable platform that positions NovaPay to compete confidently in one of the most demanding fintech markets in the region.
          </p>
        </div>

        {/* Right — image */}
        <div className="relative sticky top-[100px]">
          {/* Decorative orange blob behind */}
          <div
            className="absolute"
            style={{
              width: "80%",
              height: "80%",
              bottom: "-20px",
              right: "-20px",
              background: "linear-gradient(135deg, #FF4929 0%, #ff7a5c 100%)",
              borderRadius: "20px",
              zIndex: 0,
              opacity: 0.15,
            }}
          />
          {/* Subtle dot grid */}
          <div
            className="absolute"
            style={{
              width: "120px",
              height: "120px",
              top: "-16px",
              left: "-16px",
              backgroundImage: "radial-gradient(circle, #FF4929 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
              opacity: 0.25,
              zIndex: 0,
            }}
          />
          {/* Main image */}
          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{
              aspectRatio: "4/3",
              zIndex: 1,
              boxShadow: "0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
              border: "1px solid #e8e8e8",
            }}
          >
            <img src={overviewImage} alt="Project overview" className="w-full h-full object-cover" />
            {/* Subtle overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}