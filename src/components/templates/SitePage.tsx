import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { Heading, Text } from "@/components/atoms/Typography";
import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { cn } from "@/lib/cn";

type SitePageProps = {
  title: string;
  description: string;
  eyebrow?: string;
  /** Atmospheric photo only, avoid text-heavy flyers (bleed into navbar). */
  image?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function SitePage({
  title, description, eyebrow, image = "/images/gathering.jpg", children, narrow = false,
}: SitePageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative isolate overflow-hidden pt-[5.5rem] text-white lg:pt-24">
          <div className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            {/* Opaque wash so flyer text / busy photos never compete with nav or title */}
            <div className="absolute inset-0 bg-void/88" aria-hidden />
            <div
              className="absolute inset-0 bg-linear-to-b from-void via-void/55 to-paper"
              aria-hidden
            />
          </div>

          {/* Tight bottom padding: hero copy and body intro are related (proximity) */}
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
