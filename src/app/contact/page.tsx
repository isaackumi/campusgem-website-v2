import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { Heading, Text } from "@/components/atoms/Typography";
import { ContactForm } from "@/components/molecules/ContactForm";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getSitePage, getSiteSettings } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Campus GEM: address, phone, email, and social channels.",
};

const contactBeats = [
  {
    title: "Visit or write",
    body: "Come to TF Hostel, Legon — or send a note. We want to help you find your place.",
  },
  {
    title: "Ask about camp",
    body: "Registration, venues, volunteering, or partnering for Eagles Camp 2026.",
  },
  {
    title: "Start something new",
    body: "Thinking of a branch, mentoring pair, or Love Feast on your campus? Tell us.",
  },
] as const;

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getSitePage("contact", {
      title: "Contact",
      eyebrow: "Connect",
      description:
        "We would love to hear from you — whether you want to visit, partner, or ask about Eagles Camp.",
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
        eyebrow="The invitation"
        title="There is room in the conversation"
        outline="OPEN"
        intro="Whether you are new on campus, ready to serve, or curious about Eagles Camp — reach out. We typically respond within a few days."
        mist
      >
        <StoryArrow className="mb-2" />
      </StoryChapter>

      <ScriptureBand
        verse="Be kindly affectioned one to another with brotherly love; in honour preferring one another."
        reference="Romans 12:10"
        outline="LOVE"
      />

      <StoryChapter
        eyebrow="In this story"
        title="How we can walk with you"
        outline="WALK"
      >
        <StoryBeats beats={contactBeats} />
      </StoryChapter>

      <StoryChapter
        eyebrow="Reach out"
        title="Send a message"
        outline="TALK"
        intro="Tell us what you need — visit, partnership, camp, or a simple hello."
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

      <section className="relative overflow-x-hidden py-16 sm:py-20">
        <Image
          src={atmospheres.washB}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/85" />
        <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
          NEXT
        </OutlineWord>
        <div className="container-wide relative z-10 max-w-2xl">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Meanwhile</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text="Explore while you wait"
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
            <Button href="/camp">Eagles Camp</Button>
            <Button href="/activities" variant="secondary">
              All activities
            </Button>
            <Button href="/give" variant="secondary">
              Partner / Give
            </Button>
          </ParagraphReveal>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
