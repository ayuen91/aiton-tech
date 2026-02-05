import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageSequence from './ImageSequence';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

// Generate frame paths from public folder
const videoFrames: string[] = Array.from({ length: 31 }, (_, i) => 
  `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.png`
);

// Update hero content to use AYUEN branding

const HeroSection = () => {
  const [progress, setProgress] = useState(0);

  // Animate progress to 83%
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(83);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24"
    >
      {/* Circle Pattern Background */}
      <div className="absolute inset-0 circle-pattern opacity-60" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-3 sm:space-y-6 animate-fade-up">
              <span className="section-number text-xs sm:text-sm">.01</span>
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Creative
                <br />
                <span className="text-gradient">Developer &</span>
                <br />
                Designer
              </h1>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-md leading-relaxed">
                Crafting digital experiences that blend innovation with elegant design.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                <Button
                  size="sm"
                  className="rounded-full px-4 sm:px-8 py-2 sm:py-6 gap-1 sm:gap-2 bg-foreground text-background hover:bg-foreground/90 font-medium text-xs sm:text-sm"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full px-4 sm:px-8 py-2 sm:py-6 border-border hover:bg-secondary/50 text-xs sm:text-sm"
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Image Sequence Video */}
            <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
                <div className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-accent/20 blur-2xl animate-float-delayed" />
                
                {/* Main content container with progress and frames */}
                <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
                  {/* Progress Bar Box */}
                  <div className="glass-progress-box rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-full max-w-[280px] sm:max-w-[400px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-medium text-foreground/80">Progress</span>
                      <span className="font-display text-lg sm:text-2xl font-bold text-foreground">{progress}%</span>
                    </div>
                    <div className="relative h-2 sm:h-3 w-full bg-white/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Image Sequence Container */}
                  <div className="w-full max-w-[280px] sm:max-w-[400px] aspect-square glass-heavy rounded-2xl sm:rounded-3xl overflow-hidden">
                    <ImageSequence 
                      frames={videoFrames} 
                      fps={12} 
                      pingPong={true}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 glass-frosted rounded-xl sm:rounded-2xl rotate-12 animate-float-delayed" />
                <div className="absolute bottom-10 sm:bottom-20 left-2 sm:left-5 w-10 sm:w-16 h-10 sm:h-16 glass-frosted rounded-lg sm:rounded-xl -rotate-6 animate-float" />
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-6 sm:mt-12 pt-4 sm:pt-8 border-t border-border/50">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-16 text-center lg:text-left">
              <div>
                <div className="font-display text-xl sm:text-3xl font-bold text-foreground">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-3xl font-bold text-foreground">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-3xl font-bold text-foreground">30+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
