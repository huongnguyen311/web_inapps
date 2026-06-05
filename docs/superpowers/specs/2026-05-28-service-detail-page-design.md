# Service Detail Page — Design Spec

**Date:** 2026-05-28  
**Status:** Approved  
**Scope:** Dynamic service detail page for all 15 services on inapps-web

---

## 1. Goal

Create a single reusable service detail page template that:
- Serves all 15 services via a dynamic route (`/services/[slug]`)
- Is pre-rendered at build time for SEO performance
- Allows each section to be toggled on/off per service (CMS-style via data file)
- Follows the existing site's dark/light alternating section pattern and `#ef5023` accent palette

---

## 2. Architecture

### Route
```
src/app/services/[slug]/page.tsx
```

Single page component. Uses `generateStaticParams()` to pre-render all 15 slugs at build time.

### Data
```
src/data/services.ts
```

One TypeScript file exporting a `ServiceData[]` array. Each object fully describes one service. The page imports this, finds the matching slug, and renders.

### TypeScript Interface

```ts
interface ServiceData {
  slug: string
  name: string
  category: string          // e.g. "AI & Automation"
  categoryIcon: string      // emoji
  heroTagline: string       // short subheading below name
  heroDescription: string   // 1–2 sentence hero paragraph
  heroIllo: string          // path to /services/[slug].svg

  sections: {
    trustedLogos:     SectionToggle
    serviceOverview:  SectionToggle & ServiceOverviewData
    whatYouGet:       SectionToggle & { items: FeatureItem[] }
    pricingTable:     SectionToggle & { tiers: PricingTier[] }
    isRightForYou:    SectionToggle & { checklist: string[] }
    techStack:        SectionToggle & { groups: TechGroup[] }
    whyChooseUs:      SectionToggle & { highlights: WhyItem[] }
    caseStudy:        SectionToggle & CaseStudyData
    testimonials:     SectionToggle & { items: Testimonial[] }
    faq:              SectionToggle & { items: FaqItem[] }
    relatedServices:  SectionToggle & { slugs: string[] }
  }
}

interface SectionToggle { enabled: boolean }

interface ServiceOverviewData {
  image: string             // path to overview image
  title: string
  body: string              // rich paragraph (markdown-safe)
  stats?: { value: string; label: string }[]  // optional 2–3 stats
}

interface FeatureItem {
  icon: string              // emoji
  title: string
  description: string
}

interface PricingTier {
  name: string              // e.g. "Starter", "Growth", "Enterprise"
  highlight: boolean        // true = visually elevated
  description: string
  differentiators: string[] // bullet list of what makes this tier distinct
  cta: string               // e.g. "Talk to us"
}

interface TechGroup {
  label: string             // e.g. "Frameworks"
  tags: string[]
}

interface WhyItem {
  value: string             // e.g. "200+"
  label: string             // e.g. "Engineers on staff"
  description: string
}

interface CaseStudyData {
  client: string
  industry: string
  title: string
  description: string
  link: string
  stats: { value: string; label: string }[]
}

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

interface FaqItem {
  question: string
  answer: string
}
```

---

## 3. Sections

All 13 sections render in this order. Each has an `enabled` flag — if `false`, the section is omitted entirely from the rendered page.

### Section 1 — Hero
**Background:** Dark (`#0d0d0d` → `#111`, gradient)  
**Layout:** 2-column — text left, service SVG illustration right

Content:
- Breadcrumb: `Services › [Category] › [Service Name]`
- Category badge (orange pill with pulsing dot)
- `<h1>` service name with accent color on key word
- Hero description paragraph
- Two CTAs: primary "Start a Project" (orange) + ghost "See Case Study"
- Right: service illustration from `/public/services/[slug].svg`

### Section 2 — Trusted By Logos
**Background:** White (`#ffffff`)  
**Layout:** Single centered row of client logos  

