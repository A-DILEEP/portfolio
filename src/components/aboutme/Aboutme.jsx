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
          and Technology.A Passionate and enthusiastic Full Stack Developer with
          hands-on experience in the MERN (MongoDB, Ex press.js, React, Node.js)
          stack. As a proactive student developer, I have built responsive web
          applications and real-time projects, demonstrating a quick ability to
          learn and adapt in fast-paced environments. Skilled in both front-end
          and back-end development, with a focus on building intuitive user
          experiences. Eager to contribute to a real time projects , bringing
          creativity, strong problem-solving skills, and a commitment to
          continuous improvement
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
