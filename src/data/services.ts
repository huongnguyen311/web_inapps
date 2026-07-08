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
  subtitle?: string;
  bullets?: string[];
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

export type CaseStudyModel = "ODC Model" | "Dedicated Team" | "Staff Augmentation" | "Fixed-Price Model";

export interface CaseStudyData {
  client: string;
  industry: string;
  title: string;
  description: string;
  link: string;
  stats: { value: string; label: string }[];
  image?: string;
  altText?: string;
  model?: CaseStudyModel;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface FaqItem {
  label: string;
  question: string;
  answer: string;
}

export interface ProblemItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  phase: string;
  duration: string;
  description: string;
  includes: string[];
  deliverable?: string;
}

export interface TeamRole {
  title: string;
  responsibility: string;
  icon: string;
}

export interface VettingStage {
  stage: string;
  description: string;
}

export interface QualityMetric {
  value: string;
  label: string;
}

export interface ComparisonRow {
  criterion: string;
  inApps: string | boolean;
  inHouse: string | boolean;
  typical: string | boolean;
}

export interface ServiceData {
  slug: string;
  name: string;
  category: string;
  categoryIcon: string;
  heroTagline: string;
  heroDescription: string;
  heroIllo: string;
  techStack?: TechGroup[];
  showTrustBadge?: boolean;
  cta?: { heading?: string; subtitle?: string; ctaLabel?: string };
  metaTitle?: string;
  metaDescription?: string;
  sections: {
    buyerProblems: SectionToggle & { problems: ProblemItem[]; heading?: string; subtitle?: string; insightText?: string; hideTrustBadge?: boolean };
    serviceOverview: SectionToggle & ServiceOverviewData;
    isRightForYou: SectionToggle & { checklist: string[]; sectionLabel?: string; heading?: string; items?: { title: string; desc: string; tag?: string; highlight?: string }[] };
    whatYouGet: SectionToggle & { items: FeatureItem[]; heading?: string };
    process: SectionToggle & { steps: ProcessStep[]; heading?: string; subtitle?: string };
    teamStructure: SectionToggle & { roles: TeamRole[]; note?: string; subtitle?: string };
    qualityVetting: SectionToggle & { stages: VettingStage[]; metrics: QualityMetric[]; subtitle?: string; heading?: string; eyebrow?: string };
    caseStudy: SectionToggle & { items: CaseStudyData[] };
    comparison: SectionToggle & { rows: ComparisonRow[]; competitorLabel?: string };
    faq: SectionToggle & { items: FaqItem[]; heading?: string };
  };
}

