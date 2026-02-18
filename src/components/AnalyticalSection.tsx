import AnimatedSection from "./AnimatedSection";
import dashboardImg from "../assets/Dashboard/Dashboard.png";

const AnalyticalSection = () => {
  return (
    <section id="analytics" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* Section Title */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-foreground">
            Business <span className="text-primary">Analytics Dashboard</span>
          </h2>
          <p className="text-center text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
            Real-time business intelligence reporting built using Power BI, SQL, and Excel
            to support management decision-making and operational performance tracking.
          </p>
        </AnimatedSection>

        {/* Dashboard Card */}
        <AnimatedSection delay={0.15}>
          <div className="glass-panel rounded-2xl p-6 md:p-8 transition-all hover:scale-[1.01]">

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-xl">
              <img
                src={dashboardImg}
                alt="Power BI Analytics Dashboard"
                className="w-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                This dashboard provides a clear overview of sales trends, operational
                performance, and key performance indicators. It enables management to
                monitor performance in real-time and take data-driven decisions.
              </p>

              <p>
                The data pipeline was prepared using SQL and Microsoft Excel, then
                transformed into interactive visual insights using Power BI dashboards.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Power BI</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">SQL</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Excel</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Data Modeling</span>
              <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">KPI Tracking</span>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default AnalyticalSection;
