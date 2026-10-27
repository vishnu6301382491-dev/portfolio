export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  skills: string[];
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "tap-academy-intern",
    title: "Java Full Stack Development Training & Internship",
    issuer: "TAP Academy",
    date: "May 2026 — Present",
    category: "Internship",
    description: "Intensive Java full-stack web development training and coding practice, building production web applications with Core Java, Servlets, JSP, MySQL, and modern JavaScript.",
    skills: ["Java", "Servlets", "JSP", "MySQL", "JavaScript", "HTML5", "CSS3", "Razorpay API"]
  },
  {
    id: "btech-ds",
    title: "B.Tech in Computer Science & Engineering (Data Science) — CGPA 7.78",
    issuer: "Rise Krishna Sai Prakasam Group of Institutions",
    date: "Graduated Apr 2026",
    category: "Degree",
    description: "Specialized in Object-Oriented Programming, Database Systems (MySQL), Applied Data Science, Machine Learning, and Full-Stack Web Development.",
    skills: ["Java", "Data Structures", "Algorithms", "Database Systems", "Machine Learning"]
  },
  {
    id: "fullstack-java",
    title: "Full Stack Java & Enterprise Web Architecture",
    issuer: "Technical Specialization",
    date: "2026",
    category: "Architecture",
    description: "Enterprise application engineering covering Core Java, Servlets, JSP, REST microservices, JDBC, MySQL, and multi-role RBAC security.",
    skills: ["Java", "Java Servlets", "JSP", "REST APIs", "MySQL", "RBAC"]
  },
  {
    id: "ml-tensorflow",
    title: "Applied Machine Learning & GA-KELM Forecasting",
    issuer: "AI / Data Science Specialization",
    date: "2025",
    category: "AI / ML",
    description: "GA-KELM atmospheric air quality prediction dashboard, CNN architectures for produce sorting, and Transfer Learning models.",
    skills: ["Python", "Genetic Algorithms", "KELM", "Machine Learning", "TensorFlow"]
  },
  {
    id: "modern-frontend",
    title: "Modern React, Next.js & TypeScript Mastery",
    issuer: "Web Engineering",
    date: "2025",
    category: "Frontend",
    description: "Next.js App Router, SSR/SSG workflows, Tailwind CSS responsive glassmorphism, and performance optimization for 60FPS fluid client interactions.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"]
  },
  {
    id: "open-source",
    title: "Open Source Leadership & Technical Contributions",
    issuer: "GitHub Ecosystem (vishnu6301382491-dev)",
    date: "2023 — Present",
    category: "Engineering",
    description: "Published 19 verified repositories across Java Full Stack, AI/ML, AgriTech, Healthcare, and Distributed Marketplace platforms with 17+ live deployments.",
    skills: ["Git", "GitHub Actions", "CI/CD", "System Design"]
  }
];
