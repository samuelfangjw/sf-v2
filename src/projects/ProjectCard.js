import React from "react";
import PropTypes from "prop-types";

const ProjectCard = (props) => {
  const { name, description, image } = props;
  const imgAlt = name + " image";

  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-5">
      <img className="object-scale-down h-64 m-auto p-2" src={image} alt={imgAlt} />
      <div className="mx-6 my-4 border-b border-gray-light">
        <div className="font-medium text-base text-gray-darker mb-4">
          {name}
        </div>
        <p className="font-normal text-gray-dark text-sm mb-4">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ProjectCard;
