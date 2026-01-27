import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code2, Wrench, Trophy } from 'lucide-react';

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

  const certifications = [
    { name: "Smart India Hackathon 2024", type: "Hackathon", icon: Trophy },
    { name: "AWS Cloud Practitioner", type: "Certification", icon: Award },
    { name: "Accenture Developer Program", type: "Program", icon: Award },
    { name: "Tata Digital Skills", type: "Certification", icon: Award },
    { name: "FreeCodeCamp Web Development", type: "Certification", icon: Award },
    { name: "HackWithIndia 2024", type: "Hackathon", icon: Trophy },
  ];

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
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              Skills & Achievements
            </span>
            <h2 className="section-heading">
              What I <span className="gradient-text-warm">Bring to the Table</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Certifications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-secondary to-orange-400">
                  <Trophy className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-2xl font-bold">Hackathons & Certifications</h3>
              </div>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    variants={itemVariants}
                    className="glass-card-hover p-5 flex items-center gap-4 group"
                  >
                    <div className={`p-2 rounded-lg ${cert.type === 'Hackathon' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'} group-hover:scale-110 transition-transform`}>
                      <cert.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.type}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.type === 'Hackathon' 
                        ? 'bg-secondary/10 text-secondary' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {cert.type === 'Hackathon' ? 'Participated' : 'Completed'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Technical Skills */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400">
                  <Code2 className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>

              <div className="space-y-8">
                {/* Frontend Skills */}
                <div className="glass-card p-6">
                  <h4 className="text-lg font-semibold mb-4 text-primary">Frontend Development</h4>
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
                </div>

                {/* Backend Skills */}
                <div className="glass-card p-6">
                  <h4 className="text-lg font-semibold mb-4 text-secondary">Backend Development</h4>
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
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-muted-foreground" />
                    <h4 className="text-lg font-semibold">Tools & Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
