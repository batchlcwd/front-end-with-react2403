import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AddNotes from "./components/AddNotes.jsx";
import { NoteProvider } from "./context/notes-context.jsx";
import ViewNotes from "./components/ViewNotes.jsx";
import { Toaster } from "react-hot-toast";
import Root from "./components/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/users",
        element: <div>Users</div>,
      },
      {
        path: "/add-note",
        element: <AddNotes />,
      },
      {
        path: "/notes",
        element: <ViewNotes />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteProvider>
      <Toaster />

      <div className="p-5">
        <RouterProvider router={router} />
      </div>
    </NoteProvider>
  </StrictMode>
);
