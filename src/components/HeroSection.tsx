import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <a
              href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-block hover:scale-105 transition-transform cursor-pointer hover:underline decoration-primary/50 underline-offset-8"
            >
              Sohaib Adnan
            </a>
          </motion.h1>

          <motion.h2 variants={item} className="text-xl md:text-2xl text-muted-foreground">
            Data Analyst | Power BI | MS Excel | Data Visualization | SQL
          </motion.h2>

          <motion.p variants={item} className="text-muted-foreground max-w-lg mx-auto md:mx-0">
            I help companies increase revenue and reduce costs using data analysis and dashboards.
            Data Analyst specializing in business reporting, KPI tracking, and decision-making analytics.

          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-primary/30 hover:bg-primary/10 transition hover:-translate-y-1 text-center"
            >
              Contact Me
            </a>

            <button
              onClick={() => window.print()}
              className="px-6 py-3 rounded-xl border border-primary/30 hover:bg-primary/10 transition hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-y-1 transition-transform"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >

            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full blur-3xl scale-110 opacity-70 animate-pulse" />

            {/* Circular image with 3D Float effect */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 cursor-pointer"
            >
              <img
                src={profileImg}
                alt="Sohaib Adnan - Data Analyst"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                style={{ objectPosition: "50% 25%" }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-ping" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
