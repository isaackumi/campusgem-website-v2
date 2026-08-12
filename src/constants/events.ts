export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  href: string;
  image: string;
};

export const upcomingEvents: EventItem[] = [
  {
    id: "eagles-camp-2026",
    title: "Eagles Camp 2026",
    date: "December 2026",
    time: "Full camp meeting",
    location: "Redemption Light Chapel, Kokomlemle (near Heavy DO Chop Bar)",
    summary:
      "Join us for Eagles Camp 2026 as we spend focused hours in God's presence together.",
    href: "/camp",
    image: "/images/gallery/2025/eagles2025.jpg",
  },
  {
    id: "love-feast-monthly",
    title: "Love Feast Gathering",
    date: "First Saturday monthly",
    time: "Evening",
    location: "Online & campus hubs",
    summary:
      "A relational space to grow in wisdom, friendship, and Christ-centered community.",
    href: "/love-feast",
    image: "/images/hero.jpg",
  },
  {
    id: "loyalty-camp",
    title: "Loyalty Camp Meeting",
    date: "Announced seasonally",
    time: "Full day",
    location: "Campus venues across Ghana",
    summary: "Lift the name of our Maker and strengthen one another in faith.",
    href: "/activities",
    image: "/images/community.jpg",
  },
];
