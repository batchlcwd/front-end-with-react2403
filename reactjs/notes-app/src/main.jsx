import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AddNotes from "./pages/AddNotes.jsx";
import { NoteProvider } from "./context/notes-context.jsx";
import ViewNotes from "./pages/ViewNotes.jsx";
import { Toaster } from "react-hot-toast";
import Root from "./pages/Root.jsx";
import ViewNote from "./pages/ViewNote.jsx";
import Home from "./pages/Home.jsx";
import ShowData from "./pages/ShowData.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>This is error page</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
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
        element: <ProtectedRoute element={AddNotes} />,
      },
      {
        path: "/notes",
        element: <ProtectedRoute element={ViewNotes} />,
      },
      {
        path: "/note/:noteId/:noteTitle",
        element: <ProtectedRoute element={ViewNote} />,
      },
      {
        path: "data/:dataId",
        element: <ProtectedRoute element={ShowData} />,
        loader: async ({ request, params }) => {
          console.log(params.dataId);
          const result = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          return result;
        },
        action: () => {},
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
