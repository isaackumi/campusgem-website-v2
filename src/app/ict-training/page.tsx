import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "ICT Skill Training",
  description: "Campus GEM ICT skill training for Youth.",
};

export default async function IctTrainingPage() {
  const page = await getActivityPage("ict");
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
