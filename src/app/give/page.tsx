import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { Heading, Text } from "@/components/atoms/Typography";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getGiveContent, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Campus GEM camp meetings, academic help for needy Youth, and Christ-centered campus discipleship.",
};

const giveBeats = [
  {
    title: "You give",
    body: "A seed toward camps, mentoring, and Youth who need a hand.",
  },
  {
    title: "We gather",
    body: "Eagles Camp and other meetings stay open for young leaders.",
  },
  {
    title: "They grow",
    body: "Faith, excellence, and calling take root on campus and beyond.",
  },
] as const;

export default async function GivePage() {
  const [page, settings] = await Promise.all([
    getGiveContent(),
    getSiteSettings(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.nebula}
      outline="GIVE"
      slideshow={false}
      bleed
    >
      <StoryChapter
        eyebrow="Partnership"
        title="Why your gift matters"
        outline="GIFT"
        intro={page.intro}
        image={page.contentImage}
        imageAlt="Youth gathered at Campus GEM camp"
      >
        <div className="relative pt-2">
          <StoryArrow className="absolute -top-2 left-0 sm:left-8" />
          <p className="eyebrow ml-2 mt-14 text-brand-600 sm:ml-12">
            Generosity in motion
          </p>
        </div>
      </StoryChapter>

      <ScriptureBand
        verse="Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
        reference="2 Corinthians 9:7"
        outline="SEED"
      />

      <StoryChapter
        eyebrow="In this story"
        title="How partnership travels"
        outline="PATH"
        mist
      >
        <StoryBeats beats={giveBeats} />
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-28">
        <Image
          src={atmospheres.nebula}
          alt=""
          fill
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <OutlineWord
          tone="light"
          className="left-1/2 top-6 -translate-x-1/2 text-[16vw] lg:text-[8rem]"
        >
          CAMP
        </OutlineWord>
        <StoryArrow
          tone="light"
          flip
          className="absolute right-8 top-24 hidden sm:block lg:right-16"
        />
        <div className="container-wide relative z-10 max-w-3xl">
          <ParagraphReveal>
            <p className="eyebrow text-brand-200">Priority need</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text={page.highlightTitle}
            className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.2} className="mt-6">
            <p className="text-base leading-7 text-white/85">{page.highlight}</p>
          </ParagraphReveal>
          <ParagraphReveal delay={0.28} className="mt-8 flex flex-wrap gap-3">
            <Button
              href={`mailto:${settings.email}?subject=I%20want%20to%20give`}
              variant="inverse"
            >
              Contact us to give
            </Button>
            <Button href="/camp" variant="ghost">
              About Eagles Camp
            </Button>
          </ParagraphReveal>
        </div>
      </section>

      <StoryChapter
        eyebrow="Stewardship"
        title="Where your gift goes"
        outline="CARE"
      >
        <div className="grid gap-10 sm:grid-cols-2">
          {page.focuses.map((item, i) => (
            <ParagraphReveal key={item.title} delay={0.08 * i}>
              <Heading level={3} as="h3" className="text-ink">
                {item.title}
              </Heading>
              <Text className="mt-3" muted>
                {item.body}
              </Text>
            </ParagraphReveal>
          ))}
        </div>
        <ParagraphReveal
          delay={0.2}
          className="mt-12 space-y-8 border-t border-ink/10 pt-10"
        >
          <div>
            <Heading level={3} as="h3" className="text-ink">
              Supporting needy Youth
            </Heading>
            <Text className="mt-3" muted>
              {page.needyNote}
            </Text>
          </div>
          <div>
            <Heading level={3} as="h3" className="text-ink">
              How to give
            </Heading>
            <Text className="mt-3" muted>
              {page.howToGive}
            </Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href={`mailto:${settings.email}?subject=I%20want%20to%20give`}
            >
              Email {settings.email}
            </Button>
            <Button href={settings.phoneHref} variant="secondary">
              Call {settings.phone}
            </Button>
          </div>
        </ParagraphReveal>
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
