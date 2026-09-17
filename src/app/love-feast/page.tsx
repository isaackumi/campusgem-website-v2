import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
import { lifeMoments } from "@/constants/media";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Love Feasts",
  description: "Campus GEM Love Feast gatherings and community.",
};

export default async function LoveFeastPage() {
  const page = await getActivityPage("love-feast");
  return (
    <ActivityPage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      slideshow={"slideshow" in page ? Boolean(page.slideshow) : true}
      outline="FEAST"
      atmosphere={atmospheres.washA}
      gallery={[...lifeMoments].slice(0, 8)}
      galleryAlt="Love Feast"
      cta={page.cta}
      secondaryCta={{ href: "/contact", label: "Ask about Love Feast" }}
    />
  );
}
