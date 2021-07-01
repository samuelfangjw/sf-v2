import teammatesImg from "./projectimages/teammates.png";
import sourceacademyImg from "./projectimages/sourceacademy.png";
import colabImg from "./projectimages/colab.png";
import luminderImg from "./projectimages/luminder.png";

const teammates = {
  name: "TEAMMATES",
  description:
    "An online feedback management system for education used by more than 600,000 users worldwide.",
  image: teammatesImg,
};

const sourceAcademy = {
  name: "Source Academy",
  description:
    "The Source Academy is a computer-mediated learning environment for studying the structure and interpretation of computer programs. My primary responsibility was the development of an online interactive textbook where readers can run code snippets from within the textbook.",
  image: sourceacademyImg,
};

const colab = {
  name: "CoLAB",
  description:
    "CoLAB (Command Line Address Book) is a desktop app for students currently enrolled in a university to manage their school projects. It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, CoLAB can get your project management tasks done faster than traditional GUI apps.",
  image: colabImg,
};

const luminder = {
  name: "LuminDER",
  description:
    "LuminDER is a dating app for NUS students made in 24 hours for Hack & Roll 2020. Its name is a wordplay on Tinder and it takes on the familiar interface of LumiNUS, NUS' learning management system (LMS).",
  image: luminderImg,
};

const projectdescriptions = [teammates, sourceAcademy, colab, luminder];

export default projectdescriptions;
