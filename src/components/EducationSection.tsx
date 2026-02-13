import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const EducationSection = () => (
  <section id="education" className="py-20 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          <span className="text-primary">Education</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="glass-panel rounded-2xl p-8 flex flex-col items-center gap-4 max-w-md mx-auto">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <GraduationCap size={32} />
          </div>
          <h3 className="text-xl font-bold text-foreground">BS Computer Science</h3>
          <p className="text-muted-foreground">University of Sargodha</p>
          <span className="kpi-card px-4 py-2 rounded-lg text-sm font-bold text-primary">
            CGPA: 3.34 / 4.0
          </span>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
