import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solution Accelerators: Launch in Weeks | InApps Technology",
  description:
    "Six production-ready accelerators for AI document processing, patient portals, KYC/AML, headless commerce, supply chain visibility, and multi-tenant SaaS. You own the code entirely.",
  alternates: {
    canonical: "/company/solution-accelerators",
  },
  openGraph: {
    title: "InApps Solution Accelerators: Launch in Weeks, Not Quarters",
    description:
      "Production-ready codebases for AI, healthcare, fintech, commerce, logistics, and SaaS. Configurable, brandable, and fully owned by you.",
    type: "website",
    url: "/company/solution-accelerators",
    images: [{ url: "/Media/og-solution-accelerators.png", width: 1200, height: 630, alt: "InApps Solution Accelerators: production-ready codebases you own entirely" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InApps Solution Accelerators: Launch in Weeks, Not Quarters",
    description: "Production-ready codebases for AI, healthcare, fintech, commerce, logistics, and SaaS.",
    images: ["/Media/og-solution-accelerators.png"],
  },
};

export default function SolutionAcceleratorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
