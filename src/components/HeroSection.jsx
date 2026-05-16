import { Github, Linkedin } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Portfolio Badge */}
        <div className="hero-badge">
          <span className="badge-text">Portfolio</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Full Stack Web Developer
        </h1>

        {/* Sub-heading/Description */}
        <p className="hero-description">
          I build beautiful, functional web applications that bring ideas to life. Specializing in React and Django, with a strong focus on clean interfaces, reliable backend systems, and smooth user experiences.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Social Media Links */}
        <div className="hero-social">
          <p className="social-text">Connect with me:</p>
          <a href="https://github.com/bekam-bit" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="social-link">
            <Github className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/bekam-yoseph-771123296/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="social-link">
            <Linkedin className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}