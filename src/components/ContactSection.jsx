import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "deepakkumartripathy1008@",
        "template_i2r72ej",
        formRef.current,
        "79HVhhY6ROTE5Qwok"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_100%)]"
    >
      <motion.div
        className="max-w-6xl mx-auto space-y-12 sm:space-y-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Card */}
          <motion.div
            variants={fadeUp}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/5 space-y-6"
          >
            <div className="flex items-center gap-3 text-white font-semibold">
              <Mail className="text-emerald-400" size={20} />
              <span>Let's Connect</span>
            </div>

            <p className="text-gray-400 text-sm sm:text-base">
              I'm always open to discussing new opportunities or interesting projects.
            </p>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex gap-3 text-gray-300">
                <Mail className="text-emerald-400" size={18} />
                <span className="break-all">
                  deepakkumartripathy1008@gmail.com
                </span>
              </div>

              <div className="flex gap-3 text-gray-300">
                <Phone className="text-emerald-400" size={18} />
                <span>+91 9692413929</span>
              </div>

              <div className="flex gap-3 text-gray-300">
                <MapPin className="text-emerald-400" size={18} />
                <span>Berhampur, Odisha, India</span>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start gap-6 pt-4">
              <Github className="text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Linkedin className="text-gray-400 hover:text-emerald-400 cursor-pointer" />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={fadeUp}
            className="bg-black/40 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/5"
          >
            <h3 className="text-emerald-400 font-semibold mb-5">
              Send Message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-gray-300"
              />

              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-gray-300"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-gray-300 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-medium"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-emerald-400 text-sm text-center pt-2">
                  Message sent successfully
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;