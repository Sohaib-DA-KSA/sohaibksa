import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import uosLogo from "@/assets/university/images.jpg";
import { useLanguage } from "../context/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-foreground">
            <span className="text-primary">{t('education.title')}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-panel rounded-2xl p-8 flex flex-col items-center gap-4 max-w-md mx-auto hover:border-primary/50 transition-colors group">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-primary/20 bg-white">
              <img
                src={uosLogo}
                alt={t('education.university')}
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-foreground">{t('education.degree')}</h3>
              <a
                href="https://uos.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                {t('education.university')}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
              </a>
            </div>

            <span className="kpi-card px-4 py-2 rounded-lg text-sm font-bold text-primary mt-2">
              {t('education.cgpa')}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EducationSection;
