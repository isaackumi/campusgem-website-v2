export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" }, {
    label: "About", href: "/about", children: [
      { label: "About Us", href: "/about" }, { label: "Mission & Vision", href: "/vision-mission" }, { label: "Daily Confession", href: "/daily-confession" }, { label: "Branches", href: "/branches" }, ], }, { label: "Our Senior Pastor", href: "/senior-pastor" }, { label: "Daily Confession", href: "/daily-confession" }, {
    label: "Activities", href: "/activities", children: [
      { label: "Eagles Camp", href: "/camp" }, { label: "Love Feasts", href: "/love-feast" }, { label: "Mentoring Hub", href: "/mentoring-hub" }, { label: "ICT Skill Training", href: "/ict-training" }, { label: "Fun Fair", href: "/funfair" }, { label: "CGM Marriages", href: "/cgem-marriages" }, { label: "Hall of Fame", href: "/hall-of-fame" }, ], }, { label: "Gallery", href: "/gallery" }, { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "About Us", href: "/about" }, { label: "Mission & Vision", href: "/vision-mission" }, { label: "Daily Confession", href: "/daily-confession" }, { label: "Activities", href: "/activities" }, { label: "Gallery", href: "/gallery" }, { label: "Contact", href: "/contact" }, { label: "Donate", href: "/give" },
];
