import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { Text } from "@/components/atoms/Typography";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { siteConfig } from "@/constants/site";
import { socialLinks } from "@/constants/social";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description="We would love to hear from you and help you find your place."
    >
      <div className="grid max-w-2xl gap-6">
        <div className="space-y-2 text-ink-soft">
          <p>{siteConfig.address}</p>
          <p>
            <a className="hover:text-ruby" href={siteConfig.phoneHref}>
              {siteConfig.phone}
            </a>
          </p>
          <p>
            <a
              className="hover:text-ruby"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
          <Text muted>{siteConfig.hours}</Text>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </PlaceholderPage>
  );
}
