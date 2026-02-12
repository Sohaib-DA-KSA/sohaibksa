import { Database, BarChart3, FileSpreadsheet, Code, FunctionSquare, Eraser, PieChart, Briefcase } from "lucide-react";

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
  <section id="skills" className="py-20 bg-muted/50">
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Technical <span className="text-primary">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
          >
            <s.icon size={32} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
