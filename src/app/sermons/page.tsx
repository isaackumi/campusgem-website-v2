import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { LinkCards } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getSermons, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Messages that form faith, discipleship, and Christ-centered living.",
};

const sermonBeats = [
  {
    title: "Hear the Word",
    body: "Teaching from camps, fellowships, and the Campus GEM pulpit that stirs faith.",
  },
  {
    title: "Practice what you hear",
    body: "Pair every message with Daily Confession and weekly Bible Study.",
  },
  {
    title: "Carry it onto campus",
    body: "Let the Word shape excellence, friendship, and calling where you live.",
  },
] as const;

export default async function SermonsPage() {
  const [page, sermons] = await Promise.all([
    getSitePage("sermons", {
      title: "Sermons",
      eyebrow: "Word",
      description:
        "Messages that stir faith and form Christ-centered leaders.",
      image: atmospheres.nebula,
      slideshow: false,
      narrow: false,
      intro:
        "Explore featured themes from Campus GEM gatherings. Full media archives continue to grow — reach out if you need a specific message.",
      sections: [],
      primaryCta: { href: "/contact", label: "Contact us" },
      secondaryCta: { href: "/daily-confession", label: "Daily confession" },
    }),
    getSermons(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.nebula}
      slideshow={page.slideshow}
      outline="WORD"
      bleed
    >
      <StoryChapter
        eyebrow="Listen"
        title="Messages that form leaders"
        outline="HEAR"
        intro={
          page.intro ||
          "Explore featured themes from Campus GEM gatherings. Full media archives continue to grow."
        }
        mist
      >
        <StoryArrow className="mb-2" />
        <p className="mt-6 max-w-md text-sm leading-6 text-ink-soft">
          Faith comes by hearing — then walking what you have heard.
        </p>
      </StoryChapter>

      <ScriptureBand
        verse="So then faith cometh by hearing, and hearing by the word of God."
        reference="Romans 10:17"
        outline="FAITH"
      />

      <StoryChapter
        eyebrow="In this story"
        title="How the Word walks with you"
        outline="WALK"
      >
        <StoryBeats beats={sermonBeats} />
      </StoryChapter>

      <StoryChapter
        mist
        eyebrow="Featured"
        title="Themes from the family"
        outline="THEME"
        fullWidthChildren
      >
        <SermonGrid sermons={sermons} />
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-ink py-16 text-white sm:py-20">
        <Image
          src={atmospheres.nebula}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <OutlineWord
          tone="light"
          className="right-0 top-4 text-[12vw] lg:text-[6rem]"
        >
          LIVE
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-200">Practice the Word</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Keep the message walking with you"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.15} className="mt-8">
            <LinkCards
              tone="dark"
              items={[
                {
                  href: "/daily-confession",
                  title: "Daily Confession",
                  description: "Speak life and walk in the Word each day.",
                },
                {
                  href: "/bible-study",
                  title: "Bible Study",
                  description: "Sundays at 7:00 PM GMT on Telegram.",
                },
                {
                  href: "/senior-pastor",
                  title: "Our Senior Pastor",
                  description: "Meet the founder who carries this Word.",
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
