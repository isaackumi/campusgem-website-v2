import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { Text } from "@/components/atoms/Typography";
import { aboutIntro, coreValues, mission, vision } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Campus GEM"
      description="Who we are, why we exist, and the values that shape our ministry."
    >
      <div className="grid max-w-3xl gap-8">
        <div>
          <h2 className="font-display text-3xl">Who we are</h2>
          <Text className="mt-3" muted size="lg">
            {aboutIntro}
          </Text>
        </div>
        <div>
          <h2 className="font-display text-3xl">Vision</h2>
          <Text className="mt-3" muted size="lg">
            {vision}
          </Text>
        </div>
        <div>
          <h2 className="font-display text-3xl">Mission</h2>
          <Text className="mt-3" muted size="lg">
            {mission}
          </Text>
        </div>
        <div>
          <h2 className="font-display text-3xl">Core values</h2>
          <Text className="mt-3" muted size="lg">
            {coreValues.join(" · ")}
          </Text>
        </div>
      </div>
    </PlaceholderPage>
  );
}
