export type Ministry = {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: string;
};

export const ministries: Ministry[] = [
  {
    id: "eagles-camp",
    title: "Eagles Camp",
    summary:
      "Intensive camp meetings that keep the flame of the Spirit burning as we journey through the year.",
    href: "/ministries",
    image: "/images/eagles-camp.jpg",
  },
  {
    id: "love-feast",
    title: "Love Feast",
    summary:
      "Relationship seminars and monthly gatherings that form healthy, Christ-centered community.",
    href: "/ministries",
    image: "/images/love-feast.jpg",
  },
  {
    id: "mentoring-hub",
    title: "Mentoring Hub",
    summary:
      "Dedicated mentoring for young and upcoming leaders preparing for the next level.",
    href: "/ministries",
    image: "/images/vision.jpg",
  },
  {
    id: "ict-training",
    title: "ICT Skill Training",
    summary:
      "Practical digital skills that equip students to serve, create, and lead with excellence.",
    href: "/ministries",
    image: "/images/values.jpg",
  },
];
