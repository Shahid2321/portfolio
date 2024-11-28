// src/App.js
import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FootNav from "./components/Footnav";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <FootNav />
      </>
  );
};

export default App;
