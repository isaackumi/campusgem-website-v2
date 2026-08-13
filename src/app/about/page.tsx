import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, ImageGrid, LinkCards, Prose, SplitContent,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { lifeMoments } from "@/constants/media";
import { aboutContent, visionContent } from "@/constants/pages";
import { coreValues, mission, vision } from "@/constants/site";

export const metadata: Metadata = {
  title: "About", description:
    "Who we are, why we exist, and the values that shape Campus GEM.",
};

export default function AboutPage() {
  return (
    <SitePage
      title="About Campus GEM"
      eyebrow="Who we are"
      description="A Christ-centered movement raising strategic leaders on campus and beyond."
      image="/images/camp/camp-moment-03.jpg"
    >
      <div className="space-y-16">
        <SplitContent
          image="/images/camp/camp-moment-06.jpg"
          imageAlt="Campus GEM members at Eagles Camp"
        >
          <Prose>
            <Heading level={3} as="h2" className="text-ink">
              Who we are
            </Heading>
            <Text size="lg">{aboutContent.whoWeAre}</Text>
            <Text>
              Campus GEM was birthed to increase our acreage into the whole
              world, discipling young people through camps, mentoring, outreach, and authentic community.
            </Text>
          </Prose>
        </SplitContent>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <ContentBlock title="Vision">
            <Text size="lg">{vision}</Text>
          </ContentBlock>
          <ContentBlock title="Mission">
            <Text size="lg">{mission}</Text>
          </ContentBlock>
        </div>

        <ContentBlock title="Core values">
          <p className="font-display text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
            {coreValues.join(" · ")}
          </p>
          <Text className="mt-4" muted>
            {visionContent.valuesNote}
          </Text>
        </ContentBlock>

        <div className="space-y-8">
          <Heading level={3} as="h2" className="text-ink">
            How we gather
          </Heading>
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-12">
            {aboutContent.highlights.map((item) => (
              <ContentBlock key={item.title} title={item.title}>
                <Text muted>{item.body}</Text>
              </ContentBlock>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Heading level={3} as="h2" className="text-ink">
            Life together
          </Heading>
          <Text muted>
            Moments from camps, feasts, and fellowship across the Campus GEM family.
          </Text>
          <ImageGrid images={[...lifeMoments].slice(0, 8)} altPrefix="Campus GEM life" />
        </div>

        <LinkCards
          items={[
            {
              href: "/vision-mission", title: "Mission & Vision", description: "The calling that guides everything we do.", }, {
              href: "/senior-pastor", title: "Our Senior Pastor", description: "Meet Rev. Divine Asem (Divine Perez).", }, {
              href: "/activities", title: "Activities", description: "Camps, feasts, mentoring, and more.", }, ]}
        />

        <CtaBanner
          title="Find your place with us"
          description="Connect with a fellowship, join an activity, or reach out, we would love to walk with you."
          primary={{ href: "/contact", label: "Contact us" }}
          secondary={{ href: "/give", label: "Partner with us" }}
        />
      </div>
    </SitePage>
  );
}
