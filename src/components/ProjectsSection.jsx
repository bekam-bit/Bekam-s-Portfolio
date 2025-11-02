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
  // Add more projects here
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