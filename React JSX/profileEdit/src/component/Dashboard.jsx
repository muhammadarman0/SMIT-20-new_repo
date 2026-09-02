import React from "react";
import Sidebar from "./Sidebar";
import ProfileEdit from "../pages/Home";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0b0b10]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1">
        <ProfileEdit />
      </main>
    </div>
  );
};

export default Dashboard;
