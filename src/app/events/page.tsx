import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { LinkCards } from "@/components/molecules/PageBlocks";
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
        <div className="mb-8">
          <StoryArrow className="mb-3" />
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            Camps, feasts, and seasonal meetings — start with what is next.
          </p>
        </div>
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
                  description: "Ask about venues, registration, or starting a branch.",
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
