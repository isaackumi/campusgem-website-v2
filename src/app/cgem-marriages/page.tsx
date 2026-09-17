import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { atmospheres } from "@/constants/atmospheres";
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
      outline="COVENANT"
      atmosphere={atmospheres.canyon}
      gallery={page.photos}
      galleryAlt="CGM marriage celebration"
      cta={{ href: "/contact", label: "Celebrate with us" }}
      secondaryCta={{ href: "/love-feast", label: "Love Feasts" }}
    />
  );
}
