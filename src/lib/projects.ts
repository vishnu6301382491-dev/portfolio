export const categories = [
  'All',
  'Java',
  'Full Stack',
  'AI/ML',
  'Data Science',
  'AgriTech',
  'Healthcare',
  'EdTech',
  'Travel',
  'Web Dev'
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  categories: string[];
  code: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const GITHUB = 'https://github.com/vishnu6301382491-dev';

export const projects: Project[] = [
  {
    title: 'FoodWala — Food Ordering Website',
    blurb: 'Enterprise Java full-stack food ordering platform built for Bengaluru with 100+ restaurants, 750+ menu dishes, search, cuisine filters, quick tags (fast delivery, pure veg, 4.5+ rating), promo codes, cart, checkout with card/UPI/net banking/COD, multi-role RBAC logins (customer, manager, delivery partner, admin), user profiles, saved addresses, Razorpay test mode payments, orders page, and dark mode.',
    tags: ['Java', 'Java Servlets', 'JSP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Razorpay'],
    categories: ['Java', 'Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Foodwala',
    live: 'https://vishnu6301382491-dev.github.io/Foodwala',
    image: '/foodwala_preview.png',
    featured: true
  },
  {
    title: 'AQI Prediction Dashboard — Genetic Algorithm & KELM',
    blurb: 'Predicts atmospheric air quality (AQI) with GA-KELM model pairing a genetic algorithm with Kernel Extreme Learning Machine. Features location-based air quality data with interactive visualizations on a responsive dark-themed page and forecasts upcoming AQI values with live data processed via Python and JavaScript.',
    tags: ['Python', 'Genetic Algorithm', 'KELM', 'Machine Learning', 'JavaScript', 'Chart.js'],
    categories: ['Data Science', 'AI/ML', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
    live: 'https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
    image: '/aqi_dashboard_preview.jpg',
    featured: true
  },
  {
    title: 'RentalHub.com — Property & Vehicle Rental Engine',
    blurb: 'Modern rental marketplace for discovering, listing, and booking rental equipment and properties with real-time filters, booking management, and owner dashboard.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'React', 'Lucide React'],
    categories: ['Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/RentalHub.com',
    live: 'https://vishnu6301382491-dev.github.io/RentalHub.com/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'AI-Speaking-Agent (SpeakAI) — Speech & Fluency Coach',
    blurb: 'AI-powered English speaking partner delivering real-time voice feedback, automated grammar correction, vocabulary suggestions, and pronunciation analytics.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'Tailwind CSS', 'Speech AI'],
    categories: ['AI/ML', 'EdTech'],
    code: 'https://github.com/vishnu6301382491-dev/AI-Speaking-Agent',
    live: 'https://vishnu6301382491-dev.github.io/AI-Speaking-Agent/',
    image: '/speakai_preview.jpg'
  },
  {
    title: 'AGRI-AI — Crop Disease Scanner & Advisory Portal',
    blurb: 'Agricultural intelligence platform enabling farmers to detect crop diseases from leaf scans with severity assessments, remedies, and real-time advisory.',
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'TensorFlow.js', 'Machine Learning'],
    categories: ['AgriTech', 'AI/ML'],
    code: 'https://github.com/vishnu6301382491-dev/AGRI-AI',
    live: 'https://vishnu6301382491-dev.github.io/AGRI-AI/',
    image: '/health_app_preview.jpg'
  },
  {
    title: 'PREPGENIUS — AI Placement & Technical Interview Engine',
    blurb: 'Technical interview readiness platform featuring role-specific AI coding mocks, automated code review, system design drills, and skill radar scoring.',
    tags: ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'AI APIs'],
    categories: ['Full Stack', 'EdTech', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/PREPGENIUS',
    live: 'https://vishnu6301382491-dev.github.io/PREPGENIUS/',
    image: '/prepgenius_preview.jpg'
  },
  {
    title: 'Travel-Booking (Voyage) — Multi-Service Travel Platform',
    blurb: 'Consolidated travel booking engine featuring 8 travel services including flights, hotel reservations, vacation packages, car rentals, and administrative controls.',
    tags: ['React', 'Vite', 'JavaScript', 'React Router', 'Lucide React'],
    categories: ['Full Stack', 'Travel', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Travel-Booking',
    live: 'https://vishnu6301382491-dev.github.io/Travel-Booking/',
    image: '/voyage_travel_preview.jpg'
  },
  {
    title: 'Railway Reservation System — Booking & Ticketing Portal',
    blurb: 'High-reliability railway seat booking and reservation platform managing train schedules, passenger PNR generation, berth quotas, and cancellation workflows.',
    tags: ['Java', 'OOP', 'MySQL', 'JDBC', 'HTML5', 'CSS3'],
    categories: ['Java', 'Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Railway-Reservation-System',
    live: 'https://vishnu6301382491-dev.github.io/Railway-Reservation-System/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'Smart Job Portal — Recruitment & Career Gateway',
    blurb: 'Full-stack career board allowing job seekers to search and apply for openings with automated resume profiling and recruiters to post positions.',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/smart-job-portal',
    live: 'https://vishnu6301382491-dev.github.io/smart-job-portal/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'Seamless Health Appointment Booking (DocSpot)',
    blurb: 'Healthcare scheduling platform offering real-time doctor availability calendars, specialty filtering, and instantaneous appointment booking confirmations.',
    tags: ['React', 'Express', 'Node.js', 'Framer Motion', 'Tailwind CSS'],
    categories: ['Healthcare', 'Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Seamless-appoinment-booking-for-health',
    live: 'https://vishnu6301382491-dev.github.io/Seamless-appoinment-booking-for-health/',
    image: '/health_app_preview.jpg'
  },
  {
    title: 'NutriGaze — Produce Sorting via Transfer Learning',
    blurb: 'Computer vision automated grading pipeline using MobileNet transfer learning to classify fresh fruits and vegetables into 10 healthy/rotten quality grades.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Transfer Learning', 'OpenCV'],
    categories: ['AI/ML', 'AgriTech'],
    code: 'https://github.com/vishnu6301382491-dev/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables',
    live: 'https://vishnu6301382491-dev.github.io/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables/',
    image: '/aqi_dashboard_preview.jpg'
  },
  {
    title: 'Smart Attendance System — Automated Campus Tracking',
    blurb: 'Automated campus and enterprise attendance management system with secure identity verification, timestamping, and analytics dashboards.',
    tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full Stack', 'EdTech', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Smart_Attedance_System',
    live: 'https://vishnu6301382491-dev.github.io/Smart_Attedance_System/',
    image: '/prepgenius_preview.jpg'
  },
  {
    title: 'Health Management System — Clinical Records Portal',
    blurb: 'Clinical patient record management portal tracking patient vitals, diagnostic histories, doctor consultations, and prescription reports.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'MySQL'],
    categories: ['Healthcare', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Health-Management-System-',
    live: 'https://vishnu6301382491-dev.github.io/Health-Management-System-/',
    image: '/health_app_preview.jpg'
  },
  {
    title: 'AGRI365 & Price Info — Real-Time Mandi Crop Pricing',
    blurb: 'Agricultural commodity pricing portal delivering daily mandi rate updates, transparent crop price comparisons, and weather forecasts for farmers.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Tailwind CSS'],
    categories: ['AgriTech', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Price_Info_project',
    live: 'https://vishnu6301382491-dev.github.io/Price_Info_project/',
    image: '/health_app_preview.jpg'
  },
  {
    title: 'Developer Portfolio Codebase',
    blurb: 'Personal developer portfolio web application built with Next.js, Obsidian black visual language, fluid scrub timeline, glassmorphic UI, and interactive CLI.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis'],
    categories: ['Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/portfolio',
    live: 'https://vishnu6301382491-dev.github.io/portfolio/',
    image: '/rentalhub_preview.jpg'
  }
];
