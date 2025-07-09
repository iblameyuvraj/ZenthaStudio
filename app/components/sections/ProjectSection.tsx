import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Joulree",
    description: "Jewelry e-commerce platform with a stunning UI and seamless shopping experience.",
    image: "/tamplate/joulree.png",
    url: "https://joulree.in",
    tags: ["E-commerce", "React", "Next.js"],
  },
  {
    id: 2,
    title: "Rishu Landing Page",
    description: "Client work: a modern landing page for Rishu.",
    image: "/tamplate/rishu.png",
    url: "https://therishy.netlify.app/",
    tags: ["Landing Page", "Client", "Next.js"],
  },
  {
    id: 3,
    title: "Fluffwalks",
    description: "A pet walker hire app company website.",
    image: "/tamplate/fluffwalks.png",
    url: "https://fluffwalks.in",
    tags: ["Pets", "Service", "React"],
  },
  {
    id: 4,
    title: "Web Gallery",
    description: "Infinite scrolling gallery and some photos about me.",
    image: "/tamplate/webgallery.png",
    url: "https://web-gallery2.vercel.app/",
    tags: ["Gallery", "Photos", "React"],
  },
  {
    id: 5,
    title: "Nexus Esports",
    description: "An esports website for players and teams to connect and compete.",
    image: "/tamplate/nexus.png",
    url: "https://nexusg.netlify.app/",
    tags: ["Esports", "Gaming", "React"],
  },
  {
    id: 6,
    title: "Pear2Pear",
    description: "P2P file transferring web app to transfer files with 0 backend.",
    image: "/tamplate/p2p.png",
    url: "https://pear2pear.netlify.app/",
    tags: ["P2P", "WebRTC", "Files"],
  },
  {
    id: 7,
    title: "Zee Rodium",
    description: "Electroplating company website for Zee Rodium.",
    image: "/tamplate/zeerodium.png",
    url: "https://zeerodium.netlify.app/",
    tags: ["Business", "Electroplating", "Next.js"],
  },
  {
    id: 8,
    title: "Zentha AI",
    description: "AI for mental health - a modern, supportive web app.",
    image: "/tamplate/zentha.png",
    url: "https://zentha.netlify.app/",
    tags: ["AI", "Mental Health", "Next.js"],
  },
  {
    id: 9,
    title: "Magnolia",
    description: "A cafe website in the middle of nature!",
    image: "/tamplate/magnolia.png",
    url: "https://themagnollia.netlify.app/",
    tags: ["Cafe", "Website", "Nature"],
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
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
            A collection of my favorite work, with live demos and templates
          </p>
        </motion.div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl cursor-pointer border border-white/10 shadow-xl backdrop-blur-lg bg-white/5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: 'easeOut' }}
              style={{ minHeight: 0, height: 'auto' }}
            >
              <a href="" className="block w-full aspect-video bg-black/80 flex items-center justify-center relative">
                <img
                  src={project.image}
                  alt={project.title + ' Template Preview'}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 border-none shadow-none"
              >
                <h3 className="text-white text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 max-w-xs mx-auto">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs font-medium border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 justify-center">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <button
                      className="flex items-center gap-2 px-5 py-2 border border-white text-white font-medium rounded-full bg-black/80 hover:bg-white/10 transition-colors"
                    >
                      View Project <FiExternalLink />
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
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
            More projects coming soon... 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
