import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { visionContent } from "@/constants/pages";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Campus GEM’s vision, mission, and Christ-centered pathways for leadership.",
};

const visionBeats = [
  {
    title: "See the calling",
    body: "A clear vision: strategic, transformational leaders formed with Christ-centered principles.",
  },
  {
    title: "Walk the mission",
    body: "We pursue that vision through camps, outreaches, mentoring, and daily obedience.",
  },
  {
    title: "Hold the values",
    body: "Faith, excellence, and leadership — academic excellence as worship, lived out loud.",
  },
] as const;

export default async function VisionMissionPage() {
  const [page, settings] = await Promise.all([
    getSitePage("vision-mission", {
      title: "Mission & Vision",
      eyebrow: "About",
      description:
        "Raising strategic, transformational leaders with Christ-centered principles.",
      image: atmospheres.canyon,
      slideshow: false,
      narrow: false,
      sections: visionContent.pathways.map((item) => ({
        title: item,
        body: "A pathway that forms leaders and reaches communities.",
      })),
      primaryCta: { href: "/activities", label: "Explore activities" },
      secondaryCta: { href: "/contact", label: "Get in touch" },
    }),
    getSiteSettings(),
  ]);

  const pathways = page.sections.length
    ? page.sections.map((section) => section.title)
    : visionContent.pathways;

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.canyon}
      slideshow={page.slideshow}
      outline="VISION"
      bleed
    >
      <StoryChapter
        eyebrow="The chapter"
        title="Why we exist"
        outline="WHY"
        intro="Campus GEM was birthed from a call to increase acreage — beyond a single congregation into campuses, communities, and nations. Vision and mission keep that calling clear."
        mist
      >
        <StoryArrow className="mb-2" />
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-28">
        <Image
          src={atmospheres.nebula}
          alt=""
          fill
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <OutlineWord
          tone="light"
          className="left-1/2 top-6 -translate-x-1/2 text-[14vw] lg:text-[8rem]"
        >
          CALLING
        </OutlineWord>
        <div className="container-wide relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <ParagraphReveal>
              <p className="eyebrow text-brand-200">Vision</p>
              <p className="mt-4 text-lg leading-8 text-white/90">
                {settings.vision}
              </p>
            </ParagraphReveal>
            <ParagraphReveal delay={0.12}>
              <p className="eyebrow text-brand-200">Mission</p>
              <p className="mt-4 text-lg leading-8 text-white/90">
                {settings.mission}
              </p>
            </ParagraphReveal>
          </div>
        </div>
      </section>

      <ScriptureBand
        verse="Where there is no vision, the people perish: but he that keepeth the law, happy is he."
        reference="Proverbs 29:18"
        outline="SEE"
      />

      <StoryChapter
        eyebrow="In this story"
        title="How calling becomes culture"
        outline="HEART"
      >
        <StoryBeats beats={visionBeats} />
      </StoryChapter>

      <StoryChapter
        eyebrow="Foundation"
        title="Core values"
        outline="VALUES"
        intro={visionContent.valuesNote}
        mist
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {settings.coreValues.map((value: string, i: number) => (
            <ParagraphReveal key={value} delay={0.06 * i}>
              <li className="font-display border-t border-ink/10 pt-4 text-2xl tracking-tight text-ink">
                {value}
              </li>
            </ParagraphReveal>
          ))}
        </ul>
      </StoryChapter>

      <StoryChapter
        eyebrow="How we walk it"
        title="Pathways"
        outline="PATH"
        intro="We pursue the vision through practical pathways that form leaders and reach communities."
        image="/images/values.jpg"
        imageAlt="Campus GEM values in community"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {pathways.map((item, i) => (
            <ParagraphReveal key={item} delay={0.05 * i}>
              <li className="border-t border-ink/10 pt-3 text-ink-soft">
                <span className="mr-2 font-mono text-[11px] tracking-[0.2em] text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            </ParagraphReveal>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/activities">Explore activities</Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
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
        <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
          LIVE
        </OutlineWord>
        <div className="container-wide relative z-10 max-w-2xl">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Live it</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Vision becomes real in community"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
            <Button href="/senior-pastor">Meet our pastor</Button>
            <Button href="/about" variant="secondary">
              About Campus GEM
            </Button>
          </ParagraphReveal>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
