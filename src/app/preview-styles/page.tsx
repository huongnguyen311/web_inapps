export default function PreviewStyles() {
  return (
    <div style={{ background: "#f0f0f0", minHeight: "100vh", padding: "40px 32px" }}>
      <h1 style={{ color: "#111", fontFamily: "sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
        Style Preview — Professional / Corporate
      </h1>
      <p style={{ color: "#666", fontFamily: "sans-serif", fontSize: 14, marginBottom: 40 }}>
        Báo tên style để áp dụng vào Service Detail banner
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>

        {/* ── STYLE 1: Bold Split — nửa trắng nửa cam, typography lớn ── */}
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
          <svg viewBox="0 0 600 340" width="100%" xmlns="http://www.w3.org/2000/svg">
            {/* white half */}
            <rect width="600" height="340" fill="#ffffff"/>
            {/* orange diagonal block */}
            <polygon points="260,0 600,0 600,340 160,340" fill="#FF4929"/>
            {/* dark accent strip */}
            <polygon points="240,0 280,0 180,340 140,340" fill="#cc3515"/>
            {/* white panel on orange */}
            <rect x="300" y="60" width="240" height="220" rx="12" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            {/* big stat */}
            <text x="420" y="140" textAnchor="middle" fill="#fff" fontSize="56" fontFamily="sans-serif" fontWeight="900" letterSpacing="-2">98%</text>
            <text x="420" y="162" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="sans-serif" letterSpacing="3">CLIENT SATISFACTION</text>
            <line x1="360" y1="176" x2="480" y2="176" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <text x="420" y="200" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontFamily="sans-serif">500+ Projects Delivered</text>
            <text x="420" y="220" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="sans-serif">across 20+ countries</text>
            {/* white side content */}
            <text x="30" y="90" fill="#111" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">INNAPPS</text>
            <text x="30" y="130" fill="#111" fontSize="28" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1">Software</text>
            <text x="30" y="160" fill="#FF4929" fontSize="28" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1">Excellence</text>
            <text x="30" y="195" fill="#555" fontSize="11" fontFamily="sans-serif">End-to-end technology</text>
            <text x="30" y="210" fill="#555" fontSize="11" fontFamily="sans-serif">solutions for enterprises</text>
            {/* CTA button */}
            <rect x="30" y="230" width="120" height="36" rx="6" fill="#111"/>
            <text x="90" y="253" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="600">Get Started →</text>
            {/* decorative dots */}
            <circle cx="200" cy="40" r="4" fill="#FF4929" opacity="0.3"/>
            <circle cx="215" cy="40" r="4" fill="#FF4929" opacity="0.5"/>
            <circle cx="230" cy="40" r="4" fill="#FF4929" opacity="0.8"/>
          </svg>
          <div style={{ background: "#fff", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ background: "#FF4929", color: "#fff", fontFamily: "monospace", fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 4 }}>1</span>
            <span style={{ color: "#333", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>Bold Split — White + Orange Diagonal</span>
          </div>
        </div>

        {/* ── STYLE 2: Dark Navy + Neon Accents ── */}
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
          <svg viewBox="0 0 600 340" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="s2_bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0f2e"/>
                <stop offset="100%" stopColor="#14082a"/>
              </linearGradient>
              <linearGradient id="s2_card" x1="135deg" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a2050"/>
                <stop offset="100%" stopColor="#0f1435"/>
              </linearGradient>
              <filter id="s2_glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <rect width="600" height="340" fill="url(#s2_bg)"/>
            {/* grid */}
            <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
              {[60,120,180,240,300,360,420,480,540].map((x,i)=><line key={i} x1={x} y1="0" x2={x} y2="340"/>)}
              {[60,120,180,240,300].map((y,i)=><line key={i} x1="0" y1={y} x2="600" y2={y}/>)}
            </g>
            {/* neon accent bars */}
            <rect x="0" y="0" width="4" height="340" fill="#FF4929"/>
            <rect x="0" y="0" width="4" height="120" fill="#FF4929" filter="url(#s2_glow)" opacity="0.8"/>
            {/* title */}
            <text x="36" y="80" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="4" opacity="0.5">TECHNOLOGY SERVICES</text>
            <text x="36" y="126" fill="#ffffff" fontSize="38" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1">Build Faster.</text>
            <text x="36" y="168" fill="#FF4929" fontSize="38" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1">Scale Smarter.</text>
            <text x="36" y="206" fill="rgba(255,255,255,0.45)" fontSize="12" fontFamily="sans-serif">Enterprise software engineered for growth</text>
            {/* metric cards row */}
            {[["150+","Clients"],["8yr","Experience"],["99.9%","Uptime"]].map(([val,lab],i)=>(
              <g key={i}>
                <rect x={36+i*118} y="228" width="106" height="60" rx="8" fill="url(#s2_card)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                <text x={36+i*118+53} y="256" textAnchor="middle" fill="#FF4929" fontSize="20" fontFamily="sans-serif" fontWeight="800">{val}</text>
                <text x={36+i*118+53} y="272" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="sans-serif" letterSpacing="1">{lab}</text>
              </g>
            ))}
            {/* right visual — glowing orb stack */}
            <circle cx="460" cy="160" r="110" fill="none" stroke="rgba(255,73,41,0.1)" strokeWidth="1"/>
            <circle cx="460" cy="160" r="80"  fill="none" stroke="rgba(255,73,41,0.15)" strokeWidth="1"/>
            <circle cx="460" cy="160" r="55"  fill="rgba(255,73,41,0.06)" stroke="#FF4929" strokeWidth="1.5" strokeOpacity="0.4"/>
            <circle cx="460" cy="160" r="30"  fill="rgba(255,73,41,0.15)" filter="url(#s2_glow)"/>
            <circle cx="460" cy="160" r="14"  fill="#FF4929" filter="url(#s2_glow)"/>
            <circle cx="460" cy="160" r="5"   fill="#fff"/>
            {/* orbit dots */}
            {[[460,80],[540,160],[460,240],[380,160]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r="5" fill="#FF4929" opacity="0.7" filter="url(#s2_glow)"/>
            ))}
            <circle cx="460" cy="80"  r="12" fill="none" stroke="rgba(255,73,41,0.3)" strokeWidth="1"/>
            <circle cx="540" cy="160" r="12" fill="none" stroke="rgba(255,73,41,0.3)" strokeWidth="1"/>
          </svg>
          <div style={{ background: "#0a0f2e", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ background: "#FF4929", color: "#fff", fontFamily: "monospace", fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 4 }}>2</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>Dark Navy + Neon Orange</span>
          </div>
        </div>

        {/* ── STYLE 3: Bright White Corporate — clean, Apple-like ── */}
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
          <svg viewBox="0 0 600 340" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="s3_bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#f5f0ee"/>
              </linearGradient>
              <linearGradient id="s3_pill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4929"/>
                <stop offset="100%" stopColor="#cc2200"/>
              </linearGradient>
              <filter id="s3_shadow"><feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#FF4929" floodOpacity="0.2"/></filter>
              <filter id="s3_cardshadow"><feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#000" floodOpacity="0.08"/></filter>
            </defs>
            <rect width="600" height="340" fill="url(#s3_bg)"/>
            {/* subtle circles bg */}
            <circle cx="480" cy="160" r="180" fill="rgba(255,73,41,0.04)"/>
            <circle cx="480" cy="160" r="130" fill="rgba(255,73,41,0.05)"/>
            <circle cx="480" cy="160" r="80" fill="rgba(255,73,41,0.07)"/>
            {/* left content */}
            <rect x="32" y="40" width="80" height="24" rx="12" fill="url(#s3_pill)" filter="url(#s3_shadow)"/>
            <text x="72" y="57" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif" fontWeight="700" letterSpacing="1">SOFTWARE CO.</text>
            <text x="32" y="110" fill="#111" fontSize="34" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1.5">We Build</text>
            <text x="32" y="148" fill="#FF4929" fontSize="34" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1.5">What Matters</text>
            <text x="32" y="180" fill="#888" fontSize="12" fontFamily="sans-serif">Custom software · AI · Cloud</text>
            {/* pill tags */}
            {[["React",32],["Node.js",90],["Python",152],["AWS",214]].map(([lab,x],i)=>(
              <g key={i}>
                <rect x={x as number} y="200" width={Number(x)===32?48:Number(x)===90?56:Number(x)===152?52:36} height="22" rx="11" fill="#f0ece8" stroke="#e8e0da" strokeWidth="1"/>
                <text x={(x as number)+([48,56,52,36][i])/2} y="215" textAnchor="middle" fill="#555" fontSize="9" fontFamily="sans-serif" fontWeight="600">{lab}</text>
              </g>
            ))}
            {/* floating cards right */}
            <rect x="300" y="40" width="140" height="80" rx="14" fill="#fff" filter="url(#s3_cardshadow)"/>
            <rect x="316" y="56" width="36" height="36" rx="10" fill="rgba(255,73,41,0.1)"/>
            <text x="334" y="80" textAnchor="middle" fill="#FF4929" fontSize="18">⚡</text>
            <text x="364" y="70" fill="#111" fontSize="13" fontFamily="sans-serif" fontWeight="700">Fast</text>
            <text x="364" y="86" fill="#888" fontSize="10" fontFamily="sans-serif">Delivery</text>
            <text x="316" y="106" fill="#111" fontSize="22" fontFamily="sans-serif" fontWeight="800">2× faster</text>

            <rect x="456" y="40" width="128" height="80" rx="14" fill="#111" filter="url(#s3_cardshadow)"/>
            <text x="520" y="72" textAnchor="middle" fill="#FF4929" fontSize="28" fontFamily="sans-serif" fontWeight="900">500+</text>
            <text x="520" y="90" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="sans-serif">Projects</text>
            <text x="520" y="106" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="sans-serif">delivered</text>

            <rect x="300" y="140" width="284" height="80" rx="14" fill="#FF4929" filter="url(#s3_shadow)"/>
            <text x="320" y="172" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="sans-serif">Client Satisfaction</text>
            <text x="320" y="198" fill="#fff" fontSize="32" fontFamily="sans-serif" fontWeight="900">98.4%</text>
            {/* progress bar inside */}
            <rect x="320" y="208" width="240" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
            <rect x="320" y="208" width="236" height="4" rx="2" fill="rgba(255,255,255,0.7)"/>

            <rect x="300" y="240" width="136" height="70" rx="14" fill="#fff" filter="url(#s3_cardshadow)"/>
            <text x="316" y="264" fill="#888" fontSize="9" fontFamily="sans-serif" fontWeight="600" letterSpacing="1">TECH STACK</text>
            {["React · Next.js","Node · Python","AWS · Docker"].map((t,i)=>(
              <text key={i} x="316" y={280+i*12} fill="#333" fontSize="9" fontFamily="monospace">{t}</text>
            ))}

            <rect x="452" y="240" width="132" height="70" rx="14" fill="#111" filter="url(#s3_cardshadow)"/>
            <text x="518" y="265" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="sans-serif" letterSpacing="1">UPTIME</text>
            <text x="518" y="293" textAnchor="middle" fill="#FF4929" fontSize="26" fontFamily="sans-serif" fontWeight="900">99.9%</text>
          </svg>
          <div style={{ background: "#fff", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ background: "#FF4929", color: "#fff", fontFamily: "monospace", fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 4 }}>3</span>
            <span style={{ color: "#333", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>Bright White Corporate — Apple-like Cards</span>
          </div>
        </div>

        {/* ── STYLE 4: Gradient Mesh — multi-color bold ── */}
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
          <svg viewBox="0 0 600 340" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="s4_g1" cx="20%" cy="30%" r="55%">
                <stop offset="0%" stopColor="#FF4929"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="s4_g2" cx="80%" cy="70%" r="55%">
                <stop offset="0%" stopColor="#6c2bff"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <radialGradient id="s4_g3" cx="70%" cy="20%" r="45%">
                <stop offset="0%" stopColor="#0066ff"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
              <filter id="s4_blur"><feGaussianBlur stdDeviation="40"/></filter>
              <filter id="s4_glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            {/* dark base */}
            <rect width="600" height="340" fill="#080808"/>
            {/* mesh gradients */}
            <rect width="600" height="340" fill="url(#s4_g1)" filter="url(#s4_blur)" opacity="0.8"/>
            <rect width="600" height="340" fill="url(#s4_g2)" filter="url(#s4_blur)" opacity="0.7"/>
            <rect width="600" height="340" fill="url(#s4_g3)" filter="url(#s4_blur)" opacity="0.5"/>
            {/* glass card */}
            <rect x="40" y="50" width="300" height="240" rx="20"
              fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            {/* card shine */}
            <path d="M60,50 Q200,50 340,70 L340,90 Q200,70 60,70 Z" fill="rgba(255,255,255,0.06)"/>
            {/* content */}
            <text x="64" y="96" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="sans-serif" letterSpacing="3" fontWeight="600">PLATFORM</text>
            <text x="64" y="136" fill="#ffffff" fontSize="36" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1">Intelligent</text>
            <text x="64" y="174" fill="#ffffff" fontSize="36" fontFamily="sans-serif" fontWeight="900" letterSpacing="-1">Software</text>
            <text x="64" y="206" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="sans-serif">AI-powered · Cloud-native · Scalable</text>
            {/* divider */}
            <line x1="64" y1="220" x2="316" y2="220" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            {/* mini stats */}
            {[["500+","projects","64"],["150+","clients","168"],["8yr","experience","272"]].map(([v,l,x],i)=>(
              <g key={i}>
                <text x={x} y="244" fill="#fff" fontSize="18" fontFamily="sans-serif" fontWeight="800">{v}</text>
                <text x={x} y="258" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="sans-serif">{l}</text>
              </g>
            ))}
            {/* right side floating elements */}
            {/* big glowing pill */}
            <rect x="380" y="60" width="180" height="52" rx="26"
              fill="rgba(255,73,41,0.25)" stroke="#FF4929" strokeWidth="1.5" filter="url(#s4_glow)"/>
            <text x="470" y="82" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="700">● AI-Powered</text>
            <text x="470" y="98" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">Machine Learning Ready</text>

            <rect x="380" y="130" width="180" height="52" rx="26"
              fill="rgba(108,43,255,0.25)" stroke="#6c2bff" strokeWidth="1.5" filter="url(#s4_glow)"/>
            <text x="470" y="152" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="700">◈ Cloud Native</text>
            <text x="470" y="168" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">AWS · GCP · Azure</text>

            <rect x="380" y="200" width="180" height="52" rx="26"
              fill="rgba(0,102,255,0.2)" stroke="#0066ff" strokeWidth="1.5" filter="url(#s4_glow)"/>
            <text x="470" y="222" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="700">⚡ High Performance</text>
            <text x="470" y="238" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="sans-serif">99.9% SLA Guaranteed</text>

            {/* scattered dots */}
            <circle cx="370" cy="290" r="3" fill="#FF4929" opacity="0.6"/>
            <circle cx="385" cy="290" r="3" fill="#6c2bff" opacity="0.6"/>
            <circle cx="400" cy="290" r="3" fill="#0066ff" opacity="0.6"/>
          </svg>
          <div style={{ background: "#080808", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ background: "#FF4929", color: "#fff", fontFamily: "monospace", fontSize: 12, fontWeight: 700, padding: "2px 10px", borderRadius: 4 }}>4</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>Gradient Mesh — Multi-color Bold</span>
          </div>
        </div>

      </div>
    </div>
  )
}