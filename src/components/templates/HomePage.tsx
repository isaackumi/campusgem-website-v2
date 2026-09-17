import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { Navbar } from "@/components/organisms/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { FaceBleedSection } from "@/components/sections/FaceBleedSection";
import { MinistriesSection } from "@/components/sections/MinistriesSection";
import { StoryMomentSection } from "@/components/sections/StoryMomentSection";
import { getEvents, getMinistries } from "@/sanity/lib/content";

/**
 * Story-first landing:
 * hero → origin → faces → pull quote → pathways → gather → family → CTA
 */
export async function HomePage() {
  const [events, ministries] = await Promise.all([
    getEvents(),
    getMinistries(),
  ]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero support="A Christ-centered family where Youth belong, grow, and carry the flame beyond campus walls." />
        <AboutSection />
        <FaceBleedSection />
        <StoryMomentSection />
        <MinistriesSection ministries={ministries} />
        <EventsSection events={events} />
        <CommunitySection />
        <CtaSection bleed />
      </main>
      <Footer />
    </>
  );
}
