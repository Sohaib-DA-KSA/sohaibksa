import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-background">
    <div className="max-w-4xl mx-auto px-4 space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground">
          Let's turn data into insights together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Phone size={18} className="text-primary" />
            0345865205
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            Jeddah, KSA
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sohaib-adnan-833408369/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" rows={4} />
          <Button type="submit" className="w-full">
            Contact Me
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
