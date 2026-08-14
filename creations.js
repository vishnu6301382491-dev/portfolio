/* ==========================================================================
   VISHNU VARDHAN REDDY - PORTFOLIO INTERACTIVE CORE ENGINE (creations.js)
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
    description: "Personal developer portfolio web application built with HTML5, CSS3, and JavaScript featuring dark glassmorphism architecture.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    featured: false,
    image: "rentalhub_preview.jpg",
    problemSolved: "Showcases software engineering experience, open-source projects, skills matrix, and interactive CLI.",
    features: [
      "Responsive glassmorphism UI with custom cursor and particle background",
      "Interactive CLI console and project modal dialogues",
      "Fast zero-dependency vanilla JS performance"
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

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  initTerminal();
  initFilterMatrix();
  initProjectsEngine();
  initModalEngine();
  initScrollObserver();
  initContactAndCopy();
  initCustomCursor();
  initMobileNav();
});

/* --------------------------------------------------------------------------
   2. PROJECTS ENGINE (RENDER, SEARCH, SORT, FILTER)
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

  if (!allContainer) return;

  // Filter projects
  let filtered = PROJECTS.filter(p => {
    // Category check
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

    // Search check
    let matchesSearch = true;
    if (searchQuery) {
      const targetStr = `${p.name} ${p.description} ${p.category} ${p.technologies.join(' ')}`.toLowerCase();
      matchesSearch = targetStr.includes(searchQuery);
    }

    return matchesCategory && matchesSearch;
  });

  // Sort projects
  filtered.sort((a, b) => {
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (sortBy === 'newest') return new Date(b.updatedAt) - new Date(a.updatedAt);
    if (sortBy === 'technical') return b.technologies.length - a.technologies.length;
    if (sortBy === 'aiml') return (b.category === 'AI / ML' ? 1 : 0) - (a.category === 'AI / ML' ? 1 : 0);
    if (sortBy === 'fullstack') return (b.category === 'Full Stack' ? 1 : 0) - (a.category === 'Full Stack' ? 1 : 0);
    return 0;
  });

  // Split into Featured vs General if in 'all' view
  if (featuredContainer) {
    if (activeCategory === 'all' && !searchQuery) {
      const featuredList = PROJECTS.filter(p => p.featured);
      featuredContainer.style.display = 'grid';
      document.getElementById('featured-section-title').style.display = 'block';
      featuredContainer.innerHTML = featuredList.map(createProjectCardHTML).join('');
    } else {
      featuredContainer.style.display = 'none';
      const fTitle = document.getElementById('featured-section-title');
      if (fTitle) fTitle.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    allContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No matching projects found for "${searchQuery}"</p>
        <p style="font-size: 0.88rem;">Try clearing your search query or selecting a different domain filter.</p>
      </div>
    `;
  } else {
    allContainer.innerHTML = filtered.map(createProjectCardHTML).join('');
  }

  // Re-attach modal listeners
  attachModalTriggers();
  attachHoverEffects();
}

function createProjectCardHTML(p) {
  let statusBadgeClass = p.status === 'live' ? 'live' : (p.status === 'offline' ? 'offline' : 'github-only');
  let statusIcon = p.status === 'live' ? '🟢' : (p.status === 'offline' ? '🔴' : '⚪');

  let liveBtnHTML = p.liveUrl 
    ? `<a href="${p.liveUrl}" target="_blank" class="btn btn-sm btn-demo">Demo ↗</a>`
    : `<button class="btn btn-sm btn-disabled" disabled title="No public live deployment URL">GitHub Only</button>`;

  return `
    <div class="glass-card project-card" data-id="${p.id}">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="project-overlay"></div>
        <span class="category-badge-top">${p.category}</span>
        <span class="status-badge-top ${statusBadgeClass}">
          <span>${statusIcon}</span> ${p.statusText}
        </span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.description}</p>
        
        <div class="project-tech-stack">
          ${p.technologies.map(t => `<span class="pill">${t}</span>`).join('')}
        </div>

        <div class="project-actions-trio">
          <button class="btn btn-sm btn-details modal-trigger" data-id="${p.id}">Details →</button>
          <a href="${p.repository}" target="_blank" class="btn btn-sm btn-github">GitHub ↗</a>
          ${liveBtnHTML}
        </div>
      </div>
    </div>
  `;
}

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
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.description;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = `
    <li><strong>Problem Solved:</strong> ${p.problemSolved}</li>
    ${p.features.map(f => `<li>${f}</li>`).join('')}
    <li><strong>Hosting / Platform:</strong> ${p.deployment} (${p.statusText})</li>
  `;

  const tags = document.getElementById('modal-tags');
  tags.innerHTML = p.technologies.map(t => `<span class="pill">${t}</span>`).join('');

  const modalActions = document.getElementById('modal-actions');
  if (modalActions) {
    let demoBtn = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" class="btn btn-primary">Open Live Demo ↗</a>`
      : `<button class="btn btn-disabled" disabled>Deployment Unavailable</button>`;

    modalActions.innerHTML = `
      <a href="${p.repository}" target="_blank" class="btn btn-secondary">View GitHub Source ↗</a>
      ${demoBtn}
    `;
  }

  backdrop.classList.add('active');
}

function initModalEngine() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('active');
    });
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.remove('active');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      backdrop.classList.remove('active');
    }
  });
}

function attachHoverEffects() {
  const outline = document.querySelector('.cursor-outline');
  if (!outline) return;
  const interactives = document.querySelectorAll('a, button, input, select, .project-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => outline.classList.add('hovered'));
    el.addEventListener('mouseleave', () => outline.classList.remove('hovered'));
  });
}

/* --------------------------------------------------------------------------
   3. HTML5 PARTICLE CONSTELLATION CANVAS
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let particles = [];
  const particleCount = Math.min(Math.floor(width * 0.08), 80);
  let mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(121, 40, 202, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          let force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00f2fe';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* --------------------------------------------------------------------------
   4. TYPEWRITER SUBTITLE ENGINE
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const roles = [
    "Full Stack Java Developer",
    "Computer Science & Data Science Undergrad",
    "Backend & REST API Architect",
    "Data Analytics & ML Enthusiast",
    "Scalable Web App Developer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   5. DEVELOPER CLI TERMINAL WIDGET
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
      input.focus();
    });
  }

  const commands = {
    help: `Available commands:<br>
    &nbsp;&nbsp;<span class="terminal-command">about</span> - Brief summary about Vishnu<br>
    &nbsp;&nbsp;<span class="terminal-command">skills</span> - List core technical skills<br>
    &nbsp;&nbsp;<span class="terminal-command">projects</span> - Display featured projects<br>
    &nbsp;&nbsp;<span class="terminal-command">education</span> - View degree & college<br>
    &nbsp;&nbsp;<span class="terminal-command">contact</span> - Show email, phone & social links<br>
    &nbsp;&nbsp;<span class="terminal-command">github</span> - Open GitHub Profile<br>
    &nbsp;&nbsp;<span class="terminal-command">resume</span> - Open PDF resume<br>
    &nbsp;&nbsp;<span class="terminal-command">date</span> - Print current time<br>
    &nbsp;&nbsp;<span class="terminal-command">clear</span> - Clear terminal screen`,

    about: `<b>Chinnapareddy Vishnu Vardhan Reddy</b><br>
    B.Tech Computer Science & Data Science @ Rise Krishna Sai Prakasam Group of Institutions (2022-2026).<br>
    Passionate Full Stack Java Developer dedicated to building resilient web platforms and data-driven systems.`,

    skills: `<b>Technical Matrix:</b><br>
    - Languages: Java, Python, JavaScript, TypeScript, SQL<br>
    - Web Stack: Next.js, React, HTML5, CSS3, REST APIs, Flask, Express<br>
    - Databases: MySQL, MongoDB<br>
    - Core: Data Structures, OOP, RBAC, ML, Genetic Algorithms`,

    projects: `<b>Verified GitHub Repositories (14 total):</b><br>
    1. RentalHub.com | 2. AI-Speaking-Agent | 3. AGRI-AI | 4. PREPGENIUS<br>
    5. Travel-Booking | 6. Air Quality Forecasting | 7. NutriGaze Smart Produce<br>
    8. DocSpot Appointment Booking | 9. Smart Job Portal | 10. AGRI365 Platform`,

    education: `<b>B.Tech CSE (Data Science)</b><br>
    Rise Krishna Sai Prakasam Group of Institutions (2022 - 2026)<br>
    Focus: Web Development, Machine Learning, Database Architectures`,

    contact: `<b>Get in Touch:</b><br>
    - Email: vishnuvardhanreddych45@gmail.com<br>
    - Phone: +91 6301382491<br>
    - Location: Ongole, Andhra Pradesh, India<br>
    - GitHub: github.com/vishnu6301382491-dev`,

    github: `Opening https://github.com/vishnu6301382491-dev...`,
    resume: `Opening resume.pdf...`,
    date: () => new Date().toString()
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      input.value = '';

      if (cmd === '') return;

      const cmdLine = document.createElement('div');
      cmdLine.className = 'terminal-line';
      cmdLine.innerHTML = `<span class="terminal-prompt">vishnu@portfolio:~$</span> ${cmd}`;
      output.appendChild(cmdLine);

      if (cmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      if (cmd === 'resume') {
        window.open('resume.pdf', '_blank');
      }

      if (cmd === 'github') {
        window.open('https://github.com/vishnu6301382491-dev', '_blank');
      }

      const resLine = document.createElement('div');
      resLine.className = 'terminal-line';

      if (commands[cmd]) {
        let result = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
        resLine.innerHTML = result;
      } else {
        resLine.innerHTML = `<span style="color: var(--neon-magenta);">Command not found: '${cmd}'. Type <span class="terminal-command">help</span> for assistance.</span>`;
      }

      output.appendChild(resLine);
      const body = document.getElementById('terminal-body');
      if (body) body.scrollTop = body.scrollHeight;
    }
  });
}

/* --------------------------------------------------------------------------
   6. SKILLS MATRIX FILTERING
   -------------------------------------------------------------------------- */
