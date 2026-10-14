/* ==========================================================================
   CHINNAPAREDDY VISHNU VARDHAN REDDY - MASTERPIECE CINEMATIC 3D ENGINE
   3D WebGL Constellation • Physics Parallax • Project Explorer • CLI Terminal
   ========================================================================== */

// 1. REPOSITORY DATASET (14 VERIFIED GITHUB REPOSITORIES)
const PROJECTS = [
  {
    id: "rentalhub",
    name: "RentalHub.com",
    repository: "https://github.com/vishnu6301382491-dev/RentalHub.com",
    liveUrl: "https://vishnu6301382491-dev.github.io/RentalHub.com/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Full Stack",
    description: "Modern rental marketplace for discovering, listing, and booking rental items with real-time filters, booking management, and owner dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React", "Lucide React"],
    featured: true,
    image: "rentalhub_preview.jpg",
    problemSolved: "Eliminates complexity in renting equipment and property by offering a unified discovery engine, instant owner contact, and verified listing management.",
    features: [
      "Real-time search and multi-category filtering for rental properties & items",
      "Detailed item viewing, owner contact, and booking reservation system",
      "Interactive user dashboard for tracking active bookings and favorite listings",
      "Next.js API route architecture with MongoDB database integration"
    ],
    updatedAt: "2026-08-14"
  },
  {
    id: "speakai",
    name: "AI-Speaking-Agent (SpeakAI)",
    repository: "https://github.com/vishnu6301382491-dev/AI-Speaking-Agent",
    liveUrl: "https://vishnu6301382491-dev.github.io/AI-Speaking-Agent/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "AI / ML",
    description: "AI-powered English speaking coach providing real-time voice feedback, grammar analysis, vocabulary expansion, and pronunciation practice.",
    technologies: ["React", "Vite", "Node.js", "Express", "Tailwind CSS", "Speech AI"],
    featured: true,
    image: "speakai_preview.jpg",
    problemSolved: "Solves language learning hesitation by providing a judgement-free 24/7 AI speech partner with automated grammar & fluency diagnostics.",
    features: [
      "Interactive conversational AI persona for spoken English practice",
      "Instant grammar correction and vocabulary recommendation engine",
      "Audio speech recognition and synthesis integration",
      "Progress analytics tracking fluency, pronunciation, and accuracy"
    ],
    updatedAt: "2026-08-10"
  },
  {
    id: "agri-ai",
    name: "AGRI-AI Crop Scanner",
    repository: "https://github.com/vishnu6301382491-dev/AGRI-AI",
    liveUrl: "https://vishnu6301382491-dev.github.io/AGRI-AI/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "AgriTech",
    description: "Next-generation agricultural intelligence platform enabling farmers to detect crop diseases from leaf scans and receive AI treatment advice.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Machine Learning", "TensorFlow.js"],
    featured: true,
    image: "health_app_preview.jpg",
    problemSolved: "Helps farmers detect early crop disease symptoms to prevent crop loss and optimize pesticide usage.",
    features: [
      "Instant leaf image scanning for crop health diagnosis",
      "Disease classification with severity assessment and remedial treatments",
      "Multilingual farmer-friendly UI tailored for mobile field use",
      "Real-time weather and seasonal crop advice integration"
    ],
    updatedAt: "2026-08-06"
  },
  {
    id: "prepgenius",
    name: "PREPGENIUS AI Portal",
    repository: "https://github.com/vishnu6301382491-dev/PREPGENIUS",
    liveUrl: "https://vishnu6301382491-dev.github.io/PREPGENIUS/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "EdTech",
    description: "AI-driven technical interview preparation platform offering customized coding mock interviews, system design drills, and instant feedback.",
    technologies: ["JavaScript", "React", "Node.js", "Tailwind CSS", "AI API"],
    featured: true,
    image: "prepgenius_preview.jpg",
    problemSolved: "Prepares software engineers for technical rounds with AI simulated interviews, automated code feedback, and progress tracking.",
    features: [
      "Role-specific mock interview question generator",
      "Automated answer evaluation with instant scoring and recommendations",
      "Track progress across Data Structures, Algorithms, and System Design",
      "Interactive flashcards and interview cheat sheets"
    ],
    updatedAt: "2026-08-05"
  },
  {
    id: "travel-booking",
    name: "Travel-Booking (Voyage)",
    repository: "https://github.com/vishnu6301382491-dev/Travel-Booking",
    liveUrl: "https://vishnu6301382491-dev.github.io/Travel-Booking/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Travel",
    description: "Comprehensive travel booking platform featuring 8 travel services including flights, hotel reservations, car rentals, and admin portal.",
    technologies: ["React", "Vite", "JavaScript", "React Router", "Lucide React"],
    featured: true,
    image: "voyage_travel_preview.jpg",
    problemSolved: "Streamlines vacation planning by consolidating multi-service travel bookings into one smooth interface with admin management.",
    features: [
      "Unified booking portal for flights, hotels, packages, and car rentals",
      "Dynamic search filters by destination, date range, price, and amenities",
      "Interactive admin portal for managing tour packages and booking records",
      "Responsive mobile-first design with smooth transition animations"
    ],
    updatedAt: "2026-08-05"
  },
  {
    id: "aqi-genetic",
    name: "Air Quality Forecasting (GA)",
    repository: "https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm",
    liveUrl: "https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Data Science",
    description: "Atmospheric air quality prediction system utilizing Genetic Algorithms and machine learning regression to model pollutant dynamics.",
    technologies: ["Python", "Genetic Algorithms", "Machine Learning", "HTML5", "Chart.js"],
    featured: true,
    image: "aqi_dashboard_preview.jpg",
    problemSolved: "Predicts regional air quality index trends using evolutionary computing algorithms to optimize hyperparameter selection.",
    features: [
      "Genetic Algorithm optimization for hyperparameter selection and forecasting",
      "Real-time pollutant tracking (PM2.5, PM10, NO2, CO, O3)",
      "Interactive trend visualization charts and historical comparison tools",
      "Environmental safety warnings based on predicted AQI index thresholds"
    ],
    updatedAt: "2026-08-05"
  },
  {
    id: "nutrigaze",
    name: "NutriGaze Smart Produce Sorting",
    repository: "https://github.com/vishnu6301382491-dev/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables",
    liveUrl: "https://vishnu6301382491-dev.github.io/Smart-Sorting-Transfer-Learning-for-Identifying-Rotten-Fruits-and-Vegetables/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Computer Vision",
    description: "AI computer vision system using Transfer Learning with pre-trained CNN models to classify produce into 10 healthy/rotten classes.",
    technologies: ["Python", "TensorFlow", "Keras", "Transfer Learning", "HTML5/CSS3"],
    featured: false,
    image: "aqi_dashboard_preview.jpg",
    problemSolved: "Automates produce quality control in supply chains to reduce food waste and identify rotten fruits/vegetables instantly.",
    features: [
      "92%+ classification accuracy across apples, bananas, tomatoes, potatoes, and strawberries",
      "Real-time image inference under 2 seconds",
      "Drag-and-drop web upload interface for quality control inspection",
      "Visual confidence metrics and freshness grading report"
    ],
    updatedAt: "2026-04-16"
  },
  {
    id: "docspot",
    name: "Seamless Health Appointment Booking",
    repository: "https://github.com/vishnu6301382491-dev/Seamless-appoinment-booking-for-health",
    liveUrl: "https://vishnu6301382491-dev.github.io/Seamless-appoinment-booking-for-health/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Healthcare",
    description: "Healthcare platform streamlining doctor searches, patient appointment scheduling, specialty filtering, and consultation tracking.",
    technologies: ["React", "Express", "Cors", "Framer Motion", "Recharts", "Lucide React"],
    featured: false,
    image: "health_app_preview.jpg",
    problemSolved: "Simplifies healthcare access by offering real-time doctor availability calendars and instant appointment confirmations.",
    features: [
      "Specialist doctor finder by medical department and location",
      "Real-time time-slot booking with instant reservation confirmation",
      "Patient dashboard tracking medical history, prescription notes, and vitals",
      "Interactive analytics charts powered by Recharts"
    ],
    updatedAt: "2026-08-06"
  },
  {
    id: "smart-job-portal",
    name: "Smart Job Portal (Client & Server)",
    repository: "https://github.com/vishnu6301382491-dev/smart-job-portal",
    liveUrl: "https://vishnu6301382491-dev.github.io/smart-job-portal/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Full Stack",
    description: "End-to-end recruitment portal allowing job seekers to search & apply for positions while enabling employers to post jobs.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    featured: false,
    image: "rentalhub_preview.jpg",
    problemSolved: "Connects employers and candidates efficiently with job application management and candidate tracking.",
    features: [
      "Job search engine with salary, location, and experience filters",
      "Resume submission, applicant tracking, and employer review dashboard",
      "Saved jobs, application status alerts, and candidate profile management"
    ],
    updatedAt: "2026-07-03"
  },
  {
    id: "smart-job-portal-api",
    name: "Smart_Job_Portal Architecture",
    repository: "https://github.com/vishnu6301382491-dev/Smart_Job_Portal",
    liveUrl: "https://vishnu6301382491-dev.github.io/Smart_Job_Portal/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Full Stack",
    description: "Full-stack recruitment REST API micro-backend engine supporting job indexing, candidate applications, and auth RBAC.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
    featured: false,
    image: "rentalhub_preview.jpg",
    problemSolved: "Scalable backend service architecture powering job board queries, security tokens, and candidate database operations.",
    features: [
      "RESTful API design for job posts, applications, and recruiter profiles",
      "Authentication and authorization middleware",
      "MongoDB database indexing for rapid search responses"
    ],
    updatedAt: "2026-08-01"
  },
  {
    id: "agri365",
    name: "AGRI365 Platform",
    repository: "https://github.com/vishnu6301382491-dev/AGRI365",
    liveUrl: "https://vishnu6301382491-dev.github.io/Price_Info_project/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "AgriTech",
    description: "Comprehensive agricultural platform delivering real-time crop market pricing, weather forecasting, and farming diagnostics.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "REST APIs"],
    featured: false,
    image: "health_app_preview.jpg",
    problemSolved: "Provides daily crop price transparency and weather alerts to help farmers maximize agricultural yield.",
    features: [
      "Daily crop commodity price tracking across regional markets",
      "Seasonal agricultural advice and pest control recommendations",
      "Farmer-oriented price comparison and yield estimator tools"
    ],
    updatedAt: "2026-04-16"
  },
  {
    id: "price-info",
    name: "Price_Info_project",
    repository: "https://github.com/vishnu6301382491-dev/Price_Info_project",
    liveUrl: "https://vishnu6301382491-dev.github.io/Price_Info_project/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "AgriTech",
    description: "Real-time agricultural market pricing web portal providing daily updates on commodity prices and market trends.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    featured: false,
    image: "health_app_preview.jpg",
    problemSolved: "Enables fast local crop pricing search and market rate comparisons.",
    features: [
      "Daily commodity market rate updates",
      "Simple price search by crop and market location",
      "Historical price trend visualizer"
    ],
    updatedAt: "2026-01-20"
  },
  {
    id: "portfolio-repo",
    name: "Developer Portfolio Codebase",
    repository: "https://github.com/vishnu6301382491-dev/portfolio",
    liveUrl: "https://vishnu6301382491-dev.github.io/portfolio/",
    deployment: "GitHub Pages",
    status: "live",
    statusText: "Live on GitHub Pages",
    category: "Web Dev",
    description: "Personal developer portfolio web application featuring modern glassmorphism, Three.js 3D WebGL scenes, interactive CLI, and full project showcase.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Three.js"],
    featured: false,
    image: "rentalhub_preview.jpg",
    problemSolved: "Showcases software engineering experience, open-source projects, skills matrix, and interactive CLI.",
    features: [
      "Responsive glassmorphism UI with custom cursor and 3D WebGL background",
      "Interactive CLI console and project modal dialogues",
      "Fast zero-dependency vanilla JS performance with Three.js acceleration"
    ],
    updatedAt: "2026-05-30"
  },
  {
    id: "profile-readme",
    name: "vishnu6301382491-dev Profile",
    repository: "https://github.com/vishnu6301382491-dev/vishnu6301382491-dev",
    liveUrl: null,
    deployment: "GitHub",
    status: "github-only",
    statusText: "GitHub Only",
    category: "Web Dev",
    description: "Special GitHub profile repository containing developer documentation, tech stack badges, activity metrics, and goals.",
    technologies: ["Markdown", "GitHub Badges"],
    featured: false,
    image: "speakai_preview.jpg",
    problemSolved: "Centralizes developer profile bio, social channels, and activity badges on GitHub.",
    features: [
      "Animated typing SVG header",
      "Tech stack badges and social profile links",
      "GitHub overview metrics table"
    ],
    updatedAt: "2026-05-23"
  }
];

