import { Database, BarChart3, FileSpreadsheet, Code, FunctionSquare, Eraser, PieChart, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { icon: Database, label: "SQL" },
  { icon: BarChart3, label: "Power BI" },
  { icon: FileSpreadsheet, label: "Excel" },
  { icon: Code, label: "Python" },
  { icon: FunctionSquare, label: "DAX" },
  { icon: Eraser, label: "Data Cleaning" },
  { icon: PieChart, label: "Data Visualization" },
  { icon: Briefcase, label: "Business Analysis" },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-background">
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          Technical <span className="text-primary">Skills</span>
        </h2>
      </AnimatedSection>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((s, idx) => (
          <AnimatedSection key={s.label} delay={idx * 0.08}>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg group transition-all duration-300 cursor-default">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon size={32} />
              </div>
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
