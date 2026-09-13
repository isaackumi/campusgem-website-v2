import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { branchesContent } from "@/constants/pages";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "Campus GEM fellowships and gathering points across campuses and online.",
};

export default async function BranchesPage() {
  const [page, settings] = await Promise.all([
    getSitePage("branches", {
      title: "Branches",
      eyebrow: "About",
      description: "Find a Campus GEM fellowship near you, or start one.",
      image: "/images/camp/camp-moment-04.jpg",
      slideshow: true,
      narrow: false,
      intro: branchesContent.intro,
      sections: branchesContent.locations.map((location) => ({
        title: location.name,
        body: location.detail,
      })),
      primaryCta: { href: "/contact", label: "Contact the team" },
      secondaryCta: { href: "/about", label: "Learn about us" },
    }),
    getSiteSettings(),
  ]);

  const locations = page.sections.length
    ? page.sections
    : branchesContent.locations.map((location) => ({
        title: location.name,
        body: location.detail,
      }));

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
          <Text size="lg">{page.intro || branchesContent.intro}</Text>
        </Prose>

        <div className="grid gap-4 md:grid-cols-3">
          {locations.map((location) => (
            <ContentBlock key={location.title} title={location.title}>
              <Text muted>{location.body}</Text>
            </ContentBlock>
          ))}
        </div>

        <ContentBlock title="Primary address">
          <Text size="lg">{settings.address}</Text>
          <Text className="mt-2" muted>
            {settings.phone} · {settings.email}
          </Text>
        </ContentBlock>

        <CtaBanner
          title="Want to start a branch?"
          description="Tell us about your campus or community and we will help you take the next step."
          primary={page.primaryCta ?? { href: "/contact", label: "Contact the team" }}
          secondary={page.secondaryCta ?? { href: "/about", label: "Learn about us" }}
        />
      </div>
    </SitePage>
  );
}
