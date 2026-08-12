import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { marriageImages } from "@/constants/media";
import { activityPages } from "@/constants/pages";

export const metadata: Metadata = {
  title: "CGM Marriages", description: activityPages.marriages.description,
};

export default function CgemMarriagesPage() {
  const page = activityPages.marriages;
  return (
    <ActivityPage
      title={page.title}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      cta={{ href: "/contact", label: "Celebrate with us" }}
      gallery={[...marriageImages]}
      galleryAlt="Campus GEM marriage"
    />
  );
}
