import { aboutIntro, coreValues, mission, vision } from "@/constants/site";

export const aboutContent = {
  whoWeAre: aboutIntro, highlights: [
    {
      title: "Eagles Camp Meeting", body: "We organise periodic intensive camps to keep the flame of the Spirit burning in us even as we journey through each year.", }, {
      title: "Coordinators Camp", body: "A unique opportunity for our hard-working coordinators to share ideas, pray, and sharpen one another for the next level.", }, {
      title: "Love Feasts", body: "CGM organizes relationship seminars dubbed Love Feast, now also an online monthly meeting with participation across the globe.", }, {
      title: "Mentoring Hub", body: "We devote time to mentor young and upcoming executives, forming leaders who walk in excellence and faith.", }, ],
};

export const visionContent = {
  vision, mission, values: [...coreValues], valuesNote:
    "We firmly believe that academic excellence is a form of worship and we pursue this vigorously.", pathways: [
    "Camp Meetings", "School Outreaches", "Bible Studies", "Relationship Seminars", "Mentoring Programs", "ICT Skill Training", ],
};

export const confessionSections = [
  {
    title: "Heritage", lines: [
      "The lines have fallen unto us in pleasant places; yes, we have a godly heritage.", "The lines have fallen unto me in pleasant places; yes, I have a godly heritage.", "I have the mind of Christ. I have the wisdom of God.", "I have the riches of God. I have the hidden riches of God.", "I have the treasures of darkness.", ], }, {
    title: "Divine provision", lines: [
      "I have divine favor.", "I have divine scholarships.", "I have divine health.", "I have divine protection.", "I have divine promotions.", "I have divine provisions.", "I have a divine partner.", "We have divine children.", "We have divine grandchildren.", ], }, {
    title: "Commission", lines: [
      "We are touching lives.", "We are influencing communities.", "We are transforming nations.", "So we shall live and not die, to declare the works of God.", "So I shall live and not die, to declare the works of God.", ], },
] as const;

export const confessionBenediction =
  "May the grace of our Lord Jesus Christ, the love of God, and the sweet fellowship of the Holy Spirit be with us now and forevermore.";


export const pastorContent = {
  name: "Rev. Divine Asem",
  preferredName: "Divine Perez",
  title: "Senior Pastor & Founder",
  ministry: "Campus GEM Ministries",
  church: "Redemption Light Chapel International",
  portrait: "/images/senior-pastor.jpg",
  heroImage: "/images/senior-pastor.jpg",
  intro:
    "Our Senior Pastor is Rev. Divine Asem, lovingly known as Divine Perez. He carries a heart for young people, campus communities, and the call to raise Christ-centered leaders beyond the walls of the local church.",
  summary:
    "Campus GEM was started by Pastor Divine as an offshoot of Redemption Light Chapel International when the Lord spoke to him through a divine encounter on January 15th, 2009. The word was clear: do not over-concentrate on church work alone, but increase his acreage into the whole world.",
  encounter:
    "In that encounter the Lord showed him a vast land and indicated that the church is just a small corner of that land. From that vision Campus GEM was birthed, a ministry devoted to campuses, communities, and nations.",
  calling:
    "Pastor Divine leads with a conviction that academic excellence is worship, that discipleship forms character, and that young people can carry Christ into every sphere of influence.",
  timeline: [
    {
      year: "2009",
      title: "A divine encounter",
      body: "On January 15th, 2009, the Lord spoke to Pastor Divine about increasing his acreage into the whole world.",
    },
    {
      year: "Origin",
      title: "Campus GEM begins",
      body: "Campus GEM was launched as an offshoot of Redemption Light Chapel International to reach students and raise leaders.",
    },
    {
      year: "Today",
      title: "Camps, mentoring, and outreach",
      body: "Under his leadership the ministry continues through Eagles Camp, Love Feasts, mentoring, and campus fellowship.",
    },
  ],
  focuses: [
    {
      title: "Campus discipleship",
      body: "Forming students who walk with Christ in their studies, friendships, and calling.",
    },
    {
      title: "Leadership formation",
      body: "Raising strategic, transformational leaders with Christ-centered principles.",
    },
    {
      title: "Wider acreage",
      body: "Carrying the gospel beyond a single congregation into communities and nations.",
    },
  ],
  quote:
    "The church is just a small corner of the land. Increase your acreage into the whole world.",
} as const;

export const branchesContent = {
  intro:
    "Campus GEM is growing across campuses and communities. Reach out to connect with a fellowship near you or to start a new branch.", locations: [
    {
      name: "University of Ghana, Legon", detail: "TF Hostel · Primary gathering hub", }, {
      name: "Campus outreaches", detail: "School outreaches and campus fellowships across Ghana", }, {
      name: "Online community", detail: "Love Feast and Telegram channels for global participation", }, ],
};

