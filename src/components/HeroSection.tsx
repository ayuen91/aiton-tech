import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackgroundAnimation from './BackgroundAnimation';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const HeroSection = () => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, 84, {
      duration: 2,
      delay: 0.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayProgress(Math.round(latest))
    });
    return animation.stop;
  }, [count]);

  // Calculate circular stroke
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayProgress / 100) * circumference;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen Background Animation */}
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation
          src="/aitontech.com-webp.webp"
          className="opacity-40"
        />
        {/* Overlays for better readability and aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
        <div className="absolute inset-0 circle-pattern opacity-40" />
      </div>


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-frosted border border-white/10">
              <span className="section-number text-xs font-bold text-accent">.01</span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-foreground/70">Welcome to Aiton Tech</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-foreground tracking-tight">
              Design <span className="text-gradient">Driven</span>
              <br />
              Innovation
            </h1>

            <p className="text-muted-foreground text-base sm:text-xl max-w-xl leading-relaxed">
              We weave digital narratives through cutting-edge code and visionary design. Transforming ideas into immersive web experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-7 gap-3 bg-foreground text-background hover:bg-foreground/90 font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-foreground/10"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Work
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-7 border-white/10 glass-frosted hover:bg-white/10 text-base font-medium transition-all"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Circular Progress and Accents */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Main Circular Progress Component */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {/* Spinning background circles */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-white/10 border-dashed animate-reverse-spin" />

              {/* Glass Circle Content */}
              <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full glass-heavy flex flex-col items-center justify-center shadow-2xl border border-white/20">
                {/* SVG Progress Circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="fill-none stroke-white/5"
                    strokeWidth="4"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="fill-none stroke-accent transition-all duration-300 ease-out"
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{
                      filter: 'drop-shadow(0 0 8px hsl(var(--accent)))',
                    }}
                  />
                </svg>

                <motion.span className="text-4xl sm:text-6xl font-display font-bold text-foreground mb-1">
                  {displayProgress}%
                </motion.span>
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-widest">Innovation Rate</span>
              </div>

              {/* Floating Decorative Blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />

              {/* Floating Cards (Creative additions) */}
              <div className="absolute top-0 -right-4 glass-frosted p-3 rounded-xl rotate-12 animate-float-delayed border border-white/10 shadow-lg">
                <div className="w-8 h-1 bg-accent rounded-full mb-2" />
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="absolute bottom-4 -left-8 glass-frosted p-4 rounded-xl -rotate-6 animate-float border border-white/10 shadow-lg">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scrolling Stats */}
        <div className="mt-20 sm:mt-32 pt-10 border-t border-white/5 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 sm:gap-12">
            {[
              { label: 'Innovation Rate', value: '84%' },
              { label: 'Successful Projects', value: '10+' },
              { label: 'Global Clients', value: '5+' },
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left space-y-1">
                <div className="text-2xl sm:text-4xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
