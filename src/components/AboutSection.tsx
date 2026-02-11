import { motion, useMotionValue, animate, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LucideIcon, BadgeCheck, Brain, Code2, Cpu, GitBranch, Rocket, Server, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

const SkillBar = ({ skill, variants }: { skill: Skill; variants: Variants }) => {
  const [displayLevel, setDisplayLevel] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const animation = animate(count, skill.level, {
      duration: 2,
      delay: 0.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayLevel(Math.round(latest))
    });
    return animation.stop;
  }, [count, skill.level]);

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <skill.icon size={16} className="text-accent" />
          <span className="text-sm font-bold text-foreground/80">{skill.name}</span>
        </div>
        <span className="text-xs font-bold text-accent">{displayLevel}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
        <motion.div
          custom={skill.level}
          variants={variants}
          className="h-full bg-gradient-to-r from-accent to-primary relative"
        >
          {/* Shimmer Effect */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const mainSkills = [
    { name: 'Web Development', level: 95, icon: Code2 },
    { name: 'Digital Marketing & SEO', level: 88, icon: Rocket },
    { name: 'Business Solutions', level: 90, icon: Brain },
    { name: 'Project Management', level: 92, icon: GitBranch },
  ];

  const subSkills = [
    'React', 'TypeScript', 'Node.js', 'E-commerce', 'SEO', 'Digital Marketing', 'UI/UX Design', 'Mobile Development', 'Cloud Infrastructure', 'Business Growth', 'Strategy', 'Consulting'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, delay: 0.5 }
    })
  };

  return (
    <section id="about" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 circle-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left Column: Image & Leadership Visuals (2/5) */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={itemVariants} className="relative group">
                <div className="aspect-[4/5] relative">
                  {/* Decorative Outer Ring */}
                  <div className="absolute -inset-4 border border-accent/20 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                  <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 delay-75" />

                  {/* Main Portrait Container */}
                  <div className="absolute inset-0 glass-frosted rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <motion.img
                      src="/ayuen-mamer-agoot.webp"
                      alt="Ayuen Mamer Agoot - CEO of Aiton Tech"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Glassy internal overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full glass-icon flex items-center justify-center text-accent">
                          <Rocket size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-accent uppercase tracking-widest">Founder & CEO</p>
                          <h4 className="text-lg font-bold text-foreground">Aiton Tech</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-frosted p-5 rounded-2xl shadow-xl border border-white/20 z-20"
                >
                  <div className="text-center">
                    <span className="block text-3xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">TOP</span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Dev Talent</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Leadership stats/Quick info */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                <div className="glass-light p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="text-accent w-5 h-5" />
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Core Developers</p>
                </div>
                <div className="glass-light p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <BadgeCheck className="text-primary w-5 h-5" />
                    <span className="text-xl font-bold">10+</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Successful Projects</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="glass-light p-4 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="text-accent w-5 h-5" />
                  <span className="text-xl font-bold">5+</span>
                </div>
                <p className="text-xs text-muted-foreground">Happy Clients</p>
              </motion.div>
            </div>

            {/* Right Column: Narrative & Technical Expertise (3/5) */}
            <div className="lg:col-span-3 space-y-10">
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-icon border border-accent/20">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">.04 The Visionary</span>
                </motion.div>

                <div className="space-y-4">
                  <motion.h2 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1]">
                    Helping Small <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Businesses Grow</span>
                  </motion.h2>
                  <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    I am <span className="text-foreground font-bold">Ayuen Mamer Agoot</span>, the innovative CEO of <span className="text-accent font-bold">Aiton Tech</span>.
                    With a dedicated team, we specialize in helping small businesses in Juba, South Sudan and East Africa increase their online presence, improve marketability, and achieve sustainable growth through professional software development and digital marketing solutions.
                  </motion.p>
                </div>
              </div>

              {/* Technical Proficiency with Progress Bars */}
              <div className="space-y-8">
                <motion.h3 variants={itemVariants} className="font-display text-xl font-bold flex items-center gap-3">
                  <Cpu className="text-accent" />
                  Our Expertise
                </motion.h3>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  {mainSkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} variants={barVariants} />
                  ))}
                </div>
              </div>

              {/* Tag Cloud for Sub-Skills */}
              <div className="space-y-5">
                <motion.p variants={itemVariants} className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Services & Specializations</motion.p>
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                  {subSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-xl glass-light text-xs sm:text-sm font-medium text-foreground/70 border border-white/10 hover:border-accent/40 hover:text-accent transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* CEO Character Highlights */}
              <motion.div variants={itemVariants} className="pt-6 border-t border-white/5 grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass-frosted flex items-center justify-center text-accent">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Business Growth</h4>
                    <p className="text-sm text-muted-foreground">Helping SMEs establish and grow their digital presence.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass-frosted flex items-center justify-center text-primary">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Proven Results</h4>
                    <p className="text-sm text-muted-foreground">Delivering measurable success for our clients in South Sudan.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
