import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Categories from "../pages/Categories.jsx";
import Courses from "../pages/Courses.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import App from "../App.jsx";
import { AuthProvider } from "../context/AuthContext.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Dashboard from "../pages/protected/Dashboard.jsx";
import Profile from "../pages/protected/Profile.jsx";
import DashboardHome from "../pages/protected/DashboardHome.jsx";

import AdminProtectedRoute from "../components/AdminProtectedRoute.jsx";

import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminHomePage from "../pages/admin/HomePage.jsx";
import AllCourses from "../pages/admin/AllCourses.jsx";
import AllCategories from "../pages/admin/AllCategories.jsx";
import AddCourse from "../pages/admin/AddCourse.jsx";
import { Provider } from "react-redux";
import store from "../redux/store";
import Hooks from "../pages/Hooks.jsx";
import Performance from "../pages/Performance.jsx";
import UploadVideo from "../pages/admin/UploadVideo.jsx";
import SingleViewCourse from "../pages/SingleViewCourse.jsx";
import UpdateCourseComp from "../pages/admin/UpdateCourse.jsx";
import Order from "../components/Guest/Order.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import StorePage from "../pages/protected/Store.jsx";
import MyCourses from "../pages/protected/MyCourses.jsx";
import Learning from "../pages/protected/Learning.jsx";
import CategoryCourse from "../pages/protected/CategoryCourse.jsx";
import React from "react";
import User from "../pages/admin/User.jsx";

const AddCategory = React.lazy(() => import("../pages/admin/AddCategory.jsx"));

export function AnimatedRoutes({ children }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname} // Ensure unique key for each route
        classNames="fade" // CSS animation class
        timeout={300} // Animation duration
      >
        <div>
          {children}
          {/* Renders the current route's element */}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <AuthProvider>
          <HomePage />
        </AuthProvider>
      </Provider>
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
        path: "/courses/:courseId",
        element: <SingleViewCourse />,
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
          {
            path: "store",
            element: <StorePage />,
          },
          {
            path: "store/category/:categoryId",
            element: <CategoryCourse />,
          },
          {
            path: "courses",
            element: <MyCourses />,
          },
          {
            path: "learning/:courseId",
            element: <Learning />,
          },
          {
            path: "order/:courseId",
            element: <Order />,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminProtectedRoute element={AdminDashboard} />,
        children: [
          {
            path: "users",
            element: <User />,
          },
          {
            path: "home",
            element: <AdminHomePage />,
          },
          {
            path: "add-category",
            element: (
              <React.Suspense fallback={<h1>Loading</h1>}>
                <AddCategory />,
              </React.Suspense>
            ),
          },
          {
            path: "courses",
            element: <AllCourses />,
          },
          {
            path: "courses/:courseId",
            element: <UpdateCourseComp />,
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
          {
            path: "upload-video",
            element: <UploadVideo />,
          },
        ],
      },
    ],
  },
  {
    path: "/hooks",
    element: <Hooks />,
  },
  {
    path: "/performance-hook",
    element: <Performance />,
  },
]);

export default router;
