"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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

export default function ContactPage() {
  return (
    <main className=" min-h-screen py-10 px-6 text-gray-100">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-5xl font-bold text-yellow-500 text-center"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mt-2 mb-12"
          variants={itemVariants}
        >
          Feel free to get in touch.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="bg-[#041509] p-6 rounded-xl shadow-md space-y-6"
          variants={itemVariants}
        >
          {/* Intro */}
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-yellow-500">Jake Bajenting</h3>
            <p className="text-gray-300 mt-2">
              Full Stack Developer based in Cebu, Philippines.
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhone className="text-yellow-500" />
            <span className="text-gray-300">+63-956-246-1456</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-yellow-500" />
            <span className="text-gray-300">bajentingjackie@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/jake-bajenting-902947274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-3">
            <FaGithub className="text-white" />
            <a
              href="https://github.com/Cozyx213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
