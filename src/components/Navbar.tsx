import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollRaf = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRaf.current) {
        cancelAnimationFrame(scrollRaf.current);
      }

      scrollRaf.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);

        const scrollPosition = window.scrollY + 120; // Improved offset for detection

        // Determine active section based on scroll position
        let currentSection = 'home';

        // Check from bottom to top to find the current active one
        for (let i = navLinks.length - 1; i >= 0; i--) {
          const sectionId = navLinks[i].href.replace('#', '');
          const element = document.getElementById(sectionId);
          if (element) {
            if (scrollPosition >= element.offsetTop) {
              currentSection = sectionId;
              break;
            }
          }
        }

        setActiveSection(currentSection);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-2 sm:top-4 left-1/2 z-50 transition-all duration-500 w-[96%] sm:w-[95%] max-w-5xl`}
    >
      <div className={`glass-navbar rounded-xl sm:rounded-2xl px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-between shadow-2xl transition-all duration-300 ${isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'}`}>
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="font-display text-base sm:text-xl font-black text-foreground tracking-tighter cursor-pointer flex-shrink-0"
        >
          AITON<span className="text-accent">TECH</span>
        </motion.a>

        {/* Navigation with sliding indicator */}
        <div className="relative flex items-center gap-1 sm:gap-2 mx-auto">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-bold transition-colors duration-300 rounded-lg ${isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 z-0 overflow-hidden rounded-lg glass-active"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 35
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
                    <div className="absolute inset-[2px] rounded-md bg-gradient-to-b from-white/40 to-transparent" style={{ height: '40%' }} />
                    <div className="absolute -inset-1 rounded-xl bg-primary/10 blur-md -z-10" />
                  </motion.div>
                )}
                <span className="relative z-10 whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="default"
            size="sm"
            className="rounded-full px-4 sm:px-6 py-1 sm:py-2 gap-1 sm:gap-2 bg-foreground text-background hover:bg-foreground/90 text-[10px] sm:text-sm font-bold shadow-lg border border-white/10"
            onClick={() => scrollToSection('#contact')}
          >
            Contact
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
