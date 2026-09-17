import type { Metadata } from "next";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getSermons, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Messages that form faith, discipleship, and Christ-centered living.",
};

export default async function SermonsPage() {
  const [page, sermons] = await Promise.all([
    getSitePage("sermons", {
      title: "Sermons",
      eyebrow: "Word",
      description:
        "Messages that stir faith and form Christ-centered leaders.",
      image: atmospheres.nebula,
      slideshow: false,
      narrow: false,
      intro:
        "Explore featured themes from Campus GEM gatherings. Full media archives continue to grow — reach out if you need a specific message.",
      sections: [],
      primaryCta: { href: "/contact", label: "Contact us" },
      secondaryCta: { href: "/daily-confession", label: "Daily confession" },
    }),
    getSermons(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.nebula}
      slideshow={page.slideshow}
      outline="WORD"
      bleed
    >
      <StoryChapter
        eyebrow="Listen"
        title="Messages that form leaders"
        outline="HEAR"
        intro={
          page.intro ||
          "Explore featured themes from Campus GEM gatherings. Full media archives continue to grow — reach out if you need a specific message."
        }
        mist
        fullWidthChildren
      >
        <div className="mb-8">
          <StoryArrow className="mb-3" />
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            Teaching from camps, fellowships, and the Campus GEM pulpit.
          </p>
        </div>
        <SermonGrid sermons={sermons} />
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
