import Link from "next/link";
import { services } from "@/data/services";

interface Props {
  slugs: string[];
  currentSlug: string;
}

export default function ServiceRelated({ slugs, currentSlug }: Props) {
  const related = slugs
    .filter((s) => s !== currentSlug)
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#ef5023] mb-[8px]">RELATED SERVICES</p>
        <h2 className="font-black text-[#111] text-[28px] leading-[1.15] tracking-[-0.6px] mb-[32px]">You might also need</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]">
          {related.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="flex items-center justify-between gap-[12px] rounded-[10px] px-[20px] py-[16px] group"
              style={{ background: "#fff4ef", border: "1px solid #fad4c0", textDecoration: "none" }}
            >
              <div className="flex items-center gap-[12px]">
                <span className="text-[22px]">{svc.categoryIcon}</span>
                <div>
                  <div className="font-bold text-[#111] text-[13px]">{svc.name}</div>
                  <div className="text-[11px] text-[#aaa] mt-[2px]">{svc.category}</div>
                </div>
              </div>
              <span className="text-[#ef5023] font-bold text-[16px] transition-transform duration-150 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}