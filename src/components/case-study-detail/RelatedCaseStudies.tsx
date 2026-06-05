// src/components/case-study-detail/RelatedCaseStudies.tsx
import Link from "next/link";
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "relatedCases">;

export default function RelatedCaseStudies({ relatedCases }: Props) {
  return (
    <section className="px-[40px] py-[70px]" style={{ background: "#fafafa" }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-[48px]">
          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#ef5023" }}>
              More Work
            </p>
            <h2 className="font-black text-[#0a0a0a] text-[32px] leading-[40px] tracking-[-1px]">
              Related Case Studies
            </h2>
          </div>
          <Link
            href="/case-study"
            className="hidden sm:inline-flex items-center gap-[6px] text-[13px] font-semibold"
            style={{ color: "#FF4929", textDecoration: "none" }}
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
          {relatedCases.map((c) => (
            <Link
              key={c.slug}
              href={`/case-study/${c.slug}`}
              className="group flex flex-col rounded-[16px] overflow-hidden transition-all duration-200"
              style={{
                background: "#fff",
                border: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                textDecoration: "none",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-[12px] p-[24px]">
                <span
                  className="self-start px-[10px] py-[4px] rounded-full text-[11px] font-bold"
                  style={{ background: "rgba(255,73,41,0.08)", color: "#FF4929" }}
                >
                  {c.industry}
                </span>
                <h3 className="font-bold text-[#0a0a0a] text-[15px] leading-[1.4]">{c.title}</h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: "#777" }}>{c.shortDescription}</p>
                <span
                  className="mt-[4px] text-[13px] font-semibold inline-flex items-center gap-[4px]"
                  style={{ color: "#FF4929" }}
                >
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}