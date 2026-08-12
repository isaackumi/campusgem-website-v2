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
    id: "eagles-camp-2024",
    title: "Eagles Camp 2024",
    date: "December 26, 2024",
    time: "09:00 – 17:00",
    location: "Winneba Secondary School",
    summary: "Join us as we spend focused hours in God's presence together.",
    href: "/events",
    image: "/images/eagles-camp.jpg",
  },
  {
    id: "love-feast-monthly",
    title: "Love Feast Gathering",
    date: "First Saturday monthly",
    time: "Evening",
    location: "Online & campus hubs",
    summary:
      "A relational space to grow in wisdom, friendship, and Christ-centered love.",
    href: "/events",
    image: "/images/love-feast.jpg",
  },
  {
    id: "loyalty-camp",
    title: "Loyalty Camp Meeting",
    date: "Announced seasonally",
    time: "Full day",
    location: "Campus venues across Ghana",
    summary: "Lift the name of our Maker and strengthen one another in faith.",
    href: "/events",
    image: "/images/loyalty-camp.jpg",
  },
];
