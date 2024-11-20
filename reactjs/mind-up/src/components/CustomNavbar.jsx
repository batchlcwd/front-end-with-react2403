import React, { useState } from "react";
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import logo from "../assets/study.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";
const CustomNavbar = () => {
  const count = useSelector((state) => state.counter.count);

  const { isLogin, login, logout, user } = useAuth();

  const [loginLinks, setLoginLinks] = useState([
    {
      name: "Dashbaord",
      link: "/dashboard/home",
    },
    ,
    {
      name: "Profile",
      link: `/dashboard/profile`,
    },
  ]);

  const [links, setLinks] = useState([
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Categories",
      link: "/categories",
    },
  ]);

  return (
    <Navbar className="shadow  fixed w-full  z-50">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src={logo}
          className="mr-3 rounded-full h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mind Up
        </span>
      </Navbar.Brand>

      <div className="flex gap-2 md:order-2">
        {!isLogin() && (
          <>
            <Link to={"/login"}>
              <Button pill size="sm" color="blue">
                Login
              </Button>
            </Link>
            <Link to={"/singup"}>
              <Button size="sm" pill color="purple">
                Signup
              </Button>
            </Link>
            <Link to={"/singup"}>
              <Button size="sm" pill color="purple">
                Count : {count}
              </Button>
            </Link>
          </>
        )}

        {isLogin() && (
          <>
            <Button
              as={Link}
              to={"/dashboard/profile"}
              size="sm"
              pill
              color="blue"
            >
              {user.name}
            </Button>
            <Button
              onClick={() => {
                logout();
              }}
              size="sm"
              pill
              color="purple"
            >
              Logout
            </Button>
          </>
        )}
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {!isLogin() &&
          links.map((link, index) => (
            <Navbar.Link as={Link} key={index} to={link.link}>
              {/* <Link to={"/"}>Home</Link> */}
              {link.name}
            </Navbar.Link>
          ))}

        {isLogin() &&
          loginLinks.map((link, index) => (
            <Navbar.Link as={Link} key={index} to={link.link}>
              {/* <Link to={"/"}>Home</Link> */}
              {link.name}
            </Navbar.Link>
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
