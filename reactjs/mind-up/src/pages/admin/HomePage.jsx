import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Mindup</title>
      </Helmet>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-center text-4xl">Welcome to Admin Dashboard</h1>
      </div>
    </>
  );
};

export default HomePage;
