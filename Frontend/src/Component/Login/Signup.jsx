import React, { useState } from "react";
import { motion } from "framer-motion";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [profilePic, setProfilePic] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", password, "Profile Pic:", profilePic);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-600">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-96 p-6 shadow-2xl rounded-2xl bg-white">
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="p-3 border border-gray-300 rounded-xl w-full"
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border border-gray-300 rounded-xl w-full"
                required
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border border-gray-300 rounded-xl w-full"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-xl transition-all"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Already have an account? <a href="#" className="text-green-500 font-semibold">Login</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
