import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { activityPages } from "@/constants/pages";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "ICT Skill Training",
  description:
    "Campus GEM trains Youth in practical digital skills to serve, create, and lead.",
};

export default async function IctTrainingPage() {
  const cms = await getActivityPage("ict");
  const local = activityPages.ict;

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
      outline="ICT"
      atmosphere={atmospheres.washB}
      gallery={[...lifeMoments].slice(1, 9)}
      galleryAlt="ICT Skill Training"
      cta={cms.cta ?? local.cta}
      secondaryCta={{ href: "/activities", label: "All activities" }}
    />
  );
}
