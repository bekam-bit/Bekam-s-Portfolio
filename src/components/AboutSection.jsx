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
          Passionate about building full stack web solutions that make a difference
        </p>
      </div>

      <div className="about-content">
        <h3 className="about-intro-title">
          Hello, I'm a Full Stack Web Developer
        </h3>

        <p className="about-text">
          I'm a full stack web developer with a passion for building beautiful, functional web applications. With expertise in React and Django, I create engaging user experiences backed by reliable and scalable systems.
        </p>

        <p className="about-text">
          I'm also an A2SVian, which has strengthened my data structures and algorithms foundation through consistent problem solving. I have solved more than 300 LeetCode problems and over 100 Codeforces problems, which helped me build strong analytical thinking and a disciplined approach to development.
        </p>

        <p className="about-text">
          My journey in web development has led me to work on diverse projects. My e-commerce and LMS systems are personal projects, while the rest were team projects completed through GDG capstone and hackathon programs. Travel and Micro Learning were capstone projects, and TriageSync was built during a hackathon.
        </p>

        <p className="about-text">
          I enjoy turning ideas into practical products with clean architecture, responsive design, and efficient backend logic. I believe in continuous learning and staying updated with the latest industry trends, whether that means improving my stack, exploring new technologies, or building solutions that help people work smarter.
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