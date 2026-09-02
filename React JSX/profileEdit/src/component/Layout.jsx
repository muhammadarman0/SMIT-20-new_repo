import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap min-h-screen bg-[#0b0b10]">
        <Sidebar />
        <main className="flex-1">
          {" "}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
