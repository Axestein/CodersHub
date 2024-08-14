import React, { useState } from 'react';
import navbarlogo from '../assets/navbarlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 fixed z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={navbarlogo} alt="NSCC Navbar Logo" className="h-10 mr-2 sm:mr-4" />
        </div>

        <div className="flex sm:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            {!isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            ) : null}
          </button>
        </div>

        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} absolute sm:static top-0 right-0 bg-black h-screen sm:h-auto sm:w-auto sm:bg-transparent space-y-8 p-6 w-1/2 lg:space-y-0 lg:p-0 md:space-y-0 md:p-0 sm:space-y-0 sm:p-0 bg-opacity-50`}>
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none absolute top-4 right-4 sm:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#" className="block sm:inline-block py-2 px-4 hover:text-gray-300 mt-12 sm:mt-0">Home</a>
          <a href="#domains" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Domains</a>
          <a href="#community" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Community</a>
          <a href="#timeline" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Timeline</a>
          <a href="#faq" className="block sm:inline-block py-2 px-4 hover:text-gray-300">FAQ</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;