import { Category } from "@/data/caseStudies";

type Props = {
  category: Exclude<Category, "All">;
  size?: "normal" | "large";
};

const THEME: Record<Exclude<Category, "All">, {
  gradient: string;
  accent: string;
  icon: React.ReactNode;
}> = {
  "AI & Automation": {
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #16213e 100%)",
    accent: "#ef5023",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" stroke="#ef5023" strokeWidth="2" opacity="0.8"/>
        <circle cx="24" cy="24" r="4" fill="#ef5023" opacity="0.9"/>
        <path d="M24 6 L24 14M24 34 L24 42M6 24 L14 24M34 24 L42 24" stroke="#ef5023" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M11 11 L17 17M31 31 L37 37M37 11 L31 17M17 31 L11 37" stroke="#ef5023" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
  "Healthcare": {
    gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)",
    accent: "#2e7d32",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cross / medical */}
        <rect x="20" y="8" width="8" height="32" rx="3" fill="#2e7d32" opacity="0.9"/>
        <rect x="8" y="20" width="32" height="8" rx="3" fill="#2e7d32" opacity="0.9"/>
        {/* Heart outline */}
        <path d="M24 38 C24 38 10 30 10 20 C10 15 14 12 18 13 C20 13.5 22 15 24 17 C26 15 28 13.5 30 13 C34 12 38 15 38 20 C38 30 24 38 24 38Z" stroke="#2e7d32" strokeWidth="1.5" fill="none" opacity="0.3"/>
      </svg>
    ),
  },
  "Logistics & Supply Chain": {
    gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 50%, #ffcc80 100%)",
    accent: "#e65100",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Truck */}
        <rect x="4" y="18" width="26" height="18" rx="2" fill="#e65100" opacity="0.85"/>
        <path d="M30 24 L30 36 L44 36 L44 28 L38 22 L30 22Z" fill="#e65100" opacity="0.7"/>
        <circle cx="11" cy="37" r="4" fill="#fff" stroke="#e65100" strokeWidth="2"/>
        <circle cx="37" cy="37" r="4" fill="#fff" stroke="#e65100" strokeWidth="2"/>
        {/* Speed lines */}
        <line x1="4" y1="14" x2="20" y2="14" stroke="#e65100" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="4" y1="10" x2="14" y2="10" stroke="#e65100" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
  "Media & Entertainment": {
    gradient: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 50%, #ce93d8 100%)",
    accent: "#6a1b9a",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Play button */}
        <circle cx="24" cy="24" r="18" fill="#6a1b9a" opacity="0.15"/>
        <circle cx="24" cy="24" r="14" stroke="#6a1b9a" strokeWidth="2" fill="none" opacity="0.4"/>
        <path d="M20 17 L34 24 L20 31 Z" fill="#6a1b9a" opacity="0.9"/>
        {/* Film strip dots */}
        <rect x="6" y="10" width="4" height="6" rx="1" fill="#6a1b9a" opacity="0.3"/>
        <rect x="38" y="10" width="4" height="6" rx="1" fill="#6a1b9a" opacity="0.3"/>
        <rect x="6" y="32" width="4" height="6" rx="1" fill="#6a1b9a" opacity="0.3"/>
        <rect x="38" y="32" width="4" height="6" rx="1" fill="#6a1b9a" opacity="0.3"/>
      </svg>
    ),
  },
  "Retail & E-commerce": {
    gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)",
    accent: "#c2185b",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shopping bag */}
        <path d="M10 16 L8 42 L40 42 L38 16 Z" fill="#c2185b" opacity="0.8"/>
        <path d="M16 16 C16 16 16 8 24 8 C32 8 32 16 32 16" stroke="#c2185b" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Tag */}
        <circle cx="18" cy="24" r="2" fill="#fff" opacity="0.7"/>
        <circle cx="30" cy="24" r="2" fill="#fff" opacity="0.7"/>
        <line x1="18" y1="24" x2="30" y2="24" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
  },
  "Technology": {
    gradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)",
    accent: "#1565c0",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor */}
        <rect x="6" y="8" width="36" height="26" rx="3" fill="#1565c0" opacity="0.8"/>
        <rect x="9" y="11" width="30" height="20" rx="1.5" fill="#e3f2fd" opacity="0.9"/>
        {/* Code lines */}
        <line x1="12" y1="16" x2="22" y2="16" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="20" x2="28" y2="20" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="24" x2="20" y2="24" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Stand */}
        <rect x="20" y="34" width="8" height="4" rx="1" fill="#1565c0" opacity="0.5"/>
        <rect x="16" y="38" width="16" height="2.5" rx="1.25" fill="#1565c0" opacity="0.5"/>
      </svg>
    ),
  },
  "E-commerce & Healthcare": {
    gradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)",
    accent: "#00695c",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pill / capsule */}
        <rect x="8" y="20" width="32" height="12" rx="6" fill="#00695c" opacity="0.8"/>
        <rect x="8" y="20" width="16" height="12" rx="6" fill="#00695c" opacity="0.4"/>
        {/* Cart */}
        <path d="M28 10 L32 8 L44 8" stroke="#00695c" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <circle cx="34" cy="38" r="3" fill="#00695c" opacity="0.6"/>
        <circle cx="42" cy="38" r="3" fill="#00695c" opacity="0.6"/>
        <path d="M30 14 L31 36 L44 36 L46 18 L30 18" stroke="#00695c" strokeWidth="1.5" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
};

export default function CaseStudyThumbnail({ category, size = "normal" }: Props) {
  const theme = THEME[category];
  const bgIconSize = size === "large" ? 320 : 220;

  return (
    <div style={{
      width: "100%", height: "100%",
      background: theme.gradient,
      position: "absolute", inset: 0,
      overflow: "hidden",
    }}>
      {/* Dot pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, ${theme.accent}20 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }} />

      {/* Large icon   bottom right, mostly cropped */}
      <div style={{
        position: "absolute",
        width: bgIconSize, height: bgIconSize,
        opacity: 0.18,
        right: -bgIconSize * 0.25,
        bottom: -bgIconSize * 0.25,
      }}>
        {theme.icon}
      </div>

      {/* Second copy top-left, smaller + more faint */}
      <div style={{
        position: "absolute",
        width: bgIconSize * 0.5, height: bgIconSize * 0.5,
        opacity: 0.07,
        left: -bgIconSize * 0.1,
        top: -bgIconSize * 0.1,
      }}>
        {theme.icon}
      </div>
    </div>
  );
}