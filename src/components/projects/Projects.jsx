import React from "react";
import "./projects.css";
const Projects = ({ title, miniDesc, projectInfo, img, tools }) => {
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
