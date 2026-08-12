import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Divider } from "@/components/atoms/Divider";
import { Text } from "@/components/atoms/Typography";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { footerNav } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { socialLinks } from "@/constants/social";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="section-pad">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </span>
              <span className="font-display text-2xl">{siteConfig.name}</span>
            </Link>
            <Text className="text-white/70">{siteConfig.description}</Text>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              Visit
            </h2>
            <ul className="mt-4 space-y-2.5 text-white/80">
              <li>{siteConfig.address}</li>
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
              Connect
            </h2>
            <SocialLinks
              className="mt-4"
              links={socialLinks.filter((link) =>
                ["facebook", "telegram"].includes(link.platform),
              )}
            />
          </div>
        </div>

        <Divider className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
