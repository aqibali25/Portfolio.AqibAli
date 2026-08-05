import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Database,
  Users,
  Book,
  Building2,
  ShoppingCart,
  Car,
  Calendar,
  MessageSquare,
  Coffee,
  Gamepad2,
  Code,
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Aftermad - Novel & Webtoon Platform",
      description:
        "Client project for a paid novel and webtoon platform with coin-based chapter unlocks, payment integration, and role-based dashboards for writers, admins, and super admins.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "PayPal",
        "Braintree",
        "Aiven",
        "Cloudflare",
      ],
      icon: Book,
      github: "#",
      live: "#",
      duration: "Client Project",
    },
    {
      title: "eCampus Portal",
      description:
        "University management portal with Admission, Attendance, Library, Examination, Hostel, HR, Finance, Purchase and Store, and Scheduling modules. Led frontend development with role-based dashboards, dynamic forms, Zustand state management, and REST API integration.",
      tags: [
        "React",
        "JavaScript",
        "Tailwind",
        "Zustand",
        "REST APIs",
        "Role-Based UI",
      ],
      icon: Building2,
      github: "https://github.com/aqibali25/SALU-PORTAL-FYP",
      live: "https://github.com/aqibali25/SALU-PORTAL-FYP",
      duration: "Final Year Project",
    },
    {
      title: "Al Jannat Educational Foundation",
      description:
        "Responsive educational foundation website built with React.js, JavaScript, and Bootstrap. Developed reusable UI components, responsive navigation, interactive sections, smooth layouts, and dynamic content integration.",
      tags: [
        "React",
        "JavaScript",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
      icon: Book,
      github: "https://github.com/aqibali25/Al-jannat-educational-foundation",
      live: "https://github.com/aqibali25/Al-jannat-educational-foundation",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive personal portfolio built with React.js, Tailwind CSS, Framer Motion, and GitHub Pages to present my skills, work experience, projects, resume, and contact details.",
      tags: ["React", "Tailwind", "Framer Motion", "Responsive UI", "GitHub Pages"],
      icon: Code,
      github: "https://github.com/aqibali25/Portfolio.AqibAli",
      live: "https://aqibali25.github.io/Portfolio.AqibAli/",
    },
  ];

  // New animations only
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -90,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Projects Portfolio</h2>
          <p className="section-subtitle mx-auto">
            Selected projects from my resume, including frontend, full-stack,
            dashboard, and client project experience
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`bg-white dark:bg-dark rounded-xl overflow-hidden shadow-lg card-hover flex justify-between flex-col ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-2 bg-primary/10 rounded-lg"
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{
                        rotate: 15,
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                        },
                      }}
                    >
                      <project.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.duration && (
                        <motion.span
                          className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.duration}
                        </motion.span>
                      )}
                    </div>
                  </div>
                  <motion.span
                    className="text-xs text-gray-500 dark:text-gray-400"
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                      color: hoveredProject === index ? "#3b82f6" : "",
                    }}
                  >
                    #{index + 1}
                  </motion.span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      variants={tagVariants}
                      whileHover="hover"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-sm"
                    variants={buttonVariants}
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.div>
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-primary py-2 px-4 text-sm"
                    variants={buttonVariants}
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                    {project.live === "#" ? "View Details" : "Live Demo"}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          {[
            { label: "Total Projects", value: "11+" },
            { label: "Frontend Projects", value: "8+" },
            { label: "Full Stack Projects", value: "3+" },
            { label: "Technologies Used", value: "8+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-dark p-4 rounded-xl text-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="text-2xl font-bold text-primary mb-1"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
