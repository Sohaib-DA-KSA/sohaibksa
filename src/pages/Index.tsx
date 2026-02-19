import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import PrintCoverPage from "@/components/PrintCoverPage";
import CustomCursor from "@/components/CustomCursor";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AnalyticalSection from "@/components/AnalyticalSection";
import SkillsSection from "@/components/SkillsSection";
import ValueSection from "@/components/ValueSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <main>
        <CustomCursor />
        <PrintCoverPage />
        <InteractiveBackground />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AnalyticalSection />
        <EducationSection />
        <SkillsSection />
        <ValueSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
