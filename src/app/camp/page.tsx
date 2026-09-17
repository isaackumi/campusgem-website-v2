import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { campMoments } from "@/constants/media";
import { activityPages } from "@/constants/pages";
import { getActivityPage } from "@/sanity/lib/content";
import { socialLinks } from "@/constants/social";

export const metadata: Metadata = {
  title: "Eagles Camp",
  description: "Campus GEM Eagles Camp meeting details and registration.",
};

const campWhatsApp = socialLinks.find((l) => l.label.includes("Eagles Camp"));

export default async function EaglesCampPage() {
  const cms = await getActivityPage("camp");
  const local = activityPages.camp;

  return (
    <ActivityPage
      title={local.title}
      eyebrow={local.eyebrow}
      description={cms.description || local.description}
      body={local.body}
      image={cms.image || local.image}
      contentImage={cms.contentImage || local.contentImage}
      slideshow={"slideshow" in cms ? Boolean(cms.slideshow) : true}
      outline="CAMP"
      atmosphere={atmospheres.nebula}
      gallery={[...campMoments]}
      galleryAlt="Eagles Camp"
      imageClassName="object-[center_22%]"
      cta={cms.cta ?? local.cta}
      secondaryCta={
        campWhatsApp
          ? { href: campWhatsApp.href, label: "Join Camp WhatsApp" }
          : undefined
      }
    />
  );
}
