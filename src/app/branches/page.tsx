import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { branchesContent } from "@/constants/pages";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Branches", description:
    "Campus GEM fellowships and gathering points across campuses and online.",
};

export default function BranchesPage() {
  return (
    <SitePage
      title="Branches"
      eyebrow="About"
      description="Find a Campus GEM fellowship near you, or start one."
      image="/images/camp/camp-moment-04.jpg"
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">{branchesContent.intro}</Text>
        </Prose>

        <div className="grid gap-4 md:grid-cols-3">
          {branchesContent.locations.map((location) => (
            <ContentBlock key={location.name} title={location.name}>
              <Text muted>{location.detail}</Text>
            </ContentBlock>
          ))}
        </div>

        <ContentBlock title="Primary address">
          <Text size="lg">{siteConfig.address}</Text>
          <Text className="mt-2" muted>
            {siteConfig.phone} · {siteConfig.email}
          </Text>
        </ContentBlock>

        <CtaBanner
          title="Want to start a branch?"
          description="Tell us about your campus or community and we will help you take the next step."
          primary={{ href: "/contact", label: "Contact the team" }}
          secondary={{ href: "/about", label: "Learn about us" }}
        />
      </div>
    </SitePage>
  );
}
