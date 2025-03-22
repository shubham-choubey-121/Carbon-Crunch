import React from "react";
// import "./StatsCard.css";

const StatsCard = ({ percentage, text, highlight }) => {
  return (
    <div className={`stats-card ${highlight ? "highlight" : ""}`}>
      <h3>{percentage}</h3>
      <p>{text}</p>
    </div>
  );
};

export default StatsCard;
