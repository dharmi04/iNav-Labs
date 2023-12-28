import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoLogoReact } from 'react-icons/io5';
import logo from '../assets/logo.png'

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between text-primary ">
        {/* Logo */}
        <div className="flex items-center ml-5">
         <img src={logo} alt="logo" className='w-40 h-20' />
        </div>

        {/* Navigation links (hidden in mobile view) */}
        <div className="hidden lg:flex space-x-8 mr-5 text-xl">
          <a href="#about" className="text-primary hover:text-gray-300">
            About
          </a>
          <a href="#client" className="text-primary hover:text-gray-300">
            Client
          </a>
          <a href="#subscribe" className="text-primary hover:text-gray-300">
            Subscribe
          </a>
          <a href="#contact" className="text-primary hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Hamburger menu (visible in mobile view) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-4 bg-black p-4 space-y-4 flex flex-col text-primary">
            <a href="#about" className="text-primary hover:text-gray-300">
              About
            </a>
            <a href="#client" className="text-primary hover:text-gray-300">
              Client
            </a>
            <a href="#subscribe" className="text-primary hover:text-gray-300">
              Subscribe
            </a>
            <a href="#contact" className="text-primary hover:text-gray-300">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
