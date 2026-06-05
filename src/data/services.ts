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

export type CaseStudyModel = "ODC Model" | "Dedicated Team" | "Staff Augmentation" | "Fixed-Price Model";

export interface CaseStudyData {
  client: string;
  industry: string;
  title: string;
  description: string;
  link: string;
  stats: { value: string; label: string }[];
  image?: string;
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
  sections: {
    buyerProblems: SectionToggle & { problems: ProblemItem[]; heading?: string; subtitle?: string };
    serviceOverview: SectionToggle & ServiceOverviewData;
    isRightForYou: SectionToggle & { checklist: string[] };
    whatYouGet: SectionToggle & { items: FeatureItem[] };
    process: SectionToggle & { steps: ProcessStep[] };
    teamStructure: SectionToggle & { roles: TeamRole[]; note?: string };
    qualityVetting: SectionToggle & { stages: VettingStage[]; metrics: QualityMetric[] };
    caseStudy: SectionToggle & { items: CaseStudyData[] };
    comparison: SectionToggle & { rows: ComparisonRow[]; competitorLabel?: string };
    faq: SectionToggle & { items: FaqItem[] };
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
        heading: "Why Most AI Agent\nProjects Fail",
        subtitle: "Launching an app is easy. Building one that people actually use, trust, and return to is where most teams fall short.",
        problems: [
          { title: "Apps that launch but fail to gain traction or retain users", description: "" },
          { title: "Poor performance, bugs, and inconsistent behavior across devices", description: "" },
          { title: "Feature-heavy products with no clear core experience", description: "" },
          { title: "Internal teams misaligned on scope, priorities, and roadmap", description: "" },
          { title: "Constant redesigns and rebuilds due to lack of upfront clarity", description: "" },
          { title: "Development that drags on without clear progress or outcomes", description: "" },
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
    heroDescription: "Replace manual processes with AI-driven pipelines that run reliably at scale.",
    heroIllo: "/services/agentic-workflow-automation.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Manual Workflows\nKill Productivity",
        subtitle: "Every hour your team spends on repetitive tasks is an hour not spent on growth. Here is where most businesses are losing.",
        problems: [
          { title: "Hours lost daily to manual data entry, approvals, and handoffs", description: "" },
          { title: "Errors and inconsistencies from human-driven processes", description: "" },
          { title: "Bottlenecks when key people are unavailable or overloaded", description: "" },
          { title: "No visibility into where work is stuck or how long things take", description: "" },
          { title: "Tools that don't talk to each other, forcing manual re-entry", description: "" },
          { title: "Scaling operations means hiring more people, not working smarter", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Agentic Workflow Automation?",
        body: "Agentic workflows use AI to orchestrate multi-step business processes end-to-end — triggering actions, making decisions, and adapting to outcomes without human intervention. Unlike simple RPA, our agents reason over context, handle exceptions, and integrate with your existing tools.\n\nWe map your current workflows, identify automation opportunities, and build AI-powered pipelines that run 24/7 with full auditability.",
        stats: [
          { value: "70%", label: "Avg. time saved" },
          { value: "40+", label: "Workflows automated" },
          { value: "99.5%", label: "Uptime SLA" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "Your team spends 10+ hours per week on repetitive, rule-based tasks",
          "You have multi-step processes that involve multiple tools or approvals",
          "You want to scale operations without proportionally growing headcount",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🗺️", title: "Workflow Mapping", description: "Deep-dive into your existing processes to identify automation candidates and design optimal flows." },
          { icon: "🤖", title: "AI Orchestration Engine", description: "Multi-step pipelines with decision logic, branching, retries, and exception handling built in." },
          { icon: "🔗", title: "Tool Integration", description: "Connect to your CRM, ERP, Slack, email, databases, and any API your workflow depends on." },
          { icon: "👁️", title: "Real-time Monitoring", description: "Live dashboards showing workflow status, step durations, error rates, and completion trends." },
          { icon: "🛑", title: "Human-in-the-Loop", description: "Configurable checkpoints where humans review and approve before the pipeline continues." },
          { icon: "📋", title: "Audit Trail", description: "Full logs of every decision and action taken — essential for compliance and debugging." },
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
          { client: "Logistics Co.", industry: "Logistics", title: "Automated invoice processing — 90% faster approvals", description: "We built an agentic pipeline that extracts invoice data, matches purchase orders, flags discrepancies, and routes for approval — cutting a 3-day process to 4 hours.", link: "/case-study", stats: [{ value: "90%", label: "Faster approvals" }, { value: "3 days→4h", label: "Cycle time" }] },
          { client: "HealthTech SaaS", industry: "Healthcare", title: "Patient onboarding automation — zero manual steps", description: "End-to-end onboarding pipeline that collects patient data, verifies insurance, schedules appointments, and sends confirmations without any human involvement.", link: "/case-study", stats: [{ value: "100%", label: "Manual steps removed" }, { value: "4×", label: "Onboarding capacity" }] },
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
    heroDescription: "Embed LLM-powered features — chat, search, generation — directly into your product.",
    heroIllo: "/services/generative-ai-integration.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most AI Features\nFail to Ship",
        subtitle: "Adding AI to your product sounds simple. Making it reliable, safe, and actually useful is where teams get stuck.",
        problems: [
          { title: "AI outputs that hallucinate or produce inconsistent results", description: "" },
          { title: "No clear strategy for which AI features actually drive value", description: "" },
          { title: "LLM costs ballooning without a token optimization strategy", description: "" },
          { title: "Slow response times that degrade user experience", description: "" },
          { title: "Security and data privacy concerns blocking production deployment", description: "" },
          { title: "Engineering teams without LLM application experience wasting months", description: "" },
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
        checklist: [
          "You want to add AI-powered chat, search, or generation to your existing product",
          "Your team lacks LLM application experience and needs to ship fast",
          "You need production-grade AI — not a demo — with cost control and safety built in",
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
          { client: "EdTech Platform", industry: "Education", title: "AI tutor feature — 3× user engagement", description: "We integrated a context-aware AI tutor into an existing LMS, including RAG over course content and adaptive question generation, shipped in 6 weeks.", link: "/case-study", stats: [{ value: "3×", label: "Engagement" }, { value: "6wk", label: "Time to ship" }] },
          { client: "Legal SaaS", industry: "Legal Tech", title: "Contract summarization — 80% faster review", description: "LLM pipeline that ingests contracts, extracts key clauses, flags risks, and generates plain-language summaries for non-legal stakeholders.", link: "/case-study", stats: [{ value: "80%", label: "Faster review" }, { value: "40%", label: "Cost reduction" }] },
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
        heading: "Why Most Mobile Apps\nFail To Deliver",
        subtitle: "Launching an app is easy. Building one that people actually use, trust, and return to is where most teams fall short.",
        problems: [
          { title: "Apps that launch but fail to gain traction or retain users", description: "" },
          { title: "Poor performance, bugs, and inconsistent behavior across devices", description: "" },
          { title: "Feature-heavy products with no clear core experience", description: "" },
          { title: "Internal teams misaligned on scope, priorities, and roadmap", description: "" },
          { title: "Constant redesigns and rebuilds due to lack of upfront clarity", description: "" },
          { title: "Development that drags on without clear progress or outcomes", description: "" },
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
          { client: "Fintech Startup", industry: "Fintech", title: "Payment app — 500K downloads in 6 months", description: "Built a React Native payment app with biometric auth, real-time notifications, and offline transaction queuing.", link: "/case-study", stats: [{ value: "500K", label: "Downloads" }, { value: "4.8★", label: "App Store rating" }] },
          { client: "Healthcare Provider", industry: "Healthcare", title: "Patient app — 85% appointment no-show reduction", description: "Cross-platform app with appointment booking, telemedicine, and push reminders that cut no-shows dramatically.", link: "/case-study", stats: [{ value: "85%", label: "No-show reduction" }, { value: "4.7★", label: "Rating" }] },
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
          { title: "Multi-tenancy not designed in from day one, causing costly rewrites later", description: "" },
          { title: "Billing and subscription management that breaks at scale or edge cases", description: "" },
          { title: "Authentication and permission systems that can't support enterprise buyers", description: "" },
          { title: "Performance degradation as the tenant count grows", description: "" },
          { title: "No feature flagging or usage-based metering infrastructure", description: "" },
          { title: "Technical debt from rapid MVP shipping that blocks the next growth phase", description: "" },
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
          { client: "HR Tech", industry: "HR", title: "Multi-tenant HR platform — 200 enterprise clients onboarded", description: "Built a SaaS HR platform with per-tenant data isolation, SAML SSO, usage-based billing, and a self-serve onboarding flow.", link: "/case-study", stats: [{ value: "200", label: "Enterprise tenants" }, { value: "4wk", label: "Avg. onboarding time" }] },
          { client: "PropTech", industry: "Real Estate", title: "Property SaaS — scaled from 50 to 2,000 tenants", description: "Re-architected a monolithic property management tool into a proper multi-tenant SaaS with Stripe billing and role-based access.", link: "/case-study", stats: [{ value: "40×", label: "Tenant growth" }, { value: "99.95%", label: "Uptime" }] },
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
    heroDescription: "CI/CD pipelines, infrastructure as code, and cloud-native deployments.",
    heroIllo: "/services/cloud-devops.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Poor DevOps\nSlows Everything Down",
        subtitle: "Slow deploys, fragile infrastructure, and manual processes aren't just annoying — they're a competitive disadvantage.",
        problems: [
          { title: "Deployments that take hours and require a senior engineer to babysit", description: "" },
          { title: "No staging environment, so bugs only surface in production", description: "" },
          { title: "Cloud costs spiraling with no visibility into what's driving spend", description: "" },
          { title: "Infrastructure configured by hand — no reproducibility, no audit trail", description: "" },
          { title: "No monitoring or alerting until customers report an outage", description: "" },
          { title: "Security misconfigurations and open ports discovered in the worst moments", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Cloud & DevOps at InApps?",
        body: "We design and implement cloud infrastructure, CI/CD pipelines, and DevOps practices that let your team ship faster with more confidence. Whether you're starting from scratch or modernizing a messy legacy setup, we bring infrastructure as code, automated testing gates, and observability from day one.\n\nWe work across AWS, GCP, and Azure — and we're platform-agnostic, recommending the right tools for your team's size and requirements.",
        stats: [
          { value: "50+", label: "Infrastructure setups delivered" },
          { value: "10×", label: "Avg. deploy frequency improvement" },
          { value: "99.9%", label: "Uptime SLA" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "Your team deploys manually or less than once per week",
          "You have no infrastructure as code — environments are snowflakes",
          "You want full observability: logs, metrics, traces, and alerts before the next incident",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🔄", title: "CI/CD Pipelines", description: "Automated build, test, and deploy pipelines on GitHub Actions, GitLab CI, or CircleCI." },
          { icon: "📐", title: "Infrastructure as Code", description: "Terraform or Pulumi for reproducible, version-controlled infrastructure across all environments." },
          { icon: "☁️", title: "Cloud Architecture", description: "Right-sized AWS/GCP/Azure architecture with cost optimization, HA, and disaster recovery." },
          { icon: "🐳", title: "Containerization & Orchestration", description: "Docker, Kubernetes (EKS/GKE/AKS), and Helm charts for scalable container deployments." },
          { icon: "📊", title: "Observability Stack", description: "Centralized logging (ELK/Loki), metrics (Prometheus/Grafana), traces (Datadog/Jaeger), and alerting." },
          { icon: "🔒", title: "Security & Compliance", description: "IAM hardening, secret management (Vault/SSM), network policies, and compliance scanning." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Audit & Design", duration: "Week 1", description: "", includes: ["Infrastructure audit", "Cost analysis", "Architecture design", "Security review"] },
          { phase: "Foundation", duration: "Week 2–4", description: "", includes: ["IaC setup", "Environments", "Secret management", "Baseline monitoring"] },
          { phase: "CI/CD & Automation", duration: "Week 3–6", description: "", includes: ["Pipeline setup", "Test gates", "Deploy automation", "Rollback strategy"] },
          { phase: "Observability & Handover", duration: "Week 6–8", description: "", includes: ["Full observability", "Runbooks", "On-call setup", "Team training"] },
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
        note: "Small setups run with 2 DevOps engineers. Complex multi-region, multi-account platforms require 4–5 specialists.",
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
          { client: "E-commerce Platform", industry: "Retail", title: "AWS migration — 60% infrastructure cost reduction", description: "Migrated a self-hosted monolith to EKS with auto-scaling, cutting monthly cloud spend from $40K to $16K while improving uptime.", link: "/case-study", stats: [{ value: "60%", label: "Cost reduction" }, { value: "99.99%", label: "Uptime" }] },
          { client: "FinTech", industry: "Finance", title: "CI/CD overhaul — 10× deploy frequency", description: "Replaced manual deploys with GitHub Actions pipelines and Terraform IaC, going from weekly releases to multiple deploys per day.", link: "/case-study", stats: [{ value: "10×", label: "Deploy frequency" }, { value: "90%", label: "Less deploy time" }] },
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
        subtitle: "The biggest risk isn't building the wrong thing — it's spending 12 months and $500K finding out it was wrong.",
        problems: [
          { title: "Spending months building features users don't actually want", description: "" },
          { title: "Investors asking for a working demo before committing funding", description: "" },
          { title: "No way to test assumptions without committing to a full build", description: "" },
          { title: "Internal teams too busy with existing products to build something new", description: "" },
          { title: "Agencies that quote 6+ months and $300K for what should be a 6-week MVP", description: "" },
          { title: "Prototypes that look great but can't be shown to real users or extended", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is MVP Development at InApps?",
        body: "We help founders, product teams, and innovation labs go from idea to working product in 4–8 weeks. Our MVP service is designed to validate your core hypothesis with the minimum viable feature set — built on a production-grade foundation you can extend, not throw away.\n\nWe scope ruthlessly, cut scope that doesn't test the hypothesis, and ship something real users can interact with — then help you decide what to build next based on what you learn.",
        stats: [
          { value: "40+", label: "MVPs shipped" },
          { value: "6wk", label: "Avg. time to launch" },
          { value: "70%", label: "Proceed to full product" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You have an idea or hypothesis that needs to be tested with real users",
          "You need something working — not a slide deck or Figma prototype — in weeks",
          "You want a foundation you can build on, not a throwaway prototype",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🎯", title: "Scope Definition", description: "We facilitate a ruthless scoping session to define the exact features needed to test your core hypothesis." },
          { icon: "🎨", title: "UX Design", description: "Lean UI/UX — enough to be usable and testable, not over-designed before you know what works." },
          { icon: "⚙️", title: "Full-stack Development", description: "Working product built on a modern, extensible stack — not a fragile demo held together with duct tape." },
          { icon: "🚀", title: "Deployment", description: "Live on the internet with a real domain, SSL, and a database — ready for real user testing." },
          { icon: "📊", title: "Analytics", description: "Basic event tracking so you can measure what users actually do versus what you expected." },
          { icon: "🗺️", title: "Next Steps Roadmap", description: "After launch, we help you interpret early signals and define what to build in the next phase." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Scoping Sprint", duration: "Week 1", description: "", includes: ["Hypothesis definition", "User story mapping", "Feature prioritization", "Tech decision"] },
          { phase: "Design", duration: "Week 1–2", description: "", includes: ["Wireframes", "Core flows", "Design system lite", "Stakeholder sign-off"] },
          { phase: "Build", duration: "Week 2–5", description: "", includes: ["Core features only", "Weekly demos", "CI/CD setup", "Basic analytics"] },
          { phase: "Launch & Learn", duration: "Week 6", description: "", includes: ["Production deploy", "User testing", "Data review", "Next phase planning"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🎯", title: "Product Lead", responsibility: "Facilitates scoping, cuts scope ruthlessly, and keeps the team focused on the hypothesis." },
          { icon: "⚙️", title: "Full-stack Engineer (×2)", responsibility: "Builds frontend, backend, and APIs as a lean, fast-moving pair." },
          { icon: "🎨", title: "UX Designer", responsibility: "Creates lean wireframes and a minimal design system to move fast without looking rough." },
          { icon: "📋", title: "Project Manager", responsibility: "Keeps the engagement on time and scope — the most important role in an MVP build." },
        ],
        note: "MVPs run lean by design. We scale up only after validation, when you know what to build.",
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
          { client: "Series A Startup", industry: "PropTech", title: "MVP in 5 weeks — raised $2M seed round", description: "Built a working marketplace MVP for short-term property rentals in 5 weeks. The founder used it to close a $2M seed round.", link: "/case-study", stats: [{ value: "5wk", label: "Time to ship" }, { value: "$2M", label: "Seed raised" }] },
          { client: "Enterprise Innovation Lab", industry: "Logistics", title: "PoC in 3 weeks — secured internal funding", description: "Built a proof of concept for an AI-powered route optimization tool. The PoC secured $500K internal innovation budget.", link: "/case-study", stats: [{ value: "3wk", label: "Time to PoC" }, { value: "$500K", label: "Budget secured" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Typical Agency",
        rows: [
          { criterion: "Fixed scope, fixed timeline", inApps: true, inHouse: false, typical: "Rarely" },
          { criterion: "Production-grade foundation (not a demo)", inApps: true, inHouse: false, typical: false },
          { criterion: "Ships in 4–8 weeks", inApps: true, inHouse: false, typical: false },
          { criterion: "Analytics from day 1", inApps: true, inHouse: false, typical: false },
          { criterion: "Post-launch roadmap session", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Scope", question: "How do you decide what goes in the MVP?", answer: "We run a scoping sprint where we map your core hypothesis to the minimum features needed to test it. Anything that doesn't directly test the hypothesis gets cut or deferred." },
          { label: "Quality", question: "Is the code production-quality or throwaway?", answer: "Production-quality. We use the same stack and practices as a full product build — you're not throwing it away after validation. The MVP becomes the foundation for v2." },
          { label: "Timeline", question: "Can you really ship in 4–6 weeks?", answer: "Yes, but only if scope is locked. Scope creep is the #1 killer of MVP timelines. We enforce scope discipline aggressively." },
          { label: "Post-MVP", question: "What happens after launch?", answer: "We run a learning session to interpret your data, then help you prioritize the next phase. Most clients move into a dedicated team or sprint-based engagement." },
          { label: "Tech Stack", question: "What stack do you use?", answer: "Next.js for frontend, Node.js or Python for backend, PostgreSQL, and Vercel/AWS for hosting. Fast to build, easy to extend." },
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
        subtitle: "Offshore development has a bad reputation but the problem isn't the location. It's the model.",
        problems: [
          { title: "Engineers shared across multiple clients with no real commitment to yours", description: "" },
          { title: "No visibility into what the team is actually working on day to day", description: "" },
          { title: "Communication gaps that compound into weeks of misaligned work", description: "" },
          { title: "High turnover the engineer you onboarded leaves 3 months in", description: "" },
          { title: "No accountability missed sprints, broken builds, and no consequences", description: "" },
          { title: "Hidden costs: management overhead, rework, and integration delays", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is an Offshore Dev Center?",
        body: "An Offshore Dev Center (ODC) is a dedicated team of engineers based in Vietnam, working exclusively on your product not split across five other clients. We recruit, vet, onboard, and manage the team on your behalf, while you retain full technical direction.\n\nYou get the cost efficiency of offshore hiring with the reliability, accountability, and visibility of an in-house team. Most clients run their ODC as a permanent extension of their engineering organization.",
        stats: [
          { value: "750+", label: "Projects delivered" },
          { value: "10+", label: "Years in business" },
          { value: "85%+", label: "Multi-year retention" },
          { value: "15+", label: "Countries served" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You need a team of 3+ engineers working full-time, exclusively on your product",
          "You want the cost efficiency of offshore hiring without the management headache",
          "You're looking for a long-term team, not a short-term project vendor",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🌏", title: "Dedicated Team", description: "Engineers work exclusively on your product — not shared with other clients." },
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
          { client: "Australian SaaS", industry: "SaaS", title: "ODC of 8 engineers — product shipped 2× faster", description: "Established an 8-person ODC in Vietnam for an Australian HR SaaS, reducing their cost per engineer by 58% while doubling feature output.", link: "/case-study", stats: [{ value: "58%", label: "Cost reduction" }, { value: "2×", label: "Feature velocity" }] },
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
        subtitle: "You have work that needs doing. Hiring takes 3 months and agencies send you whoever is available.",
        problems: [
          { title: "3–6 month hiring cycles for senior engineers in a competitive market", description: "" },
          { title: "Agencies placing junior engineers at senior rates", description: "" },
          { title: "Contractors who take weeks to become productive on your codebase", description: "" },
          { title: "Communication style mismatches that create friction with your team", description: "" },
          { title: "No visibility into a contractor's actual skill level before they start", description: "" },
          { title: "Inflexibility — locked into 12-month contracts when your needs change", description: "" },
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
          { client: "UK SaaS Scale-up", industry: "SaaS", title: "4 engineers placed in 10 days — roadmap unblocked", description: "Placed a senior React engineer and 3 backend engineers in under 2 weeks, unblocking a product roadmap that had been stalled for 2 months.", link: "/case-study", stats: [{ value: "10 days", label: "Time to placed" }, { value: "2mo", label: "Roadmap unblocked" }] },
          { client: "US Startup", industry: "AI", title: "ML engineer placed — product shipped 6 weeks early", description: "Placed a specialized LLM engineer who led the AI feature development. The product launched 6 weeks ahead of schedule.", link: "/case-study", stats: [{ value: "6wk", label: "Ahead of schedule" }, { value: "1wk", label: "Time to placement" }] },
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
    heroDescription: "Fixed-scope delivery with clear milestones, managed end-to-end by our team.",
    heroIllo: "/services/project-based-dev.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Fixed-Price Projects\nUsually Go Wrong",
        subtitle: "You need a defined deliverable, on time and on budget. Most vendors can't deliver that reliably.",
        problems: [
          { title: "Projects that drag on 2× longer than quoted with scope always expanding", description: "" },
          { title: "No accountability — the vendor delivers something different from what was agreed", description: "" },
          { title: "Milestone payments with no real deliverables to validate against", description: "" },
          { title: "Handover that leaves your team unable to maintain or extend the system", description: "" },
          { title: "Communication gaps — no updates for weeks, then a big reveal at the end", description: "" },
          { title: "Post-launch bugs that the vendor classifies as 'out of scope'", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is Project-Based Development?",
        body: "Our project-based engagement is a fixed-scope, fixed-timeline delivery model. We define the requirements precisely, agree on milestones with real deliverables, and take full accountability for shipping on time and on budget.\n\nYou get a dedicated project team, a single point of contact, weekly progress demos, and a 30-day post-launch support period — all included. No surprises, no scope ambiguity, no excuses.",
        stats: [
          { value: "96%", label: "On-time delivery rate" },
          { value: "98%", label: "Budget adherence" },
          { value: "30 days", label: "Post-launch hypercare" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You have a well-defined deliverable with clear success criteria",
          "You need a fixed price and fixed timeline you can plan against",
          "You want a vendor who takes full ownership of delivery — not just providing bodies",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "📋", title: "Fixed Scope Definition", description: "Detailed requirements document with acceptance criteria agreed before development starts." },
          { icon: "🗓️", title: "Milestone-based Delivery", description: "Defined checkpoints with demo-able deliverables so you can track real progress." },
          { icon: "👤", title: "Single Point of Contact", description: "One project manager owns communication, coordination, and escalation end-to-end." },
          { icon: "🧪", title: "QA Included", description: "Testing is part of the delivery, not an afterthought billed separately." },
          { icon: "🚀", title: "Deployment Included", description: "We ship to production and configure your infrastructure as part of delivery." },
          { icon: "🛡️", title: "30-day Hypercare", description: "Post-launch support period where we fix any bugs or issues at no extra cost." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Discovery & Scoping", duration: "Week 1–2", description: "", includes: ["Requirements workshops", "Acceptance criteria", "Fixed quote", "Contract signing"] },
          { phase: "Design & Architecture", duration: "Week 2–3", description: "", includes: ["Technical architecture", "UI/UX designs", "Stakeholder sign-off", "Sprint planning"] },
          { phase: "Development & QA", duration: "Week 3–N", description: "", includes: ["Milestone delivery", "Weekly demos", "QA per milestone", "Bug resolution"] },
          { phase: "Launch & Hypercare", duration: "Week N + 30 days", description: "", includes: ["Production deploy", "UAT sign-off", "Handover docs", "30-day support"] },
        ],
      },
      teamStructure: {
        enabled: true,
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
          { client: "Insurance Platform", industry: "Insurance", title: "Claims portal delivered on time and under budget", description: "Fixed-price delivery of a claims management portal in 14 weeks, including integrations with 3 legacy systems.", link: "/case-study", stats: [{ value: "14wk", label: "On-time delivery" }, { value: "Under budget", label: "By 8%" }] },
          { client: "Government Agency", industry: "Public Sector", title: "Reporting dashboard — delivered in 8 weeks", description: "Fixed-scope data visualization dashboard with strict accessibility requirements, delivered 1 week early.", link: "/case-study", stats: [{ value: "8wk", label: "Delivered" }, { value: "1wk", label: "Ahead of schedule" }] },
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
          { label: "Scope Changes", question: "What happens if requirements change mid-project?", answer: "We handle small clarifications within scope. Material changes go through a formal change request process with an impact assessment on timeline and price before proceeding." },
          { label: "Pricing", question: "How do you set the fixed price?", answer: "We estimate bottom-up after a thorough discovery and scoping phase. The quote is only issued when we're confident in the requirements. We include a contingency buffer for unknowns." },
          { label: "Milestone Sign-off", question: "What if I'm not happy with a milestone delivery?", answer: "We won't move to the next milestone until you sign off on the current one. We iterate until the acceptance criteria are met — no extra charge." },
          { label: "Timeline", question: "What's the shortest project you take on?", answer: "Minimum 4 weeks. Below that, we recommend our MVP service which is optimized for fast, lean delivery." },
          { label: "Post-launch", question: "What if bugs appear after the 30-day hypercare?", answer: "The 30-day period covers bugs in delivered features. After that, we offer ongoing maintenance retainers or you can handle it with your own team." },
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
    heroDescription: "Manual and automated testing to ship with confidence and zero regressions.",
    heroIllo: "/services/qa-testing.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Software Quality\nIs Harder Than It Looks",
        subtitle: "Shipping fast is easy. Shipping fast without breaking things requires a real QA practice.",
        problems: [
          { title: "Regressions reaching production because there's no automated safety net", description: "" },
          { title: "Manual testing that takes 2 weeks and still misses critical bugs", description: "" },
          { title: "No cross-browser or cross-device testing until users complain", description: "" },
          { title: "Performance issues that only surface under real load", description: "" },
          { title: "QA treated as an afterthought, added at the end of each sprint", description: "" },
          { title: "Security vulnerabilities discovered in production instead of before release", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is QA & Testing at InApps?",
        body: "We embed QA engineers into your team or take ownership of your entire testing function — building automated test suites, running manual exploratory testing, and establishing the processes your team needs to ship with confidence.\n\nOur QA engineers don't just find bugs. They design test strategies, build automation frameworks, and measure quality over time so your team has the data to make smart release decisions.",
        stats: [
          { value: "95%", label: "Bug detection before production" },
          { value: "10×", label: "Faster test cycles with automation" },
          { value: "60+", label: "Products QA'd" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "You're releasing to production and discovering bugs only when users report them",
          "Your test cycles take too long, slowing down your release cadence",
          "You want automated regression coverage so developers can ship with confidence",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🤖", title: "Test Automation", description: "E2E automation with Playwright or Cypress; API testing with Postman/Rest Assured; unit test coverage improvement." },
          { icon: "🔍", title: "Exploratory Testing", description: "Manual testing by experienced QA engineers who think like adversarial users." },
          { icon: "📱", title: "Cross-platform Testing", description: "Browser matrix, device matrix, and OS version testing to catch platform-specific issues." },
          { icon: "⚡", title: "Performance Testing", description: "Load, stress, and spike testing with k6 or JMeter to validate behavior under production traffic." },
          { icon: "🔒", title: "Security Testing", description: "OWASP Top 10 scanning, penetration testing basics, and vulnerability assessment." },
          { icon: "📊", title: "Quality Metrics", description: "Bug escape rate, test coverage, flakiness rate, and mean time to detect — tracked and reported." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "QA Audit", duration: "Week 1", description: "", includes: ["Current state review", "Test gap analysis", "Risk assessment", "Strategy design"] },
          { phase: "Framework Setup", duration: "Week 2–3", description: "", includes: ["Automation framework", "CI/CD integration", "Test data management", "Reporting setup"] },
          { phase: "Test Suite Build", duration: "Week 3–6", description: "", includes: ["Critical path coverage", "Regression suite", "API test suite", "Performance baselines"] },
          { phase: "Ongoing QA", duration: "Per sprint", description: "", includes: ["Sprint test execution", "Automation maintenance", "Exploratory testing", "Quality reporting"] },
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
          { client: "FinTech App", industry: "Finance", title: "Automation suite — 80% regression time reduction", description: "Built a Playwright E2E suite covering 300+ critical paths, cutting manual regression testing from 2 weeks to 2 days per release.", link: "/case-study", stats: [{ value: "80%", label: "Regression time cut" }, { value: "300+", label: "Automated test cases" }] },
          { client: "E-commerce", industry: "Retail", title: "Performance testing — prevented Black Friday outage", description: "Load testing revealed a bottleneck that would have collapsed the checkout at 500 concurrent users. Fixed before the peak traffic event.", link: "/case-study", stats: [{ value: "0", label: "Downtime on peak day" }, { value: "10×", label: "Load capacity improvement" }] },
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
    heroDescription: "User research, wireframes, and pixel-perfect interfaces that convert and delight.",
    heroIllo: "/services/ui-ux-design.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Most Product Designs\nFail to Convert",
        subtitle: "A product that looks good in Figma but confuses users in the real world isn't a design win.",
        problems: [
          { title: "High drop-off rates at key steps because the UX creates friction", description: "" },
          { title: "Designs that look beautiful but don't match how users actually think", description: "" },
          { title: "Inconsistent UI that erodes trust and makes the product feel unpolished", description: "" },
          { title: "No design system, so every feature looks slightly different", description: "" },
          { title: "Handoff to developers that requires constant back-and-forth clarification", description: "" },
          { title: "Mobile UX that was clearly an afterthought of a desktop-first design", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is UI/UX Design at InApps?",
        body: "We design product interfaces grounded in user research — from initial discovery and wireframes through to pixel-perfect, developer-ready Figma files. Our designers work at the intersection of aesthetics and function, creating experiences that guide users to outcomes while reflecting your brand.\n\nWe embed within your product team or take end-to-end ownership of a design project, including design system creation, component libraries, and developer handoff.",
        stats: [
          { value: "80+", label: "Products designed" },
          { value: "35%", label: "Avg. conversion improvement" },
          { value: "4.8/5", label: "Avg. usability test score" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "Your product has UX friction you can feel but struggle to pinpoint — users drop off but you're not sure why",
          "You need designs that developers can implement accurately without constant clarification",
          "You want a design system that makes future feature development faster and more consistent",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🔬", title: "User Research", description: "Interviews, surveys, and usability testing to understand how real users think and where they struggle." },
          { icon: "🗺️", title: "Information Architecture", description: "Navigation structures, user flows, and content hierarchy designed around mental models." },
          { icon: "📐", title: "Wireframing", description: "Low-fidelity wireframes that align stakeholders on structure before investing in visual design." },
          { icon: "🎨", title: "Visual Design", description: "High-fidelity Figma designs with pixel-perfect attention to typography, color, and spacing." },
          { icon: "🧩", title: "Design System", description: "Component library with tokens, variants, and documentation for consistent, scalable UI." },
          { icon: "🤝", title: "Developer Handoff", description: "Annotated Figma files with specs, assets, and interaction notes — ready for dev, no guesswork." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Research & Discovery", duration: "Week 1–2", description: "", includes: ["User interviews", "Competitive audit", "Heuristic evaluation", "Journey mapping"] },
          { phase: "Architecture & Wireframes", duration: "Week 2–4", description: "", includes: ["User flows", "IA design", "Wireframes", "Stakeholder review"] },
          { phase: "Visual Design", duration: "Week 4–7", description: "", includes: ["Design system", "High-fidelity screens", "Micro-interactions", "Prototype"] },
          { phase: "Handoff & Iteration", duration: "Ongoing", description: "", includes: ["Developer specs", "Asset export", "Usability testing", "Design QA"] },
        ],
      },
      teamStructure: {
        enabled: true,
        roles: [
          { icon: "🔬", title: "UX Researcher", responsibility: "Runs user interviews, usability tests, and synthesizes insights into design direction." },
          { icon: "🗺️", title: "UX Designer", responsibility: "Designs information architecture, user flows, and wireframes." },
          { icon: "🎨", title: "UI Designer", responsibility: "Produces high-fidelity visuals, design system, and component library." },
          { icon: "🤝", title: "Design Lead", responsibility: "Owns design quality, stakeholder alignment, and developer handoff." },
        ],
        note: "Small feature design work runs with 1 designer. Full product design engagements include research, UX, and UI as separate roles.",
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
          { value: "5%", label: "Pass rate" },
          { value: "4", label: "Vetting stages" },
          { value: "97%", label: "Client satisfaction" },
          { value: "2wk", label: "Avg. time to designer ready" },
        ],
      },
      caseStudy: {
        enabled: true,
        items: [
          { client: "B2B SaaS", industry: "SaaS", title: "Onboarding redesign — 40% activation improvement", description: "Redesigned the onboarding flow based on user research and usability testing, increasing 7-day activation rate from 28% to 39%.", link: "/case-study", stats: [{ value: "40%", label: "Activation improvement" }, { value: "39%", label: "7-day activation rate" }] },
          { client: "FinTech App", industry: "Fintech", title: "Full app redesign — App Store rating 3.2 → 4.6", description: "Complete UX overhaul of a mobile banking app including navigation restructure, design system, and component library for 3 platform teams.", link: "/case-study", stats: [{ value: "4.6★", label: "App Store rating" }, { value: "3×", label: "Faster feature dev" }] },
        ],
      },
      comparison: {
        enabled: true,
        competitorLabel: "Freelance Designer",
        rows: [
          { criterion: "User research included", inApps: true, inHouse: false, typical: "Extra cost" },
          { criterion: "Design system & component library", inApps: true, inHouse: false, typical: "Rarely" },
          { criterion: "Usability testing", inApps: true, inHouse: false, typical: false },
          { criterion: "Developer-ready Figma specs", inApps: true, inHouse: false, typical: "Sometimes" },
          { criterion: "Design QA during implementation", inApps: true, inHouse: false, typical: false },
        ],
      },
      faq: {
        enabled: true,
        items: [
          { label: "Tool", question: "Which design tool do you use?", answer: "Figma. It's the industry standard, enables real-time collaboration, and produces the most developer-friendly handoff files." },
          { label: "Research", question: "Do we need user research if we already know our users?", answer: "Almost always yes. What users say and what they do are different. Research surfaces assumptions you didn't know you were making." },
          { label: "Design System", question: "How long does a design system take?", answer: "A foundational design system (colors, typography, spacing, core components) takes 3–4 weeks. A comprehensive enterprise design system takes 8–12 weeks." },
          { label: "Handoff", question: "How do you ensure developers implement designs accurately?", answer: "We annotate Figma files with specs, export assets at all required resolutions, document interaction states, and run a design QA pass after implementation." },
          { label: "Iteration", question: "What if we want changes after designs are approved?", answer: "Small refinements are included throughout. Significant scope changes are handled via a change request. We prefer iterating based on real user feedback after launch." },
        ],
      },
    },
  },
  {
    slug: "system-integration",
    name: "System Integration",
    category: "Engineering",
    categoryIcon: "🔗",
    heroTagline: "Connect APIs, ERPs, and data sources seamlessly",
    heroDescription: "Connect your systems, APIs, ERPs, and data sources into one cohesive platform.",
    heroIllo: "/services/system-integration.svg",
    sections: {
      buyerProblems: {
        enabled: true,
        heading: "Why Disconnected Systems\nCost More Than You Think",
        subtitle: "Every manual data transfer between systems is a tax on your team's time, accuracy, and sanity.",
        problems: [
          { title: "Teams re-entering the same data across multiple systems every day", description: "" },
          { title: "Reports that require manual exports and stitching from 5 different tools", description: "" },
          { title: "No single source of truth — every system has a slightly different version", description: "" },
          { title: "Point-to-point integrations built years ago that nobody understands anymore", description: "" },
          { title: "New tools blocked from adoption because integration costs are too high", description: "" },
          { title: "Errors from manual transfers causing compliance, billing, or fulfillment issues", description: "" },
        ],
      },
      serviceOverview: {
        enabled: true,
        image: "/Media/Image/case 6.png",
        title: "What is System Integration at InApps?",
        body: "We design and build integrations that connect your business systems — CRM, ERP, e-commerce, payment processors, data warehouses, and custom internal tools — into a cohesive, reliable data ecosystem. Whether it's a simple webhook, a complex bidirectional sync, or a full middleware layer, we engineer integrations that hold up under production load.\n\nWe also audit and replace fragile legacy integrations with robust, monitored solutions that your team can actually maintain.",
        stats: [
          { value: "100+", label: "Integrations built" },
          { value: "99.5%", label: "Avg. sync reliability" },
          { value: "70%", label: "Avg. manual work eliminated" },
        ],
      },
      isRightForYou: {
        enabled: true,
        checklist: [
          "Your team manually transfers data between systems on a daily or weekly basis",
          "You have a new tool to adopt but it's blocked by integration complexity",
          "Your current integrations are fragile, undocumented, or break regularly",
        ],
      },
      whatYouGet: {
        enabled: true,
        items: [
          { icon: "🗺️", title: "Integration Architecture", description: "Design of the integration topology — event-driven, ETL, API gateway, or middleware — for your needs." },
          { icon: "🔗", title: "API Development", description: "Custom APIs, webhooks, and connectors built to production standards with auth and rate limiting." },
          { icon: "🔄", title: "Data Sync & ETL", description: "Bidirectional sync and ETL pipelines with conflict resolution, deduplication, and error handling." },
          { icon: "📊", title: "Data Mapping", description: "Schema mapping and transformation logic between systems with different data models." },
          { icon: "👁️", title: "Monitoring & Alerting", description: "Real-time visibility into sync status, error rates, and data volume — with immediate alerting on failures." },
          { icon: "📋", title: "Documentation", description: "Full technical documentation of every integration so your team can maintain and extend it." },
        ],
      },
      process: {
        enabled: true,
        steps: [
          { phase: "Audit & Design", duration: "Week 1", description: "", includes: ["System inventory", "Data flow mapping", "Architecture design", "Risk assessment"] },
          { phase: "Development", duration: "Week 2–6", description: "", includes: ["Connector build", "Data mapping", "Error handling", "Unit testing"] },
          { phase: "Testing & Validation", duration: "Week 5–7", description: "", includes: ["Integration testing", "Data validation", "Load testing", "UAT"] },
          { phase: "Go-live & Monitor", duration: "Ongoing", description: "", includes: ["Production cutover", "Monitoring setup", "Team training", "Ongoing support"] },
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
        note: "Simple point-to-point integrations run with 1–2 engineers. Complex multi-system middleware layers require 3–5 specialists.",
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
          { client: "Retail Group", industry: "Retail", title: "ERP–e-commerce sync — zero manual orders", description: "Integrated Shopify with SAP ERP for real-time inventory, order, and customer data sync, eliminating 40 hours/week of manual data entry.", link: "/case-study", stats: [{ value: "40h/wk", label: "Manual work eliminated" }, { value: "99.8%", label: "Sync accuracy" }] },
          { client: "Healthcare Network", industry: "Healthcare", title: "EHR integration — patient data unified across 5 systems", description: "Built an HL7 FHIR integration layer connecting 5 separate EHR and billing systems, creating a single patient record view.", link: "/case-study", stats: [{ value: "5", label: "Systems unified" }, { value: "60%", label: "Admin time saved" }] },
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
        items: [
          { label: "Approach", question: "When should I use custom integration vs. an iPaaS tool like Zapier?", answer: "Zapier and Make are great for simple, low-volume automations. When you need complex transformation logic, high data volume, custom auth, or production-grade reliability, custom integration is the right call." },
          { label: "Legacy Systems", question: "Can you integrate with legacy systems that don't have a modern API?", answer: "Yes. We've integrated with systems that only have SOAP APIs, database-level access, SFTP file drops, and even screen-scraping when nothing else is available." },
          { label: "Timeline", question: "How long does an integration project take?", answer: "Simple webhook or API integration: 2–3 weeks. Complex bidirectional ERP sync: 6–10 weeks. Multi-system middleware layer: 10–16 weeks." },
          { label: "Reliability", question: "What happens when an integration fails?", answer: "We build retry logic, dead letter queues, and alerting into every integration. You get notified immediately and data is never silently lost." },
          { label: "Maintenance", question: "What if the connected system's API changes?", answer: "We document all integration dependencies and monitor for breaking changes. API versioning strategy is part of every integration we build." },
        ],
      },
    },
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
          { title: "Paying for features you don't need while missing the ones you do", description: "" },
          { title: "Workarounds and manual steps because the software doesn't fit your process", description: "" },
          { title: "Data locked in silos because systems weren't built to work together", description: "" },
          { title: "Scaling blocked by software limits, seat pricing, or vendor lock-in", description: "" },
          { title: "Security risks from sharing sensitive data with third-party SaaS platforms", description: "" },
          { title: "Growing technical debt from patching together tools that were never meant to connect", description: "" },
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
            title: "Custom loan management platform — 3× faster processing",
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
            title: "Workforce management portal — 60% less admin overhead",
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
            title: "Claims management system — 50% reduction in resolution time",
            description: "We delivered a fully custom claims intake and case management system with automated routing, document handling, and compliance reporting — replacing a decade-old legacy platform.",
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