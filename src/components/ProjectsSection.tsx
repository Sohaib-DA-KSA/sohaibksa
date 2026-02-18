import { ExternalLink, Github, TrendingUp, TrendingDown, DollarSign, Users, Lightbulb, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Coffee Shop Sales Analysis",
    focus: "Revenue Optimization",
    tools: ["Power BI", "Excel"],
    problem: "Understand which products and time slots drive the most revenue for a coffee chain.",
    kpis: [
      { label: "Revenue ↑", icon: DollarSign },
      { label: "Margins ↑", icon: TrendingUp },
    ],
    insights: [
      "Peak revenue hours identified for optimal staffing",
      "High margin products vs underperforming items flagged",
      "Weekend evening sales generate 42% of weekly revenue",
    ],
    recommendation: "Adjust menu pricing & staffing schedule based on peak revenue windows.",
    highlight: "Weekend evening sales generate 42% of weekly revenue — staffing should increase during these hours.",
  },
  {
    title: "Retail Sales Performance Dashboard",
    focus: "Regional Sales Strategy",
    tools: ["Power BI", "Power Query"],
    problem: "Compare sales performance across regions to optimize distribution and marketing.",
    kpis: [
      { label: "Sales ↑", icon: TrendingUp },
      { label: "Growth ↑", icon: BarChart3 },
    ],
    insights: [
      "Identified weak regions needing marketing focus",
      "Top performing product categories by region",
      "Monthly and seasonal trend detection",
    ],
    recommendation: "Reallocate marketing budget toward underperforming regions with growth potential.",
    highlight: "Southern region showed 28% lower conversion despite highest traffic — targeted campaigns recommended.",
  },
  {
    title: "Customer Segmentation Analysis",
    focus: "High-Value Customers",
    tools: ["SQL", "Excel"],
    problem: "Segment customers by value to optimize retention and marketing targeting.",
    kpis: [
      { label: "Retention ↑", icon: Users },
      { label: "Revenue ↑", icon: DollarSign },
    ],
    insights: [
      "Top 15% of customers drive 60% of revenue",
      "Repeat purchase behavior patterns identified",
      "Revenue contribution mapped by customer segment",
    ],
    recommendation: "Create loyalty programs targeting high-value segments to improve retention.",
    highlight: "Top 15% of customers contribute 60% of total revenue — retention programs critical.",
  },
  {
    title: "HR Attrition Analytics",
    focus: "Employee Turnover",
    tools: ["Power BI", "Excel"],
    problem: "Understand why employees leave and predict attrition risk factors.",
    kpis: [
      { label: "Cost ↓", icon: TrendingDown },
      { label: "Retention ↑", icon: Users },
    ],
    insights: [
      "Key attrition drivers identified by department",
      "Salary vs satisfaction correlation analyzed",
      "Early warning indicators for at-risk employees",
    ],
    recommendation: "Implement targeted retention strategies to reduce annual hiring costs by 20%.",
    highlight: "Employees with <2 years tenure and no promotion have 3x higher attrition rate.",
  },
  {
    title: "E-Commerce Funnel Analysis",
    focus: "Conversion Rate Optimization",
    tools: ["SQL", "Power BI"],
    problem: "Identify where customers drop off in the purchase funnel.",
    kpis: [
      { label: "Conversion ↑", icon: TrendingUp },
      { label: "Revenue ↑", icon: DollarSign },
    ],
    insights: [
      "Cart-to-checkout drop-off rate of 45% identified",
      "Mobile users convert 30% less than desktop",
      "Payment page friction points discovered",
    ],
    recommendation: "Simplify checkout flow and optimize mobile experience to recover lost revenue.",
    highlight: "45% cart abandonment at checkout — streamlined flow could recover significant revenue.",
  },
  {
    title: "Cricket Career Performance Analytics",
    focus: "Performance Consistency",
    tools: ["Power BI", "Excel", "DAX"],
    problem: "Compare player career performance metrics to support selection decisions.",
    kpis: [
      { label: "Performance", icon: TrendingUp },
      { label: "Consistency", icon: BarChart3 },
    ],
    insights: [
      "Player consistency scores computed across seasons",
      "Key performance indicators compared by role",
      "Form trends and peak performance periods identified",
    ],
    recommendation: "Use data-driven player selection based on consistency and situational performance.",
    highlight: "Players with consistent form over 3+ seasons outperform high-peak inconsistent players.",
  },
  {
    title: "Data Cleaning & Exploratory Analysis",
    focus: "Data Reliability",
    tools: ["Python", "Pandas", "Numpy"],
    problem: "Transform messy real-world datasets into clean, analysis-ready formats.",
    kpis: [
      { label: "Quality ↑", icon: TrendingUp },
      { label: "Accuracy ↑", icon: BarChart3 },
    ],
    insights: [
      "30% of records had missing or inconsistent values",
      "Hidden patterns and correlations uncovered",
      "Standardized formats for reliable downstream analysis",
    ],
    recommendation: "Establish data quality pipelines to prevent reporting errors and improve accuracy.",
    highlight: "30% of raw data contained errors — cleaning improved report accuracy by 40%.",
  },
  {
    title: "Sales Forecasting Analysis",
    focus: "Demand Prediction",
    tools: ["Power BI", "SQL"],
    problem: "Predict future sales volumes to optimize inventory planning.",
    kpis: [
      { label: "Forecast", icon: TrendingUp },
      { label: "Cost ↓", icon: TrendingDown },
    ],
    insights: [
      "Seasonal demand patterns modeled for top products",
      "Lead time optimization recommendations generated",
      "Overstock and stockout risks quantified",
    ],
    recommendation: "Align inventory procurement cycles with predicted demand to reduce carrying costs.",
    highlight: "Seasonal forecasting model reduced overstock risk by identifying 3-month demand cycles.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Featured <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Each project answers: "What decision can a company make using this?"
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <AnimatedSection
            key={p.title}
            delay={idx % 2 === 0 ? 0.1 : 0.25}
            direction={idx % 2 === 0 ? "left" : "right"}
          >
            <div className="glass-panel rounded-2xl p-6 h-full flex flex-col glow-hover transition-all duration-300 hover:-translate-y-1 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs font-medium text-primary">{p.focus}</span>
                </div>
              </div>

              {/* KPI Badges */}
              <div className="flex gap-2 mb-4">
                {p.kpis.map((kpi) => (
                  <span
                    key={kpi.label}
                    className="kpi-card inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary"
                  >
                    <kpi.icon size={12} />
                    {kpi.label}
                  </span>
                ))}
                {p.tools.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px] bg-muted text-muted-foreground border-border">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Problem */}
              <p className="text-sm text-muted-foreground mb-4">{p.problem}</p>

              {/* Insights */}
              <ul className="space-y-2 mb-4 flex-1">
                {p.insights.map((ins) => (
                  <li key={ins} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {ins}
                  </li>
                ))}
              </ul>

              {/* Insight Highlight */}
              <div className="insight-box rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <Lightbulb size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-foreground/80 italic">"{p.highlight}"</p>
                </div>
              </div>

              {/* Recommendation */}
              <p className="text-xs text-muted-foreground mb-4">
                <span className="font-semibold text-secondary">Recommendation:</span> {p.recommendation}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <Button size="sm" variant="outline" className="text-xs border-border hover:border-primary/40 gap-1.5" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={12} /> Dashboard
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="text-xs border-border hover:border-primary/40 gap-1.5" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github size={12} /> GitHub
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
