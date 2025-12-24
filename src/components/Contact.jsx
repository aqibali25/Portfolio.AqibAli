import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Linkedin,
  Github,
  FileText,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      detail: "Ghotki, Sindh, Pakistan",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+92-310-3001810",
      link: "tel:+923103001810",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "aqibalikalwar1@gmail.com",
      link: "mailto:aqibalikalwar1@gmail.com",
    },
    {
      icon: FileText,
      title: "Resume",
      detail: "Download PDF",
      link: "/Aqib_Ali_Resume.pdf",
      download: "Aqib_Ali_Resume.pdf",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      detail: "linkedin.com/in/aqibali",
      link: "https://www.linkedin.com/in/aqibali-frontend-react-developer-mern/",
    },
    {
      icon: Github,
      title: "GitHub",
      detail: "github.com/aqibali25",
      link: "https://github.com/aqibali25",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Looking for a React developer? Let's work
            together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === "Resume" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                download={info.download}
                className="flex items-start gap-4 sm:p-6 px-2 py-2 bg-white dark:bg-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow card-hover"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="p-3 bg-primary/10 text-primary rounded-lg"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <info.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {info.detail}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              className="p-6 bg-white dark:bg-dark rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-light transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="p-2 bg-primary/10 rounded-lg"
                      whileHover={{ rotate: 10 }}
                    >
                      <social.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <div className="font-medium">{social.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {social.detail}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={formItemVariants}>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="input-field"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn-primary flex items-center gap-2 w-full md:w-auto justify-center"
                disabled={isSubmitted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Thank you! Your message has been sent. I'll get back to you
                    within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Note */}
            <motion.div
              className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Note:</strong> I'm available for freelance projects,
                full-time positions, and collaboration opportunities. Let's
                discuss how I can help bring your ideas to life!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Add AnimatePresence import at the top
import { AnimatePresence } from "framer-motion";

export default Contact;