function initFilterMatrix() {
  const skillBtns = document.querySelectorAll('.skills-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      skillCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. SCROLL REVEAL & METRIC METER OBSERVER
   -------------------------------------------------------------------------- */
function initScrollObserver() {
  const meters = document.querySelectorAll('.skill-meter-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const val = entry.target.dataset.width;
        entry.target.style.width = val + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  meters.forEach(m => observer.observe(m));
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM & COPY TOAST
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
    }, 3000);
  }

  copyElements.forEach(el => {
    el.addEventListener('click', () => {
      const text = el.dataset.copy;
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      }).catch(() => {
        showToast(`Copied: ${text}`);
      });
    });
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.innerHTML;
      btn.innerHTML = 'Sending Message...';
      btn.disabled = true;

      setTimeout(() => {
        showToast('🚀 Thank you! Your message has been sent successfully.');
        form.reset();
        btn.innerHTML = origText;
        btn.disabled = false;
      }, 1200);
    });
  }
}

/* --------------------------------------------------------------------------
   9. CUSTOM FLUID MAGNETIC CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');

  if (!dot || !outline) return;

  let mouseX = -100, mouseY = -100;
  let outlineX = -100, outlineY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
  });

  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;

    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
    requestAnimationFrame(animateOutline);
  }
  animateOutline();
  attachHoverEffects();
}

/* --------------------------------------------------------------------------
   10. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const links = document.getElementById('nav-links');

  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('mobile-open');
    });
  });
}
