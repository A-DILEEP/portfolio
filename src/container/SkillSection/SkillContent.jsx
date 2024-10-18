import React from "react";
import Skills from "../../components/skills/Skills";
import "./SkillContent.css";
const SkillContent = () => {
  return (
    <div className="SKillContent">
      <div className="skillHeading">
        <h3>Skills : </h3>
      </div>
      <div className="SkillText">
        <div className="item1">
          <Skills text="HTML" />
        </div>
        <div className="item2">
          <Skills text="CSS" />
        </div>
        <div className="item3">
          <Skills text="Javascript" />
        </div>
        <div className="item4">
          <Skills text="React.js" />
        </div>
        <div className="item5">
          <Skills text="Express.js" />
        </div>
        <div className="item6">
          <Skills text="MongoDB" />
        </div>
        <div className="item7">
          <Skills text="SQL"/>
        </div>
        <div className="item8">
          <Skills text="Firebase"/>
        </div>
        <div className="item9">
          <Skills text="C++" />
        </div>
        <div className="item10">
          <Skills text="Python" />
        </div>
        <div className="item11">
          <Skills text="Git" />
        </div>
        <div className="item12">
          <Skills text="Github" />
        </div>

      </div>
    </div>
  );
};

export default SkillContent;
