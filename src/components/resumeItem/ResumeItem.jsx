import React from "react";
import "./ResumeItem.css";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, grade, plc }) => {
  return (
    <div className="resume_item">
      <div className="resume_icon">{icon}</div>

      <span className="resume_date">{year}</span>
      <h3 className="resume_subtitle">{parse(title)}</h3>
      <h4 className="resume_grade">{grade}</h4>
      <p className="resume_plc">{plc}</p>
      
    </div>
  );
};

export default ResumeItem;
