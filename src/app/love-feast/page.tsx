import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { activityPages } from "@/constants/pages";

export const metadata: Metadata = {
  title: "Love Feasts", description: activityPages.loveFeast.description,
};

export default function LoveFeastPage() {
  const page = activityPages.loveFeast;
  return (
    <ActivityPage
      title={page.title}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      cta={page.cta}
      secondaryCta={{ href: "/contact", label: "Ask about Love Feast" }}
    />
  );
}
