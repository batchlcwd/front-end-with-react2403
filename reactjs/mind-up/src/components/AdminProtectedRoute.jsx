import React from "react";
import { ROLE_ADMIN, ROLE_GUEST } from "../config/constants";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ element: Component, role = ROLE_ADMIN }) => {
  const { isLogin, user } = useAuth();

  // user.roles = [  {roleId,roleName} ]

  const userRoles = user?.roles.map((role) => role.roleName);
  // console.log("userRoles", userRoles);

  return isLogin() && userRoles.includes(role) ? (
    <Component />
  ) : (
    <Navigate to={"/"} />
  );
};

export default AdminProtectedRoute;
