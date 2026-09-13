import Link from "next/link";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Container } from "@/components/atoms/Container";
import { Divider } from "@/components/atoms/Divider";
import { Text } from "@/components/atoms/Typography";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { footerNav } from "@/constants/navigation";
import { getSiteSettings } from "@/sanity/lib/content";

export async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className="border-t border-white/8 bg-void text-ink">
      <Container className="section-pad">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" aria-label="Campus GEM Ministries home">
              <BrandLogo />
            </Link>
            <Text className="text-ink-muted">{settings.description}</Text>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft transition hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Visit
            </h2>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              <li>{settings.address}</li>
              <li>
                <a href={settings.phoneHref} className="hover:text-gold-soft">
                  {settings.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-gold-soft"
                >
                  {settings.email}
                </a>
              </li>
              <li>{settings.hours}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Connect
            </h2>
            <SocialLinks
              className="mt-4"
              links={settings.socialLinks.filter((link) =>
                ["facebook", "telegram"].includes(link.platform),
              )}
            />
          </div>
        </div>

        <Divider className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Campus Gem Ministries. All rights
            reserved.
          </p>
          <p>{settings.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
