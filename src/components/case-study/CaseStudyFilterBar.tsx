"use client";

import { CATEGORIES, Category, SERVICES, Service } from "@/data/caseStudies";

type Props = {
  activeTab: "industry" | "service";
  onTabChange: (tab: "industry" | "service") => void;
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  activeService: Service;
  onServiceChange: (svc: Service) => void;
};

export default function CaseStudyFilterBar({
  activeTab,
  onTabChange,
  activeCategory,
  onCategoryChange,
  activeService,
  onServiceChange,
}: Props) {
  const items = activeTab === "industry" ? CATEGORIES : SERVICES;
  const activeFilter = activeTab === "industry" ? activeCategory : activeService;
  const onFilterChange = activeTab === "industry"
    ? (v: string) => onCategoryChange(v as Category)
    : (v: string) => onServiceChange(v as Service);

  return (
    <div style={{
      background: "#fff",
      borderBottom: "1px solid #ebebeb",
      position: "sticky",
      top: 68,
      zIndex: 40,
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 16px" }} className="md:!px-[40px]">

        {/* ── Tab switcher — pill style ── */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          padding: "14px 0",
          borderBottom: "1px solid #ebebeb",
        }}>
          {(["service", "industry"] as const).map((tab) => {
            const isActive = activeTab === tab;
            const label = tab === "industry" ? "BY MODEL" : "BY SERVICE";
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                style={{
                  padding: "10px 22px",
                  borderRadius: "8px",
                  background: isActive ? "#ef5023" : "#f4f4f4",
                  color: isActive ? "#fff" : "#777",
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  border: "1.5px solid transparent",
                  outline: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "background .15s, color .15s",
                  appearance: "none",
                  WebkitAppearance: "none",
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#e8e8e8";
                    el.style.color = "#333";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#f4f4f4";
                    el.style.color = "#777";
                  }
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Filter pills — underline style ── */}
        <div style={{
          display: "flex",
          gap: 0,
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          marginBottom: -1,
          touchAction: "pan-x pinch-zoom",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}>
          {items.map((item) => {
            const isActive = item === activeFilter;
            return (
              <button
                key={item}
                onClick={() => onFilterChange(item)}
                style={{
                  padding: "14px 20px",
                  background: "none",
                  color: isActive ? "#ef5023" : "#bbb",
                  fontSize: 13,
                  fontWeight: 600,
                  border: "none",
                  borderBottom: isActive ? "2.5px solid #ef5023" : "2.5px solid transparent",
                  marginBottom: -1,
                  outline: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "color .15s, border-color .15s",
                }}
                onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#555"; }}
                onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = "#bbb"; }}
              >
                {item}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}