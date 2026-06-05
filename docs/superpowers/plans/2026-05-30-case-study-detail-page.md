# Case Study Detail Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full case study detail page with 9 sections (Hero, ProjectOverview, Challenges, Requirements, Solutions, Technologies, Process, Results, CTA, Related) using split sub-components.

**Architecture:** `CaseStudyDetailClient.tsx` is a thin wrapper that imports 10 focused components from `src/components/case-study-detail/`. All mock data lives in `src/data/caseStudyDetailMock.ts`. Mixed dark/light theme alternating per section.

**Tech Stack:** Next.js (App Router), React, TypeScript, inline styles + Tailwind utility classes, no external UI library.

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/data/caseStudyDetailMock.ts` | All typed mock data for the detail page |
| Create | `src/components/case-study-detail/HeroSection.tsx` | Hero banner with image overlay |
| Create | `src/components/case-study-detail/ProjectOverview.tsx` | Background / Business Context / Goals |
| Create | `src/components/case-study-detail/ChallengesSection.tsx` | Numbered challenge cards |
| Create | `src/components/case-study-detail/ClientRequirements.tsx` | Requirement groups with lists |
| Create | `src/components/case-study-detail/SolutionsSection.tsx` | Solution cards grid |
| Create | `src/components/case-study-detail/TechnologySection.tsx` | Tech category pill groups |
| Create | `src/components/case-study-detail/ProcessSection.tsx` | Horizontal timeline steps |
| Create | `src/components/case-study-detail/ResultsSection.tsx` | Metrics + success story + outcomes |
| Create | `src/components/case-study-detail/CTASection.tsx` | Full-width CTA banner |
| Create | `src/components/case-study-detail/RelatedCaseStudies.tsx` | 3-card related grid |
| Modify | `src/app/case-study/[slug]/CaseStudyDetailClient.tsx` | Replace with thin wrapper |

---

## Task 1: Mock Data

**Files:**
- Create: `src/data/caseStudyDetailMock.ts`

- [ ] **Step 1: Create the mock data file with all types and data**

```typescript
// src/data/caseStudyDetailMock.ts

export type Challenge = {
  number: string;
  title: string;
  description: string;
};

export type RequirementGroup = {
  title: string;
  items: string[];
};

