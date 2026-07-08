import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews: 4.9/5 on Clutch | InApps Technology",
  description:
    "Verbatim client reviews from InApps Technology's Clutch.co profile: 4.9/5 across 36 reviews from CTOs, CEOs, and founders in the US, Australia, Poland, Canada, and Vietnam.",
  alternates: {
    canonical: "/company/client-stories",
  },
  openGraph: {
    title: "What Our Clients Say | InApps Technology",
    description:
      "4.9/5 on Clutch.co across 36 client reviews. Read what CTOs, CEOs, and founders say about working with InApps.",
    type: "website",
    url: "/company/client-stories",
    images: [{ url: "/Media/og-client-stories.png", width: 1200, height: 630, alt: "InApps Technology client reviews: 4.9/5 across 36 verified reviews on Clutch.co" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Our Clients Say | InApps Technology",
    description: "4.9/5 on Clutch.co across 36 client reviews from CTOs, CEOs, and founders.",
    images: ["/Media/og-client-stories.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://inapps.net" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://inapps.net/company" },
    { "@type": "ListItem", position: 3, name: "Client Stories", item: "https://inapps.net/company/client-stories" },
  ],
};

export default function ClientStoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
