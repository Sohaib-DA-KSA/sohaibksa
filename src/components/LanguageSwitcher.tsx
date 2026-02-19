import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";

const LanguageSwitcher = () => {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
            <Globe className="h-4 w-4" />
            <span className="font-medium text-xs">
                {t('navbar.languageBtn')}
            </span>
        </Button>
    );
};

export default LanguageSwitcher;
