import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  return <CaseStudyDetailClient cs={cs ?? caseStudies[0]} />;
}