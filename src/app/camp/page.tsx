import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { campMoments } from "@/constants/media";
import { getActivityPage } from "@/sanity/lib/content";
import { socialLinks } from "@/constants/social";

export const metadata: Metadata = {
  title: "Eagles Camp",
  description: "Campus GEM Eagles Camp meeting details and registration.",
};

const campWhatsApp = socialLinks.find((l) => l.label.includes("Eagles Camp"));

export default async function EaglesCampPage() {
  const page = await getActivityPage("camp");
  return (
    <ActivityPage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      slideshow={"slideshow" in page ? Boolean(page.slideshow) : true}
      gallery={[...campMoments]}
      galleryAlt="Eagles Camp"
      imageClassName="object-[center_22%]"
      cta={page.cta}
      secondaryCta={
        campWhatsApp
          ? { href: campWhatsApp.href, label: "Join Camp WhatsApp" }
          : undefined
      }
    />
  );
}
