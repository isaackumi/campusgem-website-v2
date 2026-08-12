export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  category: string;
  date: string;
  href: string;
  image: string;
};

export const featuredSermons: Sermon[] = [
  {
    id: "new-way",
    title: "Start a New Way of Living",
    speaker: "Campus GEM",
    category: "Discipleship",
    date: "Recent",
    href: "/sermons",
    image: "/images/mission.jpg",
  },
  {
    id: "what-must-i-do",
    title: "What Must I Do To Be Saved",
    speaker: "Campus GEM",
    category: "Salvation",
    date: "Recent",
    href: "/sermons",
    image: "/images/gathering.jpg",
  },
  {
    id: "second-coming",
    title: "The Hope of His Coming",
    speaker: "Campus GEM",
    category: "Faith",
    date: "Recent",
    href: "/sermons",
    image: "/images/eagles-2025.jpg",
  },
];
