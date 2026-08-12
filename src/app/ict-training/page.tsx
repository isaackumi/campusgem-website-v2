import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { activityPages } from "@/constants/pages";

export const metadata: Metadata = {
  title: "ICT Skill Training", description: activityPages.ict.description,
};

export default function IctTrainingPage() {
  const page = activityPages.ict;
  return (
    <ActivityPage
      title={page.title}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      cta={{ href: "/contact", label: "Enquire about training" }}
    />
  );
}
