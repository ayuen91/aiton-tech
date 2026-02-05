import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update indicator position when active section changes
  useEffect(() => {
    if (activeSection && linkRefs.current[activeSection] && navRef.current) {
      const linkEl = linkRefs.current[activeSection];
      const navEl = navRef.current;
      
      if (linkEl) {
        const linkRect = linkEl.getBoundingClientRect();
        const navRect = navEl.getBoundingClientRect();
        
        setIndicatorStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    } else {
      setIndicatorStyle({ left: 0, width: 0 });
    }
  }, [activeSection]);

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
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display text-sm sm:text-xl font-bold text-foreground tracking-wider"
        >
          AYUEN
        </a>

        {/* Navigation with sliding indicator */}
        <div ref={navRef} className="relative flex items-center gap-0.5 sm:gap-1">
          {/* Sliding glass indicator with refraction effect */}
          <div
            className="absolute top-0 h-full transition-all duration-500 ease-out pointer-events-none"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.width > 0 ? 1 : 0,
            }}
          >
            {/* Main glass pill */}
            <div className="absolute inset-0 rounded-lg overflow-hidden glass-active">
              {/* Refraction/magnifying glass effect layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
              
              {/* Lens distortion effect */}
              <div className="absolute inset-[2px] rounded-md bg-gradient-to-b from-white/40 to-transparent" style={{ height: '40%' }} />
              
              {/* Chromatic aberration simulation */}
              <div className="absolute inset-0 rounded-lg mix-blend-overlay opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/30 via-transparent to-rose-200/30" />
              </div>
            </div>
            
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-xl bg-primary/10 blur-md -z-10" />
          </div>

          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.name}
                ref={(el) => { linkRefs.current[sectionId] = el; }}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative z-10 px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive 
                    ? 'text-foreground scale-105' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <Button
          variant="default"
          size="sm"
          className="rounded-full px-3 sm:px-6 py-1 sm:py-2 gap-1 sm:gap-2 bg-foreground text-background hover:bg-foreground/90 text-[10px] sm:text-sm"
          onClick={() => scrollToSection('#contact')}
        >
          Contact
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
