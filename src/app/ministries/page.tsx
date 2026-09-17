import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ImageGrid, LinkCards } from "@/components/molecules/PageBlocks";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { MinistryGrid } from "@/components/organisms/MinistryGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { getMinistries, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Campus GEM ministries: camps, love feasts, mentoring, and ICT training.",
};

export default async function MinistriesPage() {
  const [page, ministries] = await Promise.all([
    getSitePage("ministries", {
      title: "Ministries",
      eyebrow: "Serve & grow",
      description:
        "Pathways to learn, connect, and grow as Christ-centered leaders.",
      image: atmospheres.canyon,
      slideshow: false,
      narrow: false,
      intro:
        "Each ministry expression is a door into the Campus GEM family. Explore the pathways below and take a step toward deeper formation.",
      sections: [],
      primaryCta: { href: "/contact", label: "Talk with us" },
      secondaryCta: { href: "/activities", label: "See activities" },
    }),
    getMinistries(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.canyon}
      slideshow={page.slideshow}
      outline="SERVE"
      bleed
    >
      <StoryChapter
        eyebrow="Pathways"
        title="Doors into the family"
        outline="PATH"
        intro={
          page.intro ||
          "Each ministry expression is a door into the Campus GEM family. Explore the pathways below and take a step toward deeper formation."
        }
        mist
        fullWidthChildren
      >
        <div className="mb-8">
          <StoryArrow className="mb-3" />
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            Choose a pathway — camps, feasts, mentoring, and more.
          </p>
        </div>
        <MinistryGrid ministries={ministries} />
      </StoryChapter>

      <section className="relative overflow-x-hidden py-20 sm:py-24">
        <Image
          src={atmospheres.washB}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/85" />
        <OutlineWord className="right-0 top-6 text-[14vw] lg:text-[7rem]">
          MOVE
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">In motion</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Ministry that looks like people"
            className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-5xl"
            delay={0.08}
          />
          <div className="mt-10">
            <ImageGrid
              images={[
                lifeMoments[2],
                lifeMoments[4],
                lifeMoments[7],
                lifeMoments[8],
              ]}
              altPrefix="Campus GEM ministry"
            />
          </div>
        </div>
      </section>

      <StoryChapter
        eyebrow="Also explore"
        title="Keep walking"
        outline="MORE"
      >
        <LinkCards
          items={[
            {
              href: "/bible-study",
              title: "Bible Study",
              description: "Every Sunday, 7 PM GMT on Telegram.",
            },
            {
              href: "/funfair",
              title: "Fun Fair",
              description: "Joyful campus gatherings that build friendship.",
            },
            {
              href: "/cgem-marriages",
              title: "CGM Marriages",
              description: "Celebrating covenant love in our family.",
            },
            {
              href: "/hall-of-fame",
              title: "Hall of Fame",
              description: "Honoring graduates and faithful servants.",
            },
          ]}
        />
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
