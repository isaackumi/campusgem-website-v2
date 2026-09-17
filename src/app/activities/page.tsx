import type { Metadata } from "next";
import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ImageGrid, LinkCards } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { getActivityIndexItems, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Camps, love feasts, mentoring, ICT training, marriages, and the life of Campus GEM.",
};

export default async function ActivitiesPage() {
  const [page, activities] = await Promise.all([
    getSitePage("activities", {
      title: "Activities",
      eyebrow: "Campus life",
      description:
        "Doorways into the Campus GEM year — formation, friendship, skill, and celebration.",
      image: atmospheres.canyon,
      slideshow: false,
      narrow: false,
      intro:
        "Every Campus GEM activity is a chapter in one story: Youth who learn, connect, and grow in Christ. From Eagles Camp to Love Feasts, mentoring pairs, ICT training, and the marriages we celebrate — each rhythm forms belonging and calling.",
      sections: [],
      primaryCta: { href: "/contact", label: "Contact us" },
      secondaryCta: { href: "/gallery", label: "View gallery" },
    }),
    getActivityIndexItems(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.canyon}
      slideshow={page.slideshow}
      outline="LIFE"
      bleed
    >
      <StoryChapter
        eyebrow="Rhythms"
        title="Ways we grow together"
        outline="RHYTHM"
        intro={
          page.intro ||
          "From Eagles Camp to Love Feasts and mentoring hubs, every activity helps you learn, connect, and grow in Christ."
        }
        mist
      >
        <div className="relative mb-10">
          <StoryArrow className="mb-3" />
          <p className="max-w-lg text-sm leading-6 text-ink-soft">
            We train Youth in ICT. We pair them with mentors who prepare them
            for the future. We gather at tables, camps, and celebrations —
            including the marriages we capture and honor in our family.
          </p>
        </div>
        <LinkCards items={activities} />
      </StoryChapter>

      <ScriptureBand
        verse="And let us consider one another to provoke unto love and to good works."
        reference="Hebrews 10:24"
      />

      <section className="relative overflow-x-hidden py-20 sm:py-24">
        <Image
          src={atmospheres.washA}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/80" />
        <OutlineWord className="right-0 top-8 text-[14vw] lg:text-[7rem]">
          FIELD
        </OutlineWord>
        <StoryArrow
          flip
          className="absolute bottom-16 left-6 hidden lg:block"
        />
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">From the field</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Scenes that mark our year"
            className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-5xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.15} className="mt-4 max-w-xl">
            <p className="text-base leading-7 text-ink-soft">
              Camps, love feasts, mentoring, training, and celebrations across
              the Campus GEM family.
            </p>
          </ParagraphReveal>
          <div className="mt-10">
            <ImageGrid
              images={[
                lifeMoments[0],
                lifeMoments[1],
                lifeMoments[2],
                lifeMoments[3],
                lifeMoments[5],
                lifeMoments[6],
              ]}
              altPrefix="Campus GEM activity"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
