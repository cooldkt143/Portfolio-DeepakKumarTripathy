import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6 sm:px-12 py-24"
    >
      {/* Background: Neon Grid + Soft Glow */}
      <div className="absolute inset-0">
        {/* Soft glow accents */}
        <div className="absolute -top-32 -left-1 w-[620px] h-[420px] bg-cyan-300/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1 w-[680px] h-[280px] bg-slate-1000 rounded-full blur-[140px]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative group mx-auto w-full max-w-sm sm:max-w-md md:max-w-none"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 blur-lg opacity-60 group-hover:opacity-90 transition-opacity"></div>
          <img
            src={aboutImage}
            alt="About Me"
            className="relative rounded-2xl w-full h-[420px] sm:h-[500px] md:h-[600px] object-cover border border-emerald-400/40"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-emerald-400">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
            I’m <span className="text-emerald-400 font-semibold">Deepak Kumar Tripathy</span>, 
            a Web Developer and AI enthusiast who enjoys building intelligent and practical digital solutions. 
            Currently pursuing my BTech in Computer Science at NIST University, I work at the intersection of 
            web development and artificial intelligence, creating applications that combine strong functionality 
            with thoughtful user experience.
          </p>

          <p className="text-sm sm:text-md md:text-lg text-gray-400 leading-relaxed mb-6">
            My experience includes developing AI-driven platforms, computer vision systems, 
            and full-stack web applications using technologies like React, Node.js, Python, and OpenCV. 
            I enjoy turning complex ideas into clean, interactive products, 
            from developer analytics platforms like Credex.io to AI-powered legal and academic tools.
          </p>

          <p className="text-sm sm:text-md md:text-lg text-gray-400 leading-relaxed mb-6">
            I’m particularly interested in Generative AI, machine learning, and intelligent software systems, 
            and I enjoy exploring new ideas through projects, hackathons, and hands-on development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1rxw3_4-Vf1BeRyUcCfklDhkrGZUdvobQ/view?usp=sharing"
              target="_blank"
              className="px-8 py-3 rounded-lg bg-emerald-500 text-black font-semibold 
              hover:bg-transparent hover:text-emerald-400 border border-emerald-400 
              shadow-[0_0_0px_rgba(52,211,153,0.6)] transition-all duration-300"
            >
              View Resume
            </a>

            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 rounded-lg text-emerald-400 border border-emerald-400/40 
              hover:border-emerald-400 hover:shadow-[0_0_0px_rgba(52,211,153,0.5)] transition-all duration-300"
            >
              See Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;