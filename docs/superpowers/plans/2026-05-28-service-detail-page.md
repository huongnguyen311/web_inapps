# Service Detail Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dynamic `/services/[slug]` page that renders 13 toggleable sections for all 15 services, pre-rendered at build time.

**Architecture:** Single `src/app/services/[slug]/page.tsx` orchestrates 13 section components. All content lives in `src/data/services.ts` as a typed array. `generateStaticParams()` pre-renders all 15 slugs at build time.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4

---

## Task 1: Extract clientLogos to shared data file

**Files:**
- Create: `src/data/clients.ts`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create `src/data/clients.ts`**

```ts
export const clientLogos = [
  { name: "Prudential",        src: "/Media/client%20logo/prupential.png"        },
  { name: "Techcombank",       src: "/Media/client%20logo/techcombank.png"       },
  { name: "Lotte",             src: "/Media/client%20logo/lotte.png"             },
  { name: "Pegas",             src: "/Media/client%20logo/Pegas.png"             },
  { name: "Mega Market",       src: "/Media/client%20logo/mega_market.png"       },
  { name: "TS",                src: "/Media/client%20logo/TS.png"                },
  { name: "KFC",               src: "/Media/client%20logo/kfc.png"               },
  { name: "Jollibee",          src: "/Media/client%20logo/Jollibee.png"          },
  { name: "Fahasa",            src: "/Media/client%20logo/fahasa.png"            },
  { name: "Fram",              src: "/Media/client%20logo/fram.png"              },
  { name: "ADM",               src: "/Media/client%20logo/ADM.png"              },
  { name: "Annam",             src: "/Media/client%20logo/annam.png"             },
  { name: "Workpac",           src: "/Media/client%20logo/workpac.png"           },
  { name: "Future Processing", src: "/Media/client%20logo/future_processing.png" },
  { name: "HVS",               src: "/Media/client%20logo/HVS.png"               },
  { name: "SG",                src: "/Media/client%20logo/sg.png"                },
  { name: "Baiond",            src: "/Media/client%20logo/baiond.png"            },
  { name: "Simban",            src: "/Media/client%20logo/simban.png"            },
];
```

- [ ] **Step 2: Update `src/app/page.tsx` to import from the new file**

Remove the `clientLogos` array definition from `src/app/page.tsx` (lines 18–37) and replace with:

```ts
import { clientLogos } from "@/data/clients";
```

- [ ] **Step 3: Verify build still works**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npm run build
```

Expected: build completes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/clients.ts src/app/page.tsx
git commit -m "refactor: extract clientLogos to src/data/clients.ts"
```

---

## Task 2: Define TypeScript types and create `src/data/services.ts`

**Files:**
- Create: `src/data/services.ts`

- [ ] **Step 1: Create `src/data/services.ts` with all types and one full service entry**

