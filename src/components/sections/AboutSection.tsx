import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { Heading, Text } from "@/components/atoms/Typography";
import { aboutIntro } from "@/constants/site";

export function AboutSection() {
  return (
    <section className="section-pad bg-surface" aria-labelledby="about-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal kind="imageReveal" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] sm:aspect-[5/6]">
              <Image
                src="/images/about.jpg"
                alt="Campus GEM members smiling together outdoors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden max-w-xs rounded-[var(--radius-md)] bg-ink p-5 text-white shadow-[var(--shadow-lift)] sm:block lg:-right-6">
              <p className="font-display text-2xl leading-tight">
                Excellence is worship.
              </p>
              <p className="mt-2 text-sm text-white/70">
                Faith · Integrity · Leadership
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ruby">
              About Campus GEM
            </p>
            <Heading level={2} id="about-heading">
              A ministry for minds, hearts, and the next generation
            </Heading>
            <Text size="lg" className="mt-5" muted>
              {aboutIntro}
            </Text>
            <Text className="mt-4" muted>
              Through camp meetings, school outreaches, Bible studies, relationship
              seminars, mentoring, and ICT training, we disciple young people to
              live and lead with Christ at the center.
            </Text>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">Our story</Button>
              <Button href="/ministries" variant="ghost">
                Explore ministries
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
