// src/data/caseStudyDetailMock.ts

export type Challenge = {
  number: string;
  title: string;
  description: string;
};

export type RequirementGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Solution = {
  title: string;
  description: string;
  image: string;
};

export type TechCategory = {
  category: "Frontend" | "Backend" | "Mobile" | "Cloud" | "Database" | "AI" | "DevOps";
  techs: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TeamMember = {
  role: string;
  count: number;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type RelatedCase = {
  slug: string;
  image: string;
  industry: string;
  title: string;
  shortDescription: string;
};

export type CaseStudyCategory =
  | "E-commerce & Healthcare"
  | "Healthcare"
  | "Logistics & Supply Chain"
  | "Media & Entertainment"
  | "Retail & E-commerce"
  | "Technology";

export type CaseStudyDetail = {
  // Hero
  heroImage: string;
  clientName: string;
  category: CaseStudyCategory;
  title: string;
  subtitle: string;
  // Overview
  overviewImage: string;
  background: string;
  businessContext: string;
  projectGoals: string[];
  // Challenges
  challenges: Challenge[];
  // Requirements
  requirementGroups: RequirementGroup[];
  // Solutions
  solutions: Solution[];
  // Technologies
  techCategories: TechCategory[];
  // Process
  processSteps: ProcessStep[];
  // Team
  teamImage?: string;
  teamStructure: TeamMember[];
  // Results
  metrics: Metric[];
  successStory: string;
  keyOutcomes: string[];
  // Related
  relatedCases: RelatedCase[];
};

export const caseStudyDetail: CaseStudyDetail = {
  heroImage: "/Media/Image/case 5.png",
  clientName: "NovaPay Financial Group",
  category: "Technology",
  title: "Digital Banking Transformation",
  subtitle:
    "A 36-week end-to-end platform rebuild: from legacy core banking to a cloud-native, AI-powered mobile experience serving 2M+ active users.",

  overviewImage: "/Media/Image/home 1.png",
  background:
    "NovaPay Financial Group is a mid-market neobank operating across Southeast Asia with 2M+ registered users. Founded in 2017, they grew rapidly but their legacy monolithic platform became a bottleneck: slow releases, high downtime, and a poor mobile experience were causing customer churn.",
  businessContext:
    "The competitive neobank landscape demanded a modern mobile-first experience. NovaPay's engineering team lacked the bandwidth and expertise to execute a full platform overhaul while keeping production stable. They needed a trusted technology partner to lead the rebuild.",
  projectGoals: [
    "Rebuild core banking platform on cloud-native microservices architecture",
    "Deliver iOS and Android apps with feature parity within 36 weeks",
    "Integrate AI-powered fraud detection with <50ms transaction scoring",
    "Achieve 99.9% uptime SLA post-launch",
    "Reduce operational costs by at least 40%",
  ],

  challenges: [
    {
      number: "01",
      title: "Legacy Monolith",
      description:
        "A 7-year-old Java monolith with no clear service boundaries. Any change risked breaking unrelated features, making iterative modernisation nearly impossible.",
    },
    {
      number: "02",
      title: "Zero Mobile Experience",
      description:
        "No native mobile app and a mobile web score of 28/100 on Google Lighthouse, resulting in a 64% bounce rate on mobile devices.",
    },
    {
      number: "03",
      title: "Fraud & Security Gaps",
      description:
        "Manual fraud review caused 4-6 hour delays in flagging suspicious transactions. Regulators demanded a real-time automated detection system.",
    },
    {
      number: "04",
      title: "Scalability Ceiling",
      description:
        "Peak-hour traffic caused database connection exhaustion. The system could not scale horizontally without creating race conditions in the transaction ledger.",
    },
  ],

  requirementGroups: [
    {
      title: "Mobile Application",
      description: "NovaPay needed a native mobile presence on both iOS and Android, with a seamless user experience that could compete with top-tier fintech apps in the region.",
      items: [
        "Native iOS and Android apps with shared business logic",
        "Biometric authentication (Face ID, fingerprint)",
        "Real-time transaction feeds and push notifications",
        "Offline mode for balance viewing",
      ],
    },
    {
      title: "Core Banking",
      description: "The legacy monolith had to be replaced without downtime. NovaPay required a modern, event-driven backend that could scale independently per service.",
      items: [
        "Microservices architecture with clear service boundaries",
        "Event-driven transaction processing",
        "Multi-currency support (USD, VND, SGD, THB)",
        "Automated reconciliation engine",
      ],
    },
    {
      title: "AI & Security",
      description: "Regulators and customers demanded real-time fraud protection and full data security compliance across all transaction flows.",
      items: [
        "Real-time fraud scoring under 50ms per transaction",
        "Anomaly detection with weekly model retraining",
        "PCI-DSS Level 1 compliance",
        "End-to-end encryption for all data in transit and at rest",
      ],
    },
    {
      title: "Infrastructure",
      description: "The platform had to be resilient enough to handle rapid user growth and regional expansion without engineering intervention.",
      items: [
        "99.9% uptime SLA with zero-downtime deployments",
        "Auto-scaling to handle 10x peak traffic",
        "Multi-region failover (Singapore + Ho Chi Minh City)",
        "Full observability: logs, metrics, distributed tracing",
      ],
    },
  ],

  solutions: [
    {
      title: "Strangler Fig Migration",
      description:
        "Incrementally replaced the monolith using the strangler fig pattern, routing traffic to new microservices behind a facade API gateway while keeping legacy services alive during transition.",
      image: "/Media/Image/case 6.png",
    },
    {
      title: "React Native Cross-Platform App",
      description:
        "Built a single React Native codebase sharing ~80% of business logic across iOS and Android, with native modules for biometric auth and performance-critical screens.",
      image: "/Media/Image/case 7.png",
    },
    {
      title: "ML Fraud Detection Pipeline",
      description:
        "Deployed a dual-model system on AWS SageMaker: a gradient-boosted tree for known patterns and an autoencoder for anomaly detection, scoring every transaction in under 50ms.",
      image: "/Media/Image/case 8.png",
    },
    {
      title: "Event-Driven Architecture",
      description:
        "Replaced synchronous API chains with Apache Kafka event streams, enabling horizontal scaling and eliminating the transaction race conditions that caused data inconsistencies.",
      image: "/Media/Image/case 9.png",
    },
  ],

  techCategories: [
    { category: "Frontend", techs: ["React Native", "TypeScript"] },
    { category: "Backend", techs: ["Node.js", "NestJS", "Apache Kafka", "GraphQL"] },
    { category: "Cloud", techs: ["AWS ECS"] },
    { category: "Database", techs: ["PostgreSQL", "Redis", "DynamoDB"] },
  ],

  processSteps: [
    {
      number: "01",
      title: "Discovery Sprint",
      description:
        "2-week deep dive into existing architecture, codebase audit, stakeholder interviews, and risk assessment. Delivered architecture decision records and migration strategy.",
    },
    {
      number: "02",
      title: "Foundation & CI/CD",
      description:
        "Set up cloud infrastructure on AWS, established CI/CD pipelines, defined service contracts, and stood up the API gateway facade for the strangler fig pattern.",
    },
    {
      number: "03",
      title: "Core Services Build",
      description:
        "Built authentication, accounts, transactions, and notifications microservices in parallel teams. Each service shipped with full test coverage and independent deployment.",
    },
    {
      number: "04",
      title: "Mobile App Development",
      description:
        "Developed React Native app alongside backend services using contract-first API mocks. Biometric auth, transaction screens, and push notifications delivered in this phase.",
    },
    {
      number: "05",
      title: "AI Integration & Security",
      description:
        "Trained and deployed fraud detection models, integrated PCI-DSS controls, completed penetration testing, and wired end-to-end encryption across all services.",
    },
    {
      number: "06",
      title: "Staged Launch",
      description:
        "Rolled out to 5% of users first, monitored for 2 weeks, then expanded to 100%. Legacy system remained on standby for 4 weeks before full decommission.",
    },
  ],

  teamImage: "/Media/Image/case 6.png",
  teamStructure: [
    {
      role: "Project Manager",
      count: 1,
      description: "Owns delivery timeline, stakeholder communication, and risk management across all 6 phases.",
    },
    {
      role: "Solution Architect",
      count: 1,
      description: "Designed the microservices architecture, API gateway, and event-driven Kafka topology.",
    },
    {
      role: "Backend Engineers",
      count: 4,
      description: "Built core banking services: auth, accounts, transactions, notifications — each independently deployable.",
    },
    {
      role: "Mobile Engineers",
      count: 2,
      description: "Delivered the React Native app for iOS & Android with shared business logic and native biometric modules.",
    },
    {
      role: "DevOps / Cloud",
      count: 2,
      description: "Provisioned AWS infrastructure with Terraform, set up CI/CD, observability, and zero-downtime deployments.",
    },
    {
      role: "QA Engineers",
      count: 2,
      description: "End-to-end testing, penetration testing, and PCI-DSS compliance validation across all services.",
    },
  ],

  metrics: [
    { value: "2M+", label: "Active Users Served" },
    { value: "180ms", label: "Avg Transaction Latency" },
    { value: "99.9%", label: "Uptime Post-Launch" },
    { value: "40%", label: "Operational Cost Saved" },
  ],
  successStory:
    "Within 90 days of launch, NovaPay recorded their highest-ever monthly active user count. The new fraud detection system caught 94% of fraudulent transactions automatically, reducing manual review workload by 85% and saving an estimated $2.3M annually in fraud losses.",
  keyOutcomes: [
    "Mobile app reached 4.8 rating on both App Store and Google Play within 60 days",
    "Transaction processing latency reduced from 2.3s to 180ms average",
    "Zero critical incidents in first 6 months post-launch",
    "Engineering team onboarded to new platform in 3 weeks with full documentation",
    "NovaPay expanded to 2 new markets within 4 months, using same platform",
  ],

  relatedCases: [
    {
      slug: "healthtech-platform",
      image: "/Media/Image/case 1.png",
      industry: "Healthcare",
      title: "HealthTech Patient Platform",
      shortDescription:
        "Built a HIPAA-compliant telemedicine platform connecting 500+ doctors with 200K patients across 3 countries.",
    },
    {
      slug: "ecommerce-scale",
      image: "/Media/Image/case 2.png",
      industry: "E-Commerce",
      title: "E-Commerce Scale-Up",
      shortDescription:
        "Re-architected a Magento monolith into microservices handling 10M+ SKUs and Black Friday peaks of 50K orders/hour.",
    },
    {
      slug: "logistics-ai",
      image: "/Media/Image/case 3.png",
      industry: "Logistics",
      title: "AI-Powered Route Optimisation",
      shortDescription:
        "Delivered an ML routing engine that cut last-mile delivery costs by 34% for a fleet of 8,000 vehicles.",
    },
  ],
};