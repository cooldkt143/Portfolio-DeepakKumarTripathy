import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

/* ------------------ DATA ------------------ */

const skills = {
  frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Python", "REST APIs"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"],
};

const proficiency = [
  { name: "HTML5", value: 95, icon: <FaHtml5 /> },
  { name: "CSS3", value: 90, icon: <FaCss3Alt /> },
  { name: "JavaScript", value: 88, icon: <FaJsSquare /> },
  { name: "React.js", value: 85, icon: <FaReact /> },
  { name: "Tailwind CSS", value: 92, icon: <SiTailwindcss /> },
  { name: "Git & GitHub", value: 80, icon: <FaGitAlt /> },
  { name: "Node.js", value: 75, icon: <FaNodeJs /> },
  { name: "Python", value: 70, icon: <FaPython /> },
];

/* ------------------ ANIMATIONS ------------------ */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------ COMPONENTS ------------------ */

const SkillCard = ({ title, icon, items }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -6 }}
    className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/5"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-black font-bold">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <motion.span
          key={item}
          whileHover={{ scale: 1.08 }}
          className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 cursor-default"
        >
          {item}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const ProgressBar = ({ name, value, icon, isInView }) => (
  <motion.div variants={fadeUp} className="space-y-2">
    <div className="flex items-center justify-between text-lg text-gray-300">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400 text-xl">{icon}</span>
        <span>{name}</span>
      </div>
      <span>{value}%</span>
    </div>

    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${value}%` : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
      />
    </div>
  </motion.div>
);

/* ------------------ MAIN SECTION ------------------ */

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-120px",
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 px-6 bg-[linear-gradient(to_top_left,_rgba(148,163,184,0.12),_transparent_150%)]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-emerald-400">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I use to build scalable, clean, and production-ready
            applications
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <SkillCard title="Frontend" icon="F" items={skills.frontend} />
          <SkillCard title="Backend" icon="B" items={skills.backend} />
          <SkillCard title="Tools & Workflow" icon="T" items={skills.tools} />
        </motion.div>

        {/* Proficiency */}
        <motion.div
          variants={fadeUp}
          className="bg-black/40 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/5"
        >
          <h3 className="text-center text-emerald-400 font-semibold mb-10 text-lg">
            Proficiency Overview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proficiency.map((skill) => (
              <ProgressBar
                key={skill.name}
                name={skill.name}
                value={skill.value}
                icon={skill.icon}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
