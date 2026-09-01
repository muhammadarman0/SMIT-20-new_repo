import React from "react";
import Input from "./component/Input";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Dashboard/Home";
import Settings from "./pages/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import UserDetail from "./pages/UserDetail";
import ProtectedRoute from "./Router/ProtectedRoute";
import CourseProgress from "./pages/CourseProgress";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          {/* Nested Routing */}
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
                <Layout />
            }
          >
            {" "}
            <Route index element={<Home />} />
            <Route path="setting" element={<Settings />} />
            <Route path="user/:userId" element={<UserDetail />} />
            <Route path="user/:userId/progress" element={<CourseProgress />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