// 1b. CANONICAL REPOSITORY DEDUPLICATION ENGINE
function getCanonicalRepoKey(proj) {
  return (proj.repository || proj.id || '').toLowerCase().trim().replace(/\/+$/, '');
}

const CANONICAL_PROJECTS = (() => {
  const map = new Map();
  PROJECTS.forEach(p => {
    const key = getCanonicalRepoKey(p);
    if (!map.has(key)) {
      map.set(key, p);
    }
  });
  return Array.from(map.values());
})();

// 2. LIFECYCLE INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initCinematicHeroBackground();
  initThreeContactBackground();
  initProfileTilt();
  initIdentityCardsTilt();
  initSkillCardTilt();
  initTypewriter();
  initTerminal();
  initFilterMatrix();
  initProjectsEngine();
  initModalEngine();
  initContactAndCopy();
  initSignatureAnimation();
  initCustomCursor();
  initScrollspyAndNav();
  initGsapScrollAnimations();
});

/* --------------------------------------------------------------------------
   3. CINEMATIC DIGITAL NETWORK & CONSTELLATION HERO CANVAS
   -------------------------------------------------------------------------- */
function initCinematicHeroBackground() {
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resizeCanvas();

  // Particle Generation: Sophisticated Glowing Points in Cyan & Violet
  const particleCount = width < 768 ? 36 : 72;
  const particles = [];
  const colorCyan = '#46E6F5';
  const colorViolet = '#A78BFA';

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.3 + 1.2,
      color: i % 2 === 0 ? colorCyan : colorViolet,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02
    });
  }

  // Mouse Parallax & Interaction
  let mouse = { x: -1000, y: -1000, targetX: 0, targetY: 0 };
  const glowLayers = document.querySelectorAll('.ambient-glow');

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    const xPct = (e.clientX / width - 0.5) * 2;
    const yPct = (e.clientY / height - 0.5) * 2;
    mouse.targetX = xPct;
    mouse.targetY = yPct;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    mouse.targetX = 0;
    mouse.targetY = 0;
  });

  window.addEventListener('resize', () => {
    resizeCanvas();
  });

  // Battery saving: pause when tab hidden or hero offscreen
  let isVisible = true;
  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
  });

  const heroSection = document.getElementById('hero');
  if (heroSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(heroSection);
  }

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentParallaxX = 0;
  let currentParallaxY = 0;

  function render() {
    if (!prefersReducedMotion) {
      requestAnimationFrame(render);
    }
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    // Smooth Parallax on Ambient Glow Elements
    currentParallaxX += (mouse.targetX - currentParallaxX) * 0.05;
    currentParallaxY += (mouse.targetY - currentParallaxY) * 0.05;

    glowLayers.forEach((glow, idx) => {
      const factor = (idx + 1) * 12;
      glow.style.transform = `translate3d(${currentParallaxX * factor}px, ${currentParallaxY * factor}px, 0)`;
    });

    const maxLineDistance = width < 768 ? 95 : 125;

    // Draw Faint Connecting Lines (Digital-Network Effect)
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxLineDistance) {
          const alpha = (1 - dist / maxLineDistance) * 0.16;
          ctx.strokeStyle = p1.color === colorCyan 
            ? `rgba(70, 230, 245, ${alpha})` 
            : `rgba(167, 139, 250, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Mouse interactive connection line
      if (mouse.x > 0 && mouse.y > 0) {
        const mdx = p1.x - mouse.x;
        const mdy = p1.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 130) {
          const mAlpha = (1 - mDist / 130) * 0.22;
          ctx.strokeStyle = `rgba(70, 230, 245, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // Draw Particles & Glow Points
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Update positions
      if (!prefersReducedMotion) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;
      }

      const pulseFactor = 0.8 + 0.35 * Math.sin(p.pulse);
      const rad = p.r * pulseFactor;

      // Soft glow aura
      const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 3.5);
      if (p.color === colorCyan) {
        glowGrad.addColorStop(0, 'rgba(70, 230, 245, 0.6)');
        glowGrad.addColorStop(1, 'rgba(70, 230, 245, 0)');
      } else {
        glowGrad.addColorStop(0, 'rgba(167, 139, 250, 0.55)');
        glowGrad.addColorStop(1, 'rgba(167, 139, 250, 0)');
      }

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Sharp central point
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  render();
}

