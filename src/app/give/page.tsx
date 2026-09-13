import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, Prose, SplitContent,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { getGiveContent, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support Campus GEM camp meetings, academic help for needy Youth, and Christ-centered campus discipleship.",
};

export default async function GivePage() {
  const [page, settings] = await Promise.all([
    getGiveContent(),
    getSiteSettings(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
    >
      <div className="space-y-12">
        <SplitContent
          image={page.contentImage}
          imageAlt="Youth gathered at Campus GEM camp"
        >
          <Prose>
            <Text size="lg">{page.intro}</Text>
          </Prose>
        </SplitContent>

        <aside className="rounded-lg border border-gold/35 bg-gold/10 px-5 py-6 sm:px-6 sm:py-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
            Priority need
          </p>
          <Heading level={3} as="h2" className="mt-3 text-ink">
            {page.highlightTitle}
          </Heading>
          <Text className="mt-3 text-ink-soft" size="lg">
            {page.highlight}
          </Text>
        </aside>

        <div className="space-y-8">
          <Heading level={3} as="h2" className="text-ink">
            Where your gift goes
          </Heading>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {page.focuses.map((item) => (
              <ContentBlock key={item.title} title={item.title}>
                <Text muted>{item.body}</Text>
              </ContentBlock>
            ))}
          </div>
        </div>

        <ContentBlock title="Supporting needy Youth">
          <Text muted>{page.needyNote}</Text>
        </ContentBlock>

        <ContentBlock title="How to give">
          <Text muted>{page.howToGive}</Text>
        </ContentBlock>

        <CtaBanner
          title="Ready to partner with us?"
          description={`Email ${settings.email} or call ${settings.phone}.`}
          primary={{
            href: `mailto:${settings.email}?subject=I%20want%20to%20give`,
            label: "Contact us to give",
          }}
          secondary={{ href: "/camp", label: "About Eagles Camp" }}
        />
      </div>
    </SitePage>
  );
}
