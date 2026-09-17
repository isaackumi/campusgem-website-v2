import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { activityPages } from "@/constants/pages";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Love Feasts",
  description:
    "Campus GEM Love Feasts — shared tables that form friendship and faith.",
};

export default async function LoveFeastPage() {
  const cms = await getActivityPage("love-feast");
  const local = activityPages.loveFeast;

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
      slideshow={"slideshow" in cms ? Boolean(cms.slideshow) : true}
      outline="FEAST"
      atmosphere={atmospheres.washA}
      gallery={[...lifeMoments].slice(0, 8)}
      galleryAlt="Love Feast"
      cta={cms.cta ?? local.cta}
      secondaryCta={{ href: "/contact", label: "Ask about Love Feast" }}
    />
  );
}
