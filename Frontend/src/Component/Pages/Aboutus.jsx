import React from 'react'

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        
      <div className=" bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">About Etecnloab</h1>

        <p className="text-gray-600 text-lg leading-relaxed">
            Etecnloab is a leading software company dedicated to 
          innovation and excellence. Our mission is to provide top-notch 
          digital solutions that empower businesses and individuals. We 
          specialize in software development, AI, and cloud-based services, 
          ensuring that our clients stay ahead in the digital era.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Vision</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Etecnloab, we envision a future where technology seamlessly 
          integrates into everyday life, enhancing productivity, efficiency, 
          and creativity. Our goal is to lead the industry by constantly 
          pushing the boundaries of innovation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mt-2">
          <li>Expert team of developers and engineers</li>
          <li>State-of-the-art technology solutions</li>
          <li>Commitment to quality and innovation</li>
          <li>Customer-centric approach</li>
        </ul>
        <p className="text-gray-600 text-lg mt-6">
          Join us on our journey to shape the future of technology. Let’s 
          innovate together!
        </p>
      </div>
    </div>
  )
}

export default Aboutus