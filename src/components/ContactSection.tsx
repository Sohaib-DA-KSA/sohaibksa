import { MessageCircle, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="py-20 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      
      {/* Section Header */}
      <AnimatedSection>
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-foreground">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Let's turn data into insights together.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Currently available for Internship & Junior Data Analyst roles
          </div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <AnimatedSection direction="left" delay={0.15}>
          <div className="glass-panel rounded-2xl p-6 space-y-5 h-full">
            <h3 className="text-sm font-bold text-primary tracking-wider uppercase">Contact Info</h3>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/923405865205?text=Hi%20Sohaib!%20I%20saw%20your%20portfolio%20and%20want%20to%20contact%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageCircle size={18} className="text-primary" />
              </div>
              +92 340 5865205
            </a>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10"><MapPin size={18} className="text-primary" /></div>
              Jeddah, Makkah Region, KSA
            </div>

            <a
              href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10"><Linkedin size={18} className="text-primary" /></div>
              LinkedIn
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10"><Github size={18} className="text-primary" /></div>
              GitHub
            </a>
          </div>
        </AnimatedSection>

        {/* Send Message Form */}
        <AnimatedSection direction="right" delay={0.15}>
          <div className="glass-panel rounded-2xl p-6 h-full">
            <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-4">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Your Name" className="bg-muted/30 border-border" />
              <Input type="email" placeholder="Your Email" className="bg-muted/30 border-border" />
              <Textarea placeholder="Your Message" rows={4} className="bg-muted/30 border-border" />
              <Button type="submit" className="w-full shadow-lg shadow-primary/20">
                Send Message
              </Button>
            </form>
          </div>
        </AnimatedSection>

      </div>
    </div>
  </section>
);

export default ContactSection;
