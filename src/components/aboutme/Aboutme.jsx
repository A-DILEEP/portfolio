import React from "react";
import "./aboutMe.css";
const Aboutme = () => {
  return (
    <div className="aboutMe">
      <div className="heading">
        <h1>
          HI , This is <span style={{ color: "#2aebb4" }}>Dileep</span>!
        </h1>
      </div>
      <div className="aboutMeInfo">
        <h3>About Me :</h3>
        <p>
          My name is Dileep, and I am currently pursuing my Bachelor of
          Engineering in Computer Science from Sathyabama Institute of Science
          and Technology. I have hands-on experience in full-stack development,
          particularly with the MERN stack, and have worked on projects
          involving React, Express, and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
