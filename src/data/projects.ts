export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  repository: string;
  liveUrl: string | null;
  image: string;
  featured: boolean;
  problemSolved?: string;
  features?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "rentalhub",
    name: "RentalHub.com",
    category: "Full Stack",
    description: "Modern rental marketplace for discovering, listing, and booking rental items with real-time filters, booking management, and owner dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React", "Lucide React"],
    repository: "https://github.com/vishnu6301382491-dev/RentalHub.com",
    liveUrl: "https://vishnu6301382491-dev.github.io/RentalHub.com/",
    image: "/rentalhub_preview.jpg",
    featured: true,
    problemSolved: "Eliminates complexity in renting equipment and property by offering a unified discovery engine, instant owner contact, and verified listing management.",
    features: [
      "Real-time search and multi-category filtering for rental properties & items",
      "Detailed item viewing, owner contact, and booking reservation system",
      "Interactive user dashboard for tracking active bookings and favorite listings",
      "Next.js API route architecture with MongoDB database integration"
    ]
  },
  {
    id: "speakai",
    name: "AI-Speaking-Agent (SpeakAI)",
    category: "AI / ML",
    description: "AI-powered English speaking coach providing real-time voice feedback, grammar analysis, vocabulary expansion, and pronunciation practice.",
    technologies: ["React", "Vite", "Node.js", "Express", "Tailwind CSS", "Speech AI"],
    repository: "https://github.com/vishnu6301382491-dev/AI-Speaking-Agent",
    liveUrl: "https://vishnu6301382491-dev.github.io/AI-Speaking-Agent/",
    image: "/speakai_preview.jpg",
    featured: true,
    problemSolved: "Solves language learning hesitation by providing a judgement-free 24/7 AI speech partner with automated grammar & fluency diagnostics.",
    features: [
      "Interactive conversational AI persona for spoken English practice",
      "Instant grammar correction and vocabulary recommendation engine",
      "Audio speech recognition and synthesis integration",
      "Progress analytics tracking fluency, pronunciation, and accuracy"
    ]
  },
  {
    id: "agri-ai",
    name: "AGRI-AI Crop Scanner",
    category: "AgriTech",
    description: "Next-generation agricultural intelligence platform enabling farmers to detect crop diseases from leaf scans and receive AI treatment advice.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Machine Learning", "TensorFlow.js"],
    repository: "https://github.com/vishnu6301382491-dev/AGRI-AI",
    liveUrl: "https://vishnu6301382491-dev.github.io/AGRI-AI/",
    image: "/health_app_preview.jpg",
    featured: true,
    problemSolved: "Helps farmers detect early crop disease symptoms to prevent crop loss and optimize pesticide usage.",
    features: [
      "Instant leaf image scanning for crop health diagnosis",
      "Disease classification with severity assessment and remedial treatments",
      "Multilingual farmer-friendly UI tailored for mobile field use",
      "Real-time weather and seasonal crop advice integration"
    ]
  },
  {
    id: "prepgenius",
    name: "PREPGENIUS AI Portal",
    category: "EdTech",
    description: "AI-driven technical interview preparation platform offering customized coding mock interviews, system design drills, and instant feedback.",
    technologies: ["JavaScript", "React", "Node.js", "Tailwind CSS", "AI API"],
    repository: "https://github.com/vishnu6301382491-dev/PREPGENIUS",
    liveUrl: "https://vishnu6301382491-dev.github.io/PREPGENIUS/",
    image: "/prepgenius_preview.jpg",
    featured: true,
    problemSolved: "Prepares software engineers for technical rounds with AI simulated interviews, automated code feedback, and progress tracking.",
    features: [
      "Role-specific mock interview question generator",
      "Automated answer evaluation with instant scoring and recommendations",
      "Track progress across Data Structures, Algorithms, and System Design",
      "Interactive flashcards and interview cheat sheets"
    ]
  },
  {
    id: "travel-booking",
    name: "Travel-Booking (Voyage)",
    category: "Travel",
    description: "Comprehensive travel booking platform featuring 8 travel services including flights, hotel reservations, car rentals, and admin portal.",
    technologies: ["React", "Vite", "JavaScript", "React Router", "Lucide React"],
    repository: "https://github.com/vishnu6301382491-dev/Travel-Booking",
    liveUrl: "https://vishnu6301382491-dev.github.io/Travel-Booking/",
    image: "/voyage_travel_preview.jpg",
    featured: true,
    problemSolved: "Streamlines vacation planning by consolidating multi-service travel bookings into one smooth interface with admin management.",
    features: [
      "Unified booking portal for flights, hotels, packages, and car rentals",
      "Dynamic search filters by destination, date range, price, and amenities",
      "Interactive admin portal for managing tour packages and booking records",
      "Responsive mobile-first design with smooth transition animations"
    ]
  },
  {
    id: "aqi-genetic",
    name: "Air Quality Forecasting (GA)",
    category: "Data Science",
    description: "Atmospheric air quality prediction system utilizing Genetic Algorithms and machine learning regression to model pollutant dynamics.",
    technologies: ["Python", "Genetic Algorithms", "Machine Learning", "HTML5", "Chart.js"],
    repository: "https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm",
    liveUrl: "https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm/",
    image: "/aqi_dashboard_preview.jpg",
    featured: true,
    problemSolved: "Predicts regional air quality index trends using evolutionary computing algorithms to optimize hyperparameter selection.",
    features: [
      "Genetic Algorithm optimization for hyperparameter selection and forecasting",
      "Real-time pollutant tracking (PM2.5, PM10, NO2, CO, O3)",
      "Interactive trend visualization charts and historical comparison tools",
      "Environmental safety warnings based on predicted AQI index thresholds"
    ]
  },
  {
    id: "nutrigaze",
    name: "NutriGaze Smart Produce Sorting",
    category: "Computer Vision",
    description: "AI computer vision system using Transfer Learning with pre-trained CNN models to classify produce into 10 healthy/rotten classes.",
    technologies: ["Python", "TensorFlow", "Keras", "Transfer Learning", "HTML5"],
    repository: "https://github.com/vishnu6301382491-dev/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables",
    liveUrl: "https://vishnu6301382491-dev.github.io/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables/",
    image: "/aqi_dashboard_preview.jpg",
    featured: false,
    problemSolved: "Automates produce quality control in supply chains to reduce food waste and identify rotten fruits/vegetables instantly."
  },
  {
    id: "docspot",
    name: "Seamless Health Appointment Booking",
    category: "Healthcare",
    description: "Healthcare platform streamlining doctor searches, patient appointment scheduling, specialty filtering, and consultation tracking.",
    technologies: ["React", "Express", "Node.js", "Framer Motion", "Recharts"],
    repository: "https://github.com/vishnu6301382491-dev/Seamless-appoinment-booking-for-health",
    liveUrl: "https://vishnu6301382491-dev.github.io/Seamless-appoinment-booking-for-health/",
    image: "/health_app_preview.jpg",
    featured: false,
    problemSolved: "Simplifies healthcare access by offering real-time doctor availability calendars and instant appointment confirmations."
  },
  {
    id: "smart-job-portal",
    name: "Smart Job Portal (Client & Server)",
    category: "Full Stack",
    description: "End-to-end recruitment portal allowing job seekers to search & apply for positions while enabling employers to post jobs.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    repository: "https://github.com/vishnu6301382491-dev/smart-job-portal",
    liveUrl: "https://vishnu6301382491-dev.github.io/smart-job-portal/",
    image: "/rentalhub_preview.jpg",
    featured: false,
    problemSolved: "Connects employers and candidates efficiently with job application management and candidate tracking."
  },
  {
    id: "smart-job-portal-api",
    name: "Smart_Job_Portal Architecture",
    category: "Backend",
    description: "Full-stack recruitment REST API micro-backend engine supporting job indexing, candidate applications, and auth RBAC.",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
    repository: "https://github.com/vishnu6301382491-dev/Smart_Job_Portal",
    liveUrl: "https://vishnu6301382491-dev.github.io/Smart_Job_Portal/",
    image: "/rentalhub_preview.jpg",
    featured: false,
    problemSolved: "Scalable backend service architecture powering job board queries, security tokens, and candidate database operations."
  },
  {
    id: "agri365",
    name: "AGRI365 Platform",
    category: "AgriTech",
    description: "Comprehensive agricultural platform delivering real-time crop market pricing, weather forecasting, and farming diagnostics.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "REST APIs"],
    repository: "https://github.com/vishnu6301382491-dev/AGRI365",
    liveUrl: "https://vishnu6301382491-dev.github.io/Price_Info_project/",
    image: "/health_app_preview.jpg",
    featured: false,
    problemSolved: "Provides daily crop price transparency and weather alerts to help farmers maximize agricultural yield."
  },
  {
    id: "price-info",
    name: "Price_Info_project",
    category: "AgriTech",
    description: "Real-time agricultural market pricing web portal providing daily updates on commodity prices and market trends.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    repository: "https://github.com/vishnu6301382491-dev/Price_Info_project",
    liveUrl: "https://vishnu6301382491-dev.github.io/Price_Info_project/",
    image: "/health_app_preview.jpg",
    featured: false,
    problemSolved: "Enables fast local crop pricing search and market rate comparisons."
  },
  {
    id: "portfolio-repo",
    name: "Developer Portfolio Codebase",
    category: "Web Dev",
    description: "Personal developer portfolio web application featuring modern glassmorphism, 3D WebGL scenes, interactive CLI, and full project showcase.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    repository: "https://github.com/vishnu6301382491-dev/portfolio",
    liveUrl: "https://vishnu6301382491-dev.github.io/portfolio/",
    image: "/rentalhub_preview.jpg",
    featured: false,
    problemSolved: "Showcases software engineering experience, open-source projects, skills matrix, and interactive CLI."
  },
  {
    id: "profile-readme",
    name: "vishnu6301382491-dev Profile",
    category: "Web Dev",
    description: "Special GitHub profile repository containing developer documentation, tech stack badges, activity metrics, and goals.",
    technologies: ["Markdown", "GitHub Badges", "Automation"],
    repository: "https://github.com/vishnu6301382491-dev/vishnu6301382491-dev",
    liveUrl: null,
    image: "/speakai_preview.jpg",
    featured: false,
    problemSolved: "Centralizes developer profile bio, social channels, and activity badges on GitHub."
  }
];
