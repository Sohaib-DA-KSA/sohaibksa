import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-primary">Sohaib Adnan</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Data Analyst | Power BI | MS Excel | Data Visualization | SQL
          </h2>

          <p className="text-muted-foreground max-w-lg">
            I transform raw data into meaningful insights and interactive dashboards.
            Passionate about solving business problems using analytics and visualization.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-primary/30 hover:bg-primary/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full blur-3xl scale-110 opacity-70" />

            {/* Circular image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 md:w-72 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20"
            >
              <img
                src={profileImg}
                alt="Sohaib Adnan - Data Analyst"
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
