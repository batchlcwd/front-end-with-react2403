import React, { useState } from "react";
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import logo from "../assets/study.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const CustomNavbar = () => {
  const { isLogin, login, logout, user } = useAuth();

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
    <Navbar className="shadow ">
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
          </>
        )}

        {isLogin() && (
          <>
            <Button size="sm" pill color="blue">
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
        {links.map((link, index) => (
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
