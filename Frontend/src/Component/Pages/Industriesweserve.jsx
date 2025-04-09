import React from 'react';

import image1 from "../../assets/OurValues/1.svg";
import image2 from "../../assets/OurValues/2.svg";
import image3 from "../../assets/OurValues/3.svg";
import image4 from "../../assets/OurValues/4.svg";
import image5 from "../../assets/OurValues/5.svg";
import image6 from "../../assets/OurValues/6.svg";
import image7 from "../../assets/OurValues/7.svg";
import image8 from "../../assets/OurValues/8.svg";
import image9 from "../../assets/OurValues/9.svg";
import image10 from "../../assets/OurValues/10.svg";
import image11 from "../../assets/OurValues/11.svg";
import image12 from "../../assets/OurValues/12.svg";

const industries = [
    { img: image1, title: "Healthcare" },
    { img: image2, title: "Education" },
    { img: image3, title: "E-commerce" },
    { img: image4, title: "Social Media" },
    { img: image5, title: "Retail" },
    { img: image6, title: "Manufacturer" },
    { img: image7, title: "Airways" },
    { img: image8, title: "Help Desk" },
    { img: image9, title: "Construction" },
    { img: image10, title: "Logistics" },
    { img: image11, title: "Media" },
    { img: image12, title: "Healthcare" },
];

const IndustriesWeServe = () => {
    return (
        <div className="w-full px-6 md:px-16 lg:px-28 py-10">

            <div className="text-center">
                <p className="font-bold text-3xl">Industries We Serve</p>

                <p className="max-w-2xl mx-auto text-lg text-gray-700 mt-4">
                    Our expertise and technology solutions help industry verticals
                    improve return on investment and become more efficient.
                </p>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-10 text-center">
                {industries.map((industry, index) => (
                    <div key={index} className="flex flex-col items-center transition-transform transform hover:scale-105">
                        <img className="w-20 h-20" src={industry.img} alt={industry.title} />
                        <p className="mt-3 font-medium text-gray-800">{industry.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesWeServe;
