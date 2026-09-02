import React, { Profiler } from "react";
import Navbar from "./component/Navbar";
import { ProvideContext } from "./Context/ThemeContext";
// import Sidebar from "./component/Sidebar";
// import Dashboard from "./component/Dashboard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Setting from "./pages/Home";
import ProfileEdit from "./pages/Porfile";
import { ProfileProvider } from "./Context/ProfileContext";

const App = () => {
  return (
    <BrowserRouter>
      <ProvideContext>
        <ProfileProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/setting" element={<Setting />} />
              <Route path="/profile" element={<ProfileEdit />} />
            </Route>
          </Routes>
        </ProfileProvider>
      </ProvideContext>
    </BrowserRouter>
  );
};

export default App;
