import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Mentoring Hub",
  description: "Campus GEM mentoring for upcoming leaders.",
};

export default async function MentoringHubPage() {
  const page = await getActivityPage("mentoring");
  return (
    <ActivityPage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      slideshow={"slideshow" in page ? Boolean(page.slideshow) : true}
      outline="MENTOR"
      atmosphere={atmospheres.canyon}
      gallery={[...lifeMoments].slice(2, 10)}
      galleryAlt="Mentoring Hub"
      cta={page.cta ?? { href: "/contact", label: "Ask about mentoring" }}
      secondaryCta={{ href: "/ministries", label: "All ministries" }}
    />
  );
}
