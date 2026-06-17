import { solutionAccelerators } from "@/data/solutionAccelerators";
import SolutionAcceleratorDetailClient from "./SolutionAcceleratorDetailClient";

export function generateStaticParams() {
  return solutionAccelerators.map((a) => ({ slug: a.slug }));
}

export default async function SolutionAcceleratorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const accelerator =
    solutionAccelerators.find((a) => a.slug === slug) ?? solutionAccelerators[0];

  return <SolutionAcceleratorDetailClient accelerator={accelerator} />;
}
