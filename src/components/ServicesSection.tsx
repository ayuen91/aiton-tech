import { Code, Palette, Rocket } from 'lucide-react';

const services = [
  {
    number: '.01',
    title: 'Development',
    description: 'Building robust, scalable web applications using modern technologies and best practices.',
    icon: Code,
  },
  {
    number: '.02',
    title: 'Design',
    description: 'Creating beautiful, user-centered interfaces that deliver exceptional digital experiences.',
    icon: Palette,
  },
  {
    number: '.03',
    title: 'Strategy',
    description: 'Developing comprehensive digital strategies that drive growth and achieve business goals.',
    icon: Rocket,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute inset-0 circle-pattern opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="section-number block mb-4">.02</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Number */}
              <span className="section-number">{service.number}</span>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
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
