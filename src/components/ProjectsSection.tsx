import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Globe, ShoppingCart } from 'lucide-react';

const projects = [
  {
    number: '.01',
    title: 'Jahir Trade Guide',
    link: 'https://jahir.us',
    category: 'Portfolio / Fintech',
    description: 'A stylistic portfolio website for Jahir Trade Guide featuring intricate TradingView charts integration and high-end animations for financial analysis.',
    image: '/projects/jahir-us.webp',
    stack: ['React', 'TradingView API', 'Framer Motion', 'Tailwind CSS']
  },
  {
    number: '.02',
    title: 'Selector Kuoi Awan',
    link: 'https://kuoiawan.vercel.app',
    category: 'Entertainment / E-commerce',
    description: 'Dynamic portfolio for DJ Selector Kuoi Awan with high-quality music download capabilities and a fully integrated shop page for bookings and merch.',
    image: '/projects/kuoiawan-vercel-app.webp',
    stack: ['React', 'Supabase', 'Stripe', 'Framer Motion']
  },
  {
    number: '.03',
    title: 'SA Gwanda Footwear',
    link: 'https://sagwanda.vercel.app',
    category: 'E-commerce',
    description: 'Nairobi-based footwear emporium. A robust e-commerce platform that has consistently delighted Kenyan customers with seamless footwear shopping experience.',
    image: '/projects/sagwanda-vercel-app.webp',
    stack: ['React', 'Redux', 'Cloudinary', 'Node.js']
  },
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-40" />
      <div className="absolute inset-0 circle-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-24"
        >
          <span className="section-number block mb-4 text-xs sm:text-sm font-bold tracking-[0.2em] text-accent">.03 SELECTED WORKS</span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-foreground mb-6">
            Pioneering <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent italic font-serif">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-xl font-medium">
            Transforming ideas into high-performance digital products for global brands and local leaders.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative glass-frosted rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500"
            >
              {/* Image & Overlay */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-8 opacity-80">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[10px] font-bold text-accent glass-icon px-3 py-1 rounded-full border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/40 backdrop-blur-[4px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-3 glass-heavy px-8 py-4 rounded-full text-foreground font-bold shadow-2xl border border-white/20"
                  >
                    Visit Website
                    <ExternalLink size={20} className="text-accent" />
                  </motion.div>
                </a>
              </div>

              {/* Content Full Detail */}
              <div className="p-8 sm:p-12 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">{project.category}</span>
                  <span className="text-2xl font-serif italic text-accent opacity-30">{project.number}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-accent hover:translate-x-1 transition-transform"
                  >
                    View Project Case Study
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
