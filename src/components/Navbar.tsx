import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[96%] sm:w-[95%] ${
        isScrolled ? 'max-w-6xl' : 'max-w-5xl'
      }`}
    >
      <div className="glass-navbar rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="font-display text-sm sm:text-xl font-bold text-foreground"
        >
          Portfolio
        </a>

        {/* Navigation - Always visible */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-1.5 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="default"
          size="sm"
          className="rounded-full px-2 sm:px-6 py-1 sm:py-2 gap-1 sm:gap-2 bg-foreground text-background hover:bg-foreground/90 text-[10px] sm:text-sm"
          onClick={() => scrollToSection('#contact')}
        >
          <span className="hidden xs:inline">Contact</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
