import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <Toaster />
      <CustomNavbar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
