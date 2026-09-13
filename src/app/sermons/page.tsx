import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import { SitePage } from "@/components/templates/SitePage";
import { getSermons, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Messages that form faith, discipleship, and Christ-centered living.",
};

export default async function SermonsPage() {
  const [page, sermons] = await Promise.all([
    getSitePage("sermons", {
      title: "Sermons",
      eyebrow: "Word",
      description:
        "Messages that stir faith and form Christ-centered leaders.",
      image: "/images/camp/camp-moment-03.jpg",
      slideshow: true,
      narrow: false,
      intro:
        "Explore featured themes from Campus GEM gatherings. Full media archives continue to grow, reach out if you need a specific message.",
      sections: [],
      primaryCta: { href: "/contact", label: "Contact us" },
      secondaryCta: { href: "/daily-confession", label: "Daily confession" },
    }),
    getSermons(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
      slideshow={page.slideshow}
    >
      <div className="space-y-10">
        <Prose>
          <Text size="lg">
            {page.intro ||
              "Explore featured themes from Campus GEM gatherings. Full media archives continue to grow, reach out if you need a specific message."}
          </Text>
        </Prose>

        <SermonGrid sermons={sermons} />

        <CtaBanner
          title="Hungry for more?"
          description="Join a gathering or ask about upcoming teaching series."
          primary={page.primaryCta ?? { href: "/contact", label: "Contact us" }}
          secondary={
            page.secondaryCta ?? {
              href: "/daily-confession",
              label: "Daily confession",
            }
          }
        />
      </div>
    </SitePage>
  );
}
