export type SolutionAccelerator = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: string;
  categoryColor: string;
  image: string;
  heroImage: string;
  timeSaved: string;
  techCount: string;
  clientsUsing: string;
  overview: string;
  problemStatement: string;
  features: { icon: string; title: string; description: string }[];
  techCategories: { label: string; items: string[] }[];
  outcomes: { metric: string; label: string; description: string }[];
  featured?: boolean;
};

export const solutionAccelerators: SolutionAccelerator[] = [
  {
    slug: "ai-document-intelligence",
    name: "AI Document Intelligence Engine",
    tagline: "From raw documents to structured data in minutes, not months.",
    shortDescription:
      "A pre-built AI pipeline that ingests PDFs, invoices, contracts, and forms — then extracts, classifies, and routes structured data to any downstream system.",
    category: "AI & Automation",
    categoryColor: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=1600&q=80",
    timeSaved: "12 weeks",
    techCount: "18",
    clientsUsing: "14",
    overview:
      "The AI Document Intelligence Engine is a battle-tested accelerator built on transformer-based OCR, named-entity recognition, and LLM-powered validation. It handles the full lifecycle — document intake, classification, extraction, confidence scoring, and human-in-the-loop review — so your team ships in weeks instead of quarters.",
    problemStatement:
      "Enterprises spend 40–60% of operational bandwidth manually processing documents. Handcrafted OCR pipelines break on layout variation; generic SaaS tools can't be fine-tuned to industry schemas. InApps built this accelerator after solving the same problem for banks, insurers, and logistics companies — distilled into a drop-in module you own entirely.",
    features: [
      { icon: "brain", title: "Multi-Modal Ingestion", description: "Accepts scanned PDFs, native PDFs, images, Word docs, and emails. Auto-detects document type on arrival." },
      { icon: "layers", title: "Schema-Driven Extraction", description: "Define your target schema once. The engine aligns extracted fields to it, with confidence scores per field." },
      { icon: "shield", title: "Human-in-the-Loop Review", description: "Low-confidence extractions surface in a lightweight reviewer UI. One-click approval or correction." },
      { icon: "zap", title: "Real-Time Processing", description: "Processes 500+ documents per minute at peak load with horizontal scaling via Kubernetes." },
      { icon: "git-branch", title: "Routing Engine", description: "Conditional routing rules send approved data to ERP, CRM, SFTP, webhooks, or message queues." },
      { icon: "bar-chart", title: "Analytics Dashboard", description: "Track throughput, error rates, extraction accuracy, and reviewer workload in real time." },
    ],
    techCategories: [
      { label: "AI / ML", items: ["GPT-4o", "PaddleOCR", "Hugging Face", "LangChain", "FAISS"] },
      { label: "Backend", items: ["FastAPI", "Celery", "Redis", "PostgreSQL", "S3"] },
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { label: "Infrastructure", items: ["Kubernetes", "Docker", "AWS", "Terraform"] },
    ],
    outcomes: [
      { metric: "85%", label: "Reduction in manual processing", description: "Across 14 client deployments" },
      { metric: "12 wk", label: "Average time to production", description: "vs. 9–12 months from scratch" },
      { metric: "99.2%", label: "Extraction accuracy", description: "On structured invoice templates" },
      { metric: "500+", label: "Documents/minute", description: "Peak throughput under load" },
    ],
    featured: true,
  },
  {
    slug: "healthcare-patient-portal",
    name: "Healthcare Patient Portal",
    tagline: "HIPAA-compliant patient portal, ready to brand and deploy.",
    shortDescription:
      "A full-stack patient portal with appointment scheduling, teleconsultation, lab results, HL7 FHIR integration, and role-based access — designed for compliance from day one.",
    category: "Healthcare",
    categoryColor: "#14b8a6",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    timeSaved: "16 weeks",
    techCount: "22",
    clientsUsing: "8",
    overview:
      "Built atop the HL7 FHIR R4 standard with HIPAA-compliant data handling baked in, this portal accelerator gives healthcare providers a production-ready foundation: patient registration, appointment booking, teleconsultation via WebRTC, lab result delivery, prescription management, and EHR sync — all white-labeled and extensible.",
    problemStatement:
      "Healthcare software projects fail 70% of the time due to compliance overhead and EHR integration complexity. Most teams spend the first 6 months navigating HIPAA controls and FHIR mapping before writing a single line of business logic. This accelerator collapses that ramp to weeks.",
    features: [
      { icon: "user", title: "Patient Registration & Auth", description: "MFA-enabled registration with ID verification hooks. Role-based access for patients, doctors, and admins." },
      { icon: "calendar", title: "Appointment Scheduling", description: "Smart booking engine with provider availability, specialty routing, and automated reminders via SMS/email." },
      { icon: "video", title: "WebRTC Teleconsultation", description: "End-to-end encrypted video calls, screen sharing, and in-session notes — no third-party dependency." },
      { icon: "file-text", title: "Lab Results & Records", description: "Structured delivery of lab results with FHIR Observation resources, trend charts, and doctor annotations." },
      { icon: "link", title: "HL7 FHIR Integration", description: "Pre-built adapters for Epic, Cerner, and Meditech. Bi-directional FHIR R4 sync out of the box." },
      { icon: "lock", title: "HIPAA Compliance Layer", description: "Audit logging, PHI encryption at rest and in transit, consent management, and breach notification hooks." },
    ],
    techCategories: [
      { label: "Standards", items: ["HL7 FHIR R4", "SMART on FHIR", "HIPAA"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "HAPI FHIR Server"] },
      { label: "Frontend", items: ["React", "React Native", "TypeScript"] },
      { label: "Infrastructure", items: ["AWS HIPAA-eligible", "Docker", "Terraform"] },
    ],
    outcomes: [
      { metric: "16 wk", label: "Time to first production patient", description: "vs. 12–18 months from scratch" },
      { metric: "100K+", label: "Consultations on first deployment", description: "DR.NEE Healthcare, Year 1" },
      { metric: "0", label: "HIPAA compliance violations", description: "Across all deployments" },
      { metric: "4.8★", label: "Patient app store rating", description: "Average across 3 client deployments" },
    ],
    featured: true,
  },
  {
    slug: "fintech-kyc-aml-suite",
    name: "Fintech KYC/AML Compliance Suite",
    tagline: "Identity verification and transaction monitoring — pre-integrated.",
    shortDescription:
      "A modular compliance accelerator covering KYC document verification, liveness detection, AML transaction screening, risk scoring, and regulatory reporting for fintechs and banks.",
    category: "Fintech",
    categoryColor: "#3b82f6",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
    timeSaved: "20 weeks",
    techCount: "16",
    clientsUsing: "6",
    overview:
      "Regulatory compliance is the #1 cause of fintech project delays. This accelerator ships with a complete KYC pipeline (document scan → OCR → liveness check → sanctions screening) and an AML engine (transaction graph analysis, typology rules, SAR generation) — integrated with the most common banking-grade data sources out of the box.",
    problemStatement:
      "Building KYC/AML from scratch requires partnerships with 4–6 vendors, legal review across jurisdictions, and 12+ months of integration work. Fintechs routinely spend $1M+ before serving their first customer. This accelerator provides a single codebase you own, extensible to any jurisdiction.",
    features: [
      { icon: "user-check", title: "Document KYC", description: "Passport, ID card, and driving licence verification with AI-powered authenticity checks and data extraction." },
      { icon: "eye", title: "Liveness Detection", description: "Passive and active liveness with anti-spoofing. ISO 30107-3 Level 2 compliant." },
      { icon: "activity", title: "AML Transaction Screening", description: "Real-time screening against OFAC, UN, EU, and PEP lists with configurable risk thresholds." },
      { icon: "trending-up", title: "Risk Scoring Engine", description: "Composite risk scores from 40+ signals. Fully explainable — every decision is traceable to its inputs." },
      { icon: "file", title: "SAR & Regulatory Reporting", description: "Auto-generated Suspicious Activity Reports in FinCEN, FINTRAC, and FCA formats." },
      { icon: "settings", title: "Case Management", description: "Analyst workspace for reviewing flagged entities, adding notes, escalating, and closing cases with audit trail." },
    ],
    techCategories: [
      { label: "Compliance Data", items: ["Dow Jones Risk & Compliance", "LexisNexis", "ComplyAdvantage"] },
      { label: "AI / ML", items: ["Custom CV models", "Graph Neural Networks", "XGBoost"] },
      { label: "Backend", items: ["Python", "FastAPI", "Neo4j", "PostgreSQL", "Kafka"] },
      { label: "Infrastructure", items: ["AWS GovCloud", "Docker", "Kubernetes"] },
    ],
    outcomes: [
      { metric: "20 wk", label: "Time to regulatory go-live", description: "vs. 18 months from scratch" },
      { metric: "2d→4h", label: "Loan approval time", description: "Techcombank Digital deployment" },
      { metric: "99.6%", label: "True-positive AML accuracy", description: "Validated on SWIFT dataset" },
      { metric: "$1M+", label: "Saved in vendor licensing/yr", description: "Per deployment" },
    ],
    featured: false,
  },
  {
    slug: "headless-commerce-platform",
    name: "Headless Commerce Platform",
    tagline: "Omnichannel commerce infrastructure, production-ready.",
    shortDescription:
      "A composable, API-first commerce accelerator with product catalog, cart, checkout, payments, inventory, and order management — built for multi-brand and multi-channel deployments.",
    category: "E-Commerce",
    categoryColor: "#a855f7",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
    timeSaved: "14 weeks",
    techCount: "20",
    clientsUsing: "11",
    overview:
      "This headless accelerator ships every commerce domain as an independent microservice: catalog, pricing, cart, checkout, payments, fulfilment, and notifications — each independently scalable, all sharing a unified GraphQL API gateway. Own every line of code, scale every bottleneck independently.",
    problemStatement:
      "Off-the-shelf platforms impose architectural ceilings that surface at $10M+ GMV: plugin lock-in, inflexible checkout, inability to handle multi-warehouse inventory or multi-currency pricing natively. Custom builds take 12–18 months. This accelerator gets you to production in 14 weeks, fully owning the code.",
    features: [
      { icon: "package", title: "Product Catalog Service", description: "Hierarchical categories, variants, bundles, dynamic pricing rules, and multi-language support." },
      { icon: "shopping-cart", title: "Cart & Checkout Engine", description: "Persistent cart, guest checkout, promo code engine, and A/B-testable checkout flows." },
      { icon: "credit-card", title: "Payment Orchestration", description: "Pre-integrated with Stripe, PayPal, VNPAY, MoMo, and bank transfer — with fallback routing." },
      { icon: "map-pin", title: "Multi-Warehouse Inventory", description: "Real-time stock sync across warehouses, fulfilment centers, and dropship suppliers." },
      { icon: "truck", title: "Order Management System", description: "Order splitting, partial fulfilment, returns and refunds, and carrier integration." },
      { icon: "bell", title: "Notification Hub", description: "Transactional emails, SMS, and push via configurable templates — triggered by order lifecycle events." },
    ],
    techCategories: [
      { label: "API", items: ["GraphQL", "REST", "gRPC", "WebSocket"] },
      { label: "Backend", items: ["Node.js", "Go", "PostgreSQL", "Redis", "Elasticsearch"] },
      { label: "Frontend", items: ["Next.js", "React Native", "TypeScript"] },
      { label: "Infrastructure", items: ["Kubernetes", "AWS", "CDN", "Terraform"] },
    ],
    outcomes: [
      { metric: "+22%", label: "Conversion rate uplift", description: "FashionGroup SEA deployment" },
      { metric: "+280%", label: "Order volume increase", description: "PharmaGo e-commerce launch" },
      { metric: "14 wk", label: "Time to first transaction", description: "Average across 11 deployments" },
      { metric: "99.99%", label: "Uptime SLA", description: "At peak Black Friday load" },
    ],
    featured: true,
  },
  {
    slug: "supply-chain-visibility",
    name: "Supply Chain Visibility Platform",
    tagline: "End-to-end supply chain transparency, from PO to proof of delivery.",
    shortDescription:
      "A real-time supply chain visibility platform with IoT sensor integration, predictive ETD, exception management, and supplier collaboration — reducing stockouts and expediting costs.",
    category: "Logistics",
    categoryColor: "#eab308",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
    timeSaved: "18 weeks",
    techCount: "19",
    clientsUsing: "7",
    overview:
      "This accelerator provides a unified visibility layer across your supplier network — ingesting EDI, IoT, carrier APIs, and ERP events into a single operational picture with predictive alerting before exceptions become crises. It sits in front of your existing stack without a rip-and-replace.",
    problemStatement:
      "Most visibility initiatives fail because they try to replace ERP systems. This accelerator normalises events from 200+ carrier APIs, EDI suppliers, and IoT devices into a single timeline — complementing your existing stack rather than competing with it.",
    features: [
      { icon: "map", title: "Live Shipment Tracking", description: "Real-time geolocation for air, sea, and road shipments. Unified map view across all carriers." },
      { icon: "alert-triangle", title: "Predictive Exception Management", description: "ML models flag delays 48–72 hours before they become customer-visible. Automated escalation rules." },
      { icon: "cpu", title: "IoT Sensor Integration", description: "Temperature, humidity, shock, and tamper sensors via MQTT. Condition-breach alerts in real time." },
      { icon: "users", title: "Supplier Collaboration Portal", description: "Suppliers update PO status, share ASNs, and respond to exceptions — without email threads." },
      { icon: "database", title: "ERP & EDI Integration", description: "Pre-built connectors for SAP, Oracle NetSuite, EDI X12/EDIFACT, and custom REST APIs." },
      { icon: "pie-chart", title: "Analytics & KPI Dashboard", description: "OTIF, lead time variance, supplier scorecards, and carbon footprint reporting." },
    ],
    techCategories: [
      { label: "IoT / Streaming", items: ["MQTT", "Apache Kafka", "AWS IoT Core"] },
      { label: "Backend", items: ["Python", "FastAPI", "TimescaleDB", "Neo4j", "Redis"] },
      { label: "Frontend", items: ["React", "Mapbox GL", "TypeScript"] },
      { label: "Integrations", items: ["SAP", "Oracle", "EDI X12", "FedEx API", "DHL API"] },
    ],
    outcomes: [
      { metric: "35%", label: "Fewer stockout incidents", description: "LogiFlow Asia, Q1 post-launch" },
      { metric: "48h", label: "Earlier exception visibility", description: "Before customer-visible delays" },
      { metric: "18 wk", label: "Time to live supply chain view", description: "Including ERP integration" },
      { metric: "200+", label: "Carrier APIs supported", description: "Out of the box" },
    ],
    featured: false,
  },
  {
    slug: "multi-tenant-saas-boilerplate",
    name: "Multi-Tenant SaaS Boilerplate",
    tagline: "Ship your SaaS foundation in weeks, not quarters.",
    shortDescription:
      "A production-grade SaaS starter with multi-tenancy, subscription billing, team management, SSO, feature flags, audit logs, and a full admin console — everything except your core product logic.",
    category: "SaaS",
    categoryColor: "#6366f1",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    timeSaved: "10 weeks",
    techCount: "24",
    clientsUsing: "19",
    overview:
      "Every SaaS product needs the same scaffolding: authentication, multi-tenancy, billing, permissions, audit logs, notifications, and an admin console. Building this correctly takes 6+ months and produces zero customer value. This accelerator solves it once so your team builds differentiated product from day one.",
    problemStatement:
      "Founders repeatedly rebuild the same plumbing across every SaaS product they start. Each rebuild introduces subtle bugs: RBAC gaps, webhook retry failures, tenant data leakage. This accelerator encodes 5 years of production SaaS lessons into a codebase your team inherits and owns.",
    features: [
      { icon: "shield", title: "Multi-Tenancy Engine", description: "Row-level security with schema-per-tenant or shared-schema options. Zero cross-tenant data leakage." },
      { icon: "credit-card", title: "Subscription Billing", description: "Stripe-integrated metered, seat-based, and flat billing. Upgrade/downgrade, proration, and failed payment recovery." },
      { icon: "users", title: "Team & RBAC", description: "Invite-based team management with custom roles, granular permission scopes, and audit-logged access." },
      { icon: "key", title: "SSO & Social Auth", description: "SAML 2.0, OIDC, Google, GitHub, and Microsoft OAuth out of the box. Enterprise SSO in hours." },
      { icon: "toggle-right", title: "Feature Flags", description: "Per-tenant, per-user, and percentage-rollout flags. Tied to subscription tier automatically." },
      { icon: "terminal", title: "Admin Console", description: "Internal tooling for tenant management, impersonation, billing overrides, and operational dashboards." },
    ],
    techCategories: [
      { label: "Auth", items: ["NextAuth.js", "SAML", "OIDC", "JWT"] },
      { label: "Backend", items: ["Next.js API Routes", "Prisma", "PostgreSQL", "Redis"] },
      { label: "Billing", items: ["Stripe", "Stripe Webhooks", "Customer Portal"] },
      { label: "Infrastructure", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] },
    ],
    outcomes: [
      { metric: "10 wk", label: "Time to first paying customer", description: "Average across 19 deployments" },
      { metric: "3×", label: "Faster feature delivery", description: "SaaSCore GmbH post-launch" },
      { metric: "0", label: "Tenant data leakage incidents", description: "Across all production deployments" },
      { metric: "19", label: "SaaS products shipped", description: "Using this accelerator" },
    ],
    featured: false,
  },
];