```ts
export interface SectionToggle {
  enabled: boolean;
}

export interface ServiceOverviewData {
  image: string;
  title: string;
  body: string;
  stats?: { value: string; label: string }[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  highlight: boolean;
  description: string;
  differentiators: string[];
  cta: string;
}

export interface TechGroup {
  label: string;
  tags: string[];
}

export interface WhyItem {
  value: string;
  label: string;
  description: string;
}

export interface CaseStudyData {
  client: string;
  industry: string;
  title: string;
  description: string;
  link: string;
  stats: { value: string; label: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  category: string;
  categoryIcon: string;
  heroTagline: string;
  heroDescription: string;
  heroIllo: string;
  sections: {
    trustedLogos: SectionToggle;
    serviceOverview: SectionToggle & ServiceOverviewData;
    whatYouGet: SectionToggle & { items: FeatureItem[] };
    pricingTable: SectionToggle & { tiers: PricingTier[] };
    isRightForYou: SectionToggle & { checklist: string[] };
    techStack: SectionToggle & { groups: TechGroup[] };
    whyChooseUs: SectionToggle & { highlights: WhyItem[] };
    caseStudy: SectionToggle & CaseStudyData;
    testimonials: SectionToggle & { items: Testimonial[] };
    faq: SectionToggle & { items: FaqItem[] };
    relatedServices: SectionToggle & { slugs: string[] };
  };
}

export const services: ServiceData[] = [
  {
    slug: "ai-agent-development",
    name: "AI Agent Development",
    category: "AI & Automation",
    categoryIcon: "🧠",
    heroTagline: "Autonomous agents that reason, plan, and act",
    heroDescription: "Build autonomous agents that complete complex multi-step tasks end-to-end — without constant human oversight.",
    heroIllo: "/services/ai-agent-development.svg",
    sections: {
      trustedLogos: { enabled: true },
      serviceOverview: {
        enabled: true,
        image: "/services/overview/ai-agent-development.jpg",
        title: "What is AI Agent Development?",
        body: "AI agents go beyond simple chatbots. They reason over context, use tools, call APIs, and execute multi-step plans autonomously. We design and build production-grade agents that integrate into your existing workflows — from document processing and data extraction to customer support automation and internal operations.\n\nEvery agent we build includes a planning layer, tool-use scaffolding, memory management, and a robust evaluation framework to ensure reliability before go-live.",
        stats: [
          { value: "50+", label: "Agents built" },
          { value: "12", label: "Industries served" },
          { value: "3x", label: "Avg. productivity gain" },
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🤖", title: "Custom Agent Design", description: "Reasoning loops, tool use, and memory tailored to your exact workflow and business logic." },
          { icon: "🔗", title: "Tool & API Integration", description: "Connect to internal databases, third-party APIs, or any data source your agent needs to act." },
          { icon: "🧪", title: "Testing & Validation", description: "Rigorous eval framework measuring accuracy, latency, and failure modes before go-live." },
          { icon: "☁️", title: "Cloud Deployment", description: "Production-grade infrastructure on AWS, GCP, or Azure with auto-scaling and uptime SLAs." },
          { icon: "📊", title: "Monitoring Dashboard", description: "Real-time visibility into every agent run, decision trace, and outcome — no black boxes." },
          { icon: "🛡️", title: "Security & Compliance", description: "Data privacy controls, role-based access, and full audit logs for regulated industries." },
        ],
      },
      pricingTable: {
        enabled: true,
        tiers: [
          {
            name: "Starter",
            highlight: false,
            description: "For teams exploring AI automation for the first time.",
            differentiators: ["Single-purpose agent", "Up to 3 tool integrations", "Basic monitoring", "4-week delivery"],
            cta: "Talk to us",
          },
          {
            name: "Growth",
            highlight: true,
            description: "For teams ready to deploy agents into production workflows.",
            differentiators: ["Multi-step orchestration", "Unlimited integrations", "Full eval framework", "Custom dashboard", "8-week delivery"],
            cta: "Talk to us",
          },
          {
            name: "Enterprise",
            highlight: false,
            description: "For organisations running agents at scale across departments.",
            differentiators: ["Multi-agent systems", "On-premise or private cloud", "Compliance & audit logs", "Dedicated team", "Ongoing support SLA"],
            cta: "Talk to us",
          },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You have repetitive multi-step processes that consume hours of your team's time every week",
          "You want AI that takes real actions — not just generates text — across your systems",
          "You need 24/7 autonomous operation without human bottlenecks in the loop",
          "You've tried prompt engineering but need something that can plan, adapt, and recover from failures",
        ],
      },
      techStack: {
        enabled: true,
        groups: [
          { label: "Frameworks", tags: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI"] },
          { label: "Models", tags: ["GPT-4o", "Claude 3", "Gemini", "Llama 3"] },
          { label: "Infrastructure", tags: ["AWS", "GCP", "Azure", "Docker"] },
          { label: "Data & Storage", tags: ["Pinecone", "Weaviate", "Redis", "PostgreSQL"] },
        ],
      },
      whyChooseUs: {
        enabled: true,
        highlights: [
          { value: "200+", label: "Engineers on staff", description: "Deep bench across AI, backend, and cloud — no outsourcing your project to juniors." },
          { value: "12", label: "Years in business", description: "We've been building production software since before LLMs were mainstream." },
          { value: "500+", label: "Projects delivered", description: "From scrappy MVPs to enterprise platforms — we know what production actually requires." },
        ],
      },
      caseStudy: {
        enabled: true,
        client: "Techcombank",
        industry: "Fintech",
        title: "Automated loan processing agent — 80% faster decisions",
        description: "We built a multi-step agent that ingests applicant data, cross-checks credit bureaus, and generates approval recommendations — cutting manual review time from 2 days to 4 hours.",
        link: "/case-study",
        stats: [
          { value: "80%", label: "Faster decisions" },
          { value: "4h", label: "Down from 2 days" },
          { value: "3x", label: "Team capacity" },
        ],
      },
      testimonials: {
        enabled: true,
        items: [
          {
            quote: "The agent InApps built handles what used to take our ops team half a day — now it runs overnight without anyone touching it.",
            author: "Nguyen Van A",
            role: "CTO",
            company: "Techcombank",
          },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { question: "How long does it take to build an AI agent?", answer: "Typically 4–12 weeks depending on complexity. A single-purpose agent with 2–3 tool integrations can ship in 4 weeks. Multi-agent systems with custom infra take 10–12 weeks." },
          { question: "Do we need to provide training data?", answer: "Not necessarily. Most agents we build use foundation models (GPT-4o, Claude) with retrieval-augmented generation. We only fine-tune when off-the-shelf models can't meet your accuracy requirements." },
          { question: "What happens when the agent makes a mistake?", answer: "We build eval frameworks and human-in-the-loop checkpoints for high-stakes decisions. Every agent ships with a monitoring dashboard so you can catch and correct errors in real time." },
          { question: "Can you integrate with our existing systems?", answer: "Yes. We connect agents to REST APIs, internal databases, Slack, email, CRMs, ERPs, and custom tools. If it has an API or SDK, we can wire it in." },
          { question: "Do you offer post-launch support?", answer: "Yes. All engagements include a 30-day hypercare period. Ongoing support SLAs are available for Growth and Enterprise tiers." },
        ],
      },
      relatedServices: {
        enabled: true,
        slugs: ["agentic-workflow-automation", "generative-ai-integration", "ai-development-services"],
      },
    },
  },
  // Remaining 14 services — minimal stubs (all sections enabled: false except hero)
  ...[
    { slug: "agentic-workflow-automation", name: "Agentic Workflow Automation", category: "AI & Automation", categoryIcon: "⚡", heroTagline: "AI-driven pipelines that run reliably at scale", heroDescription: "Replace manual processes with AI-driven pipelines that run reliably at scale.", heroIllo: "/services/agentic-workflow-automation.svg" },
    { slug: "generative-ai-integration", name: "Generative AI Integration", category: "AI & Automation", categoryIcon: "✨", heroTagline: "LLM-powered features built into your product", heroDescription: "Embed LLM-powered features — chat, search, generation — directly into your product.", heroIllo: "/services/generative-ai-integration.svg" },
    { slug: "ai-development-services", name: "AI Development Services", category: "AI & Automation", categoryIcon: "🔬", heroTagline: "Custom ML models and AI infrastructure", heroDescription: "Custom ML models, fine-tuning, and AI infrastructure built for production.", heroIllo: "/services/ai-development-services.svg" },
    { slug: "custom-software-development", name: "Custom Software Development", category: "Engineering", categoryIcon: "⚙️", heroTagline: "Tailor-made software for your exact business logic", heroDescription: "Tailor-made software built around your exact business logic and workflows.", heroIllo: "/services/custom-software-development.svg" },
    { slug: "web-development", name: "Web Development", category: "Engineering", categoryIcon: "🌐", heroTagline: "Fast, scalable web apps and platforms", heroDescription: "Fast, scalable web apps and platforms from landing pages to complex portals.", heroIllo: "/services/web-development.svg" },
    { slug: "mobile-app-development", name: "Mobile App Development", category: "Engineering", categoryIcon: "📱", heroTagline: "Native and cross-platform mobile apps", heroDescription: "Native and cross-platform mobile apps for iOS and Android.", heroIllo: "/services/mobile-app-development.svg" },
    { slug: "saas-development", name: "SaaS Development", category: "Engineering", categoryIcon: "📦", heroTagline: "Multi-tenant SaaS with billing and auth", heroDescription: "Multi-tenant SaaS products with billing, auth, and growth-ready architecture.", heroIllo: "/services/saas-development.svg" },
    { slug: "cloud-devops", name: "Cloud & DevOps", category: "Engineering", categoryIcon: "☁️", heroTagline: "CI/CD pipelines and cloud-native deployments", heroDescription: "CI/CD pipelines, infrastructure as code, and cloud-native deployments.", heroIllo: "/services/cloud-devops.svg" },
    { slug: "mvp-proof-of-concept", name: "MVP / Proof of Concept", category: "Engineering", categoryIcon: "🚀", heroTagline: "Ship in weeks, validate before full investment", heroDescription: "Ship a working product in weeks to validate your idea before full investment.", heroIllo: "/services/mvp-proof-of-concept.svg" },
    { slug: "offshore-dev-center", name: "Offshore Dev Center", category: "Engagement Models", categoryIcon: "🏢", heroTagline: "A fully managed dedicated remote team", heroDescription: "A fully managed, dedicated remote team working exclusively on your product.", heroIllo: "/services/offshore-dev-center.svg" },
    { slug: "staff-augmentation", name: "Staff Augmentation", category: "Engagement Models", categoryIcon: "👥", heroTagline: "Vetted engineers embedded in your team", heroDescription: "Vetted engineers embedded directly into your existing team and processes.", heroIllo: "/services/staff-augmentation.svg" },
    { slug: "project-based-dev", name: "Project-Based Dev", category: "Engagement Models", categoryIcon: "✅", heroTagline: "Fixed-scope delivery with clear milestones", heroDescription: "Fixed-scope delivery with clear milestones, managed end-to-end by our team.", heroIllo: "/services/project-based-dev.svg" },
    { slug: "qa-testing", name: "QA & Testing", category: "Quality & Design", categoryIcon: "🧪", heroTagline: "Ship with confidence, zero regressions", heroDescription: "Manual and automated testing to ship with confidence and zero regressions.", heroIllo: "/services/qa-testing.svg" },
    { slug: "ui-ux-design", name: "UI/UX Design", category: "Quality & Design", categoryIcon: "🎨", heroTagline: "Interfaces that convert and delight", heroDescription: "User research, wireframes, and pixel-perfect interfaces that convert and delight.", heroIllo: "/services/ui-ux-design.svg" },
  ].map((s) => ({
    ...s,
    sections: {
      trustedLogos: { enabled: true },
      serviceOverview: { enabled: false, image: "", title: "", body: "" },
      whatYouGet: { enabled: false, items: [] },
      pricingTable: { enabled: false, tiers: [] },
      isRightForYou: { enabled: false, checklist: [] },
      techStack: { enabled: false, groups: [] },
      whyChooseUs: { enabled: false, highlights: [] },
      caseStudy: { enabled: false, client: "", industry: "", title: "", description: "", link: "", stats: [] },
      testimonials: { enabled: false, items: [] },
      faq: { enabled: false, items: [] },
      relatedServices: { enabled: false, slugs: [] },
    },
  })),
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/services.ts
git commit -m "feat: add ServiceData types and services data file"
```

