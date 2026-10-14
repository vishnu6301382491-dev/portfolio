export const categories = [
  'All',
  'Full Stack',
  'AI/ML',
  'AgriTech',
  'Healthcare',
  'EdTech',
  'Travel',
  'Data Science',
  'Computer Vision',
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
};

export const GITHUB = 'https://github.com/vishnu6301382491-dev';

export const projects: Project[] = [
  {
    title: 'Voyage — Intelligent Travel & Booking Platform',
    blurb: 'Dynamic corporate & leisure travel booking platform with real-time seat matrices, schedule indexing, and multi-tenant billing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    categories: ['Full Stack', 'Travel', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/Voyage',
    live: 'https://vishnu6301382491-dev.github.io/Voyage/',
    image: '/voyage_travel_preview.jpg'
  },
  {
    title: 'NutriGaze — Smart Produce Quality Classifier',
    blurb: 'Computer vision automated grading pipeline using MobileNet transfer learning to classify fresh produce across 6 industrial quality grades.',
    tags: ['Python', 'TensorFlow', 'MobileNet', 'OpenCV', 'Streamlit'],
    categories: ['AI/ML', 'AgriTech', 'Computer Vision'],
    code: 'https://github.com/vishnu6301382491-dev/NutriGaze-Smart-Produce-Quality-Classifier',
    live: 'https://nutrigaze.streamlit.app',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'PrepGenius — Placement Readiness & Skill Engine',
    blurb: 'Full-stack student technical preparation platform with role-based interview mock tests, curated company question sets, and real-time skill radar charts.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js'],
    categories: ['Full Stack', 'EdTech', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/PrepGenius',
    live: 'https://vishnu6301382491-dev.github.io/PrepGenius/',
    image: '/prepgenius_preview.jpg'
  },
  {
    title: 'SpeakAI — Speech-to-Text & Intelligent NLP Suite',
    blurb: 'Audio processing speech intelligence application featuring real-time acoustic transcription, sentiment detection, and automated summarization.',
    tags: ['Python', 'Flask', 'Whisper AI', 'Transformers', 'NLTK'],
    categories: ['AI/ML', 'Data Science'],
    code: 'https://github.com/vishnu6301382491-dev/SpeakAI',
    live: 'https://vishnu6301382491-dev.github.io/SpeakAI/',
    image: '/speakai_preview.jpg'
  },
  {
    title: 'RentalHub — Distributed Property & Vehicle Rental Engine',
    blurb: 'Comprehensive microservices marketplace platform for property and vehicle rentals with identity-verified listings, escrow flows, and booking availability calendar.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT', 'REST API'],
    categories: ['Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/RentalHub',
    live: 'https://vishnu6301382491-dev.github.io/RentalHub/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'Smart Health Monitoring & Predictive Diagnostic Portal',
    blurb: 'Clinical data dashboard computing patient cardiovascular vitals risk scores with rule-based automated physician escalation triggers.',
    tags: ['Python', 'Flask', 'Scikit-Learn', 'Bootstrap', 'SQLite'],
    categories: ['Healthcare', 'AI/ML', 'Data Science'],
    code: 'https://github.com/vishnu6301382491-dev/Health-Monitoring-System',
    live: 'https://vishnu6301382491-dev.github.io/Health-Monitoring-System/',
    image: '/health_app_preview.jpg'
  },
  {
    title: 'AQI Visualizer — Atmospheric Quality Prediction Platform',
    blurb: 'Multi-city environmental telemetry visualizer streaming atmospheric sensor data with historical spatial heatmaps and time-series forecasts.',
    tags: ['React', 'Python', 'FastAPI', 'Leaflet.js', 'Pandas'],
    categories: ['Data Science', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/AQI-Visualizer',
    live: 'https://vishnu6301382491-dev.github.io/AQI-Visualizer/',
    image: '/aqi_dashboard_preview.jpg'
  },
  {
    title: 'Deepfake Guardian — Forensic Facial Authenticity Verifier',
    blurb: 'Deep learning forensic inspection system analyzing facial landmark frequency anomalies and spatial inconsistencies to flag synthetic media.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'FaceNet', 'CNNs'],
    categories: ['AI/ML', 'Computer Vision'],
    code: 'https://github.com/vishnu6301382491-dev/Deepfake-Detection',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'AgriSense — Crop Health & Soil Moisture Telemetry',
    blurb: 'Precision agricultural IoT dashboard mapping NPK soil metrics and multi-spectral NDVI imagery to suggest targeted irrigation cycles.',
    tags: ['React', 'Node.js', 'Express', 'Chart.js', 'Tailwind CSS'],
    categories: ['AgriTech', 'Full Stack', 'Data Science'],
    code: 'https://github.com/vishnu6301382491-dev/AgriSense',
    live: 'https://vishnu6301382491-dev.github.io/AgriSense/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'PulseRate — Wearable PPG Sensor Vital Analytics Engine',
    blurb: 'Digital signal processing utility extracting heart rate variability (HRV) and real-time arrhythmia alerts from optical photoplethysmography data.',
    tags: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Streamlit'],
    categories: ['Healthcare', 'Data Science'],
    code: 'https://github.com/vishnu6301382491-dev/PulseRate-Analyzer',
    image: '/health_app_preview.jpg'
  },
  {
    title: 'CodeVault — Secure Developer Snippet & Secrets Repository',
    blurb: 'Encrypted cloud code snippet manager with syntax-aware search, private team workspaces, and AES-256 client-side payload encryption.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    categories: ['Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/CodeVault',
    live: 'https://vishnu6301382491-dev.github.io/CodeVault/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'EcoRoute — Carbon-Optimized Urban Logistics Navigator',
    blurb: 'Multi-stop routing algorithm optimizing commercial delivery paths against fuel consumption curves, traffic density, and vehicle elevation models.',
    tags: ['Python', 'Genetic Algorithms', 'NetworkX', 'OpenStreetMap'],
    categories: ['AI/ML', 'Data Science'],
    code: 'https://github.com/vishnu6301382491-dev/EcoRoute-Optimizer',
    image: '/voyage_travel_preview.jpg'
  },
  {
    title: 'FinTrack — Personal Wealth & Automated Expense Analytics',
    blurb: 'Financial tracking web app integrating bank statement parsing, category expenditure charts, and monthly predictive budgeting budgets.',
    tags: ['React', 'Express', 'MongoDB', 'JWT', 'Chart.js'],
    categories: ['Full Stack', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/FinTrack',
    live: 'https://vishnu6301382491-dev.github.io/FinTrack/',
    image: '/rentalhub_preview.jpg'
  },
  {
    title: 'CogniRead — Dyslexia-Friendly Document & Audio Reader',
    blurb: 'Assistive reading interface featuring bionic typography rendering, automated text-to-speech audio synthesis, and visual focus tracking lines.',
    tags: ['JavaScript', 'Web Speech API', 'HTML5 Canvas', 'CSS3'],
    categories: ['EdTech', 'Healthcare', 'Web Dev'],
    code: 'https://github.com/vishnu6301382491-dev/CogniRead',
    live: 'https://vishnu6301382491-dev.github.io/CogniRead/',
    image: '/speakai_preview.jpg'
  }
];
