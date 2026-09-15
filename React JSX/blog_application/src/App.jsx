import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Blog from "./Pages/Blog";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
