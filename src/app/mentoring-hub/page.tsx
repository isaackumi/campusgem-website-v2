import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { activityPages } from "@/constants/pages";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Mentoring Hub",
  description:
    "Campus GEM pairs upcoming leaders with mentors who prepare them for the future.",
};

export default async function MentoringHubPage() {
  const cms = await getActivityPage("mentoring");
  const local = activityPages.mentoring;

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
      outline="MENTOR"
      atmosphere={atmospheres.canyon}
      gallery={[...lifeMoments].slice(2, 10)}
      galleryAlt="Mentoring Hub"
      cta={cms.cta ?? local.cta}
      secondaryCta={{ href: "/ministries", label: "All ministries" }}
    />
  );
}
