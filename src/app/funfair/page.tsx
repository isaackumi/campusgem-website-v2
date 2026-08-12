import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { activityPages } from "@/constants/pages";

export const metadata: Metadata = {
  title: "Fun Fair", description: activityPages.funfair.description,
};

export default function FunFairPage() {
  const page = activityPages.funfair;
  return (
    <ActivityPage
      title={page.title}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      cta={{ href: "/contact", label: "Ask about Fun Fair" }}
      secondaryCta={{ href: "/gallery", label: "See gallery" }}
    />
  );
}
