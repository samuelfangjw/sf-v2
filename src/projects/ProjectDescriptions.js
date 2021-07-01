import teammatesImg from "./projectimages/teammates.png";
import sourceacademyImg from "./projectimages/sourceacademy.png";
import colabImg from "./projectimages/colab.png";
import luminderImg from "./projectimages/luminder.png";
import foodcacheImg from "./projectimages/foodcache.png";

const teammates = {
  name: "TEAMMATES",
  description:
    "An online feedback management system for education used by more than 600,000 users worldwide.",
  image: teammatesImg,
  tech: ["angular", "googlecloud", "ts", "javaee"]
};

const sourceAcademy = {
  name: "Source Academy",
  description:
    "The Source Academy is a computer-mediated learning environment for studying the structure and interpretation of computer programs. My primary responsibility was the development of an online interactive textbook where readers can run code snippets from within the textbook.",
  image: sourceacademyImg,
  tech: ["react", "node", "ts", "js"]
};

const colab = {
  name: "CoLAB",
  description:
    "CoLAB (Command Line Address Book) is a desktop app for students currently enrolled in a university to manage their school projects. It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, CoLAB can get your project management tasks done faster than traditional GUI apps.",
  image: colabImg,
  tech: ["javafx", "java"]
};

const luminder = {
  name: "LuminDER",
  description:
    "LuminDER is a dating app for NUS students made in 24 hours for Hack & Roll 2020. Its name is a wordplay on Tinder and it takes on the familiar interface of LumiNUS, NUS' learning management system (LMS).",
  image: luminderImg,
  tech: ["react", "express", "mongodb", "node", "js"]
};

const foodcache = {
  name: "FoodCache",
  description:
    "FoodCache is a food management mobile app that helps reduce food wastage by keeping track of expiring ingredients, suggesting recipes for meals to minimize food waste and acting as a platform to share excess food and ingredients with friends and family.",
  image: foodcacheImg,
  tech: ["androidstudio", "java"]
};

const projectdescriptions = [
  teammates,
  sourceAcademy,
  colab,
  luminder,
  foodcache,
];

export default projectdescriptions;
