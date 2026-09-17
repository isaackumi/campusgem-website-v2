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
      "Our annual camp meeting — worship, Word, and friendship that renew strength for the year.",
    href: "/camp",
    image: "/images/camp/camp-moment-01.jpg",
  },
  {
    id: "love-feast",
    title: "Love Feast",
    summary:
      "Shared tables and relationship seminars that form Christ-centered friendship.",
    href: "/love-feast",
    image: "/images/love-feast.jpg",
  },
  {
    id: "mentoring-hub",
    title: "Mentoring Hub",
    summary:
      "We pair upcoming leaders with mentors who prepare them for the future.",
    href: "/mentoring-hub",
    image: "/images/leader.jpg",
  },
  {
    id: "ict-training",
    title: "ICT Skill Training",
    summary:
      "We train Youth in practical digital skills to serve, create, and lead.",
    href: "/ict-training",
    image: "/images/gallery/2019/camp_19.jpg",
  },
];
