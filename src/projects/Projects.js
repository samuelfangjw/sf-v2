import React from "react";
import ProjectCard from "./ProjectCard";
import projectdescriptions from "./ProjectDescriptions";

const Projects = () => {
  return (
    <section className="mt-5">
      <div className="container m-auto text-center">
        <h1 className="font-semibold text-3xl mb-1">Projects</h1>
        <p className="mx-1">
          This section features some of my more notable work, including personal greenfield
          projects as well as open-source software I regularly contribute to.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-2 items-stretch">
        {projectdescriptions.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
