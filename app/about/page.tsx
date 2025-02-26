"use client";
import { motion } from "framer-motion";

export default function Home() {
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
      transition: { duration: 0.3 },
    },
  };

  return (
    <main className="min-h-screen py-10 px-4 text-lg">
      {/* Container with fade-in animation */}
      <motion.div
        className="max-w-3xl mx-auto shadow-md rounded-2xl p-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Heading as an animated item */}
        <motion.h1
          className="text-4xl font-bold mb-6 text-yellow-500"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        {/* Paragraph as an animated item */}
        <motion.p
          className="text-white leading-relaxed mb-8"
          variants={itemVariants}
        >
          Hi! I&apos;m <span className="font-semibold">Jake Bajenting</span>, a
          passionate <span className="font-semibold">Full Stack Developer</span>{" "}
          based in Cebu, Philippines. I thrive on creating dynamic, user-friendly
          web applications and continuously refining my skills to deliver
          high-quality solutions. My journey in the world of programming began
          with a fascination for how software can solve real-world problems, and
          it has grown into a full-fledged career centered on building scalable
          and efficient web applications.
        </motion.p>

        {/* Education Section */}
        <motion.h2
          className="text-2xl font-semibold mb-4 text-yellow-500"
          variants={itemVariants}
        >
          Education
        </motion.h2>
        <motion.p
          className="text-white leading-relaxed mb-8"
          variants={itemVariants}
        >
          I&apos;m currently pursuing a{" "}
          <span className="font-semibold">
            Bachelor of Science in Computer Science
          </span>{" "}
          at{" "}
          <span className="font-semibold">
            Cebu Institute of Technology - University
          </span>
          , where I maintain a GWA of{" "}
          <span className="font-semibold">4.66/5</span>. My dedication to
          technology and innovation earned me the prestigious{" "}
          <span className="font-semibold">DOST-SEI Merit Scholarship</span>,
          awarded by the{" "}
          <span className="font-semibold">
            Department of Science and Technology (DOST)
          </span>
          —a testament to my commitment and academic excellence.
        </motion.p>

        {/* Hobbies & Interests */}
        <motion.h2
          className="text-2xl font-semibold mb-4 text-yellow-500"
          variants={itemVariants}
        >
          Hobbies &amp; Interests
        </motion.h2>
        <motion.p
          className="text-white leading-relaxed mb-8"
          variants={itemVariants}
        >
          Outside of coding, I enjoy playing chess, solving Leetcode problems,
          gaming, cooking, and volunteering. I am also passionate about tutoring
          and sharing my knowledge with others, believing that continuous
          learning and community involvement are key drivers of personal and
          professional growth.
        </motion.p>
      </motion.div>
    </main>
  );
}
