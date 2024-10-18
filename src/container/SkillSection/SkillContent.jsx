import React from "react";
import Skills from "../../components/skills/Skills";
const SkillContent = () => {
  return (
    <div className="SKillContent">
      <div className="skillHeading">Skills</div>
      <div className="SKillText">
        <Skills text="HTML" />
        <Skills text="CSS" />
        <Skills text="Javascript" />
        <Skills text="React.js" />
        <Skills text="Express.js" />
        <Skills text="MongoDB" />
        <Skills text="C++" />
        <Skills text="Python" />
        <Skills text="Git" />
        <Skills text="Github" />
      </div>
    </div>
  );
};

export default SkillContent;
