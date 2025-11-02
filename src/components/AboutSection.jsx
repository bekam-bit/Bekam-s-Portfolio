import { Code2, Palette, Zap, Users } from "lucide-react";

// Skills/Features data
const FEATURES_DATA = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
    Icon: Code2
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful interfaces with great user experiences",
    Icon: Palette
  },
  {
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
    Icon: Zap
  },
  {
    title: "Collaboration",
    description: "Working effectively in teams to deliver quality products",
    Icon: Users
  },
];

const FeatureCard = ({ title, description, Icon }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon className="icon" />
    </div>
    <h4 className="feature-title">{title}</h4>
    <p className="feature-description">{description}</p>
  </div>
);

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="about-title">
          About Me
        </h2>
        <p className="about-tagline">
          Passionate about creating digital experiences that make a difference
        </p>
      </div>

      <div className="about-content">
        <h3 className="about-intro-title">
          Hello, I'm a Frontend Developer
        </h3>

        <p className="about-text">
          I'm a frontend developer with a passion for building beautiful, functional web applications. With expertise in React and JavaScript, I create engaging user interfaces through clean code and thoughtful design.
        </p>

        <p className="about-text">
          My journey in web development has led me to work on diverse projects, from travel platforms to e-commerce solutions. I also have knowledge of backend technologies including Python, MySQL, and MongoDB, and I'm working towards becoming a full-stack developer with React/Next.js and Django.
        </p>

        <p className="about-text">
          I believe in continuous learning and staying updated with the latest industry trends. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
        </p>
      </div>

      <div className="features-grid">
        {FEATURES_DATA.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
          />
        ))}
      </div>
    </section>
  );
}