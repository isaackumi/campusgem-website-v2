import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import { SitePage } from "@/components/templates/SitePage";
import { featuredSermons } from "@/constants/sermons";

export const metadata: Metadata = {
  title: "Sermons", description: "Messages that form faith, discipleship, and Christ-centered living.",
};

export default function SermonsPage() {
  return (
    <SitePage
      title="Sermons"
      eyebrow="Word"
      description="Messages that stir faith and form Christ-centered leaders."
      image="/images/camp/camp-moment-03.jpg"
    >
      <div className="space-y-10">
        <Prose>
          <Text size="lg">
            Explore featured themes from Campus GEM gatherings. Full media
            archives continue to grow, reach out if you need a specific message.
          </Text>
        </Prose>

        <SermonGrid sermons={featuredSermons} />

        <CtaBanner
          title="Hungry for more?"
          description="Join a gathering or ask about upcoming teaching series."
          primary={{ href: "/contact", label: "Contact us" }}
          secondary={{ href: "/daily-confession", label: "Daily confession" }}
        />
      </div>
    </SitePage>
  );
}
