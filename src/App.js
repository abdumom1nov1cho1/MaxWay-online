import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact"
import Filials from "./Components/Pages/Filials"
import Korzinka from "./Components/Pages/Korzinka/Korzinka"
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/About" element={<About />} />;
        <Route path="/Contact" element={<Contact />} />;
        <Route path="/Filials" element={<Filials />} />;
        <Route path="/Korzinka" element={<Korzinka />} />;
        <Route path="/signIn" element={<SignIn />} />;
        <Route path="/signUp" element={<SignUp />} />;
      </Routes>
    </>
  );
}

export default App;
