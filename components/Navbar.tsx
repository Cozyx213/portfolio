import React from 'react';
import Link from 'next/link';   
const Navbar: React.FC = () => {
  return (
    <nav className="h-16 ">
      <div className="container mx-auto flex justify-center items-center h-full align-middle">
        
        <div className="space-x-20">
          <Link href="/" className="text-gray-300 hover:text-yellow-500 text-2xl">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-yellow-500 text-2xl">About</Link>
          <Link href="/projects" className="text-gray-300 hover:text-yellow-500 text-2xl">Projects</Link>
          <Link href="/contact" className="text-gray-300 hover:text-yellow-500 text-2xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;