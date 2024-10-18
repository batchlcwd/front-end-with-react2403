import React from "react";
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
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const { user, logout } = useAuth();
  return (
    <>
      <div className="">
        {/* content area */}
        <div className={isOpen ? "pl-80" : ""}>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
        <Drawer
          className="mt-14"
          backdrop={false}
          open={isOpen}
          onClose={handleClose}
        >
          <Drawer.Header title="MENU" titleIcon={() => <></>} />
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
                        as={Link}
                        to={"/dashboard/home"}
                        icon={HiChartPie}
                      >
                        Dashboard
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={Link}
                        to={"/dashboard/profile"}
                        icon={HiShoppingBag}
                      >
                        Profile
                      </Sidebar.Item>
                      <Sidebar.Item href="/users/list" icon={HiUsers}>
                        My Courses
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/authentication/sign-in"
                        icon={HiLogin}
                      >
                        Store
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/authentication/sign-up"
                        icon={HiPencil}
                      >
                        Invoices
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item
                        href="https://github.com/themesberg/flowbite-react/"
                        icon={HiClipboard}
                      >
                        Favorite
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="https://flowbite-react.com/"
                        icon={HiCollection}
                      >
                        Feedback
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
    </>
  );
};

export default Dashboard;
