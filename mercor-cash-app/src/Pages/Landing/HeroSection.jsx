import React from "react";
import IntroCube from "../../assets/images/intro-cube 1.png";
import IntroCubes from "../../assets/images/intro-cubes 1.png";
import IntroPillar from "../../assets/images/intro-pillar 1.png";
import IntroStairs from "../../assets/images/intro-stairs 1.png";
import centeredVector from "../../assets/svgs/Vector.svg";
import './HeroSection.scss'
import Navbar from "./Navbar.jsx";
import HeroMain from "./HeroMain";
import HeroBottom from "./HeroBottom.jsx";

const HeroSection = () => {
  return (
    <section className="HeroSection section-wrapper">
      <img className="centere-vector" src={centeredVector} alt="" />
      <img className="intro-cube" src={IntroCube} alt="" />
      <img className="intro-cubes" src={IntroCubes} alt="" />
      <img className="intro-pillar" src={IntroPillar} alt="" />
      <img className="intro-stairs" src={IntroStairs} alt="" />

      <Navbar />

      <HeroMain />

      <HeroBottom />

      {/* <div>Down Arrow</div> */}
    </section>
  );
};

export default HeroSection;