/* --------------------------------------------------------------------------
   4. THREE.JS CONTACT SECTION 3D SCENE
   -------------------------------------------------------------------------- */
function initThreeContactBackground() {
  const canvas = document.getElementById('contact-3d-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / (canvas.clientHeight || 400), 0.1, 100);
  camera.position.z = 25;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight || 400);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Refined Geometric knot in Electric Cyan
  const knotGeo = new THREE.TorusKnotGeometry(7, 1.5, 80, 16);
  const knotMat = new THREE.MeshBasicMaterial({
    color: 0x46e6f5,
    wireframe: true,
    transparent: true,
    opacity: 0.14
  });
  const knot = new THREE.Mesh(knotGeo, knotMat);
  scene.add(knot);

  let isVisible = false;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(canvas);
  } else {
    isVisible = true;
  }

  function animateKnot() {
    requestAnimationFrame(animateKnot);
    if (!isVisible) return;

    knot.rotation.x += 0.003;
    knot.rotation.y += 0.004;

    renderer.render(scene, camera);
  }
  animateKnot();
}

/* --------------------------------------------------------------------------
   5. REFINED CINEMATIC 3D TILT FOR PROFILE FRAME
   -------------------------------------------------------------------------- */
function initProfileTilt() {
  const container = document.getElementById('profile-3d-card');
  if (!container) return;

  const frame = container.querySelector('.avatar-glass-frame');
  const shine = container.querySelector('.avatar-shine-layer');
  if (!frame) return;

  let bounds = container.getBoundingClientRect();
  window.addEventListener('resize', () => {
    bounds = container.getBoundingClientRect();
  });

  container.addEventListener('mousemove', (e) => {
    bounds = container.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    const xPct = mouseX / bounds.width - 0.5;
    const yPct = mouseY / bounds.height - 0.5;

    const rotX = -yPct * 14;
    const rotY = xPct * 16;

    frame.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;

    if (shine) {
      const shineAngle = Math.atan2(yPct, xPct) * (180 / Math.PI) + 180;
      shine.style.background = `linear-gradient(${shineAngle}deg, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`;
    }
  });

  container.addEventListener('mouseleave', () => {
    frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    if (shine) {
      shine.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)';
    }
  });
}

