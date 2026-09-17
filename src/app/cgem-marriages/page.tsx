import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { activityPages } from "@/constants/pages";
import { getMarriagesContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "CGM Marriages",
  description:
    "Campus GEM captures and celebrates those in our family who are married.",
};

export default async function CgemMarriagesPage() {
  const cms = await getMarriagesContent();
  const local = activityPages.marriages;

  return (
    <ActivityPage
      title={local.title}
      eyebrow={local.eyebrow}
      description={local.description}
      body={local.body}
      storyTitle={local.storyTitle}
      scripture={local.scripture}
      beats={local.beats}
      closing={local.closing}
      image={cms.image || local.image}
      contentImage={cms.contentImage || local.contentImage}
      slideshow={cms.slideshow}
      outline="COVENANT"
      atmosphere={atmospheres.canyon}
      gallery={cms.photos}
      galleryAlt="CGM marriage celebration"
      cta={local.cta}
      secondaryCta={{ href: "/love-feast", label: "Love Feasts" }}
    />
  );
}
