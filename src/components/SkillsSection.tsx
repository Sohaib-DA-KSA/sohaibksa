import { Database, BarChart3, FileSpreadsheet, Code, Eraser, Target, LineChart, FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Analytics",
    skills: [
      { icon: Database, label: "SQL" },
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: Code, label: "Python" },
      { icon: Code, label: "Pandas" },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { icon: BarChart3, label: "Power BI" },
      { icon: LineChart, label: "Matplotlib" },
      { icon: LineChart, label: "Seaborn" },
    ],
  },
  {
    title: "Business",
    skills: [
      { icon: Eraser, label: "Data Cleaning" },
      { icon: Target, label: "KPI Analysis" },
      { icon: FileText, label: "Decision Support" },
      { icon: FileText, label: "Reporting" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          Tool <span className="text-primary">Stack</span>
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

export default SkillsSection;
