import { MapPin, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center pt-16 bg-background"
  >
    <div className="max-w-6xl mx-auto w-full px-4 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
      {/* Text */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary">
          Data Analyst
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
          Turning Data into{" "}
          <span className="text-primary">Business Insights</span> & Decisions
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
          I analyze, clean, and visualize data to uncover insights that drive
          smarter business decisions.
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
          <MapPin size={14} className="text-primary" /> Jeddah, KSA
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Download Resume</a>
          </Button>
          <a
            href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 w-11 rounded-md border border-input text-primary hover:bg-muted transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="flex-shrink-0">
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
          <img
            src={profileImg}
            alt="Sohaib Adnan – Data Analyst"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
