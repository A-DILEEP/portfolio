import Experience from "./components/experience/Experience";
import ProjectContainer from "./container/Projects/ProjectContainer";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from './container/SkillSection/SkillContent'
import Socials from "./components/connect/Socials";
import "./app.css";
function App() {
  return (
    <div className="app">
      <Aboutme />
      <Experience />
      <ProjectContainer />
      <div className="mySocials">
        <Socials />
      </div>
      <Skills/>
    </div>
  );
}

export default App;
