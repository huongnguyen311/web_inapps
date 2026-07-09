import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutionAccelerators } from "@/data/solutionAccelerators";
import SolutionAcceleratorDetailClient from "./SolutionAcceleratorDetailClient";

export function generateStaticParams() {
  return solutionAccelerators.map((a) => ({ slug: a.slug }));
}

function cleanDashes(text: string) {
  return text.replace(/\s*—\s*/g, ", ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const accelerator = solutionAccelerators.find((a) => a.slug === slug);
  if (!accelerator) return {};

  const title = `${accelerator.name} | InApps Solution Accelerators`;
  const description = cleanDashes(accelerator.shortDescription);
  const url = `/company/solution-accelerators/${accelerator.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${accelerator.name}: ${cleanDashes(accelerator.tagline)}`,
      description,
      type: "website",
      url,
      images: [{ url: "/Media/og-solution-accelerators.png", width: 1200, height: 630, alt: `${accelerator.name} by InApps Technology` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${accelerator.name}: ${cleanDashes(accelerator.tagline)}`,
      description,
      images: ["/Media/og-solution-accelerators.png"],
    },
  };
}

export default async function SolutionAcceleratorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accelerator = solutionAccelerators.find((a) => a.slug === slug);

  if (!accelerator) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://inapps.net" },
      { "@type": "ListItem", position: 2, name: "Company", item: "https://inapps.net/company" },
      { "@type": "ListItem", position: 3, name: "Solution Accelerators", item: "https://inapps.net/company/solution-accelerators" },
      { "@type": "ListItem", position: 4, name: accelerator.name, item: `https://inapps.net/company/solution-accelerators/${accelerator.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SolutionAcceleratorDetailClient accelerator={accelerator} />
    </>
  );
}
