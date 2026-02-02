import { CallToActionSection } from "@/components/home/callToActionSection";
import ChangelogTrustSection from "@/components/home/changelogTrustSection";
import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import ImpactStatsSection from "@/components/home/impactStatsSection";
import { InnovationOverview } from "@/components/home/innovationOverview";
import OurUSPs from "@/components/home/ourUSPs";
import StartupCreditGuaranteeSection from "@/components/home/startupCreditGuaranteeSection";
import StartupMarqueeSection from "@/components/home/startupMarqueeSection";
import StatsHighlight from "@/components/home/statsHighlight";
import StatsHighlightLayout from "@/components/home/statsHighlightGrid";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <InnovationOverview />
      <ImpactStats />
      <StartupCreditGuaranteeSection />
      <OurUSPs />
      <StatsHighlight />
      <StatsHighlightLayout />
      <StartupMarqueeSection />
      <ImpactStatsSection />
      <ChangelogTrustSection />
      <CallToActionSection />
    </main>
  );
}
