import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import PrjPageClient from "./Prjpage";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceBuyerProblems from "@/components/services/ServiceBuyerProblems";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceRightForYou from "@/components/services/ServiceRightForYou";
import ServiceWhatYouGet from "@/components/services/ServiceWhatYouGet";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceTeamStructure from "@/components/services/ServiceTeamStructure";
import ServiceQualityVetting from "@/components/services/ServiceQualityVetting";
import ServiceCaseStudy from "@/components/services/ServiceCaseStudy";
import ServiceComparison from "@/components/services/ServiceComparison";
import ServiceFaq from "@/components/services/ServiceFaq";
import ServiceCta from "@/components/services/ServiceCta";
import ServiceTrustedLogos from "@/components/services/ServiceTrustedLogos";
import ServiceTrustBadge from "@/components/services/ServiceTrustBadge";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import ServiceAICapabilities from "@/components/services/ServiceAICapabilities";
import ServiceTimeline from "@/components/services/ServiceTimeline";
import ServiceAIBuyerProblems from "@/components/services/ServiceAIBuyerProblems";
import ServiceAIWhatYouGet from "@/components/services/ServiceAIWhatYouGet";
import ServiceAIOverview from "@/components/services/ServiceAIOverview";
import ServiceAIWhyChoose from "@/components/services/ServiceAIWhyChoose";
import ServiceAITechStack from "@/components/services/ServiceAITechStack";
import ServiceAIIntegrations from "@/components/services/ServiceAIIntegrations";
import ServiceTestimonialsStatic from "@/components/services/ServiceTestimonialsStatic";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle ?? `${service.name} | InApps`,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // Custom layout for custom-software-development
  if (slug === "custom-software-development") {
    return <PrjPageClient service={service} />;
  }

  const { sections } = service;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Header />
      <main className="flex-1">
        {/* S1 - Hero */}
        <ServiceHero service={service} />
        {/* S1b - Client logos + review logos */}
        <ServiceTrustedLogos />
        {/* S1c - Trust badge stats (chỉ các trang opt-in, trừ ai-agent-development + dedicated-development-team hiển thị sau Why Choose) */}
        {service.showTrustBadge && service.slug !== "ai-agent-development" && service.slug !== "dedicated-development-team" && <ServiceTrustBadge />}
        {/* S2 - Pain points: khuấy động vấn đề trước khi giới thiệu solution */}
        {service.slug === "ai-agent-development"
          ? <ServiceAIBuyerProblems />
          : sections.buyerProblems.enabled && <ServiceBuyerProblems problems={sections.buyerProblems.problems} heading={sections.buyerProblems.heading} subtitle={sections.buyerProblems.subtitle} insightText={sections.buyerProblems.insightText} hideTrustBadge={sections.buyerProblems.hideTrustBadge} />
        }
        {/* S3 - Service Overview: giới thiệu solution sau khi user nhận ra pain */}
        {service.slug === "ai-agent-development"
          ? sections.serviceOverview.enabled && <ServiceAIOverview data={sections.serviceOverview} />
          : sections.serviceOverview.enabled && <ServiceOverview data={sections.serviceOverview} eyebrow="Service Overview" />
        }
        {/* S5 - AI Capabilities (ai-agent-development only) */}
        {service.slug === "ai-agent-development" && <ServiceAICapabilities />}
        {/* S6 - Why Choose InApps (ai-agent-development + dedicated-development-team) */}
        {(service.slug === "ai-agent-development" || service.slug === "dedicated-development-team") && <ServiceAIWhyChoose />}
        {/* S6b - Trust badge stats sau Why Choose (ai-agent-development + dedicated-development-team) */}
        {(service.slug === "ai-agent-development" || service.slug === "dedicated-development-team") && <ServiceTrustBadge background="#f5f5f5" />}
        {/* S4 - Is This Right For You: qualify user */}
        {service.slug !== "ai-agent-development" && sections.isRightForYou.enabled && <ServiceRightForYou checklist={sections.isRightForYou.checklist} sectionLabel={sections.isRightForYou.sectionLabel} heading={sections.isRightForYou.heading} items={sections.isRightForYou.items} />}
        {/* S5b - What's Included */}
        {service.slug !== "ai-agent-development" && sections.whatYouGet.enabled && <ServiceWhatYouGet items={sections.whatYouGet.items} heading={sections.whatYouGet.heading} />}
        {/* S7 - Timeline (ai-agent-development) or Process (other services) */}
        {service.slug === "ai-agent-development"
          ? <ServiceTimeline />
          : sections.process.enabled && <ServiceProcess steps={sections.process.steps} heading={sections.process.heading} subtitle={sections.process.subtitle} />
        }
        {/* S7b - Team Structure */}
        {sections.teamStructure.enabled && <ServiceTeamStructure roles={sections.teamStructure.roles} note={sections.teamStructure.note} subtitle={sections.teamStructure.subtitle} />}
        {/* S7c - Quality & Vetting */}
        {sections.qualityVetting.enabled && <ServiceQualityVetting stages={sections.qualityVetting.stages} metrics={sections.qualityVetting.metrics} subtitle={sections.qualityVetting.subtitle} heading={sections.qualityVetting.heading} eyebrow={sections.qualityVetting.eyebrow} />}
        {/* S7d - Comparison */}
        {sections.comparison.enabled && <ServiceComparison rows={sections.comparison.rows} competitorLabel={sections.comparison.competitorLabel} />}
        {/* S7e - Testimonials (dedicated-development-team only) — sau Comparison để chốt quyết định */}
        {service.slug === "dedicated-development-team" && <ServiceTestimonialsStatic />}
        {/* S8 - Integrations (ai-agent-development only) */}
        {service.slug === "ai-agent-development" && <ServiceAIIntegrations />}
        {/* S9 - Models, Frameworks & Infrastructure */}
        {service.slug === "ai-agent-development"
          ? <ServiceAITechStack />
          : service.techStack && service.techStack.length > 0 && <ServiceTechStack groups={service.techStack} />
        }
        {/* S10 - Case Studies */}
        {service.slug !== "ai-agent-development" && sections.caseStudy.enabled && sections.caseStudy.items.length > 0 && <ServiceCaseStudy data={sections.caseStudy} />}
        {/* S10 - FAQ */}
        {sections.faq.enabled && <ServiceFaq items={sections.faq.items} heading={sections.faq.heading} />}
        {/* S13 - Final CTA */}
        <ServiceCta serviceName={service.name} heading={service.cta?.heading} subtitle={service.cta?.subtitle} ctaLabel={service.cta?.ctaLabel} />
      </main>
      <Footer />
    </div>
  );
}