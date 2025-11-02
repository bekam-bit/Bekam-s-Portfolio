import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ConnectSection } from "../components/ConnectSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="home-container">
      <Navigation />

      <main className="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ConnectSection />
      </main>

      <Footer />
    </div>
  );
}