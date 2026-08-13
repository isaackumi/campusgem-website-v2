import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  CtaBanner, ImageGrid, LinkCards, Prose,
} from "@/components/molecules/PageBlocks";
import { MinistryGrid } from "@/components/organisms/MinistryGrid";
import { SitePage } from "@/components/templates/SitePage";
import { lifeMoments } from "@/constants/media";
import { ministries } from "@/constants/ministries";

export const metadata: Metadata = {
  title: "Ministries", description:
    "Campus GEM ministries: camps, love feasts, mentoring, and ICT training.",
};

export default function MinistriesPage() {
  return (
    <SitePage
      title="Ministries"
      eyebrow="Serve & grow"
      description="Pathways to learn, connect, and grow as Christ-centered leaders."
      image="/images/camp/camp-moment-04.jpg"
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">
            Each ministry expression is a door into the Campus GEM family.
            Explore the pathways below and take a step toward deeper formation.
          </Text>
        </Prose>

        <MinistryGrid ministries={ministries} />

        <div className="space-y-5">
          <Heading level={3} as="h2" className="text-ink">
            Ministry in motion
          </Heading>
          <ImageGrid
            images={[
              lifeMoments[2],
              lifeMoments[3],
              lifeMoments[4],
              lifeMoments[7],
            ]}
            altPrefix="Campus GEM ministry"
          />
        </div>

        <LinkCards
          items={[
            {
              href: "/bible-study", title: "Bible Study", description: "Every Sunday, 7 PM GMT on Telegram.", }, {
              href: "/funfair", title: "Fun Fair", description: "Joyful campus gatherings that build friendship.", }, {
              href: "/cgem-marriages", title: "CGM Marriages", description: "Celebrating covenant love in our family.", }, {
              href: "/hall-of-fame", title: "Hall of Fame", description: "Honoring graduates and faithful servants.", }, ]}
        />

        <CtaBanner
          title="Find your fit"
          description="Not sure where to start? Contact us and we will help you plug in."
          primary={{ href: "/contact", label: "Talk to us" }}
          secondary={{ href: "/activities", label: "All activities" }}
        />
      </div>
    </SitePage>
  );
}
