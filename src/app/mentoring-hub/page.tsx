import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { activityPages } from "@/constants/pages";

export const metadata: Metadata = {
  title: "Mentoring Hub", description: activityPages.mentoring.description,
};

export default function MentoringHubPage() {
  const page = activityPages.mentoring;
  return (
    <ActivityPage
      title={page.title}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      cta={{ href: "/contact", label: "Join Mentoring Hub" }}
    />
  );
}
