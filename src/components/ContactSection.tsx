import { Mail, MessageCircle, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      <AnimatedSection>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Let's turn data into insights together.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10">
        <AnimatedSection direction="left" delay={0.15}>
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10"><MessageCircle size={18} className="text-primary" /></div>
              +923405865205
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-primary/10"><MapPin size={18} className="text-primary" /></div>
              Jeddah, KSA
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <div className="p-2 rounded-lg bg-primary/10"><Linkedin size={18} /></div>
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <div className="p-2 rounded-lg bg-primary/10"><Github size={18} /></div>
                GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15}>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button type="submit" className="w-full shadow-lg shadow-primary/25">
              Contact Me
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
