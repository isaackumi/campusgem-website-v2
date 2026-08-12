import { MinistryCard } from "@/components/molecules/MinistryCard";
import type { Ministry } from "@/constants/ministries";

export function MinistryGrid({ ministries }: { ministries: Ministry[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ministries.map((ministry) => (
        <MinistryCard key={ministry.id} ministry={ministry} />
      ))}
    </div>
  );
}
