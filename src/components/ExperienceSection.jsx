import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrain } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Student Trainee",
    company: "CTTC Bhubaneswar",
    period: "Jun 2024 – Jul 2024",
    icon: <FaBrain />,
    description:
      "Worked on Machine Learning, Deep Learning and Computer Vision concepts. Built a Face Detection model using Python, OpenCV, TensorFlow and Keras to detect human faces from images and webcam input.",
    skills: ["Python", "OpenCV", "TensorFlow", "Keras", "Computer Vision"],
  },
  {
    id: 2,
    role: "Student Trainee",
    company: "Code Tantra – NIST University",
    period: "May 2024 – Jun 2024",
    icon: <FaLaptopCode />,
    description:
      "Strengthened programming fundamentals through hands-on coding exercises. Practiced C programming concepts including loops, arrays and functions to improve problem solving and logical thinking.",
    skills: ["C Programming", "Problem Solving", "Algorithms"],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-gradient-to-br from-slate-950 via-black to-slate-950"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-emerald-400 mb-3">
            Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Practical exposure through training programs and hands-on
            development experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-emerald-400/30 pl-10 space-y-14">

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >

              {/* Timeline Icon */}
              <div className="absolute -left-[52px] top-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-black shadow-lg">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-lg p-7 rounded-xl border border-white/10 hover:border-emerald-400/40 transition shadow-xl">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>

                  <span className="text-sm text-emerald-400">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-2">
                  {exp.company}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;