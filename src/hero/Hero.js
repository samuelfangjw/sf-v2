import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { mailto, links } from "../Constants";

const socialButton = (icon, link) => (
  <a href={link} className="mr-3">
    <FontAwesomeIcon icon={icon} size="lg"/>
  </a>
);

const email = socialButton(faEnvelope, mailto);
const github = socialButton(faGithub, links.github);
const linkedin = socialButton(faLinkedin, links.linkedin);

const socials = (
  <div className="mt-3">
    {email}
    {github}
    {linkedin}
  </div>
);

const Hero = () => {
  return (
    <section>
      <div className="py-20 bg-gradient-to-r from-blue-500 to-indigo-900">
        <div className="container mx-auto p-5 text-white">
          <h1 className="font-semibold text-3xl">
            Hi there! 👋 I&apos;m Samuel,
          </h1>
          <p>
            a computer science student at the National University of Singapore.
          </p>
          {socials}
        </div>
      </div>
    </section>
  );
};

export default Hero;
