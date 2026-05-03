import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";

/* ------------------ DATA ------------------ */

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Creating modern, responsive, and high-performance user interfaces.",
    items: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Databases",
    description:
      "Building scalable backend systems and managing data efficiently.",
    items: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Developing intelligent systems using AI, LLMs, and computer vision.",
    items: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Computer Vision",
      "Generative AI",
      "LLMs",
    ],
  },
  {
    title: "Programming & Core Concepts",
    description:
      "Strong foundation in programming and problem-solving.",
    items: ["JavaScript", "Python", "Java", "Data Structures", "Algorithms"],
  },
  {
    title: "Tools & Platforms",
    description:
      "Development tools and platforms for efficient workflows.",
    items: ["GitHub", "Microsoft Azure", "VS Code", "Excel"],
  },
];

const icons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiOpencv />, name: "OpenCV" },
  { icon: <FaGitAlt />, name: "Git" },
];

const loopIcons = [...icons, ...icons];

/* ------------------ ANIMATION ------------------ */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------ COMPONENTS ------------------ */

const SkillCard = ({ title, items, description }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 180, damping: 20 }}
    className="group h-full"
  >
    <div className="relative h-full min-h-[200px] bg-white/5 backdrop-blur-lg p-5 sm:p-7 rounded-xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl hover:shadow-emerald-400/10 flex flex-col justify-between">
      
      {/* subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl bg-gradient-to-br from-emerald-400/5 to-transparent" />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Top content */}
        <div className="space-y-3">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Skills pinned at bottom */}
        <div className="flex flex-wrap gap-2 mt-6">
          {items.map((item) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.05 }}
              className="px-2.5 py-1 text-[10px] sm:text-xs rounded-md bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ------------------ INFINITE STRIP ------------------ */

const InfiniteSkillStrip = () => (
  <div className="relative overflow-hidden py-6 sm:py-10">
    {/* fade edges */}
    <div className="absolute left-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
    <div className="absolute right-0 top-0 w-24 sm:w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

    <motion.div
      className="flex gap-10 sm:gap-16 w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 22,
        ease: "linear",
      }}
    >
      {loopIcons.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 sm:gap-3 min-w-[70px] sm:min-w-[90px]"
        >
          <div className="text-2xl sm:text-4xl text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
            {item.icon}
          </div>
          <span className="text-[10px] sm:text-xs text-gray-400">
            {item.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

/* ------------------ MAIN ------------------ */

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.12),_transparent_50%)]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto space-y-16 sm:space-y-24"
      >
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* TEXT */}
          <motion.div variants={fadeUp} className="space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 leading-snug">
              Crafting scalable systems with modern technologies
            </h2>

            <p className="text-sm sm:text-base text-gray-400">
              A focused stack across frontend, backend, and AI, used to build
              performant and production-ready applications.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <span>Web Development</span>
              <span>•</span>
              <span>AI Integration</span>
              <span>•</span>
              <span>System Design</span>
            </div>
          </motion.div>

          {/* STRIP */}
          <motion.div variants={fadeUp}>
            <InfiniteSkillStrip />
          </motion.div>
        </div>

        {/* SKILL CARDS */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8"
        >
          {skillGroups.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;