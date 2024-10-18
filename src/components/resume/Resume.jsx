import React from "react";
import DileepResume from '../../assets/DileepResume.pdf'
import './Resume.css'
const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = DileepResume;
    link.setAttribute('download','DileepResume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Resume">
      <p onClick={downloadResume}>Download Resume</p>
    </div>
  );
};

export default Resume;
