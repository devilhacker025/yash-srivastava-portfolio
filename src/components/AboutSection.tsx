import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Target, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const infoCards = [
    {
      icon: MapPin,
      label: "Location",
      value: "Prayagraj, Uttar Pradesh, India",
      gradient: "from-primary to-cyan-400",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BCA (2024–2027)",
      subValue: "United Institute of Management (FUGS)",
      gradient: "from-secondary to-orange-400",
    },
    {
      icon: Target,
      label: "Current Focus",
      value: "Frontend + Full-Stack Growth",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      icon: Sparkles,
      label: "Experience",
      value: "10+ Hackathons",
      subValue: "Real-world problem solving",
      gradient: "from-green-400 to-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="section-heading">
              Get to Know <span className="gradient-text">Who I Am</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              A passionate developer on a mission to create meaningful digital experiences
            </p>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 md:p-12 mb-12 max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              I'm <span className="text-foreground font-semibold">Yash Srivastava</span>, 
              a dedicated BCA student with a burning passion for frontend development. 
              My journey in tech has been fueled by curiosity and a drive to solve real-world problems 
              through elegant code. With hands-on experience in{' '}
              <span className="text-primary font-medium">React, JavaScript, Python, and Django</span>, 
              I've participated in over <span className="text-secondary font-medium">10 hackathons</span>, 
              each one teaching me invaluable lessons about teamwork, innovation, and rapid prototyping. 
              I believe in continuous learning and am always exploring new technologies to expand my skill set.
            </p>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.label}
                variants={itemVariants}
                custom={index}
                className="glass-card-hover p-6 text-center group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-6 h-6 text-background" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
                <p className="font-semibold text-foreground">{card.value}</p>
                {card.subValue && (
                  <p className="text-sm text-muted-foreground mt-1">{card.subValue}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
