import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { LinkCards } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { GalleryExplorer } from "@/components/organisms/GalleryExplorer";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getGalleryAlbums } from "@/sanity/lib/gallery";

/** Always fetch fresh gallery content after Studio publishes. */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Campus GEM gallery by year and activity: camps, outreaches, and campus community life.",
};

const galleryBeats = [
  {
    title: "Worship and wonder",
    body: "Hands raised, hearts open — moments when the presence of God marked a gathering.",
  },
  {
    title: "Friendship on the field",
    body: "Camps, feasts, and campus life where belonging takes shape in real faces.",
  },
  {
    title: "Leaders in formation",
    body: "Youth growing in excellence and calling — stories still being written.",
  },
] as const;

export default async function GalleryPage() {
  const albums = await getGalleryAlbums();

  return (
    <SitePage
      title="Gallery"
      eyebrow="Moments"
      description="A living archive of Campus GEM — from early gatherings to Eagles Camp."
      outline="MOMENTS"
      image={atmospheres.nebula}
      slideshow={false}
      bleed
    >
      <StoryChapter
        eyebrow="The chapter"
        title="A living story in photographs"
        outline="STORY"
        intro="Every photograph is a chapter marker — worship, friendship, and the journeys that shape leaders for Christ. Browse by year or activity, or open any frame for a closer look."
        mist
      >
        <StoryArrow className="mb-2" />
        <p className="mt-6 max-w-md text-sm leading-6 text-ink-soft">
          Filter the archive below — or simply wander through the seasons.
        </p>
      </StoryChapter>

      <ScriptureBand
        verse="I will remember the works of the Lord: surely I will remember thy wonders of old."
        reference="Psalm 77:11"
        outline="REMEMBER"
      />

      <StoryChapter
        eyebrow="In this story"
        title="What these frames hold"
        outline="FRAME"
      >
        <StoryBeats beats={galleryBeats} />
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-mist py-12 sm:py-16">
        <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
          ARCHIVE
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-600">Archive</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Browse the seasons"
            className="font-display mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.06}
          />
          <div className="relative z-10 mt-8 sm:mt-10">
            {albums.length ? (
              <GalleryExplorer albums={albums} />
            ) : (
              <p className="text-ink-soft">
                Photos are being prepared — check back soon.
              </p>
            )}
          </div>
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
          NEXT
        </OutlineWord>
        <div className="container-wide relative z-10">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Step into the story</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Don’t only look — belong"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.15} className="mt-8">
            <LinkCards
              items={[
                {
                  href: "/camp",
                  title: "Eagles Camp",
                  description: "Be in next season’s photographs.",
                },
                {
                  href: "/activities",
                  title: "All activities",
                  description: "Find your rhythm in Campus GEM life.",
                },
                {
                  href: "/contact",
                  title: "Contact us",
                  description: "Ask how to join or share a photo story.",
                },
              ]}
            />
          </ParagraphReveal>
          <ParagraphReveal delay={0.25} className="mt-8">
            <Button href="/give">Partner with us</Button>
          </ParagraphReveal>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
