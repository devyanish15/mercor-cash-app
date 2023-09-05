import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import TwitchIcon from "../../assets/svgs/Frame.svg";
import InstaIcon from "../../assets/svgs/Frame-2.svg";
import TwitterIcon from "../../assets/svgs/Frame-1.svg";
import "./HeroBottom.scss";

const HeroBottom = () => {
  return (
    <div className="section-bottom">
      <div className="btns-container">
        <button className="download-btn">
          <IoLogoApple />
          App Store
        </button>
        <button className="download-btn">
          <IoLogoGooglePlaystore />
          Google Play
        </button>
      </div>

      <div className="right-side">
        <p className="bottom-text">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <div className="social-icons">
          <img src={TwitchIcon} alt="" srcset="" />
          <img src={TwitterIcon} alt="" srcset="" />
          <img src={InstaIcon} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
