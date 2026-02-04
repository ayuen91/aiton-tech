const AboutSection = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'UI/UX Design', 'Figma', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 circle-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <div className="relative animate-fade-up">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative background */}
                <div className="absolute inset-0 rounded-3xl bg-primary/10" />
                <div className="absolute inset-4 glass-card rounded-2xl overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                        <span className="font-display text-3xl font-bold text-primary">JD</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Your photo here</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center animate-float">
                  <span className="font-display text-2xl font-bold text-primary">5+</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-2 animate-float-delayed">
                  <span className="text-sm font-medium text-foreground">Years of Experience</span>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="section-number">.03</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate developer and designer with a focus on creating 
                  innovative digital solutions. With expertise in modern web technologies, 
                  I bring ideas to life through clean code and beautiful interfaces.
                </p>
                <p>
                  My approach combines technical excellence with creative thinking, 
                  ensuring every project delivers both functionality and aesthetic appeal.
                </p>
              </div>

              {/* Skills */}
              <div className="pt-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Values */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-display font-semibold text-foreground">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Pushing boundaries</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Quality</h4>
                  <p className="text-sm text-muted-foreground">Attention to detail</p>
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
