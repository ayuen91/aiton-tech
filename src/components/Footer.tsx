import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 circle-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-3 sm:px-6">
        {/* CTA Section */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center mb-8 sm:mb-16 animate-fade-up">
          <span className="section-number block mb-2 sm:mb-4 text-xs sm:text-sm">.05</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-lg mb-4 sm:mb-8">
            Have a project in mind? Let's create something amazing.
          </p>
          <Button
            size="sm"
            className="rounded-full px-4 sm:px-8 py-2 sm:py-6 gap-1 sm:gap-2 bg-foreground text-background hover:bg-foreground/90 font-medium text-xs sm:text-sm"
          >
            Get In Touch
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        {/* Footer Links */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 py-4 sm:py-8 border-t border-border/30">
            {/* Logo */}
            <div className="font-display text-base sm:text-xl font-bold text-foreground">
              Portfolio
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
