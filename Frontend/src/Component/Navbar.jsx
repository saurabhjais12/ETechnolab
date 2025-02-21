import React, { useState } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

   
        <h1 className="text-2xl font-bold text-blue-600">
          e<span className="text-gray-800">Techno Lab</span>
        </h1>


        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">HOME</a> 
          <a href="services" className="text-gray-600 hover:text-blue-600">SERVICES</a>
          <a href="technology" className="text-gray-600 hover:text-blue-600">TECHNOLOGY</a>
          <a href="aboutus" className="text-gray-600 hover:text-blue-600">ABOUT-US</a>
          <a href="contactus" className="text-gray-600 hover:text-blue-600">CONTACT-US</a>
        </nav>

        <Link to="login">
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
        </Link>
        


        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600 text-2xl">
          <IoReorderThree />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-4"
        >
          <a href="/" className="text-gray-600 hover:text-blue-600">HOME</a> 
          <a href="services" className="text-gray-600 hover:text-blue-600">SERVICES</a>
          <a href="technology" className="text-gray-600 hover:text-blue-600">TECHNOLOGY</a>
          <a href="aboutus" className="text-gray-600 hover:text-blue-600">ABOUT-US</a>
          <a href="contactus" className="text-gray-600 hover:text-blue-600">CONTACT-US</a>

          {/* Mobile Login Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
