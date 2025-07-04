import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Pappadam Analytics Dashboard",
      description: "A comprehensive analytics platform for tracking pappadam inflation patterns across various markets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      url: "https://example.com/pappadam-dashboard",
    },
    {
      id: 2,
      title: "Deflation Simulator",
      description: "An interactive web application that simulates the deflation process of various objects in real-time.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      url: "https://example.com/deflation-simulator",
    },
    {
      id: 3,
      title: "Minimalist Portfolio Engine",
      description: "A lightweight, customizable portfolio framework designed for creative professionals and developers.",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop",
      url: "https://example.com/minimalist-portfolio",
    },
    {
      id: 4,
      title: "Ambient Sound Generator",
      description: "A procedural ambient sound generator that creates unique soundscapes based on environmental data.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      url: "https://example.com/ambient-sound-generator",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-white/60 text-sm md:text-base tracking-wider">
            A collection of deflated endeavors and inflated ambitions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl cursor-pointer border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>

                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 px-6 py-2 border border-white text-white font-medium rounded overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Project <FiExternalLink />
                    </span>
                    {/* Background animation */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white z-0 origin-left"
                      style={{ transitionProperty: "width" }}
                    />
                    <span className="absolute inset-0 z-0 bg-white group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 z-10 text-black group-hover:text-black transition-colors duration-300"></span>
                  </motion.button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-white/40 text-sm tracking-widest">
            More projects deflating soon...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
