import React from "react";
import IntroPhone from "../../assets/images/intro-phone 1.png";
import "./HeroMain.scss"

const HeroMain = () => {
  return (
    <div className="section-main">
      <div className="hero-center">
        <h1>Cash</h1>
        <img src={IntroPhone} alt="" />
        <h1>App</h1>
      </div>
    </div>
  );
};

export default HeroMain;
