import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import { featuredSermons } from "@/constants/sermons";

export const metadata: Metadata = {
  title: "Sermons",
};

export default function SermonsPage() {
  return (
    <PlaceholderPage
      title="Sermons"
      description="Messages that speak to campus life with clarity and hope."
    >
      <SermonGrid sermons={featuredSermons} />
    </PlaceholderPage>
  );
}
