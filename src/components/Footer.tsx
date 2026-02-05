import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/ayuen91' },
    { icon: Twitter, label: 'X', href: 'https://twitter.com/realayuen' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/ko11onel/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ko11onel/' },
  ];

  const contactInfo = [
    { label: 'WhatsApp', value: '+211 928 400 317', href: 'https://wa.me/211928400317' },
    { label: 'Email', value: 'ayuenito@gmail.com', href: 'mailto:ayuenito@gmail.com' }
  ];

  return (
    <footer id="contact" className="relative py-12 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 circle-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-3 sm:px-6">
        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="glass-heavy rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 lg:p-20 max-w-5xl mx-auto text-center mb-8 sm:mb-16 shadow-2xl border border-white/10"
        >
          <motion.span variants={itemVariants} className="section-number block mb-4 sm:mb-6 text-xs sm:text-sm font-bold tracking-[0.3em] text-accent">.05 GET IN TOUCH</motion.span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 sm:mb-10">
            Let's Build the <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent italic font-serif">Future</span> Together
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10 sm:mb-16 max-w-2xl mx-auto">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-frosted p-6 rounded-2xl border border-white/5 group hover:border-accent/30 transition-all text-center"
              >
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{info.label}</p>
                <p className="text-foreground font-bold text-sm sm:text-lg group-hover:text-accent transition-colors">{info.value}</p>
              </motion.a>
            ))}
            <motion.div variants={itemVariants} className="pt-4">
              <Button
                size="lg"
                className="rounded-full px-10 py-8 gap-3 bg-foreground text-background hover:bg-foreground/90 font-extrabold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-foreground/20"
                onClick={() => window.location.href = 'https://wa.me/211928400317'}
              >
                Get In Touch
                <ArrowRight className="w-6 h-6 text-accent" />
              </Button>
            </motion.div>

        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-t border-white/5">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
              className="font-display text-4xl sm:text-6xl font-black text-foreground tracking-tighter cursor-pointer transition-colors"
            >
              AITON<span className="text-accent">TECH</span>
            </motion.div>

            {/* Social Links Icons Only */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="w-12 h-12 rounded-full glass-icon flex items-center justify-center transition-all shadow-xl"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5 text-accent" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">
              © {currentYear} AITON TECH. ALL RIGHTS RESERVED.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
