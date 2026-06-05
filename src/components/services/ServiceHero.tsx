"use client";

import Link from "next/link";
import { ServiceData } from "@/data/services";

interface Props {
  service: Pick<ServiceData, "name" | "category" | "categoryIcon" | "heroTagline" | "heroDescription" | "slug">;
}

export default function ServiceHero({ service }: Props) {
  return (
    <section
      className="relative px-[40px] overflow-hidden flex flex-col items-start gap-[28px]"
      style={{ minHeight: "850px", paddingTop: "228px", paddingBottom: "100px" }}
    >
      {/* Banner background */}
      <div className="absolute inset-0">
        <img
          src={service.slug === "ai-agent-development" ? "/Media/Image/case 17.png" : service.slug === "custom-software-development" ? "/Media/Image/case 18.png" : "/Media/Image/case 7.png"}
          alt="Hero background"
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
        <h1 className={`font-black text-white tracking-[-2px] text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[68px] md:leading-[76px]${service.slug !== "ai-agent-development" && service.slug !== "custom-software-development" ? " whitespace-nowrap" : ""}`}>
          {service.name}
        </h1>
        <p className="text-[#ffffff] text-[20px] leading-[32px] font-normal">
          {service.heroDescription && service.heroDescription.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>
        <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
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
            See Case Study →
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}