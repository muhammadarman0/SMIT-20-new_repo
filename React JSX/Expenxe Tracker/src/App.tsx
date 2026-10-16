import React from "react";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Transactions from "./Page/Transaction";
import Analytics from "./Page/Analytics";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
