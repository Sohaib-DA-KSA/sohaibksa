import { Linkedin, Github, ArrowDown, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center pt-16 relative overflow-hidden analytics-grid"
  >
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

    <div className="max-w-6xl mx-auto w-full px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 relative z-10">
      {/* Text */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Available for Opportunities
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          Turning Raw Data into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Business Decisions
          </span>
        </h1>

        <p className="text-base text-muted-foreground font-medium">
          Data Analyst &nbsp;|&nbsp; SQL • Python • Power BI • Excel • Business Insights
        </p>

        <p className="text-sm text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
          I analyze real-world datasets to uncover revenue opportunities, reduce losses,
          and support strategic decisions through data storytelling and dashboards.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20 gap-2">
            <a href="#projects"><FolderOpen size={16} /> View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2 border-border hover:border-primary/40">
            <a href="#contact"><Download size={16} /> Resume</a>
          </Button>
          <a
            href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <Github size={20} />
          </a>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-2xl blur-2xl scale-110" />
          <div className="relative w-60 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
            <img
              src={profileImg}
              alt="Sohaib Adnan – Data Analyst"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
      <ArrowDown size={18} className="text-primary" />
    </motion.div>
  </section>
);

export default HeroSection;
