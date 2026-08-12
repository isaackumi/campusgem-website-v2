export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];