Reuses the `clientLogos` array from `src/data/clients.ts` (to be extracted from `src/app/page.tsx` during implementation). Compact version — logos at reduced opacity, no scrolling carousel. Centered with label "Trusted by 500+ companies worldwide".

### Section 3 — Service Overview
**Background:** Light (`#fafafa`)  
**Layout:** 2-column editorial — image always left, text right

Content:
- Section eyebrow label
- `<h2>` overview title
- Multi-paragraph body text (detailed description of the service)
- Optional stats row: 2–3 key numbers (e.g. "50+ agents built", "12 industries")
- Image: service-specific photo or illustration

### Section 4 — What You Get
**Background:** White (`#ffffff`)  
**Layout:** 3×2 grid of icon cards (up to 6 items)

Each card: emoji icon in orange-tinted box + bold title + 2-line description.  
Card style: `background: #fff4ef`, `border: 1px solid #fad4c0`, `border-radius: 10px`.

### Section 5 — Pricing Table
**Background:** Dark (`#111111`)  
**Layout:** 3-column tier cards (Starter / Growth / Enterprise)

No hard prices displayed — "Contact us for pricing" model.  
Middle card (highlight: true) is visually elevated (translateY up, orange background).  
Each tier shows: name, description, list of differentiators, CTA button.  
Follows exact same visual pattern as the Engagement Models section on `/services`.

### Section 6 — Is This Right for You?
**Background:** Warm light (`#fafafa`)  
**Layout:** Centered single-column checklist, max-width 600px

- Section heading centered
- 3–4 orange-branded checklist rows (`background: #fff4ef`, `border: 1px solid #fad4c0`)
- Each row: orange circle checkmark + descriptive statement
- Final dark nudge row (`background: #111`): "If 2+ of these describe you — let's talk." + orange link

### Section 7 — Tech Stack
**Background:** Dark (`#111111`)  
**Layout:** 4-column group grid

Each group: uppercase label + row of tag pills.  
Tag pill style: `background: #1a1a1a`, `border: 1px solid #222`, `color: #aaa`.  
Hover: border and text shift to `#ef5023`.

### Section 8 — Why Choose Us
**Background:** White (`#ffffff`)  
**Layout:** 3-column highlight cards (compact, not full section)

Each card: large stat/value in orange, bold label, 1-sentence description.  
Example values: "200+ Engineers", "12 Years", "500+ Projects".  
This is a condensed version — not the full homepage treatment.

### Section 9 — Case Study
**Background:** Dark (`#111111`)  
**Layout:** 2-column card — text left, 3-stat grid right

Left: eyebrow label, client name + industry, bold title, description paragraph, "Read full case study →" link.  
Right: 3 stat boxes (value + label) with subtle dark card backgrounds.  
Outer card: `background: linear-gradient(110deg, #1a1a1a, #141414)`, `border: 1px solid rgba(239,80,35,0.18)`.

### Section 10 — Testimonials
**Background:** Light (`#fafafa`)  
**Layout:** 1–2 quote cards side by side (or single centered if only 1)

Each card: large `"` quote mark in orange, quote text, avatar image (optional), author name, role, company.  
Card style: white background, subtle border, rounded corners.

### Section 11 — FAQ
**Background:** White (`#ffffff`)  
**Layout:** Single-column accordion, max-width 720px, centered

Each item: question row with expand/collapse chevron. Answer slides open on click.  
Closed state: `border-bottom: 1px solid #f0f0f0`.  
Open state: question text turns `#ef5023`, answer text in `#555`.  
4–6 questions per service.

### Section 12 — Related Services
**Background:** Light (`#fafafa`)  
**Layout:** 3-column horizontal link cards

Each card: emoji icon + service name + category label + orange arrow `→`.  
Card style: `background: #fff4ef`, `border: 1px solid #fad4c0`.  
Links to `/services/[slug]` of the related service.  
`relatedServices.slugs` array references other service slugs from `services.ts`.

