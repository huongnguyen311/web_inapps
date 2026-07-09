import type { MetadataRoute } from "next";
import { solutionAccelerators } from "@/data/solutionAccelerators";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

export const dynamic = "force-static";

const BASE = "https://inapps.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/technology",
    "/case-study",
    "/stack",
    "/talent",
    "/contact",
    "/company",
    "/company/about",
    "/company/award",
    "/company/careers",
    "/company/client-stories",
    "/company/partner",
    "/company/solution-accelerators",
  ];

  return [
    ...staticRoutes.map((path) => ({ url: `${BASE}${path}` })),
    ...services.map((s) => ({ url: `${BASE}/services/${s.slug}` })),
    ...industries.map((i) => ({ url: `${BASE}/industries/${i.slug}` })),
    ...caseStudies.map((c) => ({ url: `${BASE}/case-study/${c.slug}` })),
    ...solutionAccelerators.map((a) => ({ url: `${BASE}/company/solution-accelerators/${a.slug}` })),
  ];
}
