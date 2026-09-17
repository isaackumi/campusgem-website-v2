import type { Metadata } from "next";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { EventGrid } from "@/components/organisms/EventGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getEvents, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Campus GEM camps, gatherings, and moments to grow together.",
};

export default async function EventsPage() {
  const [page, events] = await Promise.all([
    getSitePage("events", {
      title: "Events",
      eyebrow: "Gatherings",
      description:
        "Camps, feasts, and seasonal meetings where we seek God together.",
      image: atmospheres.washB,
      slideshow: false,
      narrow: false,
      intro:
        "Mark your calendar and join us. Details for registration and venues are updated as each season approaches — including Eagles Camp, our annual camp meeting.",
      sections: [],
      primaryCta: { href: "/contact", label: "Get connected" },
      secondaryCta: { href: "/activities", label: "All activities" },
    }),
    getEvents(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.washB}
      slideshow={page.slideshow}
      outline="EVENTS"
      bleed
    >
      <StoryChapter
        eyebrow="This season"
        title="Gatherings on the calendar"
        outline="SEASON"
        intro={
          page.intro ||
          "Mark your calendar and join us. Details for registration and venues are updated as each season approaches."
        }
        mist
        fullWidthChildren
      >
        <EventGrid events={events} />
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
