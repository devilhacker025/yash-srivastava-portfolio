import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  type: 'mini' | 'major';
  problem?: string;
  solution?: string;
  impact?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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

  const miniProjects: Project[] = [
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location-based forecasts and beautiful UI",
      techStack: ["React", "API Integration", "CSS3"],
      type: 'mini',
      githubUrl: "#",
    },
    {
      title: "Task Manager",
      description: "Productivity app with drag-and-drop functionality and local storage",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      type: 'mini',
      githubUrl: "#",
    },
    {
      title: "Portfolio Template",
      description: "Responsive portfolio template with modern animations",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      type: 'mini',
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz app with score tracking and timer",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      type: 'mini',
      githubUrl: "#",
    },
  ];

  const majorProjects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin panel",
      techStack: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
      type: 'major',
      problem: "Small businesses struggle to establish online presence with limited technical resources.",
      solution: "Built a comprehensive e-commerce platform with intuitive admin dashboard for easy product management, secure payment integration, and responsive storefront.",
      impact: "Enabled 3 local businesses to go online during the hackathon, learning full-stack integration and database management.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Student Resource Hub",
      description: "Centralized platform for students to access and share study materials",
      techStack: ["React", "Python", "Django REST", "AWS S3"],
      type: 'major',
      problem: "Students often struggle to find quality study resources scattered across multiple platforms.",
      solution: "Created a unified platform where students can upload, organize, and discover study materials with smart categorization and search functionality.",
      impact: "Served 200+ students in pilot testing, improving resource accessibility and fostering collaborative learning.",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              A showcase of my hackathon builds and personal projects
            </p>
          </motion.div>

          {/* Major Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Major Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {majorProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="glass-card-hover overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProject === project.title ? 'auto' : 0,
                      opacity: expandedProject === project.title ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 space-y-3 border-t border-border pt-4">
                      {project.problem && (
                        <div>
                          <span className="text-sm font-semibold text-secondary">Problem:</span>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                      )}
                      {project.solution && (
                        <div>
                          <span className="text-sm font-semibold text-primary">Solution:</span>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      )}
                      {project.impact && (
                        <div>
                          <span className="text-sm font-semibold text-green-400">Impact:</span>
                          <p className="text-sm text-muted-foreground">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpand(project.title)}
                    className="w-full p-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border-t border-border"
                  >
                    {expandedProject === project.title ? (
                      <>Show Less <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>View Details <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mini Projects */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-secondary to-orange-400">
                <Layers className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Mini Projects</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {miniProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="glass-card-hover p-5 group"
                >
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
