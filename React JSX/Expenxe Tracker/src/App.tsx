import React from "react";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
