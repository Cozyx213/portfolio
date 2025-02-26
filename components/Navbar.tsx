"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Navbar: React.FC = () => {
  return (
    // Animate the entire nav container
    <motion.nav
      className="h-16"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto flex justify-center items-center h-full">
        <motion.div className="space-x-20 flex" variants={linkVariants}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Link href="/" className="text-gray-300 hover:text-yellow-500 text-2xl">
              Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Link href="/about" className="text-gray-300 hover:text-yellow-500 text-2xl">
              About
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Link href="/projects" className="text-gray-300 hover:text-yellow-500 text-2xl">
              Projects
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Link href="/contact" className="text-gray-300 hover:text-yellow-500 text-2xl">
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
