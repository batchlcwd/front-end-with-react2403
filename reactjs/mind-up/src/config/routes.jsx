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
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Dashboard from "../pages/protected/Dashboard.jsx";
import Profile from "../pages/protected/Profile.jsx";
import DashboardHome from "../pages/protected/DashboardHome.jsx";
import AdminProtectedRoute from "../components/AdminProtectedRoute.jsx";
import AddCategory from "../pages/admin/AddCategory.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import { ROLE_ADMIN } from "./constants.js";
import AdminHomePage from "../pages/admin/HomePage.jsx";
import AllCourses from "../pages/admin/AllCourses.jsx";
import AllCategories from "../pages/admin/AllCategories.jsx";
import AddCourse from "../pages/admin/AddCourse.jsx";
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
      {
        path: "/dashboard",
        element: <ProtectedRoute element={Dashboard} />,
        children: [
          {
            path: "home",
            element: <DashboardHome />,
          },
          {
            path: "profile",
            element: <ProtectedRoute element={Profile} />,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminProtectedRoute element={AdminDashboard} />,
        children: [
          {
            path: "home",
            element: <AdminHomePage />,
          },
          {
            path: "add-category",
            element: <AddCategory />,
          },
          {
            path: "courses",
            element: <AllCourses />,
          },
          {
            path: "categories",
            element: <AllCategories />,
          },
          {
            path: "add-course",
            element: <AddCourse />,
          },
          {
            path: "add-category",
            element: <AddCategory />,
          },
        ],
      },
    ],
  },
  ,
]);

export default router;
