import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { activityPages } from "@/constants/pages";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Fun Fair",
  description: "Campus GEM Fun Fair — joy that strengthens community.",
};

export default async function FunfairPage() {
  const cms = await getActivityPage("funfair");
  const local = activityPages.funfair;

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
      outline="FAIR"
      atmosphere={atmospheres.washA}
      gallery={[...lifeMoments].slice(0, 8)}
      galleryAlt="Fun Fair"
      cta={cms.cta ?? { href: "/contact", label: "Ask about Fun Fair" }}
      secondaryCta={{ href: "/activities", label: "All activities" }}
    />
  );
}