---

## Task 3: Build ServiceHero component

**Files:**
- Create: `src/components/services/ServiceHero.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceHero.tsx`**

```tsx
import Link from "next/link";
import { ServiceData } from "@/data/services";

interface Props {
  service: Pick<ServiceData, "name" | "category" | "categoryIcon" | "heroTagline" | "heroDescription" | "heroIllo">;
}

export default function ServiceHero({ service }: Props) {
  return (
    <section
      className="relative px-[80px] pt-[100px] pb-[80px] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0800 0%, #0d0d0d 55%, #111 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-40px", top: "-40px", width: "320px", height: "320px",
          background: "radial-gradient(circle, rgba(239,80,35,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[6px] mb-[16px]">
          <Link href="/services" className="text-[11px] text-[#555] hover:text-[#ef5023] transition-colors">Services</Link>
          <span className="text-[11px] text-[#333]">›</span>
          <span className="text-[11px] text-[#555]">{service.category}</span>
          <span className="text-[11px] text-[#333]">›</span>
          <span className="text-[11px] text-[#ef5023]">{service.name}</span>
        </div>

        <div className="grid grid-cols-[1fr_0.55fr] gap-[64px] items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-[6px] border border-[#ef5023]/35 bg-[#ef5023]/8 px-[14px] py-[5px] rounded-full mb-[16px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#ef5023] animate-pulse" />
              <span className="text-[#ef5023] text-[10px] font-bold tracking-[1.2px] uppercase">
                {service.categoryIcon} {service.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-black text-white leading-[1.1] tracking-[-1.5px] mb-[16px]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              {service.name}
            </h1>

            {/* Tagline */}
            <p className="text-[#888] text-[15px] leading-[1.7] mb-[8px]">{service.heroTagline}</p>

            {/* Description */}
            <p className="text-[#666] text-[14px] leading-[1.7] mb-[32px] max-w-[520px]">{service.heroDescription}</p>

            {/* CTAs */}
            <div className="flex items-center gap-[12px]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-[8px] bg-[#ef5023] text-white font-bold text-[14px] px-[28px] h-[50px] rounded-[10px]"
                style={{ boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Start a Project
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-[8px] text-[#aaa] font-semibold text-[14px] px-[20px] h-[50px] rounded-[10px]"
                style={{ border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}
              >
                See Case Study
              </Link>
            </div>
          </div>

          {/* Right — illustration */}
          <div
            className="rounded-[20px] flex items-center justify-center"
            style={{
              aspectRatio: "1",
              background: "rgba(239,80,35,0.06)",
              border: "1px solid rgba(239,80,35,0.15)",
            }}
          >
            <img
              src={service.heroIllo}
              alt={service.name}
              className="w-[70%] h-[70%] object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/services/ServiceHero.tsx
git commit -m "feat: add ServiceHero component"
```

