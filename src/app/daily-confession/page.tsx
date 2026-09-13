import type { Metadata } from "next";
import { Heading, Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { getConfessionContent } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Daily Confession",
  description: "Speak life over your day with Campus GEM’s daily confession.",
};

export default async function DailyConfessionPage() {
  const content = await getConfessionContent();

  let n = 0;
  const numberedSections = content.sections.map((section) => ({
    ...section,
    lines: section.lines.map((line) => {
      n += 1;
      return { line, number: n };
    }),
  }));

  return (
    <SitePage
      title={content.title}
      eyebrow={content.eyebrow}
      description={content.description}
      image={content.image}
      imageClassName="object-[center_40%]"
      slideshow={false}
      narrow
    >
      <div className="space-y-14">
        <Prose>
          <Text size="lg" className="text-ink-soft">
            {content.intro}
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
                    key={`${number}-${line.slice(0, 24)}`}
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
            {content.benediction}
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