export type Solution = {
  title: string;
  description: string;
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

export type CaseStudyDetail = {
  // Hero
  heroImage: string;
  clientName: string;
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
  title: "Digital Banking Transformation",
  subtitle:
    "A 36-week end-to-end platform rebuild — from legacy core banking to a cloud-native, AI-powered mobile experience serving 2M+ active users.",

  overviewImage: "/Media/Image/case 5.png",
  background:
    "NovaPay Financial Group is a mid-market neobank operating across Southeast Asia with 2M+ registered users. Founded in 2017, they grew rapidly but their legacy monolithic platform became a bottleneck — slow releases, high downtime, and a poor mobile experience were causing customer churn.",
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
        "The existing system was a 7-year-old Java monolith with no clear service boundaries. Any change risked breaking unrelated features, making iterative modernisation nearly impossible.",
    },
    {
      number: "02",
      title: "Zero Mobile Experience",
      description:
        "NovaPay had no native mobile app. Their mobile web experience scored 28/100 on Google Lighthouse, resulting in a 64% bounce rate on mobile devices.",
    },
    {
      number: "03",
      title: "Fraud & Security Gaps",
      description:
        "Manual fraud review processes caused 4-6 hour delays in flagging suspicious transactions. Regulatory pressure demanded a real-time automated detection system.",
    },
    {
      number: "04",
      title: "Scalability Ceiling",
      description:
        "Peak-hour traffic caused database connection exhaustion. The system could not scale horizontally — adding servers created race conditions in the transaction ledger.",
    },
    {
      number: "05",
      title: "Data Silos",
      description:
        "Customer data was fragmented across 5 separate databases with no single source of truth, making personalisation and compliance reporting extremely difficult.",
    },
    {
      number: "06",
      title: "Talent & Timeline Pressure",
      description:
        "NovaPay's internal team of 8 engineers could not pause feature development to execute a full platform rebuild, creating pressure to deliver without disrupting existing operations.",
    },
  ],

  requirementGroups: [
    {
      title: "Mobile Application",
      items: [
        "Native iOS and Android apps with shared business logic",
        "Biometric authentication (Face ID, fingerprint)",
        "Real-time transaction feeds and push notifications",
        "Offline mode for balance viewing",
      ],
    },
    {
      title: "Core Banking",
      items: [
        "Microservices architecture with clear service boundaries",
        "Event-driven transaction processing",
        "Multi-currency support (USD, VND, SGD, THB)",
        "Automated reconciliation engine",
      ],
    },
    {
      title: "AI & Security",
      items: [
        "Real-time fraud scoring under 50ms per transaction",
        "Anomaly detection with weekly model retraining",
        "PCI-DSS Level 1 compliance",
        "End-to-end encryption for all data in transit and at rest",
      ],
    },
    {
      title: "Infrastructure",
      items: [
        "99.9% uptime SLA with zero-downtime deployments",
        "Auto-scaling to handle 10× peak traffic",
        "Multi-region failover (Singapore + Ho Chi Minh City)",
        "Full observability: logs, metrics, distributed tracing",
      ],
    },
  ],

  solutions: [
    {
      title: "Strangler Fig Migration",
      description:
        "Incrementally replaced the monolith using the strangler fig pattern — routing traffic to new microservices behind a facade API gateway while keeping legacy services alive during transition.",
    },
    {
      title: "React Native Cross-Platform App",
      description:
        "Built a single React Native codebase sharing ~80% of business logic across iOS and Android, with native modules for biometric auth and performance-critical screens.",
    },
    {
      title: "ML Fraud Detection Pipeline",
      description:
        "Deployed a dual-model system on AWS SageMaker: a gradient-boosted tree for known patterns and an autoencoder for anomaly detection, scoring every transaction in <50ms.",
    },
    {
      title: "Event-Driven Architecture",
      description:
        "Replaced synchronous API chains with Apache Kafka event streams, enabling horizontal scaling and eliminating the transaction race conditions that caused data inconsistencies.",
    },
    {
      title: "Unified Data Platform",
      description:
        "Consolidated 5 data silos into a single PostgreSQL primary with read replicas, introducing a customer data platform layer that enabled real-time personalisation.",
    },
    {
      title: "CI/CD & Observability",
      description:
        "Implemented GitHub Actions pipelines with automated testing gates, blue-green deployments to ECS, and full-stack observability via Datadog — reducing mean time to recovery from 4 hours to 8 minutes.",
    },
  ],

  techCategories: [
    { category: "Frontend", techs: ["React Native", "TypeScript", "Redux Toolkit", "Reanimated 3"] },
    { category: "Backend", techs: ["Node.js", "NestJS", "Apache Kafka", "GraphQL"] },
    { category: "Cloud", techs: ["AWS ECS", "API Gateway", "CloudFront", "Route 53"] },
    { category: "Database", techs: ["PostgreSQL", "Redis", "DynamoDB"] },
    { category: "AI", techs: ["AWS SageMaker", "XGBoost", "PyTorch", "Pandas"] },
    { category: "DevOps", techs: ["GitHub Actions", "Terraform", "Datadog", "Docker"] },
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

  metrics: [
    { value: "300%", label: "Engagement Uplift" },
    { value: "60%", label: "Cost Reduction" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "8min", label: "Mean Time to Recovery" },
  ],
  successStory:
    "Within 90 days of launch, NovaPay recorded their highest-ever monthly active user count. The new fraud detection system caught 94% of fraudulent transactions automatically — reducing manual review workload by 85% and saving an estimated $2.3M annually in fraud losses.",
  keyOutcomes: [
    "Mobile app reached 4.8★ rating on both App Store and Google Play within 60 days",
    "Transaction processing latency reduced from 2.3s to 180ms average",
    "Zero critical incidents in first 6 months post-launch",
    "Engineering team onboarded to new platform in 3 weeks with full documentation",
    "NovaPay expanded to 2 new markets within 4 months, using same platform",
  ],

  relatedCases: [
    {
      slug: "healthtech-platform",
      image: "/Media/Image/case 5.png",
      industry: "Healthcare",
      title: "HealthTech Patient Platform",
      shortDescription:
        "Built a HIPAA-compliant telemedicine platform connecting 500+ doctors with 200K patients across 3 countries.",
    },
    {
      slug: "ecommerce-scale",
      image: "/Media/Image/case 5.png",
      industry: "E-Commerce",
      title: "E-Commerce Scale-Up",
      shortDescription:
        "Re-architected a Magento monolith into microservices handling 10M+ SKUs and Black Friday peaks of 50K orders/hour.",
    },
    {
      slug: "logistics-ai",
      image: "/Media/Image/case 5.png",
      industry: "Logistics",
      title: "AI-Powered Route Optimisation",
      shortDescription:
        "Delivered an ML routing engine that cut last-mile delivery costs by 34% for a fleet of 8,000 vehicles.",
    },
  ],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/data/caseStudyDetailMock.ts
git commit -m "feat: add case study detail mock data and types"
```

---

## Task 2: HeroSection Component

**Files:**
- Create: `src/components/case-study-detail/HeroSection.tsx`

- [ ] **Step 1: Create HeroSection.tsx**

```tsx
// src/components/case-study-detail/HeroSection.tsx
import Link from "next/link";
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "heroImage" | "clientName" | "title" | "subtitle">;

export default function HeroSection({ heroImage, clientName, title, subtitle }: Props) {
  return (
    <section
      className="relative px-4 sm:px-[60px] overflow-hidden flex items-center"
      style={{ minHeight: "560px", paddingTop: "188px", paddingBottom: "100px" }}
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="absolute right-0 top-0 h-full"
          style={{ width: "65%", objectFit: "cover", objectPosition: "right center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0d0d0d 35%, #0d0d0d 45%, rgba(13,13,13,0.7) 60%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-start gap-[24px] max-w-[680px]">
        <div className="flex items-center gap-[10px]">
          <span
            className="px-[12px] py-[5px] rounded-full text-[11px] font-bold uppercase tracking-[1px]"
            style={{ background: "rgba(255,73,41,0.15)", color: "#FF4929", border: "1px solid rgba(255,73,41,0.3)" }}
          >
            Case Study
          </span>
          <span className="text-[13px]" style={{ color: "#888" }}>{clientName}</span>
        </div>

        <h1 className="font-black text-white text-[46px] leading-[50px] tracking-[-2px]">
          {title.split(" ").map((word, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} style={{ color: "#FF4929" }}>{word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        <p className="text-[16px] leading-[27px]" style={{ color: "#ccc", maxWidth: "520px" }}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
          <Link
            href="/contact"
            className="inline-flex items-center font-bold text-[14px] px-[28px] h-[50px] rounded-[10px]"
            style={{ background: "#FF4929", color: "#fff", textDecoration: "none", boxShadow: "0 8px 32px rgba(255,73,41,0.35)" }}
          >
            Start a Project
          </Link>
          <Link
            href="/case-study"
            className="inline-flex items-center font-semibold text-[14px] px-[28px] h-[50px] rounded-[10px] border border-white/30 hover:border-white/60 transition-colors"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            ← View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/HeroSection.tsx
git commit -m "feat: add HeroSection component"
```

---

## Task 3: ProjectOverview Component

**Files:**
- Create: `src/components/case-study-detail/ProjectOverview.tsx`

- [ ] **Step 1: Create ProjectOverview.tsx**

```tsx
// src/components/case-study-detail/ProjectOverview.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "overviewImage" | "background" | "businessContext" | "projectGoals">;

export default function ProjectOverview({ overviewImage, background, businessContext, projectGoals }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#111" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[64px] items-start">
        {/* Left — text */}
        <div className="flex flex-col gap-[40px]">
          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
              Background
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ color: "#bbb" }}>{background}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
              Business Context
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ color: "#bbb" }}>{businessContext}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[16px]" style={{ color: "#FF4929" }}>
              Project Goals
            </p>
            <ul className="flex flex-col gap-[10px]">
              {projectGoals.map((goal, i) => (
                <li key={i} className="flex items-start gap-[12px]">
                  <span
                    className="mt-[4px] w-[16px] h-[16px] rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-black"
                    style={{ background: "rgba(255,73,41,0.15)", color: "#FF4929", border: "1px solid rgba(255,73,41,0.3)" }}
                  >
                    ✓
                  </span>
                  <span className="text-[14px] leading-[1.6]" style={{ color: "#ccc" }}>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — image */}
        <div
          className="rounded-[20px] overflow-hidden sticky top-[100px]"
          style={{ aspectRatio: "4/3", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <img src={overviewImage} alt="Project overview" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/ProjectOverview.tsx
git commit -m "feat: add ProjectOverview component"
```

---

## Task 4: ChallengesSection Component

**Files:**
- Create: `src/components/case-study-detail/ChallengesSection.tsx`

- [ ] **Step 1: Create ChallengesSection.tsx**

```tsx
// src/components/case-study-detail/ChallengesSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "challenges">;

export default function ChallengesSection({ challenges }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#fafafa" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
            The Problem
          </p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            Business Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {challenges.map((c) => (
            <div
              key={c.number}
              className="group flex flex-col gap-[16px] p-[28px] rounded-[16px] transition-all duration-200"
              style={{
                background: "#fff",
                border: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <span
                className="font-black text-[40px] leading-[1] tracking-[-2px]"
                style={{ color: "rgba(255,73,41,0.15)" }}
              >
                {c.number}
              </span>
              <div
                className="w-[32px] h-[3px] rounded-full"
                style={{ background: "#FF4929" }}
              />
              <h3 className="font-bold text-[#0a0a0a] text-[16px] leading-[1.4]">{c.title}</h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: "#666" }}>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/ChallengesSection.tsx
git commit -m "feat: add ChallengesSection component"
```

---

## Task 5: ClientRequirements Component

**Files:**
- Create: `src/components/case-study-detail/ClientRequirements.tsx`

- [ ] **Step 1: Create ClientRequirements.tsx**

```tsx
// src/components/case-study-detail/ClientRequirements.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "requirementGroups">;

export default function ClientRequirements({ requirementGroups }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#111" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
            What They Needed
          </p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Client Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
          {requirementGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-[16px] p-[28px] rounded-[16px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="font-bold text-white text-[15px]">{group.title}</h3>
              <ul className="flex flex-col gap-[10px]">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-[10px]">
                    <span
                      className="mt-[5px] w-[6px] h-[6px] rounded-full flex-shrink-0"
                      style={{ background: "#FF4929" }}
                    />
                    <span className="text-[13px] leading-[1.6]" style={{ color: "#aaa" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/ClientRequirements.tsx
git commit -m "feat: add ClientRequirements component"
```

---

## Task 6: SolutionsSection Component

**Files:**
- Create: `src/components/case-study-detail/SolutionsSection.tsx`

- [ ] **Step 1: Create SolutionsSection.tsx**

```tsx
// src/components/case-study-detail/SolutionsSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "solutions">;

const icons = ["⚡", "📱", "🤖", "🔄", "🗄️", "🚀"];

export default function SolutionsSection({ solutions }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#fafafa" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
            How We Solved It
          </p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            Our Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className="flex flex-col gap-[16px] p-[28px] rounded-[16px]"
              style={{
                background: "#fff",
                border: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-[20px]"
                style={{ background: "rgba(255,73,41,0.08)" }}
              >
                {icons[i % icons.length]}
              </div>
              <h3 className="font-bold text-[#0a0a0a] text-[15px] leading-[1.4]">{s.title}</h3>
              <p className="text-[13px] leading-[1.75]" style={{ color: "#666" }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/SolutionsSection.tsx
git commit -m "feat: add SolutionsSection component"
```

---

## Task 7: TechnologySection Component

**Files:**
- Create: `src/components/case-study-detail/TechnologySection.tsx`

- [ ] **Step 1: Create TechnologySection.tsx**

```tsx
// src/components/case-study-detail/TechnologySection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "techCategories">;

const categoryColors: Record<string, string> = {
  Frontend: "#61DAFB",
  Backend: "#68D391",
  Mobile: "#F6AD55",
  Cloud: "#FC8181",
  Database: "#B794F4",
  AI: "#76E4F7",
  DevOps: "#68D391",
};

export default function TechnologySection({ techCategories }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[48px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
            Built With
          </p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="flex flex-col gap-[16px] p-[24px] rounded-[16px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-[8px]">
                <span
                  className="w-[8px] h-[8px] rounded-full"
                  style={{ background: categoryColors[cat.category] ?? "#FF4929" }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[1.5px]"
                  style={{ color: categoryColors[cat.category] ?? "#FF4929" }}
                >
                  {cat.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-[8px]">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-[10px] py-[5px] rounded-full text-[12px] font-medium"
                    style={{ background: "rgba(255,255,255,0.07)", color: "#ddd", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/TechnologySection.tsx
git commit -m "feat: add TechnologySection component"
```

---

## Task 8: ProcessSection Component

**Files:**
- Create: `src/components/case-study-detail/ProcessSection.tsx`

- [ ] **Step 1: Create ProcessSection.tsx**

```tsx
// src/components/case-study-detail/ProcessSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "processSteps">;

export default function ProcessSection({ processSteps }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#fafafa" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[64px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
            Delivery Approach
          </p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            Team & Process
          </h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-[20px] left-0 right-0 hidden md:block"
            style={{ height: "2px", background: "linear-gradient(to right, #FF4929, rgba(255,73,41,0.2))", zIndex: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[32px] md:gap-[16px]">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col gap-[20px]">
                {/* Number circle */}
                <div className="relative z-10 flex items-center md:block">
                  <div
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-black text-[13px] flex-shrink-0"
                    style={{
                      background: i === 0 ? "#FF4929" : "#fff",
                      color: i === 0 ? "#fff" : "#FF4929",
                      border: "2px solid #FF4929",
                      boxShadow: i === 0 ? "0 0 0 4px rgba(255,73,41,0.15)" : "none",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-bold text-[#0a0a0a] text-[13px] leading-[1.4]">{step.title}</h3>
                  <p className="text-[12px] leading-[1.7]" style={{ color: "#777" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/ProcessSection.tsx
git commit -m "feat: add ProcessSection component"
```

---

## Task 9: ResultsSection Component

**Files:**
- Create: `src/components/case-study-detail/ResultsSection.tsx`

- [ ] **Step 1: Create ResultsSection.tsx**

```tsx
// src/components/case-study-detail/ResultsSection.tsx
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "metrics" | "successStory" | "keyOutcomes">;

export default function ResultsSection({ metrics, successStory, keyOutcomes }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[64px]">

        {/* Section header */}
        <div>
          <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
            The Outcome
          </p>
          <h2 className="font-black text-white text-[36px] leading-[44px] tracking-[-1.5px]">
            Results & Impact
          </h2>
        </div>

        {/* Big metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px]">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-[6px]">
              <span
                className="font-black text-[48px] leading-[1] tracking-[-2px]"
                style={{ color: "#FF4929" }}
              >
                {m.value}
              </span>
              <span className="text-[13px]" style={{ color: "#888" }}>{m.label}</span>
            </div>
          ))}
        </div>

        {/* Success story quote */}
        <div
          className="relative p-[40px] rounded-[20px]"
          style={{ background: "rgba(255,73,41,0.06)", border: "1px solid rgba(255,73,41,0.15)" }}
        >
          <div
            className="absolute top-[20px] left-[32px] font-black text-[80px] leading-[1]"
            style={{ color: "rgba(255,73,41,0.15)", fontFamily: "Georgia, serif" }}
          >
            "
          </div>
          <p className="relative text-[17px] leading-[1.8]" style={{ color: "#ddd", paddingTop: "24px" }}>
            {successStory}
          </p>
        </div>

        {/* Key outcomes checklist */}
        <div>
          <h3 className="font-bold text-white text-[16px] mb-[24px]">Key Outcomes</h3>
          <ul className="flex flex-col gap-[14px]">
            {keyOutcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-[14px]">
                <span
                  className="mt-[2px] w-[20px] h-[20px] rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black"
                  style={{ background: "rgba(255,73,41,0.15)", color: "#FF4929", border: "1px solid rgba(255,73,41,0.3)" }}
                >
                  ✓
                </span>
                <span className="text-[14px] leading-[1.6]" style={{ color: "#bbb" }}>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/ResultsSection.tsx
git commit -m "feat: add ResultsSection component"
```

---

## Task 10: CTASection Component

**Files:**
- Create: `src/components/case-study-detail/CTASection.tsx`

- [ ] **Step 1: Create CTASection.tsx**

```tsx
// src/components/case-study-detail/CTASection.tsx
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative px-4 sm:px-[80px] py-[80px] overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Constellation SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" fill="none">
          <line x1="80" y1="20" x2="200" y2="60" />
          <line x1="200" y1="60" x2="340" y2="30" />
          <line x1="340" y1="30" x2="480" y2="80" />
          <line x1="480" y1="80" x2="620" y2="40" />
          <line x1="620" y1="40" x2="760" y2="90" />
          <line x1="760" y1="90" x2="900" y2="50" />
          <line x1="900" y1="50" x2="1040" y2="80" />
          <line x1="1040" y1="80" x2="1160" y2="40" />
        </g>
        <g fill="#FF4929">
          <circle cx="200" cy="60" r="2.5" opacity="0.5" />
          <circle cx="480" cy="80" r="2" opacity="0.45" />
          <circle cx="760" cy="90" r="2.5" opacity="0.5" />
        </g>
      </svg>

      <div
        className="relative max-w-[800px] mx-auto flex flex-col items-center text-center gap-[28px]"
        style={{ zIndex: 1 }}
      >
        <h2 className="font-black text-white text-[38px] leading-[46px] tracking-[-1px]">
          Recognize your situation{" "}
          <span style={{ color: "#FF4929" }}>in any of these?</span>
          {" "}Let's map yours.
        </h2>
        <p className="text-[16px] leading-[1.7]" style={{ color: "#888", maxWidth: "500px" }}>
          Tell us your challenge and we'll connect you with the InApps team that has solved it before.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-[10px] px-[36px] h-[54px] rounded-[12px] font-bold text-[15px]"
          style={{
            background: "#FF4929",
            color: "#fff",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(255,73,41,0.4)",
          }}
        >
          Start a Conversation
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/CTASection.tsx
git commit -m "feat: add CTASection component"
```

---

## Task 11: RelatedCaseStudies Component

**Files:**
- Create: `src/components/case-study-detail/RelatedCaseStudies.tsx`

- [ ] **Step 1: Create RelatedCaseStudies.tsx**

```tsx
// src/components/case-study-detail/RelatedCaseStudies.tsx
import Link from "next/link";
import type { CaseStudyDetail } from "@/data/caseStudyDetailMock";

type Props = Pick<CaseStudyDetail, "relatedCases">;

export default function RelatedCaseStudies({ relatedCases }: Props) {
  return (
    <section className="px-4 sm:px-[60px] py-[80px]" style={{ background: "#fafafa" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-[48px]">
          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-[12px]" style={{ color: "#FF4929" }}>
              More Work
            </p>
            <h2 className="font-black text-[#0a0a0a] text-[32px] leading-[40px] tracking-[-1px]">
              Related Case Studies
            </h2>
          </div>
          <Link
            href="/case-study"
            className="hidden sm:inline-flex items-center gap-[6px] text-[13px] font-semibold"
            style={{ color: "#FF4929", textDecoration: "none" }}
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
          {relatedCases.map((c) => (
            <Link
              key={c.slug}
              href={`/case-study/${c.slug}`}
              className="group flex flex-col rounded-[16px] overflow-hidden transition-all duration-200"
              style={{
                background: "#fff",
                border: "1px solid #e8e8e8",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                textDecoration: "none",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-[12px] p-[24px]">
                <span
                  className="self-start px-[10px] py-[4px] rounded-full text-[11px] font-bold"
                  style={{ background: "rgba(255,73,41,0.08)", color: "#FF4929" }}
                >
                  {c.industry}
                </span>
                <h3 className="font-bold text-[#0a0a0a] text-[15px] leading-[1.4]">{c.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "#777" }}>{c.shortDescription}</p>
                <span
                  className="mt-[4px] text-[13px] font-semibold inline-flex items-center gap-[4px]"
                  style={{ color: "#FF4929" }}
                >
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/case-study-detail/RelatedCaseStudies.tsx
git commit -m "feat: add RelatedCaseStudies component"
```

---

## Task 12: Update CaseStudyDetailClient.tsx

**Files:**
- Modify: `src/app/case-study/[slug]/CaseStudyDetailClient.tsx`

- [ ] **Step 1: Replace with thin wrapper**

```tsx
// src/app/case-study/[slug]/CaseStudyDetailClient.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/case-study-detail/HeroSection";
import ProjectOverview from "@/components/case-study-detail/ProjectOverview";
import ChallengesSection from "@/components/case-study-detail/ChallengesSection";
import ClientRequirements from "@/components/case-study-detail/ClientRequirements";
import SolutionsSection from "@/components/case-study-detail/SolutionsSection";
import TechnologySection from "@/components/case-study-detail/TechnologySection";
import ProcessSection from "@/components/case-study-detail/ProcessSection";
import ResultsSection from "@/components/case-study-detail/ResultsSection";
import CTASection from "@/components/case-study-detail/CTASection";
import RelatedCaseStudies from "@/components/case-study-detail/RelatedCaseStudies";
import { caseStudyDetail } from "@/data/caseStudyDetailMock";

export default function CaseStudyDetailClient() {
  const d = caseStudyDetail;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1">
        <HeroSection
          heroImage={d.heroImage}
          clientName={d.clientName}
          title={d.title}
          subtitle={d.subtitle}
        />
        <ProjectOverview
          overviewImage={d.overviewImage}
          background={d.background}
          businessContext={d.businessContext}
          projectGoals={d.projectGoals}
        />
        <ChallengesSection challenges={d.challenges} />
        <ClientRequirements requirementGroups={d.requirementGroups} />
        <SolutionsSection solutions={d.solutions} />
        <TechnologySection techCategories={d.techCategories} />
        <ProcessSection processSteps={d.processSteps} />
        <ResultsSection
          metrics={d.metrics}
          successStory={d.successStory}
          keyOutcomes={d.keyOutcomes}
        />
        <CTASection />
        <RelatedCaseStudies relatedCases={d.relatedCases} />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/case-study/[slug]/CaseStudyDetailClient.tsx
git commit -m "feat: wire case study detail page with all sections"
```

---

## Task 13: Verify Build

- [ ] **Step 1: Run dev server and check page**

```bash
cd c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web
npm run dev
```

Open `http://localhost:3000/case-study/novapay` — verify all 10 sections render without errors.

- [ ] **Step 2: Check for TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: no errors.
