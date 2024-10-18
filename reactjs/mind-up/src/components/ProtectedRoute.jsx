import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ element: Component }) => {
  const { isLogin } = useAuth();
  return isLogin() ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
