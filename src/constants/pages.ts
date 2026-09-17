import { aboutIntro, campRegister, coreValues, mission, vision } from "@/constants/site";

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
      body: "Campus GEM was launched as an offshoot of Redemption Light Chapel International to reach Youth and raise leaders.",
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
      body: "Forming Youth who walk with Christ in their studies, friendships, and calling.",
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
      "Our annual camp meeting — seek God, grow in community, keep the flame burning.",
    storyTitle: "Where the year catches fire",
    body: "Eagles Camp is Campus GEM’s intensive camp meeting — space to seek God, grow in community, and keep the flame of the Spirit burning through the year. Fellowship with us at Redemption Light Chapel, Kokomlemle, near Heavy DO Chop Bar.",
    scripture: {
      verse:
        "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles.",
      reference: "Isaiah 40:31",
    },
    beats: [
      {
        title: "Seek God together",
        body: "Worship, Word, and prayer that reset the heart for a new season.",
      },
      {
        title: "Build lasting friendship",
        body: "Youth from campuses and communities gather as one Campus GEM family.",
      },
      {
        title: "Carry the flame home",
        body: "Leave clearer, grounded, and ready to live faith on campus and beyond.",
      },
    ],
    closing:
      "Come ready to wait on the Lord — and rise with renewed strength for the year ahead.",
    cta: {
      href: campRegister.href,
      label: campRegister.label,
    },
    image: "/images/camp/camp-moment-01.jpg",
    contentImage: "/images/camp/camp-moment-02.jpg",
  },
  loveFeast: {
    title: "Love Feasts",
    eyebrow: "Activities",
    description:
      "Shared tables that form friendship, wisdom, and Christ-centered community.",
    storyTitle: "A table that forms belonging",
    body: "Love Feast is more than a meeting — it is a gathering of hearts. Through relationship seminars and monthly fellowships (locally and online), we learn to love well, walk in wisdom, and build Christ-centered friendships that last.",
    scripture: {
      verse:
        "By this shall all men know that ye are my disciples, if ye have love one to another.",
      reference: "John 13:35",
    },
    beats: [
      {
        title: "Relationship wisdom",
        body: "Seminars that help Youth navigate friendship, courtship, and covenant with grace.",
      },
      {
        title: "Monthly gathering",
        body: "A rhythm of fellowship that keeps community warm across campuses and online.",
      },
      {
        title: "Love that witnesses",
        body: "We practice the kind of love that makes discipleship visible.",
      },
    ],
    closing:
      "Pull up a chair — there is room at the table for you.",
    cta: {
      href: "https://chat.whatsapp.com/HEZ3eFw8GaQ8pIbyH7QUQu",
      label: "Join Love Feast WhatsApp",
    },
    image: "/images/camp/camp-moment-03.jpg",
    contentImage: "/images/love-feast.jpg",
  },
  mentoring: {
    title: "Mentoring Hub",
    eyebrow: "Activities",
    description:
      "We pair upcoming leaders with mentors who prepare them for the future.",
    storyTitle: "Paired for the next level",
    body: "In the Mentoring Hub we intentionally pair young and upcoming leaders with mentors who walk with them — sharpening character, clarifying calling, and preparing them for the future. It is coaching with care: faith, excellence, and leadership grown side by side.",
    scripture: {
      verse:
        "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
      reference: "Proverbs 27:17",
    },
    beats: [
      {
        title: "Paired with mentors",
        body: "We match Youth with mentors who listen, guide, and model Christ-centered leadership.",
      },
      {
        title: "Prepared for the future",
        body: "Conversations that build capacity for studies, service, and the next season of calling.",
      },
      {
        title: "Character before platform",
        body: "We form leaders who carry integrity, courage, and a heart for people.",
      },
    ],
    closing:
      "You do not have to figure the future out alone — ask about being paired with a mentor.",
    cta: {
      href: "/contact",
      label: "Ask about mentoring",
    },
    image: "/images/camp/camp-moment-04.jpg",
    contentImage: "/images/leader.jpg",
  },
  ict: {
    title: "ICT Skill Training",
    eyebrow: "Activities",
    description:
      "We train Youth in practical digital skills to serve, create, and lead.",
    storyTitle: "Trained to build and serve",
    body: "ICT Skill Training is where we train Campus GEM Youth in practical digital skills — so they can serve the ministry, create with excellence, and thrive in academic and professional callings. Skill is stewardship: what we learn, we offer back to God and community.",
    scripture: {
      verse:
        "And I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship.",
      reference: "Exodus 31:3",
    },
    beats: [
      {
        title: "We train them",
        body: "Hands-on sessions that build real competence — tools, workflows, and digital confidence.",
      },
      {
        title: "Serve with skill",
        body: "Youth learn to support Campus GEM media, admin, and creative work with excellence.",
      },
      {
        title: "Create for calling",
        body: "Digital fluency that opens doors in study, work, and ministry impact.",
      },
    ],
    closing:
      "Bring your curiosity — we will help you grow the skill to match your calling.",
    cta: {
      href: "/contact",
      label: "Join ICT training",
    },
    image: "/images/camp/camp-moment-05.jpg",
    contentImage: "/images/gallery/2019/camp_19.jpg",
  },
  funfair: {
    title: "Fun Fair",
    eyebrow: "Activities",
    description:
      "Joyful campus gatherings that build friendship, laughter, and belonging.",
    storyTitle: "Joy that strengthens community",
    body: "Fun Fair is Campus GEM at play — games, laughter, and shared joy that strengthen belonging on campus. Celebration is not a distraction from discipleship; it is part of how family is formed.",
    scripture: {
      verse: "A merry heart doeth good like a medicine.",
      reference: "Proverbs 17:22",
    },
    beats: [
      {
        title: "Play together",
        body: "Games and activities that help Youth connect beyond the classroom.",
      },
      {
        title: "Belong on campus",
        body: "A warm welcome for newcomers and a reunion for the Campus GEM family.",
      },
      {
        title: "Joy as witness",
        body: "We show that following Christ can be full of life, friendship, and gladness.",
      },
    ],
    closing: "Come ready to laugh, connect, and leave lighter.",
    image: "/images/camp/camp-moment-06.jpg",
    contentImage: "/images/community.jpg",
  },
  marriages: {
    title: "CGM Marriages",
    eyebrow: "Activities",
    description:
      "We capture and celebrate those in our family who are married — covenant stories of God’s faithfulness.",
    storyTitle: "Covenant stories we hold dear",
    body: "CGM Marriages captures those in the Campus GEM family who are married — honoring their covenant, companionship, and the faithfulness of God through every season. These are living testimonies: love formed in Christ, celebrated by the community that walked with them.",
    scripture: {
      verse:
        "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
      reference: "Genesis 2:24",
    },
    beats: [
      {
        title: "We capture their stories",
        body: "Portraits and celebrations of Campus GEM members who have entered covenant marriage.",
      },
      {
        title: "Honor the covenant",
        body: "We rejoice with couples and point the next generation to Christ-centered love.",
      },
      {
        title: "Faithfulness on display",
        body: "Every marriage story reminds us that God still writes beautiful chapters among us.",
      },
    ],
    closing:
      "If you are married in the Campus GEM family — or celebrating someone who is — this gallery is for you.",
    cta: {
      href: "/contact",
      label: "Share a marriage story",
    },
    image: "/images/camp/camp-moment-03.jpg",
    contentImage: "/images/love-feast-1.jpg",
  },
  bibleStudy: {
    title: "Bible Study",
    eyebrow: "Activities",
    description:
      "Every Sunday at 7:00 PM GMT on Telegram with Campus GEM Ministries.",
    storyTitle: "Open the Word together",
    body: "Join us each Sunday evening for Bible Study on Telegram. We open the Word together, grow in understanding, and stay connected as one Campus GEM family — wherever you are.",
    scripture: {
      verse:
        "Thy word is a lamp unto my feet, and a light unto my path.",
      reference: "Psalm 119:105",
    },
    beats: [
      {
        title: "Weekly rhythm",
        body: "Every Sunday · 7:00 PM GMT — a steady appointment with Scripture.",
      },
      {
        title: "One channel, one family",
        body: "Gather from campus or afar on Telegram with Campus GEM Ministries.",
      },
      {
        title: "Word that walks with you",
        body: "Leave with truth you can live Monday through Saturday.",
      },
    ],
    closing: "Open Telegram this Sunday — there is a seat for you in the Word.",
    cta: {
      href: "https://t.me/campusgem",
      label: "Join on Telegram",
    },
    image: "/images/bible-confession-page.jpg",
    contentImage: "/images/bible-study.png",
  },
  hallOfFame: {
    title: "Hall of Fame",
    eyebrow: "Activities",
    description:
      "Honoring graduates whose faith, academic excellence, and perseverance light the way.",
    storyTitle: "Lives that light the path",
    body: "The Campus GEM Hall of Fame honors members whose faith, excellence, and perseverance inspire the next generation. These portraits mark seasons of study completed, calling clarified, and lives offered for God's glory. We firmly believe academic excellence is part of worship — and we celebrate those who finished well.",
    conviction:
      "We believe academic excellence is part of worship. Every grade, every paper, every finished season can glorify God.",
    scripture: {
      verse:
        "Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.",
      reference: "1 Corinthians 15:58",
    },
    beats: [
      {
        title: "Excellence as worship",
        body: "We honor study done unto God — academic excellence is not separate from faith; it is part of how we worship.",
      },
      {
        title: "Steadfast to the finish",
        body: "These portraits remember Youth who stayed the course through pressure, prayer, and perseverance.",
      },
      {
        title: "Labour not in vain",
        body: "Their stories tell the next generation that work done in the Lord — in class and in calling — is never wasted.",
      },
    ],
    closing:
      "Be steadfast. Walk among the portraits — and let courage rise for your own race.",
    image: "/images/camp/camp-moment-04.jpg",
    contentImage: "/images/hall-of-fame/stella.jpg",
  },
} as const;

export const giveContent = {
  intro:
    "Partner with Campus GEM as we raise Christ-centered leaders on campus. Your generosity helps Youth grow in faith, excellence, and community.",
  highlight:
    "We especially encourage you to support our camp meetings. Most of our participants are Youth, and your gift helps them gather, worship, and grow without the burden falling on them alone.",
  focuses: [
    {
      title: "Academic support",
      body: "We support needy Youth with academic help as and when resources arise, so excellence can remain a form of worship on campus.",
    },
    {
      title: "Camp meeting support",
      body: "Your giving helps fund Eagles Camp and other gatherings that keep the flame of the Spirit burning among young leaders.",
    },
  ],
  needyNote:
    "As resources become available, we also step in to support needy Youth in practical ways. Every gift stretches further when shared with care and prayer.",
} as const;
