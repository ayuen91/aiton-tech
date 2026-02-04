import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageSequence from './ImageSequence';

// Add your PNG frame imports here
// import frame1 from '@/assets/frames/frame001.png';
// import frame2 from '@/assets/frames/frame002.png';
// etc.

// Example: Replace this empty array with your actual frame imports
const videoFrames: string[] = [
  // frame1, frame2, frame3, ...
];

// Update hero content to use AYUEN branding

const HeroSection = () => {
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
                <div className="absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-primary/20 blur-3xl animate-float" />
                <div className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-accent/30 blur-2xl animate-float-delayed" />
                
                {/* Image Sequence Container */}
                <div className="relative z-10 w-full max-w-[280px] sm:max-w-[400px] aspect-square">
                  {videoFrames.length > 0 ? (
                    <ImageSequence 
                      frames={videoFrames} 
                      fps={24} 
                      className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden"
                    />
                  ) : (
                    /* Placeholder when no frames */
                    <div className="w-full h-full glass-card rounded-2xl sm:rounded-3xl flex items-center justify-center animate-float">
                      <div className="text-center p-4">
                        <div className="font-display text-3xl sm:text-5xl font-bold text-primary">83%</div>
                        <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mt-3 sm:mt-4 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
                        <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 max-w-[120px] sm:max-w-[150px] mx-auto">
                          Add your PNG frames
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 glass-card rounded-xl sm:rounded-2xl rotate-12 animate-float-delayed" />
                <div className="absolute bottom-10 sm:bottom-20 left-2 sm:left-5 w-10 sm:w-16 h-10 sm:h-16 glass-card rounded-lg sm:rounded-xl -rotate-6 animate-float" />
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
