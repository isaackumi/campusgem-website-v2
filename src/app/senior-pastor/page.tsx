import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Heading, Text } from "@/components/atoms/Typography";
import { LinkCards } from "@/components/molecules/PageBlocks";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getPastorContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Our Senior Pastor",
  description:
    "Meet Rev. Divine Asem (Divine Perez), founder and Senior Pastor of Campus GEM.",
};

export default async function SeniorPastorPage() {
  const pastor = await getPastorContent();

  return (
    <SitePage
      title="Our Senior Pastor"
      eyebrow="Leadership"
      description={`${pastor.name}, lovingly known as ${pastor.preferredName}.`}
      image={pastor.heroImage || pastor.portrait || atmospheres.washB}
      slideshow={false}
      outline="PASTOR"
      bleed
    >
      <StoryChapter
        eyebrow={pastor.title}
        title={pastor.name}
        outline="FOUNDER"
        intro={pastor.intro}
        image={pastor.portrait}
        imageAlt={pastor.name}
      >
        <div className="space-y-4">
          <ParagraphReveal immediate>
            <Text muted size="sm">
              Preferred name: {pastor.preferredName}
            </Text>
          </ParagraphReveal>
          <ParagraphReveal immediate delay={0.08}>
            <Text>{pastor.summary}</Text>
          </ParagraphReveal>
          <ParagraphReveal immediate delay={0.14}>
            <Text>{pastor.encounter}</Text>
          </ParagraphReveal>
          <ParagraphReveal immediate delay={0.2}>
            <Text>{pastor.calling}</Text>
          </ParagraphReveal>
          <ParagraphReveal immediate delay={0.28} className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact">Connect with us</Button>
            <Button href="/about" variant="secondary">
              About Campus GEM
            </Button>
          </ParagraphReveal>
        </div>
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-24">
        <Image
          src={atmospheres.nebula}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <OutlineWord
          tone="light"
          className="right-0 top-4 text-[14vw] lg:text-[7rem]"
        >
          WORD
        </OutlineWord>
        <div className="container-wide relative z-10 max-w-3xl">
          <ParagraphReveal>
            <blockquote>
              <p className="font-display text-2xl leading-snug tracking-tight text-white sm:text-4xl">
                “{pastor.quote}”
              </p>
              <Text className="mt-6 text-white/65" size="sm">
                The word that shaped the birth of Campus GEM
              </Text>
            </blockquote>
          </ParagraphReveal>
        </div>
      </section>

      <StoryChapter
        eyebrow="Timeline"
        title="The journey"
        outline="PATH"
        mist
      >
        <ol className="relative max-w-3xl space-y-0 border-l border-brand-200/80 pl-8 sm:pl-10">
          {pastor.timeline.map(
            (
              item: { year: string; title: string; body: string },
              index: number,
            ) => (
              <li key={item.title} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-600 ring-4 ring-mist sm:-left-[2.65rem]"
                />
                <ParagraphReveal delay={0.08 * index}>
                  <p className="eyebrow text-brand-700">
                    {String(index + 1).padStart(2, "0")} · {item.year}
                  </p>
                  <Heading
                    level={4}
                    as="h3"
                    className="font-display mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
                  >
                    {item.title}
                  </Heading>
                  <Text className="mt-3 max-w-xl" muted>
                    {item.body}
                  </Text>
                </ParagraphReveal>
              </li>
            ),
          )}
        </ol>
      </StoryChapter>

      <StoryChapter
        eyebrow="Focus"
        title="What he champions"
        outline="HEART"
      >
        <div className="max-w-3xl border-t border-ink/10">
          {pastor.focuses.map(
            (item: { title: string; body: string }, i: number) => (
              <ParagraphReveal key={item.title} delay={0.08 * i}>
                <div className="grid gap-3 border-b border-ink/10 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Heading
                      level={3}
                      as="h3"
                      className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
                    >
                      {item.title}
                    </Heading>
                    <Text className="mt-2 max-w-xl" muted>
                      {item.body}
                    </Text>
                  </div>
                </div>
              </ParagraphReveal>
            ),
          )}
        </div>
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
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Continue</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Keep walking the story"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.15} className="mt-8">
            <LinkCards
              items={[
                {
                  href: "/vision-mission",
                  title: "Mission & Vision",
                  description: "The calling that guides the ministry he founded.",
                },
                {
                  href: "/daily-confession",
                  title: "Daily Confession",
                  description: "Speak life and walk in the Word each day.",
                },
                {
                  href: "/camp",
                  title: "Eagles Camp",
                  description: "Our annual camp meeting — season 2026.",
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
