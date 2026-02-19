import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import SocialGithub from "@/components/SocialGithub";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

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
        <a href="#home" className="text-lg font-bold text-foreground tracking-tight">
          Sohaib<span className="text-primary">.</span>
          <span className="text-xs text-muted-foreground ml-1 font-normal">{t('hero.role').split('|')[0]}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${active === l.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <LanguageSwitcher />

            <a
              href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all font-ar-body"
            >
              <Linkedin size={18} />
            </a>

            {/* GitHub now uses reusable SocialGithub component */}
            <SocialGithub size={18} className="p-2 rounded-lg hover:bg-primary/10" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${active === l.href
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
