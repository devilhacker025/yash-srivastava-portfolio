import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Server, Database, Wrench, Sparkles, ChevronDown } from 'lucide-react';

interface SkillDetail {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  overallLevel: number;
  skills: SkillDetail[];
}

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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

  const fullStackCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5" />,
      overallLevel: 85,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "TypeScript", level: 70 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      overallLevel: 65,
      skills: [
        { name: "Python", level: 75 },
        { name: "Django", level: 60 },
        { name: "Node.js", level: 55 },
        { name: "REST APIs", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      overallLevel: 60,
      skills: [
        { name: "MySQL", level: 65 },
        { name: "MongoDB", level: 55 },
        { name: "PostgreSQL", level: 60 },
        { name: "Firebase", level: 58 },
      ],
    },
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Figma", "Postman", 
    "Chrome DevTools", "npm/yarn", "Vercel", "Netlify"
  ];

  const vibeCodeSkills = [
    { name: "Prompt Engineering", level: 85 },
    { name: "AI-Assisted Coding", level: 90 },
    { name: "ChatGPT/Claude", level: 88 },
    { name: "GitHub Copilot", level: 75 },
    { name: "Lovable/v0.dev", level: 80 },
  ];

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const SkillBar = ({ skill, delay }: { skill: SkillDetail; delay: number }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary/70"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

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

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Full Stack Development Card */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="glass-card p-6 h-full border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Full Stack Development</h3>
                    <p className="text-sm text-muted-foreground">Frontend • Backend • Database</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {fullStackCategories.map((category, catIndex) => (
                    <motion.div
                      key={category.title}
                      className="bg-muted/30 border border-border/30 rounded-xl p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                      whileHover={{ scale: 1.005 }}
                      onClick={() => toggleCategory(category.title)}
                    >
                      {/* Category Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h4 className="font-semibold text-foreground">{category.title}</h4>
                              <span className="text-sm font-medium text-primary">
                                {category.overallLevel}%
                              </span>
                            </div>
                            {/* Overall Progress Bar */}
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-2 w-full max-w-[200px]">
                              <motion.div
                                className="h-full rounded-full bg-primary/60"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${category.overallLevel}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: 0.3 + catIndex * 0.2, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-muted-foreground"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {expandedCategory === category.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-border/50">
                              <p className="text-sm text-muted-foreground mb-4">Detailed Skill Breakdown:</p>
                              {category.skills.map((skill, index) => (
                                <SkillBar 
                                  key={skill.name} 
                                  skill={skill} 
                                  delay={0.1 * index}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Tools & Vibe Coding */}
            <div className="space-y-6">
              {/* Tools Card */}
              <motion.div variants={itemVariants} className="glass-card p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-muted border border-border/50">
                    <Wrench className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Tools & Technologies</h3>
                    <p className="text-sm text-muted-foreground">Dev environment</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Vibe Coding / AI Skills Card */}
              <motion.div variants={itemVariants} className="glass-card p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Vibe Coding & AI</h3>
                    <p className="text-sm text-muted-foreground">Prompt engineering</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {vibeCodeSkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary/60"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
