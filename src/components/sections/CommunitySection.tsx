import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { Heading, Text } from "@/components/atoms/Typography";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { testimonials } from "@/constants/testimonials";

export function CommunitySection() {
  return (
    <section className="relative isolate overflow-hidden section-pad text-white" aria-labelledby="community-heading">
      <Image
        src="/images/community.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/78" aria-hidden />

      <Container className="relative">
        <Reveal>
            <SectionHeader
              eyebrow="Community"
              title="Stories from the family"
              titleId="community-heading"
              description="Young people discovering belonging, calling, and courage in Christ."
              light
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <StaggerItem key={item.id}>
                <blockquote className="h-full rounded-[var(--radius-lg)] border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
                  <Text className="text-white/90" size="lg">
                    “{item.quote}”
                  </Text>
                  <footer className="mt-6">
                    <Heading level={4} as="p" className="text-white">
                      {item.name}
                    </Heading>
                    <p className="mt-1 text-sm text-white/60">{item.role}</p>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
      </Container>
    </section>
  );
}
