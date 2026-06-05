# About Page Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle `src/app/about/page.tsx` to match the visual language of the Industries page — dark theme, `font-black` typography, negative letter-spacing, `#ef5023` accent, alternating dark/light sections, and Industries-style CTA.

**Architecture:** Single-file visual overhaul of `src/app/about/page.tsx`. No new components, no content changes. Each task rewrites one section in isolation.

**Tech Stack:** Next.js, Tailwind CSS, inline styles (matching Industries page patterns)

---

### Task 1: Global wrapper + Hero section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace the root wrapper and Hero section**

Replace the entire file content from line 20 (the `export default function AboutPage()`) through the closing `</section>` of the Hero section (line 94) with:

```tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1">

        {/* ── S1: Hero ── */}
        <section
          className="relative px-4 sm:px-[60px] overflow-hidden flex items-center"
          style={{ minHeight: "560px", paddingTop: "188px", paddingBottom: "100px" }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={imgHero}
              alt=""
              className="absolute right-0 top-0 h-full"
              style={{ width: "65%", objectFit: "cover", objectPosition: "right center" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0d0d0d 35%, #0d0d0d 45%, rgba(13,13,13,0.7) 60%, transparent 100%)" }}
            />
          </div>

          <div className="relative flex flex-col items-start gap-[24px] max-w-[680px]">
            {/* Badge */}
            <span
              className="text-[11px] font-bold tracking-[1.5px] uppercase px-[12px] py-[5px] rounded-full"
              style={{ background: "rgba(239,80,35,0.12)", color: "#ef5023" }}
            >
              OUR STORY
            </span>

            {/* Heading */}
            <h1
              className="font-black text-white"
              style={{ fontSize: "46px", lineHeight: "50px", letterSpacing: "-2px" }}
            >
              Building{" "}
              <span style={{ color: "#ef5023" }}>Tomorrow&apos;s</span>
              {" "}Solutions Today
            </h1>

            {/* Subtext */}
            <p className="text-[16px] leading-[27px]" style={{ color: "#ccc" }}>
              Founded with a vision to bridge the global tech talent gap,{" "}
              <span className="font-semibold text-white">InApps.net</span> has grown from a small startup into a leading offshore engineering partner. We believe in the power of human-centric design and technical excellence.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-[32px] pt-[8px]">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "250+", label: "Engineers" },
                { value: "50+", label: "Countries" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-[32px]">
                  {i > 0 && <div className="w-px h-[40px]" style={{ background: "rgba(239,80,35,0.2)" }} />}
                  <div>
                    <div className="font-black text-[28px] leading-[1] tracking-[-1px]" style={{ color: "#ef5023" }}>{stat.value}</div>
                    <div className="text-[12px] uppercase mt-[4px]" style={{ color: "#888" }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center pt-[4px]">
              <a
                href="/contact"
                className="font-bold text-[14px] px-[28px] h-[50px] rounded-[10px] inline-flex items-center text-white"
                style={{ background: "#ef5023", boxShadow: "0 8px 32px rgba(239,80,35,0.35)", textDecoration: "none" }}
              >
                Contact Our Experts
              </a>
              <a
                href="/case-study"
                className="font-semibold text-[14px] px-[28px] h-[50px] rounded-[10px] border inline-flex items-center text-white"
                style={{ borderColor: "rgba(255,255,255,0.3)", textDecoration: "none" }}
              >
                View Our Portfolio →
              </a>
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3000/about` — Hero should show dark background with `imgHero` on the right, gradient overlay, and orange accent text.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): dark hero section matching industries layout"
```

---

### Task 2: Mission & Vision section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace Mission & Vision section**

Find the `{/* Mission & Vision Section */}` comment block (currently lines 97–127) and replace with:

```tsx
        {/* ── S2: Mission & Vision ── */}
        <section className="px-4 sm:px-[80px] py-[56px]" style={{ background: "#fafafa", borderBottom: "1px solid #eee" }}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[80px]">
            {/* Mission */}
            <div className="flex flex-col gap-[16px]">
              <div className="bg-[#ef5023] w-12 h-12 rounded-xl flex items-center justify-center" style={{ boxShadow: "0 10px 15px -3px rgba(239,80,35,0.3), 0 4px 6px -4px rgba(239,80,35,0.3)" }}>
                <img alt="Mission icon" className="w-5 h-5 object-contain" src={imgMissionIcon} />
              </div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>OUR MISSION</p>
              <h2 className="font-black text-[#111] text-[36px] leading-[44px]" style={{ letterSpacing: "-1.5px" }}>Our Mission</h2>
              <p className="text-[15px] text-[#444] leading-[1.75]">
                Our mission is to empower businesses worldwide by providing access to elite offshore engineering talent. We aim to be the catalyst for digital transformation, ensuring that location is never a barrier to world-class innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-[16px]">
              <div className="bg-[#ef5023] w-12 h-12 rounded-xl flex items-center justify-center" style={{ boxShadow: "0 10px 15px -3px rgba(239,80,35,0.3), 0 4px 6px -4px rgba(239,80,35,0.3)" }}>
                <img alt="Vision icon" className="w-5 h-5 object-contain" src={imgVisionIcon} />
              </div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>OUR VISION</p>
              <h2 className="font-black text-[#111] text-[36px] leading-[44px]" style={{ letterSpacing: "-1.5px" }}>Our Vision</h2>
              <p className="text-[15px] text-[#444] leading-[1.75]">
                To be the most trusted global engineering hub, recognized for human-centric design, technical integrity, and sustainable growth. We envision a future where technology serves humanity through seamless collaboration.
              </p>
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify in browser**

