import type { SocialLink } from "@/constants/social";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
  compact?: boolean;
};

function Icon({ platform }: { platform: SocialLink["platform"] }) {
  const common = "h-4 w-4";
  switch (platform) {
    case "facebook":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5H16.8V4.6C16.4 4.5 15.3 4.4 14 4.4c-2.7 0-4.5 1.6-4.5 4.6v2.9H7v3.1h2.5V22h4z" />
        </svg>
      );
    case "telegram":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.5 4.3 3.7 11.2c-1.2.5-1.2 1.1-.2 1.4l4.6 1.4 1.8 5.5c.2.6.4.8 1 .8.5 0 .7-.2 1-.6l2.5-3.8 4.9 3.6c.9.5 1.5.2 1.7-.8L22.9 5.5c.3-1.2-.4-1.7-1.4-1.2z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.3-1.4A9.9 9.9 0 1 0 12 2zm5.7 14.1c-.2.7-1.3 1.2-2.1 1.4-.6.1-1.3.2-3.8-.8-3.1-1.3-5.1-4.5-5.3-4.7-.2-.2-1.5-2-1.5-3.8s1-2.7 1.3-3.1c.3-.4.7-.5 1-.5h.7c.2 0 .5 0 .7.6.3.7 1 2.4 1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.2 1.3 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.9.9 2.2 1.1.3.1.5.2.6.3.1.2.1.9-.1 1.6z" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />
        </svg>
      );
  }
}

export function SocialLinks({ links, className, compact = false }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map((link) => (
        <li key={`${link.platform}-${link.label}`}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-mist bg-surface text-ink-soft transition hover:border-ruby/40 hover:text-ruby",
              compact ? "p-2.5" : "px-3.5 py-2 text-sm",
            )}
            aria-label={link.label}
          >
            <Icon platform={link.platform} />
            {!compact ? <span>{link.label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
