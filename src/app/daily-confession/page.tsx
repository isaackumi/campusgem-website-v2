import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import {
  confessionBenediction, confessionSections,
} from "@/constants/pages";

export const metadata: Metadata = {
  title: "Daily Confession", description:
    "Speak life over your day with Campus GEM’s daily confession.",
};

const numberedSections = (() => {
  let n = 0;
  return confessionSections.map((section) => ({
    ...section, lines: section.lines.map((line) => {
      n += 1;
      return { line, number: n };
    }), }));
})();

export default function DailyConfessionPage() {
  return (
    <SitePage
      title="Daily Confession"
      eyebrow="Faith"
      description="Declare God’s Word over your life, pleasant places, godly heritage, and divine favor."
      image="/images/gathering.jpg"
      narrow
    >
      <div className="space-y-14">
        <Prose>
          <Text size="lg" className="text-ink-soft">
            Speak these aloud each day. Let faith rise as you agree with God’s
            promises for your life, family, and calling.
          </Text>
        </Prose>

        <div className="space-y-12">
          {numberedSections.map((section) => (
            <section
              key={section.title}
              aria-labelledby={`confession-${section.title}`}
            >
              <Heading
                level={3}
                as="h2"
                id={`confession-${section.title}`}
                className="mb-2 text-gold-soft"
              >
                {section.title}
              </Heading>
              <ol className="confession-list" start={section.lines[0]?.number}>
                {section.lines.map(({ line, number }) => (
                  <li
                    key={line}
                    className="grid grid-cols-[2.5rem_1fr] gap-3"
                    value={number}
                  >
                    <span
                      className="pt-0.5 text-xs font-medium uppercase tracking-[0.16em] text-gold/80"
                      aria-hidden
                    >
                      {String(number).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[1.15rem] leading-[1.65] tracking-[0.01em] text-ink-soft sm:text-[1.25rem]">
                      {line}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <blockquote className="border-l-2 border-gold/50 pl-5">
          <p className="font-display text-[1.2rem] leading-[1.7] text-ink sm:text-[1.35rem]">
            {confessionBenediction}
          </p>
        </blockquote>

        <CtaBanner
          title="Grow with Campus GEM"
          description="Join a gathering, camp, or mentoring space and keep building on the Word."
          primary={{ href: "/activities", label: "See activities" }}
          secondary={{ href: "/contact", label: "Connect" }}
        />
      </div>
    </SitePage>
  );
}
