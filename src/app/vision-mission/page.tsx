import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal } from "@/components/molecules/TextReveal";
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
          {pathways.map((item) => (
            <li
              key={item}
              className="border-t border-ink/10 pt-3 text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
