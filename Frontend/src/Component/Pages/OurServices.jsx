import React from 'react';

const OurServices = () => {
    return (
        <div className="mt-10 w-full px-6 md:px-16 lg:px-28 py-10">

            <div className="text-center mb-10">
                <p className="font-bold text-3xl">Our Services</p>
                <p className="text-lg text-gray-700 mt-4">Think Big. We make IT, possible!</p>
                <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                    Being a top-notch Custom software development company, our services are designed to take your business to the next level,
                    reducing the gap between you and the heights of success you wish to achieve.
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    {/* <img className="w-20 h-20 mb-4" src={webDevImage} alt="Web Development" /> */}
                    <p className="font-semibold text-xl text-gray-800">Web Development</p>
                    <p className="text-gray-600 mt-2">
                        Responsive and scalable web application development cutting across domains and technologies, hosted on various cloud infrastructures.
                    </p>
                </div>


                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    {/* <img className="w-20 h-20 mb-4" src={appDevImage} alt="App Development" /> */}
                    <p className="font-semibold text-xl text-gray-800">App Development</p>
                    <p className="text-gray-600 mt-2">
                        We develop powerful applications that provide a thrilling experience for your users and bring tangible value to your business.
                        Whether native, hybrid, or cross-platform, our mobile development is top-notch.
                    </p>
                </div>


                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    {/* <img className="w-20 h-20 mb-4" src={ecommerceImage} alt="E-commerce" /> */}
                    <p className="font-semibold text-xl text-gray-800">E-commerce</p>
                    <p className="text-gray-600 mt-2">
                        Scalable web application development across domains and technologies, hosted on cloud infrastructures to maximize e-commerce potential.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    {/* <img className="w-20 h-20 mb-4" src={awsImage} alt="AWS" /> */}
                    <p className="font-semibold text-xl text-gray-800">AWS</p>
                    <p className="text-gray-600 mt-2">
                        We build web & mobile applications using AWS Services to Scale & Enhance your application, improving performance and security.
                    </p>
                </div>


                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    {/* <img className="w-20 h-20 mb-4" src={digitalMarketingImage} alt="Digital Marketing" /> */}
                    <p className="font-semibold text-xl text-gray-800">Digital Marketing</p>
                    <p className="text-gray-600 mt-2">
                        Online advertising allows brands to reach out beyond their existing networks, tapping into new, highly targeted audiences via search, social, or display ads.
                    </p>
                </div>


                <div className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    {/* <img className="w-20 h-20 mb-4" src={iotImage} alt="IoT Development" /> */}
                    <p className="font-semibold text-xl text-gray-800">IoT Development</p>
                    <p className="text-gray-600 mt-2">
                        IoT is transforming businesses across industries worldwide. We offer IoT Solutions and IoT Services to enhance operational efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
