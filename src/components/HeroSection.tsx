import { MapPin, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
  >
    {/* Decorative blobs */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto w-full px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 relative z-10">
      {/* Text */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-primary">
          Data Analyst
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          Turning Data into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Business Insights
          </span>{" "}
          & Decisions
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
          I analyze, clean, and visualize data to uncover insights that drive
          smarter business decisions.
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
          <MapPin size={14} className="text-primary" /> Jeddah, KSA
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <Button asChild size="lg" className="shadow-lg shadow-primary/25">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Download Resume</a>
          </Button>
          <a
            href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 w-11 rounded-md border border-input text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin size={20} />
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 scale-110" />
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img
              src={profileImg}
              alt="Sohaib Adnan – Data Analyst"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ArrowDown size={24} className="text-muted-foreground" />
    </motion.div>
  </section>
);

export default HeroSection;
