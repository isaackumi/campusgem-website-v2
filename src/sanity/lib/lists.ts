/** Shared Studio dropdown options — single source for pages, years, activities. */

export const yearOptions = [
  { title: "2026", value: 2026 },
  { title: "2025", value: 2025 },
  { title: "2024", value: 2024 },
  { title: "2023", value: 2023 },
  { title: "2022", value: 2022 },
  { title: "2021", value: 2021 },
  { title: "2020", value: 2020 },
  { title: "2019", value: 2019 },
  { title: "2018", value: 2018 },
] as const;

export const activityOptions = [
  { title: "Eagles Camp", value: "camp" },
  { title: "Love Feasts", value: "love-feast" },
  { title: "Bible Study", value: "bible-study" },
  { title: "Mentoring Hub", value: "mentoring" },
  { title: "ICT Training", value: "ict" },
  { title: "Fun Fair", value: "funfair" },
  { title: "CGM Marriages", value: "marriages" },
  { title: "Hall of Fame", value: "hall-of-fame" },
  { title: "Other", value: "other" },
] as const;

/** Every public site route editors can manage (except /studio). */
export const pageOptions = [
  { title: "Home", value: "home", href: "/" },
  { title: "About", value: "about", href: "/about" },
  { title: "Mission & Vision", value: "vision-mission", href: "/vision-mission" },
  { title: "Daily Confession", value: "daily-confession", href: "/daily-confession" },
  { title: "Branches", value: "branches", href: "/branches" },
  { title: "Our Senior Pastor", value: "senior-pastor", href: "/senior-pastor" },
  { title: "Activities (index)", value: "activities", href: "/activities" },
  { title: "Eagles Camp", value: "camp", href: "/camp" },
  { title: "Love Feasts", value: "love-feast", href: "/love-feast" },
  { title: "Bible Study", value: "bible-study", href: "/bible-study" },
  { title: "Mentoring Hub", value: "mentoring-hub", href: "/mentoring-hub" },
  { title: "ICT Skill Training", value: "ict-training", href: "/ict-training" },
  { title: "Fun Fair", value: "funfair", href: "/funfair" },
  { title: "CGM Marriages", value: "cgem-marriages", href: "/cgem-marriages" },
  { title: "Hall of Fame", value: "hall-of-fame", href: "/hall-of-fame" },
  { title: "Gallery", value: "gallery", href: "/gallery" },
  { title: "Events", value: "events", href: "/events" },
  { title: "Sermons", value: "sermons", href: "/sermons" },
  { title: "Ministries", value: "ministries", href: "/ministries" },
  { title: "Contact", value: "contact", href: "/contact" },
  { title: "Give", value: "give", href: "/give" },
] as const;

export type PageKey = (typeof pageOptions)[number]["value"];
export type ActivityKey = (typeof activityOptions)[number]["value"];

export const pageList = pageOptions.map(({ title, value }) => ({ title, value }));
export const activityList = activityOptions.map(({ title, value }) => ({
  title,
  value,
}));
export const yearList = yearOptions.map(({ title, value }) => ({
  title,
  value,
}));
