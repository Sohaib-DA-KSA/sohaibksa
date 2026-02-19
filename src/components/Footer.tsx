import { Linkedin, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-6 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} {t('footer.rights')}</span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Sohaib-DA-KSA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
