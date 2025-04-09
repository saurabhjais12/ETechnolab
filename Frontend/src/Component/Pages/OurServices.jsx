import React from 'react';

import { TbWorldWww, TbDeviceMobileStar } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { FaAws } from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const OurServices = () => {
    return (
        <div className="mt-10 w-full px-6 md:px-16 lg:px-28 py-10">

            <div className="text-center mb-10">
                <p className="font-bold text-3xl">Our Services</p>
                <p className="text-lg text-gray-700 mt-4">Think Big. We make IT, possible!</p>
                <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                    Being a top-notch custom software development company, our services are designed to take your business to the next level,
                    bridging the gap between you and the success you aim to achieve.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 cursor-pointer">

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                    <div className="flex items-center justify-center text-blue-600 text-5xl mb-4">
                        <TbWorldWww />
                    </div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">Web Development</p>
                    <p className="text-gray-600">
                        Build fast, scalable, and responsive web applications, ensuring top-notch performance and user experience.
                    </p>
                </div>


                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                    <div className="flex items-center justify-center text-blue-600 text-5xl mb-4">
                        <TbDeviceMobileStar />
                    </div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">App Development</p>
                    <p className="text-gray-600">
                        Native, hybrid, or cross-platform mobile apps that provide a seamless experience and tangible value for your business.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                    <div className="flex items-center justify-center text-blue-600 text-5xl mb-4">
                        <TiShoppingCart />
                    </div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">E-commerce</p>
                    <p className="text-gray-600">
                        Develop scalable and secure online stores with optimized checkout experiences to boost sales and engagement.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 cursor-pointer">

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                    <div className="flex items-center justify-center text-blue-600 text-5xl mb-4">
                        <FaAws />
                    </div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">AWS</p>
                    <p className="text-gray-600">
                        Enhance scalability and security with cloud-based applications powered by AWS services.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                    <div className="flex items-center justify-center text-blue-600 text-5xl mb-4">
                        <HiOutlineSpeakerphone />
                    </div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">Digital Marketing</p>
                    <p className="text-gray-600">
                        Expand your reach with data-driven digital marketing strategies, including SEO, PPC, and social media advertising.
                    </p>
                </div>

                {/* IoT Development */}
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-103 hover:shadow-xl">
                    <div className="flex items-center justify-center text-blue-600 text-5xl mb-4">
                        <GiRadioTower />
                    </div>
                    <p className="font-semibold text-xl text-gray-800 mb-2">IoT Development</p>
                    <p className="text-gray-600">
                        Drive innovation with IoT solutions that enhance automation, efficiency, and connectivity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
