/** Gallery media grouped by year (legacy site structure, improved). */

export type GalleryAlbum = {
  id: string;
  label: string;
  description: string;
  images: readonly string[];
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "2025",
    label: "2025 · Eagles Camp",
    description: "Eagles Camp season — worship, friendship, and fire for the year ahead.",
    images: [
      "/images/gallery/2025/eagles2025.jpg",
    ],
  },
  {
    id: "2024",
    label: "2024 · Camp & life",
    description: "Eagles Camp moments and Campus GEM life across the year.",
    images: [
      "/images/camp/camp-moment-01.jpg",
      "/images/camp/camp-moment-02.jpg",
      "/images/camp/camp-moment-03.jpg",
      "/images/camp/camp-moment-04.jpg",
      "/images/camp/camp-moment-05.jpg",
      "/images/camp/camp-moment-06.jpg",
      "/images/camp/camp-moment-07.jpg",
      "/images/camp/camp-moment-08.jpg",
      "/images/camp/camp-moment-09.jpg",
      "/images/camp/camp-moment-10.jpg",
      "/images/gallery/2024/ec_2024.jpeg",
    ],
  },
  {
    id: "2023",
    label: "2023 · Campuses",
    description: "Growth across campuses — fellowship, outreach, and shared joy.",
    images: [
      "/images/gallery/2023/photo_2025-03-11-02.23.30.jpeg",
      "/images/gallery/2023/photo_2025-03-11-02.23.39.jpeg",
      "/images/gallery/2023/photo_2025-03-11-02.23.52.jpeg",
      "/images/gallery/2023/photo_2025-03-11-02.24.01.jpeg",
    ],
  },
  {
    id: "2022",
    label: "2022 · Gatherings",
    description: "Camps, outreaches, and the friendships that held the year.",
    images: [
      "/images/gallery/2022/photo_17.jpg",
      "/images/gallery/2022/photo_18.jpg",
      "/images/gallery/2022/photo_19.jpg",
      "/images/gallery/2022/photo_20.jpg",
      "/images/gallery/2022/photo_21.jpg",
      "/images/gallery/2022/photo_22.jpg",
      "/images/gallery/2022/photo_23.jpg",
      "/images/gallery/2022/photo_24.jpg",
    ],
  },
  {
    id: "2021",
    label: "2021 · Campus life",
    description: "Campus life — worship, friendship, and formation in Christ.",
    images: [
      "/images/gallery/2021/photo_10.jpeg",
      "/images/gallery/2021/photo_11.jpeg",
      "/images/gallery/2021/photo_12.jpeg",
      "/images/gallery/2021/photo_13.jpeg",
      "/images/gallery/2021/photo_14.jpeg",
      "/images/gallery/2021/photo_15.jpeg",
      "/images/gallery/2021/photo_16.jpeg",
    ],
  },
  {
    id: "2020",
    label: "2020 · Steadfast",
    description: "Gatherings through a changing season — steadfast and together.",
    images: [
      "/images/gallery/2020/photo_9.jpeg",
    ],
  },
  {
    id: "2019",
    label: "2019 · Camp",
    description: "Camp moments and fellowship that marked early seasons.",
    images: [
      "/images/gallery/2019/camp_19.jpg",
    ],
  },
  {
    id: "2018",
    label: "2018 · Beginnings",
    description: "Early Campus GEM gatherings — the first chapters of community life.",
    images: [
      "/images/gallery/2018/photo_1.jpeg",
      "/images/gallery/2018/photo_2.jpeg",
      "/images/gallery/2018/photo_3.jpeg",
      "/images/gallery/2018/photo_4.jpeg",
      "/images/gallery/2018/photo_5.jpeg",
      "/images/gallery/2018/photo_6.jpeg",
      "/images/gallery/2018/photo_7.jpeg",
      "/images/gallery/2018/photo_8.jpeg",
      "/images/gallery/2018/photo_9.jpeg",
    ],
  },
  {
    id: "highlights",
    label: "Highlights",
    description: "Favorite frames from camps, Love Feasts, and campus life.",
    images: [
      "/images/gallery/moments/camp_19.jpg",
      "/images/gallery/moments/eagles2025.jpg",
      "/images/gallery/moments/ec_2024.jpeg",
      "/images/gallery/moments/love-feast.jpeg",
      "/images/gallery/moments/love-feast-1.jpg",
      "/images/camp/camp-moment-03.jpg",
      "/images/camp/camp-moment-06.jpg",
    ],
  },
];

