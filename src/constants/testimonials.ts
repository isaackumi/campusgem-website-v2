export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Campus GEM gave me a place to belong and a faith that shapes how I lead on campus and beyond.",
    name: "Kwame A.",
    role: "Student leader",
  },
  {
    id: "2",
    quote:
      "Eagles Camp wasn't just an event—it was a turning point. I left clearer, grounded, and hungry for God.",
    name: "Ama B.",
    role: "Camp participant",
  },
  {
    id: "3",
    quote:
      "Through mentoring and community, I learned that excellence in my studies is worship.",
    name: "Kojo M.",
    role: "Mentoring Hub",
  },
];
