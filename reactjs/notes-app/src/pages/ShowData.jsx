import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl">Show Data</h1>
      {data.map((item) => (
        <div className="border my-3  p-3">
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
