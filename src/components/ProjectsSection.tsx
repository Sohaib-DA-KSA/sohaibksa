import { useState } from "react";
import { ExternalLink, Github, TrendingUp, TrendingDown, DollarSign, Users, Lightbulb, BarChart3, X as CloseIcon, Star, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";

// Keep icons and tools here, but text fields will be translated
const projectMetadata = [
  {
    tools: ["Power BI", "Excel"],
    kpis: [
      { labelKey: "Revenue ↑", icon: DollarSign },
      { labelKey: "Margins ↑", icon: TrendingUp },
    ],
    insightsCount: 3
  },
  {
    tools: ["Power BI", "SQL", "DAX"],
    kpis: [
      { labelKey: "Res. Rate ↑", icon: TrendingUp },
      { labelKey: "TAT ↓", icon: TrendingDown },
    ],
    insightsCount: 3
  },
  {
    tools: ["Power BI", "Excel", "Data Stories"],
    kpis: [
      { labelKey: "Orders ↑", icon: TrendingUp },
      { labelKey: "Quantity ↑", icon: BarChart3 },
    ],
    insightsCount: 3
  },
  {
    tools: ["Power BI", "Excel", "DAX"],
    kpis: [
      { labelKey: "Performance", icon: TrendingUp },
      { labelKey: "Consistency", icon: BarChart3 },
    ],
    insightsCount: 3
  },
  {
    tools: ["PostgreSQL", "SQL", "pgAdmin"],
    kpis: [
      { labelKey: "40+ Queries", icon: Database },
      { labelKey: "Accuracy ↑", icon: BarChart3 },
    ],
    insightsCount: 3
  },
  {
    tools: ["Python", "Pandas", "Numpy"],
    kpis: [
      { labelKey: "Quality ↑", icon: TrendingUp },
      { labelKey: "Accuracy ↑", icon: BarChart3 },
    ],
    insightsCount: 3
  },
];

// (I'll replace the whole component definition to include state and modal)
const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get translated projects list
  const translatedProjects = t('projects.list') as unknown as any[];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-8 md:space-y-10">
        <AnimatedSection>
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('projects.title')} <span className="text-primary">{t('projects.subtitle')}</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('projects.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {Array.isArray(translatedProjects) && translatedProjects.map((p, idx) => {
            const meta = projectMetadata[idx] || projectMetadata[0];
            return (
              <AnimatedSection
                key={p.title}
                delay={idx % 2 === 0 ? 0.1 : 0.25}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <div className="glass-panel rounded-2xl p-6 h-full flex flex-col glow-hover transition-all duration-300 hover:-translate-y-1 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <span className="text-xs font-medium text-primary">{p.focus}</span>
                    </div>
                  </div>

                  {/* KPI Badges */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {meta.kpis.map((kpi) => (
                      <span
                        key={kpi.labelKey}
                        className="kpi-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary"
                      >
                        <kpi.icon size={12} />
                        {kpi.labelKey}
                      </span>
                    ))}
                    {meta.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-[10px] bg-muted text-muted-foreground border-border">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* Problem */}
                  <p className="text-sm text-muted-foreground mb-4">{p.problem}</p>

                  {/* Insight Highlight */}
                  <div className="insight-box rounded-lg p-3 mb-4 mt-auto">
                    <div className="flex items-start gap-2">
                      <Lightbulb size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-foreground/80 italic">"{p.highlight}"</p>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">
                      {t('projects.recommendationLabel')}
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed italic">
                      {p.recommendation}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {(p.dashboardImage || p.links?.dashboard) && (
                      p.dashboardImage ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs border-border hover:border-primary/40 gap-1.5"
                          onClick={() => setSelectedImage(p.dashboardImage)}
                        >
                          <BarChart3 size={12} /> {t('projects.viewDashboard')}
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="text-xs border-border hover:border-primary/40 gap-1.5" asChild>
                          <a href={p.links?.dashboard} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={12} /> {t('projects.viewDashboard')}
                          </a>
                        </Button>
                      )
                    )}
                    <Button size="sm" variant="outline" className="text-xs border-border hover:border-primary/40 gap-1.5" asChild>
                      <a href={p.links?.github || "#"} target="_blank" rel="noopener noreferrer">
                        <Github size={12} /> {t('projects.viewGithub')}
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <CloseIcon size={24} />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/20 shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Dashboard Preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