---

## Task 4: Build ServiceTrustedLogos component

**Files:**
- Create: `src/components/services/ServiceTrustedLogos.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceTrustedLogos.tsx`**

```tsx
import { clientLogos } from "@/data/clients";

export default function ServiceTrustedLogos() {
  return (
    <section className="px-[80px] py-[40px]" style={{ background: "#ffffff", borderBottom: "1px solid #f0f0f0" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-[11px] font-bold tracking-[1.5px] uppercase text-[#bbb] mb-[24px]">
          Trusted by 500+ companies worldwide
        </p>
        <div className="flex items-center justify-center flex-wrap gap-[24px]">
          {clientLogos.slice(0, 10).map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-[28px] w-auto object-contain"
              style={{ opacity: 0.4, filter: "grayscale(100%)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/services/ServiceTrustedLogos.tsx
git commit -m "feat: add ServiceTrustedLogos component"
```

---

## Task 5: Build ServiceOverview component

**Files:**
- Create: `src/components/services/ServiceOverview.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceOverview.tsx`**

```tsx
import { ServiceOverviewData } from "@/data/services";

interface Props {
  data: ServiceOverviewData;
}

export default function ServiceOverview({ data }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-[0.9fr_1fr] gap-[80px] items-center">
        {/* Left — image */}
        <div className="rounded-[16px] overflow-hidden" style={{ aspectRatio: "4/3", background: "#f0f0f0" }}>
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        </div>

        {/* Right — text */}
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[12px]">Service Overview</p>
          <h2 className="font-black text-[#111] text-[32px] leading-[1.15] tracking-[-0.8px] mb-[20px]">{data.title}</h2>
          <div className="text-[15px] text-[#555] leading-[1.75] mb-[32px]" style={{ whiteSpace: "pre-line" }}>
            {data.body}
          </div>

          {data.stats && data.stats.length > 0 && (
            <div className="flex items-center gap-[32px] pt-[24px]" style={{ borderTop: "1px solid #e5e7eb" }}>
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-black text-[28px] text-[#ef5023] leading-[1] tracking-[-1px]">{stat.value}</div>
                  <div className="text-[12px] text-[#888] mt-[4px]">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/services/ServiceOverview.tsx
git commit -m "feat: add ServiceOverview component"
```

---

## Task 6: Build ServiceWhatYouGet component

**Files:**
- Create: `src/components/services/ServiceWhatYouGet.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceWhatYouGet.tsx`**

