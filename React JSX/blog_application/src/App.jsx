import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp";
import  Login  from "./Pages/Auth/Login";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/login" element={<Login />}/>

   </Routes>
   </BrowserRouter> 
  )
};

export default App;
