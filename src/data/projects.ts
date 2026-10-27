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
    id: "foodwala",
    name: "FoodWala – Food Ordering Website",
    category: "Java",
    description: "Enterprise Java full-stack food delivery web application built for Bengaluru with 100+ restaurants, 750+ menu items, Razorpay test payments, and multi-role authentication.",
    technologies: ["Java", "Java Servlets", "JSP", "MySQL", "HTML5", "CSS3", "JavaScript", "Razorpay API"],
    repository: "https://github.com/vishnu6301382491-dev/Foodwala",
    liveUrl: "https://vishnu6301382491-dev.github.io/Foodwala",
    image: "/foodwala_preview.png",
    featured: true,
    problemSolved: "Solves end-to-end food ordering friction in metropolitan Bengaluru with verified restaurant catalogs, lightning-fast ordering, multiple payment channels, and dedicated stakeholder portals.",
    features: [
      "Catalog of 100+ iconic Bengaluru restaurants and 750+ categorized menu dishes",
      "Instant search, cuisine filters, and quick tags (fast delivery, pure veg, 4.5+ rating, promo codes)",
      "Multi-role RBAC access with separate dashboards for Customers, Restaurant Managers, Delivery Partners, and Admin Staff",
      "Seamless cart and checkout supporting Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery with Razorpay test mode integration",
      "Real-time order tracking, address book management, order history, dark mode theme toggle, and receipt generation"
    ]
  },
  {
    id: "aqi-genetic",
    name: "AQI Prediction Dashboard (GA-KELM)",
    category: "Data Science",
    description: "Advanced atmospheric air quality prediction system utilizing a Genetic Algorithm paired with Kernel Extreme Learning Machine (GA-KELM) to forecast regional pollutant levels.",
    technologies: ["Python", "Genetic Algorithm", "KELM", "Machine Learning", "JavaScript", "Chart.js", "HTML5"],
    repository: "https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm",
    liveUrl: "https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm",
    image: "/aqi_dashboard_preview.jpg",
    featured: true,
    problemSolved: "Overcomes traditional statistical forecasting limits by pairing evolutionary Genetic Algorithms with Kernel Extreme Learning Machine for hyperparameter optimization and accurate pollutant forecasting.",
    features: [
      "Hybrid GA-KELM model optimizing kernel parameters and hidden layer weights for high forecasting accuracy",
      "Location-based telemetry monitoring key atmospheric pollutants including PM2.5, PM10, NO2, CO, and O3",
      "Interactive time-series visualizations, historical pollutant comparisons, and trend charts on a dark-themed UI",
      "Real-time AQI health category advisories and predictive warning thresholds for environmental safety"
    ]
  },
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
    category: "AI/ML",
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
    name: "PREPGENIUS AI Placement Engine",
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
    featured: false,
    problemSolved: "Streamlines vacation planning by consolidating multi-service travel bookings into one smooth interface with admin management.",
    features: [
      "Unified booking portal for flights, hotels, packages, and car rentals",
      "Dynamic search filters by destination, date range, price, and amenities",
      "Interactive admin portal for managing tour packages and booking records",
      "Responsive mobile-first design with smooth transition animations"
    ]
  },
  {
    id: "railway-reservation",
    name: "Railway Reservation System",
    category: "Java",
    description: "Java-driven railway ticketing and seat reservation application with train scheduling, PNR generation, and berth allocation logic.",
    technologies: ["Java", "OOP", "MySQL", "JDBC", "HTML5", "CSS3"],
    repository: "https://github.com/vishnu6301382491-dev/Railway-Reservation-System",
    liveUrl: "https://vishnu6301382491-dev.github.io/Railway-Reservation-System/",
    image: "/rentalhub_preview.jpg",
    featured: false,
    problemSolved: "Simulates high-concurrency train seat booking, quota management, and cancellation refunds using relational data constraints."
  },
  {
    id: "smart-job-portal",
    name: "Smart Job Portal (Client & Server)",
    category: "Full Stack",
    description: "End-to-end recruitment portal allowing job seekers to search & apply for positions while enabling employers to post jobs and review resumes.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    repository: "https://github.com/vishnu6301382491-dev/smart-job-portal",
    liveUrl: "https://vishnu6301382491-dev.github.io/smart-job-portal/",
    image: "/rentalhub_preview.jpg",
    featured: false,
    problemSolved: "Connects employers and candidates efficiently with job application management and candidate tracking."
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
    id: "nutrigaze",
    name: "NutriGaze Smart Produce Sorting",
    category: "AI/ML",
    description: "AI computer vision system using Transfer Learning with pre-trained CNN models to classify produce into 10 healthy/rotten classes.",
    technologies: ["Python", "TensorFlow", "Keras", "Transfer Learning", "OpenCV"],
    repository: "https://github.com/vishnu6301382491-dev/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables",
    liveUrl: "https://vishnu6301382491-dev.github.io/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables/",
    image: "/aqi_dashboard_preview.jpg",
    featured: false,
    problemSolved: "Automates produce quality control in supply chains to reduce food waste and identify rotten fruits/vegetables instantly."
  },
  {
    id: "smart-attendance",
    name: "Smart Attendance System",
    category: "Full Stack",
    description: "Digital academic and workplace attendance management system with biometric/QR verification and automated reporting analytics.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    repository: "https://github.com/vishnu6301382491-dev/Smart_Attedance_System",
    liveUrl: "https://vishnu6301382491-dev.github.io/Smart_Attedance_System/",
    image: "/prepgenius_preview.jpg",
    featured: false,
    problemSolved: "Eliminates proxy attendance and manual register tallying through automated digital timestamping and percentage calculations."
  },
  {
    id: "health-system",
    name: "Health Management System",
    category: "Healthcare",
    description: "Comprehensive medical record management portal tracking patient vitals, clinical diagnostic reports, and physician prescriptions.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "MySQL"],
    repository: "https://github.com/vishnu6301382491-dev/Health-Management-System-",
    liveUrl: "https://vishnu6301382491-dev.github.io/Health-Management-System-/",
    image: "/health_app_preview.jpg",
    featured: false,
    problemSolved: "Centralizes clinical history and patient diagnosis documentation in an accessible, structured digital format."
  },
  {
    id: "agri365",
    name: "AGRI365 Platform & Price Info",
    category: "AgriTech",
    description: "Real-time agricultural market commodity pricing and weather diagnostic web application providing daily crop rates across regional mandis.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Tailwind CSS"],
    repository: "https://github.com/vishnu6301382491-dev/Price_Info_project",
    liveUrl: "https://vishnu6301382491-dev.github.io/Price_Info_project/",
    image: "/health_app_preview.jpg",
    featured: false,
    problemSolved: "Delivers daily transparent mandi pricing to prevent middleman exploitation and empower farmers."
  },
  {
    id: "portfolio-repo",
    name: "Developer Portfolio Codebase",
    category: "Web Dev",
    description: "Personal developer portfolio web application featuring modern dark glassmorphism, 3D WebGL scenes, interactive CLI, and full project showcase.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
    repository: "https://github.com/vishnu6301382491-dev/portfolio",
    liveUrl: "https://vishnu6301382491-dev.github.io/portfolio/",
    image: "/rentalhub_preview.jpg",
    featured: false,
    problemSolved: "Showcases software engineering experience, open-source projects, skills matrix, and interactive CLI."
  }
];