/* --------------------------------------------------------------------------
   5b. SECTION 2 ASSEMBLE CARDS 3D INTERACTION
   -------------------------------------------------------------------------- */
function initIdentityCardsTilt() {
  if (window.innerWidth < 820) return;
  const cards = document.querySelectorAll('.identity-assemble-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;

      const rotX = -yPct * 12;
      const rotY = xPct * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
      card.style.borderColor = 'rgba(70, 230, 245, 0.45)';
      card.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.4), 0 0 20px rgba(70, 230, 245, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.borderColor = '';
      card.style.boxShadow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   5c. SECTION 4 SKILLS 3D CARDS TILT INTERACTION
   -------------------------------------------------------------------------- */
function initSkillCardTilt() {
  if (window.innerWidth < 820) return;
  const cards = document.querySelectorAll('.skill-3d-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;

      const rotX = -yPct * 10;
      const rotY = xPct * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* --------------------------------------------------------------------------
   6. TYPEWRITER SUBTITLE ENGINE
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const roles = [
    "Full Stack Java Architectures",
    "Scalable Next.js & React Web Apps",
    "REST Microservices & Robust APIs",
    "Applied Machine Learning Solutions",
    "High-Performance Cloud Systems"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 75;

  function typeLoop() {
    const current = roles[roleIdx];

    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      speed = 35;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      speed = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      speed = 2200;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

/* --------------------------------------------------------------------------
   7. PROJECTS SHOWCASE ENGINE (RENDER, SEARCH, SORT, FILTER)
   -------------------------------------------------------------------------- */
let activeCategory = 'all';
let searchQuery = '';
let sortBy = 'featured';

function initProjectsEngine() {
  const searchInput = document.getElementById('project-search-input');
  const sortSelect = document.getElementById('project-sort-select');
  const filterBtns = document.querySelectorAll('.project-filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderProjects();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      renderProjects();
    });
  });

  renderProjects();
}

function renderProjects() {
  const featuredContainer = document.getElementById('featured-projects-grid');
  const allContainer = document.getElementById('all-projects-grid');
  const featuredHeading = document.getElementById('featured-section-title');
  const allHeading = document.getElementById('all-section-title');

  if (!allContainer) return;

  // 1. Filter dataset using CANONICAL_PROJECTS
  let filtered = CANONICAL_PROJECTS.filter(p => {
    let matchesCategory = false;
    if (activeCategory === 'all') matchesCategory = true;
    else if (activeCategory === 'featured') matchesCategory = p.featured;
    else if (activeCategory === 'fullstack') matchesCategory = p.category === 'Full Stack';
    else if (activeCategory === 'aiml') matchesCategory = p.category === 'AI / ML';
    else if (activeCategory === 'agritech') matchesCategory = p.category === 'AgriTech';
    else if (activeCategory === 'healthcare') matchesCategory = p.category === 'Healthcare';
    else if (activeCategory === 'edtech') matchesCategory = p.category === 'EdTech';
    else if (activeCategory === 'travel') matchesCategory = p.category === 'Travel';
    else if (activeCategory === 'datascience') matchesCategory = p.category === 'Data Science';
    else if (activeCategory === 'vision') matchesCategory = p.category === 'Computer Vision';
    else if (activeCategory === 'webdev') matchesCategory = p.category === 'Web Dev';

    let matchesSearch = true;
    if (searchQuery) {
      const hay = `${p.name} ${p.description} ${p.category} ${p.technologies.join(' ')}`.toLowerCase();
      matchesSearch = hay.includes(searchQuery);
    }

    return matchesCategory && matchesSearch;
  });

  // 2. Sort dataset
  filtered.sort((a, b) => {
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sortBy === 'newest') return new Date(b.updatedAt) - new Date(a.updatedAt);
    if (sortBy === 'technical') return b.technologies.length - a.technologies.length;
    if (sortBy === 'aiml') return (b.category === 'AI / ML' ? 1 : 0) - (a.category === 'AI / ML' ? 1 : 0);
    if (sortBy === 'fullstack') return (b.category === 'Full Stack' ? 1 : 0) - (a.category === 'Full Stack' ? 1 : 0);
    return 0;
  });

  // 3. Featured split when looking at 'all' without search query:
  // Featured grid displays ONLY the 6 Flagship projects.
  // Supporting grid displays ONLY the remaining 8 supporting projects.
  // ZERO DUPLICATES: Every unique repository appears exactly once on page!
  if (activeCategory === 'all' && !searchQuery) {
    const featuredList = CANONICAL_PROJECTS.filter(p => p.featured);
    const supportingList = CANONICAL_PROJECTS.filter(p => !p.featured);

    if (featuredContainer && featuredHeading) {
      featuredContainer.style.display = 'grid';
      featuredHeading.style.display = 'flex';
      featuredHeading.innerHTML = `<span class="star-accent">★</span> Flagship Architectures (${featuredList.length})`;
      featuredContainer.innerHTML = featuredList.map(createProjectCardHTML).join('');
    }

    if (allHeading) {
      allHeading.textContent = `Supporting Systems & Specialized Repositories (${supportingList.length})`;
    }
    allContainer.innerHTML = supportingList.map(createProjectCardHTML).join('');
  } else {
    // In filtered or search mode: hide featured grid, show all matching in main grid
    if (featuredContainer && featuredHeading) {
      featuredContainer.style.display = 'none';
      featuredHeading.style.display = 'none';
    }

    if (allHeading) {
      allHeading.textContent = `Filtered Results (${filtered.length})`;
    }

    if (filtered.length === 0) {
      allContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <p style="font-size: 1.25rem; color: #ffffff; margin-bottom: 0.5rem;">No repositories matching "${searchQuery}"</p>
          <p style="font-size: 0.9rem;">Try searching for technologies like <b>Java</b>, <b>React</b>, <b>Python</b>, or clear your query.</p>
        </div>
      `;
    } else {
      allContainer.innerHTML = filtered.map(createProjectCardHTML).join('');
    }
  }

  attachModalTriggers();
  attachCardTiltEffects();
}

function createProjectCardHTML(p) {
  const statusClass = p.status === 'live' ? 'live' : 'github-only';
  const statusDot = p.status === 'live' ? '🟢' : '⚪';

  const demoBtn = p.liveUrl 
    ? `<a href="${p.liveUrl}" target="_blank" class="btn btn-sm btn-demo" rel="noopener noreferrer">Live Demo ↗</a>`
    : `<button class="btn btn-sm btn-disabled" disabled title="GitHub repository deployment">GitHub Only</button>`;

  return `
    <div class="glass-surface-card project-card" data-id="${p.id}">
      <div class="project-img-holder">
        <img src="${p.image}" alt="${p.name}" class="project-thumbnail" loading="lazy">
        <div class="project-gradient-overlay"></div>
        <span class="project-badge-domain">${p.category}</span>
        <span class="project-badge-status ${statusClass}">
          <span>${statusDot}</span> ${p.statusText}
        </span>
      </div>

      <div class="project-details-body">
        <h3 class="project-item-title">${p.name}</h3>
        <p class="project-item-description">${p.description}</p>
        
        <div class="project-tech-tags">
          ${p.technologies.map(t => `<span class="topic-chip">${t}</span>`).join('')}
        </div>

        <div class="project-actions-row">
          <button class="btn btn-sm btn-details modal-trigger" data-id="${p.id}">Details →</button>
          <a href="${p.repository}" target="_blank" class="btn btn-sm btn-github" rel="noopener noreferrer">GitHub ↗</a>
          ${demoBtn}
        </div>
      </div>
    </div>
  `;
}

function attachCardTiltEffects() {
  if (window.innerWidth < 820) return;

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPct = x / rect.width - 0.5;
      const yPct = y / rect.height - 0.5;

      const rotX = -yPct * 10;
      const rotY = xPct * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* --------------------------------------------------------------------------
   8. PROJECT DETAILS MODAL ENGINE
   -------------------------------------------------------------------------- */
function attachModalTriggers() {
  const triggers = document.querySelectorAll('.modal-trigger');
  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      const project = PROJECTS.find(p => p.id === id);
      if (project) openProjectModal(project);
    });
  });
}

function openProjectModal(p) {
  const backdrop = document.getElementById('project-modal');
  if (!backdrop) return;

  document.getElementById('modal-img').src = p.image;
  document.getElementById('modal-img').alt = p.name;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.description;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = `
    <li><strong>Core Problem Solved:</strong> ${p.problemSolved}</li>
    ${p.features.map(f => `<li>${f}</li>`).join('')}
    <li><strong>Verified Infrastructure:</strong> ${p.deployment} (${p.statusText})</li>
  `;

  const tags = document.getElementById('modal-tags');
  tags.innerHTML = p.technologies.map(t => `<span class="tech-chip">${t}</span>`).join('');

  const modalActions = document.getElementById('modal-actions');
  if (modalActions) {
    const demoBtn = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">Launch Live Demo ↗</a>`
      : `<button class="btn btn-disabled" disabled>Deployment Offline</button>`;

    modalActions.innerHTML = `
      <a href="${p.repository}" target="_blank" class="btn btn-glass" rel="noopener noreferrer">View GitHub Codebase ↗</a>
      ${demoBtn}
    `;
  }

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initModalEngine() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   9. INTERACTIVE DEVELOPER CLI TERMINAL WITH COMMAND HISTORY
   -------------------------------------------------------------------------- */
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const toggleBtn = document.getElementById('terminal-toggle-btn');
  const container = document.getElementById('terminal-container');

  if (!input || !output) return;

  if (toggleBtn && container) {
    toggleBtn.addEventListener('click', () => {
      container.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => input.focus(), 500);
    });
  }

  const heroTermBtn = document.getElementById('hero-terminal-btn');
  if (heroTermBtn && container) {
    heroTermBtn.addEventListener('click', (e) => {
      e.preventDefault();
      container.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => input.focus(), 500);
    });
  }

  const commands = {
    help: `Available commands:<br>
    &nbsp;&nbsp;<span class="term-cmd">about</span> - Brief summary about Vishnu<br>
    &nbsp;&nbsp;<span class="term-cmd">skills</span> - List core technical competencies<br>
    &nbsp;&nbsp;<span class="term-cmd">projects</span> - Display all 14 GitHub projects<br>
    &nbsp;&nbsp;<span class="term-cmd">education</span> - View degree and university<br>
    &nbsp;&nbsp;<span class="term-cmd">contact</span> - Show email, phone and location<br>
    &nbsp;&nbsp;<span class="term-cmd">github</span> - Open official GitHub Profile<br>
    &nbsp;&nbsp;<span class="term-cmd">resume</span> - Open verified PDF Resume<br>
    &nbsp;&nbsp;<span class="term-cmd">clock</span> - Launch interactive Digital World Clock<br>
    &nbsp;&nbsp;<span class="term-cmd">date</span> - Print current timestamp<br>
    &nbsp;&nbsp;<span class="term-cmd">clear</span> - Clear terminal window`,

    about: `<b>Chinnapareddy Vishnu Vardhan Reddy</b><br>
    B.Tech Computer Science & Engineering (Data Science) @ Rise Krishna Sai Prakasam Group of Institutions (2022 - 2026).<br>
    Specialized Full Stack Java Developer passionate about distributed microservices, Next.js applications, and predictive ML models.`,

    skills: `<b>Technical Competencies:</b><br>
    - Languages: Java, Python, JavaScript, TypeScript, SQL<br>
    - Frontend & UI: Next.js, React, HTML5, CSS3, Tailwind CSS, Responsive Design<br>
    - Backend: Java Backend Services, Node.js, Express, Python Flask, RESTful APIs, RBAC<br>
    - Databases: MySQL, MongoDB<br>
    - AI & ML: TensorFlow, Genetic Algorithms, Transfer Learning, Speech AI`,

    projects: `<b>14 Verified GitHub Projects:</b><br>
    1. RentalHub.com (Full Stack)<br>
    2. AI-Speaking-Agent SpeakAI (AI/ML)<br>
    3. AGRI-AI Crop Scanner (AgriTech)<br>
    4. PREPGENIUS AI Portal (EdTech)<br>
    5. Travel-Booking Voyage (Travel)<br>
    6. Air Quality Forecasting via Genetic Algorithm (Data Science)<br>
    7. NutriGaze Smart Produce Sorting (Computer Vision)<br>
    8. Seamless Health Appointment Booking (Healthcare)<br>
    9. Smart Job Portal (Full Stack)<br>
    10. Smart_Job_Portal Architecture (Backend REST API)<br>
    11. AGRI365 Platform (AgriTech)<br>
    12. Price_Info_project (AgriTech)<br>
    13. Developer Portfolio Codebase (Web Dev)<br>
    14. vishnu6301382491-dev Profile Readme`,

    education: `<b>B.Tech CSE (Data Science) [2022 - 2026]</b><br>
    Rise Krishna Sai Prakasam Group of Institutions, Ongole, Andhra Pradesh<br>
    Core: Data Structures, OOP (Java), DBMS, Machine Learning, Web Technologies`,

    contact: `<b>Contact Channels:</b><br>
    - Email: vishnuvardhanreddych45@gmail.com<br>
    - Phone: +91 6301382491<br>
    - Location: Ongole, Andhra Pradesh, India<br>
    - GitHub: github.com/vishnu6301382491-dev`,

    github: () => {
      window.open('https://github.com/vishnu6301382491-dev', '_blank');
      return "Navigating to https://github.com/vishnu6301382491-dev...";
    },

    resume: () => {
      window.open('resume.pdf', '_blank');
      return "Opening verified resume.pdf in new tab...";
    },

    clock: () => {
      window.location.href = 'clock.html';
      return "Navigating to World Clock...";
    },

    date: () => new Date().toUTCString()
  };

  // Command history buffer
  const cmdHistory = [];
  let historyIdx = -1;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIdx < cmdHistory.length - 1) {
        historyIdx++;
        input.value = cmdHistory[cmdHistory.length - 1 - historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        input.value = cmdHistory[cmdHistory.length - 1 - historyIdx];
      } else if (historyIdx === 0) {
        historyIdx = -1;
        input.value = '';
      }
    } else if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';

      if (!cmd) return;

      cmdHistory.push(cmd);
      historyIdx = -1;

      const promptLine = document.createElement('div');
      promptLine.className = 'term-line';
      promptLine.innerHTML = `<span class="term-ps1">vishnu@dev:~$</span> ${cmd}`;
      output.appendChild(promptLine);

      if (cmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      const responseLine = document.createElement('div');
      responseLine.className = 'term-line';

      if (commands[cmd]) {
        responseLine.innerHTML = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
      } else {
        responseLine.innerHTML = `<span style="color: var(--accent-rose);">Command not recognized: '${cmd}'. Type <span class="term-cmd">help</span> for command list.</span>`;
      }

      output.appendChild(responseLine);
      const consoleBody = document.getElementById('terminal-body');
      if (consoleBody) consoleBody.scrollTop = consoleBody.scrollHeight;
    }
  });
}

