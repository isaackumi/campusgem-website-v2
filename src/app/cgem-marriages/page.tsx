import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { getMarriagesContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "CGM Marriages",
  description: "Campus GEM marriages and covenant celebrations.",
};

export default async function CgemMarriagesPage() {
  const page = await getMarriagesContent();
  return (
    <ActivityPage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      slideshow={page.slideshow}
      gallery={page.photos}
      galleryAlt="CGM marriage celebration"
    />
  );
}
