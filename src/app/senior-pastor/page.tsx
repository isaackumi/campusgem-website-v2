import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Heading, Text } from "@/components/atoms/Typography";
import {
  ContentBlock,
  CtaBanner,
  LinkCards,
  Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { pastorContent } from "@/constants/pages";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Our Senior Pastor",
  description:
    "Meet Rev. Divine Asem (Divine Perez), founder and Senior Pastor of Campus GEM.",
};

export default function SeniorPastorPage() {
  return (
    <SitePage
      title="Our Senior Pastor"
      eyebrow="Leadership"
      description={`${pastorContent.name}, lovingly known as ${pastorContent.preferredName}.`}
      image="/images/camp/camp-moment-05.jpg"
    >
      <div className="space-y-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-surface">
              <Image
                src={pastorContent.portrait}
                alt={pastorContent.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="font-display text-2xl font-bold text-ink">
                {pastorContent.name}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                {pastorContent.title}
              </p>
              <Text className="mt-2" muted size="sm">
                Preferred name: {pastorContent.preferredName}
              </Text>
            </div>
          </div>

          <div className="space-y-8">
            <Prose className="max-w-none">
              <Heading level={3} as="h2" className="text-ink">
                Founder of {pastorContent.ministry}
              </Heading>
              <Text size="lg">{pastorContent.intro}</Text>
              <Text size="lg">{pastorContent.summary}</Text>
              <Text>{pastorContent.encounter}</Text>
              <Text>{pastorContent.calling}</Text>
            </Prose>

            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Connect with us</Button>
              <Button href="/about" variant="outline">
                About Campus GEM
              </Button>
            </div>
          </div>
        </div>

        <blockquote className="border-l-2 border-gold/50 pl-5 sm:pl-6">
          <p className="font-display text-[1.35rem] leading-[1.5] text-ink sm:text-[1.6rem]">
            “{pastorContent.quote}”
          </p>
          <Text className="mt-4" muted size="sm">
            The word that shaped the birth of Campus GEM
          </Text>
        </blockquote>

        <div className="space-y-8">
          <Heading level={3} as="h2" className="text-ink">
            The journey
          </Heading>
          <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
            {pastorContent.timeline.map((item, index) => (
              <li key={item.title} className="border-t border-white/10 pt-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")} · {item.year}
                </p>
                <Heading level={4} as="h3" className="mt-3 font-display text-xl font-bold text-ink">
                  {item.title}
                </Heading>
                <Text className="mt-3" muted>
                  {item.body}
                </Text>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-8">
          <Heading level={3} as="h2" className="text-ink">
            What he champions
          </Heading>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {pastorContent.focuses.map((item) => (
              <ContentBlock key={item.title} title={item.title}>
                <Text muted>{item.body}</Text>
              </ContentBlock>
            ))}
          </div>
        </div>

        <ContentBlock title="From Redemption Light to Campus GEM">
          <Text muted>
            Campus GEM stands as an offshoot of {pastorContent.church}. Pastor
            Divine’s calling moved the ministry from concentrated church work
            into a wider field: camps, mentoring, relationship seminars, and
            campus outreach that form leaders for Christ.
          </Text>
          <Text className="mt-4" muted>
            Today that vision continues across fellowships, gatherings, and
            online community spaces connected to Campus GEM.
          </Text>
        </ContentBlock>

        <LinkCards
          items={[
            {
              href: "/vision-mission",
              title: "Mission & Vision",
              description: "The calling that guides the ministry he founded.",
            },
            {
              href: "/daily-confession",
              title: "Daily Confession",
              description: "Speak life and walk in the Word each day.",
            },
            {
              href: "/activities",
              title: "Activities",
              description: "Camps, Love Feasts, mentoring, and more.",
            },
          ]}
        />

        <CtaBanner
          title="Would you like to connect?"
          description={`Reach the Campus GEM team at ${siteConfig.email} or ${siteConfig.phone}. We would love to walk with you.`}
          primary={{ href: "/contact", label: "Contact us" }}
          secondary={{ href: "/give", label: "Partner with us" }}
        />
      </div>
    </SitePage>
  );
}
