import React from "react";
import { Link } from "react-router-dom";
import "./Grade.css";

const Grade = ({ grade, img, title }) => {
  return (
    <div className="grade">
      <Link to={`main/${grade}`}>
        <img
          src={img}
          alt={`${grade} img`}
          className="grade-img"
          name={grade}
        />
      </Link>
      <h5>{title}</h5>
    </div>
  );
};

export default Grade;
