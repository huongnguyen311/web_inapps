import type { Metadata } from "next";
import { JOBS } from "@/data/careersJobs";

export const metadata: Metadata = {
  title: "Careers at InApps: Software Engineering Jobs in Ho Chi Minh City",
  description:
    "Open roles for senior engineers, solution architects, and technical project managers in Ho Chi Minh City. Hybrid work and international ODC projects for US, EU, and AU clients.",
  alternates: {
    canonical: "/company/careers",
  },
  openGraph: {
    title: "Careers at InApps Technology",
    description:
      "Senior engineering roles in Ho Chi Minh City. Hybrid work, international ODC projects for US, EU, and AU clients.",
    type: "website",
    url: "/company/careers",
    images: [{ url: "/Media/og-careers.png", width: 1200, height: 630, alt: "Careers at InApps Technology: software engineering jobs in Ho Chi Minh City" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at InApps Technology",
    description: "Senior engineering roles in Ho Chi Minh City with international ODC projects.",
    images: ["/Media/og-careers.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://inapps.net" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://inapps.net/company" },
    { "@type": "ListItem", position: 3, name: "Careers", item: "https://inapps.net/company/careers" },
  ],
};

function salaryRange(salary: string): { min: number; max: number } | null {
  const nums = salary.match(/[\d,]+/g)?.map((n) => parseInt(n.replace(/,/g, ""), 10)) ?? [];
  if (nums.length < 2) return null;
  return { min: nums[0], max: nums[1] };
}

const jobPostingsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: JOBS.map((job, i) => {
    const range = salaryRange(job.salary);
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        description: `${job.desc} Skills: ${job.skills.join(", ")}.`,
        datePosted: "2026-07-09",
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@type": "Organization",
          name: "InApps Technology",
          sameAs: "https://inapps.net",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Floor 6, Saigon Trade Center, 37 Ton Duc Thang, Ben Nghe Ward, District 1",
            addressLocality: "Ho Chi Minh City",
            addressCountry: "VN",
          },
        },
        ...(range
          ? {
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: { "@type": "QuantitativeValue", minValue: range.min, maxValue: range.max, unitText: "MONTH" },
              },
            }
          : {}),
      },
    };
  }),
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsJsonLd) }}
      />
      {children}
    </>
  );
}
