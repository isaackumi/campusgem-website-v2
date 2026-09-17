export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
  short?: string;
};

/** Right-rail links (YWAM Accra pattern). */
export const primaryNav: NavItem[] = [
  { label: "Eagles Camp", href: "/camp" },
  { label: "Who We Are", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

/** Activities popover — mirrors YWAM “Schools”. */
export const activitiesNav: NavItem[] = [
  {
    label: "Eagles Camp",
    href: "/camp",
    short: "Intensive camp meeting for worship and formation.",
  },
  {
    label: "Love Feasts",
    href: "/love-feast",
    short: "Shared tables that build friendship and faith.",
  },
  {
    label: "Bible Study",
    href: "/bible-study",
    short: "Open Scripture together through the week.",
  },
  {
    label: "Mentoring Hub",
    href: "/mentoring-hub",
    short: "Paired with mentors who prepare Youth for the future.",
  },
  {
    label: "ICT Skill Training",
    href: "/ict-training",
    short: "We train Youth in digital skills to serve and create.",
  },
  {
    label: "Fun Fair",
    href: "/funfair",
    short: "Joyful campus gatherings and community.",
  },
  {
    label: "CGM Marriages",
    href: "/cgem-marriages",
    short: "Capturing and celebrating those who are married.",
  },
  {
    label: "Hall of Fame",
    href: "/hall-of-fame",
    short: "Honoring graduates who inspire the next generation.",
  },
];

/** Center Explore panel destinations. */
export const exploreNav: Array<NavItem & { short: string }> = [
  {
    label: "Eagles Camp",
    href: "/camp",
    short: "Register and prepare for camp season.",
  },
  {
    label: "Activities",
    href: "/activities",
    short: "Camps, feasts, mentoring, and more.",
  },
  {
    label: "Ministries",
    href: "/ministries",
    short: "Pathways that form faith and leadership.",
  },
  {
    label: "Events",
    href: "/events",
    short: "Upcoming camps, feasts, and gatherings.",
  },
  {
    label: "Sermons",
    href: "/sermons",
    short: "Messages that form faith and calling.",
  },
  {
    label: "Who we are",
    href: "/about",
    short: "Our story, vision, and values.",
  },
  {
    label: "Mission & Vision",
    href: "/vision-mission",
    short: "The calling that guides Campus GEM.",
  },
  {
    label: "Senior Pastor",
    href: "/senior-pastor",
    short: "Meet Rev. Divine Asem (Divine Perez).",
  },
  {
    label: "Daily Confession",
    href: "/daily-confession",
    short: "Speak life — declare God’s Word each day.",
  },
  {
    label: "Bible Study",
    href: "/bible-study",
    short: "Sundays at 7:00 PM GMT on Telegram.",
  },
  {
    label: "Branches",
    href: "/branches",
    short: "Find a fellowship near you.",
  },
  {
    label: "Gallery",
    href: "/gallery",
    short: "Moments from camps and campus life.",
  },
  {
    label: "Give",
    href: "/give",
    short: "Partner with camps and Youth in need.",
  },
  {
    label: "Contact",
    href: "/contact",
    short: "Visit, call, or send a message.",
  },
];

export const searchIndex = [
  { href: "/", label: "Home", keywords: "campus gem ministries" },
  { href: "/about", label: "About / Who we are", keywords: "story vision values" },
  { href: "/vision-mission", label: "Mission & Vision", keywords: "calling mission vision" },
  { href: "/senior-pastor", label: "Senior Pastor", keywords: "divine asem perez pastor" },
  { href: "/daily-confession", label: "Daily Confession", keywords: "faith confession prayer" },
  { href: "/activities", label: "Activities", keywords: "camp feast mentoring" },
  { href: "/camp", label: "Eagles Camp", keywords: "camp register eagles" },
  { href: "/love-feast", label: "Love Feasts", keywords: "feast fellowship" },
  { href: "/bible-study", label: "Bible Study", keywords: "scripture study" },
  { href: "/mentoring-hub", label: "Mentoring Hub", keywords: "mentor leadership" },
  { href: "/ict-training", label: "ICT Skill Training", keywords: "digital skills ict" },
  { href: "/funfair", label: "Fun Fair", keywords: "fun fair games" },
  { href: "/cgem-marriages", label: "CGM Marriages", keywords: "marriage wedding" },
  { href: "/hall-of-fame", label: "Hall of Fame", keywords: "graduates honor" },
  { href: "/ministries", label: "Ministries", keywords: "ministry pathways" },
  { href: "/events", label: "Events", keywords: "upcoming events gather" },
  { href: "/sermons", label: "Sermons", keywords: "messages teachings" },
  { href: "/gallery", label: "Gallery", keywords: "photos moments" },
  { href: "/give", label: "Give / Partner", keywords: "donate give partner" },
  { href: "/contact", label: "Contact", keywords: "email phone visit" },
  { href: "/branches", label: "Branches", keywords: "campuses locations" },
];

export const footerNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Senior Pastor", href: "/senior-pastor" },
  { label: "Mission & Vision", href: "/vision-mission" },
  { label: "Daily Confession", href: "/daily-confession" },
  { label: "Bible Study", href: "/bible-study" },
  { label: "Activities", href: "/activities" },
  { label: "Events", href: "/events" },
  { label: "Sermons", href: "/sermons" },
  { label: "Branches", href: "/branches" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/give" },
];
