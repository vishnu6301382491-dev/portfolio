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
    id: "btech-ds",
    title: "B.Tech in Computer Science & Engineering (Data Science)",
    issuer: "Rise Krishna Sai Prakasam Group of Institutions",
    date: "2022 — 2026",
    category: "Degree",
    description: "Specializing in Distributed Systems, Big Data Analytics, Deep Learning Architectures, and Full-Stack Web Development with continuous high academic merit.",
    skills: ["Data Structures", "Algorithms", "Database Systems", "Machine Learning"]
  },
  {
    id: "fullstack-java",
    title: "Full Stack Java & Enterprise Architectures",
    issuer: "Technical Certification",
    date: "2024",
    category: "Architecture",
    description: "Enterprise application engineering covering Core Java, Spring Boot microservices, REST APIs, Hibernate ORM, and secure RBAC systems.",
    skills: ["Java", "Spring Boot", "REST APIs", "MySQL"]
  },
  {
    id: "ml-tensorflow",
    title: "Applied Machine Learning & Neural Networks",
    issuer: "AI / Data Science Specialization",
    date: "2024",
    category: "AI / ML",
    description: "Deep learning models, CNN architectures for image recognition, Transfer Learning, and Evolutionary Genetic Algorithms for predictive analytics.",
    skills: ["TensorFlow", "Keras", "CNNs", "Genetic Algorithms"]
  },
  {
    id: "modern-frontend",
    title: "Modern React, Next.js & TypeScript Mastery",
    issuer: "Web Engineering",
    date: "2024",
    category: "Frontend",
    description: "Next.js App Router, SSR/SSG workflows, Tailwind CSS responsive systems, and performance tuning for 60FPS fluid client interactions.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "intermediate-mpc",
    title: "Intermediate Higher Secondary (MPC) — 90.4%",
    issuer: "State Board of Intermediate Education",
    date: "2020 — 2022",
    category: "Academic",
    description: "Mathematics, Physics, and Chemistry foundation with distinguished honors (90.4% aggregate).",
    skills: ["Mathematics", "Physics", "Analytical Reasoning"]
  },
  {
    id: "open-source",
    title: "Open Source Leadership & Technical Contributions",
    issuer: "GitHub Ecosystem",
    date: "2023 — Present",
    category: "Engineering",
    description: "Published 14 verified repositories across AI, AgriTech, Healthcare, and Distributed Marketplace platforms with 11+ live deployments.",
    skills: ["Git", "GitHub Actions", "CI/CD", "System Design"]
  }
];
