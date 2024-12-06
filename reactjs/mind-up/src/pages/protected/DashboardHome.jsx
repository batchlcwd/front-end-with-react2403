import React from "react";
import { Helmet } from "react-helmet";
import Store from "../../components/Guest/Store";
import Categories from "../../components/Guest/Categories";
const DashboardHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>
      <div>
        <Categories />
        <Store />
      </div>
    </div>
  );
};

export default DashboardHome;
