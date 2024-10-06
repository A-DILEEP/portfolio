import React from "react";
import img from "../../assets/HCL-Technologies-Symbol.png";
import "./experience.css";
const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience :</h3>
      <div className="experienceInfo">
        <div className="icon">
          <img src={img} alt="HCL TECH" />
        </div>
        <div className="experienceHeading">
          <h4>HCL INTERN :</h4>
          <p>
            Developed a C++ module for unit conversion which converts both
            currency and temperature values to other values on user input .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
