import { Database, BarChart3, FileSpreadsheet, Code, Target, TrendingUp, Search, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tools = [
  { icon: Database, label: "SQL" },
  { icon: BarChart3, label: "Power BI" },
  { icon: FileSpreadsheet, label: "Excel" },
  { icon: Code, label: "Python" },
];

const strengths = [
  { icon: Target, label: "Business Problem Solving" },
  { icon: TrendingUp, label: "Data-Driven Strategy" },
  { icon: Search, label: "Pattern Recognition" },
  { icon: Lightbulb, label: "Actionable Insights" },
];

const AboutSection = () => (
  <section id="about" className="py-20 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          About <span className="text-primary">Me</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="glass-panel rounded-2xl p-8 space-y-6">
          <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
        Data Analyst skilled in SQL, Excel, Power BI, and Python, focused on delivering accurate and impactful insights.
Experienced in data cleaning, analysis, and building interactive dashboards.
Strong understanding of KPIs and business reporting to support decision-making.
Eager to contribute to data-driven organizations. Every analysis I do answers: <span className="text-primary font-medium">"So what?"</span> and{" "}
            <span className="text-primary font-medium">"What decision can a company make using this?"</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {strengths.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={20} />
                </div>
                <span className="text-xs font-medium text-muted-foreground text-center">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 pt-4 border-t border-border">
            {tools.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-primary group cursor-default">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <t.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
