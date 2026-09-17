import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import { ContactForm } from "@/components/molecules/ContactForm";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Campus GEM: address, phone, email, and social channels.",
};

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getSitePage("contact", {
      title: "Contact",
      eyebrow: "Connect",
      description:
        "We would love to hear from you and help you find your place — whether you want to visit, partner, or ask about Eagles Camp.",
      image: atmospheres.washA,
      slideshow: false,
      narrow: false,
      sections: [],
      primaryCta: { href: "/give", label: "Partner / Give" },
      secondaryCta: { href: "/activities", label: "Explore activities" },
    }),
    getSiteSettings(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image || atmospheres.washA}
      slideshow={page.slideshow}
      outline="HELLO"
      bleed
    >
      <StoryChapter
        eyebrow="Reach out"
        title="Send a message"
        outline="TALK"
        intro="Tell us what you need. We typically respond within a few days."
        mist
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <ParagraphReveal>
            <ContactForm />
          </ParagraphReveal>

          <div className="space-y-8">
            <ParagraphReveal delay={0.1}>
              <Heading level={3} as="h3" className="text-ink">
                Visit
              </Heading>
              <Text className="mt-2" muted>
                {settings.address}
              </Text>
              <Text className="mt-2" muted>
                {settings.hours}
              </Text>
            </ParagraphReveal>
            <ParagraphReveal delay={0.15}>
              <Heading level={3} as="h3" className="text-ink">
                Call
              </Heading>
              <a
                className="mt-2 inline-block text-lg text-brand-500 transition-colors duration-200 hover:text-brand-600"
                href={settings.phoneHref}
              >
                {settings.phone}
              </a>
            </ParagraphReveal>
            <ParagraphReveal delay={0.2}>
              <Heading level={3} as="h3" className="text-ink">
                Email
              </Heading>
              <a
                className="mt-2 inline-block text-lg text-brand-500 transition-colors duration-200 hover:text-brand-600"
                href={`mailto:${settings.email}`}
              >
                {settings.email}
              </a>
            </ParagraphReveal>
            <ParagraphReveal delay={0.25}>
              <Heading level={3} as="h3" className="text-ink">
                Social & groups
              </Heading>
              <div className="mt-4">
                <SocialLinks links={settings.socialLinks} />
              </div>
            </ParagraphReveal>
          </div>
        </div>
      </StoryChapter>

      <CtaSection />
    </SitePage>
  );
}