export const galleryImages = galleryAlbums.flatMap((album) => [...album.images]);

/** Atmospheric life photos for interior page bands (not flyer art). */
export const lifeMoments = [
  "/images/camp/camp-moment-01.jpg",
  "/images/camp/camp-moment-02.jpg",
  "/images/camp/camp-moment-03.jpg",
  "/images/camp/camp-moment-04.jpg",
  "/images/camp/camp-moment-05.jpg",
  "/images/camp/camp-moment-06.jpg",
  "/images/camp/camp-moment-07.jpg",
  "/images/camp/camp-moment-08.jpg",
  "/images/camp/camp-moment-09.jpg",
  "/images/camp/camp-moment-10.jpg",
] as const;

/** Eagles Camp photo set (web JPEGs converted from HEIC). */
export const campMoments = [
  "/images/camp/camp-moment-01.jpg",
  "/images/camp/camp-moment-02.jpg",
  "/images/camp/camp-moment-03.jpg",
  "/images/camp/camp-moment-04.jpg",
  "/images/camp/camp-moment-05.jpg",
  "/images/camp/camp-moment-06.jpg",
  "/images/camp/camp-moment-07.jpg",
  "/images/camp/camp-moment-08.jpg",
  "/images/camp/camp-moment-09.jpg",
  "/images/camp/camp-moment-10.jpg",
] as const;

export type HallOfFameEntry = {
  id: string;
  src: string;
  name: string;
  /** Short honor line — degree, role, or season. */
  note?: string;
  /** Optional secondary caption shown in the lightbox. */
  caption?: string;
};

