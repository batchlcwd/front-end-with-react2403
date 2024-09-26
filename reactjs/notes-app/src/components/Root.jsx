import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex">
        {/* side menu */}
      <div className="w-[250px] p-4">
        <h1 className="font-bold text-2xl">Note App</h1>
        <ul className="mt-5">
          <li className="py-3 bg-gray-600 text-center rounded">
            <NavLink to="/add-note">Add Note</NavLink>
          </li>
          <li className="py-3 mt-1 bg-gray-600 text-center rounded">
            <NavLink to="/notes">View Notes</NavLink>
          </li>
        </ul>
      </div>
      {/* content */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
