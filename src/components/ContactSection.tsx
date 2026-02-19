import { MessageCircle, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";
import SocialGithub from "@/components/SocialGithub";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // replace with your EmailJS Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"    // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setSuccess(t('contact.successMsg'));
          formRef.current?.reset();
        },
        (error) => {
          setSuccess(t('contact.errorMsg'));
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 space-y-10">

        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-foreground">
              {t('contact.title')} <span className="text-primary">{t('contact.subtitle')}</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('contact.description')}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t('contact.availabilityBadge')}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.15}>
            <div className="glass-panel rounded-2xl p-6 space-y-5 h-full">
              <h3 className="text-sm font-bold text-primary tracking-wider uppercase">{t('contact.infoTitle')}</h3>

              <a
                href="https://wa.me/923405865205?text=Hi%20Sohaib!%20I%20saw%20your%20portfolio%20and%20want%20to%20contact%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                dir="ltr"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                +92 340 5865205
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={18} className="text-primary" />
                </div>
                {t('contact.location')}
              </div>

              <a
                href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Linkedin size={18} className="text-primary" />
                </div>
                LinkedIn
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-2 rounded-lg bg-primary/10">
                  <SocialGithub size={18} />
                </div>
                <a
                  href="https://github.com/Sohaib-DA-KSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Send Message Form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="glass-panel rounded-2xl p-6 h-full">
              <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-4">{t('contact.formTitle')}</h3>
              <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                <Input name="from_name" placeholder={t('contact.namePlaceholder')} className="bg-muted/30 border-border" required />
                <Input type="email" name="from_email" placeholder={t('contact.emailPlaceholder')} className="bg-muted/30 border-border" required />
                <Textarea name="message" placeholder={t('contact.messagePlaceholder')} rows={4} className="bg-muted/30 border-border" required />
                <Button type="submit" className="w-full shadow-lg shadow-primary/20" disabled={loading}>
                  {loading ? t('contact.sendingBtn') : t('contact.sendBtn')}
                </Button>
                {success && <p className="text-sm mt-2 text-primary">{success}</p>}
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
