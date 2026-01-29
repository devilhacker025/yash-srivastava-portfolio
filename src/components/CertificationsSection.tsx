import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Trophy, ExternalLink, X, ChevronRight } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  type: 'hackathon' | 'certification';
  linkedinUrl: string;
  description?: string;
}

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeTab, setActiveTab] = useState<'hackathon' | 'certification'>('hackathon');

  // Replace YOUR_LINKEDIN_PROFILE_URL with your actual LinkedIn profile URL
  const linkedinBaseUrl = "https://linkedin.com/in/YOUR_LINKEDIN_PROFILE_URL/details/certifications/";

  const hackathons: Certificate[] = [
    { 
      id: 1, 
      name: "Smart India Hackathon 2024", 
      issuer: "Government of India",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl,
      description: "Participated in India's largest hackathon organized by Government of India, solving real-world problems."
    },
    { 
      id: 2, 
      name: "HackWithIndia 2024", 
      issuer: "HackWithIndia",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl,
      description: "Competed in HackWithIndia showcasing innovative solutions and technical skills."
    },
    { 
      id: 3, 
      name: "Code For Good Hackathon", 
      issuer: "JP Morgan",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl,
      description: "Built solutions for non-profit organizations at JP Morgan's Code For Good event."
    },
    { 
      id: 4, 
      name: "Tech Innovation Challenge", 
      issuer: "Tech Community",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl,
      description: "Developed innovative tech solutions addressing community challenges."
    },
    { 
      id: 5, 
      name: "Hackathon X 2024", 
      issuer: "Tech Foundation",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl,
      description: "Collaborated with teams to build cutting-edge applications."
    },
  ];

  const certifications: Certificate[] = [
    { 
      id: 6, 
      name: "AWS Cloud Practitioner", 
      issuer: "Amazon Web Services",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl,
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology."
    },
    { 
      id: 7, 
      name: "Accenture Developer Program", 
      issuer: "Accenture",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl,
      description: "Completed Accenture's comprehensive developer training program."
    },
    { 
      id: 8, 
      name: "Tata Digital Skills", 
      issuer: "Tata Group",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl,
      description: "Acquired digital skills through Tata's training initiative."
    },
    { 
      id: 9, 
      name: "Responsive Web Design", 
      issuer: "FreeCodeCamp",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl,
      description: "Mastered responsive web design principles and CSS techniques."
    },
    { 
      id: 10, 
      name: "JavaScript Algorithms", 
      issuer: "FreeCodeCamp",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl,
      description: "Completed JavaScript algorithms and data structures certification."
    },
    { 
      id: 11, 
      name: "Frontend Development", 
      issuer: "Meta",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl,
      description: "Meta's professional frontend development certification program."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Infinite scroll animation component
  const InfiniteScroll = ({ items, direction = 'left' }: { items: Certificate[]; direction?: 'left' | 'right' }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div 
        className="overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          ref={scrollRef}
          className="flex gap-4"
          animate={{
            x: direction === 'left' ? [0, -33.33 * items.length * 280] : [-33.33 * items.length * 280, 0]
          }}
          transition={{
            x: {
              duration: items.length * 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {duplicatedItems.map((cert, index) => (
            <motion.div
              key={`${cert.id}-${index}`}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCert(cert)}
              className={`flex-shrink-0 w-[280px] glass-card-hover p-5 cursor-pointer group relative overflow-hidden ${
                isPaused ? '' : ''
              }`}
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                cert.type === 'hackathon' 
                  ? 'bg-gradient-to-br from-secondary to-orange-400' 
                  : 'bg-gradient-to-br from-primary to-cyan-400'
              }`} />
              
              <div className="flex items-start gap-4 relative z-10">
                {/* Icon */}
                <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                  cert.type === 'hackathon' 
                    ? 'bg-secondary/20 text-secondary group-hover:bg-secondary/30' 
                    : 'bg-primary/20 text-primary group-hover:bg-primary/30'
                }`}>
                  {cert.type === 'hackathon' ? (
                    <Trophy className="w-5 h-5" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </div>

              {/* Click indicator */}
              <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                <span>View Details</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                cert.type === 'hackathon' 
                  ? 'bg-gradient-to-r from-secondary to-orange-400' 
                  : 'bg-gradient-to-r from-primary to-cyan-400'
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Achievements & Credentials
            </span>
            <h2 className="section-heading">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Click on any certificate to view details and LinkedIn verification
            </p>
          </motion.div>

          {/* Hackathons Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-secondary to-orange-400">
                <Trophy className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Hackathons</h3>
                <p className="text-sm text-muted-foreground">Competition achievements</p>
              </div>
            </div>
            <InfiniteScroll items={hackathons} direction="left" />
          </motion.div>

          {/* Licenses & Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400">
                <Award className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Licenses & Certifications</h3>
                <p className="text-sm text-muted-foreground">Professional credentials</p>
              </div>
            </div>
            <InfiniteScroll items={certifications} direction="right" />
          </motion.div>

          {/* View All on LinkedIn */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href={linkedinBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted hover:bg-muted/80 text-foreground font-medium transition-all duration-300 hover:scale-105 group"
            >
              <span>View All on LinkedIn</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-card max-w-lg w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-xl ${
                  selectedCert.type === 'hackathon' 
                    ? 'bg-gradient-to-br from-secondary to-orange-400' 
                    : 'bg-gradient-to-br from-primary to-cyan-400'
                }`}>
                  {selectedCert.type === 'hackathon' ? (
                    <Trophy className="w-8 h-8 text-background" />
                  ) : (
                    <Award className="w-8 h-8 text-background" />
                  )}
                </div>
                <div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    selectedCert.type === 'hackathon' 
                      ? 'bg-secondary/20 text-secondary' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {selectedCert.type === 'hackathon' ? 'Hackathon' : 'Certification'}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{selectedCert.name}</h3>
                  <p className="text-muted-foreground">{selectedCert.issuer}</p>
                </div>
              </div>

              {/* Certificate Image Placeholder */}
              <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <Award className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Certificate Image</p>
                  <p className="text-xs">(Add your certificate images)</p>
                </div>
              </div>

              {/* Description */}
              {selectedCert.description && (
                <p className="text-muted-foreground mb-6">
                  {selectedCert.description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={selectedCert.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] ${
                    selectedCert.type === 'hackathon'
                      ? 'bg-gradient-to-r from-secondary to-orange-400 text-background'
                      : 'bg-gradient-to-r from-primary to-cyan-400 text-background'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View on LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
