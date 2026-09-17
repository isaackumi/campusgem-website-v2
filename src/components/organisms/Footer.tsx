import Link from "next/link";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Container } from "@/components/atoms/Container";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { footerNav } from "@/constants/navigation";
import { getSiteSettings } from "@/sanity/lib/content";

export async function Footer() {
  const settings = await getSiteSettings();

  const joinLinks = [
    { label: "Eagles Camp", href: "/camp" },
    { label: "Give", href: "/give" },
    { label: "Contact", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <footer className="overflow-hidden bg-ink text-white">
      <Container
        wide
        className="flex flex-col gap-8 border-b border-white/10 py-14 sm:flex-row sm:items-start sm:justify-between sm:py-16 lg:py-20"
      >
        <div>
          <BrandLogo light />
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            {settings.tagline}
          </p>
          <p className="mt-5 text-sm text-white/45">
            © {new Date().getFullYear()} {settings.name}
            <span className="mt-1 block text-xs">All rights reserved.</span>
          </p>
        </div>
        <div className="flex gap-8 text-sm font-semibold text-white/75 sm:pt-1">
          <Link
            href="/contact"
            className="transition-colors hover:text-brand-200"
          >
            Contact
          </Link>
          <Link href="/give" className="transition-colors hover:text-brand-200">
            Donate
          </Link>
        </div>
      </Container>

      <Container wide className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-brand-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Join</h3>
          <ul className="mt-4 space-y-2.5">
            {joinLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-brand-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-2">
          <h3 className="text-sm font-semibold text-white">Visit</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>{settings.address}</li>
            <li>
              <a
                href={settings.phoneHref}
                className="transition-colors hover:text-brand-200"
              >
                {settings.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${settings.email}`}
                className="transition-colors hover:text-brand-200"
              >
                {settings.email}
              </a>
            </li>
            <li>{settings.hours}</li>
          </ul>
          <SocialLinks
            className="mt-6"
            light
            links={settings.socialLinks.filter((link) =>
              ["facebook", "telegram"].includes(link.platform),
            )}
          />
        </div>
      </Container>

      <div className="relative mt-6 min-h-[28vw] overflow-hidden sm:min-h-[22vw] lg:min-h-[18rem]">
        <p
          aria-hidden
          className="font-display footer-wordmark absolute inset-x-0 bottom-0 select-none text-center text-[22vw] font-bold leading-[0.75] tracking-tight sm:text-[18vw] lg:text-[15rem]"
        >
          CAMPUSGEM
        </p>
      </div>
    </footer>
  );
}
