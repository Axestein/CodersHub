import React, { useState } from 'react';
import navbarlogo from '../assets/navbarlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-md mt-4 mx-4 lg:mx-8 border border-white border-opacity-25 rounded-lg">
      <div className="flex items-center justify-between max-w-5xl mx-auto p-2 lg:p-4">
        <a href="/" className="flex items-center">
          <img src={navbarlogo} className="h-6 mr-2 sm:h-9 sm:mr-3" alt="Navbar Logo" />
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu} type="button" className="text-gray-300 hover:text-purple-700 focus:text-purple-700 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M19 7.414L17.586 6 12 11.586 6.414 6 5 7.414 10.586 13 5 18.586 6.414 20 12 14.414 17.586 20 19 18.586 13.414 13 19 7.414Z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z" />
              )}
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
            <li>
              <a
                href="/"
                className="block py-2 pl-2 pr-2 text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/roadmap"
                className="block py-2 pl-2 pr-2 text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                Roadmaps
              </a>
            </li>
            <li>
              <a
                href="/community"
                className="block py-2 pl-2 pr-2 text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="/esmoai"
                className="block py-2 pl-2 pr-2 text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                Esmo AI
              </a>
            </li>
            <li>
              <a
                href="/findevents"
                className="block py-2 pl-2 pr-2 text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                Find Events
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block py-2 pl-2 pr-2 text-gray-300 border-b border-transparent hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
