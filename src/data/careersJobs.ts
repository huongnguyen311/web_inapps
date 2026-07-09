export type CareerJob = {
  title: string;
  department: string;
  level: string;
  location: string;
  mode: string;
  type: string;
  salary: string;
  desc: string;
  skills: string[];
};

export const JOBS: CareerJob[] = [
  {
    title: "Technical Project Manager",
    department: "Operations",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,800\u2013$4,500/mo",
    desc: "Managing 3\u20135 concurrent ODC engagements across AU/UK/SG clients. English-first communication, daily client standups, sprint planning, escalation management. PMP or SAFe a plus. You will be the primary day-to-day relationship manager for enterprise clients.",
    skills: ["Jira", "Linear", "Confluence", "Agile/Scrum", "Risk Management", "Client Reporting"],
  },
  {
    title: "Solution Architect",
    department: "Engineering",
    level: "Lead / Principal",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$4,500\u2013$7,000/mo",
    desc: "Client-facing pre-sales and delivery architecture role. Lead technical discovery calls, produce architecture proposals, and oversee complex multi-service ODC builds across multiple clients. This is a high-visibility role with direct exposure to C-suite stakeholders at US, EU, and AU clients.",
    skills: ["AWS", "System Design", "TypeScript", "Node.js", "PostgreSQL", "Kafka"],
  },
  {
    title: "AI / ML Engineer",
    department: "AI & Machine Learning",
    level: "Mid-Level",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,800\u2013$4,500/mo",
    desc: "AI team building RAG-powered enterprise knowledge agents and agentic workflows for clients in healthcare, legal, and fintech. LLM orchestration, vector search, and production ML deployment. You will work on real-world AI products used by enterprise clients across US and EU markets.",
    skills: ["Python", "LangChain", "LangGraph", "FastAPI", "OpenAI", "Pinecone"],
  },
  {
    title: "Senior DevOps / Cloud Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,500\u2013$4,500/mo",
    desc: "Platform engineer for a multi-client infrastructure pod supporting 8+ active ODC engagements. Building shared CI/CD platform, GitOps workflows, and cost optimisation tooling. You will own the infrastructure layer across multiple AWS accounts and have high autonomy.",
    skills: ["AWS", "Kubernetes", "Terraform", "ArgoCD", "GitHub Actions", "Datadog"],
  },
  {
    title: "Senior QA Automation Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,000\u2013$3,500/mo",
    desc: "QA lead for a German gaming client, building automated regression suites that run 5,000+ scenarios per nightly build. Performance testing with k6 for live multiplayer APIs. You will design the full test strategy and mentor 2 junior QA engineers.",
    skills: ["Playwright", "TypeScript", "Cypress", "Jest", "k6", "GitHub Actions"],
  },
  {
    title: "Lead Node.js Backend Engineer",
    department: "Engineering",
    level: "Lead / Principal",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$3,500\u2013$5,500/mo",
    desc: "Technical lead for a US logistics startup ODC. Microservices architecture, event-driven design, real-time fleet tracking APIs. Own architecture decisions and mentor 3 mid-senior engineers. You will be the primary technical point of contact for the client CTO.",
    skills: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Docker"],
  },
  {
    title: "Senior React Native Developer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,500\u2013$4,200/mo",
    desc: "Embedded in an Australian fintech ODC team building a cross-platform mobile banking app. 60fps UI standards, Detox E2E automation. You will work on the consumer-facing banking app used by 500K+ Australians, with direct access to the client product team in AU business hours.",
    skills: ["React Native", "TypeScript", "Expo", "Redux Toolkit", "Detox", "Firebase"],
  },
  {
    title: "Senior React Engineer",
    department: "Engineering",
    level: "Senior",
    location: "Ho Chi Minh City",
    mode: "Hybrid",
    type: "Full-time",
    salary: "$2,500\u2013$4,000/mo",
    desc: "Working with a UK SaaS client on a B2B analytics dashboard: React 18 + Next.js 15, TypeScript-strict, component-driven design system. You will own multiple feature squads, contribute to architecture decisions, and work directly with the client engineering team in UK business hours overlap.",
    skills: ["React 18+", "TypeScript", "Next.js", "GraphQL", "Jest", "Storybook"],
  },
];
