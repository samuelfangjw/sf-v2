import React from "react";
import ProjectCard from "./ProjectCard";
import projectdescriptions from "./ProjectDescriptions";

const Projects = () => {
  return (
    <section id="projects" className="mt-5">
      <div className="container m-auto text-center">
        <h1 className="font-semibold text-3xl">Projects</h1>
        <p>
          This section features some of my work, including personal greenfield
          projects as well as open-source software I regularly contribute to.
        </p>
      </div>
      {projectdescriptions.map((project, idx) => (
        <ProjectCard {...project} key={idx} />
      ))}
    </section>
  );
};

export default Projects;
