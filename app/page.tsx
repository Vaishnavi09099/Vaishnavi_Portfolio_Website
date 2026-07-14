// src/app/page.tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ExperienceSection from "./components/ExperienceSection";

import StackSection from "./components/StackSection";
import AchievementsSection from "./components/AchievementSection";
import EducationSection from "./components/Education";

import CertsSection from "./components/CertsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="bg-[#05070E]">
      <Navbar />
      <HeroSection />
      <div className="relative z-10 bg-[#05070E]">
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <StackSection />
        <AchievementsSection />
        <EducationSection />
      
        <CertsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}