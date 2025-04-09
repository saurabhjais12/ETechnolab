import React from "react";
import { FaLaptopCode, FaCloud, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Floating Animated Icons */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-6xl text-blue-300"
      >
        <FaLaptopCode />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 text-6xl text-green-300"
      >
        <FaCloud />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-20 text-6xl text-yellow-300"
      >
        <FaMobileAlt />
      </motion.div>

      {/* Main Banner Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-6 md:px-16 lg:px-32"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg animate-glow">
          Transforming Ideas Into Reality
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Building **scalable, high-performance** software solutions with the latest technologies.
          Let’s create something **amazing** together.
        </p>

        <Link to="/contactus">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 200, 255, 0.8)" }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg transition duration-300 transform"
          >
            Get In Touch
          </motion.button>
        </Link>

      </motion.div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default Content;
