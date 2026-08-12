import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { Navbar } from "@/components/organisms/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { MinistriesSection } from "@/components/sections/MinistriesSection";
import { SermonsSection } from "@/components/sections/SermonsSection";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
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
