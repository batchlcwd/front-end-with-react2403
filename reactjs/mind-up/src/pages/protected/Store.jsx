import React from "react";
import { Helmet } from "react-helmet";
import Categories from "../../components/Guest/Categories";
import Store from "../../components/Guest/Store";
import { useParams } from "react-router-dom";
const StorePage = () => {
  return (
    <div>
      <Helmet>
        <title>Product Store</title>
      </Helmet>
      <div>
        <Categories />
        <Store />
      </div>
    </div>
  );
};

export default StorePage;
