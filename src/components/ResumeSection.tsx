import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Image, Download } from 'lucide-react';

const ResumeSection = () => {
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

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Resume
            </span>
            <h2 className="section-heading">
              My <span className="gradient-text">Professional Resume</span>
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 md:p-12 max-w-3xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* View PDF */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex flex-col items-center gap-4 group"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    View Resume (PDF)
                  </h3>
                  <p className="text-sm text-muted-foreground">Open in new tab</p>
                </div>
              </a>

              {/* View Image */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex flex-col items-center gap-4 group"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-r from-secondary to-orange-400 group-hover:scale-110 transition-transform duration-300">
                  <Image className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                    View Resume (Image)
                  </h3>
                  <p className="text-sm text-muted-foreground">Quick preview</p>
                </div>
              </a>
            </div>

            {/* Download Button */}
            <motion.a
              href="#"
              download
              className="btn-primary inline-flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
