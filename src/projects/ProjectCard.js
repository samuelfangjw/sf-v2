import React from "react";
import PropTypes from "prop-types";
import ProjectTag from "./ProjectTag";

const ProjectCard = (props) => {
  const { name, description, image, tech, link } = props;
  const imgAlt = name + " image";

  return (
    <a href={link} className="flex">
    <div className="flex flex-col max-w-sm rounded-sm overflow-hidden shadow-lg m-5">
      <img
        className="object-scale-down h-60 m-auto p-2 flex-shrink-0"
        src={image}
        alt={imgAlt}
      />
      <div className="mx-6 my-4 flex-grow">
        <div className="font-medium text-base text-gray-darker mb-4">
          {name}
        </div>
        <p className="font-normal text-gray-dark text-sm mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap mx-6 my-2 py-2 border-t border-gray-light">
        {tech.map((name) => (
          <ProjectTag name={name} key={name} />
        ))}
      </div>
    </div>
    </a>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
};

export default ProjectCard;
