import type { Metadata } from "next";
import { ActivityPage } from "@/components/templates/ActivityPage";
import { activityPages } from "@/constants/pages";
import { socialLinks } from "@/constants/social";

export const metadata: Metadata = {
  title: "Eagles Camp", description: activityPages.camp.description,
};

const campWhatsApp = socialLinks.find((l) => l.label.includes("Eagles Camp"));

export default function EaglesCampPage() {
  const page = activityPages.camp;
  return (
    <ActivityPage
      title={page.title}
      description={page.description}
      body={page.body}
      image={page.image}
      contentImage={page.contentImage}
      cta={page.cta}
      secondaryCta={
        campWhatsApp
          ? { href: campWhatsApp.href, label: "Join Camp WhatsApp" }
          : undefined
      }
    />
  );
}
