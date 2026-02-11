import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Zap, Grid3x3, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Services', href: '#services', icon: Zap },
  { name: 'Projects', href: '#projects', icon: Grid3x3 },
  { name: 'About', href: '#about', icon: User },
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
        const scrollPosition = window.scrollY + 120;
        let currentSection = 'home';
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
    // Delay initial scroll handler to after first paint to avoid flicker
    const timeout = setTimeout(() => {
      handleScroll();
    }, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    setActiveSection(id); // Set active section immediately to prevent indicator jump
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
      className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[95%] max-w-5xl"
    >
      <div className="glass-navbar rounded-xl sm:rounded-2xl px-3 sm:px-8 py-3 sm:py-5 flex items-center justify-between shadow-2xl">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="font-display text-base sm:text-lg lg:text-xl font-black text-foreground tracking-tighter cursor-pointer flex-shrink-0 mr-2 sm:mr-0"
        >
          AITON<span className="text-accent">TECH</span>
        </motion.a>

        {/* Navigation with sliding indicator */}
        <div className="relative flex items-center gap-0.5 sm:gap-2 mx-auto overflow-hidden sm:overflow-visible p-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-2 sm:px-5 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-black transition-all duration-300 rounded-lg ${isActive
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
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-all duration-300 ${isActive ? 'scale-125 text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]' : 'group-hover:text-accent'}`} />
                <span className={`relative z-10 whitespace-nowrap hidden sm:block ${isActive ? '!block' : ''}`}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
          <Button
            variant="default"
            size="sm"
            className="rounded-full px-4 sm:px-6 py-1 sm:py-2 bg-foreground text-background hover:bg-foreground/90 text-[10px] sm:text-sm font-extrabold shadow-lg border border-white/10"
            onClick={() => scrollToSection('#contact')}
          >
            Contact
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