/* --------------------------------------------------------------------------
   10. SKILLS MATRIX FILTERING
   -------------------------------------------------------------------------- */
function initFilterMatrix() {
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-3d-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      skillCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   11. CONTACT COPY TO CLIPBOARD & FORM SUBMIT
   -------------------------------------------------------------------------- */
function initContactAndCopy() {
  const toast = document.getElementById('toast');
  const copyElements = document.querySelectorAll('.copy-trigger');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  copyElements.forEach(el => {
    el.addEventListener('click', () => {
      const text = el.dataset.copy;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        showToast(`✓ Copied: ${text}`);
      }).catch(() => {
        showToast(`✓ Copied: ${text}`);
      });
    });
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Sending Message...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('🚀 Thank you! Your message has been sent successfully.');
        form.reset();
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
}

/* --------------------------------------------------------------------------
   12. FLUID CUSTOM MAGNETIC CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (!dot || !ring || window.innerWidth < 820) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
  });

  function renderCursorRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursorRing);
  }
  renderCursorRing();

  // Attach hover states
  const interactives = document.querySelectorAll('a, button, input, select, textarea, .project-card, .skill-3d-card, .copy-trigger');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

/* --------------------------------------------------------------------------
   13. SCROLLSPY & MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initScrollspyAndNav() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Active section observer
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   14. ANIMATED SVG SIGNATURE STROKE DRAW ENGINE
   -------------------------------------------------------------------------- */
function initSignatureAnimation() {
  const sigContainer = document.getElementById('signature-container');
  if (!sigContainer) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sigContainer.classList.add('animated');
        }
      });
    }, { threshold: 0.25 });
    observer.observe(sigContainer);
  } else {
    sigContainer.classList.add('animated');
  }

  // Interactive re-draw on user hover
  sigContainer.addEventListener('mouseenter', () => {
    sigContainer.classList.remove('animated');
    void sigContainer.offsetWidth; // Force CSS reflow
    sigContainer.classList.add('animated');
  });
}

