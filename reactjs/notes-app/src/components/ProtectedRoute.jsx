import React from "react";
import { Navigate } from "react-router-dom";
import { useNotes } from "../context/notes-context";
const ProtectedRoute = ({ element: Component }) => {
  const { isAuthenticated } = useNotes();

  return isAuthenticated ? <Component /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
