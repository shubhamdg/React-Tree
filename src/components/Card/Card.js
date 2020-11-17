import React from "react";
import "./style.css";

const Card = ({ props }) => {
  return (
    <div className="card" style={{ backgroundColor: props.badge }}>
      <p>{props.companyname}</p>
    </div>
  );
};

export default Card;
