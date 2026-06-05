export interface IndustryFaqItem {
  label: string;
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  category: string;
  faqItems: IndustryFaqItem[];
}

export const industries: IndustryData[] = [
  {
    slug: "fintech",
    name: "Fintech",
    category: "Financial Services",
    faqItems: [
      {
        label: "Industry Focus",
        question: "Which industries do you specialize in?",
        answer:
          "We have deep expertise in Fintech, Healthcare, Logistics, and E-commerce. Each practice area is staffed with domain specialists who understand regulatory requirements, industry-specific architecture patterns, and the competitive landscape   so your team isn't educating ours from scratch.",
      },
      {
        label: "Compliance",
        question: "How do you handle industry-specific compliance requirements?",
        answer:
          "Compliance is built into our delivery process, not bolted on at the end. For Fintech we work within PCI-DSS and GDPR frameworks; Healthcare engagements are designed around HIPAA and HL7 from day one. Our compliance architects review every milestone before code ships to production.",
      },
      {
        label: "Scale",
        question: "Can you scale solutions from startup to enterprise level?",
        answer:
          "Yes   we've taken products from zero to 50,000+ monthly active users and from MVP to enterprise-grade platforms serving multiple markets. Our architecture decisions account for 10× growth so you don't pay for a rewrite eighteen months in.",
      },
      {
        label: "Results",
        question: "How do you measure and report on business outcomes?",
        answer:
          "We agree on KPIs before the first sprint   conversion rates, latency targets, cost-per-transaction, or whatever metric drives value for your business. Monthly reports track progress against those baselines, and post-launch retros document what moved the needle and why.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    category: "Digital Health",
    faqItems: [
      {
        label: "Industry Focus",
        question: "Which industries do you specialize in?",
        answer:
          "We have deep expertise in Fintech, Healthcare, Logistics, and E-commerce. Each practice area is staffed with domain specialists who understand regulatory requirements, industry-specific architecture patterns, and the competitive landscape   so your team isn't educating ours from scratch.",
      },
      {
        label: "Compliance",
        question: "How do you handle industry-specific compliance requirements?",
        answer:
          "Compliance is built into our delivery process, not bolted on at the end. For Fintech we work within PCI-DSS and GDPR frameworks; Healthcare engagements are designed around HIPAA and HL7 from day one. Our compliance architects review every milestone before code ships to production.",
      },
      {
        label: "Scale",
        question: "Can you scale solutions from startup to enterprise level?",
        answer:
          "Yes   we've taken products from zero to 50,000+ monthly active users and from MVP to enterprise-grade platforms serving multiple markets. Our architecture decisions account for 10× growth so you don't pay for a rewrite eighteen months in.",
      },
      {
        label: "Results",
        question: "How do you measure and report on business outcomes?",
        answer:
          "We agree on KPIs before the first sprint   conversion rates, latency targets, cost-per-transaction, or whatever metric drives value for your business. Monthly reports track progress against those baselines, and post-launch retros document what moved the needle and why.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    category: "Supply Chain",
    faqItems: [
      {
        label: "Industry Focus",
        question: "Which industries do you specialize in?",
        answer:
          "We have deep expertise in Fintech, Healthcare, Logistics, and E-commerce. Each practice area is staffed with domain specialists who understand regulatory requirements, industry-specific architecture patterns, and the competitive landscape   so your team isn't educating ours from scratch.",
      },
      {
        label: "Compliance",
        question: "How do you handle industry-specific compliance requirements?",
        answer:
          "Compliance is built into our delivery process, not bolted on at the end. For Fintech we work within PCI-DSS and GDPR frameworks; Healthcare engagements are designed around HIPAA and HL7 from day one. Our compliance architects review every milestone before code ships to production.",
      },
      {
        label: "Scale",
        question: "Can you scale solutions from startup to enterprise level?",
        answer:
          "Yes   we've taken products from zero to 50,000+ monthly active users and from MVP to enterprise-grade platforms serving multiple markets. Our architecture decisions account for 10× growth so you don't pay for a rewrite eighteen months in.",
      },
      {
        label: "Results",
        question: "How do you measure and report on business outcomes?",
        answer:
          "We agree on KPIs before the first sprint   conversion rates, latency targets, cost-per-transaction, or whatever metric drives value for your business. Monthly reports track progress against those baselines, and post-launch retros document what moved the needle and why.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    category: "Retail Tech",
    faqItems: [
      {
        label: "Industry Focus",
        question: "Which industries do you specialize in?",
        answer:
          "We have deep expertise in Fintech, Healthcare, Logistics, and E-commerce. Each practice area is staffed with domain specialists who understand regulatory requirements, industry-specific architecture patterns, and the competitive landscape   so your team isn't educating ours from scratch.",
      },
      {
        label: "Compliance",
        question: "How do you handle industry-specific compliance requirements?",
        answer:
          "Compliance is built into our delivery process, not bolted on at the end. For Fintech we work within PCI-DSS and GDPR frameworks; Healthcare engagements are designed around HIPAA and HL7 from day one. Our compliance architects review every milestone before code ships to production.",
      },
      {
        label: "Scale",
        question: "Can you scale solutions from startup to enterprise level?",
        answer:
          "Yes   we've taken products from zero to 50,000+ monthly active users and from MVP to enterprise-grade platforms serving multiple markets. Our architecture decisions account for 10× growth so you don't pay for a rewrite eighteen months in.",
      },
      {
        label: "Results",
        question: "How do you measure and report on business outcomes?",
        answer:
          "We agree on KPIs before the first sprint   conversion rates, latency targets, cost-per-transaction, or whatever metric drives value for your business. Monthly reports track progress against those baselines, and post-launch retros document what moved the needle and why.",
      },
    ],
  },
];