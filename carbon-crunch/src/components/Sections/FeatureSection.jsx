import React from "react";
import FeatureCard from "../Card/FeatureCard";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="features">
      <h2 className="section-title">Why Carbon Crunch?</h2>
      <div className="feature-grid">
        <FeatureCard
          title="Automated Data Collection"
          description="Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
        />
        <FeatureCard
          title="Monitoring & Reporting"
          description="Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
        />
        <FeatureCard
          title="Monitoring & Reporting"
          description="Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
        />
        <FeatureCard
          title="Simplified Certification Process"
          description="Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
        />
        <FeatureCard
          title="AI-Driven Insights"
          description="Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
        />
        <FeatureCard
          title="AI-Driven Insights"
          description="Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
        />
      </div>
    </section>
  );
};

export default FeatureSection;
