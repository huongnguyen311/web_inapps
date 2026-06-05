export const CATEGORIES = [
  "All",
  "AI & Automation",
  "E-commerce & Healthcare",
  "Healthcare",
  "Logistics & Supply Chain",
  "Media & Entertainment",
  "Retail & E-commerce",
  "Technology",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const SERVICES = [
  "All",
  "Dedicated Team",
  "Staff Augmentation",
  "Project-Based",
  "AI Agent Build",
] as const;

export type Service = (typeof SERVICES)[number];

export type CaseStudy = {
  slug: string;
  name: string;
  image?: string;
  shortDescription: string;
  category: Exclude<Category, "All">;
  service?: Exclude<Service, "All">;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-loan-processing-agent",
    name: "Automated Loan Processing Agent",
    image: "/Media/Image/prd 1.jpg",
    shortDescription:
      "Multi-step AI agent for Techcombank that ingests applicant data, cross-checks credit bureaus, and generates approval recommendations, cutting manual review from 2 days to 4 hours.",
    category: "AI & Automation",
    service: "AI Agent Build",
    featured: true,
  },
  {
    slug: "ai-claims-triage-agent",
    name: "AI Claims Triage Agent",
    image: "/Media/Image/prd 2.jpg",
    shortDescription:
      "Intelligent triage agent for Prudential that classifies incoming claims, routes to the right handler, and flags anomalies automatically, eliminating manual sorting entirely.",
    category: "AI & Automation",
    service: "AI Agent Build",
  },
  {
    slug: "ai-patient-triage",
    name: "AI-Powered Patient Triage System",
    image: "/Media/Image/case 9.png",
    shortDescription:
      "Rebuilt the triage workflow for a 12-hospital network using real-time ML scoring, cutting average ER wait times by 40% and reducing misclassification errors by 28%.",
    category: "Healthcare",
    service: "Dedicated Team",
    featured: true,
  },
  {
    slug: "supply-chain-visibility",
    name: "Real-Time Supply Chain Visibility Platform",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    shortDescription:
      "End-to-end tracking for 14 warehouses and 200+ SKUs, giving ops teams real-time visibility and reducing stockout incidents by 35% in the first quarter.",
    category: "Logistics & Supply Chain",
    service: "Project-Based",
  },
  {
    slug: "omnichannel-retail",
    name: "Omnichannel Retail Platform",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    shortDescription:
      "Unified inventory, order management, and customer data across online and physical stores for 3 fashion brands, boosting conversion rate by 22%.",
    category: "Retail & E-commerce",
    service: "Dedicated Team",
  },
  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    shortDescription:
      "White-label analytics product for a 50k+ MAU B2B platform, real-time event tracking, cohort analysis, and a drag-and-drop report builder shipped in 20 weeks.",
    category: "Technology",
    service: "Staff Augmentation",
  },
  {
    slug: "streaming-content-platform",
    name: "Streaming Content Platform",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    shortDescription:
      "Re-architected a legacy VOD platform into microservices supporting 1M+ concurrent viewers, with adaptive bitrate streaming and a personalised recommendation engine.",
    category: "Media & Entertainment",
    service: "Dedicated Team",
    featured: true,
  },
  {
    slug: "loyalty-rewards-engine",
    name: "Customer Loyalty & Rewards Engine",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    shortDescription:
      "Points-based loyalty system for a supermarket chain with 2M registered members, integrating POS, mobile, and partner APIs to drive an 18% uplift in repeat purchases.",
    category: "Retail & E-commerce",
    service: "Project-Based",
  },
  {
    slug: "pharmacy-ecommerce",
    name: "Pharmacy eCommerce Platform",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    shortDescription:
      "HIPAA-compliant online pharmacy with prescription verification, insurance integration, and same-day delivery, scaling to 80k orders/month in 8 months.",
    category: "E-commerce & Healthcare",
    service: "Dedicated Team",
  },
  {
    slug: "last-mile-delivery",
    name: "Last-Mile Delivery Optimiser",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    shortDescription:
      "ML-based route optimisation reducing average delivery cost by 27% across 600+ drivers, live tracking, dynamic re-routing, and proof-of-delivery built in.",
    category: "Logistics & Supply Chain",
    service: "Project-Based",
  },
  {
    slug: "devops-automation",
    name: "DevOps Automation Platform",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    shortDescription:
      "Internal developer platform consolidating CI/CD, secrets management, and infrastructure provisioning, cutting deployment lead time from 3 days to under 2 hours.",
    category: "Technology",
    service: "Staff Augmentation",
  },
  {
    slug: "remote-patient-monitoring",
    name: "IoT-Connected Remote Patient Monitoring App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    shortDescription:
      "IoT-connected mobile app for chronic disease management, syncing wearable data in real time, alerting care teams to critical readings, reducing readmissions by 31%.",
    category: "Healthcare",
    service: "Dedicated Team",
  },
  {
    slug: "digital-banking-transformation",
    name: "Digital Banking Transformation",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    shortDescription:
      "A 36-week end-to-end platform rebuild for NovaPay Financial Group, from legacy core banking to a cloud-native, AI-powered mobile experience.",
    category: "Technology",
    service: "Dedicated Team",
    featured: true,
  },
  {
    slug: "media-rights-management",
    name: "Pan-Asian Media Rights Management System",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    shortDescription:
      "Centralised rights and royalties platform for a pan-Asian content distributor, automating contract ingestion, usage tracking, and monthly payouts across 40+ partners.",
    category: "Media & Entertainment",
    service: "Staff Augmentation",
  },
];