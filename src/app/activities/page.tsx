import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  CtaBanner, ImageGrid, LinkCards, Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { lifeMoments } from "@/constants/media";
import { activityPages } from "@/constants/pages";
import { primaryNav } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Activities", description:
    "Camps, love feasts, mentoring, training, and the life of Campus GEM.",
};

const activities =
  primaryNav.find((item) => item.href === "/activities")?.children ?? [];

const descriptions: Record<string, string> = {
  "/camp": activityPages.camp.description,
  "/love-feast": activityPages.loveFeast.description,
  "/bible-study": activityPages.bibleStudy.description,
  "/mentoring-hub": activityPages.mentoring.description,
  "/ict-training": activityPages.ict.description,
  "/funfair": activityPages.funfair.description,
  "/cgem-marriages": activityPages.marriages.description,
  "/hall-of-fame": activityPages.hallOfFame.description,
};

export default function ActivitiesPage() {
  return (
    <SitePage
      title="Activities"
      eyebrow="Campus life"
      description="Camps, feasts, mentoring, training, and celebrations that form the Campus GEM family."
      image="/images/camp/camp-moment-05.jpg"
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">
            From intensive camp meetings to monthly Love Feasts and mentoring
            hubs, every activity is designed to help you learn, connect, and
            grow in Christ.
          </Text>
        </Prose>

        <LinkCards
          items={activities.map((item) => ({
            href: item.href, title: item.label, description: descriptions[item.href], }))}
        />

        <div className="space-y-5">
          <Heading level={3} as="h2" className="text-ink">
            From the field
          </Heading>
          <Text muted>
            Camps, love feasts, and gatherings that mark our year together.
          </Text>
          <ImageGrid
            images={[
              lifeMoments[0],
              lifeMoments[1],
              lifeMoments[2],
              lifeMoments[3],
              lifeMoments[5],
              lifeMoments[6],
            ]}
            altPrefix="Campus GEM activity"
          />
        </div>

        <CtaBanner
          title="Ready to join in?"
          description="Reach out and we will help you find the right gathering or program."
          primary={{ href: "/contact", label: "Contact us" }}
          secondary={{ href: "/gallery", label: "View gallery" }}
        />
      </div>
    </SitePage>
  );
}
