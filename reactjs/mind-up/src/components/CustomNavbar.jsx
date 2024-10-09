import React from "react";
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import logo from "../assets/study.png";
const CustomNavbar = () => {
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
    
      <div  className="flex gap-2 md:order-2">
        <Button pill size="sm" color="blue">Login</Button>
        <Button size="sm" pill color="purple">Signup</Button>
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Courses</Navbar.Link>
        <Navbar.Link href="#">Catgories</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
