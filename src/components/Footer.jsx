import { motion } from "framer-motion";
import { Heart, Coffee, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <motion.footer
      className="bg-dark text-white pt-12 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-primary inline-block mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Aqib Ali<span className="text-secondary">.</span>
          </motion.a>

          {/* Tagline */}
          <motion.p
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Frontend React Developer specialized in building responsive,
            scalable web applications. Passionate about creating digital
            experiences that make a difference.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8"
            variants={containerVariants}
          >
            <motion.a
              href="mailto:aqibalikalwar1@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-4 h-4" />
              </motion.div>
              aqibalikalwar1@gmail.com
            </motion.a>
            <motion.a
              href="tel:+923103001810"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              +92-310-3001810
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-gray-800 pt-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                © {currentYear} Aqib Ali Kalwar. All rights reserved.
              </motion.p>

              <motion.div
                className="flex items-center gap-2 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Made with
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </motion.div>
                and
                <Coffee className="w-4 h-4 text-yellow-500" />
              </motion.div>

              {/* Quick Links */}
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="#home"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#projects"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                >
                  Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                >
                  Contact
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
