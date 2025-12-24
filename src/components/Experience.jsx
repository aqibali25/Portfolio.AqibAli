import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Code,
  Laptop,
  Rocket,
  Users,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Code,
      title: "Frontend React Developer",
      company: "Self-Employed / Freelance",
      period: "2023 - Present",
      description:
        "Building responsive web applications using React, JavaScript, Tailwind CSS. Developing full-stack projects with Node.js, Express, and MongoDB. Working on 10+ projects including Campus Management System, E-commerce platforms, and various web applications.",
      type: "work",
      skills: [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      icon: Laptop,
      title: "Web Development Training",
      company: "Sukkur IBA University",
      period: "2023",
      description:
        "Completed comprehensive web development training covering HTML5, CSS3, JavaScript, React, Node.js, and database management. Built multiple projects during the training program.",
      type: "education",
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Science in Computer Science",
      company: "Shah Abdul Latif University, Khairpur",
      period: "2022 – 2025",
      description:
        "Currently pursuing BSCS with GPA: 3.2/4.0. Final Year Project: Campus Management System covering multiple modules with role-based access.",
      type: "education",
    },
    {
      icon: Award,
      title: "Certifications",
      company: "Various Platforms",
      period: "2023 - 2024",
      description:
        "Web Development (Sukkur IBA), Advanced HTML (Udemy), JavaScript ES6+ (Udemy), Git & GitHub (Udemy). Continuously learning and upgrading skills.",
      type: "certification",
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const itemVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-dark-light/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle mx-auto">
            My journey in web development and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:ml-auto md:w-1/2 md:pl-12"
                  : "md:w-1/2 md:pr-12 md:text-right"
              }`}
              variants={itemVariants(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute top-6 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-dark ${
                  index % 2 === 0
                    ? "left-[-6px] md:left-[-11px]"
                    : "left-[-6px] md:right-[-11px]"
                }`}
                variants={dotVariants}
                whileHover={{ scale: 1.2 }}
              />

              <motion.div
                className={`bg-white dark:bg-dark p-6 rounded-xl shadow-lg ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg ${
                      exp.type === "work"
                        ? "bg-blue-100 dark:bg-blue-900/30"
                        : exp.type === "education"
                        ? "bg-green-100 dark:bg-green-900/30"
                        : "bg-purple-100 dark:bg-purple-900/30"
                    }`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <exp.icon
                      className={`w-5 h-5 ${
                        exp.type === "work"
                          ? "text-blue-600 dark:text-blue-400"
                          : exp.type === "education"
                          ? "text-green-600 dark:text-green-400"
                          : "text-purple-600 dark:text-purple-400"
                      }`}
                    />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <motion.div
                        className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </motion.div>
                    </div>

                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>

                    {/* Skills for work experience */}
                    {exp.skills && (
                      <motion.div
                        className="mt-4 flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 dark:bg-dark-light text-xs rounded"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 + 0.5 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}

                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span
                        className={`inline-block px-3 py-1 text-sm rounded-full ${
                          exp.type === "work"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : exp.type === "education"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                        }`}
                      >
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Rocket,
              title: "Quick Learner",
              description: "Adapt quickly to new technologies and frameworks",
            },
            {
              icon: Code,
              title: "Problem Solver",
              description:
                "Strong analytical skills for debugging and optimization",
            },
            {
              icon: Users,
              title: "Team Player",
              description:
                "Experience collaborating on projects using Git/GitHub",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-dark p-6 rounded-xl text-center"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="inline-flex p-3 bg-primary/10 rounded-full mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Add container variants at the top of the component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default Experience;
