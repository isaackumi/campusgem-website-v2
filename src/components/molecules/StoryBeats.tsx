import { Heading, Text } from "@/components/atoms/Typography";
import { ParagraphReveal } from "@/components/molecules/TextReveal";

type StoryBeat = {
  title: string;
  body: string;
};

/** Numbered rule-row beats for story chapters. */
export function StoryBeats({ beats }: { beats: readonly StoryBeat[] }) {
  return (
    <div className="max-w-3xl border-t border-ink/10">
      {beats.map((beat, i) => (
        <ParagraphReveal key={beat.title} delay={0.08 * i}>
          <div className="grid gap-3 border-b border-ink/10 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-brand-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <Heading
                level={3}
                as="h3"
                className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
              >
                {beat.title}
              </Heading>
              <Text className="mt-2 max-w-xl" muted>
                {beat.body}
              </Text>
            </div>
          </div>
        </ParagraphReveal>
      ))}
    </div>
  );
}
