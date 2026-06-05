import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Tech {
  name: string;
  slug?: string;
}

interface Category {
  label: string;
  techs: Tech[];
}

const CATEGORIES: Category[] = [
  {
    label: "AI Technologies",
    techs: [
      { name: "Scikit Learn", slug: "scikitlearn" },
      { name: "XGBoost" },
      { name: "Python", slug: "python" },
      { name: "CatBoost" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "spaCy", slug: "spacy" },
      { name: "Apache Airflow", slug: "apacheairflow" },
      { name: "Apache Spark", slug: "apachespark" },
      { name: "Kubeflow" },
      { name: "MLflow", slug: "mlflow" },
      { name: "YOLO" },
      { name: "LightGBM" },
      { name: "ONNX", slug: "onnx" },
      { name: "NLTK" },
      { name: "Keras", slug: "keras" },
      { name: "LLaMA" },
      { name: "OpenCV", slug: "opencv" },
    ],
  },
  {
    label: "Back-end Technologies",
    techs: [
      { name: ".NET", slug: "dotnet" },
      { name: "Java", slug: "java" },
      { name: "Python", slug: "python" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "RabbitMQ", slug: "rabbitmq" },
      { name: "Ruby on Rails", slug: "rubyonrails" },
      { name: "Kafka", slug: "apachekafka" },
    ],
  },
  {
    label: "Front-end Technologies",
    techs: [
      { name: "Angular", slug: "angular" },
      { name: "React.js", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    label: "App Development",
    techs: [
      { name: "iOS", slug: "apple" },
      { name: "Android", slug: "android" },
      { name: "React Native", slug: "react" },
      { name: "Flutter", slug: "flutter" },
      { name: "Xamarin" },
    ],
  },
  {
    label: "Cloud Computing",
    techs: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Azure", slug: "microsoftazure" },
    ],
  },
  {
    label: "DevOps",
    techs: [
      { name: "GitOps" },
      { name: "Nexus" },
      { name: "AWS CloudFormation" },
      { name: "Docker", slug: "docker" },
      { name: "Terraform", slug: "terraform" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Argo" },
      { name: "Jenkins", slug: "jenkins" },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TechLogo({ tech }: { tech: Tech }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="bg-white rounded-[12px] flex flex-col items-center justify-center"
      style={{
        padding: "20px 16px",
        minWidth: "130px",
        minHeight: "90px",
        border: "1.5px solid rgba(239,80,35,0.18)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04), 0 0 0 0 rgba(239,80,35,0)",
        transition: "box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(239,80,35,0.18), 0 2px 8px rgba(0,0,0,0.06), 0 0 20px rgba(239,80,35,0.12)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(239,80,35,0.5)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04), 0 0 0 0 rgba(239,80,35,0)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(239,80,35,0.18)";
      }}
    >
      {tech.slug && !imgError ? (
        <>
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}`}
            width={40}
            height={40}
            alt={tech.name}
            onError={() => setImgError(true)}
            style={{ marginBottom: "8px", objectFit: "contain" }}
          />
          <span style={{ fontSize: "11px", color: "#666", fontWeight: 500, textAlign: "center" }}>
            {tech.name}
          </span>
        </>
      ) : (
        <span style={{ fontSize: "13px", fontWeight: 700, color: "#0a0a0a", textAlign: "center" }}>
          {tech.name}
        </span>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TechnologyCategories() {
  return (
    <section className="px-[16px] md:px-[40px] py-[40px] md:py-[56px]" style={{ background: "#fafafa", borderTop: "1px solid #eee", position: "relative", overflow: "hidden" }}>

      {/* ── Ambient light blobs ── */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "15%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.10) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, filter: "blur(40px)" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-100px", right: "10%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(239,80,35,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, filter: "blur(40px)" }} />

      {/* ── Background pattern ── */}
      <img aria-hidden="true" src="/Media/Pattern/p2.png" alt="" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)", width: "480px", height: "480px", objectFit: "contain", opacity: 0.06, pointerEvents: "none", zIndex: 0 }} />
      <img aria-hidden="true" src="/Media/Pattern/p2.png" alt="" style={{ position: "absolute", top: "-80px", right: "-60px", transform: "rotate(25deg)", width: "360px", height: "360px", objectFit: "contain", opacity: 0.04, pointerEvents: "none", zIndex: 0 }} />
      <img aria-hidden="true" src="/Media/Pattern/p2.png" alt="" style={{ position: "absolute", bottom: "-60px", left: "-40px", transform: "rotate(-18deg)", width: "300px", height: "300px", objectFit: "contain", opacity: 0.04, pointerEvents: "none", zIndex: 0 }} />
      <img aria-hidden="true" src="/Media/Pattern/p2.png" alt="" style={{ position: "absolute", top: "30%", right: "12%", transform: "rotate(10deg)", width: "560px", height: "560px", objectFit: "contain", opacity: 0.035, pointerEvents: "none", zIndex: 0 }} />

      <div className="max-w-[1320px] mx-auto flex flex-col gap-[48px]" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="flex flex-col gap-[10px]">
          <span style={{ color: "#ef5023", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Technology Stack
          </span>
          <h2 style={{ fontWeight: 900, color: "#0a0a0a", fontSize: "36px", lineHeight: "44px", letterSpacing: "-1.5px", margin: 0 }}>
            Our Technologies
          </h2>
        </div>

        {/* Category groups */}
        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className="flex flex-col gap-[16px]"
            style={{
              padding: "0 0 32px 0",
              borderBottom: "1px solid #ebebeb",
            }}
          >
            <h3 style={{ fontWeight: 700, color: "#ef5023", fontSize: "18px", margin: 0 }}>
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-[8px]">
              {cat.techs.map((tech) => (
                <TechLogo key={`${cat.label}-${tech.name}`} tech={tech} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}