import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Address from "./components/Address/Address";
import NavBars from "./components/Navbar/NavBars";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <NavBars language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/address" element={<Address language={language} />} />
      </Routes>
    </Router>
  );
};

export default App;
