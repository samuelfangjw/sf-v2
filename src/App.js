import React from "react";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Projects from "./projects/Projects";

const App = () => {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Hero />
      <div id="projects" />
      <Projects />
    </div>
  );
};

export default App;
