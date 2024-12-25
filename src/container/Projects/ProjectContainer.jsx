import React from "react";
import Projects from "../../components/projects/Projects";
import img2 from "../../assets/chat.png";
import task from "../../assets/task-management.png";
import nexcent from "../../assets/nexcent.jpeg";
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
            title={"Task Management App"}
            img={task}
            miniDesc={" Full-stack Web application to efficiently manage tasks"}
            projectInfo={
              " Designed and developed a task management web app that features CRUD operations for tasks, real-time updates,and a user-friendly interface. The front-end is built with React.js, styled with CSS modules, and the back-end ispowered by Node.js and Express.js. MongoDB is used as the database to store tasks."
            }
            tools={"React.js, CSS, Node.js, Express.js, MongoDB, GitHub"}
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
      </div>
    </div>
  );
};

export default ProjectContainer;
