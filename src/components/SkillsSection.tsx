import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Wrench, Layers } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Python", level: 75 },
      { name: "Django", level: 60 },
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "AI Tools", "Postman"],
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Technical Expertise
            </span>
            <h2 className="section-heading">
              My <span className="gradient-text">Skills</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold">Frontend Development</h4>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold">Backend Development</h4>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-secondary to-orange-400"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold">Tools & Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
