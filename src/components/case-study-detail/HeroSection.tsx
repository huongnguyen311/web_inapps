// src/components/case-study-detail/HeroSection.tsx
import Link from "next/link";
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "heroImage" | "title" | "subtitle">;

export default function HeroSection({ heroImage, title, subtitle }: Props) {
  return (
    <section
      className="relative px-[40px] overflow-hidden flex flex-col items-start gap-[28px]"
      style={{ minHeight: "850px", paddingTop: "228px", paddingBottom: "100px" }}
    >
      {/* banner background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
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
          {/* headline */}
          <h1 className="font-black text-white text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px] tracking-[-2px]">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} style={{ color: "#ef5023" }}>{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          {/* subtext */}
          <p className="text-[20px] leading-[32px]" style={{ color: "#ffffff", maxWidth: "620px" }}>
            {subtitle}
          </p>

          {/* buttons */}
          <div className="flex gap-[12px] items-center pt-[4px]">
            <Link
              href="/contact"
              className="bg-[#ef5023] hover:bg-[#d94010] text-white font-bold text-[16px] px-[28px] h-[55px] rounded-[10px] inline-flex items-center transition-colors"
              style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
            >
              Start a Project
            </Link>
            <Link
              href="/case-study"
              className="bg-transparent text-white font-semibold text-[16px] px-[28px] h-[55px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors inline-flex items-center"
              style={{ textDecoration: "none" }}
            >
              ← View All Case Studies
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}