/* --------------------------------------------------------------------------
   15. GSAP & SCROLLTRIGGER CINEMATIC ANIMATION ENGINE
   -------------------------------------------------------------------------- */
function initGsapScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Respect user preference for reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Entrance Master Timeline (Coordinated Sequence)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    // 1. Ambient background lighting appears
    .fromTo('.ambient-background, .ambient-glow', { opacity: 0 }, { opacity: 1, duration: 1.0, ease: 'power2.out' })
    // 2. Navigation bar fades in smoothly
    .fromTo('#floating-navbar', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    // 3. Introduction slides gently into view
    .fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.45')
    // 4. Name appears with subtle staggered text reveal
    .fromTo('.hero-title-first, .hero-title-gradient', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.45')
    // 5. Subtitle and description fade in
    .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.45')
    .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    // 6. Skill badges appear one after another
    .fromTo('.hero-tech-pills .tech-chip', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.04 }, '-=0.45')
    // 7. Action buttons enter with a small upward movement
    .fromTo('.hero-cta-group .btn', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.08 }, '-=0.4')
    .fromTo('.hero-stats-row .metric-card', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.45')
    // 8. Profile photo fades in with subtle scale transition
    .fromTo('.avatar-glass-frame', { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' }, '-=1.0')
    .fromTo('.glass-badge', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, '-=0.4')
    .fromTo('.scroll-cue', { opacity: 0, y: -10 }, { opacity: 0.85, y: 0, duration: 0.6 }, '-=0.3');

  // 2. Section Headings Reveal
  document.querySelectorAll('.section-heading').forEach(heading => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      duration: 0.85,
      ease: 'power3.out'
    });
  });

  // 3. Section 2: Identity Cards Assembling Entrance
  const identityCards = document.querySelectorAll('.identity-assemble-card');
  if (identityCards.length) {
    gsap.from(identityCards, {
      scrollTrigger: {
        trigger: '#identity',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 45,
      stagger: 0.12,
      duration: 0.85,
      ease: 'power3.out'
    });
  }

  // 4. Section 3: About Story Cards
  const aboutCards = document.querySelectorAll('.about-narrative-card, .about-focus-card');
  if (aboutCards.length) {
    gsap.from(aboutCards, {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 45,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power3.out'
    });
  }

  // 5. Section 4: 3D Skills Cards Stagger
  const skillCards = document.querySelectorAll('.skill-3d-card');
  if (skillCards.length) {
    gsap.from(skillCards, {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      stagger: 0.04,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  // 6. Section 7: Education Timeline & Milestones
  const timelineCards = document.querySelectorAll('.timeline-card-wrapper, .achievement-item-card');
  if (timelineCards.length) {
    gsap.from(timelineCards, {
      scrollTrigger: {
        trigger: '#education',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }

  // 7. Section 8: Contact Cards & Form
  const contactEls = document.querySelectorAll('.contact-interactive-card, .contact-form-glass-card');
  if (contactEls.length) {
    gsap.from(contactEls, {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 35,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }

  // 8. Three.js Camera Scroll Parallax
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      if (window.heroCamera) {
        window.heroCamera.position.y = -self.progress * 18;
      }
    }
  });
}
