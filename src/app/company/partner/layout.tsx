import type { Metadata } from "next";
import { partnerFaq } from "@/data/partnerFaq";

export const metadata: Metadata = {
  title: "Partner Program: Up to 20% Commission | InApps Technology",
  description:
    "White-label delivery and up to 20% commission for agencies, software firms, and talent providers. ISO 27001 and SOC 2 certified, rated 4.9/5 on Clutch across 36 reviews.",
  alternates: {
    canonical: "/company/partner",
  },
  openGraph: {
    title: "InApps Partner Program: Sell Bigger, Keep Your Client",
    description:
      "White-label delivery, deal protection, and up to 20% commission from a 4.9/5-rated engineering team.",
    type: "website",
    url: "/company/partner",
    images: [{ url: "/Media/og-partner.png", width: 1200, height: 630, alt: "InApps Partner Program: white-label delivery, up to 20% commission, 4.9/5 on Clutch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InApps Partner Program: Sell Bigger, Keep Your Client",
    description: "White-label delivery, deal protection, and up to 20% commission.",
    images: ["/Media/og-partner.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://inapps.net" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://inapps.net/company" },
    { "@type": "ListItem", position: 3, name: "Partner Program", item: "https://inapps.net/company/partner" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: partnerFaq.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
