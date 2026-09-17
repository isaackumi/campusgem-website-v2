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
import { branchesContent } from "@/constants/pages";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "Campus GEM fellowships and gathering points across campuses and online.",
};

const branchBeats = [
  {
    title: "Find a fellowship",
    body: "Start with Legon, campus outreaches, or our online community channels.",
  },
  {
    title: "Belong where you are",
    body: "Whether on campus or afar, there is a way to stay connected to the family.",
  },
  {
    title: "Plant something new",
    body: "Sense a call to start a branch? Tell us — we will help you take the next step.",
  },
] as const;

export default async function BranchesPage() {
  const [page, settings] = await Promise.all([
    getSitePage("branches", {
      title: "Branches",
      eyebrow: "Presence",
      description: "Find a Campus GEM fellowship near you, or start one.",
      image: atmospheres.washB,
      slideshow: false,
      narrow: false,
      intro: branchesContent.intro,
      sections: branchesContent.locations.map((location) => ({
        title: location.name,
        body: location.detail,
      })),
      primaryCta: { href: "/contact", label: "Contact the team" },
      secondaryCta: { href: "/about", label: "Learn about us" },
    }),
    getSiteSettings(),
  ]);

  const locations = page.sections.length
    ? page.sections
    : branchesContent.locations.map((location) => ({
        title: location.name,
        body: location.detail,
      }));

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.washB}
      slideshow={page.slideshow}
      outline="MAP"
      bleed
    >
      <StoryChapter
        eyebrow="Where we gather"
        title="Fellowships near you"
        outline="NEAR"
        intro={
          page.intro ||
          "Campus GEM is growing across campuses and communities. Reach out to connect — or to start a new branch."
        }
        mist
      >
        <StoryArrow className="mb-8" />
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {locations.map((location, i) => (
            <ParagraphReveal key={location.title} delay={0.08 * i}>
              <p className="font-mono text-[11px] tracking-[0.28em] text-brand-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <Heading level={3} as="h3" className="mt-3 text-ink">
                {location.title}
              </Heading>
              <Text className="mt-3" muted>
                {location.body}
              </Text>
            </ParagraphReveal>
          ))}
        </div>
      </StoryChapter>

      <ScriptureBand
        verse="Go ye therefore, and teach all nations… and, lo, I am with you alway, even unto the end of the world."
        reference="Matthew 28:19–20"
        outline="GO"
      />

      <StoryChapter
        eyebrow="In this story"
        title="Presence with purpose"
        outline="HEART"
      >
        <StoryBeats beats={branchBeats} />
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
          HOME
        </OutlineWord>
        <div className="container-wide relative z-10 max-w-2xl">
          <ParagraphReveal>
            <p className="eyebrow text-brand-200">Primary address</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text={settings.address}
            className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.2} className="mt-5">
            <p className="text-base text-white/75">
              {settings.phone} · {settings.email}
            </p>
          </ParagraphReveal>
          <ParagraphReveal delay={0.28} className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="inverse">
              Contact the team
            </Button>
            <Button href="/about" variant="ghost">
              Learn about us
            </Button>
          </ParagraphReveal>
        </div>
      </section>

      <StoryChapter
        eyebrow="Plant"
        title="Want to start a branch?"
        outline="START"
        intro="Tell us about your campus or community and we will help you take the next step — with prayer, coaching, and the Campus GEM family behind you."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Get in touch</Button>
          <Button href="/activities" variant="secondary">
            See activities
          </Button>
        </div>
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
