import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { Navbar } from "@/components/organisms/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { MinistriesSection } from "@/components/sections/MinistriesSection";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SermonsSection } from "@/components/sections/SermonsSection";
import { getSiteSettings } from "@/sanity/lib/content";

export async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero
          tagline={settings.tagline}
          headline={settings.homeHeadline}
          support={settings.homeSupport}
        />
        <ProofStrip items={settings.trustProof} />
        <AboutSection />
        <EventsSection />
        <MinistriesSection />
        <SermonsSection />
        <CommunitySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
