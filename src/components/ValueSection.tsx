import { BarChart3, Users, DollarSign, Eraser, FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";

const iconMap = [BarChart3, Users, DollarSign, Eraser, FileText];

const ValueSection = () => {
  const { t } = useLanguage();
  const items = t('value.items') as unknown as string[];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-foreground">
            {t('value.title')}{" "}
            <span className="text-primary">{t('value.subtitle')}</span>{" "}
            {t('value.suffix')}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(items) && items.map((text, i) => {
            const Icon = iconMap[i] || FileText;
            return (
              <AnimatedSection key={text} delay={i * 0.1}>
                <div className="glass-panel rounded-2xl p-6 flex items-start gap-4 glow-hover transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm text-foreground/80 font-medium leading-relaxed pt-1">
                    {text}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
