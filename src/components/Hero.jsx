import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileDown } from "lucide-react";
import Profile from "../assets/Home.png";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/agibali25", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aqibali-frontend-react-developer-mern/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:aqibalikalwar1@gmail.com", label: "Email" },
  ];

  const typewriterStrings = [
    "Frontend Developer",
    "React Developer",
    "MERN Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "Full Stack Developer",
  ];

  // Slower, more elegant animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased from 0.2
        delayChildren: 0.5, // Increased from 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Increased from 20
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Increased from 0.5
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2, // Increased from 0.8
        type: "spring",
        stiffness: 80, // Reduced from 100 for smoother motion
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="section-padding pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen md:min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
          {/* Left Column - Text */}
          <motion.div
            className="flex-1 order-2 lg:order-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-primary">Aqib Ali Kalwar</span>
              <br />
              <span className="text-secondary h-24 md:h-28 lg:h-32 block">
                <TypewriterEffect
                  strings={typewriterStrings}
                  typingSpeed={100}
                  deletingSpeed={50}
                  delayBetween={1500}
                />
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Frontend-focused Full Stack Developer with{" "}
              <strong>1+ year of experience</strong> building responsive,
              scalable web applications using React, JavaScript, Tailwind CSS,
              and modern web technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Aqib_Ali_Resume.pdf"
                download="Aqib_Ali_Resume.pdf"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <FileDown className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-light hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.8 }} // Increased delay
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex-1 order-1 lg:order-2"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 mx-auto">
              {/* Gradient background - slower floating effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 12, // Much slower floating
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image Container */}
              <motion.div
                className="relative rounded-full border-[10px] border-white dark:border-dark-light shadow-2xl overflow-hidden w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
              >
                <motion.img
                  src={Profile}
                  alt="Aqib Ali Kalwar - Frontend React Developer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }} // Slower zoom
                />
              </motion.div>

              {/* Decorative Elements - slower animations */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 6, // Slower
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 8, // Slower
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
