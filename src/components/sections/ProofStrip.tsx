import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { trustProof } from "@/constants/site";

export function ProofStrip() {
  return (
    <section
      className="border-y border-white/8 bg-void"
      aria-label="Campus GEM at a glance"
    >
      <Container>
        <Reveal>
          <Stagger className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:py-12">
            {trustProof.map((item) => (
              <StaggerItem key={item.label}>
                <p className="font-display text-2xl font-bold tracking-[-0.02em] text-gold sm:text-[1.65rem]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}
