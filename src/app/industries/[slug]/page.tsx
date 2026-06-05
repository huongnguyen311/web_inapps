import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return <IndustryDetailClient industry={industry} />;
}