import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Circle Pattern Background */}
      <div className="absolute inset-0 circle-pattern opacity-60" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-up">
              <span className="section-number">.01</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Creative
                <br />
                <span className="text-gradient">Developer &</span>
                <br />
                Designer
              </h1>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Crafting digital experiences that blend innovation with elegant design. 
                Building the future, one pixel at a time.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="rounded-full px-8 py-6 gap-2 bg-foreground text-background hover:bg-foreground/90 font-medium"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 border-border hover:bg-secondary/50"
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Image Sequence Placeholder */}
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* Placeholder for image sequence - replace with your PNG sequence */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Decorative elements mimicking 3D glass effect */}
                <div className="absolute w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float" />
                <div className="absolute w-48 h-48 rounded-full bg-accent/30 blur-2xl animate-float-delayed" />
                
                {/* Main image placeholder */}
                <div className="relative z-10 w-72 h-72 glass-card rounded-full flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="font-display text-5xl font-bold text-primary">83%</div>
                    <div className="w-16 h-16 mx-auto mt-4 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
                    <p className="text-sm text-muted-foreground mt-4 max-w-[150px]">
                      Projects delivered on time
                    </p>
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-10 right-10 w-20 h-20 glass-card rounded-2xl rotate-12 animate-float-delayed" />
                <div className="absolute bottom-20 left-5 w-16 h-16 glass-card rounded-xl -rotate-6 animate-float" />
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16 text-center lg:text-left">
              <div>
                <div className="font-display text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
