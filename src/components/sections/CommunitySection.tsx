import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { testimonials } from "@/constants/testimonials";

export function CommunitySection() {
  return (
    <section
      className="relative isolate overflow-hidden section-pad text-white"
      aria-labelledby="community-heading"
    >
      <Image
        src="/images/community.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-void/88" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/35 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="Community"
            title="Stories from the family"
            titleId="community-heading"
            description="Young people discovering belonging, calling, and courage in Christ."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <TestimonialCard testimonial={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
