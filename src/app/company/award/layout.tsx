import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards, Certifications & Partnerships | InApps Technology",
  description:
    "ISO 27001, SOC 2 Type II, and CMMI Level 3 certified. Rated 4.9/5 on Clutch.co across 36 verified reviews, and ranked among the top software developers in Vietnam.",
  alternates: {
    canonical: "/company/award",
  },
  openGraph: {
    title: "Awards, Certifications & Partnerships | InApps Technology",
    description:
      "ISO 27001, SOC 2 Type II, CMMI Level 3, and a 4.9/5 Clutch.co rating from 36 verified client reviews.",
    type: "website",
    url: "/company/award",
    images: [{ url: "/Media/og-award.png", width: 1200, height: 630, alt: "InApps Technology awards and certifications: ISO 27001, SOC 2 Type II, CMMI Level 3, 4.9/5 on Clutch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards, Certifications & Partnerships | InApps Technology",
    description: "ISO 27001, SOC 2 Type II, CMMI Level 3, and a 4.9/5 Clutch.co rating from 36 verified client reviews.",
    images: ["/Media/og-award.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InApps Technology",
  url: "https://inapps.net",
  foundingDate: "2016",
  award: [
    "Top Staff Augmentation Company 2026 (Clutch.co)",
    "Top 10 Software Development Companies in Vietnam 2021-2024 (Clutch.co)",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "ISO 27001:2022", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "SOC 2 Type II", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "CMMI Level 3", credentialCategory: "certification" },
  ],
  sameAs: [
    "https://clutch.co/profile/inapps-technology",
    "https://www.goodfirms.co/company/inapps-technology",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://inapps.net" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://inapps.net/company" },
    { "@type": "ListItem", position: 3, name: "Awards & Certifications", item: "https://inapps.net/company/award" },
  ],
};

export default function AwardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
