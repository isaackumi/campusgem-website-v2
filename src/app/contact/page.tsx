import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner,
} from "@/components/molecules/PageBlocks";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { SitePage } from "@/components/templates/SitePage";
import { siteConfig } from "@/constants/site";
import { socialLinks } from "@/constants/social";

export const metadata: Metadata = {
  title: "Contact", description:
    "Reach Campus GEM: address, phone, email, and social channels.",
};

export default function ContactPage() {
  return (
    <SitePage
      title="Contact"
      eyebrow="Connect"
      description="We would love to hear from you and help you find your place. Whether you want to visit a gathering, partner with the ministry, or ask a question, reach out. We typically respond within a few days."
      image="/images/community.jpg"
    >
      <div className="space-y-10 md:space-y-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <ContentBlock title="Visit">
            <Text muted>{siteConfig.address}</Text>
            <Text className="mt-2" muted>
              {siteConfig.hours}
            </Text>
          </ContentBlock>
          <ContentBlock title="Call">
            <a
              className="text-lg text-gold-soft transition-colors duration-200 hover:text-gold"
              href={siteConfig.phoneHref}
            >
              {siteConfig.phone}
            </a>
          </ContentBlock>
          <ContentBlock title="Email">
            <a
              className="text-lg text-gold-soft transition-colors duration-200 hover:text-gold"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </ContentBlock>
        </div>

        <div className="space-y-5">
          <Heading level={3} as="h2" className="text-ink">
            Social & groups
          </Heading>
          <SocialLinks links={socialLinks} />
        </div>

        <CtaBanner
          title="Prefer a direct message?"
          description="Send us an email and we will get back to you."
          primary={{
            href: `mailto:${siteConfig.email}?subject=Hello%20Campus%20GEM`, label: "Email Campus GEM", }}
          secondary={{ href: "/give", label: "Partner / Give" }}
        />
      </div>
    </SitePage>
  );
}
