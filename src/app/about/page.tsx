import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Text } from "@/components/atoms/Typography";
import { ImageGrid, LinkCards } from "@/components/molecules/PageBlocks";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { aboutContent, visionContent } from "@/constants/pages";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are, why we exist, and the values that shape Campus GEM.",
};

const gatheringLinks: Record<string, string> = {
  "Eagles Camp": "/camp",
  "Love Feasts": "/love-feast",
  "Mentoring Hub": "/mentoring-hub",
};

export default async function AboutPage() {
  const [page, settings] = await Promise.all([
    getSitePage("about", {
      title: "About Campus GEM",
      eyebrow: "Who we are",
      description:
        "A Christ-centered movement raising strategic leaders on campus and beyond.",
      image: atmospheres.canyon,
      slideshow: true,
      narrow: false,
      intro: aboutContent.whoWeAre,
      sections: aboutContent.highlights.map((item) => ({
        title: item.title,
        body: item.body,
      })),
      primaryCta: { href: "/contact", label: "Contact us" },
      secondaryCta: { href: "/give", label: "Partner with us" },
    }),
    getSiteSettings(),
  ]);

  const highlights = aboutContent.highlights;

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      outline="ABOUT"
      image={page.image || atmospheres.canyon}
      slideshow={page.slideshow}
      bleed
    >
      <StoryChapter
        eyebrow="Origin"
        title="Who we are"
        outline="ORIGIN"
        intro={page.intro || settings.aboutIntro}
        image="/images/camp/camp-moment-06.jpg"
        imageAlt="Campus GEM members at Eagles Camp"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/senior-pastor">Meet our pastor</Button>
          <Button href="/vision-mission" variant="secondary">
            Mission & Vision
          </Button>
        </div>
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-28">
        <Image
          src={atmospheres.nebula}
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <OutlineWord
          tone="light"
          className="left-1/2 top-8 -translate-x-1/2 text-[14vw] lg:text-[8rem]"
        >
          CALLING
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-200">Calling</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Vision & mission"
            className="font-display mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl"
            delay={0.08}
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
            <ParagraphReveal delay={0.15}>
              <p className="eyebrow text-brand-200">Vision</p>
              <p className="mt-3 text-base leading-7 text-white/85">
                {settings.vision}
              </p>
            </ParagraphReveal>
            <ParagraphReveal delay={0.25}>
              <p className="eyebrow text-brand-200">Mission</p>
              <p className="mt-3 text-base leading-7 text-white/85">
                {settings.mission}
              </p>
            </ParagraphReveal>
          </div>
          <ParagraphReveal delay={0.35} className="mt-12">
            <p className="eyebrow text-brand-200">Core values</p>
            <p className="font-display mt-3 text-2xl tracking-tight text-white sm:text-3xl">
              {settings.coreValues.join(" · ")}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              {visionContent.valuesNote}
            </p>
          </ParagraphReveal>
        </div>
      </section>

      <StoryChapter
        eyebrow="Gatherings"
        title="How we gather"
        outline="GATHER"
        intro="Camps, feasts, mentoring, and campus life — the rhythms that form leaders."
        mist
      >
        <div className="max-w-3xl border-t border-ink/10">
          {highlights.map((item, i) => {
            const href = gatheringLinks[item.title];
            const inner = (
              <>
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-brand-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand-700 sm:text-2xl">
                    {item.title}
                  </h3>
                  <Text className="mt-2 max-w-xl" muted>
                    {item.body}
                  </Text>
                </div>
                {href ? (
                  <span
                    aria-hidden
                    className="hidden shrink-0 font-display text-lg text-brand-600 transition-transform duration-200 group-hover:translate-x-1 sm:block"
                  >
                    →
                  </span>
                ) : null}
              </>
            );

            return (
              <ParagraphReveal key={item.title} delay={0.08 * i}>
                {href ? (
                  <Link
                    href={href}
                    className="group grid gap-3 border-b border-ink/10 py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-8"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="grid gap-3 border-b border-ink/10 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                    {inner}
                  </div>
                )}
              </ParagraphReveal>
            );
          })}
        </div>
      </StoryChapter>

      <StoryChapter
        eyebrow="Life together"
        title="Moments that mark us"
        outline="LIFE"
        intro="Scenes from camps, feasts, and fellowship across the Campus GEM family."
        fullWidthChildren
      >
        <ImageGrid
          images={[...lifeMoments].slice(0, 8)}
          altPrefix="Campus GEM life"
        />
      </StoryChapter>

      <section className="relative overflow-x-hidden py-20 sm:py-24">
        <Image
          src={atmospheres.washA}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/85" />
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Continue</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Keep reading the story"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.2} className="mt-10">
            <LinkCards
              items={[
                {
                  href: "/vision-mission",
                  title: "Mission & Vision",
                  description: "The calling that guides everything we do.",
                },
                {
                  href: "/senior-pastor",
                  title: "Our Senior Pastor",
                  description: "Meet Rev. Divine Asem (Divine Perez).",
                },
                {
                  href: "/camp",
                  title: "Eagles Camp",
                  description: "Our annual camp meeting — season 2026.",
                },
                {
                  href: "/daily-confession",
                  title: "Daily Confession",
                  description: "Speak life — declare God’s Word each day.",
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
