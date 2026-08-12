import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { MinistryGrid } from "@/components/organisms/MinistryGrid";
import { ministries } from "@/constants/ministries";

export const metadata: Metadata = {
  title: "Ministries",
};

export default function MinistriesPage() {
  return (
    <PlaceholderPage
      title="Ministries"
      description="Pathways for discipleship, community, skill, and leadership."
    >
      <MinistryGrid ministries={ministries} />
    </PlaceholderPage>
  );
}
