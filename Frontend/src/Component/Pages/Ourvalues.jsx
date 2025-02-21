import React from 'react'
import image1 from "../../assets/OurValues/1.png"
import image2 from "../../assets/OurValues/2.png"
import image3 from "../../assets/OurValues/3.png"
import image4 from "../../assets/OurValues/4.png"

const OurValues = () => {
  return (
    <div className="w-full px-4 py-10">

      <div>
        <p className="font-bold text-center text-3xl">Our Values</p>
      </div>


      <div className="max-w-2xl mx-auto text-center text-lg text-gray-700 mt-4">
        <p>
          eTechno Lab is a Software Services company, providing IT solutions 
          to our clients with our core values: Collaborative Spirit, Integrity, 
          and Serenity.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">

        <div className="flex flex-col items-center p-4">
          <img className="w-20 h-20" src={image1} alt="Collaborative Spirit" />
          <p className="font-bold text-xl mt-3">Collaborative Spirit</p>
          <p className="text-gray-600 mt-2">
            Talent wins games, but teamwork and intelligence win championships.
          </p>
        </div>

        <div className="flex flex-col items-center p-4">
          <img className="w-20 h-20" src={image2} alt="Expert Thinking" />
          <p className="font-bold text-xl mt-3">Expert Thinking</p>
          <p className="text-gray-600 mt-2">
            Our expert and experienced team provides the ultimate 
            solution for the client's queries.
          </p>
        </div>

        <div className="flex flex-col items-center p-4">
          <img className="w-20 h-20" src={image3} alt="Integrity" />
          <p className="font-bold text-xl mt-3">Integrity</p>
          <p className="text-gray-600 mt-2">
            To give real services to the client, we add something 
            that cannot be bought or measured with money—Integrity.
          </p>
        </div>


        <div className="flex flex-col items-center p-4">
          <img className="w-20 h-20" src={image4} alt="Client Serenity" />
          <p className="font-bold text-xl mt-3">Client Serenity</p>
          <p className="text-gray-600 mt-2">
            We do everything with clarity because clarity brings Serenity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurValues
