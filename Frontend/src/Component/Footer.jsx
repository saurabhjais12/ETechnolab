import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative top-0 bottom-0 w-full bg-gray-900 text-white py-6 px-10 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-6">


        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-semibold text-blue-400">About Us</h1>
          <h2 className="mt-3 font-medium">Mission</h2>
          <p className="text-sm text-gray-400">
            We engineer meaningful technology solutions and services to help businesses
            and societies flourish, working together with clients to make their businesses stronger.
          </p>
          <h2 className="mt-3 font-medium">Vision</h2>
          <p className="text-sm text-gray-400">
            eTechno Lab takes an agile, collaborative approach to creating customized solutions
            across the digital value chain through our solutions, services, and people.
          </p>
        </div>


        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold text-blue-400">eTechno Lab</h1>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Company</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-500">Blogs</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold text-blue-400">Connect with us</h1>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
              <FaSquareTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
