import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  CtaBanner, ImageGrid, LinkCards, Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { lifeMoments } from "@/constants/media";
import { getActivityIndexItems, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Camps, love feasts, mentoring, training, and the life of Campus GEM.",
};

export default async function ActivitiesPage() {
  const [page, activities] = await Promise.all([
    getSitePage("activities", {
      title: "Activities",
      eyebrow: "Campus life",
      description:
        "Camps, feasts, mentoring, training, and celebrations that form the Campus GEM family.",
      image: "/images/camp/camp-moment-05.jpg",
      slideshow: true,
      narrow: false,
      intro:
        "From intensive camp meetings to monthly Love Feasts and mentoring hubs, every activity is designed to help you learn, connect, and grow in Christ.",
      sections: [],
      primaryCta: { href: "/contact", label: "Contact us" },
      secondaryCta: { href: "/gallery", label: "View gallery" },
    }),
    getActivityIndexItems(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
      slideshow={page.slideshow}
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">
            {page.intro ||
              "From intensive camp meetings to monthly Love Feasts and mentoring hubs, every activity is designed to help you learn, connect, and grow in Christ."}
          </Text>
        </Prose>

        <LinkCards items={activities} />

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
          primary={page.primaryCta ?? { href: "/contact", label: "Contact us" }}
          secondary={
            page.secondaryCta ?? { href: "/gallery", label: "View gallery" }
          }
        />
      </div>
    </SitePage>
  );
}
