import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import {
  ContentBlock, CtaBanner, Prose,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Give", description:
    "Partner with Campus GEM as we raise Christ-centered leaders on campus.",
};

export default function GivePage() {
  return (
    <SitePage
      title="Give"
      eyebrow="Partnership"
      description="Your generosity fuels camps, mentoring, outreach, and discipleship."
      image="/images/mission.jpg"
      narrow
    >
      <div className="space-y-10">
        <Prose>
          <Text size="lg">
            Partner with Campus GEM as we raise strategic, transformational
            leaders with Christ-centered principles. Your giving helps fund
            camps, mentoring, outreach, and campus discipleship.
          </Text>
        </Prose>

        <ContentBlock title="How to give">
          <Text muted>
            Reach out and we will share current giving channels for your region.
            Include “Giving” in your subject line so we can respond quickly.
          </Text>
          <ul className="mt-4 space-y-2 text-ink-soft">
            <li>
              <span className="text-gold">▸</span> Camps &amp; gatherings
            </li>
            <li>
              <span className="text-gold">▸</span> Mentoring &amp; leadership
              formation
            </li>
            <li>
              <span className="text-gold">▸</span> Campus outreach &amp;
              discipleship
            </li>
          </ul>
        </ContentBlock>

        <CtaBanner
          title="Start a conversation"
          description={`Email ${siteConfig.email} or call ${siteConfig.phone}.`}
          primary={{
            href: `mailto:${siteConfig.email}?subject=I%20want%20to%20give`, label: "Contact us to give", }}
          secondary={{ href: "/about", label: "About Campus GEM" }}
        />
      </div>
    </SitePage>
  );
}
