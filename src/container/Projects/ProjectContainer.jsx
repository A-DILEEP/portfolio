import React from "react";
import Projects from "../../components/projects/Projects";
import img2 from '../../assets/chat.png'
import portfolio from "../../assets/portfolio.png"
import nexcent from "../../assets/nexcent.jpeg"
import "./project.css";
const ProjectContainer = () => {
  return (
    <div className="projects">
      <h3>Projects :</h3>
      <div className="myProjects">
        <Projects
          title={"Chat App"}
          img={img2}
          projectInfo={
            " Developing a dynamic real-time chat application using React.js for the front-end, SASS for styling, and Firebasefor managing user authentication and chat databases."
          }
          miniDesc={" Real-time chat application using React.js"}
          tools={"React.js, SASS, Express.js, Firebase, Github"}
        />
        <Projects
          title={"Nexcent Landing Page"}
          img={nexcent}
          miniDesc={"Responsive Landing page created with react"}
          projectInfo={
            "Developed a single-page web application for Nexcent using React.js, implementing a smooth scrolling feature thatimproved user navigation and adhered precisely to Figma design mockups "
          }
          tools={"React.js, Github"}
        />
        <Projects
          title={"Portfolio"}
          img={portfolio}
          miniDesc={
            " A Responsive Interface designed to elegantly display my personal information and achievements"
          }
          projectInfo={
            " Developed a responsive personal website to elegantly showcase skills and achievements. Emphasizes modern designprinciples for optimal viewing across all devices."
          }
          tools={"HTML, CSS, JavaScript, W3Forms, Github"}
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
