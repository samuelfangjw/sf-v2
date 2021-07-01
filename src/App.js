import React from "react";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="projects" />
      <Projects />
    </>
  );
};

export default App;
