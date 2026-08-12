import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Typography";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Give",
};

export default function GivePage() {
  return (
    <PlaceholderPage
      title="Give"
      description="Partner with Campus GEM as we raise Christ-centered leaders."
    >
      <div className="max-w-2xl space-y-6">
        <Text size="lg" muted>
          Your generosity helps fund camps, mentoring, outreach, and discipleship
          across campuses. Reach out and we will share current giving channels.
        </Text>
        <Button href={`mailto:${siteConfig.email}?subject=I%20want%20to%20give`}>
          Contact us to give
        </Button>
      </div>
    </PlaceholderPage>
  );
}
