import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { Heading, Text } from "@/components/atoms/Typography";
import { aboutIntro } from "@/constants/site";

const pillars = [
  {
    title: "Faith", body: "Christ-centered teaching that equips students for spiritual growth.", }, {
    title: "Excellence", body: "Academic excellence pursued as worship and a witness on campus.", }, {
    title: "Leadership", body: "Mentoring that raises strategic, transformational young leaders.", },
];

const tags = [
  "Camp Meetings", "Love Feasts", "Mentoring Hub", "Campus Outreach",
];

export function AboutSection() {
  return (
    <section className="section-pad bg-void" aria-labelledby="about-heading">
      <Container wide>
        <Reveal>
          <div className="panel grid overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[28rem] lg:min-h-full">
              <Image
                src="/images/leader.jpg"
                alt="Campus GEM leadership"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="bg-surface-elevated p-6 sm:p-8 lg:p-10 xl:p-12">
              <Badge tone="outline">About the ministry</Badge>
              <Heading
                level={2}
                id="about-heading"
                className="mt-5 text-ink"
              >
                A ministry centred on Christ
              </Heading>
              <Text size="lg" className="mt-5 text-ink-soft">
                {aboutIntro}
              </Text>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-[var(--radius-md)] bg-surface p-4"
                  >
                    <Heading level={4} as="h3" className="font-display text-xl text-ink">
                      {pillar.title}
                    </Heading>
                    <Text size="sm" className="mt-2 text-ink-muted">
                      {pillar.body}
                    </Text>
                  </div>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-[var(--radius-pill)] bg-mist/70 px-3.5 py-2 text-sm text-ink-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
