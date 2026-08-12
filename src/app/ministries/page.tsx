import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, LinkCards, Prose } from "@/components/molecules/PageBlocks";
import { MinistryGrid } from "@/components/organisms/MinistryGrid";
import { SitePage } from "@/components/templates/SitePage";
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
      image="/images/community.jpg"
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">
            Each ministry expression is a door into the Campus GEM family.
            Explore the pathways below and take a step toward deeper formation.
          </Text>
        </Prose>

        <MinistryGrid ministries={ministries} />

        <LinkCards
          items={[
            {
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
