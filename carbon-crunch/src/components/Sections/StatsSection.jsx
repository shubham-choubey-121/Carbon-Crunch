import React from "react";
import "./StatsSection.css";

const statsData = [
  { percentage: "98%", text: "Of CEOs Agree Sustainability Is Their Responsibility" },
  { percentage: "37%", text: "Of The World’s Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track" },
  { percentage: "3X", text: "ESG High Performers Deliver A Higher Total Shareholder Return" },
  { percentage: "18%", text: "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050" }
];

const StatsSection = () => {
  return (
    <section className="stats">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.percentage}</h3>
          <p>{stat.text}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
