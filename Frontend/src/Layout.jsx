import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import "./index.css"
import Footer from "./Component/footer";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
