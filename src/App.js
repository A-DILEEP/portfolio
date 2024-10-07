import Experience from "./components/experience/Experience";
import ProjectContainer from "./container/ProjectContainer";
import Aboutme from "./components/aboutme/Aboutme";
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
    </div>
  );
}

export default App;
