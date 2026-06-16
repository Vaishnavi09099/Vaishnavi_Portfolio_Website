// src/data/portfolio.ts

export const personalInfo = {
  name: "Vaishnavi Rajawat",
  initials: "VR",
  tagline: "Full Stack Developer & B.Tech CSE Student",
  subtitle: "I design and ship high-performance products end-to-end — from beautiful interfaces to resilient distributed systems serving millions of users.",
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
    title: "Web Coordinator",
    desc: "Leading web development activities at Kinesis Technical Society and mentoring juniors in web developent and Git/GitHub workflows.",
  },
];

export const skillCategories = [
  {
    icon: "code",
    color: "from-cyan-400 to-blue-500",
    title: "Frontend",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Motion"],
  },
  {
    icon: "database",
    color: "from-green-400 to-emerald-500",
    title: "Backend",
    tags: ["Node.js", "Python", "Express", "REST APIs"],
  },
  {
    icon: "cloud",
    color: "from-purple-400 to-violet-500",
    title: "Tools & DevOps",
    tags: ["Git", "GitHub", "Vercel", "Docker"],
  },
  {
    icon: "cpu",
    color: "from-pink-400 to-rose-500",
    title: "CS Fundamentals",
    tags: ["DSA", "OOP", "DBMS", "OS"],
  },
];

export const stackRow1 = [
  "React", "TypeScript", "Next.js", "Tailwind", "Python",
  "Node.js", "Git", "GitHub", "C++", "Express",
];
export const stackRow2 = [
  "Vercel", "MongoDB", "PostgreSQL", "REST APIs",
  "Docker", "Linux", "VS Code", "Figma",
];

export const projects = [
  {
    category: "SaaS",
    categoryColor: "text-cyan-400",
    title: "Project One",
    desc: "Short description of what this project does.",
    tags: ["React", "Node.js"],
    gradient: "from-cyan-900 to-blue-900",
    link: "#",
  },
  {
    category: "AI",
    categoryColor: "text-purple-400",
    title: "Project Two",
    desc: "Short description of what this project does.",
    tags: ["Python", "OpenAI"],
    gradient: "from-purple-900 to-pink-900",
    link: "#",
  },
];

export const projectFilters = ["All", "SaaS", "AI", "Mobile", "Open Source"];

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
    score: "CGPA 8.97 / 10",
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

export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "@Vaishnavi09099",
    stats: "X+ problems • XXXX rating",
    link: "https://leetcode.com/u/Vaishnavi09099/",
  },
  {
    platform: "GeeksforGeeks",
    handle: "@vaishnaviw6r",
    stats: "Institute Rank X • XXX+ solved",
    link: "https://www.geeksforgeeks.org/profile/vaishnaviw6r",
  },
  {
    platform: "Codeforces",
    handle: "@Vaishnavi0909",
    stats: "Pupil • Max XXXX",
    link: "https://codeforces.com/profile/Vaishnavi0909",
  },
  {
    platform: "CodeChef",
    handle: "@flash_map_13",
    stats: "X★ • Max XXXX",
    link: "https://www.codechef.com/users/flash_map_13",
  },
];

export const codingStats = [
  { value: "XXX+", label: "Problems Solved", sub: "LeetCode • GFG • CF" },
  { value: "XXXX", label: "LeetCode Rating", sub: "Top X% globally" },
  { value: "X.Xk", label: "Contest Rank", sub: "Codeforces" },
  { value: "XX", label: "Day Streak", sub: "Consistency matters" },
];

export const certifications = [
  {
    issuer: "AMAZON WEB SERVICES",
    title: "AWS Data Engineer Associate",
    year: "2025",
    image: "/certificates/data_engineer.png",
    link: "#",
    gradient: "from-cyan-950 to-slate-900",
  },
  {
    issuer: "AMAZON WEB SERVICES",
    title: "AWS Cloud Practitioner",
    year: "2025",
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