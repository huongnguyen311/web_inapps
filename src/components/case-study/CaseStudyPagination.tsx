"use client";

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function CaseStudyPagination({ currentPage, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  const addPage = (n: number) => {
    if (n < 1 || n > totalPages) return;
    if (!pages.includes(n)) pages.push(n);
  };

  addPage(1);
  if (currentPage - 2 > 2) pages.push("...");
  addPage(currentPage - 1);
  addPage(currentPage);
  addPage(currentPage + 1);
  if (currentPage + 2 < totalPages - 1) pages.push("...");
  addPage(totalPages);

  const btnStyle = (active: boolean, disabled?: boolean): React.CSSProperties => ({
    minWidth: 40, height: 40, borderRadius: 10,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 14, fontWeight: 600,
    cursor: disabled ? "default" : "pointer",
    border: active ? "1px solid #ef5023" : "1px solid #e5e5e5",
    background: active ? "#ef5023" : "#fff",
    color: active ? "#fff" : "#aaa",
    boxShadow: active ? "0 4px 14px rgba(239,80,35,.3)" : "none",
    transition: "all .15s",
    padding: "0 8px",
  });

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
      <button
        onClick={() => currentPage > 1 && onChange(currentPage - 1)}
        style={{ ...btnStyle(false, currentPage === 1), fontSize: 18, color: currentPage === 1 ? "#ddd" : "#aaa" }}
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} style={{ minWidth: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc", fontSize: 14 }}>
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            style={btnStyle(p === currentPage)}
            onMouseEnter={(e) => { if (p !== currentPage) { (e.currentTarget as HTMLElement).style.borderColor = "#ef5023"; (e.currentTarget as HTMLElement).style.color = "#ef5023"; } }}
            onMouseLeave={(e) => { if (p !== currentPage) { (e.currentTarget as HTMLElement).style.borderColor = "#e5e5e5"; (e.currentTarget as HTMLElement).style.color = "#aaa"; } }}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => currentPage < totalPages && onChange(currentPage + 1)}
        style={{ ...btnStyle(false, currentPage === totalPages), fontSize: 18, color: currentPage === totalPages ? "#ddd" : "#aaa" }}
      >
        ›
      </button>
    </div>
  );
}