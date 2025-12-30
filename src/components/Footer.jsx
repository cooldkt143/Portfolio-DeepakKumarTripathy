import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[radial-gradient(circle_at_bottom,_rgba(148,163,184,0.12),_transparent_60%)] px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.h3
              variants={textVariant}
              custom={1}
              className="text-emerald-400 text-xl font-semibold"
            >
              DKT
            </motion.h3>

            <motion.p
              variants={textVariant}
              custom={2}
              className="text-gray-400 leading-relaxed max-w-sm"
            >
              Front-End Developer passionate about creating beautiful
              and functional web experiences.
            </motion.p>

            <motion.div
              variants={textVariant}
              custom={3}
              className="flex gap-5 pt-2"
            >
              <a 
                href="https://github.com/cooldkt143"
                className="text-gray-400 hover:text-emerald-400 transition">
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-kumar-tripathy-705812249/"
                className="text-gray-400 hover:text-emerald-400 transition">
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:deepakkumartripathy1008@gmail.com"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Middle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.h4
              variants={textVariant}
              custom={1}
              className="text-emerald-400 font-medium"
            >
              Quick Links
            </motion.h4>

            <ul className="space-y-2 text-gray-400">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    variants={textVariant}
                    custom={index + 2}
                  >
                    <a
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="hover:text-emerald-400 transition cursor-pointer inline-block"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.h4
              variants={textVariant}
              custom={1}
              className="text-gray-300 font-medium"
            >
              Get In Touch
            </motion.h4>

            <motion.p variants={textVariant} custom={2} className="text-gray-400">
              deepakkumartripathy1008@gmail.com
            </motion.p>
            <motion.p variants={textVariant} custom={3} className="text-gray-400">
              Berhampur, Odisha, India
            </motion.p>
            <motion.p variants={textVariant} custom={4} className="text-gray-400">
              Available for freelance work
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p
            variants={textVariant}
            custom={1}
            className="text-gray-400 text-sm"
          >
            © 2025 Deepak Kumar Tripathy
          </motion.p>

          <motion.button
            variants={textVariant}
            custom={2}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition text-sm"
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;