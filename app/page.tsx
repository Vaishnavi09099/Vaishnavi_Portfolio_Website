// src/app/page.tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import StackSection from "./components/StackSection";
import AchievementsSection from "./components/AchievementSection";
import EducationSection from "./components/Education";
import CodingSection from "./components/CodingSection";
import CertsSection from "./components/CertsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#080c10] min-h-screen">
       <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
      <StackSection />
      <AchievementsSection />
      <EducationSection />
      <CodingSection />
      <CertsSection />
      <ContactSection />
      {/* baaki aate rahenge */}
    </main>
  );
}