export const hallOfFameEntries: HallOfFameEntry[] = [
  {
    id: "emmanuel-ntow",
    src: "/images/hall-of-fame/emmanuel-ntow.jpg",
    name: "Emmanuel Ntow",
    note: "Youth leader",
    caption: "A place to belong — and a faith that shapes how he leads on campus and beyond.",
  },
  {
    id: "eva-goldsmith",
    src: "/images/hall-of-fame/eva-goldsmith.jpg",
    name: "Eva Goldsmith",
    note: "Graduate · Campus GEM family",
    caption: "Excellence pursued as worship — finished well in faith and study.",
  },
  {
    id: "lydia-swatson",
    src: "/images/hall-of-fame/lydia-swatson.jpg",
    name: "Lydia Swatson",
    note: "Graduate · Campus GEM family",
    caption: "Steadfast through the season — a life that lights the next generation.",
  },
  {
    id: "stella",
    src: "/images/hall-of-fame/stella.jpg",
    name: "Stella Naa Dede",
    note: "MSc Actuarial Science · University of Ghana",
    caption: "Academic excellence as worship — graduate of the Campus GEM family.",
  },
  {
    id: "stella-2",
    src: "/images/hall-of-fame/stella-2.jpg",
    name: "Stella Naa Dede",
    note: "MSc Actuarial Science · University of Ghana",
    caption: "Portrait from her graduation season.",
  },
  {
    id: "stella-3",
    src: "/images/hall-of-fame/stella-3.jpg",
    name: "Stella Naa Dede",
    note: "MSc Actuarial Science · University of Ghana",
    caption: "Celebrating a finished race in faith and excellence.",
  },
  {
    id: "stella-4",
    src: "/images/hall-of-fame/stella-4.jpg",
    name: "Stella Naa Dede",
    note: "MSc Actuarial Science · University of Ghana",
    caption: "Honored among Campus GEM graduates.",
  },
  {
    id: "salomey",
    src: "/images/hall-of-fame/salomey.jpg",
    name: "Salomey",
    note: "Graduate · Campus GEM family",
    caption: "Faith, excellence, and perseverance on display.",
  },
  {
    id: "noah",
    src: "/images/hall-of-fame/noah.jpg",
    name: "Noah",
    note: "Graduate · Campus GEM family",
    caption: "A journey marked by calling and courage.",
  },
  {
    id: "nyarkoh",
    src: "/images/hall-of-fame/nyarkoh.jpg",
    name: "Nyarkoh",
    note: "Graduate · Campus GEM family",
    caption: "Finished well — inspiring Youth still on the path.",
  },
  {
    id: "rita",
    src: "/images/hall-of-fame/rita.jpg",
    name: "Rita",
    note: "Graduate · Campus GEM family",
    caption: "Excellence offered back to God and community.",
  },
  {
    id: "richlove",
    src: "/images/hall-of-fame/richlove.jpg",
    name: "Richlove",
    note: "Graduate · Campus GEM family",
    caption: "A portrait of perseverance and praise.",
  },
  {
    id: "richlove-2",
    src: "/images/hall-of-fame/richlove-2.jpg",
    name: "Richlove",
    note: "Graduate · Campus GEM family",
    caption: "Celebrating another milestone in the journey.",
  },
  {
    id: "love",
    src: "/images/hall-of-fame/love.jpg",
    name: "Love",
    note: "Graduate · Campus GEM family",
    caption: "Belonging, calling, and courage in Christ.",
  },
  {
    id: "tetteh-jar",
    src: "/images/hall-of-fame/tetteh-jar.jpg",
    name: "Tetteh JaR",
    note: "Graduate · Campus GEM family",
    caption: "Labour in the Lord is not in vain.",
  },
  {
    id: "rev-divine-perez",
    src: "/images/hall-of-fame/rev-divine-perez.jpg",
    name: "Rev. Divine A. Perez",
    note: "Founder & Senior Pastor",
    caption: "The shepherd who carries the vision for Campus GEM.",
  },
  {
    id: "rev-divine-perez-2",
    src: "/images/hall-of-fame/rev-divine-perez-2.jpg",
    name: "Rev. Divine A. Perez",
    note: "Founder & Senior Pastor",
    caption: "Leading Youth to enlarge the acreage for Christ.",
  },
  {
    id: "graduate-01",
    src: "/images/hall-of-fame/graduate-01.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Academic excellence as worship — a finished season.",
  },
  {
    id: "graduate-02",
    src: "/images/hall-of-fame/graduate-02.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Steadfast to the finish.",
  },
  {
    id: "graduate-03",
    src: "/images/hall-of-fame/graduate-03.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "A life that lights the way for others.",
  },
  {
    id: "graduate-04",
    src: "/images/hall-of-fame/graduate-04.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Calling clarified — glory to God.",
  },
  {
    id: "graduate-05",
    src: "/images/hall-of-fame/graduate-05.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Perseverance that inspires the next generation.",
  },
  {
    id: "graduate-06",
    src: "/images/hall-of-fame/graduate-06.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Study completed; faith deepened.",
  },
  {
    id: "graduate-07",
    src: "/images/hall-of-fame/graduate-07.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Excellence offered as worship.",
  },
  {
    id: "graduate-08",
    src: "/images/hall-of-fame/graduate-08.jpg",
    name: "Campus GEM graduate",
    note: "Honored for faith & excellence",
    caption: "Another chapter closed well in Christ.",
  },
];

export const hallOfFameImages = hallOfFameEntries.map((entry) => entry.src);

export const marriageImages = [
  "/images/marriages/m-1.jpeg",
  "/images/marriages/m-2.jpeg",
  "/images/marriages/m-3.jpg",
  "/images/marriages/m-4.jpg",
  "/images/marriages/m-5.jpeg",
  "/images/marriages/m-6.jpeg",
  "/images/marriages/m-7.jpeg",
  "/images/marriages/m-8.jpeg",
  "/images/marriages/m-9.jpeg",
] as const;
