import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/signup" element={<SignUp />}/>
   </Routes>
   </BrowserRouter> 
  )
};

export default App;
