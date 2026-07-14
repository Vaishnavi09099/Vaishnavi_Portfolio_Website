// src/data/portfolio.ts

export const personalInfo = {
  name: "Vaishnavi Rajawat",
  initials: "VR",
  tagline: "From Concept to Code",
  subtitle: "I'm a full-stack developer passionate about building modern, scalable web applications. I enjoy creating seamless user experiences, developing robust backend systems, and turning ideas into impactful digital products.",
  location: "Ghaziabad, India",
  email: "Vaishnavi09.099@gmail.com",
  available: true,
  photo: "/vaishnavi.jpeg", // apni photo yahan
};

export const stats = [
  {
    value: "AWS",
    label: "Certified (Data Engineer + Cloud Practitioner)",
  },
  {
    value: "300+",
    label: "DSA Problems Solved",
  },
  {
    value: "4th",
    label: "SIH Internal Evaluation Rank",
  },
];

export const timeline = [
 
  {
    year: "2022",
    title: "Class XII",
    desc: "Completed CBSE Class XII with strong academic performance and interest in computer science.",
  },
  {
    year: "2024",
    title: "B.Tech CSE Started",
    desc: "Joined KIET Deemed to be University for Computer Science & Engineering.",
  },
  {
    year: "2025",
    title: "Technical Growth Phase",
    desc: "Started building full-stack projects, solving DSA problems, and actively participating in technical club.",
  },
  {
    year: "2025 — Present",
    title: "Building Every Day",
    desc: "Continuously improving my problem-solving skills, developing scalable full-stack applications, exploring AI-powered technologies, and learning something new every day.",
  },
];



export const projects = [
  {
    category: "E-commerce",
    img: "/projects/shopfinity.png",
    categoryColor: "text-blue-400",
    title: "Shopfinity",
    desc: "Shopfinity is a comprehensive full-stack multi-vendor e-commerce platform built with Next.js and MongoDB. It supports three user roles (shoppers, vendors, admins) with features including order tracking with OTP verification, AI-powered chat assistance, secure Stripe/COD payments, and complete dashboards for managing products, vendors, and orders.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe","Cloudinary","FramerMotion","Redux"],
    gradient: "from-blue-900 to-cyan-900",
    link: "https://shopfinity-eta.vercel.app/",
    github: "https://github.com/Vaishnavi09099/Shopfinity",
  },
  {
    category: "E-commerce",
    img: "/projects/quickbasket.png",
    categoryColor: "text-green-400",
    title: "QuickBasket",
    desc: "QuickBasket is a comprehensive full-stack grocery delivery platform built with Next.js and MongoDB. It supports three user roles (customers, admins, delivery personnel) with features including real-time order tracking, AI-powered chat assistance, secure Stripe payments, and a complete admin dashboard for managing groceries and orders.",
    tags: ["Next.js", "Mongodb", "Redux","Socket.io","Express.js"],
    gradient: "from-green-900 to-emerald-900",
    link: "https://quickbasket-five.vercel.app/",
    github: "https://github.com/Vaishnavi09099/QuickBasket",
  },
  {
    category: "Utility",
    img: "/projects/anonlink.png",
    categoryColor: "text-yellow-400",
    title: "AnonLink",
    desc: "Real-time anonymous video chat web app that instantly pairs two random users for live conversations. Built using Socket.IO for matchmaking and ZegoCloud for seamless video streaming, it enables fast, private, and smooth peer-to-peer connections with a simple join-and-chat experience and one-click next session switching.",
    tags: ["Next.js", "ZegoCloud", "Tailwind CSS","FramerMotion"],
    gradient: "from-yellow-900 to-amber-900",
    link: "https://anon-link-seven.vercel.app/",
    github: "https://github.com/Vaishnavi09099/AnonLink",
  },
  {
    category: "Social",
    img: "/projects/meetora.png",
    categoryColor: "text-pink-400",
    title: "Meetora",
    desc: "A minimal video conferencing app built with React & ZegoCloud. Enter a room ID to instantly join or create a video call — no account needed.",
    tags: ["React", "ZegoCloud"],
    gradient: "from-pink-900 to-rose-900",
    link: "https://meetora-seven.vercel.app/",
    github: "https://github.com/Vaishnavi09099/Meetora",
  },
];



export const experiences = [
  {
    title: "Web Coordinator",
    company: "Kinesis Technical Society, KIET Deemed to be University",
    duration: "2025 — Present",
    icon: "rocket",
    bullets: [
      "Conducted technical sessions and coordinated web development activities for club members",
      "Organized a hands-on GitHub Bootcamp for first-year students covering repositories, commits, branching, and collaboration workflows",
      "Mentored juniors in Web Development and guided them in building and managing real-world projects using Git & GitHub",
    ],
  },
];

export const achievements = [
  {
    icon: "trophy",
    value: "Top 100",
    label: "Hyperspace Innovation Hackathon",
    sub: "Selected among the top 100 teams nationwide",
  },
  {
    icon: "medal",
    value: "4th",
    label: "SIH Internal Evaluation",
    sub: "Ranked 4th at institute level",
  },
  {
    icon: "star",
    value: "Award",
    label: "Technical Brilliance",
    sub: "Recognized by the college for technical excellence",
  },
  {
    icon: "graduation",
    value: "Award",
    label: "Leadership Recognition",
    sub: "Awarded for active contribution to technical initiatives",
  },
];

export const education = [
  {
    icon: "book",
        type: "college", 
    degree: "B.TECH (3RD YEAR)",
    institution: "KIET Deemed to be University",
    stream: "Computer Science & Engineering",
    duration: "2024 — 2028",
    score: "CGPA 8.62 / 10",
    gradient: "from-slate-800 to-slate-900",
  },
  {
    icon: "school",
        type: "school", 
    degree: "CLASS XII (SENIOR SECONDARY)",
    institution: "Morning Star Children's Academy",
    stream: "PCM • CBSE ",
    duration: "2022 — 2023",
    score: "90.2%",
    gradient: "from-indigo-950 to-slate-900",
  },
  {
    icon: "school",
        type: "school", 
    degree: "CLASS X (SECONDARY)",
    institution: "Morning Star Hr. Secondary School",
    stream: "CBSE ",
    duration: "2020 — 2021",
    score: "93.8%",
    gradient: "from-slate-900 to-violet-950",
  },
];



export const certifications = [
  {
    issuer: "AMAZON WEB SERVICES",
    title: "AWS Data Engineer Associate",
    year: "2026",
    image: "/certificates/data_engineer.png",
    link: "#",
    gradient: "from-cyan-950 to-slate-900",
  },
  {
    issuer: "AMAZON WEB SERVICES",
    title: "AWS Cloud Practitioner",
    year: "2026",
    image: "/certificates/cloud_practitioner.png",
    link: "#",
    gradient: "from-slate-900 to-indigo-950",
  },
];

export const socialLinks = {
  github: "https://github.com/Vaishnavi09099",
  linkedin: "https://www.linkedin.com/in/vaishnavi-rajawat-a22552362/",
  instagram: "https://www.instagram.com/vaish_u_913?igsh=MTJoenBvMmE0NWR4eg%3D%3D",
};