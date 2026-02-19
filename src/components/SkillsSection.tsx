import { Database, BarChart3, FileSpreadsheet, Code, Eraser, Target, LineChart, FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";

const iconMap = {
  sql: Database,
  excel: FileSpreadsheet,
  python: Code,
  pandas: Code,
  powerbi: BarChart3,
  matplotlib: LineChart,
  seaborn: LineChart,
  dataCleaning: Eraser,
  kpiAnalysis: Target,
  decisionSupport: FileText,
  reporting: FileText,
};

const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t('skills.categories.analytics'),
      skills: [
        { icon: iconMap.sql, label: t('skills.items.sql') },
        { icon: iconMap.excel, label: t('skills.items.excel') },
        { icon: iconMap.python, label: t('skills.items.python') },
        { icon: iconMap.pandas, label: t('skills.items.pandas') },
      ],
    },
    {
      title: t('skills.categories.visualization'),
      skills: [
        { icon: iconMap.powerbi, label: t('skills.items.powerbi') },
        { icon: iconMap.matplotlib, label: t('skills.items.matplotlib') },
        { icon: iconMap.seaborn, label: t('skills.items.seaborn') },
      ],
    },
    {
      title: t('skills.categories.business'),
      skills: [
        { icon: iconMap.dataCleaning, label: t('skills.items.dataCleaning') },
        { icon: iconMap.kpiAnalysis, label: t('skills.items.kpiAnalysis') },
        { icon: iconMap.decisionSupport, label: t('skills.items.decisionSupport') },
        { icon: iconMap.reporting, label: t('skills.items.reporting') },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-foreground">
            {t('skills.title')} <span className="text-primary">{t('skills.subtitle')}</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 0.15}>
              <div className="glass-panel rounded-2xl p-6 space-y-4 h-full">
                <h3 className="text-sm font-bold text-primary tracking-wider uppercase text-center">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((s, si) => (
                    <AnimatedSection key={s.label} delay={ci * 0.15 + si * 0.06}>
                      <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/40 glow-hover group transition-all duration-300 cursor-default">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <s.icon size={22} />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground">{s.label}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
