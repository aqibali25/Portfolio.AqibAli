import { motion } from "framer-motion";
import {
  User,
  Target,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Profile from "../assets/Image1.jpeg";

const About = () => {
  const stats = [
    { icon: Target, label: "Projects Completed", value: "10+" },
    { icon: Award, label: "Years Experience", value: "1+" },
    { icon: Users, label: "Technologies", value: "10+" },
  ];

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "Ghotki, Sindh, Pakistan" },
    { icon: Phone, label: "Phone", value: "+92-310-3001810" },
    { icon: Mail, label: "Email", value: "aqibalikalwar1@gmail.com" },
    { icon: Calendar, label: "Availability", value: "Available for Work" },
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={Profile}
                  alt="Aqib Ali Kalwar"
                  className="w-full h-full object-cover aspect-square"
                  style={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/10 rounded-full z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
              />

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-dark p-4 rounded-xl shadow-xl z-20"
                variants={badgeVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="p-2 bg-primary/10 rounded-lg"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <User className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold">1+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Years Exp.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
          >
            <div>
              <motion.span
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                About Me
              </motion.span>

              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Frontend React Developer
                <span className="block text-primary">
                  Exploring in MERN Stack
                </span>
              </motion.h2>

              <motion.p
                className="text-gray-600 dark:text-gray-300 text-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I'm a passionate Frontend-focused Full Stack Developer with{" "}
                <strong>1+ year of experience</strong> building responsive,
                scalable web applications using{" "}
                <strong>
                  React, JavaScript (ES6+), Tailwind CSS, and Bootstrap
                </strong>
                .
              </motion.p>

              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Strong hands-on experience with{" "}
                <strong>
                  Node.js, Express.js, RESTful APIs, JWT authentication
                </strong>
                , and server-side logic. Proficient in{" "}
                <strong>MongoDB and MySQL</strong> for data modeling and CRUD
                operations. Experienced in API integration, state management
                using Zustand and Redux.
              </motion.p>
            </div>

            {/* Contact Info - CHANGED HERE */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
              variants={statsVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-dark-light rounded-lg"
                  variants={statItemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="https://aqibali25.github.io/Portfolio.AqibAli/Aqib_Ali_Resume.pdf"
                download="Aqib_Ali_Resume.pdf"
                target="_blank"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Preview */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend Development",
                description:
                  "Building responsive UIs with React, JavaScript, Tailwind CSS, and modern frameworks.",
                color: "bg-blue-500",
                skills: [
                  "React.js",
                  "JavaScript ES6+",
                  "HTML5/CSS3",
                  "Tailwind CSS",
                  "Bootstrap",
                ],
              },
              {
                title: "Backend & APIs",
                description:
                  "Developing RESTful APIs, server-side logic, and authentication with Node.js & Express.",
                color: "bg-green-500",
                skills: [
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "JWT Auth",
                  "Middleware",
                ],
              },
              {
                title: "Databases",
                description:
                  "Data modeling, CRUD operations, and database management with MongoDB & MySQL.",
                color: "bg-purple-500",
                skills: [
                  "MongoDB",
                  "MySQL",
                  "Mongoose",
                  "Database Design",
                  "CRUD Operations",
                ],
              },
              {
                title: "Tools & State Management",
                description:
                  "Version control, API testing, and efficient state management solutions.",
                color: "bg-orange-500",
                skills: [
                  "Git/GitHub",
                  "Postman",
                  "Redux",
                  "Zustand",
                  "VS Code",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover"
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-12 h-1 ${service.color} rounded-full mb-4`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-light text-xs rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
