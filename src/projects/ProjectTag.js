import React from "react";
import PropTypes from "prop-types";

const colors = {
  blue: "blue",
  green: "green",
  yellow: "yellow"
}

export const tagNames = {
  js: {
    color: colors.green,
    name: "JavaScript"
  },
  ts: {
    color: colors.green,
    name: "TypeScript"
  },
  java: {
    color: colors.green,
    name: "Java"
  },
  javaee: {
    color: colors.green,
    name: "Java EE"
  },
  react: {
    color: colors.blue,
    name: "ReactJS"
  },
  angular: {
    color: colors.blue,
    name: "Angular"
  },
  androidstudio: {
    color: colors.blue,
    name: "Android Studio"
  },
  javafx: {
    color: colors.blue,
    name: "JavaFX"
  },
  express: {
    color: colors.yellow,
    name: "Express"
  },
  googlecloud: {
    color: colors.yellow,
    name: "Google Cloud"
  },
  firestore: {
    color: colors.yellow,
    name: "Cloud Firestore"
  },
  mongodb: {
    color: colors.yellow,
    name: "MongoDB"
  },
  node: {
    color: colors.yellow,
    name: "Node.js"
  },
}

const ProjectTag = (props) => {
  const tag = tagNames[props.name];
  
  const { name, color } = tag;

  const bgColor = `bg-${color}-200`;
  const textColor = `text-${color}-700`;
  const className = ["block p-1 m-1 w-max  text-xs rounded", bgColor, textColor].join(" ");

  return <span className={className}>{name}</span>;
};

ProjectTag.propTypes = {
  name: PropTypes.string,
};

export default ProjectTag;
