import type { Metadata } from "next";
import { GalleryExplorer } from "@/components/organisms/GalleryExplorer";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { OutlineWord } from "@/components/atoms/OutlineWord";
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

export default async function GalleryPage() {
  const albums = await getGalleryAlbums();

  return (
    <SitePage
      title="Gallery"
      eyebrow="Moments"
      description="Browse Campus GEM memories by year and activity — from early gatherings to Eagles Camp."
      outline="MOMENTS"
      image={atmospheres.nebula}
      slideshow={false}
      bleed
    >
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
            text="A living story in photographs"
            className="font-display mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.06}
          />
          <ParagraphReveal delay={0.12} className="mt-3 max-w-xl">
            <p className="text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
              Worship, friendship, and the journeys that shape leaders for
              Christ. Filter by year or activity, or open any photo for a closer
              look.
            </p>
          </ParagraphReveal>

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

      <CtaSection />
    </SitePage>
  );
}
