# Trusted By Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the text-only marquee in the "Trusted by" section with real client logo images, a centered headline, and soft fade edges.

**Architecture:** Single section edit in `src/app/page.tsx`. Remove the `clientLogos` text array and replace section 2 (~lines 214–232) with an image-based marquee. Logo images are served from `public/Media/client logo/`. No new files or components needed.

**Tech Stack:** Next.js (App Router), Tailwind CSS, inline `<style>` for keyframes (already present in the file)

---

### Task 1: Replace the Trusted By section

**Files:**
- Modify: `src/app/page.tsx` (lines 26–29 for data, lines 214–232 for JSX)

- [ ] **Step 1: Replace the `clientLogos` data array**

In `src/app/page.tsx`, find and replace the `clientLogos` array (around line 26):

```tsx
// REMOVE this:
const clientLogos = [
  "Accenture","Deloitte","Shopify","Twilio","Stripe",
  "HubSpot","Zendesk","Atlassian","DocuSign","Veeva",
];

// ADD this instead:
const clientLogos = [
  { name: "Prudential",        src: "/Media/client logo/prupential.png"        },
  { name: "Techcombank",       src: "/Media/client logo/techcombank.png"       },
  { name: "Lotte",             src: "/Media/client logo/lotte.png"             },
  { name: "Pegas",             src: "/Media/client logo/Pegas.png"             },
  { name: "Mega Market",       src: "/Media/client logo/mega market.png"       },
  { name: "TS",                src: "/Media/client logo/TS.png"                },
  { name: "KFC",               src: "/Media/client logo/kfc.png"               },
  { name: "Jollibee",          src: "/Media/client logo/Jollibee.png"          },
  { name: "Fahasa",            src: "/Media/client logo/fahasa.png"            },
  { name: "Fram",              src: "/Media/client logo/fram.png"              },
  { name: "ADM",               src: "/Media/client logo/ADM.png"               },
  { name: "Annam",             src: "/Media/client logo/annam.png"             },
  { name: "Workpac",           src: "/Media/client logo/workpac.png"           },
  { name: "Future Processing", src: "/Media/client logo/future processing.png" },
  { name: "HVS",               src: "/Media/client logo/HVS.png"               },
  { name: "SG",                src: "/Media/client logo/sg.png"                },
  { name: "Baiond",            src: "/Media/client logo/baiond.png"            },
  { name: "Simban",            src: "/Media/client logo/simban.png"            },
];
```

- [ ] **Step 2: Replace the section JSX**

Find the entire section 2 block (`{/* ── 2. CLIENT LOGOS MARQUEE ── */}`) and replace it:

```tsx
{/* ── 2. CLIENT LOGOS MARQUEE ──────────────────────────────────────── */}
<section className="bg-[#0a0a0a] border-y border-[#1f1f1f] py-[32px] overflow-hidden">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-[20px]">

    {/* Headline */}
    <p className="text-center text-[#888] text-[11px] font-bold tracking-[2px] uppercase"
       style={{ fontFamily: "'Inter', sans-serif" }}>
      Trusted by Engineering Teams Across{" "}
      <span className="text-[#ef5023]">15+ Countries</span>
    </p>

    {/* Divider */}
    <div className="h-[1px] bg-[#1f1f1f] mx-[80px]" />

    {/* Marquee */}
    <div className="relative overflow-hidden">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-[56px] animate-marquee whitespace-nowrap w-max py-[4px]">
        {[...clientLogos, ...clientLogos].map(({ name, src }, i) => (
          <img
            key={i}
            src={src}
            alt={name}
            className="h-[32px] w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ))}
      </div>
    </div>

  </div>
</section>
```

- [ ] **Step 3: Verify the existing `animate-marquee` keyframe is still present**

At the bottom of the file, the `<style>` block should already contain:

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 30s linear infinite; }
```

No change needed — just confirm it's there.

- [ ] **Step 4: Run the dev server and visually verify**

```bash
cd inapps-web && npm run dev
```

Open `http://localhost:3000`. Check:
- Headline "Trusted by Engineering Teams Across 15+ Countries" is centered, "15+ Countries" in orange
- Logos slide left continuously with no jump
- Fade masks visible on both edges
- Hovering a logo brightens it to full white

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: Trusted by section — real logos, headline, fade marquee"
```
