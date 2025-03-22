import FeatureSection from "./components/Sections/FeatureSection";
import StatsSection from "./components/Sections/StatsSection";
import HeroSection from "./components/Sections/HeroSection";
import ParallaxSlider from "./components/Slider/ParallaxSlider";

const App = () => {
  return (
    <div className="container">
      <ParallaxSlider />
      <FeatureSection />
      <HeroSection />
      <StatsSection />
    </div>
  );
};

export default App;
