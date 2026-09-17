import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { LinkCards } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { HallOfFameExplorer } from "@/components/organisms/HallOfFameExplorer";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { activityPages } from "@/constants/pages";
import { getHallOfFameContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description:
    "Honoring graduates whose faith and academic excellence — as worship — inspire the next generation.",
};

export default async function HallOfFamePage() {
  const page = await getHallOfFameContent();
  const local = activityPages.hallOfFame;

  return (
    <SitePage
      title={local.title}
      eyebrow={local.eyebrow}
      description={local.description}
      image={page.image || local.image}
      outline="HONOR"
      slideshow={false}
      bleed
    >
      <StoryChapter
        eyebrow="Legacy"
        title={local.storyTitle}
        outline="LIGHT"
        intro={local.body}
        mist
      >
        <div className="mb-2">
          <StoryArrow />
        </div>
        <ParagraphReveal delay={0.12} className="mt-8 max-w-xl">
          <p className="font-display text-xl leading-snug tracking-tight text-brand-700 sm:text-2xl">
            {local.conviction}
          </p>
        </ParagraphReveal>
        <p className="mt-6 max-w-md text-sm leading-6 text-ink-soft">
          {page.entries.length} honored — portraits of faith, excellence, and
          perseverance.
        </p>
      </StoryChapter>

      <ScriptureBand
        verse={local.scripture.verse}
        reference={local.scripture.reference}
        outline="STAND"
      />

      <StoryChapter
        eyebrow="In this story"
        title="What this chapter holds"
        outline="HEART"
      >
        <StoryBeats beats={local.beats} />
      </StoryChapter>

      <StoryChapter
        mist
        eyebrow="Portraits"
        title="Walk among the honored"
        outline="FACES"
        fullWidthChildren
      >
        <HallOfFameExplorer entries={page.entries} />
      </StoryChapter>

      <section className="relative overflow-x-hidden py-16 sm:py-20">
        <Image
          src={atmospheres.canyon}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/85" />
        <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
          RACE
        </OutlineWord>
        <div className="container-wide relative z-10 max-w-2xl">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Take a step</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Let courage rise for your own race"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.18} className="mt-5">
            <p className="text-base leading-7 text-ink-soft">{local.closing}</p>
          </ParagraphReveal>
          <ParagraphReveal delay={0.28} className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Connect with us</Button>
            <Button href="/activities" variant="secondary">
              All activities
            </Button>
          </ParagraphReveal>
        </div>
      </section>

      <StoryChapter eyebrow="Also explore" title="Keep walking" outline="MORE">
        <LinkCards
          items={[
            {
              href: "/camp",
              title: "Eagles Camp",
              description: "Our annual camp meeting — season 2026.",
            },
            {
              href: "/mentoring-hub",
              title: "Mentoring Hub",
              description: "Paired with mentors for the next level.",
            },
            {
              href: "/give",
              title: "Partner / Give",
              description: "Help Youth finish well in faith and excellence.",
            },
          ]}
        />
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
