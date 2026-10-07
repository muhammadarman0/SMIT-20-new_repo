import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Porfolio from "./Page/Porfolio";
import About from "./component/About";
import Skills from "./component/Skill";
import Layout from "./Page/Layout";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<Porfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
