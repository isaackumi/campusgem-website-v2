import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Fun Fair",
  description: "Campus GEM Fun Fair gatherings.",
};

export default async function FunfairPage() {
  const page = await getActivityPage("funfair");
  return (
    <ActivityPage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      slideshow={"slideshow" in page ? Boolean(page.slideshow) : true}
    />
  );
}
