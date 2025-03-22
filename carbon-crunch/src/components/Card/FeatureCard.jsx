import React from "react";
// import "./FeatureCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons"; 

const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <FontAwesomeIcon icon={faCube} className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
