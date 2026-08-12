export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Campus GEM gave me a place to belong and a faith that shapes how I lead on campus and beyond.",
    name: "Emmanuel Ntow",
    role: "Student leader",
    image: "/images/hall-of-fame/emmanuel-ntow.jpg",
  },
  {
    id: "2",
    quote:
      "Eagles Camp wasn't just an event. It was a turning point. I left clearer, grounded, and hungry for God.",
    name: "Stella Naa Dede",
    role: "Camp graduate · MSc Actuarial Science",
    image: "/images/hall-of-fame/stella.jpg",
  },
  {
    id: "3",
    quote:
      "Through mentoring and community, I learned that excellence in my studies is worship.",
    name: "Eva Goldsmith",
    role: "Mentoring Hub",
    image: "/images/hall-of-fame/eva-goldsmith.jpg",
  },
];
