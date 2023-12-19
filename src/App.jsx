import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills"
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Themes from "./components/themes/Themes";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Themes/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About/>} />
        <Route path="Skills" element={<Skills/>} />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
