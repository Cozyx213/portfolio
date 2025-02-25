
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mt-48 lex flex-col items-center justify-center p-8 ">
      <div className="flex flex-col items-center space-y-6 ">
        {/* Circular Image Placeholder */}
        <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
          <Image
            src="/images/jake.jpg" // Replace with your image path
            alt="Profile Picture"/*  */
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Hi! I&apos;m <span className="text-yellow-500">Jake</span>,
          </h1>
          <p className="text-3xl text-white-700 mt-2">
            a <span className="text-yellow-500">Full-stack Developer</span>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-4">
          {/* Download CV */}
          <a
            href="/pdfs/resume.pdf"
            className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-300 p-3 rounded-lg shadow-md"
          >
            Download CV
          </a>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/jake-bajenting-902947274/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 p-3 rounded-lg shadow-md"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>

          {/* GitHub Profile */}
          <a
            href="https://github.com/Cozyx213" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-800  hover:bg-gray-800 text-white transition-colors duration-300 p-3 rounded-lg shadow-md"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