`http://localhost:3000/about` — Mission & Vision section should show `#fafafa` background, `font-black` headings, orange labels above each heading.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): mission & vision section to industries style"
```

---

### Task 3: Timeline (Our Journey) section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace Timeline section**

Find the `{/* Timeline Section */}` comment block (lines 129–201) and replace with:

```tsx
        {/* ── S3: Our Journey ── */}
        <section className="py-[56px] overflow-hidden" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-[80px] flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[8px] items-center">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>HISTORY</p>
              <h2 className="font-black text-white text-[36px] leading-[44px] text-center" style={{ letterSpacing: "-1.5px" }}>Our Journey</h2>
              <p className="text-[15px] text-center" style={{ color: "#888" }}>A decade of growth and innovation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { year: "2014", title: "The Inception", body: "Founded in a small garage with a team of 3 passionate engineers focusing on mobile apps." },
                { year: "2017", title: "Going Global", body: "Expanded our footprint to the US and EU markets, growing our team to over 50 professionals." },
                { year: "2020", title: "Pivoting Resilience", body: "Successfully transitioned to a hybrid model, scaling our operations despite global challenges." },
                { year: "2024", title: "The Innovation Hub", body: "Launching our AI & Blockchain specialized labs, pushing the boundaries of what's possible." },
              ].map((item) => (
                <div
                  key={item.year}
                  className="flex flex-col gap-[12px] p-[24px]"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(239,80,35,0.18)", borderRadius: "16px" }}
                >
                  <div className="bg-[#ef5023] rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <span className="text-white text-[13px] font-bold">{item.year}</span>
                  </div>
                  <h3 className="font-black text-white text-[18px] leading-[1.4]">{item.title}</h3>
                  <p className="text-[14px] leading-[1.6]" style={{ color: "#888" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify in browser**

Timeline section should be dark `#0d0d0d` with `#1a1a1a` cards, orange year badges, white `font-black` titles.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): timeline section to industries dark style"
```

---

### Task 4: Team section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace Team section**

Find the `{/* Team Section */}` comment block (lines 203–299) and replace with:

```tsx
        {/* ── S4: Team ── */}
        <section className="py-[56px]" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-[80px] flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>THE TEAM</p>
              <h2 className="font-black text-white text-[36px] leading-[44px]" style={{ letterSpacing: "-1.5px" }}>The Hearts Behind the Code</h2>
              <p className="text-[15px] max-w-2xl" style={{ color: "#888" }}>
                Our offshore engineering center in Southeast Asia is more than just an office — it&apos;s a vibrant ecosystem of creatives and technical wizards.
              </p>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 rounded-2xl overflow-hidden h-[400px]">
                <img alt="InApps team large" className="w-full h-full object-cover" src={imgTeamLarge} />
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden h-[189px]">
                  <img alt="InApps team" className="w-full h-full object-cover" src={imgTeamTopRight} />
                </div>
                <div className="rounded-2xl overflow-hidden h-[189px]">
                  <img alt="InApps team" className="w-full h-full object-cover" src={imgTeamBottomRight} />
                </div>
              </div>
            </div>

            {/* Team members */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { img: imgAlex, name: "Alex Nguyen", role: "CEO & Founder" },
                { img: imgSarah, name: "Sarah Chen", role: "CTO" },
                { img: imgMark, name: "Mark Foster", role: "VP of Engineering" },
                { img: imgElena, name: "Elena Rodriguez", role: "Operations Director" },
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center gap-0">
                  <div className="border-2 border-[#ef5023] rounded-full p-0.5 w-24 h-24 overflow-hidden">
                    <img alt={member.name} className="w-full h-full object-cover rounded-full" src={member.img} />
                  </div>
                  <p className="font-black text-white text-base text-center mt-4">{member.name}</p>
                  <p className="text-[11px] text-center tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify in browser**

Team section: dark background, `font-black` heading, orange label "THE TEAM", photo grid unchanged, member names white `font-black`, roles orange uppercase.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): team section typography and label to industries style"
```

---

### Task 5: Core Values section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace Core Values section**

Find the `{/* Core Values Section */}` comment block (lines 301–345) and replace with:

```tsx
        {/* ── S5: Core Values ── */}
        <section className="px-4 sm:px-[80px] py-[56px]" style={{ background: "#fafafa", borderTop: "1px solid #e8e8e8" }}>
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[8px] items-center">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase" style={{ color: "#ef5023" }}>OUR VALUES</p>
              <h2 className="font-black text-[#111] text-[36px] leading-[44px] text-center" style={{ letterSpacing: "-1.5px" }}>What We Stand For</h2>
              <p className="text-[15px] text-center" style={{ color: "#888" }}>The values that guide every decision we make</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { img: imgHumanCentricIcon, title: "Human-Centric", body: "We prioritize the people who use our technology and the people who build it. Empathy is at our core." },
                { img: imgTechnicalIntegrityIcon, title: "Technical Integrity", body: "We don't cut corners. Quality, security, and scalability are non-negotiable in our development process." },
                { img: imgTransparentIcon, title: "Transparent Partnerships", body: "Open communication and honesty are the foundations of our long-lasting client relationships." },
              ].map((val) => (
                <div
                  key={val.title}
                  className="flex flex-col gap-[12px] p-[32px]"
                  style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "16px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                >
                  <img alt={`${val.title} icon`} className="h-8 object-contain object-left" src={val.img} />
                  <h3 className="font-black text-[#0a0a0a] text-[20px] leading-[1.35]">{val.title}</h3>
                  <p className="text-[15px] text-[#444] leading-[1.75]">{val.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
```

- [ ] **Step 2: Verify in browser**

Core Values: light `#fafafa` background, orange "OUR VALUES" label, `font-black` heading, white cards with `border-radius: 16px`.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): core values section to industries style"
```

---

### Task 6: CTA section (final)

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace CTA section**

Find the `{/* CTA Section */}` comment block (lines 347–365) and replace with:

```tsx
        {/* ── S6: Final CTA ── */}
        <section className="relative px-4 sm:px-[80px] py-[48px] overflow-hidden" style={{ background: "#0d0d0d" }}>
          {/* Constellation background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" fill="none">
              <line x1="80"  y1="20"  x2="200" y2="60"/>
              <line x1="200" y1="60"  x2="340" y2="30"/>
              <line x1="340" y1="30"  x2="480" y2="80"/>
              <line x1="480" y1="80"  x2="620" y2="40"/>
              <line x1="620" y1="40"  x2="760" y2="90"/>
              <line x1="760" y1="90"  x2="900" y2="50"/>
              <line x1="900" y1="50"  x2="1040" y2="80"/>
              <line x1="1040" y1="80" x2="1160" y2="40"/>
              <line x1="200" y1="60"  x2="260" y2="120"/>
              <line x1="480" y1="80"  x2="520" y2="140"/>
              <line x1="760" y1="90"  x2="800" y2="145"/>
              <line x1="340" y1="30"  x2="380" y2="110"/>
              <line x1="620" y1="40"  x2="660" y2="130"/>
              <line x1="900" y1="50"  x2="940" y2="140"/>
            </g>
            <g fill="white">
              <circle cx="80"   cy="20"  r="1.5" opacity="0.25"/>
              <circle cx="340"  cy="30"  r="1.8" opacity="0.28"/>
              <circle cx="620"  cy="40"  r="1.5" opacity="0.25"/>
              <circle cx="900"  cy="50"  r="1.8" opacity="0.28"/>
              <circle cx="1160" cy="40"  r="1.5" opacity="0.22"/>
              <circle cx="260"  cy="120" r="1.2" opacity="0.2"/>
              <circle cx="520"  cy="140" r="1.2" opacity="0.2"/>
              <circle cx="800"  cy="145" r="1.2" opacity="0.18"/>
            </g>
            <g fill="#ef5023">
              <circle cx="200"  cy="60" r="2.5" opacity="0.55"/>
              <circle cx="480"  cy="80" r="2"   opacity="0.5"/>
              <circle cx="760"  cy="90" r="2.5" opacity="0.5"/>
              <circle cx="1040" cy="80" r="2"   opacity="0.45"/>
            </g>
            <g fill="none" stroke="#ef5023">
              <circle cx="200" cy="60" r="6" strokeWidth="0.6" opacity="0.18"/>
              <circle cx="480" cy="80" r="6" strokeWidth="0.6" opacity="0.15"/>
              <circle cx="760" cy="90" r="6" strokeWidth="0.6" opacity="0.18"/>
            </g>
          </svg>

          <div className="relative max-w-[1200px] mx-auto" style={{ zIndex: 1 }}>
            <div
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px] sm:gap-[48px] px-[24px] sm:px-[56px] py-[36px] sm:py-[44px] rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(110deg, #1a1a1a 0%, #141414 100%)",
                border: "1px solid rgba(239,80,35,0.18)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute pointer-events-none blur-[80px]"
                style={{
                  left: "-60px", top: "50%", transform: "translateY(-50%)",
                  width: "240px", height: "240px",
                  background: "rgba(239,80,35,0.12)",
                  borderRadius: "50%",
                }}
              />

              <div className="relative flex flex-col gap-[8px] min-w-0" style={{ zIndex: 2 }}>
                <h2 className="font-black text-white text-[28px] leading-[36px]" style={{ letterSpacing: "-0.6px" }}>
                  Ready to scale your engineering team?
                </h2>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#888" }}>
                  Let&apos;s discuss how our offshore talent can help you reach your goals faster.
                </p>
              </div>

              <a
                href="/contact"
                className="relative shrink-0 z-10 inline-flex items-center gap-[10px] px-[28px] h-[48px] rounded-[12px] font-bold text-[14px] overflow-hidden text-white"
                style={{
                  background: "#ef5023",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(239,80,35,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                  whiteSpace: "nowrap",
                }}
              >
                <span>Contact Our Experts</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

CTA section: dark background with constellation SVG, inner card with gradient + orange border glow, `font-black` white heading, orange button with arrow.

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): replace CTA with industries-style constellation card"
```

---

### Task 7: Final check

**Files:**
- Read: `src/app/about/page.tsx`

- [ ] **Step 1: Full page review**

Open `http://localhost:3000/about` and scroll through all sections. Verify:
- [ ] Dark `#0d0d0d` root background
- [ ] Hero: image background right side, gradient overlay, orange accent, no quote card
- [ ] Mission & Vision: `#fafafa` bg, orange labels, `font-black` headings
- [ ] Timeline: dark bg, `#1a1a1a` cards, orange year badges
- [ ] Team: dark bg, orange labels, `font-black` names
- [ ] Core Values: `#fafafa` bg, white cards, `font-black` titles
- [ ] CTA: constellation SVG, gradient card, orange glow button

- [ ] **Step 2: Check for any remaining old `#ff4929` or `#f8f6f5` references**

```bash
grep -n "ff4929\|f8f6f5\|font-extrabold" src/app/about/page.tsx
```

Expected: no output (all replaced).

- [ ] **Step 3: Final commit if any cleanup needed**

```bash
git add src/app/about/page.tsx
git commit -m "style(about): cleanup remaining legacy color/font references"
```
