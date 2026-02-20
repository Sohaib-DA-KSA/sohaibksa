import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialGithub from "@/components/SocialGithub";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

import logo from "@/assets/logo.svg";

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t('navbar.home'), href: "#home" },
    { label: t('navbar.about'), href: "#about" },
    { label: t('navbar.experience'), href: "#experience" },
    { label: t('navbar.projects'), href: "#projects" },
    { label: t('navbar.analytics'), href: "#analytics" },
    { label: t('navbar.education'), href: "#education" },
    { label: t('navbar.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.querySelector(l.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && (s as HTMLElement).getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors" />
            <img src={logo} alt="Sohaib.DA Logo" className="relative w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground tracking-tight leading-none transition-colors group-hover:text-primary">Sohaib.DA</span>
            <span className="hidden xs:inline-block text-[10px] uppercase tracking-wider text-muted-foreground font-normal">
              {t('hero.role').split('|')[0]}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${active === l.href
                ? "text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <LanguageSwitcher />

            <a
              href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin size={18} />
            </a>

            <SocialGithub size={18} className="p-2 rounded-lg hover:bg-primary/10" />
          </div>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 rounded-xl bg-primary/10 text-primary active:scale-95 transition-transform"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((l, idx) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${active === l.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                >
                  {l.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 mt-4 border-t border-border flex items-center justify-between px-2"
              >
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('hero.contactMe')}</span>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                  <div className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                    <SocialGithub size={20} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
