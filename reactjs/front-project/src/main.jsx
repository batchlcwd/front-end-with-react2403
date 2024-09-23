import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";

// createRoot(document.getElementById("root")).render(<App />);

// const component=createElement("div",null,"This is javascript code")

createRoot(document.getElementById("root")).render(<Home />);
