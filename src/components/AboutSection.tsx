import { Database, BarChart3, FileSpreadsheet, Code, Target, TrendingUp, Search, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";

const toolIcons = {
  "SQL": Database,
  "Power BI": BarChart3,
  "Excel": FileSpreadsheet,
  "Python": Code,
};

const strengthIcons = [Target, TrendingUp, Search, Lightbulb];

const AboutSection = () => {
  const { t } = useLanguage();

  const translatedStrengths = t('about.strengths') as unknown as string[];
  const translatedTools = t('about.tools') as unknown as string[];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-foreground">
            {t('about.title')} <span className="text-primary">{t('about.subtitle')}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-panel rounded-2xl p-8 space-y-6">
            <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto whitespace-pre-wrap">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {Array.isArray(translatedStrengths) && translatedStrengths.map((label, i) => {
                const Icon = strengthIcons[i % strengthIcons.length];
                return (
                  <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground text-center">{label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center flex-wrap gap-6 pt-4 border-t border-border">
              {Array.isArray(translatedTools) && translatedTools.map((label) => {
                const Icon = toolIcons[label as keyof typeof toolIcons] || Database;
                return (
                  <div key={label} className="flex flex-col items-center gap-2 text-primary group cursor-default">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
