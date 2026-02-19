import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import companyLogo from "../assets/company/companylogo.jpg";
import { useLanguage } from "../context/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const contributions = t('experience.contributions') as unknown as string[];
  const learnings = t('experience.learnings') as unknown as string[];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        {/* Section Header */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-foreground">
            {t('experience.title')} <span className="text-primary">{t('experience.subtitle')}</span>
          </h2>
        </AnimatedSection>

        {/* Experience Card */}
        <AnimatedSection delay={0.15}>
          <div className="glass-panel rounded-2xl p-8 relative">
            {/* Vertical Gradient Line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent rounded-l-2xl" />

            {/* Company Info */}
            <a
              href="https://www.linkedin.com/company/interwoodmobel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-primary transition-colors"
            >
              <img
                src={companyLogo}
                alt="Interwood Mobel Logo"
                className="w-16 h-16 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {t('experience.company')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('experience.role')} &nbsp;•&nbsp; {t('experience.duration')}
                </p>
              </div>
            </a>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mt-6 mb-6">
              {t('experience.description')}
            </p>

            {/* Key Contributions */}
            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-foreground">{t('experience.contributionsTitle')}</h4>
              {Array.isArray(contributions) && contributions.map((c, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {c}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Learnings */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">{t('experience.learningsTitle')}</h4>
              {Array.isArray(learnings) && learnings.map((l, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {l}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