export const services: ServiceData[] = [
  {
    slug: "ai-agent-development",
    name: "AI Agent Development",
    category: "AI & Automation",
    categoryIcon: "🧠",
    heroTagline: "Production-ready AI agents, built to act",
    heroDescription: "We build agents that handle complex tasks end to end\nno hand-holding required.",
    heroIllo: "/services/ai-agent-development.svg",
    showTrustBadge: false,
    techStack: [
      {
        label: "LLM Models",
        tags: ["GPT-4o", "Claude 3.5", "Gemini 1.5", "Mistral", "LLaMA 3", "Command R+"],
      },
      {
        label: "Agent Frameworks",
        tags: ["LangChain", "LangGraph", "AutoGen", "CrewAI", "Semantic Kernel", "Haystack"],
      },
      {
        label: "Vector & Memory",
        tags: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "Redis", "Chroma"],
      },
      {
        label: "Infrastructure",
        tags: ["AWS Bedrock", "Azure OpenAI", "GCP Vertex AI", "Docker", "Kubernetes"],
      },
      {
        label: "Orchestration",
        tags: ["Temporal", "Airflow", "Celery", "Ray", "Prefect"],
      },
      {
        label: "Monitoring & Eval",
        tags: ["LangSmith", "Helicone", "Arize", "Weights & Biases", "Prometheus"],
      },
    ],
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most AI Agent Projects\nNever Reach Production",
        subtitle: "The demo works. Production is a different problem entirely.",
        problems: [
          { title: "Agents that hallucinate or take wrong actions in production — with no framework to catch it before users do", description: "" },
          { title: "LLM costs that explode at scale because nobody modeled token usage, caching, or prompt size", description: "" },
          { title: "Tool integrations that work in the demo but break silently on real data and edge cases", description: "" },
          { title: "No eval pipeline — so the team can't measure quality or prove improvement to stakeholders", description: "" },
          { title: "Engineering hours burned learning LLM patterns in production, on a live product, with real users watching", description: "" },
          { title: "An agent stuck in pilot indefinitely because nobody can get sign-off without a reliability proof", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is AI Agent Development?",
        body: "AI agents go beyond simple chatbots. They reason over context, use tools, call APIs, and execute multi-step plans autonomously. We design and build production-grade agents that integrate into your existing workflows  from document processing and data extraction to customer support automation and internal operations.\n\nEvery agent we build includes a planning layer, tool-use scaffolding, memory management, and a robust evaluation framework to ensure reliability before go-live.",
        stats: [
          { value: "750+", label: "Projects delivered" },
          { value: "10+", label: "Years in business" },
          { value: "85%+", label: "Multi-year retention" },
          { value: "15+", label: "Countries served" },
          { value: "4.9/5", label: "Clutch Rating · 50+ Reviews" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You have repetitive multi-step processes that consume hours of your team's time every week",
          "You want AI that takes real actions, not just generates text, across your systems",
          "You need 24/7 autonomous operation without human bottlenecks in the loop",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🤖", title: "Custom Agent Design", description: "Reasoning loops, tool use, and memory tailored to your exact workflow and business logic." },
          { icon: "🔗", title: "Tool & API Integration", description: "Connect to internal databases, third-party APIs, or any data source your agent needs to act." },
          { icon: "🧪", title: "Testing & Validation", description: "Rigorous eval framework measuring accuracy, latency, and failure modes before go-live." },
          { icon: "☁️", title: "Cloud Deployment", description: "Production-grade infrastructure on AWS, GCP, or Azure with auto-scaling and uptime SLAs." },
          { icon: "📊", title: "Monitoring Dashboard", description: "Real-time visibility into every agent run, decision trace, and outcome no black boxes." },
          { icon: "🛡️", title: "Security & Compliance", description: "Data privacy controls, role-based access, and full audit logs for regulated industries." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          {
            phase: "Discovery & Planning",
            duration: "Week 1-2",
            description: "",
            includes: ["Discovery call", "Requirement analysis", "Solution consulting", "Project estimation"],
          },
          {
            phase: "Team Setup & Design",
            duration: "Week 2-3",
            description: "",
            includes: ["Dedicated team allocation", "UI/UX design", "Sprint planning", "Workflow setup"],
          },
          {
            phase: "Agile Development",
            duration: "Ongoing sprints",
            description: "",
            includes: ["Sprint-based delivery", "Continuous development", "Weekly demos", "Progress reporting"],
          },
          {
            phase: "QA & Deployment",
            duration: "Per release",
            description: "",
            includes: ["QA testing", "Performance optimization", "CI/CD deployment", "Release preparation"],
          },
        ],
      },
      teamStructure: {
        enabled: false,
        roles: [
          { icon: "🧠", title: "AI Solutions Architect", responsibility: "Owns the agent design, reasoning strategy, and technical decisions end-to-end." },
          { icon: "⚙️", title: "AI/ML Engineer (×2)", responsibility: "Builds the agent core planning loops, memory, tool calling, and eval harness." },
          { icon: "🔗", title: "Backend / Integration Engineer", responsibility: "Connects the agent to your systems APIs, databases, internal tools." },
          { icon: "☁️", title: "DevOps / Infra Engineer", responsibility: "Handles cloud deployment, CI/CD, scaling, and uptime monitoring." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Designs and runs the eval framework; owns regression testing and failure analysis." },
          { icon: "📋", title: "Project Manager", responsibility: "Single point of contact. Runs sprints, demos, and stakeholder communication." },
        ],
        note: "Team size scales with project scope. Starter engagements typically run with 3 engineers; Enterprise projects include a dedicated team of 6–8 with a full-time PM.",
      },
      qualityVetting: {
        enabled: false,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate from applicant pool" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction score" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          {
            client: "Techcombank",
            industry: "Fintech",
            title: "Automated loan processing agent   80% faster decisions",
            description: "We built a multi-step agent that ingests applicant data, cross-checks credit bureaus, and generates approval recommendations cutting manual review time from 2 days to 4 hours.",
            link: "/case-study",
            image: "/Media/Image/prd 1.jpg",
            model: "ODC Model",
            stats: [
              { value: "80%", label: "Faster decisions" },
              { value: "4h", label: "Down from 2 days" },
              { value: "3x", label: "Team capacity" },
            ],
          },
          {
            client: "Prudential",
            industry: "Insurance",
            title: "AI claims triage agent   60% cost reduction",
            description: "We deployed an intelligent triage agent that classifies incoming claims, routes them to the right handler, and flags anomalies automatically eliminating manual sorting entirely.",
            link: "/case-study",
            image: "/Media/Image/prd 2.jpg",
            model: "Dedicated Team",
            stats: [
              { value: "60%", label: "Cost reduction" },
              { value: "2M+", label: "Daily transactions" },
              { value: "300%", label: "Faster processing" },
            ],
          },
          {
            client: "Mega Market",
            industry: "E-commerce",
            title: "Personalization agent driving 40% revenue lift",
            description: "We built a real-time recommendation agent that adapts product listings per user session, increasing add-to-cart rates and driving a sustained 40% revenue increase within 6 months.",
            link: "/case-study",
            image: "/Media/Image/prd 3.jpg",
            model: "Staff Augmentation",
            stats: [
              { value: "40%", label: "Revenue increase" },
              { value: "1M+", label: "Downloads" },
              { value: "6mo", label: "To launch" },
            ],
          },
          {
            client: "Workpac",
            industry: "Workforce",
            title: "Workforce scheduling agent   50% less admin",
            description: "We replaced manual shift scheduling with an agent that matches workers to open shifts, handles compliance rules, and sends confirmations automatically cutting admin overhead in half.",
            link: "/case-study",
            image: "/Media/Image/prd 4.jpg",
            model: "Fixed-Price Model",
            stats: [
              { value: "50%", label: "Less admin" },
              { value: "30K+", label: "Workers" },
              { value: "3×", label: "Faster onboarding" },
            ],
          },
        ],
      },
      comparison: {
        enabled: false,
        competitorLabel: "Typical AI Agency",
        rows: [
          { criterion: "Production-grade eval framework", inApps: true, inHouse: false, typical: false },
          { criterion: "Human-in-the-loop checkpoints", inApps: true, inHouse: false, typical: false },
          { criterion: "Full monitoring & decision traces", inApps: true, inHouse: false, typical: "Optional add-on" },
          { criterion: "Integration with legacy systems", inApps: true, inHouse: false, typical: "Limited" },
          { criterion: "Dedicated PM + weekly demos", inApps: true, inHouse: false, typical: false },
          { criterion: "Post-launch hypercare (30 days)", inApps: true, inHouse: false, typical: false },
          { criterion: "Fixed-price option available", inApps: true, inHouse: false, typical: false },
          { criterion: "NDA before first call", inApps: true, inHouse: false, typical: "On request" },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Timeline", question: "How long does it take to build an AI agent?", answer: "Typically 4–12 weeks depending on complexity. A single-purpose agent with 2–3 tool integrations can ship in 4 weeks. Multi-agent systems with custom infra take 10–12 weeks." },
          { label: "Training Data", question: "Do we need to provide training data?", answer: "Not necessarily. Most agents we build use foundation models (GPT-4o, Claude) with retrieval-augmented generation. We only fine-tune when off-the-shelf models can't meet your accuracy requirements." },
          { label: "Reliability", question: "What happens when the agent makes a mistake?", answer: "We build eval frameworks and human-in-the-loop checkpoints for high-stakes decisions. Every agent ships with a monitoring dashboard so you can catch and correct errors in real time." },
          { label: "Integration", question: "Can you integrate with our existing systems?", answer: "Yes. We connect agents to REST APIs, internal databases, Slack, email, CRMs, ERPs, and custom tools. If it has an API or SDK, we can wire it in." },
          { label: "Support", question: "Do you offer post-launch support?", answer: "Yes. All engagements include a 30-day hypercare period. Ongoing support SLAs are available for Growth and Enterprise tiers." },
        ],
      },
    },
  },
  {
    slug: "agentic-workflow-automation",
    name: "Agentic Workflow Automation",
    category: "AI & Automation",
    categoryIcon: "⚡",
    heroTagline: "AI-driven pipelines that run reliably at scale",
    heroDescription: "Your team is doing work that should not require a human. We build AI-driven pipelines that handle it continuously, adapt to exceptions, and run reliably at scale.",
    heroIllo: "/services/agentic-workflow-automation.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Manual Workflows\nDrain Your Best People",
        subtitle: "Your team is too expensive to be doing work a computer could handle in seconds.",
        insightText: "Every hour your team spends on repeatable, rule-based work is an hour not spent on decisions only humans should make. Here is where that time goes.",
        problems: [
          { title: "Hours lost every day to data entry, approval routing, and manual handoffs between systems that do not talk to each other", description: "" },
          { title: "Errors that compound when humans are the integration layer between your tools", description: "" },
          { title: "Entire workflows stalled because one person is on leave or overloaded", description: "" },
          { title: "No visibility into where a request is sitting or how long each step takes", description: "" },
          { title: "Tools that do not connect, forcing someone to copy data from one system and paste it into another, every time", description: "" },
          { title: "Growing the business means hiring more people to do the same manual work, not building systems that handle it automatically", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Agentic Workflow Automation?",
        body: "Agentic workflows use AI to orchestrate multi-step business processes from start to finish: triggering actions, making decisions, and adapting to outcomes without human intervention. Unlike simple RPA that breaks when a format changes, our agents reason over context, handle exceptions, and integrate with your existing tools.\n\nWe map your current workflows, identify the highest-ROI automation opportunities, and build AI-powered pipelines that run continuously with full audit logging.",
        stats: [
          { value: "70%", label: "Avg. time saved" },
          { value: "40+", label: "Workflows automated" },
          { value: "99.5%", label: "Uptime SLA" },
        ],
      },
      isRightForYou: {
        enabled: true,
        heading: "AI workflow automation is a fit if:",
        checklist: [
          "Your team spends 10+ hours per week on repetitive, rule-based tasks",
          "You have multi-step processes that involve multiple tools or approvals",
          "You want to scale operations without proportionally growing headcount",
        ],
        items: [
          {
            tag: "Manual Process",
            title: "Your team still runs repeatable processes by hand",
            highlight: "repeatable processes",
            desc: "Your team follows the same steps every time: checking data, routing for approval, copying between systems, sending notifications. The process is defined. It just has not been automated yet.",
          },
          {
            tag: "Brittle Automation",
            title: "Your current automation breaks when inputs are unstructured or unexpected",
            highlight: "automation breaks",
            desc: "Your RPA breaks when an email format changes or a PDF looks different. You need automation that reads context, handles exceptions, and makes sensible decisions on edge cases.",
          },
          {
            tag: "Scaling Ops",
            title: "You want operations to scale without scaling headcount proportionally",
            highlight: "scale without scaling headcount",
            desc: "You are scaling fast, but you do not want to grow your ops team at the same rate. You need systems that scale with volume, not with headcount.",
          },
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          {
            icon: "icon:workflow-map",
            title: "Discovery and Workflow Mapping",
            description: "",
            subtitle: "We understand the process before touching any code.",
            bullets: [
              "End-to-end workflow audit and documentation",
              "Bottleneck identification and ROI estimation per workflow",
              "Automation feasibility assessment",
              "Prioritized pipeline roadmap before scoping begins",
            ],
          },
          {
            icon: "icon:pipeline-design",
            title: "Pipeline Design and Architecture",
            description: "",
            subtitle: "Designed for reliability, not just functionality.",
            bullets: [
              "Multi-step pipeline architecture",
              "Tool integration and API connection plan",
              "Exception handling and human-in-the-loop fallback design",
              "Approval flow logic and audit trail specification",
            ],
          },
          {
            icon: "icon:build-test",
            title: "Build, Integrate, and Test",
            description: "",
            subtitle: "Every path tested, including the ones that break.",
            bullets: [
              "Agent development and LLM integration",
              "API connections to your CRM, ERP, and third-party tools",
              "Full QA including edge cases and failure scenarios",
              "Staging deployment and client UAT before go-live",
            ],
          },
          {
            icon: "icon:go-live",
            title: "Go-Live and Ongoing Support",
            description: "",
            subtitle: "99.5% uptime SLA from day one.",
            bullets: [
              "Production deployment with monitoring and alerting",
              "Performance tuning in the first 30 days",
              "User training and documentation",
              "Ongoing support retainer available",
            ],
          },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Discovery & Mapping", duration: "Week 1", description: "", includes: ["Workflow audit", "Bottleneck identification", "Automation feasibility", "ROI estimation"] },
          { phase: "Design & Architecture", duration: "Week 2", description: "", includes: ["Pipeline design", "Tool integration plan", "Exception handling", "Approval flows"] },
          { phase: "Build & Integrate", duration: "Week 3–6", description: "", includes: ["Agent development", "API integrations", "Testing & QA", "Staging deployment"] },
          { phase: "Go-live & Monitor", duration: "Ongoing", description: "", includes: ["Production rollout", "Performance tuning", "User training", "Ongoing support"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "⚡", title: "Automation Architect", responsibility: "Designs the overall pipeline logic, tool connections, and exception-handling strategy." },
          { icon: "🤖", title: "AI/ML Engineer", responsibility: "Builds the reasoning and decision layers powering each automated step." },
          { icon: "🔗", title: "Integration Engineer", responsibility: "Connects pipelines to your CRM, ERP, databases, and third-party APIs." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Tests all workflow paths including edge cases and failure scenarios." },
          { icon: "📋", title: "Project Manager", responsibility: "Keeps delivery on track, runs demos, and manages stakeholder communication." },
        ],
        note: "Engagements typically start with a 3-person team. Complex multi-system workflows scale to 5–6 specialists.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate from applicant pool" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction score" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Logistics Co.", industry: "Logistics", title: "Automated invoice processing: 90% faster approvals", description: "We built an agentic pipeline that extracts invoice data, matches purchase orders, flags discrepancies, and routes for approval, cutting a 3-day process to 4 hours.", link: "/case-study", stats: [{ value: "90%", label: "Faster approvals" }, { value: "3 days→4h", label: "Cycle time" }] },
          { client: "HealthTech SaaS", industry: "Healthcare", title: "Patient onboarding automation: zero manual steps", description: "End-to-end onboarding pipeline that collects patient data, verifies insurance, schedules appointments, and sends confirmations without any human involvement.", link: "/case-study", stats: [{ value: "100%", label: "Manual steps removed" }, { value: "4×", label: "Onboarding capacity" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical RPA Vendor",
        rows: [
          { criterion: "Handles unstructured data", inApps: true, inHouse: false, typical: false },
          { criterion: "Adapts to exceptions without human", inApps: true, inHouse: false, typical: false },
          { criterion: "Full audit trail", inApps: true, inHouse: false, typical: "Partial" },
          { criterion: "LLM-powered decision making", inApps: true, inHouse: false, typical: false },
          { criterion: "Post-launch support (30 days)", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Timeline", question: "How long does it take to automate a workflow?", answer: "Simple workflows take 3–4 weeks. Complex multi-system pipelines with approvals and exceptions take 6–10 weeks." },
          { label: "Complexity", question: "Can you automate workflows that involve unstructured data like emails or PDFs?", answer: "Yes. Our agents use LLMs to parse and extract data from emails, PDFs, scanned documents, and other unstructured sources." },
          { label: "Reliability", question: "What happens if a step in the workflow fails?", answer: "We build retry logic, fallback paths, and human-in-the-loop escalations for every critical step. You get notified immediately when something needs attention." },
          { label: "Integration", question: "Which tools can you integrate with?", answer: "Any tool with an API or webhook — including Salesforce, HubSpot, SAP, NetSuite, Slack, Gmail, Jira, and custom internal systems." },
          { label: "Support", question: "Do you offer ongoing maintenance?", answer: "Yes. All engagements include 30-day hypercare. Long-term maintenance SLAs are available." },
        ],
      },
    },
  },
  {
    slug: "generative-ai-integration",
    name: "Generative AI Integration",
    category: "AI & Automation",
    categoryIcon: "✨",
    heroTagline: "LLM-powered features built into your product",
    heroDescription: "We embed LLM-powered features into your existing product: semantic search, conversational UI, content generation, and summarization. Production-ready. Shipped in 4 weeks.",
    heroIllo: "/services/generative-ai-integration.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most AI Features\nFail to Ship",
        subtitle: "Adding AI to your product sounds straightforward. Making it reliable, safe, and actually useful in production is where teams get stuck.",
        problems: [
          { title: "AI outputs that hallucinate or contradict themselves — and you find out when a customer screenshots it", description: "" },
          { title: "No strategy for which AI features actually move a metric, so the team builds what's interesting, not what users need", description: "" },
          { title: "LLM costs that balloon in production because nobody modeled token usage before going live", description: "" },
          { title: "Response times that kill the UX — users submit a request and wait 8 seconds for an answer", description: "" },
          { title: "Legal or InfoSec blocking deployment because nobody thought through data residency, PII, or model provider terms", description: "" },
          { title: "A working prototype that took 2 weeks to build and 3 months to get production-hardened", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Generative AI Integration?",
        body: "We embed LLM-powered capabilities — conversational chat, semantic search, content generation, summarization, classification — directly into your existing product. This isn't a bolt-on chatbot. It's purpose-built AI woven into your UX and backend workflows.\n\nWe handle model selection, prompt engineering, RAG pipelines, cost optimization, and safety guardrails so your team ships fast without the LLM learning curve.",
        stats: [
          { value: "30+", label: "AI features shipped" },
          { value: "60%", label: "Avg. cost reduction vs. naive impl." },
          { value: "4wk", label: "Avg. time to first feature" },
        ],
      },
      isRightForYou: {
        enabled: true,
        heading: "AI integration is a fit if:",
        checklist: [
          "You want to add AI-powered chat, search, or generation to your existing product",
          "Your team lacks LLM application experience and needs to ship fast",
          "You need production-grade AI — not a demo — with cost control and safety built in",
        ],
        items: [
          {
            tag: "Existing Product",
            title: "You have a product. Now you want AI in it.",
            desc: "Not building from scratch. You have a working product, an existing user base, and a specific AI feature on your roadmap that moves faster than your current team has bandwidth to keep up with.",
          },
          {
            tag: "Data-Powered UX",
            title: "Your product has data. Your users should be able to talk to it.",
            desc: "Your product holds data, documents, or content that could power semantic search, Q&A, recommendations, or personalized generation. You want users to experience that, not just search with keywords.",
          },
          {
            tag: "Production-Ready",
            title: "You need the feature to work reliably in production, not just in a demo",
            desc: "Hallucination-free. Cost-controlled. Safe. Fast enough that users do not notice the AI call. You need someone who has shipped this before, not learned it on your project.",
          },
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "💬", title: "Conversational UI", description: "Context-aware chat interfaces with memory, persona, and guardrails tuned for your use case." },
          { icon: "🔍", title: "Semantic Search & RAG", description: "Retrieval-augmented generation pipelines that ground LLM responses in your own data." },
          { icon: "✍️", title: "Content Generation", description: "Automated drafting, summarization, and transformation of text tailored to your brand voice." },
          { icon: "💰", title: "Cost Optimization", description: "Token budgeting, caching, and model routing strategies to minimize LLM spend." },
          { icon: "🛡️", title: "Safety & Guardrails", description: "Content filtering, PII redaction, and output validation to keep AI behavior on-policy." },
          { icon: "📊", title: "Observability", description: "Prompt logging, latency tracking, and quality metrics so you can iterate with confidence." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Strategy & Scoping", duration: "Week 1", description: "", includes: ["Feature prioritization", "Model selection", "Data audit", "Cost modeling"] },
          { phase: "Prototype", duration: "Week 2", description: "", includes: ["RAG pipeline setup", "Prompt engineering", "UI prototype", "Stakeholder review"] },
          { phase: "Build & Integrate", duration: "Week 3–6", description: "", includes: ["Production integration", "Safety layers", "Performance tuning", "Testing"] },
          { phase: "Launch & Optimize", duration: "Ongoing", description: "", includes: ["Production deploy", "Cost monitoring", "Quality iteration", "Model upgrades"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "✨", title: "AI Product Lead", responsibility: "Defines which AI features to build and how they integrate into the product UX." },
          { icon: "🧠", title: "LLM Engineer (×2)", responsibility: "Builds prompt pipelines, RAG systems, and fine-tuning workflows." },
          { icon: "🌐", title: "Full-stack Engineer", responsibility: "Integrates AI features into frontend and backend systems." },
          { icon: "🧪", title: "QA / Eval Engineer", responsibility: "Designs evaluation datasets and runs quality checks on model outputs." },
          { icon: "📋", title: "Project Manager", responsibility: "Coordinates delivery, demos, and stakeholder alignment." },
        ],
        note: "Smaller feature integrations run with 2–3 engineers. Full product AI transformation projects scale to 5–6.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "EdTech Platform", industry: "Education", title: "AI tutor feature: 3× user engagement", description: "We integrated a context-aware AI tutor into an existing LMS, including RAG over course content and adaptive question generation, shipped in 6 weeks.", link: "/case-study", stats: [{ value: "3×", label: "Engagement" }, { value: "6wk", label: "Time to ship" }] },
          { client: "Legal SaaS", industry: "Legal Tech", title: "Contract summarization: 80% faster review", description: "LLM pipeline that ingests contracts, extracts key clauses, flags risks, and generates plain-language summaries for non-legal stakeholders.", link: "/case-study", stats: [{ value: "80%", label: "Faster review" }, { value: "40%", label: "Cost reduction" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Generic AI Agency",
        rows: [
          { criterion: "RAG pipelines over your own data", inApps: true, inHouse: false, typical: "Sometimes" },
          { criterion: "Token cost optimization", inApps: true, inHouse: false, typical: false },
          { criterion: "Safety & guardrails built in", inApps: true, inHouse: false, typical: false },
          { criterion: "Model-agnostic (GPT, Claude, Gemini)", inApps: true, inHouse: false, typical: false },
          { criterion: "Post-launch support", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Model Choice", question: "Which LLM do you use?", answer: "We're model-agnostic. We recommend the best model for your use case — typically GPT-4o, Claude 3.5, or Gemini — and can switch as better options emerge." },
          { label: "Cost", question: "How do you control LLM costs?", answer: "We implement caching, token budgets, model routing (using cheaper models for simple tasks), and batch processing to minimize cost without sacrificing quality." },
          { label: "Data Privacy", question: "Is our data safe?", answer: "Yes. We can run entirely on your infrastructure or use enterprise API tiers with no training data opt-in. PII redaction is standard." },
          { label: "Timeline", question: "How fast can you ship a first AI feature?", answer: "A focused first feature (e.g., semantic search or summarization) typically takes 3–4 weeks from kick-off to production." },
          { label: "Support", question: "Do you handle model upgrades over time?", answer: "Yes. We monitor model releases and recommend upgrades when they improve quality or reduce cost for your specific use case." },
        ],
      },
    },
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Engineering",
    categoryIcon: "📱",
    heroTagline: "Native and cross-platform mobile apps",
    heroDescription: "Native and cross-platform mobile apps for iOS and Android.",
    heroIllo: "/services/mobile-app-development.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most Mobile Apps\nFail to Retain Users",
        subtitle: "The app stores are full of products that were launched and then quietly abandoned. Here's what goes wrong.",
        problems: [
          { title: "10,000 downloads, 200 daily actives — launched, not adopted", description: "" },
          { title: "Crashes and blank screens that reach the App Store as 1-star reviews before the team hears about them", description: "" },
          { title: "Fifty features in the backlog, none of them the one that would make users actually stay", description: "" },
          { title: "Design, product, and engineering each working from a different version of the plan", description: "" },
          { title: "A V2 that requires rewriting V1 because the foundation wasn't built to extend", description: "" },
          { title: "Six months in, three months late, with no clear answer on what's left to do", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Mobile App Development at InApps?",
        body: "We build native and cross-platform mobile apps for iOS and Android that users love and businesses rely on. From consumer apps to enterprise mobility solutions, we handle the full lifecycle: strategy, design, development, QA, and app store submission.\n\nOur teams specialize in React Native and Flutter for cross-platform, and Swift/Kotlin for native — choosing the right approach based on your performance requirements and budget.",
        stats: [
          { value: "60+", label: "Mobile apps shipped" },
          { value: "4.7★", label: "Avg. app store rating" },
          { value: "15+", label: "Countries deployed" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You need a mobile app that performs reliably on both iOS and Android",
          "You want a team that handles design, development, QA, and app store submission",
          "You need an app that scales — from 100 to 1 million users without a rebuild",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "📱", title: "Cross-platform & Native", description: "React Native or Flutter for shared codebases; Swift/Kotlin when native performance is critical." },
          { icon: "🎨", title: "Mobile UX Design", description: "Platform-native design patterns that feel right on iOS and Android, backed by user testing." },
          { icon: "🔗", title: "API & Backend Integration", description: "Connect to your existing APIs, authentication systems, and third-party services." },
          { icon: "📡", title: "Offline & Push Notifications", description: "Offline-first architecture and targeted push notification systems to drive engagement." },
          { icon: "🧪", title: "Device Testing", description: "QA across 20+ real device/OS combinations to catch platform-specific bugs before launch." },
          { icon: "🚀", title: "App Store Submission", description: "We handle App Store and Google Play submission, review guidelines, and post-launch updates." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Discovery & Design", duration: "Week 1–3", description: "", includes: ["User research", "Wireframing", "Platform strategy", "Tech architecture"] },
          { phase: "Development", duration: "Week 4–14", description: "", includes: ["Sprint delivery", "Weekly demos", "API integration", "CI/CD setup"] },
          { phase: "QA & Beta", duration: "Week 13–15", description: "", includes: ["Device testing", "Performance profiling", "Beta testing", "Crash reporting"] },
          { phase: "Launch & Iterate", duration: "Ongoing", description: "", includes: ["App store submission", "Monitoring", "Feature updates", "OS version support"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "📱", title: "Mobile Engineers (×2)", responsibility: "Build the iOS/Android app using React Native, Flutter, or native frameworks." },
          { icon: "🎨", title: "Mobile UI/UX Designer", responsibility: "Designs platform-native experiences optimized for mobile interaction patterns." },
          { icon: "⚙️", title: "Backend Engineer", responsibility: "Builds or adapts APIs to support mobile-specific needs." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Runs testing across devices, OS versions, and network conditions." },
          { icon: "📋", title: "Project Manager", responsibility: "Coordinates delivery, demos, and app store processes." },
        ],
        note: "Simple apps run with 2 engineers. Feature-rich consumer apps include a full team of 5–6.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Fintech Startup", industry: "Fintech", title: "Payment app: 500K downloads in 6 months", description: "Built a React Native payment app with biometric auth, real-time notifications, and offline transaction queuing.", link: "/case-study", stats: [{ value: "500K", label: "Downloads" }, { value: "4.8★", label: "App Store rating" }] },
          { client: "Healthcare Provider", industry: "Healthcare", title: "Patient app: 85% appointment no-show reduction", description: "Cross-platform app with appointment booking, telemedicine, and push reminders that cut no-shows dramatically.", link: "/case-study", stats: [{ value: "85%", label: "No-show reduction" }, { value: "4.7★", label: "Rating" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Mobile Agency",
        rows: [
          { criterion: "Cross-platform + native expertise", inApps: true, inHouse: false, typical: "One or the other" },
          { criterion: "Testing on 20+ real devices", inApps: true, inHouse: false, typical: false },
          { criterion: "Backend integration included", inApps: true, inHouse: false, typical: "Extra cost" },
          { criterion: "App store submission handled", inApps: true, inHouse: false, typical: "Sometimes" },
          { criterion: "Post-launch OS update support", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Platform", question: "Should we build native or cross-platform?", answer: "For most products, React Native or Flutter gives you 90% of native performance at 60% of the cost. We recommend native Swift/Kotlin only when you need platform-specific hardware access or maximum GPU performance." },
          { label: "Timeline", question: "How long does a mobile app take?", answer: "An MVP with core features takes 10–14 weeks. A full-featured consumer app takes 4–6 months." },
          { label: "Maintenance", question: "What happens when iOS or Android releases a new OS version?", answer: "We include OS compatibility updates in our support SLA. We proactively test against beta OS releases before they go public." },
          { label: "Backend", question: "Do you build the backend too?", answer: "Yes. We can build the API and backend, or integrate with your existing backend. Mobile and backend development happen in parallel on the same team." },
          { label: "Submission", question: "Do you handle App Store and Google Play submission?", answer: "Yes. We prepare all assets, complete store listings, and manage the review process including any rejection responses." },
        ],
      },
    },
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    category: "Engineering",
    categoryIcon: "📦",
    heroTagline: "Multi-tenant SaaS with billing and auth",
    heroDescription: "Multi-tenant SaaS products with billing, auth, and growth-ready architecture.",
    heroIllo: "/services/saas-development.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why SaaS Products\nStruggle to Scale",
        subtitle: "Building a SaaS product is one thing. Building one that handles multi-tenancy, billing, and growth without crumbling is another.",
        problems: [
          { title: "Multi-tenancy added in month 6 — requiring a painful architectural rewrite at exactly the worst moment", description: "" },
          { title: "A billing system that works cleanly for 10 customers and quietly breaks at 100", description: "" },
          { title: "Auth and permissions that satisfy SMB buyers but block every enterprise deal requiring SSO, SCIM, or audit logs", description: "" },
          { title: "Database performance that degrades as tenant count grows because row-level isolation was never designed in", description: "" },
          { title: "No feature flagging or usage metering — so you can't run gradual rollouts or usage-based pricing", description: "" },
          { title: "Technical debt from moving fast on the MVP that now blocks every feature the business actually wants to build", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is SaaS Development at InApps?",
        body: "We build multi-tenant SaaS products designed for growth from the start — with billing, auth, onboarding, and infrastructure built for scale. Whether you're launching a new product or rebuilding a legacy system, we architect for the demands of a production SaaS business.\n\nOur teams have shipped SaaS platforms across verticals and know what it takes to support freemium funnels, enterprise SSO, usage metering, and compliance requirements simultaneously.",
        stats: [
          { value: "30+", label: "SaaS products shipped" },
          { value: "10M+", label: "End users served" },
          { value: "99.9%", label: "Uptime SLA" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You're building a multi-tenant product that needs to support many customers on one platform",
          "You need billing, auth, and onboarding built properly — not bolted on later",
          "You want infrastructure that scales from 10 to 10,000 tenants without a rewrite",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🏗️", title: "Multi-tenant Architecture", description: "Tenant isolation strategies (schema-per-tenant, row-level security) designed for your scale and compliance needs." },
          { icon: "💳", title: "Billing & Subscriptions", description: "Stripe integration with usage metering, plan tiers, trial management, and dunning flows." },
          { icon: "🔐", title: "Auth & Permissions", description: "SSO (SAML, OIDC), RBAC, and team management for both SMB and enterprise buyer requirements." },
          { icon: "🚀", title: "Onboarding Flows", description: "Self-serve onboarding with guided setup, email sequences, and in-app activation milestones." },
          { icon: "🚩", title: "Feature Flags", description: "LaunchDarkly or custom feature flag system for gradual rollouts and plan-based feature gating." },
          { icon: "📊", title: "Usage Analytics", description: "Per-tenant usage tracking, cohort analysis, and churn signals wired into your billing system." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Architecture Design", duration: "Week 1–2", description: "", includes: ["Tenant model", "Billing design", "Auth strategy", "Infra planning"] },
          { phase: "Core Platform", duration: "Week 3–10", description: "", includes: ["Multi-tenancy", "Auth & permissions", "Billing integration", "Onboarding"] },
          { phase: "Product Features", duration: "Week 8–18", description: "", includes: ["Feature development", "API design", "Integration hooks", "Admin portal"] },
          { phase: "Launch & Scale", duration: "Ongoing", description: "", includes: ["Load testing", "Monitoring", "Feature flags", "Growth iterations"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🏗️", title: "SaaS Architect", responsibility: "Designs multi-tenant data model, billing integration, and scaling strategy." },
          { icon: "⚙️", title: "Full-stack Engineers (×2–3)", responsibility: "Build the product features, APIs, and frontend application." },
          { icon: "🔐", title: "Auth / Security Engineer", responsibility: "Implements SSO, RBAC, and compliance requirements." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Tests across tenants, billing edge cases, and permission boundaries." },
          { icon: "📋", title: "Project Manager", responsibility: "Manages delivery cadence and stakeholder alignment." },
        ],
        note: "MVP SaaS builds run with 3 engineers. Enterprise-grade platforms with compliance requirements scale to 6–8.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "HR Tech", industry: "HR", title: "Multi-tenant HR platform: 200 enterprise clients onboarded", description: "Built a SaaS HR platform with per-tenant data isolation, SAML SSO, usage-based billing, and a self-serve onboarding flow.", link: "/case-study", stats: [{ value: "200", label: "Enterprise tenants" }, { value: "4wk", label: "Avg. onboarding time" }] },
          { client: "PropTech", industry: "Real Estate", title: "Property SaaS: scaled from 50 to 2,000 tenants", description: "Re-architected a monolithic property management tool into a proper multi-tenant SaaS with Stripe billing and role-based access.", link: "/case-study", stats: [{ value: "40×", label: "Tenant growth" }, { value: "99.95%", label: "Uptime" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Generic Dev Agency",
        rows: [
          { criterion: "Multi-tenancy designed from day 1", inApps: true, inHouse: false, typical: false },
          { criterion: "Billing & dunning flows included", inApps: true, inHouse: false, typical: "Extra cost" },
          { criterion: "Enterprise SSO (SAML/OIDC)", inApps: true, inHouse: false, typical: false },
          { criterion: "Feature flag system", inApps: true, inHouse: false, typical: false },
          { criterion: "Tenant usage analytics", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Architecture", question: "Schema-per-tenant or row-level security?", answer: "Depends on your compliance, scale, and query patterns. Schema isolation is better for strict data residency. RLS is more operationally lean for high tenant counts. We'll recommend the right approach in discovery." },
          { label: "Billing", question: "Which billing provider do you use?", answer: "Stripe is our default. We also work with Chargebee and Paddle depending on your market and requirements." },
          { label: "Compliance", question: "Can you build for SOC 2 or GDPR compliance?", answer: "Yes. We implement the technical controls required for SOC 2 Type II and GDPR — including audit logging, data export, and deletion workflows." },
          { label: "Timeline", question: "How long to launch a SaaS MVP?", answer: "A focused MVP with core multi-tenancy, auth, and billing takes 10–14 weeks." },
          { label: "Migration", question: "Can you migrate an existing single-tenant app to multi-tenant?", answer: "Yes. We've done this many times. It requires a careful data migration strategy and usually 8–16 weeks depending on complexity." },
        ],
      },
    },
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    category: "Engineering",
    categoryIcon: "☁️",
    heroTagline: "CI/CD pipelines and cloud-native deployments",
    heroDescription: "Your team should not be babysitting deployments, debugging environments that do not match production, or finding out the monitoring is broken when a customer emails you. We fix the infrastructure so your engineers can focus on shipping.",
    heroIllo: "/services/cloud-devops.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Fragile Infrastructure\nPuts Engineering Teams in Firefighting Mode",
        subtitle: "Slow deploys, brittle environments, and manual processes are not just frustrating. They are a tax on every engineer on your team.",
        insightText: "Slow deploys and brittle environments are not just frustrating. They are a compounding tax on every engineer on your team, every day. Here is where that cost shows up.",
        hideTrustBadge: true,
        problems: [
          { title: "Deployments that take 90 minutes and need a senior engineer to babysit every release", description: "" },
          { title: "Bugs that only surface in production because there is no staging environment that actually mirrors it", description: "" },
          { title: "Cloud costs that grew 40% last quarter and nobody can explain what changed", description: "" },
          { title: "Infrastructure configured by hand, so spinning up a new environment means starting from scratch", description: "" },
          { title: "No monitoring until a customer emails to say something is down", description: "" },
          { title: "Security misconfigurations sitting open, waiting to become an incident", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Cloud and DevOps at InApps?",
        body: "We design and implement cloud infrastructure, CI/CD pipelines, and DevOps practices that let your team ship faster with more confidence. Whether you are starting from scratch or modernizing a legacy setup, we bring infrastructure as code, automated testing gates, and observability from day one.\n\nWe work across AWS, GCP, and Azure. We are platform-agnostic and will recommend the right tools for your team size, existing skills, and workload requirements.",
        stats: [
          { value: "50+", label: "Infrastructure setups delivered" },
          { value: "10×", label: "Avg. deploy frequency improvement" },
          { value: "99.9%", label: "Uptime SLA" },
        ],
      },
      isRightForYou: {
        enabled: true,
        heading: "Cloud and DevOps support is a fit if:",
        checklist: [
          "Your team deploys manually or less than once per week",
          "You have no infrastructure as code — environments are snowflakes",
          "You want full observability: logs, metrics, traces, and alerts before the next incident",
        ],
        items: [
          { tag: "Slow Deploys", title: "Your team is spending more time managing infrastructure than shipping product", highlight: "spending more time", desc: "Deployments are manual, slow, or require a senior engineer to supervise. Every release is a risk event. You need pipelines that run automatically, test every change, and roll back without human intervention." },
          { tag: "No Observability", title: "You find out something is broken when a customer tells you", highlight: "something is broken", desc: "There is no monitoring, no alerting, and no structured way to understand what is happening in production. You need full observability: logs, metrics, traces, and on-call alerting configured before the next incident." },
          { tag: "Growing Cloud Costs", title: "Your cloud bill is growing and nobody can explain why", highlight: "cloud bill is growing", desc: "Costs scaled faster than usage. Resources are over-provisioned, environments are running idle, and there is no cost allocation to understand which service is responsible. You need infrastructure as code, right-sized resources, and a cost model you can explain to leadership." },
        ],
      },
      whatYouGet: {
        enabled: true,
        heading: "One engagement. Infrastructure that runs itself.",
        items: [
          { icon: "icon:audit-arch", title: "Audit and Architecture", subtitle: "We understand what you have before we change anything.", description: "", bullets: ["Full infrastructure audit and cost analysis", "Architecture design for your scale and workload", "Security review and misconfiguration report", "Recommended toolchain before any work begins"] },
          { icon: "icon:foundation-iac", title: "Foundation and Infrastructure as Code", subtitle: "Everything reproducible, nothing configured by hand.", description: "", bullets: ["Infrastructure as code setup (Terraform or Pulumi)", "Environment parity: dev, staging, and production", "Secret management and access control", "Baseline monitoring and alerting from day one"] },
          { icon: "icon:cicd-auto", title: "CI/CD and Automation", subtitle: "Every commit tested. Every deploy automated.", description: "", bullets: ["CI/CD pipeline setup and integration", "Automated test gates before every deployment", "Deployment automation and rollback strategy", "Container orchestration where required"] },
          { icon: "icon:observe-handover", title: "Observability and Handover", subtitle: "Your team can run this without us.", description: "", bullets: ["Full observability stack: logs, metrics, and tracing", "On-call setup and alerting runbooks", "Team training and knowledge transfer", "30-day post-handover support"] },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Audit and Design", duration: "Week 1", description: "", includes: ["Infrastructure audit", "Cost analysis", "Architecture design", "Security review"] },
          { phase: "Foundation", duration: "Week 2 to 4", description: "", includes: ["IaC setup", "Environments", "Secret management", "Baseline monitoring"] },
          { phase: "CI/CD and Automation", duration: "Week 3 to 6", description: "", includes: ["Pipeline setup", "Test gates", "Deploy automation", "Rollback strategy"] },
          { phase: "Observability and Handover", duration: "Week 6 to 8", description: "", includes: ["Full observability", "Runbooks", "On-call setup", "Team training"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "☁️", title: "Cloud Architect", responsibility: "Designs the overall infrastructure topology, scaling strategy, and cost model." },
          { icon: "🔄", title: "DevOps Engineer (×2)", responsibility: "Implements CI/CD pipelines, IaC, and container orchestration." },
          { icon: "🔒", title: "Security Engineer", responsibility: "Hardens IAM, network policies, secret management, and compliance controls." },
          { icon: "📊", title: "Observability Engineer", responsibility: "Sets up logging, metrics, tracing, and on-call alerting." },
          { icon: "📋", title: "Project Manager", responsibility: "Coordinates delivery and team knowledge transfer." },
        ],
        subtitle: "Every Cloud and DevOps engagement is staffed with a named specialist team. Not generalist engineers learning your stack mid-project.",
        note: "Small setups run with 2 DevOps engineers. Complex multi-region, multi-account platforms require 4 to 5 specialists.",
      },
      qualityVetting: {
        enabled: true,
        subtitle: "Only 3% of applicants pass all four stages. Here is what the other 97% do not clear.",
        stages: [
          { stage: 'Live Coding and System Design', description: 'Real-world coding challenge, System design interview, Code quality and problem solving' },
          { stage: 'Communication and English', description: 'Technical communication, Client-facing scenario, Written and spoken English' },
          { stage: 'Agile Collaboration and Ownership', description: 'Agile mindset and teamwork, Ownership and accountability, Adaptability and growth mindset' },
          { stage: 'Final Review and Reference Check', description: 'Technical panel interview, Reference and background check, Culture and values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Accept rate" },
          { value: "4", label: "Stages of vetting" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2 weeks", label: "to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "E-commerce Platform", industry: "Retail", title: "AWS migration: 60% infrastructure cost reduction", description: "Migrated a self-hosted monolith to EKS with auto-scaling, cutting monthly cloud spend from $40K to $16K while improving uptime.", link: "/case-study", stats: [{ value: "60%", label: "Cost reduction" }, { value: "99.99%", label: "Uptime" }] },
          { client: "FinTech", industry: "Finance", title: "CI/CD overhaul: 10× deploy frequency", description: "Replaced manual deploys with GitHub Actions pipelines and Terraform IaC, going from weekly releases to multiple deploys per day.", link: "/case-study", stats: [{ value: "10×", label: "Deploy frequency" }, { value: "90%", label: "Less deploy time" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Consultant",
        rows: [
          { criterion: "Infrastructure as code (not click-ops)", inApps: true, inHouse: false, typical: "Sometimes" },
          { criterion: "Full observability stack", inApps: true, inHouse: false, typical: false },
          { criterion: "Cost optimization included", inApps: true, inHouse: false, typical: false },
          { criterion: "Security hardening built in", inApps: true, inHouse: false, typical: false },
          { criterion: "Runbooks and team training", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Cloud Provider", question: "Which cloud do you work with?", answer: "AWS, GCP, and Azure. We're platform-agnostic and will recommend based on your team's existing skills, vendor relationships, and workload characteristics." },
          { label: "IaC Tool", question: "Terraform or Pulumi?", answer: "Terraform for most teams — it's the industry standard with the broadest provider support. Pulumi when your team prefers a general-purpose language over HCL." },
          { label: "Kubernetes", question: "Do we need Kubernetes?", answer: "Not always. We right-size the solution. Small teams often do better with ECS or Cloud Run. Kubernetes makes sense when you have many services, need fine-grained scaling, or have complex networking requirements." },
          { label: "Timeline", question: "How long does a DevOps overhaul take?", answer: "A foundational setup (IaC, CI/CD, monitoring) takes 4–8 weeks. A full cloud migration with zero downtime takes 8–16 weeks." },
          { label: "Handover", question: "Will our team be able to maintain it?", answer: "Yes. We write runbooks, record walkthroughs, and train your team during the engagement. We also offer ongoing support retainers." },
        ],
      },
    },
  },
  {
    slug: "mvp-proof-of-concept",
    name: "MVP / Proof of Concept",
    category: "Engineering",
    categoryIcon: "🚀",
    heroTagline: "Ship in weeks, validate before full investment",
    heroDescription: "Ship a working product in weeks to validate your idea before full investment.",
    heroIllo: "/services/mvp-proof-of-concept.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most Products\nFail Before They Launch",
        subtitle: "The biggest risk isn't building the wrong thing. It's spending 12 months and $500K finding out.",
        insightText: "Most products fail not because they were built badly, but because they were built before anyone confirmed users wanted them. Here is how that happens.",
        problems: [
          { title: "Six months of engineering time spent on a feature set users do not want", description: "" },
          { title: "Investors who need to see working software, not slides with mockups", description: "" },
          { title: "No way to test whether the core assumption is right without committing to a full build", description: "" },
          { title: "Your current team is heads-down on the existing product. There is no bandwidth for something new.", description: "" },
          { title: "An agency that quoted $250K and 6 months for what should be a 6-week prototype", description: "" },
          { title: "A Figma prototype that looks real but cannot be tested by real users or extended into a product", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is MVP Development at InApps?",
        body: "We help founders, product teams, and innovation labs go from idea to working product in 4 to 6 weeks. Our MVP service is designed to validate your core hypothesis with the minimum viable feature set, built on a production-grade foundation you can extend, not throw away.\n\nWe scope ruthlessly, cut anything that does not test the hypothesis, and ship something real users can interact with. Then we help you decide what to build next based on what you learn.",
        stats: [
          { value: "40+", label: "MVPs shipped" },
          { value: "4–6wk", label: "Avg. to launch" },
          { value: "70%", label: "Proceed to full product" },
        ],
      },
      isRightForYou: {
        enabled: true,
        heading: "MVP development is a fit if:",
        checklist: [
          "You have an idea or hypothesis that needs to be tested with real users",
          "You need something working, not a slide deck or Figma prototype, in weeks",
          "You want a foundation you can build on, not a throwaway prototype",
        ],
        items: [
          { tag: "Unvalidated Idea", title: "You have a hypothesis that needs testing before full investment", highlight: "a hypothesis that needs testing", desc: "You believe there is a market, a problem worth solving, or a feature users will pay for. But you have not confirmed it yet. You need working software in front of real users before committing 12 months and a full engineering team." },
          { tag: "No Internal Bandwidth", title: "Your core team cannot take this on right now", highlight: "cannot take this", desc: "Your engineers are heads-down on the existing product. Pulling them off to build an unvalidated idea is a risk you cannot take. You need a separate team that owns this end to end while your core product keeps moving." },
          { tag: "Speed Over Perfection", title: "You need to ship fast, not build perfectly", highlight: "ship fast", desc: "You are not looking for a polished product. You are looking for the fastest path to a real user response. Done and testable in 6 weeks beats perfect and unshipped in 6 months." },
        ],
      },
      whatYouGet: {
        enabled: true,
        heading: "One engagement. Working product in 4 to 6 weeks.",
        items: [
          { icon: "icon:scope-hypothesis", title: "Scoping and Hypothesis Design", subtitle: "We define what to build before we write a line of code.", description: "", bullets: ["Core hypothesis documented and agreed", "User story mapping to minimum viable feature set", "Scope ruthlessly cut to only what tests the hypothesis", "Tech stack decision for speed and extensibility"] },
          { icon: "icon:design-proto-mvp", title: "Design and Prototype", subtitle: "Fast, functional, and testable by real users.", description: "", bullets: ["Lean wireframes for core user flows", "Minimal design system to move fast without looking rough", "Stakeholder sign-off before build begins", "Interactive prototype for early user feedback"] },
          { icon: "icon:build-launch-mvp", title: "Build and Launch", subtitle: "Production-grade from day one, not throwaway code.", description: "", bullets: ["Core features only, built on extensible architecture", "Weekly live demos throughout build", "CI/CD setup and basic analytics from day one", "Production deployment at the end of week 4 to 6"] },
          { icon: "icon:learn-decide", title: "Learn and Decide", subtitle: "We help you interpret what you learn and decide what comes next.", description: "", bullets: ["User testing facilitation in first two weeks post-launch", "Data review session based on analytics from day one", "Go / no-go / pivot recommendation", "Roadmap for full product if hypothesis is validated"] },
        ],
      },
      process: {
        enabled: true,
        heading: "From Idea to Validated Product in 4 to 6 Weeks",
        subtitle: "A lean, structured process designed to get working software in front of real users as fast as possible.",
        steps: [
          { phase: "Scoping Sprint", duration: "Week 1", description: "", includes: ["Hypothesis definition", "User story mapping", "Feature prioritization", "Tech stack decision"] },
          { phase: "Design", duration: "Week 1 to 2", description: "", includes: ["Wireframes for core flows", "Minimal design system", "Stakeholder sign-off", "Build planning"] },
          { phase: "Build", duration: "Week 2 to 5", description: "", includes: ["Core features only", "Weekly live demos", "CI/CD setup", "Basic analytics from day one"] },
          { phase: "Launch and Learn", duration: "Week 5 to 6", description: "", includes: ["Production deployment", "User testing", "Data review", "Go/no-go/pivot decision"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🎯", title: "Product Lead", responsibility: "Facilitates scoping, cuts scope ruthlessly, and keeps the team focused on the hypothesis." },
          { icon: "⚙️", title: "Full-stack Engineer (×2)", responsibility: "Builds frontend, backend, and APIs as a lean, fast-moving pair." },
          { icon: "🎨", title: "UX Designer", responsibility: "Creates lean wireframes and a minimal design system to move fast without looking rough." },
          { icon: "📋", title: "Project Manager", responsibility: "Keeps the engagement on time and scope. The most important role in an MVP build." },
        ],
        subtitle: "MVP builds run lean by design. Every engagement is staffed with a small, named team focused entirely on shipping something testable, not building something perfect.",
        note: "We do not add engineers to speed up an MVP. We cut scope instead. More people means more coordination, not faster shipping.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Series A Startup", industry: "PropTech", title: "MVP in 5 weeks. Raised $2M seed round.", description: "Built a working marketplace MVP for short-term property rentals in 5 weeks. The founder used it to close a $2M seed round.", image: "/Media/Image/case 8.png", altText: "MVP development for PropTech marketplace - InApps Technology", link: "/case-study", stats: [{ value: "5wk", label: "Time to ship" }, { value: "$2M", label: "Seed raised" }] },
          { client: "Enterprise Innovation Lab", industry: "Logistics", title: "PoC in 3 weeks. Secured internal funding.", description: "Built a proof of concept for an AI-powered route optimization tool. The PoC secured $500K internal innovation budget.", link: "/case-study", stats: [{ value: "3wk", label: "Time to PoC" }, { value: "$500K", label: "Budget secured" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Agency",
        rows: [
          { criterion: "Fixed scope, fixed timeline", inApps: true, inHouse: false, typical: "Rarely" },
          { criterion: "Production-grade code, not throwaway prototype", inApps: true, inHouse: false, typical: false },
          { criterion: "Ships in 4 to 6 weeks", inApps: true, inHouse: false, typical: false },
          { criterion: "Analytics from day 1", inApps: true, inHouse: false, typical: false },
          { criterion: "Post-launch roadmap session", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        heading: "Common questions about MVP development",
        items: [
          { label: "Scope", question: "How do you decide what goes in the MVP?", answer: "We run a scoping sprint where we map your core hypothesis to the minimum features needed to test it. Anything that does not directly test the hypothesis gets cut or deferred." },
          { label: "Quality", question: "Is the code production-quality or throwaway?", answer: "It is production-grade from day one. We use the same architecture, CI/CD setup, and code standards we would on a full product build. The difference is scope, not quality. You can extend what we ship directly into your full product without rewriting it." },
          { label: "Timeline", question: "Can you really ship in 4 to 6 weeks?", answer: "Yes, because we scope to fit the timeline, not the other way around. The scoping sprint in week one exists specifically to cut everything that does not need to be in the first version. If your hypothesis requires more than a 6-week build to test, we will tell you and recommend an alternative approach." },
          { label: "Post-MVP", question: "What happens after launch?", answer: "We run a learn and decide session in the two weeks after launch: user testing, data review, and a go/no-go/pivot recommendation. If the hypothesis is validated, we scope the full product build. If it is not, we help you understand why and what to test next. You do not have to figure that out alone." },
          { label: "Tech Stack", question: "What stack do you use?", answer: "We recommend the stack that gives you the fastest path to a working, extensible product. For most MVPs that is React or Next.js on the frontend, Node.js or Python on the backend, and PostgreSQL or Firebase depending on your data model. If you have an existing stack you need to integrate with, we work within it. Stack decisions are made in the scoping sprint before any build begins." },
        ],
      },
    },
  },
  {
    slug: "dedicated-development-team",
    name: "Dedicated Development Team",
    category: "Engagement Models",
    categoryIcon: "🏢",
    heroTagline: "Your dedicated development team.",
    heroDescription: "Fully managed. 100% focused on your success.\nBuild your own dedicated development team without the hiring hassle.\nGet full-time experts aligned with your business objectives.\nWe manage operations while your team drives innovation and results.",
    heroIllo: "/services/offshore-dev-center.svg",
    showTrustBadge: true,
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most Offshore\nEngagements Fail",
        subtitle: "Offshore development has a bad reputation. But the problem isn't the location. It's the model.",
        problems: [
          { title: "Engineers split across 5 clients: yours gets 15% of their attention, regardless of what the contract says", description: "" },
          { title: "Stand-ups where nobody can explain what was actually done, or what's blocking progress", description: "" },
          { title: "Timezone gaps that turn a 2-hour clarification into a 2-day delay and a week of rework", description: "" },
          { title: "The engineer you spent 3 months onboarding leaves, and the vendor sends a replacement who's never seen your codebase", description: "" },
          { title: "Sprints that close green on metrics, and code that fails review or quietly never got reviewed at all", description: "" },
          { title: "10 hours a week of your senior engineers managing the vendor. Exactly what you were trying to avoid.", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is a Dedicated Development Team?",
        body: "A Dedicated Development Team is a group of AI-native senior engineers based in Vietnam, working exclusively on your product. Not shared across other clients. Not rotated when a higher-paying project comes in.\n\nInApps handle recruiting, vetting, onboarding, and day-to-day management. Our engineers work with AI-native mindset as a standard part of their workflow, not as an add-on. You retain full technical direction and direct access to every engineer on the team.\n\nYou get the cost structure of offshore hiring with the reliability and accountability of an in-house team. Our average client engagement runs over 10 years.",
        stats: [
          { value: "750+", label: "Projects delivered" },
          { value: "10+", label: "Years in business" },
          { value: "85%+", label: "Multi-year retention" },
          { value: "15+", label: "Countries served" },
        ],
      },
      isRightForYou: {
        enabled: true,
        sectionLabel: "IS THIS A FIT?",
        heading: "This works well if:",
        checklist: [
          "You need a team of 3+ engineers working full-time, exclusively on your product",
          "You want to reduce hiring costs without adding management work",
          "You need a long-term team, not a 3-month contractor pool",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🌏", title: "Dedicated Team", description: "Engineers work exclusively on your product, not shared with other clients." },
          { icon: "🎯", title: "Talent Recruitment", description: "We source, screen, and place engineers matching your technical requirements and culture." },
          { icon: "📋", title: "Full Management Layer", description: "HR, payroll, compliance, performance management, and local operations handled entirely by us." },
          { icon: "👁️", title: "Full Transparency", description: "Daily standups, sprint reviews, time tracking, and direct communication with your team." },
          { icon: "🔄", title: "Seamless Onboarding", description: "2-week structured onboarding to get engineers productive on your codebase fast." },
          { icon: "📈", title: "Team Scaling", description: "Scale up or down with 2–4 weeks notice. We handle recruitment, onboarding, and offboarding." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Requirements & Setup", duration: "Week 1–2", description: "", includes: ["Role definition", "Team size planning", "Legal & contracts", "Tooling setup"] },
          { phase: "Recruitment", duration: "Week 2–4", description: "", includes: ["Candidate sourcing", "Technical vetting", "Client interviews", "Offer & acceptance"] },
          { phase: "Onboarding", duration: "Week 4–6", description: "", includes: ["Codebase walkthrough", "Process alignment", "Tool access", "First sprint"] },
          { phase: "Ongoing Operations", duration: "Permanent", description: "", includes: ["Daily standups", "Sprint reviews", "Performance reviews", "Team scaling"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🌏", title: "Dedicated Engineers (×3–20)", responsibility: "Senior engineers recruited and managed by InApps, working exclusively on your product and following your technical direction." },
          { icon: "📋", title: "Engagement Manager", responsibility: "InApps point of contact handling HR, performance, escalations, and team health." },
          { icon: "🎯", title: "Technical Lead (optional)", responsibility: "Senior InApps engineer who can serve as tech lead if you don't have one onshore." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Designs and runs the eval framework; owns regression testing and failure analysis." },
          { icon: "📋", title: "Project Manager", responsibility: "Single point of contact. Runs sprints, demos, and stakeholder communication." },
        ],
        note: undefined,
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "92%", label: "12-month retention" },
          { value: "2–4wk", label: "Time to first engineer" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Australian SaaS", industry: "SaaS", title: "ODC of 8 engineers: product shipped 2× faster", description: "Established an 8-person ODC in Vietnam for an Australian HR SaaS, reducing their cost per engineer by 58% while doubling feature output.", link: "/case-study", stats: [{ value: "58%", label: "Cost reduction" }, { value: "2×", label: "Feature velocity" }] },
          { client: "US Fintech", industry: "Fintech", title: "12-person ODC running for 4 years", description: "Long-running ODC partnership where the Vietnam team now leads architecture decisions and has shipped 3 major product versions.", link: "/case-study", stats: [{ value: "4yr", label: "Partnership" }, { value: "95%", label: "Team retention" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Other Vendors",
        rows: [
          { criterion: "Cost", inApps: "60–70% lower than US/EU rates", inHouse: "Full salary + overhead", typical: "Variable, often hidden fees" },
          { criterion: "Speed", inApps: "Team ready in 4–6 weeks", inHouse: "3–6 months recruiting", typical: "2–8 weeks, bench-heavy" },
          { criterion: "Quality", inApps: "Top 1% vetted engineers", inHouse: "Varies by market", typical: "Mixed quality assurance" },
          { criterion: "Communication", inApps: "B2+ English, async-friendly", inHouse: "Native, co-located", typical: "Often challenging" },
          { criterion: "Flexibility", inApps: "Scale up/down 30-day notice", inHouse: "Rigid headcount", typical: "Limited flexibility" },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Control", question: "Who manages the engineers day to day?", answer: "You do. You set the technical direction, assign tasks, and run sprints. We handle HR, payroll, performance management, and local logistics." },
          { label: "Communication", question: "What about time zone overlap?", answer: "Vietnam (GMT+7) overlaps 3–4 hours with Australian East Coast and 1–2 hours with European afternoon. Most clients run a daily standup in the overlap window and async for the rest." },
          { label: "Turnover", question: "What happens if an engineer leaves?", answer: "We guarantee replacement within 3–4 weeks at no extra recruitment cost, and provide a 2-week handover period." },
          { label: "Minimum", question: "What is the minimum team size?", answer: "3 engineers for the ODC model. For smaller needs, our Staff Augmentation model works better." },
          { label: "Cost", question: "How much does an ODC cost?", answer: "Blended rates for a senior Vietnam engineer run $4,000–$6,000/month fully loaded including management overhead. 50–60% cheaper than equivalent UK, US, or Australian hiring." },
        ],
      },
    },
  },
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    category: "Engagement Models",
    categoryIcon: "👥",
    heroTagline: "Vetted engineers embedded in your team",
    heroDescription: "Vetted engineers embedded directly into your existing team and processes.",
    heroIllo: "/services/staff-augmentation.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Scaling Your Team\nIs Harder Than It Should Be",
        subtitle: "You have work that needs doing. Hiring takes 3 months. Most agencies send whoever is available.",
        problems: [
          { title: "3–4 month hiring cycles while the backlog grows and the core team gets stretched thin", description: "" },
          { title: "Agencies promising senior engineers and placing someone who needs 6 weeks of handholding", description: "" },
          { title: "Contractors who take a month to become productive — and the engagement ends before they're fully up to speed", description: "" },
          { title: "Communication style mismatches that create friction in code review and slow down every sprint", description: "" },
          { title: "No way to verify a contractor's real skill level until they're already onboarded and committing code", description: "" },
          { title: "12-month contracts when your roadmap changes every quarter", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Staff Augmentation at InApps?",
        body: "We place individually vetted engineers directly into your team — working in your tools, your processes, and your culture as if they were a direct hire. Unlike body shops that send whoever is available, every engineer goes through our 5-stage vetting process and is matched to your specific technical requirements.\n\nEngagements start in days, not months — and you can scale up or down with 2 weeks notice.",
        stats: [
          { value: "200+", label: "Engineers placed" },
          { value: "94%", label: "Client re-engagement rate" },
          { value: "1wk", label: "Avg. time to first engineer" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You have specific roles to fill — senior React dev, ML engineer, DevOps — and need them fast",
          "You want engineers who embed into your team, not a vendor managing a separate workstream",
          "You need flexibility — you can't commit to a 12-month headcount increase right now",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "👤", title: "Individual Matching", description: "We match engineers to your specific tech stack, domain, and team culture — not just availability." },
          { icon: "✅", title: "5-Stage Vetting", description: "Every engineer passes technical screen, domain assessment, code review, communication, and trial." },
          { icon: "⚡", title: "Fast Start", description: "Engineers can start within 1–2 weeks. No 3-month hiring cycles." },
          { icon: "🔄", title: "Flexible Scaling", description: "Scale up or down with 2 weeks notice. Pause engagements during slow periods." },
          { icon: "🛡️", title: "Replacement Guarantee", description: "If an engineer isn't the right fit within the first 30 days, we replace at no cost." },
          { icon: "📋", title: "Minimal Admin", description: "We handle contracts, payroll, compliance, and HR — you just work with the engineer." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Requirements Brief", duration: "Day 1", description: "", includes: ["Role definition", "Stack requirements", "Team context", "Start date"] },
          { phase: "Candidate Matching", duration: "Day 2–5", description: "", includes: ["Profile shortlisting", "Client review", "Technical interview", "Selection"] },
          { phase: "Onboarding", duration: "Week 1–2", description: "", includes: ["Contract signing", "Tool access", "Codebase walkthrough", "First tasks"] },
          { phase: "Ongoing Engagement", duration: "As needed", description: "", includes: ["Daily standups", "Sprint participation", "Performance check-ins", "Scaling"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "👤", title: "Placed Engineer(s)", responsibility: "Work as embedded members of your team, following your processes and reporting to your leads." },
          { icon: "📋", title: "Account Manager", responsibility: "InApps point of contact for performance, escalations, and scaling requests." },
        ],
        note: "Individual placements start from 1 engineer. For 3+ engineers working together, our ODC model offers better management and cost.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "94%", label: "Client re-engagement rate" },
          { value: "1wk", label: "Avg. time to start" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "UK SaaS Scale-up", industry: "SaaS", title: "4 engineers placed in 10 days: roadmap unblocked", description: "Placed a senior React engineer and 3 backend engineers in under 2 weeks, unblocking a product roadmap that had been stalled for 2 months.", link: "/case-study", stats: [{ value: "10 days", label: "Time to placed" }, { value: "2mo", label: "Roadmap unblocked" }] },
          { client: "US Startup", industry: "AI", title: "ML engineer placed: product shipped 6 weeks early", description: "Placed a specialized LLM engineer who led the AI feature development. The product launched 6 weeks ahead of schedule.", link: "/case-study", stats: [{ value: "6wk", label: "Ahead of schedule" }, { value: "1wk", label: "Time to placement" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Staffing Agency",
        rows: [
          { criterion: "5-stage technical vetting", inApps: true, inHouse: false, typical: false },
          { criterion: "Engineers matched to your stack", inApps: true, inHouse: false, typical: "Generic matching" },
          { criterion: "30-day replacement guarantee", inApps: true, inHouse: false, typical: false },
          { criterion: "Start in 1–2 weeks", inApps: true, inHouse: false, typical: "4–8 weeks" },
          { criterion: "Flexible scaling with 2-week notice", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Vetting", question: "How do you ensure engineers are actually senior-level?", answer: "Our 5-stage process includes a hands-on coding assessment, a code review exercise, and a domain-specific evaluation. Only 3% of applicants pass." },
          { label: "Contracts", question: "What are the contract terms?", answer: "Monthly rolling contracts with 2-week notice on either side. No lock-in, no minimum term." },
          { label: "Time Zones", question: "Can engineers work in our time zone?", answer: "Our engineers in Vietnam overlap 3–4 hours with Australian daytime and 1–2 hours with European afternoon. For US clients, we can arrange extended hours with notice." },
          { label: "IP", question: "Who owns the code the engineer writes?", answer: "You do. Engineers sign IP assignment agreements before starting. All work product belongs to you." },
          { label: "Replacement", question: "What if the engineer isn't a good fit?", answer: "Free replacement within 30 days. We'll place a new engineer within 1–2 weeks and overlap the transition." },
        ],
      },
    },
  },
  {
    slug: "project-based-dev",
    name: "Project-Based Dev",
    category: "Engagement Models",
    categoryIcon: "✅",
    heroTagline: "Fixed-scope delivery with clear milestones",
    heroDescription: "You define the scope. We own the delivery. Fixed price, fixed timeline, full accountability. No surprises at invoice time.",
    cta: {
      heading: "Tell us what needs to be built. We will scope it and price it.",
      subtitle: "Describe your deliverable. We will come back with a scoped proposal and fixed-price estimate within 48 hours. One call. No commitment.",
      ctaLabel: "Book a Discovery Call",
    },
    heroIllo: "/services/project-based-dev.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Fixed-Price Projects\nUsually Go Wrong",
        subtitle: "You need a defined deliverable, on time and on budget. Most vendors can't deliver that without renegotiating the contract.",
        insightText: "Most vendors quote low to win the deal, then expand scope to recover margin. Here is what that looks like on your side of the contract.",
        problems: [
          { title: "Projects that run 2x over timeline with scope expanding on every call", description: "" },
          { title: "No accountability: the delivery looks nothing like what was agreed", description: "" },
          { title: "Milestone payments released before anything useful is delivered", description: "" },
          { title: "A handover so poor your team cannot maintain or extend the system", description: "" },
          { title: "No updates for weeks, then a big reveal at the end that misses the brief", description: "" },
          { title: "Post-launch bugs the vendor declares out of scope and refuses to fix", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Project-Based Development?",
        body: "Our project-based model is a fixed-scope, fixed-timeline engagement. We define requirements precisely, agree on milestones with verifiable deliverables, and take full accountability for shipping on time and within budget.\n\nYou get a dedicated project team, a single point of contact, weekly progress demos, and a 30-day post-launch support period. All included. No surprises, no hidden costs, no ambiguous scope.",
        stats: [
          { value: "96%", label: "On-time delivery rate" },
          { value: "98%", label: "Budget adherence" },
          { value: "30 days", label: "Post-launch hypercare" },
        ],
      },
      isRightForYou: {
        enabled: true,
        heading: "Project-based development works well if:",
        checklist: [
          "You have a well-defined deliverable with clear success criteria",
          "You need a fixed price and fixed timeline you can plan against",
          "You want a vendor who takes full ownership of delivery — not just providing bodies",
        ],
        items: [
          {
            tag: "Defined Scope",
            title: "You have a defined scope and can commit to requirements upfront",
            desc: "You know what needs to be built. You can document it, approve it, and hold to it. Fixed-price only works when the brief is clear on both sides.",
          },
          {
            tag: "Fixed Budget",
            title: "You need a fixed price with no hidden extras",
            desc: "Budget certainty matters more than flexibility. You want one number, one contract, and no surprises at the end of each sprint.",
          },
          {
            tag: "Hands-Off Delivery",
            title: "You need a team that owns delivery, not just executes tasks",
            desc: "You do not want to manage the project yourself. You want to approve milestones and be informed when something changes. We handle the rest.",
          },
        ],
      },
      whatYouGet: {
        enabled: true,
        heading: "One fixed price. Everything included.",
        items: [
          {
            icon: "icon:delivery-team",
            title: "Delivery Team",
            description: "",
            subtitle: "The right people for your scope and stack.",
            bullets: [
              "Project Manager: single point of contact",
              "2 to 6 engineers sized to project scope",
              "UI/UX designer for interface-heavy projects",
              "Dedicated QA engineer per milestone",
            ],
          },
          {
            icon: "icon:process-governance",
            title: "Process and Governance",
            description: "",
            subtitle: "How we keep scope, timeline, and budget under control.",
            bullets: [
              "Scope locked before any code is written",
              "Formal change request process for material changes",
              "Weekly written updates and live sprint demos",
              "Shared project board with real-time visibility",
            ],
          },
          {
            icon: "icon:quality-assurance",
            title: "Quality Assurance",
            description: "",
            subtitle: "Testing built into every stage, not bolted on at the end.",
            bullets: [
              "Acceptance criteria agreed upfront per milestone",
              "QA sign-off required before milestone payment released",
              "Automated tests run on every commit",
              "Regression testing before every release",
            ],
          },
          {
            icon: "icon:handover-support",
            title: "Handover and Support",
            description: "",
            subtitle: "You own everything we build.",
            bullets: [
              "Full source code and IP assigned to you",
              "Architecture documentation and runbook",
              "Team knowledge transfer session",
              "30-day post-launch hypercare support",
            ],
          },
        ],
      },
      process: {
        enabled: true,
        heading: "From Signed Brief to Shipped Product",
        subtitle: "A structured delivery process with formal sign-off at every milestone. Nothing proceeds without your approval.",
        steps: [
          {
            phase: "Discovery and Scoping",
            duration: "Week 1 to 2",
            description: "",
            includes: [
              "Requirements workshops and stakeholder interviews",
              "Acceptance criteria documented per milestone",
              "Fixed quote with line-item breakdown",
              "Contract signing",
            ],
          },
          {
            phase: "Design and Architecture",
            duration: "Week 2 to 3",
            description: "",
            includes: [
              "Technical architecture document",
              "UI/UX designs and prototype",
              "Formal stakeholder sign-off",
              "Sprint planning and task breakdown",
            ],
          },
          {
            phase: "Development and QA",
            duration: "Week 3 to N",
            description: "",
            includes: [
              "Milestone delivery against agreed acceptance criteria",
              "Weekly live demos",
              "QA review and sign-off per milestone",
              "Bug resolution before next milestone starts",
            ],
          },
          {
            phase: "Launch and Hypercare",
            duration: "Week N plus 30 days",
            description: "",
            includes: [
              "Production deployment",
              "UAT sign-off from your team",
              "Handover docs and knowledge transfer",
              "30-day hypercare with priority issue response",
            ],
          },
        ],
      },
      teamStructure: {
        enabled: true,
        subtitle: "Every project is staffed with a named, fixed team scoped precisely to your deliverable. Not an anonymous contractor pool that rotates mid-project.",
        roles: [
          { icon: "📋", title: "Project Manager", responsibility: "Single point of contact. Owns scope, timeline, and client communication throughout." },
          { icon: "⚙️", title: "Engineers (×2–6)", responsibility: "Sized to the project scope, working exclusively on your deliverable." },
          { icon: "🎨", title: "Designer", responsibility: "Delivers UI/UX designs as part of the project scope." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Tests against the agreed acceptance criteria before every milestone sign-off." },
        ],
        note: "Team is sized precisely to the project scope during the scoping phase.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "96%", label: "On-time delivery" },
          { value: "98%", label: "Budget adherence" },
          { value: "97%", label: "Client satisfaction" },
          { value: "30 days", label: "Post-launch hypercare" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Insurance Platform", industry: "Insurance", title: "Claims portal delivered on time and under budget", description: "Fixed-price delivery of a claims management portal in 14 weeks. Integrated with 3 legacy systems. Delivered under budget by 8%.", link: "/case-study", stats: [{ value: "14wk", label: "On-time delivery" }, { value: "Under budget", label: "By 8%" }], image: "/Media/Image/case 5.png", altText: "Project-based software delivery for claims management portal InApps Technology" },
          { client: "Government Agency", industry: "Public Sector", title: "Reporting dashboard: delivered in 8 weeks", description: "Fixed-scope data visualization dashboard with strict accessibility requirements, delivered 1 week early.", link: "/case-study", stats: [{ value: "8wk", label: "Delivered" }, { value: "1wk", label: "Ahead of schedule" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Fixed-Price Vendor",
        rows: [
          { criterion: "Acceptance criteria defined upfront", inApps: true, inHouse: false, typical: "Rarely" },
          { criterion: "Demo-able milestone deliverables", inApps: true, inHouse: false, typical: false },
          { criterion: "QA included in the price", inApps: true, inHouse: false, typical: "Extra cost" },
          { criterion: "Deployment included", inApps: true, inHouse: false, typical: "Extra cost" },
          { criterion: "30-day post-launch support", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Scope Changes", question: "What happens if requirements change mid-project?", answer: "Small clarifications within intent are handled within scope at no extra cost. Material changes go through a formal change request: we document the impact on timeline and price, and nothing proceeds until you approve." },
          { label: "Pricing", question: "How do you set the fixed price?", answer: "After a requirements workshop, we document scope, acceptance criteria, and milestones. The fixed price is calculated from this documented scope. You see a line-item breakdown before signing. If the scope is too vague for a fixed price, we will tell you and recommend a time-and-materials approach instead." },
          { label: "Milestone Sign-off", question: "What if I am not happy with a milestone delivery?", answer: "Milestone sign-off is your gate. If the delivery does not meet the agreed acceptance criteria, we fix it before releasing the milestone payment and before moving to the next stage. You never pay for work you have not approved." },
          { label: "Timeline", question: "What is the shortest project you take on?", answer: "Our minimum is 6 weeks. Below that, the scoping and process overhead makes fixed-price uneconomical for both sides. For smaller tasks, Staff Augmentation is a better fit." },
          { label: "Post-launch", question: "What if bugs appear after the 30-day hypercare period?", answer: "The 30-day hypercare covers production bugs related to the delivered scope. After that period, you can engage a maintenance retainer or raise a new project scope for additional work." },
        ],
      },
    },
  },
  {
    slug: "qa-testing",
    name: "QA & Testing",
    category: "Quality & Design",
    categoryIcon: "🧪",
    heroTagline: "Ship with confidence, zero regressions",
    heroDescription: "We catch bugs before your users do. Embedded QA engineers, automated test suites, and a quality process built to keep pace with your release cadence.",
    heroIllo: "/services/qa-testing.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why QA Is the First Thing\nThat Gets Cut When Shipping Pressure Arrives",
        subtitle: "Every engineering team intends to do QA properly. Then a deadline moves. A sprint gets compressed. QA is the first thing to shrink. Here is what that pattern costs over time.",
        problems: [
          { title: "Regressions reaching production because the regression suite does not exist, or has not been maintained in six months", description: "" },
          { title: "A 2-week manual testing cycle that delays every release and still misses the same categories of bugs every time", description: "" },
          { title: "Cross-browser and cross-device failures discovered by users, not your QA team", description: "" },
          { title: "Performance that holds up fine with 10 users and collapses at 500, discovered on launch day", description: "" },
          { title: "QA bolted on at the end of the sprint instead of integrated from the start, which means it catches bugs too late to fix without delaying the release", description: "" },
          { title: "Security vulnerabilities discovered in production instead of before release", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is QA and Testing at InApps?",
        body: "We embed QA engineers directly into your engineering team or take ownership of your entire testing function. We build automated test suites, run manual exploratory testing, and establish the processes your team needs to release without fear.\n\nOur QA engineers do more than find bugs. They design test strategies, build automation frameworks, use AI-assisted tooling to accelerate coverage, and measure quality over time so your team has the data to decide when it is safe to release.\n\nThe difference from a traditional QA vendor: we work inside your sprint, not alongside it.",
        stats: [
          { value: "95%", label: "Bug detection before production" },
          { value: "10×", label: "Faster test cycles with automation" },
          { value: "60+", label: "Products QA'd" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [],
        sectionLabel: "Is This a Fit?",
        heading: "This works well if:",
        items: [
          {
            title: "Your team is shipping code faster than QA can keep up",
            desc: "Releases are slipping because manual testing is the bottleneck. Or regressions are reaching production regularly. The code is good. The testing process is not keeping pace.",
          },
          {
            title: "You have no automated test coverage and need to build it",
            desc: "Your codebase has no regression suite. Every release is a manual effort. Every deployment carries risk you cannot quantify. You know you need automation and have not started.",
          },
          {
            title: "You want QA integrated in every sprint, not added at the end",
            desc: "You want a QA engineer reviewing requirements before development starts, writing test cases in parallel, and signing off before anything merges. Not a test phase at the end that delays every release.",
          },
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          {
            icon: "🧪",
            title: "Test Coverage That Scales With Your Product",
            description: "",
            subtitle: "Every critical path covered before it reaches users.",
            bullets: [
              "Automated E2E regression suite (Playwright, Appium, Detox)",
              "API test suite (Postman/Newman, Rest Assured)",
              "Manual exploratory testing for edge cases every sprint",
              "Performance and load testing for high-traffic paths",
            ],
          },
          {
            icon: "⚙️",
            title: "CI/CD Integration From Day One",
            description: "",
            subtitle: "QA built into your pipeline, not run after it.",
            bullets: [
              "Automated tests triggered on every commit",
              "Failing tests block merges to main",
              "Test results and coverage reports in your dashboard",
              "Staging environment gates every production release",
            ],
          },
          {
            icon: "📊",
            title: "Strategy, Metrics, and Release Confidence",
            description: "",
            subtitle: "A QA practice, not just a QA resource.",
            bullets: [
              "Test strategy and risk-based coverage plan",
              "Quality metrics tracked over time",
              "Release readiness report before every deployment",
              "Bug triage and severity classification",
            ],
          },
          {
            icon: "📦",
            title: "Handover So Your Team Owns It Long-Term",
            description: "",
            subtitle: "Your suite survives after we leave.",
            bullets: [
              "Full documentation for every test suite built",
              "Runbook for automation maintenance",
              "Handover session so your engineers can extend coverage",
              "Ongoing support retainer available post-engagement",
            ],
          },
        ],
      },
      process: {
        enabled: true,
        heading: "From Zero Coverage to Production-Ready QA in 6 Weeks",
        subtitle: "A structured QA onboarding that builds coverage fast and integrates into your pipeline from sprint one.",
        steps: [
          { phase: "QA Audit", duration: "Week 1", description: "", includes: ["Current test coverage audit", "Test gap and risk analysis", "Coverage priority ranking", "Test strategy document"], deliverable: "Codebase audit and test strategy" },
          { phase: "Framework Setup", duration: "Week 2 to 3", description: "", includes: ["Automation framework scaffolded and configured", "CI/CD pipeline integration", "Test data management and environment setup", "Reporting dashboard and coverage baseline"], deliverable: "Framework in CI/CD pipeline" },
          { phase: "Test Suite Build", duration: "Week 3 to 6", description: "", includes: ["Critical user path coverage automated", "Full regression suite built", "API test suite", "Performance and load test baselines"], deliverable: "Regression suite in staging" },
          { phase: "Ongoing QA", duration: "Per sprint", description: "", includes: ["Test execution and sign-off every sprint", "Automation suite maintenance and extension", "Exploratory and edge-case testing", "Release readiness report before every deployment"], deliverable: "Sprint QA report" },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🧪", title: "QA Lead", responsibility: "Designs test strategy, defines coverage targets, and owns quality metrics reporting." },
          { icon: "🤖", title: "Automation Engineer", responsibility: "Builds and maintains E2E, API, and unit test automation frameworks." },
          { icon: "🔍", title: "Manual QA Engineer", responsibility: "Runs exploratory, regression, and UAT testing with an adversarial mindset." },
          { icon: "⚡", title: "Performance Engineer (optional)", responsibility: "Designs and runs load and stress test scenarios for high-traffic validation." },
        ],
        note: "Small teams can start with 1 QA engineer. Full QA transformation projects include a lead and 2–3 engineers.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "FinTech App", industry: "Finance", title: "Automation suite: 80% reduction in regression testing time", description: "Built a Playwright E2E regression suite covering 300+ critical user paths for a FinTech product. Manual regression testing time dropped from 2 weeks to 2 days per release cycle. The QA lead embedded in the client's sprint from day one.", link: "/case-study", stats: [{ value: "80%", label: "Regression time reduction" }, { value: "300+", label: "Critical paths automated" }] },
          { client: "E-commerce", industry: "Retail", title: "Performance testing: prevented Black Friday outage", description: "Load testing revealed a bottleneck that would have collapsed the checkout at 500 concurrent users. Fixed before the peak traffic event.", link: "/case-study", stats: [{ value: "0", label: "Downtime on peak day" }, { value: "10×", label: "Load capacity improvement" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Manual-only QA",
        rows: [
          { criterion: "Automated regression suite", inApps: true, inHouse: false, typical: false },
          { criterion: "Performance & load testing", inApps: true, inHouse: false, typical: false },
          { criterion: "CI/CD integrated testing", inApps: true, inHouse: false, typical: false },
          { criterion: "Security scanning", inApps: true, inHouse: false, typical: false },
          { criterion: "Quality metrics & reporting", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Automation Tool", question: "Which automation framework do you use?", answer: "Playwright is our default for web E2E — it's faster and more reliable than Selenium. For mobile we use Appium or Detox. For API testing, Postman/Newman or Rest Assured." },
          { label: "Coverage", question: "How much test coverage do we need?", answer: "We target 100% coverage of critical paths first (checkout, auth, core workflows), then expand based on risk. Chasing 100% line coverage is less valuable than smart risk-based coverage." },
          { label: "Integration", question: "How does QA integrate into our sprints?", answer: "QA engineers participate in sprint planning to scope test cases, write automation alongside feature development, and sign off on features before they merge." },
          { label: "Flakiness", question: "How do you handle flaky tests?", answer: "We track flakiness rate as a primary metric. Tests that fail intermittently are quarantined immediately and fixed before being restored to the main suite." },
          { label: "Handover", question: "Will our team be able to maintain the automation suite?", answer: "Yes. We document the framework, write contribution guides, and train your developers to write tests as part of feature delivery." },
        ],
      },
    },
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "Quality & Design",
    categoryIcon: "🎨",
    heroTagline: "Interfaces that convert and delight",
    heroDescription: "Your product should guide users to outcomes without friction, confusion, or drop-off. We design interfaces grounded in real user research, from discovery and wireframes through to developer-ready Figma files.",
    heroIllo: "/services/ui-ux-design.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most Product Designs\nFail to Convert",
        subtitle: "A product that looks good in Figma but confuses users in the real world is not a design win.",
        insightText: "Good design is not about how it looks in a review. It is about what users do when they encounter it alone for the first time. Here is where most design engagements fall short.",
        hideTrustBadge: true,
        problems: [
          { title: "Users dropping off at the exact step where the product should be converting and no data on why", description: "" },
          { title: "A design that tests well internally but fails when real users encounter it for the first time", description: "" },
          { title: "Inconsistent UI that makes the product feel like it was built by three different teams in three different years", description: "" },
          { title: "No design system so every new feature restarts the conversation about buttons, colors, and spacing", description: "" },
          { title: "Developer handoff that requires 20 Slack threads per feature to clarify what was actually intended", description: "" },
          { title: "A mobile experience that was clearly designed for desktop and then scaled down as an afterthought", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is UI/UX Design at InApps?",
        body: "We design product interfaces grounded in user research, from initial discovery and wireframes through to pixel-perfect, developer-ready Figma files. Our designers work at the intersection of aesthetics and function, creating experiences that guide users to outcomes while reflecting your brand.\n\nWe embed within your product team or take end-to-end ownership of a design project, including design system creation, component libraries, and developer handoff.",
        stats: [
          { value: "80+", label: "Products designed" },
          { value: "35%", label: "Avg. conversion improvement" },
          { value: "4.8/5", label: "Avg. usability test score" },
        ],
      },
      isRightForYou: {
        enabled: true,
        sectionLabel: "IS THIS RIGHT FOR YOU?",
        heading: "UI/UX design support is a fit if:",
        checklist: [],
        items: [
          {
            tag: "Design Debt",
            title: "Your product has grown faster than the design holding it together",
            desc: "Different screens were built at different times by different people. There is no design system, no component library, and no consistency. Every new feature reopens decisions about spacing, colors, and patterns that should have been settled long ago.",
          },
          {
            tag: "Low Conversion",
            title: "Users are dropping off and you do not know why",
            desc: "The analytics show a problem. Users reach a certain step and do not proceed. But without user research and usability testing, you are guessing at solutions. You need a design process that identifies the real friction before proposing a fix.",
          },
          {
            tag: "Handoff Breakdown",
            title: "Your developers are losing time to design ambiguity",
            desc: "Handoff files are incomplete. Developers ask clarifying questions on every feature. Implemented screens do not match the design. You need developer-ready Figma specs with clear annotations, component states, and interaction notes that leave nothing open to interpretation.",
          },
        ],
      },
      whatYouGet: {
        enabled: true,
        heading: "One engagement. Design your team can build from and your users can navigate.",
        items: [
          {
            icon: "icon:workflow-map",
            title: "Research and Discovery",
            description: "",
            subtitle: "Design decisions backed by user evidence, not assumptions.",
            bullets: [
              "User interviews and behavioral analysis",
              "Competitive audit and heuristic evaluation",
              "Journey mapping and friction identification",
              "Research synthesis into actionable design direction",
            ],
          },
          {
            icon: "icon:design-proto-mvp",
            title: "Architecture and Wireframes",
            description: "",
            subtitle: "Structure before visuals. Flow before aesthetics.",
            bullets: [
              "Information architecture design",
              "User flow mapping for all primary journeys",
              "Low-fidelity wireframes for stakeholder review",
              "Iterative refinement before visual design begins",
            ],
          },
          {
            icon: "icon:build-launch-mvp",
            title: "Visual Design and Design System",
            description: "",
            subtitle: "Consistent, extensible, and brand-aligned.",
            bullets: [
              "High-fidelity screen design across all breakpoints",
              "Design system with tokens, components, and usage guidelines",
              "Micro-interaction and animation specification",
              "Interactive prototype for usability testing",
            ],
          },
          {
            icon: "icon:handover-support",
            title: "Handoff and Design QA",
            description: "",
            subtitle: "Developers get everything they need. Nothing left to interpretation.",
            bullets: [
              "Developer-ready Figma files with full annotation",
              "Asset export and specification documentation",
              "Design QA during implementation",
              "Usability testing post-launch with iteration recommendations",
            ],
          },
        ],
      },
      process: {
        enabled: true,
        heading: "From User Research to Developer-Ready Design",
        subtitle: "A research-grounded design process with stakeholder review built in at every stage. Nothing moves to high-fidelity until the structure is validated.",
        steps: [
          { phase: "Research and Discovery", duration: "Week 1 to 2", description: "", includes: ["User interviews", "Competitive audit", "Heuristic evaluation", "Journey mapping"] },
          { phase: "Architecture and Wireframes", duration: "Week 2 to 4", description: "", includes: ["User flows", "IA design", "Wireframes", "Stakeholder review"] },
          { phase: "Visual Design", duration: "Week 4 to 7", description: "", includes: ["Design system", "High-fidelity screens", "Micro-interactions", "Interactive prototype"] },
          { phase: "Handoff and Iteration", duration: "Ongoing", description: "", includes: ["Developer specs", "Asset export", "Usability testing", "Design QA"] },
        ],
      },
      teamStructure: {
        enabled: true,
        subtitle: "Every UI/UX Design engagement is staffed with a named specialist team. Research, UX, and UI are separate roles, not one designer doing all three.",
        roles: [
          { icon: "🔬", title: "UX Researcher", responsibility: "Runs user interviews, usability tests, and synthesizes insights into design direction." },
          { icon: "🗺️", title: "UX Designer", responsibility: "Designs information architecture, user flows, and wireframes." },
          { icon: "🎨", title: "UI Designer", responsibility: "Produces high-fidelity visuals, design system, and component library." },
          { icon: "🤝", title: "Design Lead", responsibility: "Owns design quality, stakeholder alignment, and developer handoff." },
        ],
        note: "Small feature design work runs with 1 designer. Full product design engagements include UX Researcher, UX Designer, UI Designer, and Design Lead as separate roles.",
      },
      qualityVetting: {
        enabled: true,
        subtitle: "Only 5% of designer applicants pass all four stages. Here is what the other 95% do not clear.",
        stages: [
          { stage: 'Portfolio and Design Challenge', description: 'Real-world design challenge with brief and constraints, Portfolio review across product and UX work, Design rationale and decision walkthrough' },
          { stage: 'Communication and English', description: 'Technical communication, Client-facing scenario, Written and spoken English' },
          { stage: 'Agile Collaboration and Ownership', description: 'Agile mindset and teamwork, Ownership and accountability, Adaptability and growth mindset' },
          { stage: 'Final Review and Reference Check', description: 'Technical panel interview, Reference and background check, Culture and values alignment' },
        ],
        metrics: [
          { value: "5%", label: "Accept rate" },
          { value: "4", label: "Stages of vetting" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2 wks", label: "to designer ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "B2B SaaS", industry: "SaaS", title: "Onboarding redesign: 7-day activation from 28% to 39%", description: "Redesigned the onboarding flow based on user research and usability testing, increasing 7-day activation rate from 28% to 39%.", link: "/case-study", image: "/Media/Image/case 5.png", altText: "UI/UX design and onboarding redesign for SaaS product - InApps Technology", stats: [{ value: "28% to 39%", label: "7-day activation" }, { value: "User research", label: "and usability testing" }] },
          { client: "FinTech App", industry: "Fintech", title: "Full app redesign: App Store rating 3.2 to 4.6", description: "Complete UX overhaul of a mobile banking app including navigation restructure, design system, and component library for 3 platform teams.", link: "/case-study", stats: [{ value: "4.6★", label: "App Store rating" }, { value: "3×", label: "Faster feature dev" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Freelance Designer",
        rows: [
          { criterion: "User research included", inApps: true, inHouse: false, typical: "Extra cost" },
          { criterion: "Design system and component library", inApps: true, inHouse: false, typical: "Rarely" },
          { criterion: "Usability testing", inApps: true, inHouse: false, typical: false },
          { criterion: "Developer-ready Figma specs", inApps: true, inHouse: false, typical: "Sometimes" },
          { criterion: "Design QA during implementation", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        heading: "Common questions about UI/UX design",
        items: [
          { label: "Tool", question: "Which design tool do you use?", answer: "Figma. It is the industry standard, enables real-time collaboration, and produces the most developer-friendly handoff files. All deliverables are handed over as organized Figma files with named layers, component libraries, and developer mode annotations." },
          { label: "Research", question: "Do we need user research if we already know our users?", answer: "This is the most common assumption that leads to failed redesigns. Knowing your users from support tickets and internal feedback is not the same as observing them navigate your product without help. User research surfaces the gap between what users say they do and what they actually do. We recommend at minimum 5 moderated usability sessions before any significant redesign. If your timeline or budget does not allow for full research, we scope a lean discovery sprint that gives you enough signal to design with confidence." },
          { label: "Design System", question: "How long does a design system take?", answer: "A foundational design system covering typography, color, spacing, and core components takes 3 to 4 weeks for a product of average complexity. A full system covering all component states, dark mode, responsive variants, and documentation takes 6 to 8 weeks. We scope the right level of investment during discovery based on your product size, team structure, and how frequently new features are being designed." },
          { label: "Handoff", question: "How do you ensure developers implement designs accurately?", answer: "Three things: developer-ready Figma files with full annotation on every component, a design QA pass during implementation where we review the built screens against the Figma specs, and a shared component library in Figma that maps directly to your codebase where possible. We do not hand off files and disappear. We stay involved through implementation to catch drift before it ships." },
          { label: "Iteration", question: "What if we want changes after designs are approved?", answer: "Minor refinements within the approved direction are handled as part of the engagement. Significant changes that alter user flows, add screens, or reopen approved decisions are scoped as change requests with a clear impact on timeline. We document approval at each milestone specifically to protect both sides from scope ambiguity. If you are expecting the design to evolve significantly post-approval, we recommend a retainer model rather than a fixed-scope project." },
        ],
      },
    },
    cta: {
      heading: "Tell us where your product is losing users.",
      subtitle: "Describe the design problem. We will come back with a research-grounded approach and scoped proposal within 48 hours. One call. No commitment.",
      ctaLabel: "Book a Discovery Call",
    },
  },
  {
    slug: "system-integration",
    name: "System Integration",
    category: "Engineering",
    categoryIcon: "🔗",
    heroTagline: "Connect APIs, ERPs, and data sources seamlessly",
    heroDescription: "Your systems should not require a human in the middle to move data from one to another. We build integrations that connect your CRM, ERP, databases, and third-party tools into a reliable, automated data ecosystem.",
    heroIllo: "/services/system-integration.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Disconnected Systems\nCost More Than You Think",
        subtitle: "Every manual data transfer between systems is a tax on your team's time, accuracy, and patience.",
        insightText: "Every manual data transfer between systems is a tax on your team's time, accuracy, and patience. Here is where that cost shows up.",
        hideTrustBadge: true,
        problems: [
          { title: "Someone on the team manually copying data between CRM, ERP, and spreadsheets every single working day", description: "" },
          { title: "A weekly report that requires pulling exports from 4 tools and stitching them in Excel for 3 hours", description: "" },
          { title: "Five systems, five different customer records, and nobody knows which one is correct", description: "" },
          { title: "A web of point-to-point integrations built years ago by someone who no longer works there", description: "" },
          { title: "A new tool blocked from adoption because connecting it to the rest of the stack costs more than the tool saves", description: "" },
          { title: "A compliance or billing error traced back to a sync that failed silently three weeks ago", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is System Integration at InApps?",
        body: "We design and build integrations that connect your business systems into a cohesive, reliable data ecosystem: CRM, ERP, e-commerce platforms, payment processors, data warehouses, and custom internal tools. Whether you need a simple webhook, a complex bidirectional sync, or a full middleware layer, we engineer integrations that hold up under production load.\n\nWe also audit and replace fragile legacy integrations with robust, monitored solutions that your team can actually maintain.",
        stats: [
          { value: "100+", label: "Integrations built" },
          { value: "99.5%", label: "Avg. sync reliability" },
          { value: "70%", label: "Avg. manual work eliminated" },
        ],
      },
      isRightForYou: {
        enabled: true,
        sectionLabel: "IS THIS RIGHT FOR YOU?",
        heading: "System integration is a fit if:",
        checklist: [],
        items: [
          {
            tag: "Manual Transfers",
            title: "Your team is moving data between systems by hand",
            desc: "Someone is copying records from the CRM into the ERP, exporting CSVs to reconcile reports, or re-entering the same data in multiple tools. The work is repetitive, error-prone, and should not require a human.",
          },
          {
            tag: "Fragile Legacy",
            title: "You have integrations that break and nobody knows why",
            desc: "Point-to-point integrations built years ago by engineers who have since left. No documentation, no monitoring, no error handling. When they fail silently, you find out three weeks later via a billing discrepancy or a customer complaint.",
          },
          {
            tag: "Scaling Stack",
            title: "You are adding tools faster than your stack can absorb them",
            desc: "Every new tool adoption requires a custom integration project. The cost and complexity of connecting each addition is slowing down your operations more than the tool improves them. You need an integration layer that makes connecting new systems straightforward.",
          },
        ],
      },
      whatYouGet: {
        enabled: true,
        heading: "One engagement. Systems that talk to each other reliably.",
        items: [
          {
            icon: "icon:audit-arch",
            title: "Audit and Architecture",
            description: "",
            subtitle: "We map what you have before we build anything new.",
            bullets: [
              "System inventory and data flow mapping",
              "Integration architecture design",
              "Risk assessment on existing integrations",
              "Recommended approach before any build begins",
            ],
          },
          {
            icon: "icon:pipeline-design",
            title: "Build and Integration",
            description: "",
            subtitle: "Production-grade connectors, not fragile scripts.",
            bullets: [
              "Connector development and API integration",
              "Data mapping and transformation logic",
              "Error handling and retry logic on every integration path",
              "Authentication and security controls per system",
            ],
          },
          {
            icon: "icon:quality-assurance",
            title: "Testing and Validation",
            description: "",
            subtitle: "Data accuracy verified before go-live.",
            bullets: [
              "Integration testing across all connected systems",
              "Data validation and reconciliation checks",
              "Load testing at production data volumes",
              "UAT with your team before cutover",
            ],
          },
          {
            icon: "icon:go-live",
            title: "Go-Live and Monitoring",
            description: "",
            subtitle: "Every sync monitored. Every failure surfaced immediately.",
            bullets: [
              "Production cutover with rollback plan",
              "Monitoring and alerting on all integration paths",
              "Team training and runbook documentation",
              "30-day post-launch support included",
            ],
          },
        ],
      },
      process: {
        enabled: true,
        heading: "From System Audit to Reliable Integration",
        subtitle: "A structured delivery process designed for integrations that need to hold up under production load, not just pass a demo.",
        steps: [
          { phase: "Audit and Design", duration: "Week 1", description: "", includes: ["System inventory", "Data flow mapping", "Architecture design", "Risk assessment"] },
          { phase: "Development", duration: "Week 2 to 6", description: "", includes: ["Connector build", "Data mapping", "Error handling", "Unit testing"] },
          { phase: "Testing and Validation", duration: "Week 5 to 7", description: "", includes: ["Integration testing", "Data validation", "Load testing", "UAT"] },
          { phase: "Go-Live and Monitor", duration: "Week 7 plus 30-day support", description: "", includes: ["Production cutover", "Monitoring and alerting setup", "Team training", "30-day post-launch support"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🔗", title: "Integration Architect", responsibility: "Designs the overall integration topology and data flow strategy." },
          { icon: "⚙️", title: "Integration Engineers (×2)", responsibility: "Build connectors, APIs, ETL pipelines, and error handling logic." },
          { icon: "📊", title: "Data Engineer", responsibility: "Owns schema mapping, transformation logic, and data quality validation." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Tests data accuracy, sync reliability, and edge cases across all integration paths." },
          { icon: "📋", title: "Project Manager", responsibility: "Coordinates delivery and manages stakeholder communication." },
        ],
        subtitle: "Every System Integration engagement is staffed with a named specialist team. Not generalist engineers who will learn your systems mid-project.",
        note: "Simple point-to-point integrations run with 1 to 2 engineers. Complex multi-system middleware layers require 3 to 5 specialists.",
      },
      qualityVetting: {
        enabled: true,
        subtitle: "Only 3% of applicants pass all four stages. Here is what the other 97% do not clear.",
        stages: [
          { stage: 'Live Coding and System Design', description: 'Real-world coding challenge, System design interview, Code quality and problem solving' },
          { stage: 'Communication and English', description: 'Technical communication, Client-facing scenario, Written and spoken English' },
          { stage: 'Agile Collaboration and Ownership', description: 'Agile mindset and teamwork, Ownership and accountability, Adaptability and growth mindset' },
          { stage: 'Final Review and Reference Check', description: 'Technical panel interview, Reference and background check, Culture and values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Accept rate" },
          { value: "4", label: "Stages of vetting" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2 wks", label: "to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Retail Group", industry: "Retail", title: "ERP and e-commerce sync: zero manual order entry", description: "Integrated Shopify with SAP ERP for real-time inventory, order, and customer data sync. Eliminated 40 hours per week of manual data entry with 99.8% sync accuracy.", link: "/case-study", image: "/Media/Image/case 6.png", altText: "ERP and e-commerce system integration for retail - InApps Technology", stats: [{ value: "40h/wk", label: "Manual work eliminated" }, { value: "99.8%", label: "Sync accuracy" }] },
          { client: "Healthcare Network", industry: "Healthcare", title: "EHR integration: patient data unified across 5 systems", description: "Built an HL7 FHIR integration layer connecting 5 separate EHR and billing systems, creating a single patient record view.", link: "/case-study", stats: [{ value: "5", label: "Systems unified" }, { value: "60%", label: "Admin time saved" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "iPaaS Tool (Zapier/Make)",
        rows: [
          { criterion: "Handles complex transformation logic", inApps: true, inHouse: false, typical: "Limited" },
          { criterion: "Production-grade error handling", inApps: true, inHouse: false, typical: false },
          { criterion: "Custom auth and security controls", inApps: true, inHouse: false, typical: false },
          { criterion: "Scales to millions of records", inApps: true, inHouse: false, typical: "Degrades" },
          { criterion: "Full documentation and maintainability", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        heading: "Common questions about system integration",
        items: [
          { label: "Approach", question: "When should I use custom integration vs. an iPaaS tool like Zapier?", answer: "Zapier and Make are good choices for simple, low-volume automations with standard connectors. When you need complex transformation logic, high data volumes, custom authentication, production-grade reliability, or integrations between systems that do not have native iPaaS connectors, custom integration is the right call. If you are not sure which applies to your situation, describe your use case and we will give you an honest recommendation." },
          { label: "Legacy Systems", question: "Can you integrate with legacy systems that do not have a modern API?", answer: "Yes. We have integrated with legacy ERP systems, mainframe databases, SFTP-based data exchanges, and flat-file batch exports. Where no API exists, we connect via direct database access, file-based exchange, or by building a lightweight API layer in front of the legacy system. We assess feasibility during the audit phase and will tell you upfront if a system is genuinely not integrable." },
          { label: "Timeline", question: "How long does an integration project take?", answer: "A single point-to-point integration with standard APIs typically takes 3 to 4 weeks including testing and go-live. Complex multi-system projects with bidirectional syncs, custom transformation logic, and high data volumes take 6 to 10 weeks. We scope the timeline during the audit phase in week one and do not start the build until you have approved the plan." },
          { label: "Reliability", question: "What happens when an integration fails?", answer: "Every integration we build includes error handling, retry logic, and alerting. When a sync fails, the monitoring system surfaces it immediately with full context: which record failed, at which step, and why. Failures do not proceed silently. Your team gets notified before the error compounds into a data discrepancy. All failures are logged with enough detail to debug and replay the affected records." },
          { label: "Maintenance", question: "What if the connected system's API changes?", answer: "API changes by third-party vendors are a normal part of integration maintenance. Every engagement includes a 30-day post-launch support period that covers changes introduced during that window. After that period, we offer structured maintenance retainers that include monitoring for API deprecations, version upgrades, and schema changes. We will notify you before a breaking change affects your data flows." },
        ],
      },
    },
    cta: {
      heading: "Tell us which systems need to talk to each other.",
      subtitle: "Describe the integration. We will come back with an architecture recommendation and scoped proposal within 48 hours. One call. No commitment.",
      ctaLabel: "Book a Discovery Call",
    },
  },
  {
    slug: "managed-services",
    name: "Managed Services",
    category: "Engagement Models",
    categoryIcon: "🏢",
    heroTagline: "Managed Software Development. Without the Overhead.",
    heroDescription: "InApps monitors your system, fixes issues before your users notice, and delivers structured reports every week and every month. You stay informed. You stay out of the weeds.",
    heroIllo: "/services/offshore-dev-center.svg",
    showTrustBadge: true,
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Engineering Oversight\nBreaks Down at Scale",
        subtitle: "You did not hire engineers to manage engineers. But without a system actively watching your stack, bugs reach users first, tech debt compounds quietly, and your best people spend weekends firefighting instead of shipping.",
        problems: [
          { title: "Bugs discovered by customers, not your team", description: "" },
          { title: "No visibility into system health until something breaks", description: "" },
          { title: "Tech debt grows every sprint but nobody owns the backlog", description: "" },
          { title: "Engineers pulled from product work to handle production fires", description: "" },
          { title: "Incident reports written after the fact with no root cause documented", description: "" },
          { title: "Post-launch support costs never scoped into the original budget", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What Is a Managed Software Development Service?",
        body: "InApps takes full ownership of your engineering layer. We configure automated monitoring across your infrastructure, application, and API stack, detect and resolve issues before they reach users, and deliver a written weekly digest and monthly health report on a fixed cadence. You get full visibility without attending a single daily standup. No ticket queue for you to manage. No incident triage on your end. Just a system that runs, and a team that keeps it that way.",
        stats: [
          { value: "750+", label: "Projects delivered" },
          { value: "10+", label: "Years in business" },
          { value: "85%+", label: "Multi-year retention" },
          { value: "15+", label: "Countries served" },
        ],
      },
      isRightForYou: {
        enabled: true,
        sectionLabel: "IS THIS RIGHT FOR YOU?",
        heading: "Managed service works well if:",
        checklist: [],
        items: [
          { tag: "No Engineering Overhead", title: "You want engineering output without managing engineers day to day", desc: "You have a product in production. You need it maintained, kept stable, and extended over time. You do not want another internal hire, another daily standup, or another tool to monitor." },
          { tag: "Visibility Without the Noise", title: "You need to know what is happening without being pulled into it", desc: "Weekly digest. Monthly health report. You are escalated to only when your decision is actually required." },
          { tag: "Proactive, Not Reactive", title: "You want issues found before your users find them", desc: "Automated monitoring catches anomalies early. Our team investigates, resolves, and logs every fix. You get the summary in your next report." },
        ],
      },
      whatYouGet: {
        enabled: true,
        heading: "One retainer. Everything included.",
        items: [
          { icon: "icon:workflow-map", title: "Monitoring and Detection", description: "", subtitle: "Continuous oversight across your full stack.", bullets: ["Automated monitoring across infrastructure, application, and API layers", "Anomaly detection with threshold alerting calibrated to your system", "Error tracking with root cause classification per incident", "On-call response during your business hours (US, UK, AU time zones covered)"] },
          { icon: "icon:build-launch-mvp", title: "Issue Resolution", description: "", subtitle: "Fixes deployed without you raising a ticket.", bullets: ["Bugs triaged by severity and impact within agreed SLA", "Critical issues fixed same day; non-critical on weekly cadence", "No manual ticket creation required from your side", "Full change log maintained per resolved issue"] },
          { icon: "icon:handover-support", title: "Reporting Loop", description: "", subtitle: "Structured visibility on a fixed schedule.", bullets: ["Weekly digest every Monday: what happened, what was fixed, what is in progress", "Monthly health report: system stability score, trend analysis, forward recommendations", "Delivered via Slack, email, or shared dashboard. Your preference.", "Escalation channel open for priority items between reports"] },
          { icon: "icon:design-proto-mvp", title: "Continuous Improvement", description: "", subtitle: "Your system improves over time, not just stays alive.", bullets: ["Sprint-based enhancements scoped on request", "Tech debt backlog maintained and prioritised jointly", "Architecture recommendations as your system scales", "Quarterly roadmap review included in retainer"] },
        ],
      },
      process: {
        enabled: true,
        heading: "From Onboarding to Ongoing: How the Managed Loop Works",
        steps: [
          { phase: "Onboard and Baseline", duration: "Week 1 to 2", description: "", includes: ["Codebase review and environment access setup", "Monitoring tools configured to your stack", "Severity matrix and escalation path agreed in writing", "First system health baseline report delivered"] },
          { phase: "Continuous Monitoring", duration: "Ongoing", description: "", includes: ["Automated scanning active across all layers", "Error logs reviewed daily by your assigned engineering team", "Threshold alerts tuned to your system's normal behaviour", "On-call rotation active during your core business hours"] },
          { phase: "Detect, Triage, and Fix", duration: "Ongoing", description: "", includes: ["Anomalies flagged and classified by severity", "Root cause investigated within agreed SLA windows", "Fix applied, validated in staging, deployed to production", "Every resolution logged with impact summary"] },
          { phase: "Report and Review", duration: "Weekly and Monthly", description: "", includes: ["Weekly digest delivered every Monday morning", "Monthly health report with trend data and forward recommendations", "Escalation to your team only when your input is required", "Quarterly review call available on request"] },
        ],
      },
      teamStructure: {
        enabled: true,
        subtitle: "Every managed account is staffed with a named, fixed team. Not an anonymous support queue that rotates each quarter.",
        roles: [
          { icon: "📋", title: "Engagement Lead", responsibility: "Single point of escalation. Owns incident response, reporting, and communication between your team and ours." },
          { icon: "🛠️", title: "Engineering Maintainers (2 to 4 engineers)", responsibility: "Sized to your stack complexity. Own the detection, triage, and fix cycle end to end." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Validates every fix before it reaches production. No untested change goes live." },
          { icon: "📊", title: "Reporting Analyst", responsibility: "Compiles weekly and monthly structured reports. Tracks trends and flags patterns across sprint cycles." },
        ],
        note: "Team size reviewed at quarterly check-in based on system complexity and activity volume.",
      },
      qualityVetting: {
        enabled: true,
        eyebrow: "HOW WE STAFF YOUR ACCOUNT",
        heading: "Every engineer passes 4 stages before joining a managed account",
        stages: [
          { stage: 'Technical Depth', description: 'Real codebase debugging exercise, system design under constraints, code review assessment' },
          { stage: 'Communication and English', description: 'Written reporting quality, async update standards, escalation communication clarity' },
          { stage: 'Ownership and Accountability', description: 'Proactive incident posture, on-call readiness, comfort with accountability under pressure' },
          { stage: 'Final Review', description: 'Technical panel interview, reference and background check, culture and values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "92%", label: "12-month retention" },
          { value: "2–4wk", label: "Time to first engineer" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "Australian SaaS", industry: "SaaS", title: "ODC of 8 engineers: product shipped 2x faster", description: "Established an 8-person ODC in Vietnam for an Australian HR SaaS, reducing their cost per engineer by 58% while doubling feature output.", link: "/case-study", stats: [{ value: "58%", label: "Cost reduction" }, { value: "2x", label: "Feature velocity" }] },
          { client: "US Fintech", industry: "Fintech", title: "12-person ODC running for 4 years", description: "Long-running ODC partnership where the Vietnam team now leads architecture decisions and has shipped 3 major product versions.", link: "/case-study", stats: [{ value: "4yr", label: "Partnership" }, { value: "95%", label: "Team retention" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Maintenance Vendor",
        rows: [
          { criterion: "Proactive monitoring included", inApps: true, inHouse: "Varies", typical: false },
          { criterion: "Fixes deployed without manual ticket from client", inApps: true, inHouse: false, typical: false },
          { criterion: "Weekly and monthly structured reports", inApps: true, inHouse: "Rarely", typical: false },
          { criterion: "Single named point of escalation", inApps: true, inHouse: "Varies", typical: false },
          { criterion: "AI-assisted anomaly detection", inApps: true, inHouse: false, typical: false },
          { criterion: "Fixed monthly retainer, no hidden extras", inApps: true, inHouse: "N/A", typical: false },
        ],
      },
      faq: {
        enabled: true,
        heading: "Everything you need to know",
        items: [
          { label: "Accountability", question: "Who is accountable when an incident occurs?", answer: "Your Engagement Lead owns incident response. They coordinate the investigation, manage the fix timeline, and deliver a written incident summary within 24 hours of resolution. One contact. Not a rotating support queue." },
          { label: "Weekly Report", question: "What does the weekly report include?", answer: "Issues detected this week, issues resolved, issues still in progress, current system stability status, and any items requiring your input. Delivered every Monday. One structured page." },
          { label: "Direct Access", question: "Can I talk directly to the engineer working on my system?", answer: "Yes. Your engineers are named and available for direct async communication via Slack or your preferred channel. For critical incidents, your Engagement Lead has the engineer on a call within the hour." },
          { label: "SLA", question: "How fast are critical issues fixed?", answer: "Severity 1 (system down or data at risk): response within 1 hour, target resolution within 4 hours. Severity 2 (functional degradation affecting users): acknowledged within 2 hours, resolved within 24 hours. Exact SLAs are agreed in your service contract before onboarding." },
          { label: "Visibility", question: "How do I know what your team is doing day to day?", answer: "You get a shared project board with real-time task status, a weekly written digest, and a monthly health report. If you want more detail, a monthly review call is included in the retainer at no additional cost." },
        ],
      },
    },
    metaTitle: "Managed Software Development Services | InApps",
    metaDescription: "InApps monitors, fixes, and reports on your engineering layer continuously. Proactive bug fixing. Weekly reports. Book a discovery call.",
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    category: "Engineering",
    categoryIcon: "💻",
    heroTagline: "Software built exactly for your business",
    heroDescription: "We design and build custom software that fits your workflows, scales with your growth, and solves problems off-the-shelf tools never could.",
    heroIllo: "/services/custom-software-development.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Off-the-Shelf Software\nHolds Businesses Back",
        subtitle: "Generic tools are built for the average business. Yours isn't average.",
        problems: [
          { title: "Paying $80K a year for a platform where you use 20% of the features and work around 40% of them", description: "" },
          { title: "A critical business process forced to fit around software logic that was never designed for your workflow", description: "" },
          { title: "Customer and operational data spread across tools that were never meant to work together", description: "" },
          { title: "A feature your business needs blocked by the vendor's roadmap, pricing tier, or deliberate product decision", description: "" },
          { title: "Sensitive business data held in a third-party SaaS under terms you don't fully control", description: "" },
          { title: "A stack of tools duct-taped together with Zapier and custom scripts that the next engineer won't understand", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Custom Software Development?",
        body: "Custom software is built from the ground up to match your exact business logic, data model, and user workflows — not the other way around. We take your requirements, design a scalable architecture, and deliver production-grade software that solves problems your current tools can't.\n\nFrom internal tools and back-office systems to customer-facing platforms and data-driven applications, we handle the full lifecycle: discovery, design, development, QA, deployment, and ongoing support.",
        stats: [
          { value: "200+", label: "Products shipped" },
          { value: "15+", label: "Industries served" },
          { value: "98%", label: "On-time delivery rate" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "Your current tools can't support your exact workflow without constant workarounds",
          "You need full ownership of your codebase, data, and infrastructure",
          "You're building something that doesn't exist yet and needs to be designed from scratch",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🗂️", title: "Requirements & Architecture", description: "Deep discovery sessions to map your workflows, define requirements, and design a scalable system architecture." },
          { icon: "🎨", title: "UI/UX Design", description: "User research, wireframes, and high-fidelity prototypes — designed for the people who will use the software every day." },
          { icon: "⚙️", title: "Full-Stack Development", description: "Frontend, backend, APIs, and database layers built to production standards with clean, maintainable code." },
          { icon: "🧪", title: "QA & Testing", description: "Automated and manual testing across unit, integration, and end-to-end layers before every release." },
          { icon: "☁️", title: "Cloud Deployment", description: "Secure, scalable infrastructure on AWS, GCP, or Azure with CI/CD pipelines and monitoring from day one." },
          { icon: "🔧", title: "Ongoing Support", description: "Post-launch maintenance, feature updates, and dedicated support so your software evolves with your business." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          {
            phase: "Discovery & Planning",
            duration: "Week 1–2",
            description: "",
            includes: ["Stakeholder interviews", "Requirements analysis", "Architecture design", "Project estimation"],
          },
          {
            phase: "Design & Prototyping",
            duration: "Week 2–4",
            description: "",
            includes: ["UX research", "Wireframing", "High-fidelity design", "Prototype review"],
          },
          {
            phase: "Agile Development",
            duration: "Ongoing sprints",
            description: "",
            includes: ["Sprint-based delivery", "Weekly demos", "Continuous integration", "Progress reporting"],
          },
          {
            phase: "QA & Launch",
            duration: "Per release",
            description: "",
            includes: ["QA & regression testing", "Performance optimization", "CI/CD deployment", "Go-live support"],
          },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🏗️", title: "Solutions Architect", responsibility: "Owns the system design, technology stack, and architecture decisions end-to-end." },
          { icon: "💻", title: "Full-Stack Engineers (×2–4)", responsibility: "Build frontend, backend, APIs, and data layers to spec with clean, documented code." },
          { icon: "🎨", title: "UI/UX Designer", responsibility: "Translates requirements into user flows, wireframes, and production-ready designs." },
          { icon: "☁️", title: "DevOps / Infra Engineer", responsibility: "Manages cloud infrastructure, CI/CD pipelines, and production monitoring." },
          { icon: "🧪", title: "QA Engineer", responsibility: "Designs and runs automated and manual test suites across all layers of the application." },
          { icon: "📋", title: "Project Manager", responsibility: "Single point of contact for delivery, sprint management, and client communication." },
        ],
        note: "Team size scales with project complexity. Small internal tools run with 2–3 engineers; Large platforms are staffed with 6–10 specialists and a dedicated PM.",
      },
      qualityVetting: {
        enabled: true,
        stages: [
          { stage: 'Live Coding & System Design', description: 'Real-world coding challenge, System design interview, Code quality & problem solving' },
          { stage: 'Communication & English', description: 'Technical communication, Client-facing scenario, Written & spoken English' },
          { stage: 'Agile Collaboration & Ownership', description: 'Agile mindset & teamwork, Ownership & accountability, Adaptability & growth mindset' },
          { stage: 'Final Review & Reference Check', description: 'Technical panel interview, Reference & background check, Culture & values alignment' },
        ],
        metrics: [
          { value: "3%", label: "Pass rate from applicant pool" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction score" },
          { value: "2wk", label: "Avg. time to team ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          {
            client: "Techcombank",
            industry: "Fintech",
            title: "Custom loan management platform: 3× faster processing",
            description: "We built a bespoke loan origination and management system replacing a fragmented mix of spreadsheets and legacy tools, cutting processing time from 3 days to under 8 hours.",
            link: "/case-study",
            image: "/Media/Image/prd 1.jpg",
            model: "ODC Model",
            stats: [
              { value: "3×", label: "Faster processing" },
              { value: "8h", label: "Down from 3 days" },
              { value: "0", label: "Manual spreadsheets" },
            ],
          },
          {
            client: "Mega Market",
            industry: "E-commerce",
            title: "Custom inventory platform — 99.9% stock accuracy",
            description: "We replaced a patchwork of spreadsheets and off-the-shelf tools with a unified inventory management system that tracks 500K+ SKUs in real time across 30+ warehouses.",
            link: "/case-study",
            image: "/Media/Image/prd 2.jpg",
            model: "Dedicated Team",
            stats: [
              { value: "99.9%", label: "Stock accuracy" },
              { value: "500K+", label: "SKUs tracked" },
              { value: "30+", label: "Warehouses unified" },
            ],
          },
          {
            client: "Workpac",
            industry: "Workforce",
            title: "Workforce management portal: 60% less admin overhead",
            description: "We built a custom workforce portal handling contractor onboarding, timesheet approval, compliance tracking, and payroll integration for 30K+ workers across Australia.",
            link: "/case-study",
            image: "/Media/Image/prd 3.jpg",
            model: "Staff Augmentation",
            stats: [
              { value: "60%", label: "Less admin" },
              { value: "30K+", label: "Workers" },
              { value: "5", label: "Systems replaced" },
            ],
          },
          {
            client: "Prudential",
            industry: "Insurance",
            title: "Claims management system: 50% reduction in resolution time",
            description: "We delivered a fully custom claims intake and case management system with automated routing, document handling, and compliance reporting, replacing a decade-old legacy platform.",
            link: "/case-study",
            image: "/Media/Image/prd 4.jpg",
            model: "Fixed-Price Model",
            stats: [
              { value: "50%", label: "Faster resolution" },
              { value: "2M+", label: "Claims processed" },
              { value: "1", label: "Platform (was 6)" },
            ],
          },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Off-the-Shelf SaaS",
        rows: [
          { criterion: "Built exactly for your workflow", inApps: true, inHouse: false, typical: false },
          { criterion: "Full codebase ownership", inApps: true, inHouse: false, typical: false },
          { criterion: "No per-seat pricing or vendor lock-in", inApps: true, inHouse: false, typical: false },
          { criterion: "Integrates with your existing systems", inApps: true, inHouse: false, typical: "Limited" },
          { criterion: "Scales without licensing costs", inApps: true, inHouse: false, typical: false },
          { criterion: "Dedicated PM + weekly demos", inApps: true, inHouse: false, typical: false },
          { criterion: "Post-launch hypercare (30 days)", inApps: true, inHouse: false, typical: false },
          { criterion: "NDA before first call", inApps: true, inHouse: false, typical: "On request" },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Timeline", question: "How long does custom software development take?", answer: "Timelines depend on scope. A focused internal tool can ship in 6–8 weeks. A full-featured platform typically takes 4–6 months. We give you a realistic estimate after a discovery session — no surprises." },
          { label: "Cost", question: "Is custom software more expensive than SaaS?", answer: "Upfront, yes. Long-term, often cheaper — no per-seat fees, no vendor lock-in, no paying for features you don't use. Most clients break even within 18–24 months compared to SaaS alternatives." },
          { label: "Ownership", question: "Who owns the code at the end?", answer: "You do. 100%. All source code, IP, and documentation transfers to you upon project completion. We sign NDAs before the first call." },
          { label: "Maintenance", question: "What happens after launch?", answer: "All projects include a 30-day hypercare period. We offer flexible ongoing support plans for bug fixes, feature updates, and infrastructure management." },
          { label: "Integration", question: "Can you connect custom software to our existing tools?", answer: "Yes. We integrate with CRMs, ERPs, payment processors, data warehouses, and third-party APIs. If it has an API or SDK, we can connect to it." },
        ],
      },
    },
  },
];