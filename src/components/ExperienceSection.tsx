import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import companyLogo from "../assets/company/companylogo.jpg";

const contributions = [
  "Developed real-time Power BI dashboards to track sales, operational, and performance KPIs",
  "Used SQL and Excel to clean, model, and validate data for accurate reporting",
  "Automated reports to reduce manual effort and deliver actionable insights to stakeholders",
];

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
      {/* Section Header */}
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </AnimatedSection>

      {/* Experience Card */}
      <AnimatedSection delay={0.15}>
        <div className="glass-panel rounded-2xl p-8 relative">
          {/* Vertical Gradient Line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent rounded-l-2xl" />

          {/* Company Info */}
          <a
            href="https://www.linkedin.com/company/interwoodmobel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 hover:text-primary transition-colors"
          >
            <img
              src={companyLogo}
              alt="Interwood Mobel Logo"
              className="w-16 h-16 object-contain rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Interwood Mobel (Pvt) Ltd, Lahore
              </h3>
              <p className="text-sm text-muted-foreground">
                Data Analyst | Power BI &nbsp;•&nbsp; Nov 2025 - Present
              </p>
            </div>
          </a>



          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            At Interwood Mobel, I deliver business-focused analytics and real-time reporting
            to support operational and management decision-making. I build and maintain Power BI
            dashboards using data prepared with SQL and Microsoft Excel, ensuring accurate,
            reliable insights that improve visibility, efficiency, and planning across teams.
          </p>

          {/* Key Contributions */}
          <div className="space-y-3 mb-6">
            <h4 className="text-sm font-semibold text-foreground">Key Contributions</h4>
            {contributions.map((c, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.06}>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {c}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Learnings */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Key Learnings</h4>
            {learnings.map((l, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.06}>
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
