import type { Metadata } from "next";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { HallOfFameExplorer } from "@/components/organisms/HallOfFameExplorer";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getHallOfFameContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description:
    "Celebrating graduates whose faith, excellence, and perseverance inspire the next generation.",
};

export default async function HallOfFamePage() {
  const page = await getHallOfFameContent();

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.canyon}
      outline="HONOR"
      slideshow={false}
      bleed
    >
      <StoryChapter
        eyebrow="Legacy"
        title="Lives that light the way"
        outline="LIGHT"
        intro={page.body}
        mist
        fullWidthChildren
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <StoryArrow className="mb-3" />
            <p className="eyebrow text-brand-600">Portraits</p>
          </div>
          <p className="text-sm text-ink-soft">
            {page.entries.length} honored
          </p>
        </div>
        <HallOfFameExplorer entries={page.entries} />
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
