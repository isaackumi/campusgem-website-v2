import { SermonCard } from "@/components/molecules/SermonCard";
import type { Sermon } from "@/constants/sermons";

export function SermonGrid({ sermons }: { sermons: Sermon[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sermons.map((sermon) => (
        <SermonCard key={sermon.id} sermon={sermon} />
      ))}
    </div>
  );
}