### Section 13 — Bottom CTA Strip
**Background:** Dark (`#0d0d0d`)  
**Layout:** Horizontal strip — text left, button right

Heading: "Ready to build your [service name]?"  
Subtext: "Tell us about your project — no pitch, no obligation."  
CTA button: "Talk to a Solutions Consultant →" in orange.  
Left ambient glow effect (same as existing `/services` page CTA).  
Links to `/contact`.

---

## 4. Dark/Light Alternation

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | Dark |
| 2 | Trusted By Logos | White |
| 3 | Service Overview | Light (#fafafa) |
| 4 | What You Get | White |
| 5 | Pricing Table | Dark |
| 6 | Is This Right for You? | Light (#fafafa) |
| 7 | Tech Stack | Dark |
| 8 | Why Choose Us | White |
| 9 | Case Study | Dark |
| 10 | Testimonials | Light (#fafafa) |
| 11 | FAQ | White |
| 12 | Related Services | Light (#fafafa) |
| 13 | Bottom CTA | Dark |

---

## 5. File Structure

```
src/
  app/
    services/
      page.tsx                  # existing services list (unchanged)
      [slug]/
        page.tsx                # NEW — service detail page
  data/
    services.ts                 # NEW — all 15 service data objects
    clients.ts                  # NEW — extracted from page.tsx (clientLogos array)
  components/
    services/
      ServiceHero.tsx           # NEW
      ServiceTrustedLogos.tsx   # NEW
      ServiceOverview.tsx       # NEW
      ServiceWhatYouGet.tsx     # NEW
      ServicePricingTable.tsx   # NEW
      ServiceRightForYou.tsx    # NEW
      ServiceTechStack.tsx      # NEW
      ServiceWhyChooseUs.tsx    # NEW
      ServiceCaseStudy.tsx      # NEW
      ServiceTestimonials.tsx   # NEW
      ServiceFaq.tsx            # NEW
      ServiceRelated.tsx        # NEW
      ServiceCta.tsx            # NEW
```

Each section is its own component receiving its data slice as props. The `[slug]/page.tsx` orchestrates them.

---

## 6. generateStaticParams

```ts
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}
```

All 15 service pages are pre-rendered at build time. No runtime data fetching required.

---

## 7. 15 Services (slugs)

From `src/app/services/page.tsx`:

| Slug | Name | Category |
|------|------|----------|
| `ai-agent-development` | AI Agent Development | AI & Automation |
| `agentic-workflow-automation` | Agentic Workflow Automation | AI & Automation |
| `generative-ai-integration` | Generative AI Integration | AI & Automation |
| `ai-development-services` | AI Development Services | AI & Automation |
| `custom-software-development` | Custom Software Development | Engineering |
| `web-development` | Web Development | Engineering |
| `mobile-app-development` | Mobile App Development | Engineering |
| `saas-development` | SaaS Development | Engineering |
| `cloud-devops` | Cloud & DevOps | Engineering |
| `mvp-proof-of-concept` | MVP / Proof of Concept | Engineering |
| `offshore-dev-center` | Offshore Dev Center | Engagement Models |
| `staff-augmentation` | Staff Augmentation | Engagement Models |
| `project-based-dev` | Project-Based Dev | Engagement Models |
| `qa-testing` | QA & Testing | Quality & Design |
| `ui-ux-design` | UI/UX Design | Quality & Design |

---

## 8. Design Tokens (inherited from existing site)

```
accent:       #ef5023
bg-dark:      #0d0d0d / #111111
bg-light:     #ffffff / #fafafa
bg-card:      #fff4ef
border-card:  #fad4c0
text-primary: #111111
text-muted:   #888888
text-faint:   #555555
```

---

## 9. Out of Scope

- CMS integration (data is static TypeScript, not a headless CMS)
- Animations / scroll effects
- Blog/articles section
- Video embed section
- i18n / multi-language
- Contact form embedded in page (CTA links to `/contact`)
