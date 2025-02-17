import React from 'react';
import eTechnolab from "../assets/saurabhimage.jpeg";
// import eTechnolab from "../assets/e.jpeg";

const Content = () => {
  return (
    <div className="bg-slate-100 text-black py-10 px-6 text-center shadow-md min-h-screen flex justify-center items-center">
      <img 
        src={eTechnolab}
        alt="eTechnolab Banner" 
        className="w-full h-full"
      />
    </div>
  );
};

export default Content;
