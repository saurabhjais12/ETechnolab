import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Contactus from "./Component/Pages/Contactus";
import OurServices from "./Component/Pages/OurServices";
import Aboutus from "./Component/Pages/Aboutus";
import Home from "./Component/Home/home";
import Technology from "./Component/Pages/Technology";
import LoginPage from "./Component/Login/Login";
import SignupPage from "./Component/Login/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus/>} />
        <Route path="services" element={<OurServices />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="technology" element={<Technology/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SignupPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
