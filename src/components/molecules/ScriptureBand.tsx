import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Text } from "@/components/atoms/Typography";
import { ParagraphReveal } from "@/components/molecules/TextReveal";
import { atmospheres } from "@/constants/atmospheres";

type ScriptureBandProps = {
  verse: string;
  reference: string;
  outline?: string;
  eyebrow?: string;
};

/** Dark atmospheric scripture chapter used across story pages. */
export function ScriptureBand({
  verse,
  reference,
  outline = "WORD",
  eyebrow = "Scripture",
}: ScriptureBandProps) {
  return (
    <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-24">
      <Image
        src={atmospheres.nebula}
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <OutlineWord
        tone="light"
        className="right-0 top-4 text-[14vw] lg:text-[7rem]"
      >
        {outline}
      </OutlineWord>
      <div className="container-wide relative z-10 max-w-3xl">
        <ParagraphReveal>
          <p className="eyebrow text-brand-200">{eyebrow}</p>
        </ParagraphReveal>
        <ParagraphReveal delay={0.1}>
          <blockquote>
            <p className="font-display mt-4 text-2xl leading-snug tracking-tight text-white sm:text-4xl">
              “{verse}”
            </p>
            <Text className="mt-6 text-white/65" size="sm">
              {reference}
            </Text>
          </blockquote>
        </ParagraphReveal>
      </div>
    </section>
  );
}
