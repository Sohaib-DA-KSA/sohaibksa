import { Building2, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const learnings = [
  "How sales transactions become business data",
  "Importance of accurate inventory tracking",
  "How managers use reports to make decisions",
  "Relationship between customer demand and product supply",
  "Why clean data matters in real companies",
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="glass-panel rounded-2xl p-8 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent rounded-l-2xl" />

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Interwood Mobel</h3>
              <p className="text-sm text-muted-foreground">Lahore &nbsp;•&nbsp; Business Exposure / Operations Understanding</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            During my time at Interwood Mobel, I observed how business operations generate and
            depend on data across sales, inventory, and customer interactions. I developed an
            understanding of how organizations track performance, manage stock flow, and evaluate
            customer demand patterns.
          </p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Key Learnings</h4>
            {learnings.map((l, i) => (
              <AnimatedSection key={l} delay={0.1 + i * 0.06}>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {l}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
