import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import profileImg from "../assets/images/Profile.jpg";
import resume from "../resume/resume.pdf";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Web Developer";
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    const timer = setTimeout(() => {
      setText(fullText.slice(0, index + 1));
      if (index + 1 === fullText.length) {
        setFinished(true);
      } else {
        setIndex(index + 1);
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [index, finished]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* Neon Background Effects (same language as About) */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-emerald-500/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] bg-teal-400/20 rounded-full blur-[140px]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl pt-20 mb-20 sm:mt-0"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={item} className="mb-6 relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <img
            src={profileImg}
            alt="Deepak Kumar Tripathy"
            className="relative w-40 h-40 rounded-full object-cover border border-emerald-400/40"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
            className="text-4xl md:text-6xl font-bold
            bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(52,211,153,0.35)] pt-0 sm:pt-4
            mb-3"
        >
          Deepak Kumar Tripathy
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={item}
          className="text-xl md:text-2xl text-gray-300 h-8 mb-4"
        >
          {text}
          <span className="ml-1 border-r-2 border-gray-400 animate-blink" />
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-xl mb-8"
        >
          Passionate about creating beautiful, functional, and user-friendly web
          experiences that make a real impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-10 py-3 rounded-lg bg-emerald-500 text-black font-semibold
            border border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]
            hover:bg-transparent hover:text-emerald-400 transition-all duration-300"
          >
            View My Work
          </button>

          <a
            href={resume}
            target="_blank"
            className="px-10 py-3 rounded-lg text-emerald-400 font-semibold
            border border-emerald-400/40 hover:border-emerald-400
            hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item}
          className="flex gap-6 text-2xl text-gray-400 mb-10"
        >
          <a
            href="https://github.com/cooldkt143"
            target="_blank"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-kumar-tripathy-81446128b/"
            target="_blank"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          variants={item}
          onClick={() => scrollToSection("about")}
          className="text-emerald-400 text-3xl hover:text-emerald-600 transition-colors duration-300"
        >
          <BsArrowDown />
        </motion.button>
      </motion.div>

      {/* Cursor Blink */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;