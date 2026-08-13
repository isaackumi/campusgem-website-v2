export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  href: string;
  image: string;
  cta?: {
    href: string;
    label: string;
  };
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
    image: "/images/camp/camp-moment-01.jpg",
    cta: {
      href: "https://forms.gle/mihmtQPkS38EJwaq6",
      label: "Register now",
    },
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
    image: "/images/love-feast.jpg",
    cta: {
      href: "https://chat.whatsapp.com/HEZ3eFw8GaQ8pIbyH7QUQu",
      label: "Join WhatsApp",
    },
  },
  {
    id: "loyalty-camp",
    title: "Loyalty Camp Meeting",
    date: "Announced seasonally",
    time: "Full day",
    location: "Campus venues across Ghana",
    summary: "Lift the name of our Maker and strengthen one another in faith.",
    href: "/activities",
    image: "/images/eagles-camp.jpg",
  },
  {
    id: "bible-study-sunday",
    title: "Bible Study",
    date: "Every Sunday",
    time: "7:00 PM GMT",
    location: "Telegram · Campus GEM Ministries",
    summary:
      "Open the Word with us online every Sunday evening. Join the Campus GEM Telegram channel.",
    href: "/bible-study",
    image: "/images/bible-confession-page.jpg",
    cta: {
      href: "https://t.me/campusgem",
      label: "Join Telegram",
    },
  },
];
