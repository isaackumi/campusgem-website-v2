import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal } from "@/components/atoms/Reveal";
import { Heading, Text } from "@/components/atoms/Typography";

export function CtaSection() {
  return (
    <section className="section-pad bg-void" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="panel relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(196,165,116,0.28), transparent 42%), radial-gradient(circle at 85% 0%, rgba(196,165,116,0.18), transparent 35%)", }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <Heading level={2} id="cta-heading" className="text-ink">
                Find your place to connect and grow
              </Heading>
              <Text size="lg" className="mt-4 text-ink-muted">
                Whether you are new on campus or ready to serve, there is room
                for you in the Campus GEM family.
              </Text>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  Get in touch
                </Button>
                <Button href="/give" size="lg" variant="outline">
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
