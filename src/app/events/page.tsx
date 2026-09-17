import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { LinkCards } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
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

const eventBeats = [
  {
    title: "Mark the calendar",
    body: "Camps, feasts, and seasonal meetings — start with what is next on the list.",
  },
  {
    title: "Come ready to gather",
    body: "Every event is a doorway into worship, friendship, and formation.",
  },
  {
    title: "Invite someone with you",
    body: "Bring a friend from campus — belonging grows when we arrive together.",
  },
] as const;

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
        "Mark your calendar and join us. Details for registration and venues update as each season approaches — including Eagles Camp, our annual camp meeting.",
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
      >
        <StoryArrow className="mb-2" />
        <p className="mt-6 max-w-md text-sm leading-6 text-ink-soft">
          From Eagles Camp to Love Feasts — each date is a chapter waiting for
          you.
        </p>
      </StoryChapter>

      <ScriptureBand
        verse="Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another."
        reference="Hebrews 10:25"
        outline="GATHER"
      />

      <StoryChapter
        eyebrow="In this story"
        title="How to walk into an event"
        outline="STEP"
      >
        <StoryBeats beats={eventBeats} />
      </StoryChapter>

      <StoryChapter
        mist
        eyebrow="Upcoming"
        title="What is next"
        outline="DATE"
        fullWidthChildren
      >
        <EventGrid events={events} />
      </StoryChapter>

      <section className="relative overflow-x-hidden py-16 sm:py-20">
        <Image
          src={atmospheres.washA}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/85" />
        <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
          NEXT
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Keep going</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="More ways to gather"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.15} className="mt-8">
            <LinkCards
              items={[
                {
                  href: "/camp",
                  title: "Eagles Camp",
                  description: "Our annual camp meeting — season 2026.",
                },
                {
                  href: "/activities",
                  title: "All activities",
                  description: "Love Feasts, mentoring, ICT, and more.",
                },
                {
                  href: "/contact",
                  title: "Get connected",
                  description:
                    "Ask about venues, registration, or starting a branch.",
                },
              ]}
            />
          </ParagraphReveal>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
