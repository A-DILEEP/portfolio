import React from "react";
import Skills from "../../components/skills/Skills";
import "./SkillContent.css";
const SkillContent = () => {
  return (
    <div className="SkillContent">
      <div className="skillHeading">
        <h3>Skills : </h3>
      </div>
      <div className="SkillText">
        <div className="item">
          <Skills text="HTML" />
        </div>
        <div className="item">
          <Skills text="CSS" />
        </div>
        <div className="item">
          <Skills text="SASS" />
        </div>
        <div className="item">
          <Skills text="Javascript" />
        </div>
        <div className="item">
          <Skills text="React.js" />
        </div>
        <div className="item">
          <Skills text="Express.js" />
        </div>
        <div className="item">
          <Skills text="MongoDB" />
        </div>
        <div className="item">
          <Skills text="SQL"/>
        </div>
        <div className="item">
          <Skills text="Firebase"/>
        </div>
        <div className="item">
          <Skills text="C++" />
        </div>
        <div className="item">
          <Skills text="Python" />
        </div>
        <div className="item">
          <Skills text="Git" />
        </div>
        <div className="item">
          <Skills text="Github" />
        </div>
      </div>
    </div>
  );
};

export default SkillContent;