export const activityPages = {
  camp: {
    title: "Eagles Camp 2026",
    eyebrow: "Activities",
    description:
      "Join us at Redemption Light Chapel, Kokomlemle, near Heavy DO Chop Bar.",
    body: "Eagles Camp 2026 is Campus GEM’s intensive camp meeting, space to seek God, grow in community, and keep the flame of the Spirit burning through the year. Fellowship with us at Redemption Light Chapel, Kokomlemle, near Heavy DO Chop Bar.",
    cta: {
      href: "https://forms.gle/mihmtQPkS38EJwaq6",
      label: "Register for Eagles Camp 2026",
    },
    image: "/images/camp/camp-moment-01.jpg",
    contentImage: "/images/camp/camp-moment-02.jpg",
  }, loveFeast: {
    title: "Love Feasts", eyebrow: "Activities", description: "A celebration of unity, compassion, and spiritual connection.", body: "Our Love Feast is more than an event, it is a transformative gathering of hearts and spirits. Join relationship seminars and monthly meetings that form healthy, Christ-centered community locally and online.", cta: {
      href: "https://chat.whatsapp.com/HEZ3eFw8GaQ8pIbyH7QUQu", label: "Join Love Feast WhatsApp", }, image: "/images/camp/camp-moment-03.jpg", contentImage: "/images/love-feast.jpg", }, mentoring: {
    title: "Mentoring Hub", eyebrow: "Activities", description:
      "Dedicated mentoring for young and upcoming leaders preparing for the next level.", body: "In the Mentoring Hub we devote time to coach upcoming executives, sharpening character, calling, and capacity for Christ-centered leadership.", image: "/images/camp/camp-moment-04.jpg",
    contentImage: "/images/leader.jpg",
  }, ict: {
    title: "ICT Skill Training", eyebrow: "Activities", description:
      "Practical digital skills that equip students to serve, create, and lead.", body: "ICT Skill Training helps Campus GEM members grow in digital competence so they can serve the ministry and thrive in their academic and professional callings.", image: "/images/camp/camp-moment-05.jpg", contentImage: "/images/camp-19.jpg", }, funfair: {
    title: "Fun Fair", eyebrow: "Activities", description: "Joyful campus gatherings that build friendship and community.", body: "The Campus GEM Fun Fair is a vibrant celebration of community, games, friendship, and shared joy that strengthen belonging on campus.", image: "/images/camp/camp-moment-06.jpg", contentImage: "/images/community.jpg", }, marriages: {
    title: "CGM Marriages", eyebrow: "Activities", description:
      "Embracing love’s transformative power and celebrating each couple’s path to unity.", body: "Campus GEM Marriages celebrates covenant relationships within our family, honoring love, companionship, and God’s faithfulness.", image: "/images/camp/camp-moment-03.jpg", contentImage: "/images/love-feast-1.jpg", }, bibleStudy: {
    title: "Bible Study",
    eyebrow: "Activities",
    description:
      "Every Sunday at 7:00 PM GMT on Telegram with Campus GEM Ministries.",
    body: "Join us each Sunday evening for Bible Study on Telegram. We open the Word together, grow in understanding, and stay connected as one Campus GEM family—wherever you are.",
    cta: {
      href: "https://t.me/campusgem",
      label: "Join on Telegram",
    },
    image: "/images/bible-confession-page.jpg",
    contentImage: "/images/bible-study.png",
  }, hallOfFame: {
    title: "Hall of Fame",
    eyebrow: "Activities",
    description:
      "Celebrating the extraordinary journeys of graduates who transform dreams into remarkable achievements.",
    body: "The Campus GEM Hall of Fame honors members whose faith, excellence, and perseverance inspire the next generation. These portraits mark seasons of study completed, calling clarified, and lives offered for God's glory.",
    image: "/images/camp/camp-moment-04.jpg",
    contentImage: "/images/hall-of-fame/stella.jpg",
  },
} as const;

export const giveContent = {
  intro:
    "Partner with Campus GEM as we raise Christ-centered leaders on campus. Your generosity helps students grow in faith, excellence, and community.",
  highlight:
    "We especially encourage you to support our camp meetings. Most of our participants are students, and your gift helps them gather, worship, and grow without the burden falling on them alone.",
  focuses: [
    {
      title: "Academic support",
      body: "We support needy students with academic help as and when resources arise, so excellence can remain a form of worship on campus.",
    },
    {
      title: "Camp meeting support",
      body: "Your giving helps fund Eagles Camp and other gatherings that keep the flame of the Spirit burning among young leaders.",
    },
  ],
  needyNote:
    "As resources become available, we also step in to support needy students in practical ways. Every gift stretches further when shared with care and prayer.",
} as const;
