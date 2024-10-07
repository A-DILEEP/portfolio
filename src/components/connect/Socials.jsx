import React from "react";
import "./socials.css";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Socials = () => {
  const gmail=(e)=>{
    e.preventDefault();
    window.location.href="mailto:dileepalla2003@gmail.com"
  }
  return (
    <div className="socials">
      <a href="https://linkedin.com/in/alla-dileep-073adr" target="__blank">
        <FaLinkedin size={30} />
      </a>
      <a href="href=mailto:dileepalla2003@gmail.com" onClick={gmail}>
        <SiGmail size={30} />
      </a>
      <a href="https://github.com/A-DILEEP" target="__blank">
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default Socials;
