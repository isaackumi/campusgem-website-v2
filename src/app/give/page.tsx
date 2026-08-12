import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { giveContent } from "@/constants/pages";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Campus GEM camp meetings, academic help for needy students, and Christ-centered campus discipleship.",
};

export default function GivePage() {
  return (
    <SitePage
      title="Give"
      eyebrow="Partnership"
      description="Support camp meetings, academic help, and students in need."
      image="/images/mission.jpg"
      narrow
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">{giveContent.intro}</Text>
        </Prose>

        <aside className="rounded-lg border border-gold/35 bg-gold/10 px-5 py-6 sm:px-6 sm:py-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
            Priority need
          </p>
          <Heading level={3} as="h2" className="mt-3 text-ink">
            Support our camp meetings
          </Heading>
          <Text className="mt-3 text-ink-soft" size="lg">
            {giveContent.highlight}
          </Text>
        </aside>

        <div className="space-y-8">
          <Heading level={3} as="h2" className="text-ink">
            Where your gift goes
          </Heading>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {giveContent.focuses.map((item) => (
              <ContentBlock key={item.title} title={item.title}>
                <Text muted>{item.body}</Text>
              </ContentBlock>
            ))}
          </div>
        </div>

        <ContentBlock title="Supporting needy students">
          <Text muted>{giveContent.needyNote}</Text>
        </ContentBlock>

        <ContentBlock title="How to give">
          <Text muted>
            Reach out and we will share current giving channels for your region.
            Include “Giving” in your subject line so we can respond quickly.
          </Text>
        </ContentBlock>

        <CtaBanner
          title="Ready to partner with us?"
          description={`Email ${siteConfig.email} or call ${siteConfig.phone}.`}
          primary={{
            href: `mailto:${siteConfig.email}?subject=I%20want%20to%20give`,
            label: "Contact us to give",
          }}
          secondary={{ href: "/camp", label: "About Eagles Camp" }}
        />
      </div>
    </SitePage>
  );
}
