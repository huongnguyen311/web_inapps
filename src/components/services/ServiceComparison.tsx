interface ComparisonRow {
  criterion: string;
  inApps: string | boolean;
  inHouse: string | boolean;
  typical: string | boolean;
}

interface Props {
  rows: ComparisonRow[];
  competitorLabel?: string;
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" fill="rgba(239,80,35,0.12)" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#ef5023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" fill="#ebebeb" />
      <path d="M5 5l6 6M11 5L5 11" stroke="#bbb" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function InAppsCell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckIcon />;
  return <span className="text-[13px] font-semibold text-[#0a0a0a] leading-[1.5]">{value}</span>;
}

function NeutralCell({ value }: { value: string | boolean }) {
  if (value === false) return <CrossIcon />;
  return <span className="text-[13px] text-[#666] leading-[1.5]">{value as string}</span>;
}

const COLS = "minmax(140px, 1.4fr) repeat(3, minmax(100px, 1fr))";
const TABLE_MIN_W = "520px";

export default function ServiceComparison({ rows, competitorLabel = "Other Vendors" }: Props) {
  return (
    <section className="px-[16px] md:px-[40px] py-[48px] md:py-[70px]" style={{ background: "#ffffff", borderTop: "1px solid #e8e8e8" }}>
      <div className="max-w-[1320px] mx-auto">

        {/* section header */}
        <div className="flex flex-col gap-[8px] mb-[40px]">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#ef5023]">WHY INAPPS</p>
          <h2 className="font-black text-[#0a0a0a] text-[36px] leading-[44px] tracking-[-1.5px]">
            How we compare
          </h2>
        </div>

        {/* table */}
        <div className="rounded-[16px] overflow-x-auto" style={{ border: "1px solid #e8e8e8", boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(239,80,35,0.06)", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" } as React.CSSProperties}>
          <div style={{ minWidth: TABLE_MIN_W }}>

          {/* column headers */}
          <div className="grid" style={{ gridTemplateColumns: COLS }}>

            <div className="px-[28px] py-[14px]" style={{ background: "#eeeeee", borderBottom: "1px solid #e8e8e8" }}>
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#ef5023]">Criterion</span>
            </div>

            {/* InApps — orange */}
            <div
              className="flex items-center justify-center gap-[6px] py-[14px]"
              style={{ background: "#ef5023", borderLeft: "1px solid rgba(239,80,35,0.3)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[12px] font-black uppercase tracking-[1.5px] text-white">InApps</span>
            </div>

            {/* In-House */}
            <div
              className="flex items-center justify-center py-[14px]"
              style={{ background: "#eeeeee", borderLeft: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#ef5023]">In-House</span>
            </div>

            {/* Other Vendors */}
            <div
              className="flex items-center justify-center py-[14px]"
              style={{ background: "#eeeeee", borderLeft: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}
            >
              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[#ef5023]">{competitorLabel}</span>
            </div>
          </div>

          {/* data rows */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            return (
              <div
                key={row.criterion}
                className="grid items-stretch"
                style={{ gridTemplateColumns: COLS, borderBottom: isLast ? "none" : "1px solid #f0f0f0" }}
              >
                {/* criterion */}
                <div className="px-[28px] py-[18px] flex items-center" style={{ background: "#fff" }}>
                  <span className="text-[14px] font-semibold text-[#1a1a1a]">{row.criterion}</span>
                </div>

                {/* InApps — orange tint */}
                <div
                  className="flex items-center justify-center px-[20px] py-[18px] text-center"
                  style={{
                    background: i % 2 === 0 ? "rgba(239,80,35,0.04)" : "rgba(239,80,35,0.07)",
                    borderLeft: "2px solid rgba(239,80,35,0.15)",
                  }}
                >
                  <InAppsCell value={row.inApps} />
                </div>

                {/* In-House — slate tint */}
                <div
                  className="flex items-center justify-center px-[20px] py-[18px] text-center"
                  style={{
                    background: i % 2 === 0 ? "rgba(61,74,92,0.05)" : "rgba(61,74,92,0.09)",
                    borderLeft: "1px solid #e8e8e8",
                  }}
                >
                  <NeutralCell value={row.inHouse} />
                </div>

                {/* Other Vendors — darker slate tint */}
                <div
                  className="flex items-center justify-center px-[20px] py-[18px] text-center"
                  style={{
                    background: i % 2 === 0 ? "rgba(46,56,71,0.06)" : "rgba(46,56,71,0.11)",
                    borderLeft: "1px solid #e8e8e8",
                  }}
                >
                  <NeutralCell value={row.typical} />
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}