```tsx
import { FeatureItem } from "@/data/services";

interface Props {
  items: FeatureItem[];
}

export default function ServiceWhatYouGet({ items }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#ffffff", borderBottom: "1px solid #f0f0f0" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">What You Get</p>
        <h2 className="font-black text-[#111] text-[32px] leading-[1.15] tracking-[-0.8px] mb-[8px]">Everything included in this service</h2>
        <p className="text-[15px] text-[#888] mb-[40px]">Each engagement delivers these core capabilities, tailored to your stack and goals.</p>

        <div className="grid grid-cols-3 gap-[20px]">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] p-[24px]"
              style={{ background: "#fff4ef", border: "1px solid #fad4c0" }}
            >
              <div
                className="w-[40px] h-[40px] rounded-[8px] flex items-center justify-center text-[20px] mb-[14px]"
                style={{ background: "rgba(239,80,35,0.12)" }}
              >
                {item.icon}
              </div>
              <h4 className="font-bold text-[#111] text-[14px] mb-[6px]">{item.title}</h4>
              <p className="text-[#888] text-[12px] leading-[1.6]">{item.description}</p>
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
git add src/components/services/ServiceWhatYouGet.tsx
git commit -m "feat: add ServiceWhatYouGet component"
```

---

## Task 7: Build ServicePricingTable component

**Files:**
- Create: `src/components/services/ServicePricingTable.tsx`

- [ ] **Step 1: Create `src/components/services/ServicePricingTable.tsx`**

```tsx
import Link from "next/link";
import { PricingTier } from "@/data/services";

interface Props {
  tiers: PricingTier[];
}

export default function ServicePricingTable({ tiers }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#111111", borderBottom: "1px solid #1f1f1f" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Pricing</p>
        <h2 className="font-black text-white text-[32px] leading-[1.15] tracking-[-0.8px] mb-[8px]">Choose your engagement</h2>
        <p className="text-[15px] text-[#888] mb-[48px]">No fixed prices — we scope every engagement to your specific needs.</p>

        <div className="grid grid-cols-3 gap-[16px] items-end">
          {tiers.map((tier) => (
            <Link
              key={tier.name}
              href="/contact"
              className="relative flex flex-col rounded-[20px] overflow-hidden"
              style={{
                background: tier.highlight ? "#ef5023" : "rgba(255,255,255,0.04)",
                border: tier.highlight ? "none" : "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                transform: tier.highlight ? "translateY(-16px) scale(1.02)" : "none",
                boxShadow: tier.highlight
                  ? "0 32px 64px rgba(239,80,35,0.25), 0 12px 28px rgba(239,80,35,0.15)"
                  : "0 8px 32px rgba(0,0,0,0.4)",
                zIndex: tier.highlight ? 2 : 1,
              }}
            >
              {/* Top */}
              <div
                className="px-[28px] pt-[28px] pb-[24px]"
                style={{ borderBottom: tier.highlight ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="font-black text-white text-[20px] mb-[10px]">{tier.name}</h3>
                <p className="text-[13px] leading-[1.6]" style={{ color: tier.highlight ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)" }}>
                  {tier.description}
                </p>
              </div>

              {/* Differentiators */}
              <div className="flex flex-col gap-[10px] px-[28px] py-[22px] flex-1">
                {tier.differentiators.map((d) => (
                  <div key={d} className="flex items-center gap-[10px]">
                    <div
                      className="shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center"
                      style={{ background: tier.highlight ? "rgba(255,255,255,0.2)" : "rgba(239,80,35,0.12)" }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke={tier.highlight ? "#ffffff" : "#ef5023"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[12px]" style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.55)" }}>{d}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-[28px] pb-[28px]">
                <div
                  className="flex items-center justify-between w-full px-[20px] py-[14px] rounded-[14px] font-bold text-[13px]"
                  style={{
                    background: tier.highlight ? "rgba(255,255,255,1)" : "linear-gradient(135deg, #ef5023 0%, #d94019 100%)",
                    color: tier.highlight ? "#ef5023" : "#ffffff",
                    boxShadow: tier.highlight ? "0 4px 20px rgba(255,255,255,0.25)" : "0 4px 20px rgba(239,80,35,0.45)",
                  }}
                >
                  <span>{tier.cta}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke={tier.highlight ? "#ef5023" : "#ffffff"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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
git add src/components/services/ServicePricingTable.tsx
git commit -m "feat: add ServicePricingTable component"
```

---

## Task 8: Build ServiceRightForYou component

**Files:**
- Create: `src/components/services/ServiceRightForYou.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceRightForYou.tsx`**

```tsx
import Link from "next/link";

interface Props {
  checklist: string[];
}

export default function ServiceRightForYou({ checklist }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[40px]">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Is This Right for You?</p>
          <h2 className="font-black text-[#111] text-[32px] leading-[1.15] tracking-[-0.8px]">You'll benefit from this service if…</h2>
        </div>

        <div className="flex flex-col gap-[10px] max-w-[640px] mx-auto">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-start gap-[14px] px-[20px] py-[16px] rounded-[8px]"
              style={{ background: "#fff4ef", border: "1px solid #fad4c0" }}
            >
              <div
                className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center mt-[1px]"
                style={{ background: "#ef5023" }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[14px] text-[#333] leading-[1.6]">{item}</p>
            </div>
          ))}

          {/* Nudge row */}
          <div
            className="flex items-center justify-between px-[20px] py-[16px] rounded-[8px] mt-[4px]"
            style={{ background: "#111" }}
          >
            <span className="text-[13px] text-[#888]">If 2 or more of these describe you — let's talk.</span>
            <Link href="/contact" className="text-[13px] text-[#ef5023] font-bold" style={{ textDecoration: "none" }}>
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/services/ServiceRightForYou.tsx
git commit -m "feat: add ServiceRightForYou component"
```

