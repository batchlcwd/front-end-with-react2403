import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Mindup</title>
      </Helmet>
      <h1 className="text-center text-4xl">Welcome to Admin Dashboard</h1>
    </>
  );
};

export default HomePage;
