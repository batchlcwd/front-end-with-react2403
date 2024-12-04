import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { TbVideoPlus } from "react-icons/tb";
import { FaBorderAll, FaMarsAndVenus } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const AdminDashboard = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 720) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  });

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <div>
      <div className="">
        {/* content area */}
        <div className={isOpen ? "pl-80" : ""}>
          <div className="p-4">
            {!isOpen && (
              <TiThMenu
                size={30}
                onClick={() => {
                  setIsOpen(true);
                }}
                className="cursor-pointer"
              />
            )}
            <Outlet />
          </div>
        </div>
        <Drawer
          className="mt-14 "
          backdrop={false}
          open={isOpen}
          onClose={handleClose}
        >
          <Drawer.Header title="Admin Menu" titleIcon={() => <></>} />
          <Drawer.Items>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <form className="pb-3 md:hidden">
                    <TextInput
                      icon={HiSearch}
                      type="search"
                      placeholder="Search"
                      required
                      size={32}
                    />
                  </form>
                  <Sidebar.Items>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item
                        active={location.pathname === "/admin/home"}
                        as={Link}
                        to={"/admin/home"}
                        icon={HiChartPie}
                      >
                        Dashboard
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={Link}
                        to={"/dashboard/profile"}
                        icon={HiShoppingBag}
                        active={location.pathname === "/dashboard/profile"}
                      >
                        Profile
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={Link}
                        to={"/admin/courses"}
                        active={location.pathname === "/admin/courses"}
                        icon={HiUsers}
                      >
                        All Courses
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={Link}
                        to={"/admin/add-course"}
                        active={location.pathname === "/admin/add-course"}
                        icon={HiPencil}
                      >
                        Add Course
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={Link}
                        to={"/admin/categories"}
                        active={location.pathname === "/admin/categories"}
                        icon={HiLogin}
                      >
                        Categories
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={Link}
                        to={"/admin/add-category"}
                        active={location.pathname === "/admin/add-category"}
                        icon={IoAddCircle}
                      >
                        Add Category
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item
                        as={Link}
                        to={"/admin/upload-video"}
                        icon={TbVideoPlus}
                        active={location.pathname === "/admin/upload-video"}
                      >
                        Upload Videos
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="https://flowbite-react.com/"
                        icon={HiCollection}
                      >
                        Orders
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="https://flowbite-react.com/"
                        icon={FaBorderAll}
                      >
                        Users
                      </Sidebar.Item>
                      <Sidebar.Item
                        icon={HiInformationCircle}
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </div>
              </div>
            </Sidebar>
          </Drawer.Items>
        </Drawer>
      </div>
    </div>
  );
};

export default AdminDashboard;
