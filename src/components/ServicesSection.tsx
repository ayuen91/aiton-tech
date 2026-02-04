import { Code, Palette, Rocket } from 'lucide-react';

const services = [
  {
    number: '.01',
    title: 'Development',
    description: 'Building robust, scalable web applications using modern technologies.',
    icon: Code,
  },
  {
    number: '.02',
    title: 'Design',
    description: 'Creating beautiful, user-centered interfaces that deliver results.',
    icon: Palette,
  },
  {
    number: '.03',
    title: 'Strategy',
    description: 'Developing digital strategies that drive growth and success.',
    icon: Rocket,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute inset-0 circle-pattern opacity-30" />

      <div className="relative z-10 container mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-up">
          <span className="section-number block mb-2 sm:mb-4 text-xs sm:text-sm">.02</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-8 group hover:scale-[1.02] transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-8 sm:w-14 h-8 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-4 sm:w-7 h-4 sm:h-7 text-primary" />
              </div>

              {/* Number */}
              <span className="section-number text-[10px] sm:text-sm">{service.number}</span>

              {/* Title */}
              <h3 className="font-display text-xs sm:text-xl font-bold text-foreground mt-1 sm:mt-2 mb-1 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed hidden sm:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
