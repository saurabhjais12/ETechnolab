import React, { useState } from "react";
import axios from "axios";

const Contactus = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Message: "",
  });


  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
       ...formData, 
       [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5008/api/contact/submit", formData);
      
      if (response.data.success) {
        setResponseMsg("Form submitted successfully!");
        setFormData({ Name: "", Email: "", Mobile: "", Message: "" }); // Clear form
      } else {
        setResponseMsg(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("Server error. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-slate-200 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl text-center font-bold mb-4">Contact Us</h2>


          {responseMsg && <p className="text-center text-green-600">{responseMsg}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                required 
                name="Name" 
                value={formData.Name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg" 
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                required 
                name="Email" 
                value={formData.Email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg" 
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Mobile No.</label>
              <input 
                type="number" 
                placeholder="Enter your Mobile No." 
                required 
                name="Mobile" 
                value={formData.Mobile}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg" 
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Message</label>
              <textarea 
                placeholder="Message" 
                required 
                name="Message" 
                value={formData.Message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 text-white py-2 px-4 rounded-lg justify-center flex hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>


        <div className="bg-slate-200 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address:</h3>
            <p>Aanand Vihar No. 2, Plot No 77, Hingane (Khurd), Pune, Maharashtra, India, 411051.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Interview Address:</h3>
            <p>699, Dnyansmruti, 2nd Floor, Near Sambhaji Maharaj Statue, J.M. Road, Pune, Maharashtra 411004, India.</p>
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
  );
};

export default Contactus;
