import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Server,
  Terminal,
  Layout,
  Cpu,
} from "lucide-react";
import { useRef } from "react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 95 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "JWT Authentication", level: 75 },
        { name: "Middleware", level: 70 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Mongoose ODM", level: 80 },
        { name: "Database Design", level: 70 },
        { name: "CRUD Operations", level: 85 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Layout,
      title: "State Management",
      skills: [
        { name: "Redux", level: 75 },
        { name: "Zustand", level: 80 },
        { name: "Context API", level: 70 },
        { name: "State Patterns", level: 75 },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: GitBranch,
      title: "Tools & Version Control",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Chrome DevTools", level: 85 },
        { name: "NPM/Yarn", level: 90 },
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Cpu,
      title: "Additional Skills",
      skills: [
        { name: "Problem Solving", level: 85 },
        { name: "API Integration", level: 80 },
        { name: "Debugging", level: 85 },
        { name: "Performance Optimization", level: 75 },
        { name: "Cross-browser Compatibility", level: 90 },
      ],
      color: "from-gray-600 to-gray-800",
    },
  ];

  // New animations only
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const progressVariants = (level) => ({
    hidden: {
      width: 0,
      opacity: 0.8,
    },
    visible: {
      width: `${level}%`,
      opacity: 1,
      transition: {
        width: {
          duration: 1.5,
          ease: [0.83, 0, 0.17, 1],
          delay: 0.3,
        },
        opacity: {
          duration: 0.5,
        },
      },
    },
  });

  const iconVariants = {
    hidden: {
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // New animation for skill items
  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-dark-light/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to build exceptional web applications
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-dark p-6 rounded-xl shadow-lg card-hover"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
            >
              <motion.div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  scale: 1.1,
                  transition: {
                    rotate: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-between"
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {skill.name}
                    </span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        variants={progressVariants(skill.level)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                    <motion.span
                      className="text-xs text-gray-500 w-8 text-right"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
