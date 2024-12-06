import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <CustomNavbar />

      <div className=" pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
