import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '.01',
    title: 'Project Alpha',
    category: 'Web Development',
    description: 'A modern web application built with React and TypeScript, featuring real-time updates and seamless user experience.',
    image: null, // Replace with your image
  },
  {
    number: '.02',
    title: 'Project Beta',
    category: 'UI/UX Design',
    description: 'Complete brand identity and digital design system for a fintech startup, including mobile app interfaces.',
    image: null,
  },
  {
    number: '.03',
    title: 'Project Gamma',
    category: 'Full Stack',
    description: 'End-to-end e-commerce solution with custom CMS, payment integration, and analytics dashboard.',
    image: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-60" />
      <div className="absolute inset-0 circle-pattern opacity-25" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="section-number block mb-4">.04</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of work that showcases my expertise and passion
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] relative bg-secondary/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="section-number">{project.number}</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
