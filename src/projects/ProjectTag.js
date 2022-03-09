import React from "react";
import PropTypes from "prop-types";

const colors = {
  blue: "bg-blue-200 text-blue-700",
  green: "bg-green-200 text-green-700",
  yellow: "bg-yellow-200 text-yellow-700",
};

export const tagNames = {
  js: {
    color: colors.green,
    name: "JavaScript",
  },
  ts: {
    color: colors.green,
    name: "TypeScript",
  },
  java: {
    color: colors.green,
    name: "Java",
  },
  javaee: {
    color: colors.green,
    name: "Java EE",
  },
  react: {
    color: colors.blue,
    name: "ReactJS",
  },
  angular: {
    color: colors.blue,
    name: "Angular",
  },
  androidstudio: {
    color: colors.blue,
    name: "Android Studio",
  },
  deckgl: {
    color: colors.blue,
    name: "deck.gl",
  },
  javafx: {
    color: colors.blue,
    name: "JavaFX",
  },
  aws: {
    color: colors.yellow,
    name: "AWS",
  },
  docker: {
    color: colors.yellow,
    name: "Docker",
  },
  socketio: {
    color: colors.yellow,
    name: "Socket.IO",
  },
  mux: {
    color: colors.yellow,
    name: "MUX",
  },
  express: {
    color: colors.yellow,
    name: "Express",
  },
  googlecloud: {
    color: colors.yellow,
    name: "Google Cloud",
  },
  firestore: {
    color: colors.yellow,
    name: "Cloud Firestore",
  },
  mongodb: {
    color: colors.yellow,
    name: "MongoDB",
  },
  node: {
    color: colors.yellow,
    name: "Node.js",
  },
};

const ProjectTag = (props) => {
  const tag = tagNames[props.name];
  const { name, color } = tag;
  const className = "block p-1 m-1 w-max text-xs rounded " + color;

  return <span className={className}>{name}</span>;
};

ProjectTag.propTypes = {
  name: PropTypes.string,
};

export default ProjectTag;
