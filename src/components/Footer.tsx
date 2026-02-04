import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 circle-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        {/* CTA Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <span className="section-number block mb-4">.05</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <Button
            className="rounded-full px-8 py-6 gap-2 bg-foreground text-background hover:bg-foreground/90 font-medium"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Footer Links */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-border/30">
            {/* Logo */}
            <div className="font-display text-xl font-bold text-foreground">
              Portfolio
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
