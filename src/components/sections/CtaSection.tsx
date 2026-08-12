import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { Heading, Text } from "@/components/atoms/Typography";

export function CtaSection() {
  return (
    <section className="section-pad bg-surface" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] gem-facet px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 42%), radial-gradient(circle at 80% 0%, rgba(168,137,74,0.45), transparent 35%)",
              }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <Heading level={2} id="cta-heading" className="text-white">
                Find your place to connect and grow
              </Heading>
              <Text size="lg" className="mt-4 text-white/85">
                Whether you are new on campus or ready to serve, there is room for
                you in the Campus GEM family.
              </Text>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="on-dark" size="lg">
                  Get in touch
                </Button>
                <Button href="/give" size="lg" className="bg-white text-ruby hover:bg-paper">
                  Partner with us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
