import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, Prose, SplitContent,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { visionContent } from "@/constants/pages";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Campus GEM’s vision, mission, and Christ-centered pathways for leadership.",
};

export default async function VisionMissionPage() {
  const [page, settings] = await Promise.all([
    getSitePage("vision-mission", {
      title: "Mission & Vision",
      eyebrow: "About",
      description:
        "Raising strategic, transformational leaders with Christ-centered principles.",
      image: "/images/camp/camp-moment-04.jpg",
      slideshow: true,
      narrow: false,
      sections: visionContent.pathways.map((item) => ({
        title: item,
        body: "A pathway that forms leaders and reaches communities.",
      })),
      primaryCta: { href: "/activities", label: "Explore activities" },
      secondaryCta: { href: "/contact", label: "Get in touch" },
    }),
    getSiteSettings(),
  ]);

  const pathways = page.sections.length
    ? page.sections.map((section) => section.title)
    : visionContent.pathways;

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
      slideshow={page.slideshow}
    >
      <div className="space-y-16">
        <SplitContent image="/images/values.jpg" imageAlt="Campus GEM values in community">
          <Prose>
            <Heading level={3} as="h2" className="text-ink">
              Vision
            </Heading>
            <Text size="lg">{settings.vision}</Text>
            <Heading level={3} as="h2" className="mt-8 text-ink">
              Mission
            </Heading>
            <Text size="lg">{settings.mission}</Text>
          </Prose>
        </SplitContent>

        <ContentBlock title="Core values">
          <ul className="space-y-3">
            {settings.coreValues.map((value: string) => (
              <li
                key={value}
                className="font-display text-2xl tracking-[-0.02em] text-ink"
              >
                {value}
              </li>
            ))}
          </ul>
          <Text className="mt-5" muted>
            {visionContent.valuesNote}
          </Text>
        </ContentBlock>

        <ContentBlock title="Pathways">
          <Text muted>
            We pursue the vision through practical pathways that form leaders
            and reach communities.
          </Text>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {pathways.map((item) => (
              <li
                key={item}
                className="border-t border-white/10 pt-3 text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </ContentBlock>

        <CtaBanner
          title="Walk the vision with us"
          description="Whether you are Youth, a graduate, or a partner, there is room to grow and serve."
          primary={page.primaryCta ?? { href: "/activities", label: "Explore activities" }}
          secondary={page.secondaryCta ?? { href: "/contact", label: "Get in touch" }}
        />
      </div>
    </SitePage>
  );
}
