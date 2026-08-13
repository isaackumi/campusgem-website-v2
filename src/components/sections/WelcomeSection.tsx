import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { Heading, Text } from "@/components/atoms/Typography";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { aboutIntro, coreValues, mission, vision } from "@/constants/site";

export function WelcomeSection() {
  return (
    <section className="section-pad bg-surface" aria-labelledby="welcome-heading">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Welcome"
            title="A place to learn, connect, and grow"
            titleId="welcome-heading"
            description={aboutIntro}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Our Vision", body: vision, image: "/images/about.jpg" }, { title: "Our Mission", body: mission, image: "/images/vision.jpg" }, {
              title: "Core Values", body: `${coreValues.join(" · ")}. We pursue academic excellence as worship.`, image: "/images/community.jpg", }, ].map((item) => (
            <Reveal key={item.title} kind="fadeUp">
              <article className="h-full overflow-hidden rounded-[var(--radius-lg)] bg-paper">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <Heading level={3} as="h3">
                    {item.title}
                  </Heading>
                  <Text muted>{item.body}</Text>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button href="/about" variant="ghost">
            Learn more about Campus GEM
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
