import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-20 bg-muted/50">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        <span className="text-primary">Education</span>
      </h2>
      <div className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card border border-border shadow-sm">
        <GraduationCap size={40} className="text-primary" />
        <h3 className="text-xl font-semibold text-foreground">BS Computer Science</h3>
        <p className="text-muted-foreground">University of Sargodha</p>
        <p className="text-sm font-medium text-primary">CGPA: 3.34 / 4.0</p>
      </div>
    </div>
  </section>
);

export default EducationSection;
