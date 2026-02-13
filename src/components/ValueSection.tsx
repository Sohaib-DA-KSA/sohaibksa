import { BarChart3, Users, DollarSign, Eraser, FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const values = [
  { icon: BarChart3, text: "Build decision-making dashboards" },
  { icon: Users, text: "Analyze sales & customer behavior" },
  { icon: DollarSign, text: "Identify revenue opportunities" },
  { icon: Eraser, text: "Clean messy business data" },
  { icon: FileText, text: "Create reports managers actually understand" },
];

const ValueSection = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          What I Can Help{" "}
          <span className="text-primary">Your Company</span> With
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {values.map((v, i) => (
          <AnimatedSection key={v.text} delay={i * 0.1}>
            <div className="glass-panel rounded-2xl p-6 flex items-start gap-4 glow-hover transition-all duration-300 group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                <v.icon size={22} />
              </div>
              <p className="text-sm text-foreground/80 font-medium leading-relaxed pt-1">
                {v.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ValueSection;
