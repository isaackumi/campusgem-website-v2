import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Button } from "@/components/atoms/Button";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { LinkCards } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getConfessionContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Daily Confession",
  description: "Speak life over your day with Campus GEM’s daily confession.",
};

export default async function DailyConfessionPage() {
  const content = await getConfessionContent();

  let n = 0;
  const numberedSections = content.sections.map((section) => ({
    ...section,
    lines: section.lines.map((line) => {
      n += 1;
      return { line, number: n };
    }),
  }));

  return (
    <SitePage
      title={content.title}
      eyebrow={content.eyebrow}
      description={content.description}
      image={content.image || atmospheres.nebula}
      imageClassName="object-[center_40%]"
      slideshow={false}
      outline="FAITH"
      bleed
    >
      <StoryChapter
        eyebrow="Begin here"
        title="Speak these aloud each day"
        outline="SPEAK"
        intro={content.intro}
        mist
      >
        <div className="relative">
          <StoryArrow className="mb-2" />
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            Let faith rise as you agree with God’s promises for your life,
            family, and calling.
          </p>
        </div>
      </StoryChapter>

      <ScriptureBand
        verse="Death and life are in the power of the tongue: and they that love it shall eat the fruit thereof."
        reference="Proverbs 18:21"
        outline="SPEAK"
      />

      {numberedSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={
            sectionIndex % 2 === 1
              ? "relative overflow-x-hidden bg-mist py-16 sm:py-20"
              : "relative overflow-x-hidden bg-white py-16 sm:py-20"
          }
          aria-labelledby={`confession-${section.title}`}
        >
          {sectionIndex === 0 ? (
            <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
              WORD
            </OutlineWord>
          ) : null}
          <div className="container-wide relative z-10 max-w-3xl">
            <ParagraphReveal>
              <p className="eyebrow text-brand-600">
                {String(sectionIndex + 1).padStart(2, "0")}
              </p>
            </ParagraphReveal>
            <TextReveal
              as="h2"
              text={section.title}
              className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              delay={0.06}
            />
            <span id={`confession-${section.title}`} className="sr-only">
              {section.title}
            </span>
            {sectionIndex === 0 ? (
              <StoryArrow className="mt-4" />
            ) : null}
            <ol
              className="confession-list mt-8"
              start={section.lines[0]?.number}
            >
              {section.lines.map(({ line, number }, i) => (
                <ParagraphReveal
                  key={`${number}-${line.slice(0, 24)}`}
                  as="li"
                  delay={0.04 * Math.min(i, 6)}
                  className="grid grid-cols-[2.5rem_1fr] gap-3"
                >
                  <span
                    className="pt-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand-600"
                    aria-hidden
                  >
                    {String(number).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[1.15rem] leading-[1.65] tracking-[0.01em] text-ink sm:text-[1.3rem]">
                    {line}
                  </p>
                </ParagraphReveal>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-24">
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
          className="left-1/2 top-6 -translate-x-1/2 text-[14vw] lg:text-[7rem]"
        >
          AMEN
        </OutlineWord>
        <div className="container-wide relative z-10 max-w-3xl">
          <ParagraphReveal>
            <blockquote>
              <p className="font-display text-xl leading-relaxed tracking-tight text-white sm:text-3xl">
                {content.benediction}
              </p>
            </blockquote>
          </ParagraphReveal>
        </div>
      </section>

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
          LIVE
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Keep speaking</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Let the Word walk with you"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.15} className="mt-8">
            <LinkCards
              items={[
                {
                  href: "/bible-study",
                  title: "Bible Study",
                  description: "Sundays at 7:00 PM GMT on Telegram.",
                },
                {
                  href: "/sermons",
                  title: "Sermons",
                  description: "Messages that form faith and calling.",
                },
                {
                  href: "/camp",
                  title: "Eagles Camp",
                  description: "Our annual camp meeting — season 2026.",
                },
              ]}
            />
          </ParagraphReveal>
          <ParagraphReveal delay={0.25} className="mt-8">
            <Button href="/contact">Connect with us</Button>
          </ParagraphReveal>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
