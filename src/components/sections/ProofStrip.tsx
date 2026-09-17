import { Container } from "@/components/atoms/Container";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { trustProof } from "@/constants/site";

export function ProofStrip({
  items = [...trustProof],
}: {
  items?: Array<{ label: string; detail: string }>;
}) {
  return (
    <section
      className="relative overflow-hidden border-y border-ink/5 bg-mist"
      aria-label="Campus GEM at a glance"
    >
      <OutlineWord className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[18vw] lg:text-[9rem]">
        YEARS
      </OutlineWord>
      <Container className="relative z-10">
        <Reveal>
          <Stagger className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:py-12">
            {items.map((item) => (
              <StaggerItem key={item.label}>
                <p className="font-display text-2xl font-bold tracking-tight text-brand-700 sm:text-[1.65rem]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
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
