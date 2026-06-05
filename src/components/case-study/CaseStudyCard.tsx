"use client";

import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";
import CaseStudyThumbnail from "./CaseStudyThumbnail";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-study/${cs.slug}`}
      style={{ textDecoration: "none" }}
      className="cs-card"
    >
      <style>{`
        .cs-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #ebebeb;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,.06);
          transition: border-color .25s, transform .25s, box-shadow .25s;
          text-decoration: none;
        }
        .cs-card:hover {
          border-color: rgba(239,80,35,.3);
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(0,0,0,.1), 0 0 0 1px rgba(239,80,35,.1);
        }
        .cs-card:hover .cs-view-link { gap: 10px; }
        .cs-card:hover .cs-view-arr { transform: translateX(3px); }
      `}</style>

      {/* Thumbnail */}
      <div style={{ position: "relative", height: 220, flexShrink: 0, overflow: "hidden" }}>
        {cs.image ? (
          <img src={cs.image} alt={cs.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <CaseStudyThumbnail category={cs.category} />
        )}
        {/* Category tag */}
        <div style={{
          position: "absolute", bottom: 12, right: 12, zIndex: 2,
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(8px)",
          color: "#444", fontSize: 11, fontWeight: 700,
          borderRadius: 20, padding: "4px 11px",
          border: "1px solid rgba(0,0,0,.07)",
        }}>
          {cs.category}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
        <h4 style={{
          fontSize: 17, fontWeight: 800, color: "#0a0a0a",
          marginBottom: 10, lineHeight: 1.3, letterSpacing: "-.3px",
        }}>
          {cs.name}
        </h4>
        <div style={{ width: 32, height: 2, background: "#ef5023", borderRadius: 2, marginBottom: 10 }} />
        <p style={{
          fontSize: 14, color: "#888", lineHeight: 1.7,
          marginBottom: 20, flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {cs.shortDescription}
        </p>

        {/* Footer */}
        <div style={{
          paddingTop: 16, borderTop: "1px solid #f2f2f2",
        }}>
          <div className="cs-view-link" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "#ef5023", fontSize: 13, fontWeight: 700,
            transition: "gap .15s",
          }}>
            View Detail
            <span className="cs-view-arr" style={{
              fontSize: 15, display: "inline-block",
              transition: "transform .15s",
            }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
