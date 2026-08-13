import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import { ContactForm } from "@/components/molecules/ContactForm";
import {
  ContentBlock, CtaBanner, SplitContent,
} from "@/components/molecules/PageBlocks";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { SitePage } from "@/components/templates/SitePage";
import { siteConfig } from "@/constants/site";
import { socialLinks } from "@/constants/social";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Campus GEM: address, phone, email, and social channels.",
};

export default function ContactPage() {
  return (
    <SitePage
      title="Contact"
      eyebrow="Connect"
      description="We would love to hear from you and help you find your place. Whether you want to visit a gathering, partner with the ministry, or ask a question, reach out. We typically respond within a few days."
      image="/images/camp/camp-moment-05.jpg"
    >
      <div className="space-y-10 md:space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="space-y-8">
            <div>
              <Heading level={3} as="h2" className="text-ink">
                Send a message
              </Heading>
              <Text className="mt-3" muted>
                Tell us what you need. We typically respond within a few days.
              </Text>
            </div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
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
          </div>
        </div>

        <SplitContent
          image="/images/community.jpg"
          imageAlt="Campus GEM community gathering"
          reverse
        >
          <ContentBlock title="Come as you are">
            <Text muted>
              Visit a fellowship, join a WhatsApp group, or start a conversation.
              We are here to help you take the next step with Campus GEM.
            </Text>
          </ContentBlock>
        </SplitContent>

        <CtaBanner
          title="Ready to partner?"
          description="Your generosity fuels camps, mentoring, and campus discipleship."
          primary={{ href: "/give", label: "Partner / Give" }}
          secondary={{ href: "/activities", label: "Explore activities" }}
        />
      </div>
    </SitePage>
  );
}
