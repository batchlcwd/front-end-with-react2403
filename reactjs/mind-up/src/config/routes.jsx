import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Categories from "../pages/Categories.jsx";
import Courses from "../pages/Courses.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import App from "../App.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",

        element: <Services />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <Signup />,
      },
    ],
  },
  ,
]);

export default router;
