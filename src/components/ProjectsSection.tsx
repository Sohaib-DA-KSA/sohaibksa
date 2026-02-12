import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Coffee Shop Sales Dashboard",
    tools: ["Power BI", "Excel"],
    desc: "Analyzed coffee shop sales data to track performance, customer behavior, and product trends.",
    insights: [
      "Identified top-selling products and peak sales hours",
      "Analyzed customer purchase patterns",
      "Highlighted revenue-driving categories",
    ],
  },
  {
    title: "Interactive Sales Dashboard",
    tools: ["Power BI", "Power Query"],
    desc: "Built an interactive dashboard to analyze sales across regions, products, and time.",
    insights: [
      "Compared regional sales performance",
      "Detected monthly and seasonal trends",
      "Improved decision-making with dynamic filters",
    ],
  },
  {
    title: "Sales Performance Dashboard",
    tools: ["Power BI", "SQL"],
    desc: "Evaluated company sales performance using SQL queries and Power BI dashboards.",
    insights: [
      "Tracked revenue and profit trends",
      "Identified high-performing regions",
      "Flagged underperforming segments",
    ],
  },
  {
    title: "Customer Analysis Using SQL",
    tools: ["SQL", "Excel"],
    desc: "Performed customer segmentation and behavioral analysis using structured queries.",
    insights: [
      "Identified high-value customers",
      "Analyzed repeat purchase behavior",
      "Measured revenue contribution by segment",
    ],
  },
  {
    title: "Cricket Career Analytics Dashboard",
    tools: ["Power BI", "Excel", "DAX"],
    desc: "Analyzed cricket player career data to compare performance metrics.",
    insights: [
      "Evaluated player consistency and growth",
      "Compared key performance indicators",
      "Highlighted top performers by role",
    ],
  },
  {
    title: "E-Commerce Data Analysis",
    tools: ["SQL"],
    desc: "Analyzed e-commerce data focusing on orders, inventory, and profitability.",
    insights: [
      "Monitored order and revenue trends",
      "Evaluated profit margins by product",
      "Identified inventory optimization opportunities",
    ],
  },
  {
    title: "Data Cleaning & Exploratory Data Analysis",
    tools: ["Python", "Pandas", "Matplotlib"],
    desc: "Cleaned messy datasets and performed exploratory analysis to uncover trends.",
    insights: [
      "Handled missing and inconsistent data",
      "Discovered patterns and correlations",
      "Prepared data for reliable analysis",
    ],
  },
  {
    title: "HR Analytics Dashboard",
    tools: ["Power BI", "Excel"],
    desc: "Built an HR dashboard to analyze employee attrition and performance.",
    insights: [
      "Identified key attrition drivers",
      "Compared department-wise trends",
      "Provided actionable HR insights",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-muted/50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="max-w-6xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center text-foreground">
          Featured <span className="text-primary">Projects</span>
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <AnimatedSection
            key={p.title}
            delay={idx % 2 === 0 ? 0.1 : 0.25}
            direction={idx % 2 === 0 ? "left" : "right"}
          >
            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/30 h-full">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <ul className="space-y-1">
                  {p.insights.map((i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="gap-3">
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live Dashboard
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
