import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatedRoutes } from "../config/routes";

const HomePage = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <CustomNavbar />

      <div className=" pt-16">
        <AnimatedRoutes>
          <Outlet />
        </AnimatedRoutes>
      </div>
    </div>
  );
};

export default HomePage;
