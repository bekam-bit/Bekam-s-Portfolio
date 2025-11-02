import { ExternalLink, Code } from "lucide-react";

export function ProjectCard({ title, description, imageUrl, techStack, liveLink, codeLink }) {
  return (
    <div className="project-card">

      {/* Project Image */}
      <div className="project-image">
        <img
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          className="project-img"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {/* Tech Stack Badges */}
        <div className="tech-stack">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Live <ExternalLink className="link-icon" />
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Code <Code className="link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}