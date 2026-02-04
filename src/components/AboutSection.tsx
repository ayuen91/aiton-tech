const AboutSection = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'UI/UX', 'Figma', 'Tailwind'
  ];

  return (
    <section id="about" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 circle-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-3 sm:px-6">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Left - Image/Visual */}
            <div className="relative animate-fade-up">
              <div className="aspect-square max-w-[200px] sm:max-w-md mx-auto relative">
                {/* Decorative background */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-primary/10" />
                <div className="absolute inset-2 sm:inset-4 glass-card rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4 sm:p-8">
                      <div className="w-14 sm:w-24 h-14 sm:h-24 mx-auto rounded-full bg-primary/20 mb-2 sm:mb-4 flex items-center justify-center">
                        <span className="font-display text-lg sm:text-3xl font-bold text-primary">JD</span>
                      </div>
                      <p className="text-[10px] sm:text-sm text-muted-foreground">Your photo here</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-20 h-12 sm:h-20 glass-card rounded-xl sm:rounded-2xl flex items-center justify-center animate-float">
                  <span className="font-display text-base sm:text-2xl font-bold text-primary">5+</span>
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 glass-card rounded-lg sm:rounded-xl px-2 sm:px-4 py-1 sm:py-2 animate-float-delayed">
                  <span className="text-[10px] sm:text-sm font-medium text-foreground">Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-3 sm:space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="section-number text-xs sm:text-sm">.03</span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <div className="space-y-2 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a passionate developer and designer focused on creating 
                  innovative digital solutions with modern web technologies.
                </p>
              </div>

              {/* Skills */}
              <div className="pt-2 sm:pt-4">
                <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-4">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-secondary text-secondary-foreground text-[10px] sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Values */}
              <div className="pt-2 sm:pt-4 grid grid-cols-2 gap-2 sm:gap-4">
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">Innovation</h4>
                  <p className="text-[10px] sm:text-sm text-muted-foreground">Pushing boundaries</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">Quality</h4>
                  <p className="text-[10px] sm:text-sm text-muted-foreground">Attention to detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
