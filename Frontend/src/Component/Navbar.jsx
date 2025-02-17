import React from 'react';
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="text-2xl font-bold text-blue-600">
          e<span className="text-gray-800">Techno Lab</span>
        </h1>


        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">HOME</a> 
          <a href="#" className="text-gray-600 hover:text-blue-600">SERVICES</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">TECHNOLOGY</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">COMPANY</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">PORTFOLIO</a>
          <a href="/aboutus" className="text-gray-600 hover:text-blue-600">ABOUT-US</a>
          <a href="/contactus" className="text-gray-600 hover:text-blue-600">CONTACT-US</a>
        </nav>


        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>

        <button className="md:hidden text-gray-600 text-2xl">
        <IoReorderThree />
        </button>
      </div>

    </header>
  );
};

export default Navbar;
