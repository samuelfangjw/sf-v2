import teammatesImg from "./projectimages/teammates.png";
import sourceacademyImg from "./projectimages/sourceacademy.png";
import strawhatsImg from "./projectimages/strawhats.png";
import carboneconomyImg from "./projectimages/carboneconomy.png";
import colabImg from "./projectimages/colab.png";
import luminderImg from "./projectimages/luminder.png";
import foodcacheImg from "./projectimages/foodcache.png";

const teammates = {
  name: "TEAMMATES",
  description:
    "An online feedback management system for education used by more than 800,000 users worldwide.",
  image: teammatesImg,
  tech: ["angular", "googlecloud", "ts", "javaee"],
  link: "https://github.com/TEAMMATES/teammates",
};

const sourceAcademy = {
  name: "Source Academy",
  description:
    "The Source Academy is a computer-mediated learning environment for studying the structure and interpretation of computer programs. My primary responsibility was the development of an online interactive textbook where readers can play with code snippets without leaving the context of the textbook.",
  image: sourceacademyImg,
  tech: ["react", "node", "ts", "js"],
  link: "https://sourceacademy.org/sicpjs/index",
};

const strawhats = {
  name: "StrawHats",
  description:
    "A scalable web action site for collectibles with live video streaming capabilities.",
  image: strawhatsImg,
  tech: ["react", "aws", "node", "express", "docker", "socketio", "mux", "js"],
  link: "https://github.com/StrawHats12/CS3219_strawhats",
};

const carboneconomy = {
  name: "Carbon Economy",
  description:
    "An API and online Dashboard that helps tackle carbon pollution. Carbon Economy incentivises businesses and consumers to make greener decisions through our green credits system and smart visualisation dashboard backed by a cryptographically verifiable transactions.",
  image: carboneconomyImg,
  tech: ["react", "aws", "node", "express", "deckgl", "js"],
  link: "https://github.com/CarbonEconomy/CarbonEconomy",
};

const colab = {
  name: "CoLAB",
  description:
    "CoLAB (Command Line Address Book) is a desktop app for students currently enrolled in a university to manage their school projects. It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, CoLAB can get your project management tasks done faster than traditional GUI apps.",
  image: colabImg,
  tech: ["javafx", "java"],
  link: "https://ay2021s2-cs2103t-t11-2.github.io/tp/",
};

const luminder = {
  name: "LuminDER",
  description:
    "LuminDER is a dating app for NUS students made in 24 hours for Hack & Roll 2020. Its name is a wordplay on Tinder and it takes on the familiar interface of LumiNUS, NUS' learning management system (LMS).",
  image: luminderImg,
  tech: ["react", "express", "mongodb", "node", "js"],
  link: "https://github.com/samuelfangjw/luminder",
};

const foodcache = {
  name: "FoodCache",
  description:
    "FoodCache is a food management mobile app that helps reduce food wastage by keeping track of expiring ingredients, suggesting recipes for meals to minimize food waste and acting as a platform to share excess food and ingredients with friends and family.",
  image: foodcacheImg,
  tech: ["androidstudio", "java"],
  link: "https://github.com/samuelfangjw/FoodCache",
};

const projectdescriptions = [
  teammates,
  sourceAcademy,
  strawhats,
  carboneconomy,
  colab,
  luminder,
  foodcache,
];

export default projectdescriptions;
