import React from 'react';

import { FaReact, FaJava, FaVuejs, FaPython, FaNodeJs, FaSwift } from "react-icons/fa";
import { RiAngularjsLine, RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { MdCss, MdOutlineHtml } from "react-icons/md";

const Technology = () => {
    return (
        <div className="mt-10 w-full px-6 md:px-16 lg:px-28 py-10">


            <div className="text-center mb-10">
                <p className="font-bold text-3xl text-gray-800">Our Skills That Define Us</p>
                <p className="text-lg text-gray-600 mt-2">Technologies we specialize in</p>
            </div>


            <div className="text-center mb-6">
                <p className="text-xl font-semibold text-gray-700">Programming</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center text-center">

                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <FaJava className="text-5xl text-blue-700 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Java</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <FaReact className="text-5xl text-blue-500 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">React.js</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <RiAngularjsLine className="text-5xl text-red-600 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Angular.js</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <FaVuejs className="text-5xl text-green-500 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Vue.js</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <FaPython className="text-5xl text-yellow-500 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Python</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <FaNodeJs className="text-5xl text-green-600 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Node.js</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <IoLogoJavascript className="text-5xl text-yellow-400 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">JavaScript</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <p className="text-5xl font-bold text-gray-700 transition duration-300 hover:text-white">C++</p>
                    <p className="mt-2 font-semibold">C++</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <MdCss className="text-5xl text-blue-400 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">CSS</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <MdOutlineHtml className="text-5xl text-orange-500 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">HTML</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <FaSwift className="text-5xl text-red-500 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Swift</p>
                </div>


                <div className="flex flex-col items-center p-4 bg-gray-50 shadow-md rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                    <RiTailwindCssLine className="text-5xl text-blue-400 transition duration-300 hover:text-white" />
                    <p className="mt-2 font-semibold">Tailwind CSS</p>
                </div>

            </div>
        </div>
    );
};

export default Technology;
