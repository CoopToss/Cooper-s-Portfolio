import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-2 fixed w-full top-0 shadow-lg z-50 backdrop-blur-lg bg-opacity-80">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="font-extrabold text-xl tracking-wider hover:text-blue-400 transition duration-300">Cooper's Portfolio</a>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#resume" className="hover:text-blue-400 transition duration-300">Resume</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition duration-300">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
