import React, { useEffect, useRef, useState } from "react";
import "./ParallaxSlider.css";
import FeatureCard from "../Card/FeatureCard";

const features = [
  { title: "Automated Data Collection", description: "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.", imageUrl: "path/to/image.png" },
  { title: "Monitoring & Reporting", description: "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.", imageUrl: "path/to/image2.jpg" },
  { title: "Simplified Certification Process", description: "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.", imageUrl: "path/to/image3.jpg" },
  { title: "AI-Driven Insights", description: "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.", imageUrl: "path/to/image4.jpg" },
];

const ParallaxSlider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parallax-slider-wrapper">
      <div className="parallax-slider" ref={sliderRef} style={{ transform: `translateX(-${index * 100}%)` }}>
        {features.map((feature, idx) => (
          <div className="parallax-slide" key={idx}>
            <FeatureCard title={feature.title} description={feature.description} imageUrl={feature.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxSlider;


