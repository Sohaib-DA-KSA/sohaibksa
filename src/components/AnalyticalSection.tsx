import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";
const AnalyticalSection = () => {
  const { t } = useLanguage();
  const tags = t('analytics.tags') as unknown as string[];

  return (
    <section id="analytics" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-8 md:space-y-12">

        {/* Section Title */}
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
            {t('analytics.title')} <span className="text-primary">{t('analytics.subtitle')}</span>
          </h2>
          <p className="text-center text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
            {t('analytics.description')}
          </p>
        </AnimatedSection>

        {/* Dashboard Card */}
        <AnimatedSection delay={0.15}>
          <div className="glass-panel rounded-2xl p-6 md:p-8 transition-all hover:scale-[1.01] print:break-inside-avoid">

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-xl">
              <img
                src="/dashboard/Dashboard.png"
                alt={t('analytics.subtitle')}
                className="w-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>{t('analytics.cardDescription1')}</p>
              <p>{t('analytics.cardDescription2')}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {Array.isArray(tags) && tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default AnalyticalSection;
