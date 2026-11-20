export const categories = [
  'All',
  'Java Full Stack',
  'Full Stack',
  'AI / ML',
  'AgriTech',
  'Healthcare',
  'EdTech',
  'Travel',
];

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  category: string;
  code: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const GITHUB = 'https://github.com/vishnu6301382491-dev';

export const projects: Project[] = [
  {
    id: 'foodwala',
    title: 'FoodWala — Food Ordering Platform',
    blurb:
      'Enterprise Java full-stack food delivery platform built for Bengaluru with 100+ restaurants, 750+ menu dishes, cuisine filters, promo codes, cart, checkout, multi-role RBAC logins (customer, manager, delivery partner, admin), user profiles, Razorpay test mode payments, and dark mode.',
    tags: ['Java', 'Servlets', 'JSP', 'MySQL', 'Razorpay', 'RBAC', 'HTML5', 'CSS3', 'JavaScript'],
    category: 'Java Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/Foodwala',
    live: 'https://vishnu6301382491-dev.github.io/Foodwala',
    image: '/foodwala_preview.png',
    featured: true,
  },
  {
    id: 'aqi-genetic',
    title: 'AQI Prediction Dashboard (GA-KELM)',
    blurb:
      'Atmospheric air quality prediction model pairing Genetic Algorithms with Kernel Extreme Learning Machine (GA-KELM) for hyperparameter optimization and pollutant forecasting (PM2.5, PM10, NO2, CO, O3) with live interactive telemetry charts on a dark-themed UI.',
    tags: ['Python', 'Genetic Algorithm', 'KELM', 'Machine Learning', 'Chart.js', 'Telemetry'],
    category: 'AI / ML',
    code: 'https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
    live: 'https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
    image: '/aqi_dashboard_preview.jpg',
    featured: true,
  },
  {
    id: 'rentalhub',
    title: 'RentalHub.com — Property & Vehicle Rental Engine',
    blurb:
      'Full-stack rental marketplace for discovering, listing, and booking equipment, vehicles, and properties with real-time search filters, booking management, and an interactive owner dashboard.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'React', 'Lucide React'],
    category: 'Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/RentalHub.com',
    live: 'https://vishnu6301382491-dev.github.io/RentalHub.com/',
    image: '/rentalhub_preview.jpg',
    featured: true,
  },
  {
    id: 'speakai',
    title: 'AI-Speaking-Agent (SpeakAI) — Fluency Coach',
    blurb:
      'AI-driven English speaking coach delivering real-time voice feedback, automated conversational grammar analysis, vocabulary suggestions, and pronunciation diagnostics with progress tracking.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'Tailwind CSS', 'Speech AI', 'Web Audio'],
    category: 'EdTech',
    code: 'https://github.com/vishnu6301382491-dev/AI-Speaking-Agent',
    live: 'https://vishnu6301382491-dev.github.io/AI-Speaking-Agent/',
    image: '/speakai_preview.jpg',
    featured: true,
  },
  {
    id: 'prepgenius',
    title: 'PREPGENIUS — AI Placement & Technical Interview Engine',
    blurb:
      'Technical interview readiness platform featuring role-specific AI coding mocks, automated code review, system design drills, instant evaluation scoring, and skill radar analytics.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'AI APIs', 'JavaScript', 'Interview Prep'],
    category: 'EdTech',
    code: 'https://github.com/vishnu6301382491-dev/PREPGENIUS',
    live: 'https://vishnu6301382491-dev.github.io/PREPGENIUS/',
    image: '/prepgenius_preview.jpg',
    featured: true,
  },
  {
    id: 'agri-ai',
    title: 'AGRI-AI — Crop Disease Scanner & Advisory Portal',
    blurb:
      'Agricultural intelligence platform enabling farmers to detect crop diseases from leaf scans with severity assessments, remedial treatments, multilingual UI, and seasonal weather advisory.',
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'TensorFlow.js', 'Machine Learning', 'AgriTech'],
    category: 'AgriTech',
    code: 'https://github.com/vishnu6301382491-dev/AGRI-AI',
    live: 'https://vishnu6301382491-dev.github.io/AGRI-AI/',
    image: '/health_app_preview.jpg',
    featured: false,
  },
  {
    id: 'travel-booking',
    title: 'Travel-Booking (Voyage) — Multi-Service Platform',
    blurb:
      'Consolidated travel booking engine featuring 8 travel services including flights, hotel reservations, vacation packages, car rentals, and administrative controls with responsive layout.',
    tags: ['React', 'Vite', 'JavaScript', 'React Router', 'Lucide React', 'Travel'],
    category: 'Travel',
    code: 'https://github.com/vishnu6301382491-dev/Travel-Booking',
    live: 'https://vishnu6301382491-dev.github.io/Travel-Booking/',
    image: '/voyage_travel_preview.jpg',
    featured: false,
  },
  {
    id: 'designesthetics-travel',
    title: 'DesignEsthetics Travel Application',
    blurb:
      'Modern aesthetics travel exploration application featuring curated travel destination guides, immersive fluid animations, dynamic typography, and high-performance client routing.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Travel UI'],
    category: 'Travel',
    code: 'https://github.com/vishnu6301382491-dev/DESIGNESTHETICS-TRAVEL-APPLICATION',
    live: 'https://vishnu6301382491-dev.github.io/DESIGNESTHETICS-TRAVEL-APPLICATION/',
    image: '/voyage_travel_preview.jpg',
    featured: false,
  },
  {
    id: 'railway-reservation',
    title: 'Railway Reservation System — Booking & Ticketing Portal',
    blurb:
      'High-reliability railway seat booking and reservation platform managing train schedules, passenger PNR generation, berth quotas, relational database constraints, and ticket cancellations.',
    tags: ['Java', 'OOP', 'MySQL', 'JDBC', 'HTML5', 'CSS3', 'Relational DB'],
    category: 'Java Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/Railway-Reservation-System',
    live: 'https://vishnu6301382491-dev.github.io/Railway-Reservation-System/',
    image: '/rentalhub_preview.jpg',
    featured: false,
  },
  {
    id: 'smart-job-portal',
    title: 'Smart Job Portal (Client & Applicant Gateway)',
    blurb:
      'Full-stack career board allowing job seekers to search and apply for openings with automated resume profiling, saved jobs, application status alerts, and recruiter dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST API'],
    category: 'Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/smart-job-portal',
    live: 'https://smart-job-portal-client-rosy.vercel.app',
    image: '/rentalhub_preview.jpg',
    featured: false,
  },
  {
    id: 'smart-job-portal-api',
    title: 'Smart_Job_Portal Architecture (Backend REST API)',
    blurb:
      'Scalable backend service architecture powering job board queries, security tokens, candidate indexing, authentication middleware, and MongoDB database operations.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT', 'RBAC'],
    category: 'Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/Smart_Job_Portal',
    live: 'https://vishnu6301382491-dev.github.io/Smart_Job_Portal/',
    image: '/rentalhub_preview.jpg',
    featured: false,
  },
  {
    id: 'docspot',
    title: 'Seamless Health Appointment Booking (DocSpot)',
    blurb:
      'Healthcare scheduling platform offering real-time doctor availability calendars, medical specialty filtering, instantaneous appointment confirmations, and patient clinical records.',
    tags: ['React', 'Express', 'Node.js', 'Framer Motion', 'Recharts', 'Healthcare'],
    category: 'Healthcare',
    code: 'https://github.com/vishnu6301382491-dev/Seamless-appoinment-booking-for-health',
    live: 'https://vishnu6301382491-dev.github.io/Seamless-appoinment-booking-for-health/',
    image: '/health_app_preview.jpg',
    featured: false,
  },
  {
    id: 'nutrigaze',
    title: 'NutriGaze — Produce Sorting via Transfer Learning',
    blurb:
      'Computer vision automated grading pipeline using MobileNet transfer learning to classify fresh fruits and vegetables into 10 healthy/rotten quality grades with visual confidence metrics.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Transfer Learning', 'OpenCV', 'CNN'],
    category: 'AI / ML',
    code: 'https://github.com/vishnu6301382491-dev/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables',
    live: 'https://project-tgomd.vercel.app',
    image: '/aqi_dashboard_preview.jpg',
    featured: false,
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance System — Automated Campus Tracking',
    blurb:
      'Automated campus and workplace attendance management system with secure identity verification, timestamping, proxy elimination, and analytics dashboards.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Authentication', 'EdTech'],
    category: 'EdTech',
    code: 'https://github.com/vishnu6301382491-dev/Smart_Attedance_System',
    live: 'https://vishnu6301382491-dev.github.io/Smart_Attedance_System/',
    image: '/prepgenius_preview.jpg',
    featured: false,
  },
  {
    id: 'health-management-system',
    title: 'Health Management System — Clinical Records Portal',
    blurb:
      'Enterprise patient record management portal tracking patient vitals, diagnostic histories, doctor consultations, and prescription reports with MySQL relational schemas.',
    tags: ['Java', 'MySQL', 'JDBC', 'HTML5', 'CSS3', 'REST APIs'],
    category: 'Healthcare',
    code: 'https://github.com/vishnu6301382491-dev/Health-Management-System-',
    live: 'https://vishnu6301382491-dev.github.io/Health-Management-System-/',
    image: '/health_app_preview.jpg',
    featured: false,
  },
  {
    id: 'agri365',
    title: 'AGRI365 Platform — Agriculture & Crop Pricing',
    blurb:
      'Comprehensive agricultural commodity pricing and diagnostic portal delivering daily mandi rate updates, transparent crop price comparisons, and weather forecasts for farmers.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'REST APIs', 'AgriTech'],
    category: 'AgriTech',
    code: 'https://github.com/vishnu6301382491-dev/AGRI365',
    live: 'https://project-tgomd.vercel.app',
    image: '/health_app_preview.jpg',
    featured: false,
  },
  {
    id: 'price-info',
    title: 'Price_Info_project — Real-Time Mandi Rates',
    blurb:
      'Agricultural market rate web portal offering commodity price tracking across regional mandis, price search by crop and market location, and price trend visualizers.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'AgriTech'],
    category: 'AgriTech',
    code: 'https://github.com/vishnu6301382491-dev/Price_Info_project',
    live: 'https://vishnu6301382491-dev.github.io/Price_Info_project/',
    image: '/health_app_preview.jpg',
    featured: false,
  },
  {
    id: 'portfolio-repo',
    title: 'Developer Portfolio Codebase',
    blurb:
      'Personal developer portfolio web application built with Next.js, Obsidian black aesthetic, Cyberpunk spotlight reticle reveal, 3D laptop dive, glassmorphic UI, and interactive CLI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis', 'Canvas'],
    category: 'Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/portfolio',
    live: 'https://vishnu6301382491-dev.github.io/portfolio/',
    image: '/rentalhub_preview.jpg',
    featured: false,
  },
  {
    id: 'profile-readme',
    title: 'vishnu6301382491-dev GitHub Profile',
    blurb:
      'Verified GitHub developer profile repository documenting software engineering skills, tech stack badges, open-source repositories, and contact information.',
    tags: ['GitHub', 'Markdown', 'Documentation', 'CI/CD'],
    category: 'Full Stack',
    code: 'https://github.com/vishnu6301382491-dev/vishnu6301382491-dev',
    live: 'https://github.com/vishnu6301382491-dev',
    image: '/rentalhub_preview.jpg',
    featured: false,
  },
];
