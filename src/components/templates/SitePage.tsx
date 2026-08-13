import type { ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { Heading, Text } from "@/components/atoms/Typography";
import { HeroBackdrop } from "@/components/molecules/HeroBackdrop";
import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { cn } from "@/lib/cn";

type SitePageProps = {
  title: string;
  description: string;
  eyebrow?: string;
  /** Static fallback / first frame when slideshow is off. */
  image?: string;
  /** Custom slide set; defaults to camp moments when slideshow is on. */
  images?: readonly string[];
  /** Smooth camp photo carousel (default). Turn off for Bible pages. */
  slideshow?: boolean;
  /** Extra object-position / crop classes for the hero photo. */
  imageClassName?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function SitePage({
  title,
  description,
  eyebrow,
  image,
  images,
  slideshow = true,
  imageClassName,
  children,
  narrow = false,
}: SitePageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative isolate min-h-[17rem] overflow-hidden pt-[5.5rem] text-white sm:min-h-[19rem] lg:min-h-[21rem] lg:pt-24">
          <HeroBackdrop
            image={image}
            images={images}
            slideshow={slideshow}
            imageClassName={imageClassName}
          />

          <Container className="relative pb-5 pt-10 sm:pb-6 sm:pt-12 lg:pt-14">
            {eyebrow ? (
              <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
            ) : null}
            <Heading level={1} className="max-w-3xl text-white">
              {title}
            </Heading>
            <Text size="lg" className="mt-4 max-w-2xl text-pretty text-white/72">
              {description}
            </Text>
          </Container>
        </section>

        <section className="bg-paper pb-[var(--section-y)] pt-4 sm:pt-5 md:pt-6">
          <Container className={cn(narrow && "max-w-2xl")}>{children}</Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
