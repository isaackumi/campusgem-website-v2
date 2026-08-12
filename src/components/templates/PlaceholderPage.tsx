import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Heading, Text } from "@/components/atoms/Typography";
import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";

type PlaceholderPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderPage({
  title,
  description,
  children,
}: PlaceholderPageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative isolate overflow-hidden pt-28 section-pad-sm text-white">
          <Image
            src="/images/gathering.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-ink/75" aria-hidden />
          <Container className="relative">
            <Heading level={1} className="text-white">
              {title}
            </Heading>
            <Text size="lg" className="mt-4 max-w-2xl text-white/80">
              {description}
            </Text>
          </Container>
        </section>
        <section className="section-pad bg-paper">
          <Container>
            {children ?? (
              <div className="max-w-2xl space-y-6">
                <Text size="lg" muted>
                  This section is ready for full content in the next iteration.
                  The design system, navigation, and homepage foundation are in
                  place.
                </Text>
                <Button href="/">Back to homepage</Button>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