---

## Task 9: Build ServiceTechStack component

**Files:**
- Create: `src/components/services/ServiceTechStack.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceTechStack.tsx`**

```tsx
"use client";

import { useState } from "react";
import { TechGroup } from "@/data/services";

interface Props {
  groups: TechGroup[];
}

function TechTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 12, fontWeight: 600,
        color: hovered ? "#ef5023" : "#888",
        border: `1px solid ${hovered ? "rgba(239,80,35,0.4)" : "#222"}`,
        borderRadius: 6, padding: "5px 12px",
        background: hovered ? "rgba(239,80,35,0.06)" : "#1a1a1a",
        cursor: "default", transition: "all 0.12s",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

export default function ServiceTechStack({ groups }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#111111", borderBottom: "1px solid #1f1f1f" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Tech Stack</p>
        <h2 className="font-black text-white text-[32px] leading-[1.15] tracking-[-0.8px] mb-[8px]">Technologies we use</h2>
        <p className="text-[15px] text-[#888] mb-[40px]">We match the stack to your needs — not the other way around.</p>

        <div className="grid grid-cols-4 gap-[32px]">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#555] mb-[12px]">{group.label}</p>
              <div className="flex flex-wrap gap-[6px]">
                {group.tags.map((tag) => (
                  <TechTag key={tag} label={tag} />
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
git add src/components/services/ServiceTechStack.tsx
git commit -m "feat: add ServiceTechStack component"
```

---

## Task 10: Build ServiceWhyChooseUs component

**Files:**
- Create: `src/components/services/ServiceWhyChooseUs.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceWhyChooseUs.tsx`**

```tsx
import { WhyItem } from "@/data/services";

interface Props {
  highlights: WhyItem[];
}

export default function ServiceWhyChooseUs({ highlights }: Props) {
  return (
    <section className="px-[80px] py-[64px]" style={{ background: "#ffffff", borderBottom: "1px solid #f0f0f0" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Why InApps</p>
        <h2 className="font-black text-[#111] text-[28px] leading-[1.15] tracking-[-0.6px] mb-[32px]">Why choose us</h2>

        <div className="grid grid-cols-3 gap-[24px]">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[12px] p-[28px]"
              style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}
            >
              <div className="font-black text-[#ef5023] mb-[6px]" style={{ fontSize: "36px", letterSpacing: "-1px", lineHeight: 1 }}>
                {item.value}
              </div>
              <div className="font-bold text-[#111] text-[14px] mb-[8px]">{item.label}</div>
              <p className="text-[#888] text-[12px] leading-[1.6]">{item.description}</p>
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
git add src/components/services/ServiceWhyChooseUs.tsx
git commit -m "feat: add ServiceWhyChooseUs component"
```

---

## Task 11: Build ServiceCaseStudy component

**Files:**
- Create: `src/components/services/ServiceCaseStudy.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceCaseStudy.tsx`**

```tsx
import Link from "next/link";
import { CaseStudyData } from "@/data/services";

interface Props {
  data: CaseStudyData;
}

export default function ServiceCaseStudy({ data }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#111111", borderBottom: "1px solid #1f1f1f" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Case Study</p>
        <h2 className="font-black text-white text-[32px] leading-[1.15] tracking-[-0.8px] mb-[32px]">Proof it works</h2>

        <div
          className="relative grid grid-cols-[1fr_0.8fr] gap-[48px] items-center rounded-[16px] px-[48px] py-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
            border: "1px solid rgba(239,80,35,0.18)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "-60px", top: "50%", transform: "translateY(-50%)",
              width: "200px", height: "200px",
              background: "radial-gradient(circle, rgba(239,80,35,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Left */}
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#ef5023] mb-[6px]">Case Study</p>
            <p className="text-[12px] text-[#555] mb-[8px]">{data.client} · {data.industry}</p>
            <h3 className="font-black text-white text-[22px] leading-[1.25] tracking-[-0.5px] mb-[14px]">{data.title}</h3>
            <p className="text-[13px] text-[#666] leading-[1.7] mb-[20px]">{data.description}</p>
            <Link href={data.link} className="text-[13px] font-bold text-[#ef5023]" style={{ textDecoration: "none" }}>
              Read the full case study →
            </Link>
          </div>

          {/* Right — stats */}
          <div className="relative grid grid-cols-3 gap-[12px]">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center rounded-[10px] px-[16px] py-[20px]"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="font-black text-[#ef5023] mb-[6px]" style={{ fontSize: "28px", lineHeight: 1, letterSpacing: "-0.5px" }}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-[#555]">{stat.label}</div>
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
git add src/components/services/ServiceCaseStudy.tsx
git commit -m "feat: add ServiceCaseStudy component"
```

---

## Task 12: Build ServiceTestimonials component

