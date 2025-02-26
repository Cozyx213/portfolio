"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  // Tech icons
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiFlask,
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  // Additional icons if needed
} from "react-icons/si";

// We can also import hosting icons if we wish.
import {
  SiHeroku,
  SiVercel,
  SiDigitalocean,
} from "react-icons/si";

import {
  FaGithub,
  //FaExternalLinkAlt,
} from "react-icons/fa";

// Create a map of technology names to both the Icon component and brand color
// The brand colors used here are approximate or official brand hex codes

const techMap: Record<string, { Icon: React.ComponentType; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  "Express.js": { Icon: SiExpress, color: "#000000" },
  Postgres: { Icon: SiPostgresql, color: "#336791" },
  Sequelize: { Icon: SiSequelize, color: "#52B0E7" },
  Flask: { Icon: SiFlask, color: "#000000" },
  Django: { Icon: SiDjango, color: "#092E20" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  // Add more if needed
};

// Similarly, map hosting platforms to their brand colors
const hostingMap: Record<string, { Icon: React.ComponentType; color: string }> = {
  Heroku: { Icon: SiHeroku, color: "#6762A6" },
  Vercel: { Icon: SiVercel, color: "#000000" },
  "Digital Ocean": { Icon: SiDigitalocean, color: "#0080FF" },
  // Add more if needed
};

// Example project data
const projects = [
  {
    title: "AI Pilipinas Job Board",
    description:
      "Volunteer Full Stack Developer focusing on search, filtering, job listings, and robust queries for the AI Pilipinas Cebu Chapter. Enhanced search functionality with dynamic queries and used Sequelize, Postgres, and Express.js for API integration. Developed authentication pages, job listings, reusable React components, and integrated high-fidelity Figma designs into a responsive Next.js application.",
    date: "August 2024 – Present",
    techStack: ["Next.js", "Express.js", "Sequelize", "Postgres", "React", "Tailwind CSS"],
    hostedOn: ["Vercel"],
    imageSrc: "/images/jobboard.jpg", // Replace with your own image
    liveDemo: "#", // Replace with a valid URL if you have one
    repoLink: "https://github.com/AI-Pilipinas/AIPC-Job-Board", // Replace with your GitHub repo if public
  },
  {
    title: "ANHSLINK",
    description:
      "Developed and implemented a comprehensive educational web portal for Argao National High School. Built with Django, JavaScript, and Tailwind CSS, featuring a digital library, announcement board, and interactive forums for students, teachers, and parents.",
    date: "January 2024 – April 2024",
    techStack: ["Django", "JavaScript", "Tailwind CSS", "HTML"],
    hostedOn: ["PythonAnywhere"],
    imageSrc: "/images/anhslink.jpg", // Replace with your own image
    liveDemo: "#", // Replace if you have a live link
    repoLink: "https://github.com/Cozyx213/ANHSLINK2", // Replace with your GitHub repo if public
  },
  {
    title: "FLATAPS",
    description:
      "A flashcard application aimed at helping students memorize the elements of the periodic table. Built with Flask, HTML, JavaScript, and Tailwind CSS, featuring an interactive UI, a leaderboard system for competition, and a lightweight backend architecture.",
    date: "March 2023",
    techStack: ["Flask", "HTML", "JavaScript", "Tailwind CSS"],
    hostedOn: ["PythonAnywhere"],
    imageSrc: "/images/flataps.jpg", // Replace with your own image
    liveDemo: "https://github.com/Cozyx213/FLATAPS",
    repoLink: "https://github.com/Cozyx213/FLATAPS",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className=" min-h-screen py-10 px-6 text-gray-100">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-5xl font-bold text-yellow-500 text-center"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mt-2 mb-12"
          variants={itemVariants}
        >
          Here are some of the projects I&apos;ve worked on
        </motion.p>

        {/* Projects List */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#06100a] p-6 rounded-xl shadow-md flex flex-col md:flex-row items-start gap-6"
              variants={itemVariants}
            >
              {/* Left: Project Screenshot */}
              <div className="relative w-full md:w-1/2 h-96 bg-[#2A2A2A] rounded-md overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Project Details */}
              <div className="flex flex-col w-full md:w-1/2">
                {/* Top: Title + Links */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-bold text-yellow-500">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    {/* Live Demo
                    
                      {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-yellow-400 transition flex items-center"
                      >
                        <FaExternalLinkAlt className="mr-1" />
                        Live Demo
                      </a>
                    )}
                      
                    link with icon */}
                  
                    {/* Repository link with icon */}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-yellow-400 transition flex items-center"
                      >
                        <FaGithub className="mr-1" />
                        Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* Date */}
                {project.date && (
                  <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                )}

                {/* Description */}
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => {
                      const data = techMap[tech];
                      if (data) {
                        const { Icon, color } = data;
                        return (
                          
                          <span
                            key={tech}
                            className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                          >
                            <span style={{ color }}>
                              <Icon />
                            </span>
                           
                            <span>{tech}</span>
                         </span>
                          
                        );
                        
                      }
                      // If not in the map, just display the name
                      return (
                        <span
                          key={tech}
                          className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Hosted On */}
                {project.hostedOn && project.hostedOn.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Hosted on:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.hostedOn.map((host) => {
                        const data = hostingMap[host];
                        if (data) {
                          const { Icon, color } = data;
                          return (
                            <span
                              key={host}
                              className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                            >

                              <span className={`${color}`}> <Icon /></span>
                              
                              <span>{host}</span>
                            </span>
                          );
                        }
                        // if no match, just show text
                        return (
                          <span
                            key={host}
                            className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm"
                          >
                            {host}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
