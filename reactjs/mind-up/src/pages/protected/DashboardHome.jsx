import React from "react";
import { Helmet } from "react-helmet";
import Store from "../../components/Guest/Store";
import Categories from "../../components/Guest/Categories";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const DashboardHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>
      <div>
      
      <div className="flex justify-center flex-col items-center gap-3">
      <h1 className="text-4xl text-center mt-3">Welcome to User Dashboard</h1>
      <Button as={Link} to={'/dashboard/store'}>Start Exploring</Button>
      </div>
      </div>
    </div>
  );
};

export default DashboardHome;
