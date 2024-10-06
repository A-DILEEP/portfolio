import Experience from "./components/experience/Experience";
import ProjectContainer from "./container/ProjectContainer";
import Aboutme from "./components/aboutme/Aboutme";
import './app.css'
function App() {
  return (
    <div className="app">
      <Aboutme/>
      <Experience/>
      <ProjectContainer/>
    </div>
    );
}

export default App;
