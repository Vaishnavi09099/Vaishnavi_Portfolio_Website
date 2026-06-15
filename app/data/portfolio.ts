// src/data/portfolio.ts

export const personalInfo = {
  name: "Vaishnavi Rajawat",
  initials: "VR",
  tagline: "Building the web",
  subtitle: "I design and ship high-performance products end-to-end — from beautiful interfaces to resilient distributed systems serving millions of users.",
  location: "Ghaziabad, India",
  email: "Vaishnavi09.099@gmail.com",
  available: true,
  photo: "/images/photo.jpg", // apni photo yahan
};

export const stats = [
  { value: "2+", label: "Years coding" },
  { value: "10+", label: "Projects shipped" },
  { value: "1k+", label: "Users impacted" },
  { value: "99%", label: "Coffee uptime" },
];

export const timeline = [
  {
    year: "2021",
    title: "First Line of Code",
    desc: "Fell in love with Python. Never looked back.",
  },
  {
    year: "2022",
    title: "Class X",
    desc: "Scored 94% in CBSE boards.",
  },
  {
    year: "2024",
    title: "B.Tech CSE",
    desc: "Started Computer Science & Engineering.",
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
    icon: "rocket",
    title: "Your Role",
    company: "Company Name",
    duration: "2024 — Present",
  },
  // aur add karo jaise badhti jao
];

export const achievements = [
  {
    icon: "trophy",
    value: "1st",
    label: "Hackathon Winner",
    sub: "Your hackathon name",
  },
  {
    icon: "star",
    value: "500+",
    label: "GitHub Contributions",
    sub: "Across all repos",
  },
  {
    icon: "medal",
    value: "Top 8%",
    label: "LeetCode Rating",
    sub: "Globally ranked",
  },
  {
    icon: "graduation",
    value: "8.5",
    label: "CGPA",
    sub: "Your College, B.Tech CSE",
  },
];

export const education = [
  {
    icon: "book",
    degree: "B.TECH (2ND YEAR)",
    institution: "Your College Name",
    stream: "Computer Science & Engineering",
    duration: "2024 — 2028",
    score: "CGPA 8.5 / 10",
    gradient: "from-slate-800 to-slate-900",
  },
  {
    icon: "school",
    degree: "CLASS XII (SENIOR SECONDARY)",
    institution: "Your 12th School Name",
    stream: "PCM • CBSE / State Board",
    duration: "2023 — 2024",
    score: "92%",
    gradient: "from-indigo-950 to-slate-900",
  },
  {
    icon: "school",
    degree: "CLASS X (SECONDARY)",
    institution: "Your 10th School Name",
    stream: "CBSE / State Board",
    duration: "2021 — 2022",
    score: "94%",
    gradient: "from-slate-900 to-violet-950",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "@yourhandle",
    stats: "X+ problems • XXXX rating",
    link: "https://leetcode.com/yourhandle",
  },
  {
    platform: "GeeksforGeeks",
    handle: "@yourhandle",
    stats: "Institute Rank X • XXX+ solved",
    link: "https://geeksforgeeks.org/user/yourhandle",
  },
  {
    platform: "Codeforces",
    handle: "@yourhandle",
    stats: "Pupil • Max XXXX",
    link: "https://codeforces.com/profile/yourhandle",
  },
  {
    platform: "CodeChef",
    handle: "@yourhandle",
    stats: "X★ • Max XXXX",
    link: "https://codechef.com/users/yourhandle",
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
    issuer: "COURSERA • META",
    title: "Meta Front-End Developer",
    year: "2025",
    image: "/certificates/cert1.jpg",
    link: "#",
    gradient: "from-cyan-950 to-slate-900",
  },
  {
    issuer: "AMAZON WEB SERVICES",
    title: "AWS Cloud Practitioner",
    year: "2025",
    image: "/certificates/cert2.jpg",
    link: "#",
    gradient: "from-slate-900 to-indigo-950",
  },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};