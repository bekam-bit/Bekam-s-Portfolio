import { ProjectCard } from './ProjectCard';

// Dummy data for projects
const PROJECTS_DATA = [
  {
    title: "Rebel Rover",
    description: "A comprehensive travel planning platform with destination guides, booking features, and interactive travel inspiration for adventurers.",
    imageUrl: "/images/project-rebel-rover.svg",
    techStack: ["React", "JavaScript", "CSS3", "+1"],
    liveLink: "https://rebel-rover-travel-capstone.vercel.app/",
    codeLink: "https://github.com/helenlemessa/Rebel-Rover-Travel-Website",
  },
  {
    title: "Bekam Shopping Cart",
    description: "A fully functional shopping cart application with product management, dynamic cart updates, and smooth user experience.",
    imageUrl: "/images/project-shopping-cart.svg",
    techStack: ["JavaScript", "HTML5", "CSS3", "+1"],
    liveLink: "https://youtu.be/bDBu_rNyulg",
    codeLink: "https://github.com/bekam-bit/Bekam-shopping-cart-project",
  },
  {
    title: "Library Management System",
    description: "A comprehensive library management platform that simplifies book cataloging, borrowing, loan tracking, member management, fine handling, and request approval workflows. The system provides organized role-based access for admins, staff, and members.",
    imageUrl: "/images/project-library-management-system.png",
    techStack: ["Django", "HTML5", "CSS3", "JavaScript"],
    liveLink: "https://gdg-django-week-6.onrender.com/",
    codeLink: "https://github.com/bekam-bit/gdg-django-week-6-",
  },
  {
    title: "Micro Learning Challenge App",
    description: "A micro-learning platform designed to deliver structured learning experiences through interactive lessons, quizzes, challenges, and daily activities. Supports personalized progress tracking, streak and point-based motivation, and performance monitoring.",
    imageUrl: "/images/project-micro-learning-challenge-app.png",
    techStack: ["Django", "Python", "JavaScript", "CSS3"],
    liveLink: "https://learning-challenge.onrender.com",
    codeLink: "https://github.com/bekam-bit/Micro_Learning_Challenge_App-",
  },
  {
    title: "TriageSync",
    description: "An AI-powered medical triage platform that helps healthcare facilities prioritize patient care through intelligent symptom analysis and real-time monitoring.",
    imageUrl: "/images/project-triage-sync.png",
    techStack: ["Django", "Python", "AI", "Healthcare"],
    liveLink: "https://django-backend-subb.onrender.com",
    codeLink: "https://github.com/GDG-Hackaton-G8-Triage-Sync/Django-Backend",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">
          Featured Projects
        </h2>
        <p className="projects-subtitle">
          Explore some of my recent work and personal projects
        </p>
      </div>
      <div className="projects-grid">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}