"use client";

import { useState } from "react";

const tabs = [
  "AI Technologies",
  "Back-end",
  "Front-end",
  "App Development",
  "Cloud Computing",
  "DevOps",
] as const;

type Tab = (typeof tabs)[number];

interface Tech {
  name: string;
  logo: string; // SVG path or URL
}

// SVG logo components rendered inline - real logos replaced with branded SVG placeholders
function LogoSVG({ name }: { name: string }) {
  const initials = name
    .split(/[\s/.]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div
      style={{
        width: 115,
        height: 64,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontWeight: 800,
          color: "#0f172a",
          letterSpacing: -0.5,
          lineHeight: 1,
        }}
      >
        {initials}
      </span>
      <span
        style={{
          fontSize: 9,
          fontWeight: 600,
          color: "#64748b",
          textAlign: "center",
          letterSpacing: 0.3,
          maxWidth: 100,
          lineHeight: 1.2,
        }}
      >
        {name}
      </span>
    </div>
  );
}

const techData: Record<Tab, string[]> = {
  "AI Technologies": [
    "Scikit Learn", "XGBoost", "Python", "CatBoost", "PyTorch",
    "TensorFlow", "spaCy", "Apache Airflow", "Apache Spark", "Kubeflow",
    "MLflow", "YOLO", "LightGBM", "ONNX", "NLTK", "Keras", "LLaMA", "OpenCV",
  ],
  "Back-end": [
    ".NET", "Java", "Python", "Node.js", "RabbitMQ", "Ruby on Rails", "Kafka",
  ],
  "Front-end": ["Angular", "React.js", "TypeScript"],
  "App Development": ["iOS", "Android", "React Native", "Flutter", "Xamarin"],
  "Cloud Computing": ["AWS", "Google Cloud", "Azure"],
  "DevOps": [
    "GitOps", "Nexus", "AWS CloudFormation", "Docker",
    "Terraform", "Kubernetes", "Argo", "Jenkins",
  ],
};

const INITIAL_SHOW = 10;

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<Tab>("AI Technologies");
  const [expanded, setExpanded] = useState(false);

  const allTechs = techData[activeTab];
  const showExpander = allTechs.length > INITIAL_SHOW;
  const visibleTechs = expanded || !showExpander ? allTechs : allTechs.slice(0, INITIAL_SHOW);

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    setExpanded(false);
  }

  return (
    <section className="bg-[#0f172a] py-[48px] md:py-[80px] px-[16px] md:px-[80px] w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px]">

        {/* Heading */}
        <div className="flex flex-col gap-[12px]">
          <h2
            className="font-black text-white text-[28px] leading-[36px] md:text-[40px] md:leading-[48px] tracking-[-1px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our{" "}
            <span className="text-[#ff4929]">Technologies and Platforms</span>
          </h2>
          <p
            className="text-[#94a3b8] text-[18px] leading-[28px] max-w-[600px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We leverage the most advanced and reliable technologies to build
            scalable digital solutions that drive business growth.
          </p>
        </div>

        {/* Tabs - pill-shaped on dark background */}
        <div className="flex gap-[8px] flex-wrap">
          {tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`h-[36px] px-[16px] rounded-[36px] text-[14px] font-bold transition-colors border ${
                  active
                    ? "bg-white text-[#0f172a] border-white"
                    : "bg-transparent text-white border-white/30 hover:border-white/60"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Logo grid */}
        <div className="flex flex-wrap gap-[8px]">
          {visibleTechs.map((name) => (
            <div
              key={name}
              className="bg-white border border-[#292524] rounded-[8px] flex items-center justify-center"
              style={{ padding: "32px 18px", minWidth: 120 }}
            >
              <LogoSVG name={name} />
            </div>
          ))}
        </div>

        {/* Expand / collapse */}
        {showExpander && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-[8px] text-white text-[14px] font-semibold self-center mt-[-16px] hover:text-[#ff4929] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>{expanded ? "Show less" : `Show ${allTechs.length - INITIAL_SHOW} more`}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}