**Files:**
- Create: `src/components/services/ServiceTestimonials.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceTestimonials.tsx`**

```tsx
import { Testimonial } from "@/data/services";

interface Props {
  items: Testimonial[];
}

export default function ServiceTestimonials({ items }: Props) {
  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Testimonials</p>
        <h2 className="font-black text-[#111] text-[32px] leading-[1.15] tracking-[-0.8px] mb-[40px]">What clients say</h2>

        <div className={`grid gap-[24px] ${items.length === 1 ? "grid-cols-1 max-w-[600px]" : "grid-cols-2"}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-[14px] p-[32px]"
              style={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
            >
              {/* Large quote mark */}
              <div className="font-black text-[#ef5023] mb-[12px]" style={{ fontSize: "48px", lineHeight: 0.8, opacity: 0.3 }}>
                "
              </div>
              <p className="text-[15px] text-[#333] leading-[1.75] mb-[24px]">{item.quote}</p>
              <div className="flex items-center gap-[12px]">
                {item.avatar && (
                  <img src={item.avatar} alt={item.author} className="w-[40px] h-[40px] rounded-full object-cover" />
                )}
                {!item.avatar && (
                  <div
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[14px]"
                    style={{ background: "rgba(239,80,35,0.1)", color: "#ef5023" }}
                  >
                    {item.author[0]}
                  </div>
                )}
                <div>
                  <div className="font-bold text-[#111] text-[13px]">{item.author}</div>
                  <div className="text-[12px] text-[#888]">{item.role}, {item.company}</div>
                </div>
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
git add src/components/services/ServiceTestimonials.tsx
git commit -m "feat: add ServiceTestimonials component"
```

---

## Task 13: Build ServiceFaq component

**Files:**
- Create: `src/components/services/ServiceFaq.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceFaq.tsx`**

```tsx
"use client";

import { useState } from "react";
import { FaqItem } from "@/data/services";

interface Props {
  items: FaqItem[];
}

export default function ServiceFaq({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-[80px] py-[80px]" style={{ background: "#ffffff", borderBottom: "1px solid #f0f0f0" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">FAQ</p>
        <h2 className="font-black text-[#111] text-[32px] leading-[1.15] tracking-[-0.8px] mb-[40px]">Frequently asked questions</h2>

        <div className="max-w-[720px] flex flex-col">
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-[16px] py-[20px] text-left"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span
                  className="font-semibold text-[15px] leading-[1.4]"
                  style={{ color: open === i ? "#ef5023" : "#111" }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 text-[18px] font-light transition-transform duration-200"
                  style={{
                    color: "#aaa",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="pb-[20px]">
                  <p className="text-[14px] text-[#555] leading-[1.75]">{item.answer}</p>
                </div>
              )}
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
git add src/components/services/ServiceFaq.tsx
git commit -m "feat: add ServiceFaq accordion component"
```

---

## Task 14: Build ServiceRelated and ServiceCta components

**Files:**
- Create: `src/components/services/ServiceRelated.tsx`
- Create: `src/components/services/ServiceCta.tsx`

- [ ] **Step 1: Create `src/components/services/ServiceRelated.tsx`**

```tsx
import Link from "next/link";
import { services } from "@/data/services";

interface Props {
  slugs: string[];
  currentSlug: string;
}

export default function ServiceRelated({ slugs, currentSlug }: Props) {
  const related = slugs
    .filter((s) => s !== currentSlug)
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="px-[80px] py-[64px]" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#ef5023] mb-[8px]">Related Services</p>
        <h2 className="font-black text-[#111] text-[28px] leading-[1.15] tracking-[-0.6px] mb-[32px]">You might also need</h2>

        <div className="grid grid-cols-3 gap-[16px]">
          {related.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="flex items-center justify-between gap-[12px] rounded-[10px] px-[20px] py-[16px] group"
              style={{ background: "#fff4ef", border: "1px solid #fad4c0", textDecoration: "none" }}
            >
              <div className="flex items-center gap-[12px]">
                <span className="text-[22px]">{svc.categoryIcon}</span>
                <div>
                  <div className="font-bold text-[#111] text-[13px]">{svc.name}</div>
                  <div className="text-[11px] text-[#aaa] mt-[2px]">{svc.category}</div>
                </div>
              </div>
              <span className="text-[#ef5023] font-bold text-[16px] transition-transform duration-150 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `src/components/services/ServiceCta.tsx`**

```tsx
import Link from "next/link";

interface Props {
  serviceName: string;
}

export default function ServiceCta({ serviceName }: Props) {
  return (
    <section className="px-[80px] py-[64px]" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative flex items-center justify-between gap-[48px] px-[56px] py-[44px] rounded-[20px] overflow-hidden"
          style={{
            background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
            border: "1px solid rgba(239,80,35,0.18)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute pointer-events-none blur-[80px]"
            style={{
              left: "-60px", top: "50%", transform: "translateY(-50%)",
              width: "240px", height: "240px",
              background: "rgba(239,80,35,0.12)",
              borderRadius: "50%",
            }}
          />

          <div className="relative flex flex-col gap-[8px] min-w-0">
            <h2 className="font-black text-white text-[26px] leading-[1.15] tracking-[-0.6px]">
              Ready to get started with {serviceName}?
            </h2>
            <p className="text-[14px] text-[#888] leading-[1.6]">
              Tell us about your project — no pitch, no obligation.
            </p>
          </div>

          <Link
            href="/contact"
            className="relative shrink-0 inline-flex items-center gap-[10px] px-[28px] py-[15px] rounded-[12px] font-bold text-[14px] overflow-hidden"
            style={{
              background: "#ef5023",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
              whiteSpace: "nowrap",
            }}
          >
            <span>Talk to a Solutions Consultant</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/services/ServiceRelated.tsx src/components/services/ServiceCta.tsx
git commit -m "feat: add ServiceRelated and ServiceCta components"
```

---

## Task 15: Assemble the `[slug]/page.tsx` route

**Files:**
- Create: `src/app/services/[slug]/page.tsx`

- [ ] **Step 1: Create `src/app/services/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceWhatYouGet from "@/components/services/ServiceWhatYouGet";
import ServicePricingTable from "@/components/services/ServicePricingTable";
import ServiceRightForYou from "@/components/services/ServiceRightForYou";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import ServiceWhyChooseUs from "@/components/services/ServiceWhyChooseUs";
import ServiceCaseStudy from "@/components/services/ServiceCaseStudy";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceRelated from "@/components/services/ServiceRelated";
import ServiceCta from "@/components/services/ServiceCta";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const { sections } = service;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1 pt-[88px]">
        <ServiceHero service={service} />
        {sections.trustedLogos.enabled && <ServiceTrustedLogos />}
        {sections.serviceOverview.enabled && <ServiceOverview data={sections.serviceOverview} />}
        {sections.whatYouGet.enabled && <ServiceWhatYouGet items={sections.whatYouGet.items} />}
        {sections.pricingTable.enabled && <ServicePricingTable tiers={sections.pricingTable.tiers} />}
        {sections.isRightForYou.enabled && <ServiceRightForYou checklist={sections.isRightForYou.checklist} />}
        {sections.techStack.enabled && <ServiceTechStack groups={sections.techStack.groups} />}
        {sections.whyChooseUs.enabled && <ServiceWhyChooseUs highlights={sections.whyChooseUs.highlights} />}
        {sections.caseStudy.enabled && <ServiceCaseStudy data={sections.caseStudy} />}
        {sections.testimonials.enabled && <ServiceTestimonials items={sections.testimonials.items} />}
        {sections.faq.enabled && <ServiceFaq items={sections.faq.items} />}
        {sections.relatedServices.enabled && (
          <ServiceRelated slugs={sections.relatedServices.slugs} currentSlug={service.slug} />
        )}
        <ServiceCta serviceName={service.name} />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles with no errors**

```bash
cd "c:/Users/ntthu/OneDrive/Documents/InApps/inapps-web" && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Run the dev server and visit `http://localhost:3000/services/ai-agent-development`**

```bash
npm run dev
```

Expected: page renders with Hero, Trusted By Logos, and all enabled sections. No console errors.

- [ ] **Step 4: Check all 15 slugs resolve (spot check 3)**

Visit in browser:
- `http://localhost:3000/services/ai-agent-development` → full page
- `http://localhost:3000/services/web-development` → hero + logos only (other sections disabled)
- `http://localhost:3000/services/ui-ux-design` → hero + logos only
- `http://localhost:3000/services/unknown-slug` → 404 page

- [ ] **Step 5: Run build to verify static generation**

```bash
npm run build
```

Expected: output shows 15 routes under `/services/[slug]` pre-rendered as static pages.

- [ ] **Step 6: Commit**

```bash
git add src/app/services/[slug]/page.tsx
git commit -m "feat: add dynamic service detail page with generateStaticParams"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Hero (Task 3)
- ✅ Trusted By Logos (Task 4)
- ✅ Service Overview (Task 5)
- ✅ What You Get (Task 6)
- ✅ Pricing Table (Task 7)
- ✅ Is This Right for You? (Task 8)
- ✅ Tech Stack (Task 9)
- ✅ Why Choose Us (Task 10)
- ✅ Case Study (Task 11)
- ✅ Testimonials (Task 12)
- ✅ FAQ (Task 13)
- ✅ Related Services (Task 14)
- ✅ Bottom CTA (Task 14)
- ✅ generateStaticParams (Task 15)
- ✅ All 15 service stubs in data file (Task 2)
- ✅ clientLogos extracted (Task 1)
- ✅ Section toggle (enabled flag) (Task 15)

**Type consistency check:**
- `ServiceOverviewData` used in Task 5 matches interface defined in Task 2 ✅
- `FeatureItem[]` used in Task 6 matches Task 2 ✅
- `PricingTier[]` used in Task 7 matches Task 2 ✅
- `TechGroup[]` used in Task 9 matches Task 2 ✅
- `WhyItem[]` used in Task 10 matches Task 2 ✅
- `CaseStudyData` used in Task 11 matches Task 2 ✅
- `Testimonial[]` used in Task 12 matches Task 2 ✅
- `FaqItem[]` used in Task 13 matches Task 2 ✅
- `ServiceRelated` uses `slugs: string[]` and looks up from `services` array ✅
- `ServiceCta` receives `serviceName: string` from `service.name` ✅
