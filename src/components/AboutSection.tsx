import { Database, BarChart3, FileSpreadsheet, Code } from "lucide-react";

const tools = [
  { icon: Database, label: "SQL" },
  { icon: BarChart3, label: "Power BI" },
  { icon: FileSpreadsheet, label: "Excel" },
  { icon: Code, label: "Python" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted/50">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        About <span className="text-primary">Me</span>
      </h2>
      <p className="text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
        Aspiring Data Analyst with strong knowledge of SQL, Python, Excel, and
        Power BI. Skilled at analyzing data, creating insightful dashboards, and
        supporting business decisions. Seeking an internship in Business
        Intelligence and Data Analytics to apply technical skills, gain hands-on
        experience, and contribute to data-driven solutions.
      </p>
      <div className="flex justify-center gap-8 pt-4">
        {tools.map((t) => (
          <div key={t.label} className="flex flex-col items-center gap-2 text-primary">
            <t.icon size={28} />
            <span className="text-xs font-semibold text-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
