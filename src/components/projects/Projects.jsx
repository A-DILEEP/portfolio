import React, { useEffect } from "react";
import "./projects.css";
import { scrollTrigger } from "../../animationGsap/Animation";
const Projects = ({ title, miniDesc, projectInfo, img, tools }) => {
  useEffect(()=>{
    scrollTrigger('.projectsDone');
  });
  return (
    <div className="project">
      <div className="logoImg">
        <img src={img} alt={title} />
      </div>
      <div className="projectsDone">
        <h4>{title}</h4>
        <p>{miniDesc}</p>
        <p>{projectInfo}</p>
        <p>Tools & Technologies Used : {tools}</p>
      </div>
    </div>
  );
};

export default Projects;
