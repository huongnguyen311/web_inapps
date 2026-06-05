"use client";

export default function PreviewBgPage() {
  return (
    <div style={{ background: "#111", minHeight: "100vh" }}>

      {/* ── OPTION A: Hex honeycomb ── */}
      <div style={{ padding: "40px 0 8px 60px", color: "#FF4929", fontWeight: 900, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Option A — Hex honeycomb</div>
      <section style={{ position: "relative", background: "#0a0a0a", overflow: "hidden", padding: "60px", marginBottom: 4 }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Hexagon path: flat-top, size 20 */}
              <pattern id="hex-a" width="40" height="69.28" patternUnits="userSpaceOnUse">
                <polygon points="20,0 40,11.55 40,34.64 20,46.19 0,34.64 0,11.55" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
                <polygon points="40,34.64 60,46.19 60,69.28 40,80.83 20,69.28 20,46.19" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
              </pattern>
              <radialGradient id="hex-fade" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <mask id="hex-mask">
                <rect width="100%" height="100%" fill="url(#hex-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-a)" mask="url(#hex-mask)" />
          </svg>
          <div style={{ position: "absolute", width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,73,41,0.07) 0%, transparent 65%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: 20, fontWeight: 900 }}>What We Delivered</div>
        <div style={{ position: "relative", zIndex: 1, color: "#666", fontSize: 13, marginTop: 8 }}>Hex honeycomb fading từ center</div>
      </section>

      {/* ── OPTION B: Circuit board lines ── */}
      <div style={{ padding: "32px 0 8px 60px", color: "#FF4929", fontWeight: 900, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Option B — Circuit lines</div>
      <section style={{ position: "relative", background: "#0a0a0a", overflow: "hidden", padding: "60px", marginBottom: 4 }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(255,73,41,0.08)" strokeWidth="1" fill="none">
              {/* Horizontal traces */}
              <path d="M0,60 L200,60 L220,80 L400,80" />
              <path d="M0,120 L100,120 L120,100 L300,100 L320,120 L500,120" />
              <path d="M0,180 L150,180 L170,160 L350,160 L370,180 L600,180" />
              <path d="M1200,80 L950,80 L930,60 L750,60" />
              <path d="M1200,140 L1050,140 L1030,120 L820,120 L800,140 L650,140" />
              <path d="M1200,220 L1000,220 L980,200 L800,200" />
            </g>
            <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" fill="none">
              <path d="M0,240 L180,240 L200,220 L380,220" />
              <path d="M1200,260 L900,260 L880,240 L700,240" />
            </g>
            {/* Junction dots */}
            <g fill="rgba(255,73,41,0.2)">
              <circle cx="200" cy="60" r="2" />
              <circle cx="300" cy="100" r="2" />
              <circle cx="350" cy="160" r="2" />
              <circle cx="950" cy="80" r="2" />
              <circle cx="820" cy="120" r="2" />
              <circle cx="1000" cy="220" r="2" />
            </g>
            {/* Faint glow */}
            <ellipse cx="600" cy="150" rx="300" ry="150" fill="rgba(255,73,41,0.03)" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: 20, fontWeight: 900 }}>What We Delivered</div>
        <div style={{ position: "relative", zIndex: 1, color: "#666", fontSize: 13, marginTop: 8 }}>Circuit board traces từ 2 cạnh vào giữa</div>
      </section>

      {/* ── OPTION C: Scattered plus / cross marks ── */}
      <div style={{ padding: "32px 0 8px 60px", color: "#FF4929", fontWeight: 900, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Option C — Plus marks</div>
      <section style={{ position: "relative", background: "#0a0a0a", overflow: "hidden", padding: "60px", marginBottom: 4 }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="plus-c" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="20" y1="14" x2="20" y2="26" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <line x1="14" y1="20" x2="26" y2="20" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              </pattern>
              <radialGradient id="plus-fade" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <mask id="plus-mask">
                <rect width="100%" height="100%" fill="url(#plus-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#plus-c)" mask="url(#plus-mask)" />
          </svg>
          <div style={{ position: "absolute", width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,73,41,0.06) 0%, transparent 65%)" }} />
          {/* Accent red plus marks */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(255,73,41,0.3)" strokeWidth="1.5">
              <line x1="80" y1="70" x2="80" y2="84" /><line x1="73" y1="77" x2="87" y2="77" />
              <line x1="1120" y1="220" x2="1120" y2="234" /><line x1="1113" y1="227" x2="1127" y2="227" />
              <line x1="600" y1="30" x2="600" y2="40" /><line x1="595" y1="35" x2="605" y2="35" />
            </g>
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: 20, fontWeight: 900 }}>What We Delivered</div>
        <div style={{ position: "relative", zIndex: 1, color: "#666", fontSize: 13, marginTop: 8 }}>Plus/cross marks grid fading từ center + accent đỏ</div>
      </section>

      {/* ── OPTION D: Flowing wave lines ── */}
      <div style={{ padding: "32px 0 8px 60px", color: "#FF4929", fontWeight: 900, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Option D — Wave lines</div>
      <section style={{ position: "relative", background: "#0a0a0a", overflow: "hidden", padding: "60px", marginBottom: 60 }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" strokeWidth="1">
              {/* Red waves — center band */}
              {[0,1,2,3,4].map(i => (
                <path
                  key={`r${i}`}
                  d={`M0,${120 + i*14} C200,${100 + i*14} 400,${140 + i*14} 600,${120 + i*14} S1000,${100 + i*14} 1200,${120 + i*14}`}
                  stroke={`rgba(255,73,41,${0.06 - i * 0.01})`}
                  strokeWidth={1 - i * 0.1}
                />
              ))}
              {/* White waves — top */}
              {[0,1,2].map(i => (
                <path
                  key={`w${i}`}
                  d={`M0,${40 + i*18} C300,${20 + i*18} 600,${60 + i*18} 900,${40 + i*18} S1100,${20 + i*18} 1200,${40 + i*18}`}
                  stroke={`rgba(255,255,255,${0.03 - i * 0.008})`}
                />
              ))}
              {/* White waves — bottom */}
              {[0,1,2].map(i => (
                <path
                  key={`wb${i}`}
                  d={`M0,${240 + i*18} C300,${220 + i*18} 600,${260 + i*18} 900,${240 + i*18} S1100,${220 + i*18} 1200,${240 + i*18}`}
                  stroke={`rgba(255,255,255,${0.03 - i * 0.008})`}
                />
              ))}
            </g>
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: 20, fontWeight: 900 }}>What We Delivered</div>
        <div style={{ position: "relative", zIndex: 1, color: "#666", fontSize: 13, marginTop: 8 }}>Flowing sine waves — đỏ ở giữa, trắng mờ ở trên/dưới</div>
      </section>

    </div>
  );
}