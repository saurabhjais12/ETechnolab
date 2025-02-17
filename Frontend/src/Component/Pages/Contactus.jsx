import React from 'react'

const Contactus = () => {
  return (

    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        <div className="bg-slate-200 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl text-center font-bold mb-4">Contact Us</h2>

          <form>
            <div className="mb-4">
              <label className="block font-semibold">Name</label>
              <input type="text" 
              placeholder="Enter your name" 
              required name="Name" 
              className="w-full p-2 border rounded-lg" />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input type="email" 
              placeholder="Enter your Email" 
              required name="email" 
              className="w-full p-2 border rounded-lg" />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Mobile No.</label>
              <input type="number" 
              placeholder="Enter your Mobile No." 
              required name="mobile" 
              className="w-full p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Message</label>
              <textarea placeholder="Message" 
              required name="message" 
              className="w-full p-2 border rounded-lg">
              </textarea>
            </div>

            <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg justify-center flex
             hover:bg-blue-700">Submit</button>
          </form>
        </div>
        

        <div className="bg-slate-200 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address:</h3>
            <p>Aanand Vihar No. 2, Plot No 77, Hingane (Khurd), 
              Sinhgad Road, Pune, Maharashtra, India, 411051.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Interview Address:</h3>
            <p>699, Dnyansmruti, 2nd Floor, Near Sambhaji Maharaj Statue, 
              Garvare Bridge, Near Motimahal Lodge, J.M. Road, Pune, Maharashtra 411004, India.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Let's Talk:</h3>
            <p>+91 909-651-9449</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">General Support:</h3>
            <p>support@etechnolab.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus