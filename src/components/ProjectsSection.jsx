import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.12),_transparent_150%)]"
    >
      {/* Neon glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.6 }}
          className="text-center space-y-3"
        >
          <h2 className="text-4xl font-bold text-emerald-400">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here are some of the projects I've worked on, ranging from web
            applications to full-stack solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-emerald-400/30 transition"
            >
              {project.featured && (
                <span className="absolute top-3 left-3 z-10 text-xs px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                  Featured
                </span>
              )}

              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4">
                  <a
                    href={project.live}
                    className="text-sm px-4 py-2 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 hover:bg-emerald-500/30 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.6 }}
          className="text-center pt-8"
        >
          <a
            href="https://github.com/cooldkt143"
            className="text-sm text-gray-400 hover:text-emerald-400 transition"
          >
            View All Projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;