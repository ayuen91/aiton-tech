import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '.01',
    title: 'Project Alpha',
    category: 'Web Dev',
    description: 'Modern web app with React and TypeScript.',
  },
  {
    number: '.02',
    title: 'Project Beta',
    category: 'UI/UX',
    description: 'Brand identity and design system.',
  },
  {
    number: '.03',
    title: 'Project Gamma',
    category: 'Full Stack',
    description: 'E-commerce with custom CMS.',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-60" />
      <div className="absolute inset-0 circle-pattern opacity-25" />

      <div className="relative z-10 container mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-up">
          <span className="section-number block mb-2 sm:mb-4 text-xs sm:text-sm">.04</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
            A selection of work showcasing my expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-square sm:aspect-[4/3] relative bg-secondary/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-3 sm:w-6 h-3 sm:h-6 text-primary" />
                  </div>
                </div>
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-2 sm:p-6">
                <div className="flex items-center justify-between mb-1 sm:mb-3">
                  <span className="section-number text-[10px] sm:text-sm">{project.number}</span>
                  <span className="text-[8px] sm:text-xs font-medium text-primary bg-primary/10 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xs sm:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed hidden sm:block">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
