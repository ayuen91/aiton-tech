import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon, Code2, Cpu, Globe, Layout, Layers, Zap, Rocket, Terminal } from 'lucide-react';
import { ReactNode } from 'react';

interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const services: Service[] = [
  {
    number: '.01',
    title: 'Web Development & E-commerce',
    description: 'Custom websites and online stores that convert visitors into customers. Perfect for small businesses across East Africa looking to establish or grow their online presence.',
    icon: Globe,
    color: 'from-accent to-primary'
  },
  {
    number: '.02',
    title: 'Digital Marketing & SEO',
    description: 'Strategic digital marketing and SEO optimization to help your business rank higher and reach more customers across East Africa and the region.',
    icon: Zap,
    color: 'from-primary to-purple-500'
  },
  {
    number: '.03',
    title: 'Business Solutions',
    description: 'Tailored software solutions and automation tools designed to streamline operations and boost productivity for growing businesses.',
    icon: Rocket,
    color: 'from-blue-500 to-accent'
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full"
    >
      <div className="h-full glass-frosted rounded-[2rem] p-6 sm:p-8 border border-white/5 shadow-2xl transition-all duration-500 group-hover:border-accent/30 overflow-hidden">
        {/* Animated Background Glow */}
        <div className={`absolute -inset-24 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`} />

        {/* Content with 3D feel */}
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 space-y-4">
          <div className="flex justify-between items-start">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-background shadow-lg shadow-accent/20`}>
              <service.icon size={24} />
            </div>
            <span className="text-2xl font-serif italic text-accent opacity-20 group-hover:opacity-40 transition-opacity">
              {service.number}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-xl font-bold text-foreground">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm font-medium">
              {service.description}
            </p>
          </div>

        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 circle-pattern opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-icon border border-accent/20 mb-6"
          >
            <span className="text-[10px] sm:text-xs font-bold text-accent tracking-[0.3em] uppercase">.02 Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl font-extrabold text-foreground mb-6"
          >
            Services for <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Business Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-medium"
          >
            We help small businesses in Juba increase their online presence and marketability with proven digital strategies.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
