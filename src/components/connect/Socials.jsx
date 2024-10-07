import React from "react";
import "./socials.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/mynetwork/grow/" target="__blank">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.linkedin.com/mynetwork/grow/" target="__blank">
        <SiGmail size={30} />
      </a>
      <a href="https://www.linkedin.com/mynetwork/grow/" target="__blank">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/mynetwork/grow/" target="__blank">
        <FaDiscord size={30} />
      </a>
    </div>
  );
};

export default Socials;
