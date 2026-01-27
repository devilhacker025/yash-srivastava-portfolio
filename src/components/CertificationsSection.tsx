import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Trophy, ExternalLink, X } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  type: 'hackathon' | 'certification';
  linkedinUrl: string;
  // Add imageUrl when you have certificate images
  // imageUrl: string;
}

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Replace YOUR_LINKEDIN_PROFILE_URL with your actual LinkedIn profile URL
  const linkedinBaseUrl = "https://linkedin.com/in/YOUR_LINKEDIN_PROFILE_URL/details/certifications/";

  const hackathons: Certificate[] = [
    { 
      id: 1, 
      name: "Smart India Hackathon 2024", 
      issuer: "Government of India",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 2, 
      name: "HackWithIndia 2024", 
      issuer: "HackWithIndia",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 3, 
      name: "Code For Good Hackathon", 
      issuer: "JP Morgan",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 4, 
      name: "Tech Innovation Challenge", 
      issuer: "Tech Community",
      type: 'hackathon',
      linkedinUrl: linkedinBaseUrl
    },
  ];

  const certifications: Certificate[] = [
    { 
      id: 5, 
      name: "AWS Cloud Practitioner", 
      issuer: "Amazon Web Services",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 6, 
      name: "Accenture Developer Program", 
      issuer: "Accenture",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 7, 
      name: "Tata Digital Skills", 
      issuer: "Tata Group",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 8, 
      name: "Responsive Web Design", 
      issuer: "FreeCodeCamp",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 9, 
      name: "JavaScript Algorithms", 
      issuer: "FreeCodeCamp",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl
    },
    { 
      id: 10, 
      name: "Frontend Development", 
      issuer: "Meta",
      type: 'certification',
      linkedinUrl: linkedinBaseUrl
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const handleCertificateClick = (cert: Certificate) => {
    // Open LinkedIn in new tab
    window.open(cert.linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const CertificateCard = ({ cert, index }: { cert: Certificate; index: number }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: cert.type === 'hackathon' 
          ? '0 20px 40px -15px hsla(var(--secondary), 0.3)' 
          : '0 20px 40px -15px hsla(var(--primary), 0.3)'
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => handleCertificateClick(cert)}
      className="glass-card-hover p-5 cursor-pointer group relative overflow-hidden"
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
            <Trophy className="w-6 h-6" />
          ) : (
            <Award className="w-6 h-6" />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {cert.name}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
        </div>

        {/* LinkedIn Link Icon */}
        <div className={`p-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
          cert.type === 'hackathon' 
            ? 'bg-secondary/20 text-secondary' 
            : 'bg-primary/20 text-primary'
        }`}>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
        cert.type === 'hackathon' 
          ? 'bg-gradient-to-r from-secondary to-orange-400' 
          : 'bg-gradient-to-r from-primary to-cyan-400'
      }`} />
    </motion.div>
  );

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Achievements & Credentials
            </span>
            <h2 className="section-heading">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Click on any certificate to view it on my LinkedIn profile
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hackathons Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-secondary to-orange-400">
                  <Trophy className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Hackathons</h3>
                  <p className="text-sm text-muted-foreground">Competition achievements</p>
                </div>
              </div>

              <motion.div 
                variants={containerVariants}
                className="grid gap-4"
              >
                {hackathons.map((cert, index) => (
                  <CertificateCard key={cert.id} cert={cert} index={index} />
                ))}
              </motion.div>
            </motion.div>

            {/* Certifications Column */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-cyan-400">
                  <Award className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Licenses & Certifications</h3>
                  <p className="text-sm text-muted-foreground">Professional credentials</p>
                </div>
              </div>

              <motion.div 
                variants={containerVariants}
                className="grid gap-4"
              >
                {certifications.map((cert, index) => (
                  <CertificateCard key={cert.id} cert={cert} index={index} />
                ))}
              </motion.div>
            </motion.div>
          </div>

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
    </section>
  );
};

export default CertificationsSection;
